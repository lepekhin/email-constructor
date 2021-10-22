import {propsType} from '../../types/propsType';
const colorProps:propsType = [
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
		label: 'Фоновый цвет блока',
		default: '#F2F2F2',
	},
];
export default colorProps;
