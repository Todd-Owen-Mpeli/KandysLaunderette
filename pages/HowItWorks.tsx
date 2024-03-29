/* eslint-disable @next/next/no-img-element */
import {gql} from "@apollo/client";
import {client} from "../lib/apollo";
import {motion} from "framer-motion";
import {getLatestThreePosts} from "../lib/blogPosts";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {
	getCommercialServicesMenu,
	getIndividualServicesMenu,
} from "../lib/MenuLinks";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Blogs from "../components/Blogs";
import SignUp from "../components/SignUp";
import MetaTag from "../components/Meta/MetaTag";
import OurProcess from "../components/OurProcess";
import StoreLocation from "../components/StoreLocation";
import ContactBanner from "../components/ContactBanner";
import FeaturesBanner from "../components/FeaturesBanner";
import TitleGridContent from "../components/TitleGridContent";
import HeroSectionThree from "../components/HeroSectionThree";
import FeaturesBannerTwo from "../components/FeaturesBannerTwo";
import TitleParagraphVideo from "../components/TitleParagraphVideo";
import ImageTextBulletPoints from "../components/ImageTextBulletPoints";
import TitleParagraphGridContentTwo from "../components/TitleParagraphGridContentTwo";

const HowItWorks = ({
	seo,
	pageTitle,
	latestThreePosts,
	themesOptionsContent,
	howItWorksPageContent,
	IndividualServicesMenuLinks,
	CommercialServicesMenuLinks,
}: any) => {
	return (
		<motion.div
			exit={{
				opacity: 0,
			}}
			initial="initial"
			animate="animate"
		>
			{/* <!--===== HEAD =====--> */}
			<MetaTag title={pageTitle} seo={seo} />

			{/* <!--===== NAVBAR =====--> */}
			<Navbar
				IndividualServicesMenuLinks={
					IndividualServicesMenuLinks?.IndividualServicesMenuLinks
				}
				CommercialServicesMenuLinks={
					CommercialServicesMenuLinks?.CommercialServicesMenuLinks
				}
			/>

			<main>
				{/* <!--===== REINVENTING THE FUTURE =====--> */}
				<HeroSectionThree
					title={howItWorksPageContent?.heroSection?.square?.title}
					subtitle={howItWorksPageContent?.heroSection?.square?.subtitle}
					// Main Square
					buttonLink={howItWorksPageContent?.heroSection?.square?.buttonLink}
					buttonLinkTwo={
						howItWorksPageContent?.heroSection?.square?.buttonLinkTwo
					}
					backgroundImage={
						howItWorksPageContent?.heroSection?.square?.backgroundImage
							?.sourceUrl
					}
					// Square One
					titleTwo={howItWorksPageContent?.heroSection?.squareOne?.title}
					subtitleTwo={howItWorksPageContent?.heroSection?.squareOne?.subtitle}
					buttonLinkThree={
						howItWorksPageContent?.heroSection?.squareOne?.buttonLink
					}
					backgroundImageTwo={
						howItWorksPageContent?.heroSection?.squareOne?.backgroundImage
							?.sourceUrl
					}
					// Square Two
					titleThree={howItWorksPageContent?.heroSection?.squareTwo?.title}
					subtitleThree={
						howItWorksPageContent?.heroSection?.squareTwo?.subtitle
					}
					buttonLinkFour={
						howItWorksPageContent?.heroSection?.squareTwo?.buttonLink
					}
					backgroundImageThree={
						howItWorksPageContent?.heroSection?.squareTwo?.backgroundImage
							?.sourceUrl
					}
				/>

				{/* <!--===== FEATURE BANNER =====--> */}
				<FeaturesBannerTwo
					title={howItWorksPageContent?.featuresBannerTwo?.title}
					gridContent={howItWorksPageContent?.featuresBannerTwo?.content}
				/>

				{/* <!--===== FEATURE BANNER =====--> */}
				<TitleParagraphGridContentTwo
					title={howItWorksPageContent?.featureGrid?.title}
					paragraph={howItWorksPageContent?.featureGrid?.paragraph}
					gridContent={howItWorksPageContent?.featureGrid?.gridContent}
				/>

				{/* <!--===== REINVENTING THE FUTURE =====--> */}
				<TitleParagraphVideo
					title={howItWorksPageContent?.titleParagraphVideo?.title}
					subtitle={howItWorksPageContent?.titleParagraphVideo?.subtitle}
					paragraph={howItWorksPageContent?.titleParagraphVideo?.paragraph}
					buttonLink={howItWorksPageContent?.titleParagraphVideo?.buttonLink}
					video={howItWorksPageContent?.titleParagraphVideo?.videoLink}
				/>

				{/* <!--===== SIGN UP =====--> */}
				<SignUp
					title={howItWorksPageContent?.signUp?.title}
					paragraph={howItWorksPageContent?.signUp?.paragraph}
					// Display Options
					backgroundColor={howItWorksPageContent?.signUp?.backgroundColor}
				/>

				{/* <!--===== REINVENTING THE FUTURE =====--> */}
				<ImageTextBulletPoints
					title={howItWorksPageContent?.imageTextBulletPoints?.title}
					buttonLink={howItWorksPageContent?.imageTextBulletPoints?.buttonLink}
					image={howItWorksPageContent?.imageTextBulletPoints?.image}
					bulletPoints={
						howItWorksPageContent?.imageTextBulletPoints?.bulletPoints
					}
					// Display Options
					backgroundColor={
						howItWorksPageContent?.imageTextBulletPoints?.backgroundColor
					}
				/>

				{/* <!--===== FEATURE BANNER =====--> */}
				<FeaturesBanner
					title={howItWorksPageContent?.featuresBanner?.title}
					content={howItWorksPageContent?.featuresBanner?.content}
				/>

				{/* <!--===== OUR PROCESS INFORMATION =====--> */}
				<OurProcess
					title={howItWorksPageContent?.ourProcess?.title}
					paragraph={howItWorksPageContent?.ourProcess?.paragraph}
					gridContent={howItWorksPageContent?.ourProcess?.gridContent}
					// Display Options
					backgroundColor={howItWorksPageContent?.ourProcess?.backgroundColor}
					backgroundLetter={howItWorksPageContent?.ourProcess?.backgroundLetter}
				/>

				{/* <!--===== MAIN SERVICES =====--> */}
				<TitleGridContent
					title={howItWorksPageContent?.ourServices?.title}
					paragraph={howItWorksPageContent?.ourServices?.paragraph}
					gridContent={howItWorksPageContent?.ourServices?.gridContent}
					backgroundImage={
						howItWorksPageContent?.ourServices?.backgroundImage?.sourceUrl
					}
				/>

				{/* <!--===== CONTACT US BANNER =====--> */}
				<ContactBanner
					title={howItWorksPageContent?.contactBanner?.title}
					paragraph={howItWorksPageContent?.contactBanner?.paragraph}
					buttonLink={howItWorksPageContent?.contactBanner?.buttonLink}
					backgroundImage={
						howItWorksPageContent?.contactBanner?.image?.sourceUrl
					}
				/>

				{/* <!--===== BLOG =====--> */}
				<Blogs
					title={howItWorksPageContent?.blogs?.title}
					paragraph={howItWorksPageContent?.blogs?.paragraph}
					latestThreePosts={latestThreePosts?.latestThreePosts}
				/>

				{/* <!--===== OUT STORE LOCATION =====--> */}
				<StoreLocation
					title={howItWorksPageContent?.ourLocation?.title}
					paragraph={howItWorksPageContent?.ourLocation?.paragraph}
				/>
			</main>

			{/* <!--===== FOOTER =====--> */}
			<Footer
				email={themesOptionsContent?.themesOptions?.email}
				phoneNumber={themesOptionsContent?.themesOptions?.phoneNumber}
				IndividualServicesMenuLinks={
					IndividualServicesMenuLinks?.IndividualServicesMenuLinks
				}
			/>
		</motion.div>
	);
};

