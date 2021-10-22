import {propsType} from '../../types/propsType';
const paddingProps:propsType = [
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
export default paddingProps;
