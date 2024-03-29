import {gql} from "@apollo/client";
import {client} from "../lib/apollo";
import {motion} from "framer-motion";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {
	getCommercialServicesMenu,
	getIndividualServicesMenu,
} from "../lib/MenuLinks";

// Components
import Logos from "../components/Logos";
import Footer from "../components/Footer";
import MetaTag from "../components/Meta/MetaTag";
import OurProcess from "../components/OurProcess";
import TeamMembers from "../components/TeamMembers";
import ContactBanner from "../components/ContactBanner";
import TextImageJumbo from "../components/TextImageJumbo";
import ContactFormMap from "../components/ContactFormMap";
import HeroSectionFour from "../components/HeroSectionFour";
import TitleParagraphImage from "../components/TitleParagraphImage";
import TitleParagraphThree from "../components/TitleParagraphThree";

const Cafe = ({
	seo,
	pageTitle,
	cafePageContent,
	themesOptionsContent,
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

			<main>
				{/* <!--===== HERO =====--> */}
				<HeroSectionFour
					title={cafePageContent?.heroSection?.title}
					paragraph={cafePageContent?.heroSection?.paragraph}
					backgroundImage={
						cafePageContent?.heroSection?.backgroundImage?.sourceUrl
					}
					displayPaymentInfo={cafePageContent?.heroSection?.displayPaymentInfo}
					CommercialServicesMenuLinks={
						CommercialServicesMenuLinks?.CommercialServicesMenuLinks
					}
					IndividualServicesMenuLinks={
						IndividualServicesMenuLinks?.IndividualServicesMenuLinks
					}
				/>

				<TitleParagraphImage
					image={cafePageContent?.whoWeAre?.image}
					title={cafePageContent?.whoWeAre?.title}
					subtitle={cafePageContent?.whoWeAre?.subtitle}
					paragraph={cafePageContent?.whoWeAre?.paragraph}
				/>

				{/* <!--===== TITLE PARAGRAPH =====--> */}
				<TitleParagraphThree
					title={cafePageContent?.titleParagraph?.title}
					paragraph={cafePageContent?.titleParagraph?.paragraph}
				/>

				{/* <!--===== INTRO SECTION =====--> */}
				<TextImageJumbo
					gridContent={cafePageContent?.textImageJumbo?.gridContent}
				/>

				{/* <!--===== LOGO BANNER =====--> */}
				<Logos
					title={cafePageContent?.logos?.title}
					logoGrid={cafePageContent?.logos?.logoGrid}
					// Display Options
					backgroundColor={cafePageContent?.logos?.backgroundColor}
				/>

				{/* TEAM MEMBERS */}
				<TeamMembers
					title={cafePageContent?.teamMembers?.title}
					paragraph={cafePageContent?.teamMembers?.paragraph}
					profileGrid={cafePageContent?.teamMembers?.profileGrid}
				/>

				{/* <!--===== CONTACT US BANNER =====--> */}
				<ContactBanner
					title={cafePageContent?.contactBanner?.title}
					paragraph={cafePageContent?.contactBanner?.paragraph}
					buttonLink={cafePageContent?.contactBanner?.buttonLink}
					backgroundImage={cafePageContent?.contactBanner?.image?.sourceUrl}
				/>

				{/* <!--===== OUR PROCESS INFORMATION =====--> */}
				<OurProcess
					title={cafePageContent?.bookingContent?.title}
					paragraph={cafePageContent?.bookingContent?.paragraph}
					gridContent={cafePageContent?.bookingContent?.gridContent}
					// Display Options
					backgroundColor={cafePageContent?.bookingContent?.backgroundColor}
					backgroundLetter={cafePageContent?.bookingContent?.backgroundLetter}
				/>

				{/* <!--===== USER ACCOUNT =====--> */}
				<TitleParagraphImage
					image={cafePageContent?.titleParagraphImage?.image}
					title={cafePageContent?.titleParagraphImage?.title}
					subtitle={cafePageContent?.titleParagraphImage?.subtitle}
					paragraph={cafePageContent?.titleParagraphImage?.paragraph}
				/>

				{/* <!--===== CONTACT US MAP =====--> */}
				<ContactFormMap
					title={cafePageContent?.contactUs?.title}
					paragraph={cafePageContent?.contactUs?.paragraph}
					paragraphBottom={cafePageContent?.contactUs?.paragraphBottom}
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
	const getCafePageContent: any = gql`
		{
			pageTitle: pages(where: {id: 3003, status: PUBLISH}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 3003, status: PUBLISH}) {
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
						CafePage {
							heroSection {
								title
								paragraph
								displayPaymentInfo
								backgroundImage {
									sourceUrl
								}
							}
							whoWeAre {
								title
								subtitle
								paragraph
								image {
									altText
									sourceUrl
								}
							}
							titleParagraph {
								title
								paragraph
							}
							textImageJumbo {
								gridContent {
									card {
										title
										subtitle
										paragraph
										displayImageOption
										displayButtonOption
										buttonLink {
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
							}
							logos {
								title
								backgroundColor
								logoGrid {
									image {
										altText
										sourceUrl
									}
								}
							}
							teamMembers {
								title
								paragraph
								profileGrid {
									profileCard {
										title
										jobPosition
										twitter
										facebook
										instagram
										image {
											altText
											sourceUrl
										}
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
							bookingContent {
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
							titleParagraphImage {
								title
								subtitle
								paragraph
								image {
									altText
									sourceUrl
								}
							}
							contactUs {
								title
								paragraph
								paragraphBottom
							}
						}
					}
				}
			}
		}
	`;

	const response: any = await client.query({
		query: getCafePageContent,
	});

	const themesOptionsContent: object = await getThemesOptionsContent();
	const CommercialServicesMenuLinks: object = await getCommercialServicesMenu();
	const IndividualServicesMenuLinks: object = await getIndividualServicesMenu();

	return {
		props: {
			themesOptionsContent,
			CommercialServicesMenuLinks,
			IndividualServicesMenuLinks,
			pageTitle: response?.data?.pageTitle?.edges[0]?.node?.title,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			cafePageContent: response?.data?.mainContent?.edges[0]?.node?.CafePage,
		},
		revalidate: 60,
	};
}

export default Cafe;
