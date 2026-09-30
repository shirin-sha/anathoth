import modifyNumber from "@/libs/modifyNumber";
import Link from "next/link";

const ServiceCard3 = ({ service, idx }) => {
	const { title, desc, path, bgImg2 } = service || {};
	const url = path ? path : "/services";
	return (
		<div
			className="service-style-3 wow fadeInUp"
			data-wow-delay={`0.${idx + 1 + idx}s`}
		>
			<div
				className="service-image"
				style={{ backgroundImage: `url('${bgImg2}')` }}
			></div>
			<div className="service-title">
				<h4 className="title">
					<span>{modifyNumber(idx + 1)}.</span>
					<Link href={url}>{title}</Link>
				</h4>
			</div>
			<div className="desc">
				<p>{desc}</p>

				<div className="service-button d-lg-none">
					<Link href={url} className="text-btn">
						Learn More <i className="tji-angle-right"></i>
					</Link>
				</div>
			</div>
			<div className="service-button d-none d-lg-inline-block">
				<Link href={url} className="text-btn">
					Learn More <i className="tji-angle-right"></i>
				</Link>
			</div>
		</div>
	);
};

export default ServiceCard3;
