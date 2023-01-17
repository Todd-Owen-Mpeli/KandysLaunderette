/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeInUp, stagger} from "../animations/animations";
import styles from "../styles/components/TitleParagraph.module.scss";

const TitleParagraph = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden mt-4 w-full lg:w-[50rem] mx-auto py-8 px-4 text-black text-center text-base";
		} else {
			contentStyling =
				"block mt-4 w-full lg:w-[50rem] mx-auto py-8 px-4 text-black text-center text-base";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className={styles.titleParagraph}>
			<div className="container mx-auto p-0">
				<motion.div variants={fadeInUp}>
					<h2 className="text-black text-center font-[600] text-3xl lg:text-5xl">
						{props?.title}
					</h2>
					<div
						className={isParagraphContent(props?.paragraph)}
						dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default TitleParagraph;