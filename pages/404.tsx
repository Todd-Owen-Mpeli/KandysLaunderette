import Head from "next/head";
import Link from "next/link";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {
	getCommercialServicesMenu,
	getIndividualServicesMenu,
} from "../lib/MenuLinks";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const noPageExits = ({
	themesOptionsContent,
	CommercialServicesMenuLinks,
	IndividualServicesMenuLinks,
}: any) => {
	return (
		<>
			<Head>
				<title>404 Page Not Found | Professional Dry Cleaning Solutions</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/img/Logo.png" />
			</Head>

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
				<section
					className="h-[fit-content] sm:h-[100vh] bg-cover bg-center bg-[no-repeat] flex flex-col justify-center items-center"
					style={{
						backgroundImage: `linear-gradient(
										0deg,
										rgba(13, 23, 42, 0.45),
										rgba(13, 23, 42, 0.45)
									),
									url("/wp-content/uploads/2023/02/pexels-vlada-karpovich-7365299-scaled.jpg")`,
					}}
				>
					<div className="px-10 my-auto overflow-hidden py-44">
						<div className="container p-0 mx-auto">
							<h1 className="mb-4 text-5xl md:text-7xl text-white text-center font-[600] font-heading leading-tight">
								Something went wrong!
							</h1>
							<p className="mx-auto my-10 text-lg leading-relaxed text-center text-white md:max-w-md">
								The page you are looking for is not found! Try something else or
								go back to homepage.
							</p>
							<div className="flex flex-col items-center justify-center mx-auto md:max-w-max">
								<button type="button">
									<Link href={`/`} target={``}>
										<a className="py-4 px-6 lg:py-6 lg:px-20 flex flex-row font-[700] text-white text-base leading-4 bg-pink rounded-lg hover:bg-yellow transition-all ease-in-out duration-[0.5s]">
											<svg
												className="mr-2.5 text-white"
												width="16"
												height="16"
												viewBox="0 0 16 16"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M6.66667 12.6666L2 7.99998M2 7.99998L6.66667 3.33331M2 7.99998L14 7.99998"
													stroke="currentColor"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												></path>
											</svg>
											<span className="font-normal text-white">
												Go Back to Homepage
											</span>
										</a>
									</Link>
								</button>
							</div>
						</div>
					</div>
				</section>
			</main>

			{/* <!--===== FOOTER =====--> */}
			<Footer
				email={themesOptionsContent?.themesOptions?.email}
				phoneNumber={themesOptionsContent?.themesOptions?.phoneNumber}
				IndividualServicesMenuLinks={
					IndividualServicesMenuLinks?.IndividualServicesMenuLinks
				}
			/>
		</>
	);
};

export default noPageExits;

export async function getStaticProps() {
	const themesOptionsContent: object = await getThemesOptionsContent();
	const CommercialServicesMenuLinks: object = await getCommercialServicesMenu();
	const IndividualServicesMenuLinks: object = await getIndividualServicesMenu();

	return {
		props: {
			themesOptionsContent,
			CommercialServicesMenuLinks,
			IndividualServicesMenuLinks,
		},
	};
}
