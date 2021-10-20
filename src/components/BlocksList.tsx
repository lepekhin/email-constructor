import React from "react";
import { EmailStateType } from "../types/EmailStateType";
import { blockTypes } from "../utils/blockTypes";
import BlockControls from "./BlockControls";
import BlockSettings from "./BlockSettings";

type BlocksListProps = {
    blocks: EmailStateType;
    setBlocks: React.Dispatch<React.SetStateAction<EmailStateType>>
}

export default function BlocksList({blocks, setBlocks}: BlocksListProps) {
	console.log(blocks);

	return (
		<ol className="constructor__blocks">
			{blocks.map((block, index) => {
				return (
				<li className="block" key={index}>
					<p className="block__label" style={{backgroundColor: block.backgroundColor, color: block.color}}>{blockTypes[block.type].label ?? block.type}</p>
					<BlockControls index={index} color={block.color ?? 'currentColor'} setBlocks={setBlocks}/>
					<button className="block__control block__toggle" type="button" aria-expanded={false} aria-label="Настройка" title="Настройка" onClick={(e) => {
						const btn = e.currentTarget as HTMLButtonElement;
						btn.setAttribute('aria-expanded', (btn.getAttribute('aria-expanded') === 'false').toString());
					}} />
					<BlockSettings index={index} block={block} setBlocks={setBlocks}/>
				</li>)
			})}
		</ol>
	)
}
