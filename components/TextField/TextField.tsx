/* eslint-disable react/require-default-props */

import React from "react";
import styled from "styled-components";

interface TextFieldProps {
	width?: string;
	placeholder?: string;
	name?: string;
	type?: string;
	value?: string | number;
	disabled?: boolean;
	required?: boolean;
	onChange?: (_event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input<Pick<TextFieldProps, "width">>(
	({ width }) => `
    width: ${width ?? "100%"};
    position: relative;
    background: transparent;
    border-radius: 8px;
    outline: 2px solid #795315;
    font-family: Inter;
    font-size: 24px;
    line-height: 34px;
    font-weight: 400;
    color: white;
    border: none;
    padding: 16px 12px 16px 12px;

    &:focus {
        outline: 2px solid #DB2750;
    }
`,
);

const TextField = ({ ...inputProps }: TextFieldProps) => (
	<StyledInput {...inputProps} />
);

export { TextField };
export type { TextFieldProps };
