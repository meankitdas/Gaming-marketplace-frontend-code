import React from "react";
import styled from "styled-components";

interface FlexProps {
	position?: React.CSSProperties["position"];
	align?: React.CSSProperties["alignItems"];
	justify?: React.CSSProperties["justifyContent"];
	direction?: React.CSSProperties["flexDirection"];
	padding?: React.CSSProperties["padding"];
	margin?: React.CSSProperties["margin"];
	width?: React.CSSProperties["width"];
	height?: React.CSSProperties["height"];
	minHeight?: React.CSSProperties["minHeight"];
	background?: React.CSSProperties["background"];
	gap?: React.CSSProperties["gap"];
	border?: React.CSSProperties["border"];
	radius?: React.CSSProperties["borderRadius"];
	whiteSpace?: React.CSSProperties["whiteSpace"];
	zIndex?: React.CSSProperties["zIndex"];
	cursor?: React.CSSProperties["cursor"];
}

const Flex = styled.div<
	Pick<
		FlexProps,
		| "align"
		| "justify"
		| "direction"
		| "padding"
		| "margin"
		| "width"
		| "height"
		| "background"
		| "border"
		| "gap"
		| "position"
		| "radius"
		| "whiteSpace"
		| "zIndex"
		| "cursor"
		| "minHeight"
	>
>(
	({
		align,
		justify,
		direction,
		padding,
		margin,
		width,
		height,
		background,
		border,
		gap,
		position,
		radius,
		whiteSpace,
		zIndex,
		cursor,
		minHeight,
	}) => `
        display: flex;
        align-items: ${align};
        justify-content: ${justify};
        flex-direction: ${direction};
        padding: ${padding};
        margin: ${margin};
        width: ${width};
        height: ${height};
        background: ${background};
        border: ${border};
        gap: ${gap};
        position: ${position};
        border-radius: ${radius};
        white-space: ${whiteSpace};
		z-index: ${zIndex};
		cursor: ${cursor};
		min-height: ${minHeight};
    `,
);

export { Flex };
export type { FlexProps };
