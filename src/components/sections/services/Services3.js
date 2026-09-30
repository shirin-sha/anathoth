"use client";

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ServiceCard3 from "@/components/shared/cards/ServiceCard3";

const services = [
	{
		title: "Web & App Development",
		desc: "Websites, ecommerce stores, mobile apps and custom software that connect with your customers and support your business goals.",
		path: "/services/web-app-development",
		bgImg2: "/images/service/h3-service-1.webp",
	},
	{
		title: "ERP/CRM & Business Systems",
		desc: "Odoo, Zoho and tailored management systems that simplify daily operations for restaurants, hospitals, clinics, garages and workshops.",
		path: "/services/erp-crm-business-systems",
		bgImg2: "/images/service/h3-service-2.webp",
	},
	{
		title: "Digital Marketing & Branding",
		desc: "SEO, social media, digital marketing and creative branding that help your business get discovered, build trust and stand out.",
		path: "/services/digital-marketing-branding",
		bgImg2: "/images/service/h3-service-3.webp",
	},
	{
		title: "Hosting, Email & Support",
		desc: "Web hosting, domains, business email, SSL certificates and website support to keep your digital presence connected and running smoothly.",
		path: "/services/hosting-email-support",
		bgImg2: "/images/service/h3-service-4.webp",
	},
];

const Services3 = () => {
	return (
		<section className="tj-service-section-three section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-2">
							<div className="sec-text">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
									Our Services
								</span>
								<h2 className="sec-title text-anim">
									Smart solutions for <br />
									your next big move.
								</h2>
							</div>
							<div
								className="service-rating wow fadeInUp"
								data-wow-delay="0.3s"
							>
								<div className="review">
									<strong>Creative thinking. Practical solutions.</strong>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="service-wrapper-two">
							{services.map((service, idx) => (
								<ServiceCard3 key={idx} service={service} idx={idx} />
							))}
						</div>
						<div
							className="service-btn mt-60 text-center wow fadeInUp"
							data-wow-delay="0.9s"
						>
							<ButtonPrimary text={"View All Services"} url={"/services"} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services3;
