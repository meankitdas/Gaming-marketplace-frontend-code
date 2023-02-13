import Error from "next/error";
import Image from "next/image";

import { useRouter } from "next/router";
import { Button } from "../../../components/Button";
import { CourseCard } from "../../../components/CourseCard";
import { Flex } from "../../../components/Flex";
import { Text } from "../../../components/Text";
import { COURSES } from "../../../constants/landingPageData";

const expert = {
	image: "/game.png",
	name: "The Trap Of God",
	desc: "Masters Smash Ultimate Coach",
	about: "Facilisi viverra dictum augue eu lobortis elit. In et donec habitasse lacus mi commodo elementum. Facilisi viverra dictum augue eu lobortis elit. In et donec habitasse lacus mi commodo elementum. Facilisi viverra dictum augue eu lobortis elit. In et donec habitasse lacus mi commodo elementum. Facilisi viverra dictum augue eu lobortis elit. In et donec habitasse.",
	price: 20,
	experts: ["Mr.Elon", "Mrs.Scarlet"],
	languages: ["English", "Spanish"],
};

const Game = () => {
	const router = useRouter();
	const { game } = router.query;

	const expertExists = true; // fetch from database using `profile`

	if (!expertExists) {
		return <Error statusCode={404} />;
	}

	return (
		<Flex background="black">
			<Flex
				direction="column"
				gap="64px"
				padding="132px 100px 0px 100px"
				background="url(/expert_cover.png) no-repeat"
				width="100%"
			>
				<Image
					src={expert.image}
					alt={expert.image}
					width={180}
					height={180}
					style={{
						borderRadius: "50%",
						objectFit: "cover",
					}}
				/>
				<Flex
					direction="column"
					gap="8px"
					margin="calc(32px - 64px) 0 0 0"
				>
					<Text size="44px" height="60px" weight="600">
						{game}
					</Text>
					<Text
						size="20px"
						weight="400"
						height="28px"
					>{`Feature Description - ${expert.desc} Trainer`}</Text>
				</Flex>
				<Flex
					direction="column"
					background="linear-gradient(180deg, #0D0D0D 0%, rgba(0, 0, 0, 0) 100%)"
					border="1px solid #404040"
					radius="16px"
				>
					<Flex align="center" justify="center" direction="column">
						<Text
							color="#DB2750"
							height="34px"
							size="28px"
							weight="600"
							padding="24px 0 0 0"
						>
							About
						</Text>
						<Flex
							padding="5px 0 0 0"
							margin="24px 0 0 0"
							background="#DB2750"
							width="100%"
							radius="6px 6px 0px 0px"
						/>
					</Flex>
					<Flex direction="column" gap="40px" padding="56px">
						<Flex direction="column" gap="12px">
							<Text size="28px" weight="600">
								About The Game
							</Text>
							<Text
								size="20px"
								height="36px"
								spacing="0.25px"
								align="justify"
							>
								{expert.about}
							</Text>
						</Flex>
						<Flex direction="column" gap="12px">
							<Text size="28px" weight="600">
								Courses Offered by
							</Text>
							<Flex gap="16px">
								{expert.experts.map((experts) => (
									<Flex
										key={experts}
										background="linear-gradient(88.61deg, #FD7E14 0.31%, #FA5252 99.5%)"
										radius="12px"
										padding="0px 16px 0px 16px"
									>
										<Text
											size="20px"
											height="36px"
											spacing="0.25px"
											align="justify"
										>
											{experts}
										</Text>
									</Flex>
								))}
							</Flex>
						</Flex>
						<Flex direction="column" gap="12px">
							<Text size="28px" weight="600">
								Languages
							</Text>
							<Flex gap="16px">
								{expert.languages.map((language) => (
									<Flex
										key={language}
										background="linear-gradient(88.61deg, #12B886 0.31%, #82C91E 99.5%)"
										radius="12px"
										padding="0px 16px 0px 16px"
									>
										<Text
											size="20px"
											height="36px"
											spacing="0.25px"
											align="justify"
										>
											{language}
										</Text>
									</Flex>
								))}
							</Flex>
						</Flex>
						<Flex direction="column" gap="12px">
							<Text size="28px" weight="600">
								Price
							</Text>
							<Flex
								background="linear-gradient(88.61deg, #4C6EF5 0.31%, #15AABF 99.5%)"
								radius="12px"
								padding="0px 16px 0px 16px"
								width="fit-content"
							>
								<Text
									size="20px"
									height="36px"
									spacing="0.25px"
									align="justify"
								>
									{`Live Sessions Starting 
									From $${expert.price}`}
								</Text>
							</Flex>
						</Flex>
						<Flex gap="32px" padding="16px 0 0 0">
							<Button>Add Course</Button>
							<Button>Start Livestream</Button>
						</Flex>
					</Flex>
				</Flex>
				<Flex gap="64px" direction="column">
					<Flex gap="16px" direction="column">
						<Text
							size="48px"
							weight="400"
							height="66px"
							spacing="2px"
						>
							Training Plans
						</Text>
						<Text
							size="20px"
							weight="400"
							height="24px"
							color="#757575"
						>
							Neque, pulvinar vestibulum non aliquam.
						</Text>
					</Flex>
					<Flex
						gap="32px"
						padding="0 0 24px 0"
						style={{ overflowX: "scroll" }}
					>
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
								/>
							))}
						</>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Game;
