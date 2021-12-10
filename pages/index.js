/* eslint-disable react/no-unknown-property */
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import Navbar from "/components/Navbar";
import StoreLocation from "/components/storeLocation";
import Footer from "/components/Footer";
import styles from "../styles/Home.module.scss";

// Custom reusable Animation Properties/variables
const fadeInUp = {
	initial: {
		y: 60,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {duration: 0.5, ease: "easeOut"},
	},
};

const fadeIn = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {duration: 0.5, delay: 1, ease: "easeOut"},
	},
};

const stagger = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export default function Home() {
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
				<title>Kandys Launderette | Professional Dry Cleaning Solutions</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="img/Logo.png" />

				{/* <!-- AOS CDN.js Reveal Animation  --> */}
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
					integrity="sha512-1cK78a1o+ht2JcaW6g8OXYwqpev9+6GqOkz9xmBN9iUUhIndKtxwILGWYOSibOKjLsEdjyjZvYDq/cZwNeak0w=="
					crossOrigin="anonymous"
					referrerpolicy="no-referrer"
				/>
				{/* <!-- Bootstrap CSS --> */}
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
					crossOrigin="anonymous"
				/>
				{/* <!-- Bootstrap Icon Link --> */}
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
				/>
				{/* <!-- Icons for Mobile viewport --> */}
				<link
					rel="stylesheet"
					href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
				/>
			</Head>

			{/* <!--===== NAVIGATION =====--> */}
			<Navbar />

			{/* <!--===== HERO =====--> */}
			<div className={styles.backgroundImage}>
				<div className="container">
					<div className={styles.content}>
						<motion.div variants={fadeInUp} className={styles.title}>
							<h2>Kandy's Launderette</h2>
							<h5>Professional Dry Cleaning Specialist</h5>
						</motion.div>
					</div>
				</div>
			</div>

			{/* <!--===== MAIN SERVICES =====--> */}
			<div className={styles.services}>
				<div className="container">
					<div className={styles.content}>
						<motion.div variants={fadeInUp} className={styles.title}>
							<h2>Our Services</h2>
							<h5>From Individual to Business Solutions</h5>
						</motion.div>
						<div className={styles.moreOptions}>
							<newButton>
								<Link href="">
									<a target="blank">
										View All Services{" "}
										<i className="bi bi-arrow-right-circle"></i>
									</a>
								</Link>
							</newButton>
						</div>
						<motion.div variants={stagger} className={styles.gridDisplay}>
							<motion.div variants={fadeInUp} className={styles.content}>
								<Link href="#launderette">
									<a target="blank">
										<Image
											src="/img/8b0c89140159be4416593876eeefd470.jpg"
											alt="Product Image"
											width={400}
											height={400}
											objectFit="cover"
										></Image>
									</a>
								</Link>
								<div className={styles.header}>
									<Link href="#launderette">
										<a target="blank">Laundry & Dry Cleaning</a>
									</Link>
								</div>
							</motion.div>
							<motion.div variants={fadeInUp} className={styles.content}>
								<Link href="#launderette">
									<a target="blank">
										<Image
											src="/img/hardini-lestari-MujZAKea8Lw-unsplash.jpg"
											alt="Product Image"
											width={400}
											height={400}
											objectFit="cover"
										></Image>
									</a>
								</Link>
								<div className={styles.header}>
									<Link href="#launderette">
										<a target="blank">Groom's Suit Cleaning & Alterations</a>
									</Link>
								</div>
							</motion.div>
							<motion.div variants={fadeInUp} className={styles.content}>
								<Link href="#launderette">
									<a target="blank">
										<Image
											src="/img/8ee51b5c1c83023731f8c9ca972a9c3e.jpg"
											alt="Product Image"
											width={400}
											height={400}
											objectFit="cover"
										></Image>
									</a>
								</Link>

								<div className={styles.header}>
									<Link href="#launderette">
										<a target="blank">Bridal Dress Cleaning & Alterations</a>
									</Link>
								</div>
							</motion.div>
							<motion.div variants={fadeInUp} className={styles.content}>
								<Link href="#launderette">
									<a target="blank">
										<Image
											src="/img/juan-jose-porta-YsoCJDGoiG4-unsplash.jpg"
											alt="Product Image"
											width={400}
											height={400}
											objectFit="cover"
										></Image>
									</a>
								</Link>

								<div className={styles.header}>
									<Link href="#launderette">
										<a target="blank">Alterations & Repairs</a>
									</Link>
								</div>
							</motion.div>
							<motion.div variants={fadeInUp} className={styles.content}>
								<Link href="#launderette">
									<a target="blank">
										<Image
											src="/img/22679eb6cd65c24b2d14f7910980ec95.jpg"
											alt="Product Image"
											width={400}
											height={400}
											objectFit="cover"
										></Image>
									</a>
								</Link>

								<div className={styles.header}>
									<Link href="#launderette">
										<a target="blank">Professional Ironing Services</a>
									</Link>
								</div>
							</motion.div>
							<motion.div variants={fadeInUp} className={styles.content}>
								<Link href="#launderette">
									<a target="blank">
										<Image
											src="/img/f46c1141fb97af8cc03149945a4f19c4.jpg"
											alt="Product Image"
											width={400}
											height={400}
											objectFit="cover"
										></Image>
									</a>
								</Link>

								<div className={styles.header}>
									<Link href="#launderette">
										<a target="blank">Self-Services</a>
									</Link>
								</div>
							</motion.div>
							<motion.div variants={fadeInUp} className={styles.content}>
								<Link href="#launderette">
									<a target="blank">
										<Image
											src="/img/supersoft_duvet_1_8.jpg"
											alt="Product Image"
											width={400}
											height={400}
											objectFit="cover"
										></Image>
									</a>
								</Link>

								<div className={styles.header}>
									<Link href="#launderette">
										<a target="blank">Duvet & Quilts Cleaning</a>
									</Link>
								</div>
							</motion.div>
							<motion.div variants={fadeInUp} className={styles.content}>
								<Link href="#launderette">
									<a target="blank">
										<Image
											src="/img/cashmere-care-step3.webp"
											alt="Product Image"
											width={400}
											height={400}
											objectFit="cover"
										></Image>
									</a>
								</Link>

								<div className={styles.header}>
									<Link href="#launderette">
										<a target="blank">Stain Removing</a>
									</Link>
								</div>
							</motion.div>
							<motion.div variants={fadeInUp} className={styles.content}>
								<Link href="#launderette">
									<a target="blank">
										<Image
											src="/img/209-116s2.webp"
											alt="Product Image"
											width={400}
											height={400}
											objectFit="cover"
										></Image>
									</a>
								</Link>

								<div className={styles.header}>
									<Link href="#launderette">
										<a target="blank">Oxford Shirts</a>
									</Link>
								</div>
							</motion.div>
							<motion.div variants={fadeInUp} className={styles.content}>
								<Link href="#launderette">
									<a target="blank">
										<Image
											src="/img/ORGANICFC02_15_T.webp"
											alt="Product Image"
											width={400}
											height={400}
											objectFit="cover"
										></Image>
									</a>
								</Link>

								<div className={styles.header}>
									<Link href="#launderette">
										<a target="blank">Restaurant Laundry & Linen Cleaning</a>
									</Link>
								</div>
							</motion.div>
							<motion.div variants={fadeInUp} className={styles.content}>
								<Link href="#launderette">
									<a target="blank">
										<Image
											src="/img/920015s12.webp"
											alt="Product Image"
											width={400}
											height={400}
											objectFit="cover"
										></Image>
									</a>
								</Link>

								<div className={styles.header}>
									<Link href="#launderette">
										<a target="blank">Jacket & Coat Alterations</a>
									</Link>
								</div>
							</motion.div>
							<motion.div variants={fadeInUp} className={styles.content}>
								<Link href="#launderette">
									<a target="blank">
										<Image
											src="/img/pexels-sarah-chai-7282372.jpg"
											alt="Product Image"
											width={400}
											height={400}
											objectFit="cover"
										></Image>
									</a>
								</Link>
								<div className={styles.header}>
									<Link href="#launderette">
										<a target="blank">Kids Clothing Alterations</a>
									</Link>
								</div>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</div>

			{/* <!--===== SPECIAL OCCASIONS =====--> */}
			<div className={styles.specialOccasions}>
				<div className="container">
					<div className={styles.content}>
						<motion.div variants={fadeInUp} className={styles.title}>
							<h2>Special Occasions</h2>
							<h5>Remove the stress from your special day</h5>
						</motion.div>

						<div className={styles.innerContent}>
							<div className={styles.productDisplay}>
								<Link href="/suitsOxfordShirts">
									<a target="blank">
										<Image
											src="/img/2f7f5644b96ce5f477f1522efa614d32.jpg"
											alt="Product Image"
											width={300}
											height={400}
											layout="responsive"
											objectFit="cover"
										/>
									</a>
								</Link>
								<motion.div variants={stagger} className={styles.content}>
									<motion.h2 variants={fadeInUp}>
										Dress & Dinner Suits, Oxford Shirts
									</motion.h2>
									<newButton
										className={styles.shopButton}
									>
										<Link href="/suitsOxfordShirts">
											<a target="blank">More Info</a>
										</Link>
									</newButton>
								</motion.div>
							</div>
							<div className={styles.productDisplay}>
								<Link href="/WeddingDressesBridal">
									<a target="blank">
										<Image
											src="/img/2dadbbf0777ed8a16b24ccde6a6f90dd.jpg"
											alt="Product Image"
											width={300}
											height={400}
											layout="responsive"
											objectFit="cover"
										/>
									</a>
								</Link>
								<motion.div variants={stagger} className={styles.content}>
									<motion.h2 variants={fadeInUp}>
										Wedding, Bridesmaids & Evening Dresses{" "}
									</motion.h2>
									<newButton
										className={styles.shopButton}
									>
										<Link href="/WeddingDressesBridal">
											<a target="blank">More Info</a>
										</Link>
									</newButton>
								</motion.div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!--===== WHY CHOOSE US =====--> */}
			<div className={styles.whyChooseUs}>
				<div className="container">
					<div className={styles.content}>
						<div className={styles.title}>
							<h2>Why Choose Us</h2>
							<h5>Finishing touches for the perfect occasion</h5>
							<p>
								Over 2 years ago, Kandys had a vision: to create a company that
								specialized in Professional Dry Cleaning Solutions, combining
								the highest quality with affordable prices.
							</p>
						</div>
						<div className={styles.gridDisplay}>
							<div className={styles.imageDiv}>
								<Image
									src="/img/cashmere-care-how-to-store-1.webp"
									alt="Product Image"
									width={400}
									height={400}
									objectFit="contain"
								></Image>
							</div>
							<div className={styles.description}>
								<h2>
									<strong>Personalized Experience</strong>
								</h2>
								<p>
									We take utmost care of your clothes, segregating based on the
									clothing type and giving you instant relief to make your day
									better.
								</p>
							</div>
							<div className={styles.imageDiv}>
								<Image
									src="/img/cashmere-care-how-to-store-2.webp"
									alt="Product Image"
									width={400}
									height={400}
									objectFit="contain"
								></Image>
							</div>
							<div className={styles.description}>
								<h2>
									<strong>Affordable Pricing</strong>
								</h2>
								<p>
									Prices that suits your pocket is one of our USP. An option of
									choosing between 2 types of pricing is available.
								</p>
							</div>
							<div className={styles.imageDiv}>
								<Image
									src="/img/skubb-storage-case-dark-grey__0954862_pe803520_s5.webp"
									alt="Product Image"
									width={400}
									height={400}
									objectFit="contain"
								></Image>
							</div>
							<div className={styles.description}>
								<h2>
									<strong>Convenience</strong>
								</h2>
								<p>
									With just a tap of a button your laundry get done. Giving you
									leisure time to spend with friends and family.
								</p>
							</div>
							<div className={styles.imageDiv}>
								<Image
									src="/img/stuk-clothes-cover-set-of-3-white-grey__0909410_pe709744_s5.webp"
									alt="Product Image"
									width={400}
									height={400}
									objectFit="contain"
								></Image>
							</div>
							<div className={styles.description}>
								<h2>
									<strong>Quality</strong>
								</h2>
								<p>
									We use the best in class laundry products to assure you, that
									your favorite clothes are always taken care of.
								</p>
							</div>
							<div className={styles.imageDiv}>
								<Image
									src="/img/skubb-storage-case-dark-grey__0940614_pe795076_s5.webp"
									alt="Product Image"
									width={400}
									height={400}
									objectFit="contain"
								></Image>
							</div>
							<div className={styles.description}>
								<h2>
									<strong>Express Delivery</strong>
								</h2>
								<p>
									Forgot to wash your favorite clothes for an event, function or
									a night out. With our super same day service and express free
									delivery.
								</p>
							</div>
							<div className={styles.imageDiv}>
								<Image
									src="/img/920015s10.webp"
									alt="Product Image"
									width={400}
									height={400}
									objectFit="cover"
								></Image>
							</div>
							<div className={styles.description}>
								<h2>
									<strong>Alterations</strong>
								</h2>
								<p>
									Damn it, you ripped your favorite clothes. No problem! we can
									handle that for you. If you need altering for your clothes we
									can cover it.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!--===== HOTEL & RESTAURANT =====--> */}
			<div className={styles.hotelAndRestaurant}>
				<div className="container">
					<div className={styles.content}>
						<div className={styles.title}>
							<h2>Hotel & Restaurant Services</h2>
							<h5>
								Attention To Detail, Affordable Professionalism & Perfect
								Simplicity
							</h5>
						</div>
						<div className={styles.gridDisplay}>
							<div className={styles.content}>
								<Link href="#launderette">
									<a target="blank">
										<Image
											src="/img/Bath_Linen_Buying_Guide.webp"
											alt="Product Image"
											width={400}
											height={400}
											objectFit="cover"
										></Image>
									</a>
								</Link>

								<div className={styles.header}>
									<Link href="#launderette">
										<a target="blank">Table & Bath Towels Dry Cleaning</a>
									</Link>
								</div>
							</div>
							<div className={styles.content}>
								<Link href="#launderette">
									<a target="blank">
										<Image
											src="/img/supersoft_duvet_1_8.jpg"
											alt="Product Image"
											width={400}
											height={400}
											objectFit="cover"
										></Image>
									</a>
								</Link>

								<div className={styles.header}>
									<Link href="#launderette">
										<a target="blank">Duvet & Quilts Dry Cleaning </a>
									</Link>
								</div>
							</div>
							<div className={styles.content}>
								<Link href="#launderette">
									<a target="blank">
										<Image
											src="/img/Size-Chart-LP_Bed-Essentials.webp"
											alt="Product Image"
											width={400}
											height={400}
											objectFit="cover"
										></Image>
									</a>
								</Link>

								<div className={styles.header}>
									<Link href="#launderette">
										<a target="blank">Bed & Table Linen Dry Cleaning</a>
									</Link>
								</div>
							</div>
							<div className={styles.content}>
								<Link href="#launderette">
									<a target="blank">
										<Image
											src="/img/cashmere-care-step4.webp"
											alt="Product Image"
											width={400}
											height={400}
											objectFit="cover"
										></Image>
									</a>
								</Link>

								<div className={styles.header}>
									<Link href="#launderette">
										<a target="blank">Professional Laundering & Ironing</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!--===== Background Image Divider =====--> */}
			<div className={styles.backgroundImageDivider}></div>

			{/* <!--===== OUT STORE LOCATION =====--> */}
			<StoreLocation />

			{/* <!--===== FOOTER =====--> */}
			<Footer />
		</motion.div>
	);
}
