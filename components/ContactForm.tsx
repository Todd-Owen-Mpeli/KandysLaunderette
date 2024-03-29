import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import React, {useState, FC} from "react";
import {sendContactForm} from "../lib/api";
import DOMPurify from "isomorphic-dompurify";
import ReCAPTCHA from "react-google-recaptcha";
import {useFormik, Formik, Field, Form} from "formik";
import {fadeIn, fadeInUp, stagger} from "../animations/animations";

interface IProps {
	title: string;
	email: string;
	formText: string;
	paragraph: string;
	phoneNumber: string;
	image: {
		altText: string;
		sourceUrl: string;
	};
	backgroundImage: string;
}

const ContactForm: FC<IProps> = ({
	title,
	email,
	image,
	formText,
	paragraph,
	phoneNumber,
	backgroundImage,
}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden w-full lg:max-w-[75rem] mx-auto py-8 text-medium text-darkGrey text-center font-[400]";
		} else {
			contentStyling =
				"block w-full lg:max-w-[75rem] mx-auto py-8 text-medium text-darkGrey text-center font-[400]";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	const initState: {
		error: string;
		isLoading: boolean;
	} = {isLoading: false, error: " "};
	const [state, setState]: any = useState(initState);
	const {
		isLoading,
		error,
	}: {
		error: string;
		isLoading: boolean;
	} = state;
	// A custom validation function. This must return an object
	// which keys are symmetrical to our values/initialValues
	const validate: any = (values: any) => {
		const errors: any = {};
		if (!values?.firstName) {
			errors.firstName = "Required*";
		} else if (values?.firstName.length >= 16) {
			errors.firstName = "Must be 15 characters or less";
		}

		if (!values.lastName) {
			errors.lastName = "Required*";
		} else if (values.lastName.length >= 21) {
			errors.lastName = "Must be 20 characters or less";
		}

		if (!values?.email) {
			errors.email = "Required*";
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values?.email)
		) {
			errors.email = "Invalid email address";
		}

		if (!values?.subject) {
			errors.subject = "Required*";
		} else if (values?.subject.length <= 0) {
			errors.subject = "Please inform us about the topic.";
		}

		if (!values?.message) {
			errors.message = "Required*";
		} else if (values?.message.length <= 0) {
			errors.message = "Please tell us about your enquiry.";
		}

		return errors;
	};

	// Google ReCaptcha Validation
	const [reCaptchaResult, setReCaptchaResult] = useState(null);
	const googleReCaptchaValidate = (value: any) => {
		return value;
	};

	const handleReCaptchaChange = (response: any) => {
		const result = googleReCaptchaValidate(response);
		setReCaptchaResult(result);
	};

	/* Contact Form Fields
	And Initial Values */
	const formik: any = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			subject: "",
			message: "",
		},
		validate,
		onSubmit: async (values: any) => {
			setState((prev: any) => ({
				...prev,
				isLoading: true,
			}));
			if (reCaptchaResult !== null || reCaptchaResult !== undefined) {
				try {
					await sendContactForm(values);
					setState(initState);
				} catch (error) {
					setState((prev: any) => ({
						...prev,
						isLoading: false,
						// error: error.message,
					}));
				}
			} else {
				console.log(
					"Error Message: Something went wrong with your Google Recaptcha validation. Please try again."
				);
			}
		},
	});

	return (
		<section className="relative overflow-hidden">
			<div className="container px-4 mx-auto lg:px-0">
				<div className="overflow-hidden bg-white pt-28 mb-28">
					<div className="mx-auto mb-20 text-center">
						<h2 className="text-center tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl py-4">
							{title}
						</h2>
						<motion.div
							variants={fadeIn}
							className={isParagraphContent(paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
						/>
					</div>
					<div className="flex flex-col justify-center gap-4 lg:flex-row lg:items-center">
						<div className="w-full p-0 lg:w-1/2 lg:p-8">
							<div className="mx-auto overflow-hidden max-w-max rounded-3xl">
								<Image
									width={550}
									height={550}
									src={`${image?.sourceUrl}`}
									alt={`${image?.altText} Image`}
									className="w-full h-[400px] object-cover object-contain transition duration-1000 ease-in-out transform hover:scale-105"
								/>
							</div>
						</div>
						<motion.div
							variants={stagger}
							className="flex flex-col items-center justify-center w-full p-0 pt-8 lg:w-1/2 lg:p-8 lg:items-start"
						>
							<motion.div variants={fadeIn}>
								<p className="text-center lg:text-left mb-4 text-sm font-[600] uppercase tracking-px">
									Email
								</p>
								<ul className="mb-12">
									<li className="text-medium text-darkGrey font-[400]">
										<Link href={`mailto:${email}`}>{email}</Link>
									</li>
								</ul>
							</motion.div>
							<motion.div variants={fadeIn}>
								<p className="text-center lg:text-left mb-4 text-sm font-[600] uppercase tracking-px">
									Phone
								</p>
								<ul className="mb-14">
									<li className="text-medium text-darkGrey font-[400]">
										<Link href={`tel:${phoneNumber}`}>{phoneNumber}</Link>
									</li>
								</ul>
							</motion.div>
							<motion.div variants={fadeIn}>
								<p className="text-center lg:text-left mb-4 text-sm font-[600] uppercase tracking-px">
									Address
								</p>
								<ul>
									<li className="text-medium text-darkGrey font-[400]">
										High St, Swansea,
									</li>
									<li className="text-medium text-darkGrey font-[400]">
										SA1 1NW, Wales
									</li>
								</ul>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</div>
			<div
				style={{
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundImage: `linear-gradient(
							0deg,
							rgba(221, 69, 119, 0.65),
							rgba(221, 69, 119, 0.15)
						),url("${backgroundImage}")`,
				}}
			>
				<div className="container relative z-10 px-4 py-20 mx-auto lg:px-0">
					<Formik
						initialValues={formik?.initialValues}
						onSubmit={formik?.onSubmit}
					>
						<Form
							className="mx-auto bg-white rounded-lg px-11 pt-9 pb-11 bg-opacity-90 transition-all ease-in-out duration-[0.5s] md:max-w-xl shadow-12xl"
							style={{backdropFilter: "blur(5px)"}}
						>
							<motion.h3
								variants={fadeIn}
								className="mx-auto mb-8 text-xl font-semibold text-center uppercase"
							>
								{formText}
							</motion.h3>

							{isLoading ? (
								<motion.div
									variants={fadeIn}
									className="flex items-center justify-center my-4 mb-8 gap-x-2"
								>
									<h4 className="text-lg font-semibold text-center uppercase text-brightGreen">
										Message sent
									</h4>
									<Image
										src={`/img/icons/checkMarkGreen.png`}
										alt={`Message Sent verification Icon`}
										className="w-[22px] h-[22px] object-contain object-center"
									/>
								</motion.div>
							) : null}

							<motion.div variants={stagger} className="flex flex-col gap-4">
								<motion.div variants={fadeInUp}>
									{formik?.touched?.firstName && formik?.errors?.firstName ? (
										<div>
											<p className="py-1 text-left text-tiny text-pink font-[400]">
												{formik?.errors?.firstName}
											</p>
										</div>
									) : null}
									<Field
										id="firstName"
										name="firstName"
										placeholder="First Name"
										onBlur={formik?.handleBlur}
										onChange={formik?.handleChange}
										value={formik?.values?.firstName}
										className="px-4 py-3 w-full text-darkGrey font-[400] placeholder-darkGrey bg-white bg-opacity-50 outline-none border-[1px] border-darkGrey active:border-pink focus:border-pink rounded-lg focus:ring-[1px] focus:ring-pink"
									/>
								</motion.div>
								<motion.div variants={fadeInUp}>
									{formik?.touched?.lastName && formik?.errors?.lastName ? (
										<div>
											<p className="py-1 text-left text-tiny text-pink font-[400]">
												{formik?.errors?.lastName}
											</p>
										</div>
									) : null}
									<Field
										id="lastName"
										name="lastName"
										placeholder="Last Name"
										onBlur={formik?.handleBlur}
										onChange={formik?.handleChange}
										value={formik?.values?.lastName}
										className="px-4 py-3 w-full text-darkGrey font-[400] placeholder-darkGrey bg-white bg-opacity-50 outline-none border-[1px] border-darkGrey active:border-pink focus:border-pink rounded-lg focus:ring-[1px] focus:ring-pink"
									/>
								</motion.div>
								<motion.div variants={fadeInUp}>
									{formik?.errors?.email ? (
										<div>
											<p className="py-1 text-left text-tiny text-pink font-[400]">
												{formik?.errors?.email}
											</p>
										</div>
									) : null}
									<Field
										id="email"
										name="email"
										type="email"
										placeholder="Email Address"
										onBlur={formik?.handleBlur}
										onChange={formik?.handleChange}
										value={formik?.values?.email}
										className="px-4 py-3 w-full text-darkGrey font-[400] placeholder-darkGrey bg-white bg-opacity-50 outline-none border-[1px] border-darkGrey active:border-pink focus:border-pink rounded-lg focus:ring-[1px] focus:ring-pink"
									/>
								</motion.div>
								<motion.div variants={fadeInUp}>
									{formik?.touched?.subject && formik?.errors?.subject ? (
										<div>
											<p className="py-1 text-left text-tiny text-pink font-[400]">
												{formik?.errors?.subject}
											</p>
										</div>
									) : null}
									<Field
										id="subject"
										name="subject"
										type="text"
										placeholder="Subject"
										onBlur={formik?.handleBlur}
										onChange={formik?.handleChange}
										value={formik?.values?.subject}
										className="px-4 py-3 w-full text-darkGrey font-[400] placeholder-darkGrey bg-white bg-opacity-50 outline-none border-[1px] border-darkGrey active:border-pink focus:border-pink rounded-lg focus:ring-[1px] focus:ring-pink"
									/>
								</motion.div>
								<motion.div variants={fadeInUp}>
									{formik?.touched?.message && formik?.errors?.message ? (
										<div>
											<p className="py-1 text-left text-tiny text-pink font-[400]">
												{formik?.errors?.message}
											</p>
										</div>
									) : null}
									<textarea
										rows={5}
										id="message"
										name="message"
										placeholder="Your message"
										onBlur={formik?.handleBlur}
										onChange={formik?.handleChange}
										value={formik?.values?.message}
										className="p-4 w-full h-48 font-[400] text-darkGrey placeholder-darkGrey bg-white bg-opacity-50 outline-none border-[1px] border-darkGrey active:border-pink focus:border-pink resize-none rounded-lg focus:ring-[1px] focus:ring-pink"
									></textarea>
								</motion.div>
								<motion.div variants={fadeInUp}>
									<ReCAPTCHA
										sitekey={`6Lc2EG8lAAAAAMcyohMzubokFz4QCo4oWkpTumhi`}
										onChange={handleReCaptchaChange}
									/>
								</motion.div>
								<motion.button
									variants={fadeInUp}
									// isLoading={isLoading}
									onClick={formik.handleSubmit}
									disabled={
										!formik?.values?.firstName ||
										!formik?.values?.lastName ||
										!formik?.values?.email ||
										!formik?.values?.subject ||
										!formik?.values?.message ||
										reCaptchaResult === null ||
										reCaptchaResult === undefined
									}
									className="py-4 px-9 w-full text-white text-medium font-[400] rounded-xl shadow-4xl disabled:bg-opacity-50 disabled:cursor-not-allowed bg-pink active:bg-yellow hover:bg-yellow transition-all ease-in-out duration-[0.5s]"
									type="submit"
								>
									Send Message
								</motion.button>
							</motion.div>
						</Form>
					</Formik>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
