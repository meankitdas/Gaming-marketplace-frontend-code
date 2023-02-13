import React from "react";
import styled from "styled-components";

interface LinkProps {
	href: string;
	target: string;
	rel: string;
	children: React.ReactNode;
}

const StyledLink = styled.a`
	color: white;
	padding-left: 5px;

	&:hover {
		color: #795315;
		text-decoration: underline;
		text-decoration-thickness: 1px;
	}
`;

const Link = ({ children, ...linkProps }: LinkProps) => (
	<StyledLink {...linkProps}>{children}</StyledLink>
);

export { Link };
export type { LinkProps };
