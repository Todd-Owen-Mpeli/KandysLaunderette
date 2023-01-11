import Image from "next/image";
import {motion} from "framer-motion";
import styles from "../styles/components/OurProcess.module.scss";
import {fadeIn, fadeInUp, fadeInTwo, stagger} from "../animations/animations";

const SingleCardTwo = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = "hidden mt-8 text-left text-black text-medium";
		} else {
			contentStyling = "block mt-8 text-left text-black text-medium";
		}
		return contentStyling;
	}

	function createParagraphMarkup() {
		return {
			__html: DOMPurify.sanitize(`${props?.paragraph}`),
		};
	}

	return (
		<div className={styles.singleCard}>
			<motion.div variants={fadeIn}>
				<Image
					width={500}
					height={500}
					objectFit="cover"
					src={`${props?.image}`}
					alt={`${props?.image?.altText} Image`}
					className="w-full h-[500px] object-cover object-center"
				/>
			</motion.div>
			<motion.div variants={stagger} className="py-8 px-4">
				<motion.h2
					variants={fadeInUp}
					className="text-black text-center font-[500] text-2xl py-8"
				>
					{props?.title}
				</motion.h2>
				<motion.div
					variants={fadeInTwo}
					className={isParagraphContent(props?.paragraph)}
					dangerouslySetInnerHTML={createParagraphMarkup()}
				/>
			</motion.div>
		</div>
	);
};

export default SingleCardTwo;