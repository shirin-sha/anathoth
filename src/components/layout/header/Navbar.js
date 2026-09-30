import useActiveLink from "@/hooks/useActiveLink";
import getNavItems from "@/libs/getNavItems";
import Link from "next/link";

const isMegaMenu = navItem =>
	navItem?.submenu?.some(submenuItem => submenuItem?.items?.length);

const Navbar = ({ headerType, isStickyHeader }) => {
	const makeActiveLink = useActiveLink();
	const navItems = getNavItems().map(navItem => makeActiveLink(navItem));

	return (
		<div
			className={`mainmenu ${
				(headerType === 3 || headerType == 4) && !isStickyHeader ? "menu-3" : ""
			}  d-lg-block d-none`}
			id={isStickyHeader ? "mainmenu" : "main-menu"}
		>
			<ul>
				{navItems.map(navItem =>
					isMegaMenu(navItem) ? (
						<li
							key={navItem.id}
							className={`has-dropdown ${
								navItem.isActive ? "current-menu-ancestor" : ""
							}`}
						>
							<Link href={navItem.path ? navItem.path : "#"}>
								{navItem.name}
							</Link>
							<ul className="sub-menu header__mega-menu mega-menu mega-menu-pages mega-menu-services-grid">
								<li>
									<div className="mega-menu-wrapper">
										{navItem.submenu.map(group => (
											<div key={group.id} className="mega-menu-pages-single">
												<div className="mega-menu-pages-single-inner">
													<h6 className="mega-menu-title">{group.name}</h6>
													<div className="mega-menu-list">
														{group.items?.map(item => (
															<Link
																key={item.id}
																href={item.path ? item.path : "/"}
																className={item.isActive ? "active" : ""}
															>
																{item.name}
															</Link>
														))}
													</div>
												</div>
											</div>
										))}
									</div>
								</li>
							</ul>
						</li>
					) : navItem.submenu?.length ? (
						<li
							key={navItem.id}
							className={`has-dropdown ${
								navItem.isActive ? "current-menu-ancestor" : ""
							}`}
						>
							<Link href={navItem.path ? navItem.path : "#"}>
								{navItem.name}
							</Link>
							<ul className="sub-menu">
								{navItem.submenu.map(item => (
									<li
										key={item.id}
										className={item.isActive ? "current-menu-item" : ""}
									>
										<Link href={item.path ? item.path : "/"}>{item.name}</Link>
									</li>
								))}
							</ul>
						</li>
					) : (
						<li
							key={navItem.id}
							className={navItem.isActive ? "current-menu-ancestor" : ""}
						>
							<Link href={navItem.path ? navItem.path : "/"}>
								{navItem.name}
							</Link>
						</li>
					)
				)}
			</ul>
		</div>
	);
};

export default Navbar;
