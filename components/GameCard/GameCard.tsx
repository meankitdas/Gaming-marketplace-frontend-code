import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

import { Flex } from "../Flex";
import { Text } from "../Text";

interface GameCardProps {
	image: string;
	name: string;
	trainers: number;
	players: number;
	onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const StyledGameCard = styled.div`
	padding: 32px;
	display: flex;
	gap: 27px;
	align-items: flex-start;
	flex-direction: column;
	background: linear-gradient(180deg, #190611 0%, rgba(16, 17, 19, 0) 100%),
		linear-gradient(180deg, #db2750 0%, rgba(52, 58, 64, 0) 100%);
	border: 2px solid #db2750;
	border-radius: 16px;
	role: button;
	cursor: pointer;

	&:active {
		transform: scale(0.98);
	}
`;

const GameCard = ({
	image,
	name,
	trainers,
	players,
	onClick,
}: GameCardProps) => (
	<Link href={{ pathname: `games/${name}` }}>
		<StyledGameCard onClick={onClick}>
			<Image
				src={image}
				alt="game"
				width={356}
				height={236}
				priority
				style={{ borderRadius: "16px" }}
			/>
			<Flex direction="column" gap="8px">
				<Text size="24px" weight="600" height="38px">
					{name}
				</Text>
				<Text
					size="16px"
					weight="400"
					height="25px"
					color="#757575"
				>{`${trainers} Trainers`}</Text>
				<Text
					size="16px"
					weight="400"
					height="25px"
					color="#757575"
				>{`${players}+ Players`}</Text>
			</Flex>
		</StyledGameCard>
	</Link>
);

export { GameCard };
export type { GameCardProps };
