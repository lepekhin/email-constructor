import {EmailBlockType} from "../types/EmailStateType";
import blocks, {blockName} from "../blocks";

export default function generateDefaultBlock(type: blockName) {
  const block:EmailBlockType = { type: type };
  const props = blocks[type].props;
  for (const prop of props) {
    block[prop.name] = prop.default;
  }
  return block;
}
