/* eslint-disable indent */
import Image from "next/image";
import React, {
	useCallback,
	useContext,
	useMemo,
	useState,
	useEffect,
} from "react";
import { useCreateAsset } from "@livepeer/react";

import { UserContext, IAssetContext } from "../../contexts/UserContext";

import { Button } from "../Button";
import { Dropzone } from "../Dropzone";
import { Flex } from "../Flex";
import { Overlay } from "../Overlay/Overlay";
import { Text } from "../Text";
import { TextField } from "../TextField";

interface NavBarProps {
	connectWallet: () => Promise<void>;
	userAssets: Array<IAssetContext>;
	setUserAssets: React.Dispatch<React.SetStateAction<Array<IAssetContext>>>;
}

interface IVideo {
	title: string;
	video: File | undefined;
}

const NavBar = ({ connectWallet, userAssets, setUserAssets }: NavBarProps) => {
	const [videoData, setVideoData] = useState<IVideo>({
		title: "",
		video: undefined,
	});
	const [isModalOpen, setIsModalOpen] = useState(false);
	const userContext = useContext(UserContext);
	const address = userContext.walletAddress;

	const { title, video } = videoData;

	const onChange = (event: any) => {
		setVideoData((prev) => ({
			...prev,
			title: event.target.value,
		}));
	};

	const {
		mutate: createAsset,
		data: assets,
		status,
		progress,
	} = useCreateAsset(
		video
			? {
					sources: [{ name: video.name, file: video }] as const,
			  }
			: null,
	);

	const onDrop = useCallback(
		async (acceptedFiles: File[]) => {
			if (
				acceptedFiles &&
				acceptedFiles.length > 0 &&
				acceptedFiles?.[0]
			) {
				setVideoData({ title, video: acceptedFiles[0] });
			}
		},
		[title],
	);

	const fetchProgress = useMemo(() => {
		switch (progress?.[0].phase) {
			case "failed":
				return "Failed to process video.";

			case "waiting":
				return "Waiting...";

			case "uploading":
				return `Uploading... ${Math.round(
					Number(progress?.[0]?.progress) * 100,
				)}%`;

			case "processing":
				return `Processing... ${Math.round(
					Number(progress?.[0]?.progress) * 100,
				)}%`;

			default:
				return null;
		}
	}, [progress]);

	useEffect(() => {
		if (assets?.[0] && assets?.[0].status?.phase === "ready") {
			setUserAssets([
				...userAssets,
				{
					title,
					assetId: assets[0].id,
					playbackId: assets[0].playbackId,
				},
			]);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [assets?.[0].status?.phase]);

	return (
		<>
			<Flex
				justify="flex-end"
				padding="48px 72px"
				zIndex="1"
				position="fixed"
				width="calc(100vw - 320px)"
			>
				{address.length > 0 ? (
					<Flex gap="32px">
						{userContext.isExpert ? (
							<Button onClick={() => setIsModalOpen(true)}>
								Upload Video
							</Button>
						) : null}
						<Flex gap="16px" align="center" justify="center">
							<Image
								src="/user.png"
								width={48}
								height={48}
								alt="user"
							/>
							<h2>
								{`${address.substring(
									0,
									5,
								)}...${address.substring(
									address.length - 4,
									address.length,
								)}`}
							</h2>
						</Flex>
					</Flex>
				) : (
					<Button onClick={connectWallet}>Connect Wallet</Button>
				)}
			</Flex>
			{isModalOpen && (
				<Overlay onClick={() => setIsModalOpen(false)}>
					<Flex
						direction="column"
						background="linear-gradient(180deg, #190611 0%, rgba(16, 17, 19, 0.8) 100%),
						linear-gradient(180deg, #db2750 0%, rgba(52, 58, 64, 0) 100%);"
						radius="8px"
						border="2px solid #DB2750"
						padding="24px"
						width="56%"
						onClick={(event) => event.stopPropagation()}
						gap="20px"
					>
						<Flex
							align="center"
							justify="flex-start"
							background="#101113"
							padding="12px"
							width="100%"
							border="2px solid #DB2750"
							radius="inherit"
						>
							<Text
								size="24px"
								weight="400"
								height="34px"
								padding="4px 2px 4px 2px"
							>
								Upload a video lesson
							</Text>
						</Flex>
						<TextField
							required
							placeholder="Title"
							onChange={onChange}
						/>
						<Dropzone onDrop={onDrop} />
						<Flex
							width="100%"
							align="center"
							justify="space-between"
							style={{ flexGrow: "unset" }}
						>
							<Text size="20px">
								{fetchProgress
									? `${fetchProgress}`
									: "Select a video file to upload"}
							</Text>
							<Flex gap="8px">
								{video && (
									<>
										<Flex
											padding="0px 12px"
											radius="12px"
											align="center"
											background="linear-gradient(88.61deg, #12B886 0.31%, #82C91E 99.5%)"
										>
											<Text size="18px" weight="600">
												{video.name}
											</Text>
										</Flex>
										<Button
											size="small"
											onClick={() =>
												setVideoData({
													title: "",
													video: undefined,
												})
											}
										>
											X
										</Button>
									</>
								)}
							</Flex>
						</Flex>
						<Button
							stretch
							size="large"
							disabled={status === "loading" || !createAsset}
							onClick={() => {
								createAsset?.();
							}}
						>
							{status === "loading"
								? "Loading..."
								: "Let's upload!"}
						</Button>
					</Flex>
				</Overlay>
			)}
		</>
	);
};

export { NavBar };
export type { NavBarProps };
