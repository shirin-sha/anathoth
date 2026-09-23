import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import About2 from "@/components/sections/About/About2";
import Blogs2 from "@/components/sections/blogs/Blogs2";
import Brands1 from "@/components/sections/brands/Brands1";
import Contact1 from "@/components/sections/contacts/Contact1";
import Hero2 from "@/components/sections/heros/Hero2";
import Portfolios10 from "@/components/sections/portfolios/Portfolios10";
import Progress1 from "@/components/sections/progress/Progress1";
import Services3 from "@/components/sections/services/Services3";
import Testimonials7 from "@/components/sections/testimonials/Testimonials7";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function Home() {
	return (
		<div>
			<Header headerType={2} />
			<Header isStickyHeader={true} headerType={2} />
			<main>
				<Hero2 />
				<About2 />
				<Services3 />
				<Progress1 />
				<Brands1 />
				<Portfolios10 />
				<Testimonials7 />
				<Contact1 />
				<Blogs2 />
			</main>
				<Footer />
			<ClientWrapper />
			<TjMagicCursor type={2} />
		</div>
	);
}
