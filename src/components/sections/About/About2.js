import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import Image from "next/image";

const About2 = () => {
	return (
		<section className="tj-about-section-two section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="about-wrapper">
							<div className="about-images-group-one hover:shine wow fadeInUp">
								<Image
									src="/images/about/h2-about-1.webp"
									alt="Images"
									width={399}
									height={532}
									style={{ width: "100%", height: "auto" }}
								/>
								<div className="about-author">
									<div className="author-name">
										<h5 className="title">Anathoth IT Solutions</h5>
										<span className="sub-title">Creativity meets technology</span>
									</div>
								</div>
							</div>
							<div className="about-content-two">
								<div className="sec-heading style-2">
									<span
										className="sub-title wow fadeInUp"
										data-wow-delay="0.1s"
									>
										// About Anathoth
									</span>
									<h2 className="sec-title text-anim">
										Your digital vision, <br />
										brought to life.
									</h2>
									<div className="desc wow fadeInUp" data-wow-delay="0.3s">
										<p>
											At Anathoth, we combine creative thinking with practical
											technology to help businesses in Kuwait move forward. From
											websites and apps to ERP/CRM and business systems, we build
											around your goals, bringing your brand, operations and
											digital presence into one clear direction.
										</p>
									</div>
									<div
										className="about-feature-item wow fadeInUp"
										data-wow-delay="0.5s"
									>
										<div className="feature-box">
											<div className="feature-left">
												<div className="check-list-one">
													<ul>
														<li>
															<i className="tji-double-check"></i>Creative and
															technical expertise
														</li>
														<li>
															<i className="tji-double-check"></i>Solutions shaped
															around you
														</li>
														<li>
															<i className="tji-double-check"></i>Support beyond
															the launch
														</li>
													</ul>
												</div>
												<div className="about-button">
													<ButtonPrimary
														text={"Start Your Project"}
														url={"/contact"}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="funfact-item-two">
								<div className="funfact-box">
									<FunfactSingle currentValue={17} symbol={"+"} />
									<span className="sub-title">
										Years of creative and digital expertise in Kuwait.
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About2;
