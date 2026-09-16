import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BlogMain from "@/components/layout/main/BlogMain";
import Cta1 from "@/components/sections/cta/Cta1";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function Blogs() {
	return (
		<div>
			<Header isHeaderTop={true} />
			<Header isStickyHeader={true} />
			<main>
				<BlogMain />
				<Cta1 />
			</main>

			<Footer footerType={"inner"} />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
