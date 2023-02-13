import React from "react";
import styled from "styled-components";
import Image from "next/image";

import { Flex } from "../Flex";
import { Text } from "../Text";

interface CourseCardProps {
	image: string;
	expert: string;
	game: string;
	experience: number;
	name: string;
	desc: string;
	onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const StyledCourseCard = styled.div`
	margin-top: 96px;
	padding: 32px;
	background: linear-gradient(180deg, #062108 0%, rgba(16, 17, 19, 0) 100%),
		linear-gradient(180deg, #237316 0%, rgba(52, 58, 64, 0) 100%);
	border: 2px solid #237316;
	border-radius: 16px;
	role: button;
	cursor: pointer;

	&:active {
		transform: scale(0.98);
	}
`;

const CourseCard = ({
	image,
	expert,
	game,
	experience,
	name,
	desc,
	onClick,
}: CourseCardProps) => (
	<StyledCourseCard onClick={onClick}>
		<Flex
			radius="16px"
			background="#101113"
			border="1px solid #343a40"
			direction="column"
			align="center"
			justify="center"
			gap="24px"
		>
			<Image
				width={198}
				height={221}
				alt="course"
				src={image}
				style={{
					borderRadius: "50%",
					margin: "-120px 0 -120px 0",
				}}
			/>
			<Flex
				direction="column"
				margin="28% 0 0 0"
				whiteSpace="nowrap"
				padding="0 52px 0 52px"
			>
				<Text size="20px" weight="400" height="36px">
					{`${expert}, ${game} Coach`}
				</Text>
				<Text
					size="16px"
					weight="400"
					height="36px"
					color="#515151"
					align="center"
				>
					{`with experience of ${experience} years`}
				</Text>
			</Flex>
			<Flex direction="column" gap="24px" padding="0px 32px 32px 32px">
				<Text size="32px" weight="600" height="50px" align="left">
					{name}
				</Text>
				<Text size="18px" height="30px" color="#AFAFAF" align="left">
					{desc}
				</Text>
			</Flex>
		</Flex>
	</StyledCourseCard>
);

export { CourseCard };
export type { CourseCardProps };
