import React, { FormEvent } from "react";
import { EmailBlockType, EmailStateType } from "../types/EmailStateType";
import { blockTypes } from "../utils/blockTypes";

type BlockSettingsProps = {
    block: EmailBlockType;
	index: number;
    setBlocks: React.Dispatch<React.SetStateAction<EmailStateType>>;
}

export default function BlockSettings({block, index, setBlocks}: BlockSettingsProps) {    
    const inputChangeHandler = (event: FormEvent) => {
        const input = event.target as HTMLInputElement;
        const inputName = input.name;
        setBlocks((prevState => {
            return prevState.map((newBlock, newIndex) => {
                if (newIndex === index) {
                    newBlock[inputName] = input.value;
                }
                return newBlock;
            })
        }))
    };

	return (
		<form className="block__settings">
            {blockTypes[block.type].props.map((prop, propIndex) => {
                let elementProps: {
                    min?: number;
                    max?: number;
                } = {};
                if (prop.inputType === 'number') {
                    elementProps.min = 0;
                    elementProps.max = 600;
                }
                let labelClass = "block__setting";
                if (prop.tag === 'textarea') {labelClass += " block__setting--fluid"}
                return <label className={labelClass} key={propIndex}>{prop.tag !== 'textarea' && prop.label} {{
                        textarea: <textarea rows={1} className="block__input" name={prop.name} value={block[prop.name]} aria-label={prop.label} placeholder={prop.default} onChange={inputChangeHandler} />,
                        input: <input className="block__input" type={prop.inputType} name={prop.name} value={block[prop.name]} placeholder={prop.default} onChange={inputChangeHandler}
                        {...elementProps} />,
                        select: <select className="block__input" name={prop.name} value={block[prop.name]} onChange={inputChangeHandler}>{prop.options?.map(({value, label}, optionIndex) => {
                            return <option key={optionIndex} value={value}>{label}</option>
                        })}</select>,
                    }[prop.tag]}</label>;
            })}
        </form>
	)
}