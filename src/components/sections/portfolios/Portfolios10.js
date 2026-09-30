"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PortfolioCard10 from "@/components/shared/cards/PortfolioCard10";
import tjStackAnimation from "@/libs/tjStackAnimation";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const portfolio = [
	{
		title: "JYSK Kuwait",
		tags: ["Ecommerce", "Retail"],
		desc: "Furniture retail, brought online. Our ecommerce website project for JYSK Kuwait adds a familiar home furnishings brand to Anathoth’s portfolio of digital retail experiences.",
		path: "/our-work/jysk-kuwait",
		img6: "/images/project/h10-project-img-1.webp",
	},
	{
		title: "AAW Kitchens",
		tags: ["Ecommerce", "Kitchens"],
		desc: "From kitchen inspiration to a digital storefront. This ecommerce website project brings AAW Kitchens into Anathoth’s portfolio of websites for specialist retail businesses.",
		path: "/our-work/aaw-kitchens",
		img6: "/images/project/h10-project-img-2.webp",
	},
	{
		title: "Al Mutawa Pharmacies",
		tags: ["Ecommerce", "Pharmacy"],
		desc: "Pharmacy retail meets digital commerce. An ecommerce website project for Al Mutawa Pharmacies, reflecting our experience developing websites for businesses serving different customer needs.",
		path: "/our-work/al-mutawa-pharmacies",
		img6: "/images/project/h10-project-img-3.webp",
	},
	{
		title: "Alshaya Enterprises",
		tags: ["Web Development", "Corporate"],
		desc: "A corporate presence for an established name. Our responsive website project for Alshaya Enterprises showcases Anathoth’s experience in business website design and development.",
		path: "/our-work/alshaya-enterprises",
		img6: "/images/project/h10-project-img-1.webp",
	},
	{
		title: "Gulf Cable",
		tags: ["Web Development", "Industry"],
		desc: "An industrial business, represented online. Our responsive corporate website project for Gulf Cable demonstrates Anathoth’s work across Kuwait’s business and industrial sectors.",
		path: "/our-work/gulf-cable",
		img6: "/images/project/h10-project-img-2.webp",
	},
	{
		title: "National Library of Kuwait",
		tags: ["Web Development", "Public Sector"],
		desc: "A cultural institution with a digital presence. Our responsive website project for Kuwait’s National Library highlights the breadth of clients in Anathoth’s portfolio.",
		path: "/our-work/national-library-of-kuwait",
		img6: "/images/project/h10-project-img-3.webp",
	},
];

const Portfolios10 = () => {
	const animContainerRef = useRef();
	useGSAP(
		context => {
			tjStackAnimation(".service-stack");
		},
		{ scope: animContainerRef }
	);
	return (
		<section
			ref={animContainerRef}
			className="h10-projects-section section-space"
		>
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="sec-heading style-2 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								[ SELECTED CLIENT PROJECTS ]
							</span>
							<h2 className="sec-title text-anim">
								Explore our work. <br />
								Imagine what’s next.
							</h2>
						</div>

						<div className="h10-projects_wrap">
							{portfolio.map((portfolioSingle, idx) => (
								<PortfolioCard10
									key={idx}
									portfolio={portfolioSingle}
									idx={idx}
									lastItem={portfolio.length - 1}
								/>
							))}
						</div>
						<div
							className="mt-60 text-center wow fadeInUp"
							data-wow-delay="0.3s"
						>
							<ButtonPrimary text={"Explore Our Portfolio"} url={"/our-work"} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolios10;
