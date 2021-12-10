import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "/components/Navbar";
import {motion} from "framer-motion";
import ContactInfo from "/components/ContactInfo";
import Footer from "/components/Footer";
import styles from "/styles/Home.module.scss";

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
		transition: {duration: 1, delay: 0.5, ease: "easeOut"},
	},
};

const stagger = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const LaundryDryCleaning = () => {
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
				<title>Laundry & Dry Cleaning | Kandys Launderette</title>
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

			{/* // <========== BACKGROUND IMAGE ==========> */}
			<div className={styles.backgroundImageOne}></div>

			{/* // <========== PAGE TITLE ==========> */}
			<div className={styles.pageTitle}>
				<div className="container">
					<div className={styles.content}>
						<motion.div variants={fadeInUp} className={styles.title}>
							<h2>Laundry & Dry Cleaning</h2>
							<h5>From Individual to Business Solutions</h5>
						</motion.div>
					</div>
				</div>
			</div>

			{/* // <========== OPTIONS ==========> */}
			<div className={styles.options}>
				<div className="container">
					<div className={styles.content}>
						<div className={styles.title}>
							<h2>Our Options</h2>
							<h5>
								Choose Between our Individual service option. Or our more
								Business tailored dry cleaning service.
							</h5>
						</div>

						<div className={styles.innerContent}>
							<div className={styles.productDisplay}>
								<Link
									href="LaundryAndDryCleaning/IndividualService"
									target="blank"
								>
									<a>
										<Image
											src="/img/Size-Chart-LP_Mens.webp"
											alt="Product Image"
											width={300}
											height={300}
											layout="responsive"
											objectFit="cover"
										/>
									</a>
								</Link>
								<div className={styles.content}>
									<newButton className={styles.shopButton}>
										<Link
											href="LaundryAndDryCleaning/IndividualService"
											target="blank"
										>
											<a>Individual Services</a>
										</Link>
									</newButton>
								</div>
							</div>
							<div className={styles.productDisplay}>
								<Link
									href="LaundryAndDryCleaning/businessService"
									target="blank"
								>
									<a>
										<Image
											src="/img/05a848344f865a82cda0eec6cf53e861.jpg"
											alt="Product Image"
											width={300}
											height={300}
											layout="responsive"
											objectFit="cover"
										/>
									</a>
								</Link>
								<div className={styles.content}>
									<newButton className={styles.shopButton}>
										<Link
											href="LaundryAndDryCleaning/businessService"
											target="blank"
										>
											<a>Business Services</a>
										</Link>
									</newButton>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!--===== INFORMATION SECTION =====--> */}
			<ContactInfo />

			{/* <!--===== FOOTER =====--> */}
			<Footer />
		</motion.div>
	);
};

export default LaundryDryCleaning;
