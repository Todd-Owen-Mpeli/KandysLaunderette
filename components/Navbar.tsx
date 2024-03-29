/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import {useState} from "react";
import {FunctionComponent} from "react";
import NavbarMenuSublinks from "./NavbarMenuSublinks";
import styles from "../styles/components/Navbar.module.scss";

interface IProps {
	IndividualServicesMenuLinks: [
		{
			node: {
				id: string;
				uri: string;
				label: string;
			};
		}
	];
	CommercialServicesMenuLinks: [
		{
			node: {
				id: string;
				uri: string;
				label: string;
			};
		}
	];
}

const Navbar: FunctionComponent<IProps> = ({
	CommercialServicesMenuLinks,
	IndividualServicesMenuLinks,
}) => {
	// Display Services sublinks
	const [servicesMenusOpen, setServicesMenuOpen]: any = useState(false);
	const [IndividualServicesMenuOpen, setIndividualServicesMenuOpen]: any =
		useState(false);
	const [CommercialServicesMenuOpen, setCommercialServicesMenuOpen]: any =
		useState(false);

	// Hides or Display Services sublinks
	function displayServicesMenu() {
		setServicesMenuOpen(!servicesMenusOpen);
	}

	// Hides or Display Commercial Services sublinks
	function displayCommercialServicesMenu() {
		setCommercialServicesMenuOpen(!CommercialServicesMenuOpen);
	}
	// Hides or Display Individual Services sublinks
	function displayIndividualServicesMenu() {
		setIndividualServicesMenuOpen(!IndividualServicesMenuOpen);
	}

	return (
		<section className={styles.navbar}>
			<div className="container mx-auto py-5 px-4">
				<div className="flex justify-between">
					<div className="flex flex-row justify-start items-center gap-10">
						<div className="my-auto">
							<Link
								href="/"
								className="uppercase my-auto px-2 text-3xl font-[500] text-fadedPinkThree hover:text-fadedPinkThree transition-all ease-in-out duration-[0.5s]"
							>
								Kandys
							</Link>
						</div>
						<ul className="hidden my-auto py-3 lg:flex justify-center gap-8 text-sm text-black">
							<Link
								href="/HowItWorks"
								className="text-black text-base text-left font-[400] tracking-[0.05rem] hover:text-fadedPinkThree transition-all ease-in-out duration-[0.5s]"
							>
								How it works
							</Link>
							<div className="relative menuLink ">
								<span className="flex flex-row justify-center items-center gap-2 ">
									<Link
										href="/Services"
										className="text-black text-base text-left font-[400] tracking-[0.05rem] hover:text-fadedPinkThree transition-all ease-in-out duration-[0.5s]"
									>
										Services
									</Link>
									<Image
										width={550}
										height={550}
										alt="black Arrow Icon"
										className="cursor-pointer w-[21px] h-[21px]"
										src="/svg/Navigation Menu Dropdown Arrow Black.png"
										onClick={displayServicesMenu}
									/>
								</span>
								{servicesMenusOpen ? (
									<div className="flex flex-col justify-center absolute z-[999] w-[max-content] bg-pink rounded-lg mt-5">
										{/* Individual Services Menu Links*/}
										<div>
											<div className="hover:rounded-t-lg hover:bg-fadedPink transition-all ease-in-out duration-[0.5s]">
												<span className="flex flex-row py-3 px-6 justify-center items-center">
													<Link
														href="/LaundryAndDryCleaning/IndividualService"
														className="w-full text-white text-base text-left font-[400] tracking-[0.05rem]"
													>
														Individual Services
													</Link>
													<Image
														width={550}
														height={550}
														alt="white Arrow Icon"
														className="cursor-pointer w-[25px] h-[25px]"
														src="/svg/Navigation Menu Dropdown Arrow.png"
														onClick={displayIndividualServicesMenu}
													/>
												</span>
											</div>
											{IndividualServicesMenuOpen ? (
												<ul className="flex flex-col justify-center bg-darkPink">
													{/* Menu Array from Wordpress */}
													{IndividualServicesMenuLinks?.map((keys) => (
														<NavbarMenuSublinks
															key={keys?.node?.id}
															linkUrl={keys?.node?.uri}
															linkName={keys?.node?.label}
														/>
													))}
												</ul>
											) : null}
										</div>
										{/* Commercial Services Menu Links*/}
										<div>
											<div className="hover:rounded-b-lg hover:bg-fadedPink transition-all ease-in-out duration-[0.5s]">
												<span className="flex flex-row py-3 px-6 justify-center items-center">
													<Link
														href="/LaundryAndDryCleaning/CommercialServices"
														className="w-full text-white text-base text-left font-[400] tracking-[0.05rem]"
													>
														Commercial Services
													</Link>
													<Image
														width={550}
														height={550}
														alt="white Arrow Icon"
														className="cursor-pointer w-[25px] h-[25px]"
														src="/svg/Navigation Menu Dropdown Arrow.png"
														onClick={displayCommercialServicesMenu}
													/>
												</span>
											</div>
											{CommercialServicesMenuOpen ? (
												<ul className="flex flex-col justify-center bg-darkPink rounded-b-lg">
													{/* Menu Array from Wordpress */}
													{CommercialServicesMenuLinks?.map((keys) => (
														<NavbarMenuSublinks
															key={keys?.node?.id}
															linkUrl={keys?.node?.uri}
															linkName={keys?.node?.label}
														/>
													))}
												</ul>
											) : null}
										</div>
									</div>
								) : null}
							</div>
							<Link
								href="/Prices"
								className="text-black text-base text-left font-[400] tracking-[0.05rem] hover:text-fadedPinkThree transition-all ease-in-out duration-[0.5s]"
							>
								Prices
							</Link>
							<Link
								href="/AboutUs"
								className="text-black text-base text-left font-[400] tracking-[0.05rem] hover:text-fadedPinkThree transition-all ease-in-out duration-[0.5s]"
							>
								About us
							</Link>
						</ul>
					</div>
					<div className="hidden md:flex justify-center items-center gap-4">
						<Link
							href="/HowItWorks"
							className="my-auto px-2 text-base tracking-[0.05rem] text-black hover:text-fadedPink transition-all ease-in-out duration-[0.5s]"
						>
							Log in
						</Link>
						<button className="rounded-lg py-3 px-8 text-white bg-pink hover:text-white hover:bg-yellow transition-all ease-in-out duration-[0.5s]">
							<Link
								href="/Login"
								className="text-right text-base font-[600] hover:text-white transition-all ease-in-out duration-[0.5s]"
							>
								Create an account
							</Link>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Navbar;
