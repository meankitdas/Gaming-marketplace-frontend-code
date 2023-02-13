import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/router";
import { Flex } from "../Flex";

interface SideBarProps {
	links: Array<{
		path: string;
		title: string;
	}>;
}

const SideBar = ({ links }: SideBarProps) => {
	const router = useRouter();

	return (
		<Flex
			direction="column"
			align="flex-end"
			gap="48px"
			padding="32px 42px 0px 0px"
			width="320px"
			background="black"
		>
			<Image src="/logo.svg" alt="logo" width={190} height={48} />
			{links.map((link) => (
				<Link
					key={link.title}
					onClick={() => {
						if (!router.asPath.includes(link.path)) {
							router.push(link.path);
						}
					}}
					href={link.path}
					style={{
						fontWeight: "600",
						fontSize: "16px",
						lineHeight: "32px",
						letterSpacing: "4px",
						textTransform: "uppercase",
						color: router.asPath === link.path ? "white" : "grey",
						textDecoration: "underline",
						textUnderlineOffset: "20px",
					}}
				>
					{link.title}
				</Link>
			))}
		</Flex>
	);
};

export { SideBar };
export type { SideBarProps };
