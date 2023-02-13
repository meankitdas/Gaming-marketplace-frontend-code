import Image from "next/image";
import { useEffect, useState } from "react";

import { NextPage } from "next";
import { useRouter } from "next/router";

import { Button } from "../../components/Button";
import { DropdownItem } from "../../components/Dropdown/DropdownItem";
import { FeatureCard } from "../../components/FeatureCard";
import { Flex } from "../../components/Flex";
import { Link } from "../../components/Link";
import { Step } from "../../components/Step";
import { Text } from "../../components/Text";
import { TextField } from "../../components/TextField";

import { FEATURES, STEPS } from "../../constants/expertPageData";

const Expert: NextPage = () => {
	const router = useRouter();

	const [formData, setFormData] = useState({
		name: "",
		username: "",
		description: "",
		language: "",
		games: [],
	});

	interface Option {
		label: string;
		value: string;
	}

	const options: Option[] = [
		{
			label: "English",
			value: "english",
		},
		{
			label: "Spanish",
			value: "spanish",
		},
		{
			label: "Russian",
			value: "russian",
		},
		{
			label: "Hindi",
			value: "hindi",
		},
	];

	const gameOptions: Option[] = [
		{
			label: "Call Of Duty",
			value: "cod",
		},
		{
			label: "Subway Surfers",
			value: "subway",
		},
		{
			label: "PUBG",
			value: "pubg",
		},
		{
			label: "Temple Run",
			value: "templeRun",
		},
	];

	const { name, username, description, language, games } = formData;

	const onSubmit = (event: any) => {
		event.preventDefault();
	};

	const onChange = (event: any) => {
		setFormData((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};

	useEffect(() => {
		console.log(formData);
	}, [formData]);

	const onLanguageChange = (event: any) => {
		setFormData((prev) => ({
			...prev,
			language: event[0].value,
		}));
		console.log(formData);
	};

	const onGamesChange = (event: any) => {
		setFormData((prev) => ({
			...prev,
			games: event,
		}));
		console.log(formData);
	};

	return (
		<Flex direction="column" gap="120px" padding="132px 0 0 0">
			<Flex gap="114px" margin="100px 0px 0px 100px">
				<Flex direction="column" gap="22px">
					<Text size="64px" weight="400" height="78px" spacing="2px">
						Great platform to
						<br />
						become a trainer
					</Text>
					<Text
						color="grey"
						size="20px"
						weight="400"
						height="28px"
						margin="10px 0 0 0"
					>
						We made it so beautiful and simple. It combines
						landings, pages, blogs
						<br />
						and shop screens. It is definitely the tool you need in
						your collection!
					</Text>
					<Flex
						gap="72px"
						justify="flex-start"
						align="center"
						margin="60px 0 0 0"
					>
						<Button
							size="medium"
							onClick={() => router.push("/expert#register")}
						>
							Apply To Become An Expert
						</Button>
						<Text size="20px" weight="600" spacing="0.2px">
							<Link href="/expert#steps" target="" rel="">
								Learn More
							</Link>
						</Text>
					</Flex>
					<Text size="16px" weight="400" height="26px" color="grey">
						By signing up, you agree to the
						<Link
							href="/tos"
							rel="noopener norefferer"
							target="_blank"
						>
							Terms of Service
						</Link>
					</Text>
				</Flex>
				<Image
					src="/expert_page.png"
					alt="expert_page"
					width={750}
					height={875}
					style={{ margin: "-232px 0 0 -72px" }}
				/>
			</Flex>
			<Flex
				direction="column"
				align="center"
				justify="center"
				gap="16px"
				margin="178px 0 0 0"
			>
				<Text size="48px" weight="400" height="62px" spacing="2px">
					Our Features
				</Text>
				<Text size="20px" height="32px" spacing="0.2px" color="grey">
					We have created a new product that will help designers,
					developers and
					<br />
					companies create websites for their startups quickly and
					easily.
				</Text>
				<Flex
					gap="32px"
					align="center"
					justify="center"
					padding="28px 0 0 0"
				>
					{FEATURES.map((feature) => (
						<FeatureCard
							key={feature.heading}
							image={feature.image}
							heading={feature.heading}
							subHeading={feature.subHeading}
						/>
					))}
				</Flex>
			</Flex>
			<Flex
				id="steps"
				gap="48px"
				align="center"
				justify="center"
				direction="column"
			>
				<Text size="48px" weight="400" height="62px" spacing="2px">
					Our Workflow
				</Text>
				{STEPS.map((step) => (
					<Step
						key={step.number}
						number={step.number}
						borderColor={step.borderColor}
						heading={step.heading}
						subHeading={step.subHeading}
					/>
				))}
			</Flex>
			<Flex
				id="register"
				gap="54px"
				direction="column"
				align="center"
				justify="center"
			>
				<Text size="48px" weight="400" height="62px" spacing="2px">
					Register as a Pro Gamer
				</Text>
				<form
					onSubmit={onSubmit}
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "32px",
						width: "50%",
					}}
				>
					<TextField
						name="name"
						type="text"
						placeholder="Name"
						value={name}
						onChange={onChange}
						required
						disabled={false}
						width="100%"
					/>
					<TextField
						name="username"
						type="text"
						placeholder="Username"
						value={username}
						onChange={onChange}
						required
						disabled={false}
						width="100%"
					/>
					<TextField
						name="description"
						type="text"
						placeholder="Description"
						value={description}
						onChange={onChange}
						required
						disabled={false}
						width="100%"
					/>
					<DropdownItem
						name="Select a language"
						title="text"
						isSingle={true}
						data={options}
						onSingleChange={onLanguageChange}
					/>
					<DropdownItem
						multiName="Select your games"
						multiTitle="text"
						isMultiple={true}
						multiData={gameOptions}
						onMultiChange={onGamesChange}
					/>

					<p
						style={{
							color: "darkgray",
							fontSize: "20px",
							wordWrap: "break-word",
							textAlign: "left",
							paddingTop: "8px",
						}}
					>
						By signing up, you agree with our
						<Link
							href="/tos"
							target="_blank"
							rel="noopener noreferrer"
						>
							Terms of Service
						</Link>
						,
						<Link
							href="/guidelines"
							target="_blank"
							rel="noopener noreferrer"
						>
							Community Guidelines
						</Link>
						{" and"}
						<Link
							href="/privacy"
							target="_blank"
							rel="noopener noreferrer"
						>
							Privacy Policy
						</Link>
					</p>
					<Button type="submit" size="large" stretch>
						Register
					</Button>
					<div
						style={{
							display: "flex",
							gap: "8px",
							fontSize: "20px",
							color: "grey",
						}}
					>
						<p>
							Already have an account?
							<Link
								href="/login"
								target="_blank"
								rel="noopener noreferrer"
							>
								Log In
							</Link>
						</p>
					</div>
				</form>
			</Flex>
		</Flex>
	);
};

export default Expert;
