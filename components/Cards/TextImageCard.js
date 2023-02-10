import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn, fadeInUp} from "../../animations/animations";
import styles from "../../styles/components/TextImage.module.scss";

const TextImageCard = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden w-full lg:max-w-[75rem] text-darkGrey text-medium";
		} else {
			contentStyling =
				"block w-full lg:max-w-[75rem] text-darkGrey text-medium";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	/* Check if Button Link content is null
	 And Displays content if it isn't null */
	function isButtonLink(isButtonLink) {
		let contentStyling;
		const tailwindStyling = "mt-5 w-[fit-content] flex flex-col justify-left";
		if (isButtonLink === null) {
			contentStyling = `hidden ${tailwindStyling}`;
		} else {
			contentStyling = `block ${tailwindStyling}`;
		}
		return contentStyling;
	}

	/* Displays left or Right Image depending on 
    what the user selected in the dashboard */
	let rightImageDisplay = "block";
	let leftImageDisplay = "none";

	if (props.displayImage === "Left") {
		rightImageDisplay = "none ";
		leftImageDisplay = "block";
	}

	return (
		<div className={styles.textImageCard}>
			<div className="flex flex-col md:flex-row py-10 px-4 gap-16 justify-center items-center my-8 border-b-solid border-b-grey border-b-[1px]">
				<motion.div
					variants={fadeIn}
					className="mt-10 px-0 xl:px-20 md:mt-0 w-full md:w-1/2"
					style={{display: leftImageDisplay}}
				>
					<Image
						width="40px"
						height="35px"
						objectFit="cover"
						objectPosition="center"
						layout="responsive"
						alt={`${props?.image?.altText} Image`}
						src={`${props?.image?.sourceUrl}`}
						className="w-full h-[250px] rounded-lg object-cover object-center"
					/>
				</motion.div>
				<motion.div
					variants={fadeInUp}
					className="w-full md:w-1/2 flex flex-col justify-center items-start"
				>
					<h5 className="text-grey text-left text-tiny font-[600] uppercase tracking-[0.15rem]">
						{props?.subtitle}
					</h5>
					<h2 className="text-black text-left text-3xl py-8 md:text-4xl leading-[2rem] font-[700]">
						{props?.title}
					</h2>
					<div
						className={isParagraphContent(props?.paragraph)}
						dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
					/>
					<motion.button
						variants={fadeIn}
						className={isButtonLink(props?.buttonLink?.url)}
					>
						<Link
							href={`${props?.buttonLink?.url}`}
							target={`${props?.buttonLink?.target}`}
						>
							<a className="text-fadedPink font-[700] text-medium hover:text-blue transition-all ease-in-out duration-[0.5s]">
								{props?.buttonLink?.title}
							</a>
						</Link>
					</motion.button>
				</motion.div>
				<motion.div
					variants={fadeIn}
					className="mt-10 px-0 xl:px-20 md:mt-0 w-full md:w-1/2"
					style={{display: rightImageDisplay}}
				>
					<Image
						width="40px"
						height="35px"
						objectFit="cover"
						objectPosition="center"
						layout="responsive"
						alt={`${props?.image?.altText} Image`}
						src={`${props?.image?.sourceUrl}`}
						className="w-full h-[250px] rounded-lg object-cover object-center"
					/>
				</motion.div>
			</div>
		</div>
	);
};

export default TextImageCard;