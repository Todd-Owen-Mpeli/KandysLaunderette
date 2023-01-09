import Head from "next/head";
import Image from "next/image";
import {gql} from "@apollo/client";
import {client} from "../lib/apollo";
import {motion} from "framer-motion";
import styles from "/styles/Home.module.scss";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {fadeInUp, fadeIn, stagger} from "../animations/animations";

// Components
import Navbar from "/components/Navbar";
import OurProcess from "/components/ourProcess";
import FooterDark from "/components/FooterDark";
import HeroSection from "../components/HeroSection";
import ContactBanner from "../components/ContactBanner";

const SuitsOxfordShirts = ({
	pageTitle,
	suitsOxfordShirtsPageContent,
	themesOptionsContent,
}) => {
	return (
		<motion.div
			exit={{
				opacity: 0,
			}}
			initial="initial"
			animate="animate"
		>
			{/* <!--===== HEAD =====--> */}
			<Head>
				{/* <!-- Website Title --> */}
				<title>Suits & Oxford Shirts | Kandys Launderette</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/img/Logo.png" />
			</Head>
			<main>
				{/* <!--===== HERO =====--> */}
				<HeroSection
					title={suitsOxfordShirtsPageContent?.heroSection?.title}
					subtitle={suitsOxfordShirtsPageContent?.heroSection?.subtitle}
					backgroundImage={
						suitsOxfordShirtsPageContent?.heroSection?.backgroundImage
							?.sourceUrl
					}
				/>

				{/* // <========== SUITS & OXFORD DESCRIPTIONS ==========> */}
				<div className={styles.suitsOxford}>
					<div>
						<div className={styles.gridDisplay}>
							<div className={styles.content}>
								<Image
									src="/img/alexander-naglestad-MZbZQEx91Ek-unsplash.jpg"
									alt="Product Image"
									width={400}
									height={400}
									objectFit="cover"
								></Image>
								<motion.div variants={stagger} className={styles.description}>
									<motion.h2 variants={fadeInUp}>Suits</motion.h2>
									<motion.p variants={fadeIn}>
										We offer suit cleaning & alterations for everyday and
										special day occasions. We specialize in 2 Piece & 3 Piece
										suits and in 2 Piece Dress & Dinner Suit.
									</motion.p>
								</motion.div>
							</div>
							<div className={styles.content}>
								<Image
									src="/img/nimble-made-m2z2wJ1XX6Q-unsplash.jpg"
									alt="Product Image"
									width={400}
									height={400}
									objectFit="cover"
								></Image>
								<motion.div variants={stagger} className={styles.description}>
									<motion.h2 variants={fadeInUp}>Oxford Shirts</motion.h2>
									<motion.p variants={fadeIn}>
										Business Casual has never been any easier. we offer dry
										cleaning & alterations solutions for everyday occasions. We
										specialize in Regular or Silk shirts.
									</motion.p>
								</motion.div>
							</div>
						</div>
					</div>
				</div>

				{/* <!--===== WEDDING SUITS =====--> */}
				<div className={styles.weddingSuits}>
					<div>
						<div className={styles.content}>
							<motion.div variants={fadeInUp} className={styles.title}>
								<h2>Wedding Suits</h2>
								<h5>We make your special day simple.</h5>
							</motion.div>
							<div className={styles.gridDisplay}>
								<div className={styles.innerContent}>
									<div className={styles.Image}>
										<Image
											src="/img/tengyart-Q5jO8wxYnys-unsplash.jpg"
											alt="Product Image"
											width={600}
											height={800}
											objectFit="cover"
										></Image>
									</div>
									<motion.div variants={stagger} className={styles.description}>
										<motion.h2 variants={fadeInUp}>Suits</motion.h2>
										<motion.p variants={fadeIn}>
											We offer suit cleaning & alterations for everyday and
											special day occasions. We specialize in wedding suits, 2
											Piece & 3 Piece suits and in 2 Piece Dress & Dinner Suit.
										</motion.p>
									</motion.div>
								</div>
							</div>
							<div className={styles.groomsmenDisplay}>
								<div className={styles.innerContent}>
									<motion.div variants={stagger} className={styles.description}>
										<motion.h2 variants={fadeInUp}>Groomsmen Suits</motion.h2>
										<motion.p variants={fadeIn}>
											We also take care of your Groomsmen suits. Either 2 Piece
											& 3 Piece suits, we specialize in all of them.
										</motion.p>
									</motion.div>
									<div className={styles.Image}>
										<Image
											src="/img/samantha-gades-bFYoyKivbmg-unsplash.jpg"
											alt="Product Image"
											width={800}
											height={800}
											objectFit="contain"
										></Image>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!--===== CONTACT US BANNER =====--> */}
				<ContactBanner
					title={suitsOxfordShirtsPageContent?.contactBanner?.title}
					paragraph={suitsOxfordShirtsPageContent?.contactBanner?.paragraph}
					buttonLink={suitsOxfordShirtsPageContent?.contactBanner?.buttonLink}
					backgroundImage={
						suitsOxfordShirtsPageContent?.contactBanner?.image?.sourceUrl
					}
				/>

				{/* <!--===== OUR PROCESS INFORMATION =====--> */}
				<OurProcess />

				{/* <!--===== ALTERATIONS & REPAIRS =====--> */}
				<div className={styles.alterationsRepairs}>
					<div>
						<div className={styles.content}>
							<motion.div variants={fadeInUp} className={styles.title}>
								<h2>Suits Alterations & Repairs</h2>
								<h5>Perfection has never been so easy</h5>
							</motion.div>
						</div>
					</div>
					<div className={styles.backgroundImage}></div>
					<div>
						<div className={styles.content}>
							<div className={styles.gridDisplay}>
								<div className={styles.alterationsDisplay}>
									<div className={styles.Image}>
										<Image
											src="/img/simona-sergi-pmFgcciSt4s-unsplash.jpg"
											alt="Product Image"
											width={600}
											height={800}
											objectFit="cover"
										></Image>
									</div>
									<motion.div variants={stagger} className={styles.description}>
										<motion.h2 variants={fadeInUp}>Alterations</motion.h2>
										<motion.p variants={fadeIn}>
											We offer suit cleaning & alterations for everyday and
											special day occasions. We specialize in wedding suits, 2
											Piece & 3 Piece suits and in 2 Piece Dress & Dinner Suit.
										</motion.p>
									</motion.div>
								</div>
							</div>
							<div className={styles.repairsDisplay}>
								<div className={styles.innerContent}>
									<motion.div variants={stagger} className={styles.description}>
										<motion.h2 variants={fadeInUp}>Repairs</motion.h2>
										<motion.p variants={fadeIn}>
											We also take care of your Groomsmen suits. Either 2 Piece
											& 3 Piece suits, we specialize in all of them.
										</motion.p>
									</motion.div>
									<div className={styles.Image}>
										<Image
											src="/img/sandie-clarke-BrohkstBl_w-unsplash.jpg"
											alt="Product Image"
											width={800}
											height={800}
											objectFit="contain"
										></Image>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</motion.div>
	);
};

