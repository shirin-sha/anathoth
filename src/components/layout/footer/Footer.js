import BackToTop from "@/components/shared/others/BackToTop";
import Link from "next/link";

const resourceLinks = [
	{ name: "About Us", path: "/about" },
	{ name: "Our Work", path: "/our-work" },
	{ name: "Clients", path: "/clients" },
	{ name: "Insights", path: "/insights" },
	{ name: "Careers", path: "/careers" },
	{ name: "Contact Us", path: "/contact" },
	{ name: "Request a Quote", path: "/contact" },
];

const serviceLinks = [
	{
		name: "Website Design & Development",
		path: "/services/website-design-development",
	},
	{
		name: "Ecommerce Website Development",
		path: "/services/ecommerce-website-development",
	},
	{ name: "Mobile App Development", path: "/services/mobile-app-development" },
	{
		name: "Custom Software Development",
		path: "/services/custom-software-development",
	},
	{ name: "Odoo ERP Solutions", path: "/services/odoo-erp-solutions" },
	{
		name: "Business Email Solutions",
		path: "/services/business-email-solutions",
	},
	{ name: "Web Hosting Services", path: "/services/web-hosting-services" },
];

const Footer = ({ footerType }) => {
	return (
		<footer className="tj-footer-area footer-1">
			{footerType === "inner" ? (
				""
			) : (
				<section className="footer-gallery-cta">
					<div className="container">
						<div className="footer-gallery-cta-inner">
							<p className="footer-gallery-quote">
								&ldquo;The CREATOR is the Source of all Beauty&rdquo;
							</p>
							<Link href="/portfolios" className="footer-gallery-btn">
								Visit Our Art Gallery
							</Link>
						</div>
					</div>
				</section>
			)}

			<div className="footer-top-area fix">
				<div className="container">
					<div className="row rg-50 line">
						<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
							<div className="footer-widget footer1-col-1 footer-contact-infos">
								<div className="footer-title">
									<h4 className="title">Our Office</h4>
								</div>
								<div className="infos-item">
									<span>Kuwait Office</span>
									<p>
										Azam Complex,<br /> 1st Floor, Office 11 <br />
										Al Farwaniya, Kuwait
									</p>
									<Link href="tel:+9651234567">+965 123 4567</Link>
								</div>
								<div className="infos-item">
									<span>Email & Enquiries</span>
									<Link href="mailto:info@anathothonline.com">
										info@anathothonline.com
									</Link>
									<p>Let’s talk about your next project.</p>
								</div>
							</div>
						</div>
						<div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
							<div className="footer-widget footer1-col-2 widget_nav_menu">
								<div className="footer-title">
									<h4 className="title">Resources</h4>
								</div>
								<div className="widget-menu">
									<ul>
										{resourceLinks.map(({ name, path }) => (
											<li key={name}>
												<Link href={path}>{name}</Link>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
							<div className="footer-widget footer1-col-3 widget_nav_menu">
								<div className="footer-title">
									<h4 className="title">Popular Services</h4>
								</div>
								<div className="widget-menu">
									<ul>
										{serviceLinks.map(({ name, path }) => (
											<li key={name}>
												<Link href={path}>{name}</Link>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
							<div className="footer-widget footer1-col-4 footer-newsletter-form">
								<div className="newsletter-title">
									<h3 className="title">
										Subscribe to our <br />
										newsletter
									</h3>
								</div>
								<div className="newsletter-form">
									<form>
										<div className="form-input">
											<input
												type="email"
												id="email"
												name="email"
												placeholder="Enter email"
												aria-label="Email address"
												required
											/>
											<button
												type="submit"
												className="tj-footer-input-btn"
												aria-label="Subscribe"
												title="Subscribe"
											>
												<i className="fa-solid fa-paper-plane"></i>
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-copyright-area">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="copyright-content-area">
								<div className="copyright-text">
									<p>
										© 2026 <Link href="/">Anathoth</Link>. All rights reserved.
									</p>
								</div>
								<div className="copyright-socails">
									<ul>
										<li>
											<Link href="https://www.facebook.com/" aria-label="Facebook">
												<i className="fa-brands fa-facebook-f"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.instagram.com/" aria-label="Instagram">
												<i className="fa-brands fa-instagram"></i>
											</Link>
										</li>
										<li>
											<Link href="https://x.com/" aria-label="X">
												<i className="fa-brands fa-x-twitter"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.linkedin.com/" aria-label="LinkedIn">
												<i className="fa-brands fa-linkedin-in"></i>
											</Link>
										</li>
									</ul>
								</div>
								<div className="copyright-menu">
									<ul>
										<li>
											<Link href="/privacy-policy">Privacy Policy</Link>
										</li>
										<li>
											<Link href="/terms-and-conditions">Terms & Conditions</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- start: back to top --> */}
			<BackToTop />
			{/* <!-- end: back to top --> */}
		</footer>
	);
};

export default Footer;
