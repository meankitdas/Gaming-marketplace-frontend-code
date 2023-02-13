import { createContext } from "react";

interface IAssetContext {
	title: string;
	assetId: string;
	playbackId: string | undefined;
}

interface IUserContext {
	walletAddress: string;
	isExpert: boolean;
	assets: Array<IAssetContext>;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

export { UserContext };
export type { IAssetContext };
