import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import PricingPlansCard from "./Cards/PricingPlansCard";

interface IProps {
	title: string;
	paragraph: string;
	subscriptionsGrid: [
		{
			card: {
				id: string;
				tier: string;
				price: string;
				billingInfo: string;
				paragraphTop: string;
				paragraphBottom: string;
				buttonLink: {
					url: string;
					title: string;
					target: string;
				};
			};
		}
	];
}

const PricingPlans: FunctionComponent<IProps> = ({
	title,
	paragraph,
	subscriptionsGrid,
}) => {
	/* Calculates How many iterations and sets
     the third card to a different color. */
	let iterationCount: number = 1;

	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden w-full lg:max-w-[55rem] py-8 text-center lg:text-left text-darkGrey text-medium font-[400]";
		} else {
			contentStyling =
				"block w-full lg:max-w-[55rem] py-8 text-center lg:text-left text-darkGrey text-medium font-[400]";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className="py-0 lg:py-10 bg-lightGrey overflow-hidden">
			<div className="container mx-auto px-0">
				<div className="py-16 px-4 lg:px-8 bg-white rounded-none lg:rounded-3xl">
					<div className="flex flex-wrap">
						<div className="w-full md:w-1/2 lg:p-8">
							<div className="flex flex-col justify-between items-center lg:items-baseline md:max-w-sm h-full">
								<div className="flex-initial mb-8">
									<h2 className="font-[600] text-center lg:text-left text-2xl sm:text-3xl lg:text-5xl">
										{title}
									</h2>
									<div
										className={isParagraphContent(paragraph)}
										dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
									/>
								</div>
								<div className="flex-initial">
									<p className="mb-2 text-base font-[600] text-black uppercase">
										Trusted by 30k users
									</p>
									<div className="flex flex-row justify-start items-center lg:items-baseline m-0.5 mb-2">
										<div className="mx-auto lg:mx-0">
											<svg
												width="22"
												height="22"
												viewBox="0 0 22 22"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M9.70724 4.21267C10.0284 3.22436 11.4266 3.22436 11.7477 4.21267L12.895 7.74387C13.0387 8.18586 13.4505 8.48511 13.9153 8.48511H17.6282C18.6674 8.48511 19.0994 9.81488 18.2587 10.4257L15.2549 12.6081C14.8789 12.8813 14.7216 13.3654 14.8652 13.8074L16.0126 17.3386C16.3337 18.327 15.2025 19.1488 14.3618 18.538L11.358 16.3556C10.982 16.0824 10.4729 16.0824 10.0969 16.3556L7.09311 18.538C6.2524 19.1488 5.12123 18.327 5.44236 17.3386L6.58971 13.8074C6.73332 13.3654 6.576 12.8813 6.20002 12.6081L3.1962 10.4257C2.35549 9.81488 2.78756 8.48511 3.82674 8.48511H7.53966C8.00439 8.48511 8.41627 8.18586 8.55988 7.74387L9.70724 4.21267Z"
													fill="#72b043"
												></path>
											</svg>
										</div>
										<div className="mx-auto lg:mx-0">
											<svg
												width="22"
												height="22"
												viewBox="0 0 22 22"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M9.70724 4.21267C10.0284 3.22436 11.4266 3.22436 11.7477 4.21267L12.895 7.74387C13.0387 8.18586 13.4505 8.48511 13.9153 8.48511H17.6282C18.6674 8.48511 19.0994 9.81488 18.2587 10.4257L15.2549 12.6081C14.8789 12.8813 14.7216 13.3654 14.8652 13.8074L16.0126 17.3386C16.3337 18.327 15.2025 19.1488 14.3618 18.538L11.358 16.3556C10.982 16.0824 10.4729 16.0824 10.0969 16.3556L7.09311 18.538C6.2524 19.1488 5.12123 18.327 5.44236 17.3386L6.58971 13.8074C6.73332 13.3654 6.576 12.8813 6.20002 12.6081L3.1962 10.4257C2.35549 9.81488 2.78756 8.48511 3.82674 8.48511H7.53966C8.00439 8.48511 8.41627 8.18586 8.55988 7.74387L9.70724 4.21267Z"
													fill="#72b043"
												></path>
											</svg>
										</div>
										<div className="mx-auto lg:mx-0">
											<svg
												width="22"
												height="22"
												viewBox="0 0 22 22"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M9.70724 4.21267C10.0284 3.22436 11.4266 3.22436 11.7477 4.21267L12.895 7.74387C13.0387 8.18586 13.4505 8.48511 13.9153 8.48511H17.6282C18.6674 8.48511 19.0994 9.81488 18.2587 10.4257L15.2549 12.6081C14.8789 12.8813 14.7216 13.3654 14.8652 13.8074L16.0126 17.3386C16.3337 18.327 15.2025 19.1488 14.3618 18.538L11.358 16.3556C10.982 16.0824 10.4729 16.0824 10.0969 16.3556L7.09311 18.538C6.2524 19.1488 5.12123 18.327 5.44236 17.3386L6.58971 13.8074C6.73332 13.3654 6.576 12.8813 6.20002 12.6081L3.1962 10.4257C2.35549 9.81488 2.78756 8.48511 3.82674 8.48511H7.53966C8.00439 8.48511 8.41627 8.18586 8.55988 7.74387L9.70724 4.21267Z"
													fill="#72b043"
												></path>
											</svg>
										</div>
										<div className="mx-auto lg:mx-0">
											<svg
												width="22"
												height="22"
												viewBox="0 0 22 22"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M9.70724 4.21267C10.0284 3.22436 11.4266 3.22436 11.7477 4.21267L12.895 7.74387C13.0387 8.18586 13.4505 8.48511 13.9153 8.48511H17.6282C18.6674 8.48511 19.0994 9.81488 18.2587 10.4257L15.2549 12.6081C14.8789 12.8813 14.7216 13.3654 14.8652 13.8074L16.0126 17.3386C16.3337 18.327 15.2025 19.1488 14.3618 18.538L11.358 16.3556C10.982 16.0824 10.4729 16.0824 10.0969 16.3556L7.09311 18.538C6.2524 19.1488 5.12123 18.327 5.44236 17.3386L6.58971 13.8074C6.73332 13.3654 6.576 12.8813 6.20002 12.6081L3.1962 10.4257C2.35549 9.81488 2.78756 8.48511 3.82674 8.48511H7.53966C8.00439 8.48511 8.41627 8.18586 8.55988 7.74387L9.70724 4.21267Z"
													fill="#72b043"
												></path>
											</svg>
										</div>
										<div className="mx-auto lg:mx-0">
											<svg
												width="22"
												height="22"
												viewBox="0 0 22 22"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M9.70724 4.21267C10.0284 3.22436 11.4266 3.22436 11.7477 4.21267L12.895 7.74387C13.0387 8.18586 13.4505 8.48511 13.9153 8.48511H17.6282C18.6674 8.48511 19.0994 9.81488 18.2587 10.4257L15.2549 12.6081C14.8789 12.8813 14.7216 13.3654 14.8652 13.8074L16.0126 17.3386C16.3337 18.327 15.2025 19.1488 14.3618 18.538L11.358 16.3556C10.982 16.0824 10.4729 16.0824 10.0969 16.3556L7.09311 18.538C6.2524 19.1488 5.12123 18.327 5.44236 17.3386L6.58971 13.8074C6.73332 13.3654 6.576 12.8813 6.20002 12.6081L3.1962 10.4257C2.35549 9.81488 2.78756 8.48511 3.82674 8.48511H7.53966C8.00439 8.48511 8.41627 8.18586 8.55988 7.74387L9.70724 4.21267Z"
													fill="#72b043"
												></path>
											</svg>
										</div>
									</div>
									<p className="flex gap-2 text-base text-black font-[600]">
										<span className="text-pink">4.2/5</span>
										<span>(45k Reviews)</span>
									</p>
								</div>
							</div>
						</div>
						<div className="w-full md:w-1/2 mt-20 lg:mt-0 lg:p-8">
							<div className="flex flex-col lg:flex-row justify-center items-center gap-8">
								{subscriptionsGrid.map((keys) => (
									<PricingPlansCard
										key={keys?.card?.id}
										tier={keys?.card?.tier}
										price={keys?.card?.price}
										buttonLink={keys?.card?.buttonLink}
										billingInfo={keys?.card?.billingInfo}
										paragraphTop={keys?.card?.paragraphTop}
										paragraphBottom={keys?.card?.paragraphBottom}
										numberCount={iterationCount++}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PricingPlans;
