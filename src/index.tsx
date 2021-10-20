import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import BlocksList from "./components/BlocksList";
import { EmailStateType } from "./types/EmailStateType";
import { blockType, blockTypes, generateDefaultBlock, initialState } from "./utils/blockTypes";
import renderHtml from "./functions/renderHtml";
import Logo from './img/logo.svg'

function App() {
	let storagedState = window.localStorage.getItem('blocks');
	const [blocks, setBlocks] = useState(storagedState ? JSON.parse(storagedState) as EmailStateType : initialState);
	const [preHeader, setPreHeader] = useState(window.localStorage.getItem('preHeader') ?? "");
	const stringified = JSON.stringify(blocks);
	const exportJson = new Blob([stringified], { type: 'text/json' });
	const renderedHtml = renderHtml(blocks, preHeader);

	useEffect(() => {
		window.localStorage.setItem('blocks', stringified);
	}, [blocks]);

	useEffect(() => {
		window.localStorage.setItem('preHeader', preHeader);
	}, [preHeader]);

	return (
		<>
			<aside className="constructor__aside">
				<p className="constructor__title">Конструктор писем для рассылок</p>
				<input className="block__input block__input--fluid" name="preHeader" onChange={(e) => {
					setPreHeader(e.target.value);
				}} placeholder="Скрытая первая строчка письма" aria-label="Скрытая первая строчка письма" value={preHeader} />
				<BlocksList blocks={blocks} setBlocks={setBlocks} />

				<form className="constructor__add" onSubmit={(e) => {
					e.preventDefault();
					setBlocks((prevState => {
						return prevState.concat(generateDefaultBlock((e.target as HTMLFormElement).blockType.value));
					}));
				}}>
					<label htmlFor="blockType">Новый блок:</label>
					<select className="block__input" name="blockType">
						{Object.keys(blockTypes).map((key, index) => {
							return <option value={key} key={index}>{blockTypes[key as blockType].label}</option>
						})}
					</select>
					<input className="constructor__add_btn" type="submit" value="Добавить" />
				</form>

				<div className="constructor__controls">
					<a className="constructor__control" href={renderedHtml} download={(new Date().toISOString()) + '.html'}>📩 Экспорт в .html</a>
					<a className="constructor__control" href={URL.createObjectURL(exportJson)} download={(new Date().toISOString()) + '.json'}>📥 Сохранить шаблон</a>
					<label className="constructor__control">📤 Загрузить шаблон<input className="visually-hidden" type="file" accept="application/json" onClick={(event) => {
						if (!confirm('Это сотрет текущее письмо. Продолжить?')) {
							event.preventDefault();
						}
					}} onChange={(event) => {
						if (event.target.files) {
							const fileReader = new FileReader();
							fileReader.readAsText(event.target.files[0], "UTF-8");
							fileReader.onload = e => {
								setBlocks(() => {
									if (e.target && typeof e.target.result === 'string') {
										return JSON.parse(e.target.result) as EmailStateType;
									}
									return [{ type: "text", text: "Ошибка импорта" }];
								});
							};
						}
					}} /></label>
					<a className="constructor__control" href="" onClick={(e) => {
						if (confirm('Это сбросит текущее письмо. Продолжить?')) {
							window.localStorage.removeItem('blocks');
							window.localStorage.removeItem('preHeader');
						} else {
							e.preventDefault();
						}
					}}>💣 Сбросить всё</a>
					<button className="constructor__control" type="reset" onClick={() => {
						if (confirm('Это сотрет текущее письмо. Продолжить?')) {
							setBlocks([]);
							setPreHeader('');
						}
					}}>🗑 Удалить всё</button><br/>
					<a className="constructor__logo" href="https://lepekhin.studio/?utm_referrer=email.lepekhin.studio" target="_blank" aria-label="Студия Евгения Лепёхина"><Logo/></a>
				</div>
			</aside>
			<iframe className="constructor__preview" src={renderedHtml} />
		</>
	);
}

render(<React.StrictMode><App /></React.StrictMode>, document.getElementById("constructor"));