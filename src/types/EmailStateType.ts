import { blockType } from "../utils/blockTypes";

export type EmailBlockType = {
	type: blockType;
	[prop: string]: string;
};

export type EmailStateType = Array<EmailBlockType>;