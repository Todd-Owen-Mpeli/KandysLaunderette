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

const WeddingVenues = ({
	seo,
	pageTitle,
	weddingVenuesPageContent,
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
					title={weddingVenuesPageContent?.heroSection?.title}
					paragraph={weddingVenuesPageContent?.heroSection?.paragraph}
					backgroundImage={
						weddingVenuesPageContent?.heroSection?.backgroundImage?.sourceUrl
					}
					displayPaymentInfo={
						weddingVenuesPageContent?.heroSection?.displayPaymentInfo
					}
					CommercialServicesMenuLinks={
						CommercialServicesMenuLinks?.CommercialServicesMenuLinks
					}
					IndividualServicesMenuLinks={
						IndividualServicesMenuLinks?.IndividualServicesMenuLinks
					}
				/>

				<TitleParagraphImage
					image={weddingVenuesPageContent?.whoWeAre?.image}
					title={weddingVenuesPageContent?.whoWeAre?.title}
					subtitle={weddingVenuesPageContent?.whoWeAre?.subtitle}
					paragraph={weddingVenuesPageContent?.whoWeAre?.paragraph}
				/>

				{/* <!--===== TITLE PARAGRAPH =====--> */}
				<TitleParagraphThree
					title={weddingVenuesPageContent?.titleParagraph?.title}
					paragraph={weddingVenuesPageContent?.titleParagraph?.paragraph}
				/>

				{/* <!--===== INTRO SECTION =====--> */}
				<TextImageJumbo
					gridContent={weddingVenuesPageContent?.textImageJumbo?.gridContent}
				/>

				{/* <!--===== LOGO BANNER =====--> */}
				<Logos
					title={weddingVenuesPageContent?.logos?.title}
					logoGrid={weddingVenuesPageContent?.logos?.logoGrid}
					// Display Options
					backgroundColor={weddingVenuesPageContent?.logos?.backgroundColor}
				/>

				{/* TEAM MEMBERS */}
				<TeamMembers
					title={weddingVenuesPageContent?.teamMembers?.title}
					paragraph={weddingVenuesPageContent?.teamMembers?.paragraph}
					profileGrid={weddingVenuesPageContent?.teamMembers?.profileGrid}
				/>

				{/* <!--===== CONTACT US BANNER =====--> */}
				<ContactBanner
					title={weddingVenuesPageContent?.contactBanner?.title}
					paragraph={weddingVenuesPageContent?.contactBanner?.paragraph}
					buttonLink={weddingVenuesPageContent?.contactBanner?.buttonLink}
					backgroundImage={
						weddingVenuesPageContent?.contactBanner?.image?.sourceUrl
					}
				/>

				{/* <!--===== OUR PROCESS INFORMATION =====--> */}
				<OurProcess
					title={weddingVenuesPageContent?.bookingContent?.title}
					paragraph={weddingVenuesPageContent?.bookingContent?.paragraph}
					gridContent={weddingVenuesPageContent?.bookingContent?.gridContent}
					// Display Options
					backgroundColor={
						weddingVenuesPageContent?.bookingContent?.backgroundColor
					}
					backgroundLetter={
						weddingVenuesPageContent?.bookingContent?.backgroundLetter
					}
				/>

				{/* <!--===== USER ACCOUNT =====--> */}
				<TitleParagraphImage
					image={weddingVenuesPageContent?.titleParagraphImage?.image}
					title={weddingVenuesPageContent?.titleParagraphImage?.title}
					subtitle={weddingVenuesPageContent?.titleParagraphImage?.subtitle}
					paragraph={weddingVenuesPageContent?.titleParagraphImage?.paragraph}
				/>

				{/* <!--===== CONTACT US MAP =====--> */}
				<ContactFormMap
					title={weddingVenuesPageContent?.contactUs?.title}
					paragraph={weddingVenuesPageContent?.contactUs?.paragraph}
					paragraphBottom={weddingVenuesPageContent?.contactUs?.paragraphBottom}
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
	const getWeddingVenuesPageContent: any = gql`
		{
			pageTitle: pages(where: {id: 3007, status: PUBLISH}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 3007, status: PUBLISH}) {
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
						WeddingVenuesPage {
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
		query: getWeddingVenuesPageContent,
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
			weddingVenuesPageContent:
				response?.data?.mainContent?.edges[0]?.node?.WeddingVenuesPage,
		},
		revalidate: 60,
	};
}

export default WeddingVenues;
