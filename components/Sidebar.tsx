"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";

const Sidebar = () => {
	const pathname = usePathname();

	const navList = [
		{ id: 1, title: "Movies", href: "/" },
		{ id: 2, title: "Premieres", href: "/premieres" },
		{ id: 3, title: "Celebs", href: "/celebs" },
	];

	return (
		<div className="bg-black w-[150px]">
			<aside className="p-[30px] flex flex-col justify-between bg-neutral-900 fixed h-full">
				<div>Logo</div>
				<ul>
					{navList.map((item) => (
						<li
							className={`p-[5px] rounded-lg text-center ${
								pathname === item.href
									? "bg-white text-black"
									: ""
							}`}
							key={item.id}
						>
							<Link href={item.href}>{item.title}</Link>
						</li>
					))}
				</ul>
				<Link href="/">See Later</Link>
				<Link href="/">Favorites</Link>
			</aside>
		</div>
	);
};

export default Sidebar;
