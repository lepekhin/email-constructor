import {blockName} from "../blocks";

export type EmailBlockType = {
  type: blockName;
  [prop: string]: string;
};

export type EmailStateType = Array<EmailBlockType>;
