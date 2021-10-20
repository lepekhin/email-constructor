import React from "react";
import { EmailStateType } from "../types/EmailStateType";

type BlockControlsProps = {
	index: number;
	color: string;
    setBlocks: React.Dispatch<React.SetStateAction<EmailStateType>>;
}

export default function BlockControls({index, setBlocks}: BlockControlsProps) {
    const duplicateClickHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
        setBlocks((prevState) => {
            return prevState.concat(Object.assign({}, prevState[index]));
        });
    };

    const deleteClickHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (confirm('Удалить этот блок?')) {
            setBlocks((prevState => {
                return prevState.filter((block, blockIndex) => {
                    return blockIndex !== index;
                });
            }));
        }
    };

    const upClickHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
        setBlocks((prevState => {
            return prevState.map((newBlock, newIndex) => {
                if (newIndex === index - 1) {
                    newBlock = prevState[index];
                } else if (index !== 0 && newIndex === index) {
                    newBlock = prevState[index - 1];
                }
                return newBlock;
            })
        }));
    };

    const downClickHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
        setBlocks((prevState => {
            return prevState.map((newBlock, newIndex) => {
                if (newIndex === index && index !== prevState.length - 1) {
                    newBlock = prevState[index + 1];
                } else if (newIndex === index + 1) {
                    newBlock = prevState[index];
                }
                return newBlock;
            })
        }));
    };

	return (
		<div>
			<button className="block__control" type="button" onClick={upClickHandler} aria-label="Переместить выше" title="Переместить выше">⬆️</button>
			<button className="block__control" type="button" onClick={downClickHandler} aria-label="Переместить ниже" title="Переместить ниже">⬇️</button>
			<button className="block__control" type="button" onClick={duplicateClickHandler} aria-label="Дублировать" title="Дублировать">🔂</button>
			<button className="block__control" type="button" onClick={deleteClickHandler} aria-label="Удалить" title="Удалить">🚮</button>
		</div>
	)
}