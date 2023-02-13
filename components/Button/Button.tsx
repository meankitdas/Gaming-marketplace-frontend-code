/* eslint-disable react/require-default-props */

import React from "react";
import styled from "styled-components";

interface ButtonProps {
	children: React.ReactNode;
	type?: "button" | "submit" | "reset" | undefined;
	size?: "small" | "medium" | "large";
	stretch?: boolean;
	disabled?: boolean;
	onClick?: (_event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface ButtonStyle {
	paddingX: number;
	paddingY: number;
	fontSize: number;
	lineHeight: number;
	borderRadius: number;
}

const BUTTON_STYLES: Record<NonNullable<ButtonProps["size"]>, ButtonStyle> = {
	small: {
		paddingY: 10,
		paddingX: 12,
		fontSize: 20,
		lineHeight: 20,
		borderRadius: 12,
	},
	medium: {
		paddingY: 12,
		paddingX: 20,
		fontSize: 20,
		lineHeight: 22,
		borderRadius: 8,
	},
	large: {
		paddingY: 16,
		paddingX: 24,
		fontSize: 24,
		lineHeight: 28,
		borderRadius: 12,
	},
};

const StyledButton = styled.button<Pick<ButtonProps, "stretch" | "size">>(
	({ stretch, disabled, size = "medium" }) => `
    width: ${stretch ? "100%" : "fit-content"};
    position: relative;
    background: radial-gradient(50% 50% at 50% 50%, 
                #EB5757 0%, rgba(235, 87, 87, 0.67) 
                31.25%, rgba(235, 87, 87, 0) 100%), 
                conic-gradient(from 180deg at 50% 50%, 
                #2B1356 0deg, #DB2750 90deg, 
                #FF3535 180deg, #FEBF1E 270deg, #2B1356 360deg);
    padding: ${BUTTON_STYLES[size].paddingY}px 
             ${BUTTON_STYLES[size].paddingX}px;
    border-radius: ${BUTTON_STYLES[size].borderRadius}px;
	font-family: Inter;
    font-size:${BUTTON_STYLES[size].fontSize}px;
    line-height: ${BUTTON_STYLES[size].lineHeight}px;
    font-weight: 600;
    color: white;
    box-sizing: border-box;
    border: none;
    cursor: ${disabled ? "not-allowed" : "pointer"};
	opacity: ${disabled ? "0.6" : undefined};

    &:active {
      transform: scale(0.98);
    }
`,
);

const Button = ({ children, size = "medium", ...buttonProps }: ButtonProps) => (
	<StyledButton size={size} {...buttonProps}>
		{children}
	</StyledButton>
);

export { Button };
export type { ButtonProps };
