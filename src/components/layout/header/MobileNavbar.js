import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import getNavItems from "@/libs/getNavItems";
import Link from "next/link";
import MobileMenuItem from "./MobileMenuItem";

const isMegaMenu = navItem =>
	navItem?.submenu?.some(submenuItem => submenuItem?.items?.length);

const MobileNavbar = () => {
	const navItems = getNavItems();
	return (
		<div className="hamburger_menu d-block d-lg-none">
			<div className="mobile_menu mean-container">
				<div className="mean-bar">
					<Link
						href="#nav"
						className="meanmenu-reveal"
						style={{ right: 0, left: "auto" }}
					>
						<span>
							<span>
								<span></span>
							</span>
						</span>
					</Link>
					<nav className="mean-nav">
						<ul>
							{navItems.map((navItem, idx) => {
								const isLast = idx === navItems.length - 1;
								if (isMegaMenu(navItem)) {
									return (
										<MobileMenuItem
											key={navItem.id}
											text={navItem.name}
											url={navItem.path}
											submenuClass={"header__mega-menu mega-menu mega-menu-pages"}
										>
											<li>
												<div className="mega-menu-wrapper">
													{navItem.submenu.map(group => (
														<div
															key={group.id}
															className="mega-menu-pages-single"
														>
															<div className="mega-menu-pages-single-inner">
																<h6 className="mega-menu-title">{group.name}</h6>
																<div className="mega-menu-list">
																	{group.items?.map(item => (
																		<Link
																			key={item.id}
																			href={item.path ? item.path : "/"}
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
										</MobileMenuItem>
									);
								}
								if (navItem.submenu?.length) {
									return (
										<MobileMenuItem
											key={navItem.id}
											text={navItem.name}
											url={navItem.path ? navItem.path : "#"}
										>
											{navItem.submenu.map(item => (
												<li key={item.id}>
													<Link href={item.path ? item.path : "/"}>
														{item.name}
													</Link>
												</li>
											))}
										</MobileMenuItem>
									);
								}
								return (
									<li key={navItem.id} className={isLast ? "mean-last" : ""}>
										<Link href={navItem.path ? navItem.path : "/"}>
											{navItem.name}
										</Link>
									</li>
								);
							})}
						</ul>
					</nav>
				</div>
			</div>
			<div className="mt-4">
				<ButtonPrimary text={"Request a Quote"} url={"/contact"} />
			</div>
		</div>
	);
};

export default MobileNavbar;
