import {propsType} from '../../types/propsType';
const fontProps:propsType = [
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
      { value: 'left', label: 'по левому краю' },
      { value: 'center', label: 'по центру' },
      { value: 'right', label: 'по правому краю' },
      { value: 'justify', label: 'по ширине' },
    ],
    label: 'Выравнивание',
    default: 'left',
  },
];
export default fontProps;
