import Link from "next/link";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn} from "../animations/animations";
import styles from "../styles/components/ContactBanner.module.scss";

const ContactBanner = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden w-full xl:w-[45rem] mt-4 text-left text-white font-[500] text-base";
		} else {
			contentStyling =
				"block w-full xl:w-[45rem] mt-4 text-left text-white font-[500] text-base";
		}
		return contentStyling;
	}

	function createParagraphMarkup() {
		return {
			__html: DOMPurify.sanitize(`${props?.paragraph}`),
		};
	}

	return (
		<>
			<div
				className={styles.contactBanner}
				style={{
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundImage: `url(${props.backgroundImage}`,
				}}
			>
				<div className="container mx-auto">
					<div className="flex flex-col lg:flex-row py-8 gap-10 px-8 justify-between items-center">
						<div className="flex flex-col gap-4 justify-between items-center">
							<h2 className="text-left text-white text-2xl md:text-4xl">
								{props?.title}
							</h2>
							<div
								className={isParagraphContent(props?.paragraph)}
								dangerouslySetInnerHTML={createParagraphMarkup()}
							/>
						</div>
						<motion.button
							variants={fadeIn}
							className="text-center text-base text-white outline-none tracking-[0.1rem] py-4 px-8 uppercase border-2 border-pink border-solid hover:ease-in-out hover:duration-[0.5s] hover:bg-fadedPink"
						>
							<Link
								href={`${props?.buttonLink?.url}`}
								target={`${props?.buttonLink?.target}`}
							>
								{props?.buttonLink?.title}
							</Link>
						</motion.button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactBanner;
