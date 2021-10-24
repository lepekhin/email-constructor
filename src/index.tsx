import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import BlocksList from "./components/BlocksList";
import { EmailStateType } from "./types/EmailStateType";
import renderHtml from "./functions/renderHtml";
import Logo from './assets/img/logo.svg'
import blocks, {blockName} from "./blocks";
import generateDefaultBlock from "./functions/generateDefaultBlock";

function App() {
	let storagedState = window.localStorage.getItem('blocks');
	const [mail, setMail] = useState(storagedState ? JSON.parse(storagedState) as EmailStateType : (Object.keys(blocks) as Array<blockName>).map(generateDefaultBlock));
	const [preHeader, setPreHeader] = useState(window.localStorage.getItem('preHeader') ?? "");
	const stringified = JSON.stringify(mail);
	const exportJson = new Blob([stringified], { type: 'text/json' });
	const renderedHtml = renderHtml(mail, preHeader);

	useEffect(() => {
		window.localStorage.setItem('blocks', stringified);
	}, [mail]);

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
				<BlocksList mail={mail} setMail={setMail} />

				<form className="constructor__add" onSubmit={(e) => {
					e.preventDefault();
					setMail((prevState => {
						return prevState.concat(generateDefaultBlock((e.target as HTMLFormElement).blockType.value));
					}));
				}}>
					<label htmlFor="blockType">Новый блок:</label>
					<select className="block__input" name="blockType">
						{Object.keys(blocks).map((key, index) => {
							return <option value={key} key={index}>{blocks[key as blockName].label}</option>
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
								setMail(() => {
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
							setMail([]);
							setPreHeader('');
						}
					}}>🗑 Удалить всё</button><br/>
					<a className="constructor__logo" href="https://lepekhin.studio/?utm_referrer=email.lepekhin.studio" target="_blank" rel="noopener" aria-label="Студия Евгения Лепёхина"><Logo/></a>
				</div>
			</aside>
			<iframe className="constructor__preview" title="Предпросмотр письма" src={renderedHtml} />
		</>
	);
}

render(<React.StrictMode><App /></React.StrictMode>, document.getElementById("constructor"));
