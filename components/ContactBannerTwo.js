/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import {motion} from "framer-motion";
import {fadeInUp, fadeIn, stagger} from "../animations/animations";

const ContactBannerTwo = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = "hidden text-white text-center text-medium leading-8";
		} else {
			contentStyling = "block text-white text-center text-medium leading-8";
		}
		return contentStyling;
	}

	function createParagraphMarkup() {
		return {
			__html: DOMPurify.sanitize(`${props?.themesOptions?.openingHours}`),
		};
	}

	return (
		<section
			id="#contactBannerTwo"
			className="py-20 px-4 lg:px-0"
			style={{
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundImage: `linear-gradient(
							0deg,
							rgba(221, 69, 119, 0.45),
							rgba(221, 69, 119, 0.45)
						),url("${props.backgroundImage}"`,
			}}
		>
			<div className="container mx-auto p-0">
				<motion.div
					variants={stagger}
					className="flex flex-col lg:flex-row py-8 gap-y-28 lg:gap-10 px-8 justify-between items-center"
				>
					<motion.div variants={fadeInUp}>
						<h2 className="pb-10 text-white text-center text-2xl sm:text-3xl lg:text-4xl">
							{props?.title}
						</h2>
						<span className="gap-2 flex flex-row text-medium text-white items-center justify-center">
							Email:
							<Link
								href={`mailto:${props?.themesOptions?.email}`}
								target="blank"
								className="flex flex-row justify-center items-center gap-2 text-white text-medium text-center hover:text-fadedPink transition-all ease-in-out duration-[0.5s]"
							>
								{props?.themesOptions?.email}
							</Link>
						</span>

						<div className="flex flex-row justify-center items-center text-white gap-2 py-4">
							<span className="text-white text-center text-medium">
								Tel:
								<Link
									href={`tel:${props?.themesOptions?.phoneNumberOptionTwo}`}
								>
									{props?.themesOptions?.phoneNumberOptionTwo}
								</Link>
							</span>
							|
							<span className="text-white text-center text-medium">
								<Link href={`tel:${props?.themesOptions?.phoneNumber}`}>
									{props?.themesOptions?.phoneNumber}
								</Link>
							</span>
						</div>
						<div
							className={isParagraphContent(props?.themesOptions?.openingHours)}
							dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
						/>
					</motion.div>
					<motion.div variants={fadeIn}>
						<Link
							href={`${props?.buttonLink?.url}`}
							target={`${props?.buttonLink?.target}`}
						>
							<a className="py-4 px-12 md:py-6 xl:px-20 font-[700] text-white text-base bg-pink rounded-lg hover:bg-yellow transition-all ease-in-out duration-[0.5s]">
								{props?.buttonLink?.title}
							</a>
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default ContactBannerTwo;