export async function getStaticProps() {
	const getHowItWorksPageContent: any = gql`
		{
			pageTitle: pages(where: {id: 678, status: PUBLISH}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 678, status: PUBLISH}) {
				edges {
					node {
						seo {
							canonical
							cornerstone
							focuskw
							fullHead
							metaDesc
							metaKeywords
							metaRobotsNofollow
							metaRobotsNoindex
							opengraphAuthor
							opengraphDescription
							opengraphImage {
								mediaItemUrl
							}
							opengraphModifiedTime
							opengraphPublishedTime
							opengraphPublisher
							opengraphSiteName
							opengraphTitle
							opengraphType
							opengraphUrl
							readingTime
							title
							twitterDescription
							twitterTitle
							twitterImage {
								mediaItemUrl
							}
						}
						HowItWorksPage {
							heroSection {
								square {
									title
									subtitle
									buttonLink {
										url
										title
										target
									}
									buttonLinkTwo {
										url
										title
										target
									}
									backgroundImage {
										altText
										sourceUrl
									}
								}
								squareOne {
									title
									subtitle
									buttonLink {
										url
										title
										target
									}
									backgroundImage {
										altText
										sourceUrl
									}
								}
								squareTwo {
									title
									subtitle
									buttonLink {
										url
										title
										target
									}
									backgroundImage {
										sourceUrl
									}
								}
							}
							featuresBannerTwo {
								title
								paragraphBanner
								iconBanner {
									altText
									sourceUrl
								}
								content {
									title
									paragraph
									icon {
										altText
										sourceUrl
									}
								}
							}
							featureGrid {
								title
								paragraph
								gridContent {
									card {
										title
										paragraph
										icon {
											altText
											sourceUrl
										}
									}
								}
							}
							titleParagraphVideo {
								title
								subtitle
								videoLink
								paragraph
								buttonLink {
									url
									title
									target
								}
							}
							imageTextBulletPoints {
								title
								backgroundColor
								image {
									altText
									sourceUrl
								}
								buttonLink {
									url
									title
									target
								}
								bulletPoints {
									text
									icon {
										altText
										sourceUrl
									}
								}
							}
							signUp {
								title
								paragraph
								backgroundColor
							}
							ourServices {
								title
								paragraph
								backgroundImage {
									sourceUrl
								}
								gridContent {
									title
									link {
										url
										title
										target
									}
									image {
										altText
										sourceUrl
									}
								}
							}
							featuresBanner {
								title
								content {
									title
									icon {
										altText
										sourceUrl
									}
								}
							}
							ourProcess {
								title
								paragraph
								backgroundLetter
								backgroundColor
								gridContent {
									title
									paragraph
									image {
										altText
										sourceUrl
									}
								}
							}
							contactBanner {
								title
								paragraph
								image {
									sourceUrl
								}
								buttonLink {
									url
									title
									target
								}
							}
							blogs {
								title
								paragraph
								buttonLink {
									url
									title
									target
								}
							}
							ourLocation {
								title
								paragraph
							}
						}
					}
				}
			}
		}
	`;

	const response: any = await client.query({
		query: getHowItWorksPageContent,
	});

	const latestThreePosts = await getLatestThreePosts();
	const themesOptionsContent: object = await getThemesOptionsContent();
	const CommercialServicesMenuLinks: object = await getCommercialServicesMenu();
	const IndividualServicesMenuLinks: object = await getIndividualServicesMenu();

	return {
		props: {
			latestThreePosts,
			themesOptionsContent,
			CommercialServicesMenuLinks,
			IndividualServicesMenuLinks,
			pageTitle: response?.data?.pageTitle?.edges[0]?.node?.title,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			howItWorksPageContent:
				response?.data?.mainContent?.edges[0]?.node?.HowItWorksPage,
		},
		revalidate: 60,
	};
}

export default HowItWorks;
