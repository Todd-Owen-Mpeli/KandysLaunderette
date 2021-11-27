import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";
import styles from "/styles/Home.module.scss";

const IndividualService = () => {
	return (
		<>
			<div>
				{/* <!--===== HEAD =====--> */}
				<Head>
					{/* <!-- Website Title --> */}
					<title>Individual Self-Service | Kandys Launderette</title>
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

				{/* // <========== PAGE TITLE ==========> */}
				<div className={styles.mainContent}>
					<div className="container">
						<div className={styles.previousButton}>
							<Link href="/LaundryDryCleaning">
								<a>
									<i className="bi bi-arrow-left-circle"></i>
								</a>
							</Link>
						</div>
						<div className={styles.content}>
							<div className={styles.title}>
								<h2>Individual Self-Service</h2>
								<p>
									Our Individual Self-Services allows any of our customers to
									arrive at our store are select the various options we provide.
									No prior booking required. <br></br>
									Most our customer book in advance when they need their items
									completed by and when they plan to arrive.
								</p>
							</div>
							<div className={styles.subtitle}>
								<h2>All Our Services</h2>
							</div>
							<div className={styles.innerContent}>
								<div className={styles.servicesList}>
									<div className={styles.List}>
										<h2>Suits</h2>
										<ul>
											<Link href="">
												<a>2 Piece Suit</a>
											</Link>
											<Link href="">
												<a>2 Piece Dress Suit</a>
											</Link>
											<Link href="">
												<a>2 Piece Dinner Suit</a>
											</Link>
											<Link href="">
												<a>3 Piece Suit</a>
											</Link>
										</ul>
									</div>
									<div className={styles.List}>
										<h2>Trousers</h2>
										<ul>
											<Link href="">
												<a>Regular Trousers</a>
											</Link>
											<Link href="">
												<a>Silk Trousers</a>
											</Link>
										</ul>
									</div>
									<div className={styles.List}>
										<h2>Skirts</h2>
										<ul>
											<Link href="">
												<a>Regular Skirts</a>
											</Link>
											<Link href="">
												<a>Long Skirts</a>
											</Link>
											<Link href="">
												<a>Part Pleated Skirts</a>
											</Link>
											<Link href="">
												<a>Fully Pleated Skirts</a>
											</Link>
										</ul>
									</div>
									<div className={styles.List}>
										<h2>Dresses</h2>
										<ul>
											<Link href="">
												<a>Day Dress</a>
											</Link>
											<Link href="">
												<a>Silk Day Dress</a>
											</Link>
											<Link href="">
												<a>Plain Evening Dress</a>
											</Link>
											<Link href="">
												<a>Silk Evening Dress</a>
											</Link>
											<Link href="">
												<a>Elaborate Evening Dress</a>
											</Link>
											<Link href="">
												<a>Prom Dress</a>
											</Link>
											<Link href="">
												<a>Ball Grown</a>
											</Link>
										</ul>
									</div>
									<div className={styles.List}>
										<h2>Coats</h2>
										<ul>
											<Link href="">
												<a>3/4 Length Wool Coat</a>
											</Link>
											<Link href="">
												<a>Full Length Coat</a>
											</Link>
											<Link href="">
												<a>Raincoat / Mack</a>
											</Link>
											<Link href="">
												<a>Puffa Jacket</a>
											</Link>
											<Link href="">
												<a>Fake Fur Fabrics</a>
											</Link>
										</ul>
									</div>
									<div className={styles.List}>
										<h2>Tops & Shirts</h2>
										<ul>
											<Link href="">
												<a>Shirts</a>
											</Link>
											<Link href="">
												<a>Lightweight Jumper</a>
											</Link>
											<Link href="">
												<a>Evening Top</a>
											</Link>
											<Link href="">
												<a>Bustier Top</a>
											</Link>
											<Link href="">
												<a>Silk Bustier Top</a>
											</Link>
											<Link href="">
												<a>Silk Shirt </a>
											</Link>
										</ul>
									</div>
									<div className={styles.List}>
										<h2>Jackets</h2>
										<ul>
											<Link href="">
												<a>Jackets</a>
											</Link>
										</ul>
									</div>
									<div className={styles.List}>
										<h2>Throw-over</h2>
										<ul>
											<Link href="">
												<a>Single</a>
											</Link>
											<Link href="">
												<a>Double</a>
											</Link>
										</ul>
									</div>
									<div className={styles.List}>
										<h2>Wedding Items</h2>
										<ul>
											<Link href="">
												<a>Wedding Dress</a>
											</Link>
											<Link href="">
												<a>Boxed</a>
											</Link>
											<Link href="">
												<a>Silk Wedding Dress</a>
											</Link>
											<Link href="">
												<a>Bridesmaids Dresses</a>
											</Link>
											<Link href="">
												<a>Flower Girl Dress</a>
											</Link>
										</ul>
									</div>
									<div className={styles.List}>
										<h2>Accessories</h2>
										<ul>
											<Link href="">
												<a>Tie</a>
											</Link>
											<Link href="">
												<a>Scarf</a>
											</Link>
											<Link href="">
												<a>Pashmina</a>
											</Link>
											<Link href="">
												<a>Wrap</a>
											</Link>
											<Link href="">
												<a>Hats</a>
											</Link>
											<Link href="">
												<a>Dressing Gown</a>
											</Link>
											<Link href="">
												<a>Waist Coat</a>
											</Link>
											<Link href="">
												<a>Silk Waist Coat</a>
											</Link>
										</ul>
									</div>
									<div className={styles.List}>
										<h2>Duvet Cleaning</h2>
										<ul>
											<Link href="">
												<a>Single</a>
											</Link>
											<Link href="">
												<a>Double</a>
											</Link>
											<Link href="">
												<a>Single Blanket</a>
											</Link>
										</ul>
									</div>
									<div className={styles.List}>
										<h2>Sleeping Bag</h2>
										<ul>
											<Link href="">
												<a>Single</a>
											</Link>
											<Link href="">
												<a>Double</a>
											</Link>
											<Link href="">
												<a>Child Size</a>
											</Link>
										</ul>
									</div>
									<div className={styles.List}>
										<h2>Full Bags</h2>
										<ul>
											<Link href="">
												<a>Large - Wash, Dry & Fold</a>
											</Link>
											<Link href="">
												<a>XL - Wash, Dry & Fold</a>
											</Link>
										</ul>
									</div>
								</div>
								<div className={styles.servicesDisplays}>
									<div className={styles.ImageDivider}></div>
									<div className={styles.servicesDisplay}>
										<div className={styles.content}>
											<Link href="#launderette" target="blank">
												<a>
													<Image
														src="/img/04438fc4fc1a9a09b7c2e06de39eccee.jpg"
														alt="Product Image"
														width={400}
														height={400}
														objectFit="cover"
													></Image>
												</a>
											</Link>
											<div className={styles.header}>
												<Link href="#launderette" target="blank">
													<a>Laundry & Dry Cleaning</a>
												</Link>
											</div>
										</div>
										<div className={styles.content}>
											<Link href="#launderette" target="blank">
												<a>
													<Image
														src="/img/491-325s2.webp"
														alt="Product Image"
														width={400}
														height={400}
														objectFit="cover"
													></Image>
												</a>
											</Link>
											<div className={styles.header}>
												<Link href="#launderette" target="blank">
													<a>Grooms Suit Cleaning & Alterations</a>
												</Link>
											</div>
										</div>
										<div className={styles.content}>
											<Link href="#launderette" target="blank">
												<a>
													<Image
														src="/img/2dadbbf0777ed8a16b24ccde6a6f90dd.jpg"
														alt="Product Image"
														width={400}
														height={400}
														objectFit="cover"
													></Image>
												</a>
											</Link>
											<div className={styles.header}>
												<Link href="#launderette" target="blank">
													<a>Bridal Dress Cleaning & Alterations</a>
												</Link>
											</div>
										</div>
										<div className={styles.content}>
											<Link href="#launderette" target="blank">
												<a>
													<Image
														src="/img/231-419s.webp"
														alt="Product Image"
														width={400}
														height={400}
														objectFit="cover"
													></Image>
												</a>
											</Link>
											<div className={styles.header}>
												<Link href="#launderette" target="blank">
													<a>Alterations & Repairs</a>
												</Link>
											</div>
										</div>
									</div>
									<div className={styles.ImageDividerTwo}></div>
									<div className={styles.servicesDisplay}>
										<div className={styles.content}>
											<Link href="#launderette" target="blank">
												<a>
													<Image
														src="/img/572e21864592e57f4a6d121be547b12d.jpg"
														alt="Product Image"
														width={400}
														height={400}
														objectFit="cover"
													></Image>
												</a>
											</Link>

											<div className={styles.header}>
												<Link href="#launderette" target="blank">
													<a>Professional Ironing Services</a>
												</Link>
											</div>
										</div>
										<div className={styles.content}>
											<Link href="#launderette" target="blank">
												<a>
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
												<Link href="#launderette" target="blank">
													<a>Self-Services</a>
												</Link>
											</div>
										</div>
										<div className={styles.content}>
											<Link href="#launderette" target="blank">
												<a>
													<Image
														src="/img/supersoft_duvet_2_2_2.jpg"
														alt="Product Image"
														width={400}
														height={400}
														objectFit="cover"
													></Image>
												</a>
											</Link>

											<div className={styles.header}>
												<Link href="#launderette" target="blank">
													<a>Duvet & Quilts Cleaning</a>
												</Link>
											</div>
										</div>
										<div className={styles.content}>
											<Link href="#launderette" target="blank">
												<a>
													<Image
														src="/img/cashmere-care-step2.webp"
														alt="Product Image"
														width={400}
														height={400}
														objectFit="cover"
													></Image>
												</a>
											</Link>

											<div className={styles.header}>
												<Link href="#launderette" target="blank">
													<a>Stain Removing</a>
												</Link>
											</div>
										</div>
									</div>
									<div className={styles.ImageDividerThree}></div>
									<div className={styles.servicesDisplay}>
										<div className={styles.content}>
											<Link href="#launderette" target="blank">
												<a>
													<Image
														src="/img/209-116s4.webp"
														alt="Product Image"
														width={400}
														height={400}
														objectFit="cover"
													></Image>
												</a>
											</Link>

											<div className={styles.header}>
												<Link href="#launderette" target="blank">
													<a>Oxford Shirts</a>
												</Link>
											</div>
										</div>
										<div className={styles.content}>
											<Link href="#launderette" target="blank">
												<a>
													<Image
														src="/img/Multislider_Rustic_Linen_Napkins.webp"
														alt="Product Image"
														width={400}
														height={400}
														objectFit="cover"
													></Image>
												</a>
											</Link>

											<div className={styles.header}>
												<Link href="#launderette" target="blank">
													<a>Restaurant Laundry & Linen Cleaning</a>
												</Link>
											</div>
										</div>
										<div className={styles.content}>
											<Link href="#launderette" target="blank">
												<a>
													<Image
														src="/img/221-057s.webp"
														alt="Product Image"
														width={400}
														height={400}
														objectFit="cover"
													></Image>
												</a>
											</Link>

											<div className={styles.header}>
												<Link href="#launderette" target="blank">
													<a>Jacket & Coat Alterations</a>
												</Link>
											</div>
										</div>
										<div className={styles.content}>
											<Link href="#launderette" target="blank">
												<a>
													<Image
														src="/img/stuk-organiser-white__1035115_pe837986_s5.webp"
														alt="Product Image"
														width={400}
														height={400}
														objectFit="cover"
													></Image>
												</a>
											</Link>
											<div className={styles.header}>
												<Link href="#launderette" target="blank">
													<a>Kids Clothing Alterations</a>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!--===== FOOTER =====--> */}
				<Footer />
			</div>
		</>
	);
};

export default IndividualService;
