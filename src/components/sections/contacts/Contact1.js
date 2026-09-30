import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FormSelect from "@/components/shared/Inputs/FormSelect";
import Link from "next/link";

const Contact1 = () => {
	return (
		<section
			className="tj-contact-section"
			style={{ backgroundImage: "url('/images/shapes/contact-bg.png')" }}
		>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="contact-wrapper">
							<div className="contact-left-content">
								<div className="sec-heading style-2">
									<span
										className="sub-title wow fadeInUp"
										data-wow-delay="0.1s"
									>
										// Let’s Work Together
									</span>
									<h2 className="sec-title text-anim">
										Your next project starts <br />
										with a conversation.
									</h2>
									<div className="desc wow fadeInUp" data-wow-delay="0.3s">
										<p>
											Planning a website, app, business system or brand refresh?
											Tell us what you have in mind. We’ll help you explore the
											right solution for your goals, budget and next steps.
										</p>
									</div>
									<div
										className="contact-button wow fadeInUp"
										data-wow-delay="0.5s"
									>
										<ButtonPrimary
											text={"Contact Us"}
											url={"/contact"}
											className={"white-btn"}
										/>
									</div>
								</div>
							</div>
							<div
								className="contact-form-one wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<h3 className="title">
									Tell us about your project. <br />
									Let’s work out what’s next.
								</h3>
								<div className="contact-item">
									<div className="contact-text">
										<i className="fa-solid fa-envelope"></i>
										<Link href="mailto:info@anathothonline.com">
											info@anathothonline.com
										</Link>
									</div>
									<div className="contact-text">
										<i className="fa-sharp fa-solid fa-location-dot"></i>
										Al Farwaniya, Kuwait
									</div>
								</div>
								<form>
									<div className="row">
										<div className="col-sm-6">
											<div className="form-input">
												<input
													type="text"
													id="first"
													name="name"
													placeholder="Full name*"
													required
												/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-input">
												<input
													type="email"
													id="emailOne"
													name="email"
													placeholder="Email address*"
													required
												/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-input">
												<input
													type="tel"
													id="tel"
													name="tel"
													placeholder="Phone number*"
													required
												/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-input">
												<div className="tj-nice-select-box">
													<div className="tj-select">
														<FormSelect
															id={"contact"}
															name={"service"}
															className="nice-select"
															defaultValue={"Select a service"}
															items={[
																{ value: "", name: "Select a service" },
																{
																	value: "web-app-development",
																	name: "Web & App Development",
																},
																{
																	value: "erp-crm-business-systems",
																	name: "ERP/CRM & Business Systems",
																},
																{
																	value: "digital-marketing-branding",
																	name: "Digital Marketing & Branding",
																},
																{
																	value: "hosting-email-support",
																	name: "Hosting, Email & Support",
																},
																{ value: "not-sure-yet", name: "Not Sure Yet" },
															]}
														/>
													</div>
												</div>
											</div>
										</div>
										<div className="col-12">
											<div className="form-input input-textarea">
												<textarea
													id="message"
													name="message"
													placeholder="Project details"
												/>
											</div>
										</div>
										<div className="submit-button">
											<ButtonPrimary
												text={"Send Message"}
												type="submit"
												className={"white-btn"}
											/>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact1;
