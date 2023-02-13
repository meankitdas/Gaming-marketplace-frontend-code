import React from "react";
import styled from "styled-components";

interface OverlayProps {
	children: React.ReactNode | React.ReactNode[];
	onClick: React.MouseEventHandler<HTMLDivElement>;
}

const StyledOverlay = styled.div`
	position: fixed;
	width: calc(100% - 305px);
	height: 100%;
	top: 0;
	left: 305px;
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(0, 0, 0, 0.8);
	z-index: 10;
	role: button;
`;

const Overlay = ({ onClick, children }: OverlayProps) => (
	<StyledOverlay onClick={onClick}>{children}</StyledOverlay>
);

export { Overlay };
export type { OverlayProps };
