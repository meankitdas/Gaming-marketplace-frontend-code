import Image from "next/image";

import { useRouter } from "next/router";
import { Button } from "../components/Button";
import { Flex } from "../components/Flex";
import { Text } from "../components/Text";
import { CourseCard } from "../components/CourseCard";
import { ExpertCard } from "../components/ExpertCard";
import { GameCard } from "../components/GameCard";

import {
	COURSES,
	EXPERTS,
	GAMES,
	ANIMATIONS,
	CONTENTS,
} from "../constants/landingPageData";

const Home = () => {
	const router = useRouter();

	return (
		<Flex
			padding="132px 0px 0px 100px"
			width="100%"
			direction="column"
			gap="100px"
		>
			<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
				<Flex direction="column" justify="flex-start" gap="36px">
					<Image
						src="/landing.png"
						alt="landing"
						height={172}
						width={172}
					/>
					<Text size="68px" weight="400" height="80px" spacing="2px">
						Don&apos;t Hate The Player
						<br />
						Master The Game
					</Text>
					<Text
						size="24px"
						weight="400"
						height="32px"
						spacing="-5%"
						color="#757575"
					>
						Agilizamos el proceso de desarrollo web
						<br />a través de una plataforma creada para que crezcas
					</Text>
					<Flex gap="24px" padding="24px 0 0 0">
						<Button
							type="button"
							onClick={() => router.push("/#games")}
						>
							Games
						</Button>
						<Button
							type="button"
							onClick={() => router.push("/#experts")}
						>
							Experts
						</Button>
						<Button
							type="button"
							onClick={() => router.push("/#courses")}
						>
							Courses
						</Button>
					</Flex>
				</Flex>
				<iframe
					title="glass_cube"
					src="https://my.spline.design/untitled-db7cb2a37d09f4a80c057200bb5ecc5d/"
					frameBorder="0"
					width="100%"
					height="100%"
				/>
			</div>
			<Flex
				gap="100px"
				align="center"
				justify="space-between"
				margin="0 100px 0 0"
			>
				{ANIMATIONS.map((animation) => (
					<Flex
						background="url(/landing_animation.gif)"
						direction="column"
						width="324px"
						height="324px"
						align="center"
						justify="center"
						key={animation.title}
						style={{ backgroundSize: "cover" }}
					>
						<h1>{`${animation.total}+`}</h1>
						<h3 style={{ color: "grey" }}>{animation.title}</h3>
					</Flex>
				))}
			</Flex>
			{CONTENTS.map((content) => (
				<Flex
					gap="64px"
					direction="column"
					id={content.about}
					key={content.about}
				>
					<Flex gap="16px" direction="column">
						<Text
							size="48px"
							weight="400"
							height="66px"
							spacing="2px"
						>
							{content.title}
						</Text>
						<Text
							size="20px"
							weight="400"
							height="24px"
							color="#757575"
						>
							{content.desc}
						</Text>
					</Flex>
					<Flex
						gap="32px"
						padding="0 0 24px 0"
						style={{ overflowX: "scroll" }}
					>
						{content.about === "games" && (
							<>
								{GAMES.map((game) => (
									<GameCard
										key={game.name}
										image={game.image}
										name={game.name}
										trainers={game.trainers}
										players={game.players}
										onClick={undefined}
									/>
								))}
							</>
						)}
						{content.about === "experts" && (
							<>
								{EXPERTS.map((expert) => (
									<ExpertCard
										key={expert.name}
										image={expert.image}
										name={expert.name}
										desc={expert.desc}
										price={expert.price}
										games={expert.games}
										languages={expert.languages}
									/>
								))}
							</>
						)}
						{content.about === "courses" && (
							<>
								{COURSES.map((course) => (
									<CourseCard
										key={course.name}
										image={course.image}
										expert={course.expert}
										game={course.game}
										experience={course.experience}
										name={course.name}
										desc={course.desc}
										onClick={undefined}
									/>
								))}
							</>
						)}
					</Flex>
				</Flex>
			))}
		</Flex>
	);
};

export default Home;
