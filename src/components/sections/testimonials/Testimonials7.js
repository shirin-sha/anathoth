"use client";

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import TestimonialsCard5 from "@/components/shared/cards/TestimonialsCard5";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import { useEffect, useState } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonials = [
	{
		quote: "Anathoth understood our vision and created a website that felt right for our business. The team listened carefully, explained each step and kept us involved. We appreciated their creativity, attention to detail and professional approach.",
		authorName: "[Client Name]",
		authorDesig: "Business Owner",
		img: "/images/testimonial/h1-test-1.webp",
	},
	{
		quote: "Our online store needed to reflect our brand and present products clearly. Anathoth listened to our requirements and guided us through the process. Their practical advice and attention to detail made the experience feel straightforward.",
		authorName: "[Client Name]",
		authorDesig: "Sales Manager",
		img: "/images/testimonial/h1-test-2.webp",
	},
	{
		quote: "Anathoth took time to understand how our business operates before discussing solutions. They explained the options clearly and answered our questions patiently. Their thoughtful guidance made choosing a suitable business system feel much more manageable.",
		authorName: "[Client Name]",
		authorDesig: "Operations Manager",
		img: "/images/testimonial/h6-test-1.webp",
	},
	{
		quote: "We needed software that suited our daily operations. Anathoth asked thoughtful questions and helped shape a solution around our needs. The team’s clear communication and willingness to listen made us feel involved throughout the project.",
		authorName: "[Client Name]",
		authorDesig: "Project Manager",
		img: "/images/testimonial/h3-test-3.png",
	},
	{
		quote: "Anathoth helped us bring a clearer direction to our brand and digital presence. Their creative ideas reflected our business, and they welcomed our feedback. We appreciated the personal attention and care throughout the whole process.",
		authorName: "[Client Name]",
		authorDesig: "Marketing Manager",
		img: "/images/testimonial/h3-test-4.png",
	},
	{
		quote: "We approached Anathoth for hosting, business email and website support. The team explained the setup clearly and answered our questions patiently. Having helpful people to contact made us feel confident about our everyday digital needs.",
		authorName: "[Client Name]",
		authorDesig: "Business Owner",
		img: "/images/testimonial/h3-test-5.png",
	},
];

const Testimonials7 = () => {
	const [currentDirection, setCurrentDirection] = useState("vertical");

	useEffect(() => {
		const getDirection = () => {
			setCurrentDirection(window.innerWidth < 768 ? "horizontal" : "vertical");
		};

		getDirection();
		window.addEventListener("resize", getDirection);
		return () => window.removeEventListener("resize", getDirection);
	}, []);

	return (
		<section className="h8-testimonial">
			<div className="container tj-gap-30">
				<div className="row">
					{/* Left column */}
					<div className="col-12 col-lg-8 col-xl-4">
						<div className="h8-testimonial-section-heading-wrapper">
							<div className="sec-heading h8-section-heading h8-testimonial-section-heading style-4">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
									CLIENT FEEDBACK
								</span>
								<h2 className="sec-title text-anim">
									Client experiences <br />
									that speak for <br />
									our commitment.
								</h2>
							</div>
							<div className="h8-testimonial-fanfact">
								<div className="counter-item">
									<FunfactSingle currentValue={99} symbol="%" />
									<span
										className="sub-title wow fadeInUp"
										data-wow-delay="0.3s"
									>
										Happy clients who chose Anathoth for their projects.
									</span>
								</div>
							</div>
							<div className="btn-area wow fadeInUp" data-wow-delay="0.3s">
								<ButtonPrimary text="Explore More" url="/clients" />
							</div>
						</div>
					</div>

					{/* Up direction slider */}
					<div className="col-12 col-md-6 col-xl-4">
						<div className="h8-testimonial-wrapper">
							<Swiper
								key={currentDirection}
								slidesPerView="auto"
								spaceBetween={24}
								centeredSlides
								loop
								allowTouchMove={false}
								speed={8000}
								direction={currentDirection}
								autoplay={{
									delay: 0,
									disableOnInteraction: false,
									reverseDirection: false,
								}}
								breakpoints={{
									768: { spaceBetween: 30 },
								}}
								modules={[Autoplay]}
								className="h8-testimonial-slider h8-testimonial-slider-up"
							>
								{testimonials.map((testimonial, idx) => (
									<SwiperSlide key={idx}>
										<TestimonialsCard5 testimonial={testimonial} type={2} />
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>

					{/* Down direction slider */}
					<div className="col-12 col-md-6 col-xl-4">
						<div className="h8-testimonial-wrapper">
							<Swiper
								key={currentDirection}
								slidesPerView="auto"
								spaceBetween={24}
								centeredSlides
								loop
								allowTouchMove={false}
								speed={8000}
								direction={currentDirection}
								autoplay={{
									delay: 0,
									disableOnInteraction: false,
									reverseDirection: true,
								}}
								breakpoints={{
									768: { spaceBetween: 30 },
								}}
								modules={[Autoplay]}
								className="h8-testimonial-slider h8-testimonial-slider-down"
							>
								{testimonials.map((testimonial, idx) => (
									<SwiperSlide key={idx}>
										<TestimonialsCard5 testimonial={testimonial} type={2} />
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials7;