export default SuitsOxfordShirts;

// Removes Global Navbar & Adds Custom Header and Footer Page layout Function
SuitsOxfordShirts.getLayout = function PageLayout(page) {
	return (
		<>
			{/* <!--===== NAVIGATION =====--> */}
			<Navbar />

			{/* <!--===== ONE TIME CUSTOM PAGE CONTENT =====--> */}
			{page}

			{/* <!--===== FOOTER =====--> */}
			<FooterDark />
		</>
	);
};

export async function getStaticProps() {
	const getSuitsOxfordShirtsContent = gql`
		{
			mainContent: pages(where: {id: 179, status: PUBLISH}) {
				edges {
					node {
						SuitsOxfordShirtsPage {
							heroSection {
								title
								subtitle
								backgroundImage {
									sourceUrl
								}
							}
							ourOptions {
								title
								paragraph
								content {
									title
									titleTwo
									paragraph
									paragraphTwo
									image {
										sourceUrl
									}
									imageTwo {
										sourceUrl
									}
								}
							}
							contactBanner {
								title
								paragraph
								buttonLink {
									url
									title
									target
								}
								image {
									sourceUrl
								}
							}
						}
					}
				}
			}
		}
	`;

	const response = await client.query({
		query: getSuitsOxfordShirtsContent,
	});

	const themesOptionsContent = await getThemesOptionsContent();

	return {
		props: {
			suitsOxfordShirtsPageContent:
				response?.data?.mainContent?.edges[0]?.node?.SuitsOxfordShirtsPage,
			themesOptionsContent,
		},
		revalidate: 1,
	};
}
