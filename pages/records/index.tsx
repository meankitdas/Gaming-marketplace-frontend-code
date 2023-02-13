import React, { useContext } from "react";
import { NextPage } from "next";

import { Player } from "@livepeer/react";

import { Flex } from "../../components/Flex";
import { UserContext } from "../../contexts/UserContext";

const Records: NextPage = () => {
	const { assets } = useContext(UserContext);

	return (
		<Flex
			align="center"
			justify="center"
			direction="column"
			gap="32px"
			padding="132px 100px 0px 100px"
			minHeight="100vh"
		>
			{assets.map((asset) => (
				<Player
					title={asset.title}
					playbackId={asset.playbackId}
					aspectRatio="16to9"
					controls={{
						autohide: 3000,
					}}
					theme={{
						radii: { containerBorderRadius: "10px" },
					}}
				/>
			))}
		</Flex>
	);
};

export default Records;
