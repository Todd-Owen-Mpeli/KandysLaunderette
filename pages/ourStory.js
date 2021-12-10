import Head from "next/head";
import Image from "next/image";
import {motion} from "framer-motion";
import NavbarTwo from "/components/NavbarTwo";
import StoreLocation from "/components/storeLocation";
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

const fadeIn2 = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {duration: 1, delay: 2, ease: "easeOut"},
	},
};

const stagger = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const ourStory = () => {
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
				<title>Our Story | Kandys Launderette</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/img/Logo.png" />

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

			<div className={styles.backgroundTopCover}>
				{/* <!--===== NAVIGATION =====--> */}
				<NavbarTwo />

				{/* // <========== PAGE TITLE ==========> */}
				<div className={styles.ourStory}>
					<div className={styles.pageTitle}>
						<div className="container">
							<div className={styles.content}>
								<div className={styles.title}>
									<h2>Our Story</h2>
									<h5>The Best Stress Free Dry Cleaning Solutions.</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* // <========== ABOUT US DESCRIPTIONS ==========> */}
			<div className={styles.aboutUs}>
				<div className="container">
					<div className={styles.content}>
						<h2>We may be new to you</h2>
						<p>
							But We believe in making the most of life's simple pleasures -
							it's the little things that matter. Precious moments of
							uncomplicated happiness are our constant inspiration, and it is
							with these in mind that we create collections of services that are
							built to last and become an intimate part of your everyday lives.
							<br></br>
							<br></br>I cannot emphasize enough how much thought, care, and
							attention to detail goes into every service we make at The White
							Company - I hope you'll cherish your purchases as much as we do.
							<br></br>
							<br></br>
							<span>We're delighted to meet you</span>
						</p>
					</div>
				</div>
			</div>

			{/* // <========== SUITS & OXFORD DESCRIPTIONS ==========> */}
			<div className={styles.ourLeader}>
				<div className="container">
					<div className={styles.gridDisplay}>
						<Image
							src="/img/karsten-winegeart-bwDnRf-r4u8-unsplash.jpg"
							alt="Product Image"
							width={400}
							height={800}
							objectFit="cover"
						></Image>
						<Image
							src="/img/karsten-winegeart-Q7iB4Yixcfw-unsplash.jpg"
							alt="Product Image"
							width={400}
							height={800}
							objectFit="cover"
						></Image>
					</div>
					<div className={styles.content}>
						<div className={styles.description}>
							<h2>Kandy Chrissie Rucker</h2>
							<p>
								Over 2 years ago, Kandy Chrissie Rucker had a vision: to create
								a company that specialized in Laundry & Dry Cleaning,
								Alterations & Repairs, amongst many other services combining the
								highest quality with affordable prices.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* <!--===== OUR COLLECTION =====--> */}
			<div className={styles.ourCollections}>
				<div className="container">
					<div className={styles.content}>
						<div className={styles.title}>
							<h2>Our Attention to Detail</h2>
							<h5>Consistency, Efficiency & Perfection.</h5>
						</div>
						<div className={styles.gridDisplay}>
							<div className={styles.innerContent}>
								<div className={styles.Image}>
									<Image
										src="/img/nimble-made-N0ke5zChVBU-unsplash.jpg"
										alt="Product Image"
										width={600}
										height={800}
										objectFit="cover"
									></Image>
								</div>
								<div className={styles.description}>
									<h2>Service</h2>
									<p>
										Our staff are highly skilled and trained to understand the
										complexity of clothes and household furnishings. You can be
										confident that your articles will always receive the
										greatest care in dry cleaning, wet cleaning and stain
										removal services.
										<br></br>
										<br></br>
										Equally we pride ourselves on our ability to iron and hand
										finish your garments to the highest standard, so they will
										look their best for your future enjoyment.
									</p>
								</div>
							</div>
						</div>
						<div className={styles.gridDisplayTwo}>
							<div className={styles.innerContent}>
								<div className={styles.description}>
									<h2>Convenience</h2>
									<p>
										We are located in high Street downtown Swansea. However We
										also operate a collection and delivery service.
										<br></br>
										<br></br>
										We have a variety of vehicles on the road and in telephone
										contact, enabling a prompt response to your requests.
									</p>
								</div>
								<div className={styles.Image}>
									<Image
										src="/img/nimble-made-Jf7JqVazm-4-unsplash.jpg"
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

			{/* <!--===== OUT STORE LOCATION =====--> */}
			<StoreLocation />

			{/* <!--===== FOOTER =====--> */}
			<Footer />
		</motion.div>
	);
};

export default ourStory;
