import Head from "next/head";
import Image from "next/image";
import Navbar from "/components/Navbar";
import OurProcess from "/components/ourProcess";
import FooterDark from "/components/FooterDark";
import styles from "/styles/Home.module.scss";

const suitsOxfordShirts = () => {
	return (
		<>
			{/* <!--===== HEAD =====--> */}
			<Head>
				{/* <!-- Website Title --> */}
				<title>Suits & Oxford Shirts | Kandys Launderette</title>
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

			{/* <!--===== NAVIGATION =====--> */}
			<Navbar />

			{/* // <========== BACKGROUND IMAGE ==========> */}
			<div className={styles.backgroundImageSuitsOxfordShirts}></div>

			{/* // <========== PAGE TITLE ==========> */}
			<div className={styles.pageTitle}>
				<div className="container">
					<div className={styles.content}>
						<div className={styles.title}>
							<h2>Suits & Oxford Shirts</h2>
							<h5>Men's only Dry Cleaning Solutions</h5>
						</div>
					</div>
				</div>
			</div>

			{/* // <========== SUITS & OXFORD DESCRIPTIONS ==========> */}
			<div className={styles.suitsOxford}>
				<div className="container">
					<div className={styles.gridDisplay}>
						<div className={styles.content}>
							<Image
								src="/img/alexander-naglestad-MZbZQEx91Ek-unsplash.jpg"
								alt="Product Image"
								width={400}
								height={400}
								objectFit="cover"
							></Image>
							<div className={styles.description}>
								<h2>Suits</h2>
								<p>
									We offer suit cleaning & alterations for everyday and special
									day occasions. We specialize in 2 Piece & 3 Piece suits and in
									2 Piece Dress & Dinner Suit.
								</p>
							</div>
						</div>
						<div className={styles.content}>
							<Image
								src="/img/nimble-made-m2z2wJ1XX6Q-unsplash.jpg"
								alt="Product Image"
								width={400}
								height={400}
								objectFit="cover"
							></Image>
							<div className={styles.description}>
								<h2>Oxford Shirts</h2>
								<p>
									Business Casual has never been any easier. we offer dry
									cleaning & alterations solutions for everyday occasions. We
									specialize in Regular or Silk shirts.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!--===== WEDDING SUITS =====--> */}
			<div className={styles.weddingSuits}>
				<div className="container">
					<div className={styles.content}>
						<div className={styles.title}>
							<h2>Wedding Suits</h2>
							<h5>We make your special day simple.</h5>
						</div>
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
								<div className={styles.description}>
									<h2>Suits</h2>
									<p>
										We offer suit cleaning & alterations for everyday and
										special day occasions. We specialize in wedding suits, 2
										Piece & 3 Piece suits and in 2 Piece Dress & Dinner Suit.
									</p>
								</div>
							</div>
						</div>
						<div className={styles.groomsmenDisplay}>
							<div className={styles.innerContent}>
								<div className={styles.description}>
									<h2>Groomsmen Suits</h2>
									<p>
										We also take care of your Groomsmen suits. Either 2 Piece &
										3 Piece suits, we specialize in all of them.
									</p>
								</div>
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

			{/* <!--===== OUR PROCESS INFORMATION =====--> */}
			<OurProcess />

			{/* <!--===== ALTERATIONS & REPAIRS =====--> */}
			<div className={styles.alterationsRepairs}>
				<div className="container">
					<div className={styles.content}>
						<div className={styles.title}>
							<h2>Suits Alterations & Repairs</h2>
							<h5>Perfection has never been so easy</h5>
						</div>
					</div>
				</div>
				<div className={styles.backgroundImage}></div>
				<div className="container">
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
								<div className={styles.description}>
									<h2>Alterations</h2>
									<p>
										We offer suit cleaning & alterations for everyday and
										special day occasions. We specialize in wedding suits, 2
										Piece & 3 Piece suits and in 2 Piece Dress & Dinner Suit.
									</p>
								</div>
							</div>
						</div>
						<div className={styles.repairsDisplay}>
							<div className={styles.innerContent}>
								<div className={styles.description}>
									<h2>Repairs</h2>
									<p>
										We also take care of your Groomsmen suits. Either 2 Piece &
										3 Piece suits, we specialize in all of them.
									</p>
								</div>
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

			{/* <!--===== FOOTER =====--> */}
			<FooterDark />
		</>
	);
};

export default suitsOxfordShirts;
