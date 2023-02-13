import React, { useMemo, useState } from "react";
import {
	LivepeerConfig,
	createReactClient,
	studioProvider,
} from "@livepeer/react";

import type { AppProps } from "next/app";
import "../styles/globals.css";

import { SideBar } from "../components/SideBar";
import { NavBar } from "../components/NavBar";
import { Flex } from "../components/Flex";

import { UserContext, IAssetContext } from "../contexts/UserContext";

import SIDEBAR_LINKS from "../constants/sibebarLinks";
// import ASSETS from "../constants/recordPageData";

const App = ({ Component, pageProps }: AppProps) => {
	const [walletAddress, setWalletAddress] = useState<string>("");
	const [assets, setAssets] = useState<Array<IAssetContext>>([]);

	const livepeerClient = createReactClient({
		provider: studioProvider({
			apiKey: "08923f43-cdbd-4830-92bb-eb9891b7fdf2",
		}),
	});

	const connectWallet = async (): Promise<void> => {
		(window as any).ethereum
			.request({ method: "eth_requestAccounts" })
			.then((accounts: string[]) => setWalletAddress(accounts[0]));
	};

	const userContext = useMemo(
		() => ({ walletAddress, isExpert: true, assets }),
		[walletAddress, assets],
	);

	return (
		<LivepeerConfig
			client={livepeerClient}
			theme={{ colors: { accent: "#DB2750" } }}
		>
			<UserContext.Provider value={userContext}>
				<Flex>
					<SideBar links={SIDEBAR_LINKS} />
					<Flex
						background="linear-gradient(to right, #391443 -50%, black 100%)"
						direction="column"
						width="calc(100% - 320px)"
					>
						<NavBar
							connectWallet={connectWallet}
							userAssets={assets}
							setUserAssets={setAssets}
						/>
						<Component {...pageProps} />
					</Flex>
				</Flex>
			</UserContext.Provider>
		</LivepeerConfig>
	);
};

export default App;
