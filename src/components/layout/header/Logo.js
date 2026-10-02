"use client";

import Image from "next/image";
import Link from "next/link";

const Logo = ({ headerType, isStickyHeader }) => {
	return (
		<div className="site-logo">
			<Link className="logo" href="/">
				<Image
					src={`/images/logos/${
						(headerType === 3 ||
							headerType === 4 ||
							headerType === 5 ||
							headerType === 6 ||
							headerType === 9) &&
						!isStickyHeader
							? "logo_02.svg"
							: headerType === 9
							? "logo_02.svg"
							: "logo_02.svg"
					}`}
					alt="logo"
					height={37}
					width={150}
				/>
			</Link>
		</div>
	);
};

export default Logo;
