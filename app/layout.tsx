import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`bg-black ` + inter.className}>
				<main className="flex bg-black gap-[15px] h-screen">
					<Sidebar />
					<div className="w-full">{children}</div>
				</main>
			</body>
		</html>
	);
}
