import { HTMLInputTypeAttribute } from "react"
import { EmailBlockType } from "../types/EmailStateType";

type propsType = {
	name: string;
	tag: "input" | "textarea" | "select";
	options?: {value: string, label: string}[];
	inputType?: HTMLInputTypeAttribute;
	label: string;
	default: string;
}[];

const defaultPaddingProps:propsType = [
	{
		name: 'paddingTop',
		tag: 'input',
		inputType: 'number',
		label: 'Отступ сверху',
		default: '10',
	},
	{
		name: 'paddingRight',
		tag: 'input',
		inputType: 'number',
		label: 'Отступ справа',
		default: '16',
	},
	{
		name: 'paddingBottom',
		tag: 'input',
		inputType: 'number',
		label: 'Отступ снизу',
		default: '10',
	},
	{
		name: 'paddingLeft',
		tag: 'input',
		inputType: 'number',
		label: 'Отступ слева',
		default: '16',
	},
];

const defaultTextProps:propsType = [
	{
		name: 'fontSize',
		tag: 'input',
		inputType: 'number',
		label: 'Размер шрифта',
		default: '16',
	},
	{
		name: 'lineHeight',
		tag: 'input',
		inputType: 'number',
		label: 'Межстрочный интервал',
		default: '20',
	},
	{
		name: 'textAlign',
		tag: 'select',
		options: [
			{value: 'left', label: 'по левому краю'},
			{value: 'center', label: 'по центру'},
			{value: 'right', label: 'по правому краю'},
			{value: 'justify', label: 'по ширине'},
		],
		label: 'Выравнивание',
		default: 'left',
	},
];

const defaultColorProps:propsType = [
	{
		name: 'color',
		tag: 'input',
		inputType: 'color',
		label: 'Цвет текста',
		default: '#222222',
	},
	{
		name: 'backgroundColor',
		tag: 'input',
		inputType: 'color',
		label: 'Цвет фона',
		default: '#F2F2F2',
	},
];

type blockTypes = {
	img: {
		label: string;
		props: propsType;
	},
	text: {
		label: string;
		props: propsType;
	},
}
export type blockType = keyof blockTypes;

export const blockTypes:blockTypes = {
	img: {
		label: 'Изображение',
		props: [
			{
				name: 'src',
				tag: 'input',
				inputType: 'url',
				label: 'Ссылка на картинку',
				default: 'https://via.placeholder.com/600x200.png?text=email.lepekhin.studio',
			},
			{
				name: 'text',
				tag: 'input',
				label: 'Альтернативный текст',
				default: 'Изображение',
			},
			{
				name: 'href',
				tag: 'input',
				inputType: 'url',
				label: 'Ссылка по нажатию',
				default: 'https://bureau.ru/books/howtowritethat/demo/8',
			},
			{
				name: 'width',
				tag: 'input',
				inputType: 'number',
				label: 'Ширина',
				default: '600',
			},
			{
				name: 'height',
				tag: 'input',
				inputType: 'number',
				label: 'Высота',
				default: '200',
			},
			...defaultTextProps,
			...defaultColorProps,
			...defaultPaddingProps,
		],
	},
	text: {
		label: 'Текст',
		props: [
			{
				name: 'text',
				tag: 'textarea',
				label: 'Текст',
				default: 'Ключ к хоро­шей про­мо­рас­сылке — именно пони­ма­ние чита­теля: что у него болит и о чём ему сле­дует рассказывать.',
			},
			...defaultTextProps,
			...defaultColorProps,
			{
				name: 'tag',
				tag: 'select',
				options: [
					{value: 'p', label: 'Параграф <p>'},
					{value: 'h1', label: 'Заголовок письма <h1>'},
					{value: 'h2', label: 'Подзаголовок <h2>'},
				],
				label: 'Тип',
				default: 'p',
			},
			...defaultPaddingProps,
		],
	},
}

export function generateDefaultBlock(blockType: blockType) {
let block:EmailBlockType = {type: blockType};
for (const prop of blockTypes[blockType].props) {
	block[prop.name] = prop.default;
}
return block;
}

export const initialState = (Object.keys(blockTypes) as Array<blockType>).map(generateDefaultBlock);