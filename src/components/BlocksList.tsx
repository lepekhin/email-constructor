import React from "react";
import { EmailStateType } from "../types/EmailStateType";
import BlockControls from "./BlockControls";
import BlockSettings from "./BlockSettings";
import blocks from "../blocks";

type BlocksListProps = {
    mail: EmailStateType;
    setMail: React.Dispatch<React.SetStateAction<EmailStateType>>
}

export default function BlocksList({mail, setMail}: BlocksListProps) {
	console.log(mail);

	return (
		<ol className="constructor__blocks">
			{mail.map((block, index) => {
				return (
				<li className="block" key={index}>
					<p className="block__label" style={{backgroundColor: block.backgroundColor, color: block.color}}>{blocks[block.type].label ?? block.type}</p>
					<BlockControls index={index} color={block.color ?? 'currentColor'} setMail={setMail}/>
					<button className="block__control block__toggle" type="button" aria-expanded={false} aria-label="Настройка" title="Настройка" onClick={(e) => {
						const btn = e.currentTarget as HTMLButtonElement;
						btn.setAttribute('aria-expanded', (btn.getAttribute('aria-expanded') === 'false').toString());
					}} />
					<BlockSettings index={index} block={block} setMail={setMail}/>
				</li>)
			})}
		</ol>
	)
}
