/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Image from "next/image";

import { useDropzone } from "react-dropzone";
import { Flex } from "../Flex";
import { Text } from "../Text";

interface DropzoneProps {
	onDrop: (_acceptedFiles: File[]) => Promise<void>;
}

const getColor = (
	props?:
		| {
				isDragAccept: boolean;
				isDragReject: boolean;
		  }
		| undefined,
) => {
	if (props?.isDragAccept) return { color: "green", gradient: "#062108" };
	if (props?.isDragReject) return { color: "red", gradient: "#190611" };
	return { color: "#795315", gradient: "#231806" };
};

const Dropzone = ({ onDrop }: DropzoneProps) => {
	const { getRootProps, getInputProps, isDragAccept, isDragReject } =
		useDropzone({ accept: { "video/*": [] }, maxFiles: 1, onDrop });

	const dragState = { isDragAccept, isDragReject };

	return (
		<Flex
			radius="inherit"
			background={`linear-gradient(180deg, ${
				getColor(dragState).gradient
			} 0%, 
					rgba(16, 17, 19, 0) 100%),
				linear-gradient(180deg, ${getColor(dragState).color} 0%,
				rgba(52, 58, 64, 0) 100%)
			`}
			border={`2px solid ${getColor(dragState).color}`}
			padding="16px"
		>
			<Flex
				direction="column"
				gap="32px"
				align="center"
				padding="50px 150px 75px 150px"
				border={`3px dashed ${getColor(dragState).color}`}
				radius="inherit"
				background="linear-gradient(180deg, #190611 0%, rgba(16, 17, 19, 1) 100%),
				linear-gradient(180deg, #db2750 0%, rgba(52, 58, 64, 0) 100%);"
				style={{ whiteSpace: "nowrap" }}
				cursor="pointer"
				{...getRootProps({ isDragAccept, isDragReject })}
				width="100%"
			>
				<input {...getInputProps()} />
				<Image
					src="/video_upload.svg"
					width={200}
					height={200}
					alt="upload"
				/>
				<Flex gap="8px">
					<Text size="20px">Drag and drop or </Text>
					<Text
						color={getColor(dragState).color}
						weight="700"
						size="20px"
					>
						browse files
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

export { Dropzone };
export type { DropzoneProps };
