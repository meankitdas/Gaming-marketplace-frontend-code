import React from "react";

import { Flex } from "../Flex";
import { Text } from "../Text";

interface StepProps {
	number: string;
	borderColor: string;
	heading: string;
	subHeading: string;
}

const Step = ({ number, borderColor, heading, subHeading }: StepProps) => (
	<Flex gap="12px" align="center" justify="center">
		<Flex
			width="72px"
			height="72px"
			radius="50%"
			align="center"
			justify="center"
			border={`2px solid ${borderColor}`}
		>
			<Text size="36px" weight="600" height="50px" color={borderColor}>
				{number}
			</Text>
		</Flex>
		<hr style={{ width: "120px", color: `${borderColor}` }} />
		<Flex
			padding="32px"
			direction="column"
			height="172px"
			align="flex-start"
			justify="flex-start"
			background="linear-gradient(90deg, #101113 0%, rgba(16, 17, 19, 0.54) 100.03%)"
			border={`2px solid ${borderColor}`}
			gap="16px"
			radius="16px"
		>
			<Text size="32px" weight="600" height="52px" spacing="0.4px">
				{heading}
			</Text>
			<Text size="20px" height="34px" weight="400" color="grey">
				{subHeading}
			</Text>
		</Flex>
	</Flex>
);

export { Step };
export type { StepProps };
