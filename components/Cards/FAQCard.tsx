import {useState} from "react";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";

interface IProps {
	title: string;
	paragraph: string;
	numberCount: number;
}

const FAQCard: FunctionComponent<IProps> = ({
	title,
	paragraph,
	numberCount,
}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling = "hidden mb-5 text-base text-white font-[400]";
		} else {
			contentStyling = "block mb-5 text-base text-white font-[400]";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	// Displays Accordion Content
	const [accordionOpen, setAccordionOpen]: any = useState(false);

	function displayAccordionContent() {
		setAccordionOpen(!accordionOpen);
	}

	return (
		<>
			<div className="px-4 py-8 mb-4 lg:px-12 bg-pink rounded-2xl">
				<button className="flex w-full text-left">
					<div className="w-auto mr-8">
						<span className="flex items-center justify-center w-12 h-12 text-white text-lg font-[600] bg-fadedPinkThree rounded-full">
							{numberCount}
						</span>
					</div>
					<div className="w-full mt-3">
						<div className="flex items-center justify-between">
							<h3 className="text-lg font-[600]  lg:leading-[2rem] text-white">
								{title}
							</h3>
							<span className="ml-4" onClick={displayAccordionContent}>
								<svg
									className="w-4 h-4"
									width="18"
									height="10"
									viewBox="0 0 18 10"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1.18267 9C0.910673 9.268 0.473672 9.268 0.203672 9C-0.0663284 8.732 -0.0673279 8.299 0.203672 8.031L8.11167 0.201C8.38167 -0.0670004 8.81867 -0.0670004 9.09067 0.201L16.9987 8.031C17.2687 8.299 17.2687 8.732 16.9987 9C16.7277 9.268 16.2897 9.268 16.0197 9L8.60067 1.859L1.18267 9Z"
										fill="white"
									/>
								</svg>
							</span>
						</div>
						{accordionOpen ? (
							<div className="pl-10 mt-6 border-l-2 border-fadedPinkThree">
								<div
									className={isParagraphContent(paragraph)}
									dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
								/>
							</div>
						) : null}
					</div>
				</button>
			</div>
		</>
	);
};

export default FAQCard;
