import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn, fadeInUp} from "../animations/animations";
import IconTextCard from "./IconTextCard";
import styles from "../styles/components/ImageTextBulletPoints.module.scss";

const ImageTextBulletPoints = (props) => {
	return (
		<section className={styles.imageTextBulletPoints}>
			<div className="container mx-auto p-0">
				<div className="flex flex-col-reverse lg:flex-row gap-20 justify-center items-center">
					<motion.div variants={fadeIn}>
						<Image
							width={550}
							height={550}
							objectFit="cover"
							alt={`${props?.title} Image`}
							src={`${props?.Image}`}
							className="w-full h-[550px] object-cover object-center"
						/>
					</motion.div>
					<motion.div variants={fadeInUp}>
						<h2 className="text-blue text-center lg:text-left font-[600] text-3xl lg:text-5xl py-8  leading-10 w-full md:w-[35rem] mx-auto lg:mx-0">
							{props?.title}
						</h2>
						<div className="flex flex-col py-8 gap-4">
							{/* Array Loop */}
							{props.bulletPoints.map((keys) => (
								<IconTextCard
									Key={keys?.id}
									// Content
									text={keys?.text}
									icon={keys?.icon?.sourceUrl}
								/>
							))}
						</div>
						<motion.button
							variants={fadeIn}
							className="mt-5 w-[fit-content] py-2 px-6 flex flex-col justify-left bg-white rounded-lg text-blue hover:text-white hover:bg-pink hover:ease-in-out hover:duration-[0.5s]"
						>
							<Link
								href={`${props?.buttonLink?.url}`}
								target={`${props?.buttonLink?.target}`}
							>
								<a className="hover:text-white text-base font-[600] py-2 px-4 ">
									{props?.buttonLink?.title}
								</a>
							</Link>
						</motion.button>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default ImageTextBulletPoints;
