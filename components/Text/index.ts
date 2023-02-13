import React from "react";
import styled from "styled-components";

interface TextProps {
	family?: React.CSSProperties["fontFamily"];
	size?: React.CSSProperties["fontSize"];
	weight?: React.CSSProperties["fontWeight"];
	height?: React.CSSProperties["lineHeight"];
	spacing?: React.CSSProperties["letterSpacing"];
	color?: React.CSSProperties["color"];
	align?: React.CSSProperties["textAlign"];
	padding?: React.CSSProperties["padding"];
	margin?: React.CSSProperties["margin"];
}

const Text = styled.p<
	Pick<
		TextProps,
		| "align"
		| "color"
		| "family"
		| "height"
		| "size"
		| "spacing"
		| "weight"
		| "padding"
		| "margin"
	>
>(
	({
		align,
		color,
		family,
		size,
		height,
		spacing,
		weight,
		padding,
		margin,
	}) => `
        text-align: ${align};
        color: ${color};
        font-family: ${family};
        font-size: ${size};
        line-height: ${height};
        letter-spacing: ${spacing};
        font-weight: ${weight};
		padding: ${padding};
		margin: ${margin};
    `,
);

export { Text };
export type { TextProps };
