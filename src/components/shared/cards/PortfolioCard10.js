import modifyNumber from "@/libs/modifyNumber";
import Link from "next/link";
import ButtonPrimary from "../buttons/ButtonPrimary";

const PortfolioCard10 = ({ portfolio, idx, lastItem }) => {
	const { title, img6, tags, desc, path } = portfolio ? portfolio : {};
	const url = path ? path : "/our-work";
	return (
		<div
			className={`h10-projects_item ${idx < lastItem ? "service-stack" : ""}`}
		>
			<div
				className="h10-project-img"
				style={{
					backgroundImage: `url('${
						img6 ? img6 : "/images/project/h10-project-img-1.webp"
					}')`,
				}}
			></div>

			<div className="project_content">
				<ul className="category">
					{tags?.length
						? tags?.map((tag, idx) => (
								<li key={idx + 11}>
									<Link href={"/our-work"}>{tag}</Link>
								</li>
						  ))
						: ""}
				</ul>

				<h3 className="project_title">
					<Link href={url}>
						{modifyNumber(idx + 1)}. {title}
					</Link>
				</h3>

				<div className="desc">{desc}</div>
				<ButtonPrimary
					text={"View Project"}
					url={url}
					className={"project_button"}
				/>
			</div>
		</div>
	);
};

export default PortfolioCard10;
