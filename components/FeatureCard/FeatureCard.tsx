import React from "react";
import Image from "next/image";

import { Flex } from "../Flex";
import { Text } from "../Text";

interface FeatureCardProps {
	image: string;
	heading: string;
	subHeading: string;
}

const FeatureCard = ({ image, heading, subHeading }: FeatureCardProps) => (
	<Flex
		radius="10px"
		border="1px solid #DB2570"
		background="linear-gradient(180deg, #190611 0%, rgba(16, 17, 19, 0) 100%)"
		direction="column"
		gap="18px"
		align="center"
		justify="flex-start"
		width="370px"
		height="460px"
		padding="62px 48px"
	>
		<Image src={image} alt={image} width={52} height={55} />
		<Text weight="600" size="24px" height="38px" color="#DB2570">
			{heading}
		</Text>
		<Text
			color="grey"
			weight="400"
			size="16px"
			height="26px"
			align="center"
		>
			{subHeading}
		</Text>
	</Flex>
);

export { FeatureCard };
export type { FeatureCardProps };
