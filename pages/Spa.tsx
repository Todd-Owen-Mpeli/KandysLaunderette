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
import OurProcess from "../components/OurProcess";
import MetaTag from "../components/Meta/MetaTag";
import TeamMembers from "../components/TeamMembers";
import ContactBanner from "../components/ContactBanner";
import TextImageJumbo from "../components/TextImageJumbo";
import ContactFormMap from "../components/ContactFormMap";
import HeroSectionFour from "../components/HeroSectionFour";
import TitleParagraphImage from "../components/TitleParagraphImage";
import TitleParagraphThree from "../components/TitleParagraphThree";

const Spa = ({
	seo,
	pageTitle,
	themesOptionsContent,
	IndividualServicesMenuLinks,
	CommercialServicesMenuLinks,
	spaPageContent,
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
					title={spaPageContent?.heroSection?.title}
					paragraph={spaPageContent?.heroSection?.paragraph}
					backgroundImage={
						spaPageContent?.heroSection?.backgroundImage?.sourceUrl
					}
					displayPaymentInfo={spaPageContent?.heroSection?.displayPaymentInfo}
					CommercialServicesMenuLinks={
						CommercialServicesMenuLinks?.CommercialServicesMenuLinks
					}
					IndividualServicesMenuLinks={
						IndividualServicesMenuLinks?.IndividualServicesMenuLinks
					}
				/>

				{/* <!--===== TITLE PARAGRAPH & IMAGE =====--> */}
				<TitleParagraphImage
					image={spaPageContent?.whoWeAre?.image}
					title={spaPageContent?.whoWeAre?.title}
					subtitle={spaPageContent?.whoWeAre?.subtitle}
					paragraph={spaPageContent?.whoWeAre?.paragraph}
				/>

				{/* <!--===== TITLE PARAGRAPH =====--> */}
				<TitleParagraphThree
					title={spaPageContent?.titleParagraph?.title}
					paragraph={spaPageContent?.titleParagraph?.paragraph}
				/>

				{/* <!--===== INTRO SECTION =====--> */}
				<TextImageJumbo
					gridContent={spaPageContent?.textImageJumbo?.gridContent}
				/>

				{/* <!--===== LOGO BANNER =====--> */}
				<Logos
					title={spaPageContent?.logos?.title}
					logoGrid={spaPageContent?.logos?.logoGrid}
					// Display Options
					backgroundColor={spaPageContent?.logos?.backgroundColor}
				/>

				{/* TEAM MEMBERS */}
				<TeamMembers
					title={spaPageContent?.teamMembers?.title}
					paragraph={spaPageContent?.teamMembers?.paragraph}
					profileGrid={spaPageContent?.teamMembers?.profileGrid}
				/>

				{/* <!--===== CONTACT US BANNER =====--> */}
				<ContactBanner
					title={spaPageContent?.contactBanner?.title}
					paragraph={spaPageContent?.contactBanner?.paragraph}
					buttonLink={spaPageContent?.contactBanner?.buttonLink}
					backgroundImage={spaPageContent?.contactBanner?.image?.sourceUrl}
				/>

				{/* <!--===== OUR PROCESS INFORMATION =====--> */}
				<OurProcess
					title={spaPageContent?.bookingContent?.title}
					paragraph={spaPageContent?.bookingContent?.paragraph}
					gridContent={spaPageContent?.bookingContent?.gridContent}
					// Display Options
					backgroundColor={spaPageContent?.bookingContent?.backgroundColor}
					backgroundLetter={spaPageContent?.bookingContent?.backgroundLetter}
				/>

				{/* <!--===== USER ACCOUNT =====--> */}
				<TitleParagraphImage
					image={spaPageContent?.titleParagraphImage?.image}
					title={spaPageContent?.titleParagraphImage?.title}
					subtitle={spaPageContent?.titleParagraphImage?.subtitle}
					paragraph={spaPageContent?.titleParagraphImage?.paragraph}
				/>

				{/* <!--===== CONTACT US MAP =====--> */}
				<ContactFormMap
					title={spaPageContent?.contactUs?.title}
					paragraph={spaPageContent?.contactUs?.paragraph}
					paragraphBottom={spaPageContent?.contactUs?.paragraphBottom}
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
	const getSpaPageContent: any = gql`
		{
			pageTitle: pages(where: {id: 2755, status: PUBLISH}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 2755, status: PUBLISH}) {
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
						SpaPage {
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
		query: getSpaPageContent,
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
			spaPageContent: response?.data?.mainContent?.edges[0]?.node?.SpaPage,
		},
		revalidate: 60,
	};
}

export default Spa;
