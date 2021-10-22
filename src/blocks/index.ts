import imgBlock from "./imgBlock";
import textBlock from "./textBlock";
import btnBlock from "./btnBlock";
import {blockSettingsType} from "../types/blockSettingsType";

type blocksType = {[name in 'img' | 'text' | 'btn']: blockSettingsType};

const blocks:blocksType = {...imgBlock, ...textBlock, ...btnBlock};

export type blockName = keyof blocksType;

export default blocks;
