import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

import { Flex } from "../Flex";
import { Text } from "../Text";

interface ExpertCardProps {
	image: string;
	name: string;
	desc: string;
	price: number;
}

const StyledExpertCard = styled.div`
	padding: 32px;
	display: flex;
	gap: 27px;
	align-items: flex-start;
	flex-direction: column;
	background: linear-gradient(180deg, #231806 0%, rgba(16, 17, 19, 0) 100%),
		linear-gradient(180deg, #795315 0%, rgba(52, 58, 64, 0) 100%);
	border: 2px solid #795315;
	border-radius: 16px;
	cursor: pointer;

	&:active {
		transform: scale(0.98);
	}
`;

const ExpertCard = ({ image, name, desc, price }: ExpertCardProps) => (
	<Link href={{ pathname: `/${name}` }}>
		<StyledExpertCard>
			<Image
				src={image}
				alt="expert"
				width={356}
				height={236}
				priority
				style={{ borderRadius: "16px" }}
			/>
			<Flex direction="column" gap="8px">
				<Text size="24px" weight="600" height="37px">
					{name}
				</Text>
				<Text
					size="16px"
					weight="400"
					height="25px"
				>{`${desc} Trainer`}</Text>
				<Text color="#DB2750" weight="900" size="16px" height="25px">
					{`Price: $${price}`}
				</Text>
				<Text color="grey">Available</Text>
			</Flex>
		</StyledExpertCard>
	</Link>
);

export { ExpertCard };
export type { ExpertCardProps };
