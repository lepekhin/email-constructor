import fontProps from "./props/fontProps";
import colorProps from "./props/colorProps";
import paddingProps from "./props/paddingProps";
import {blockSettingsType} from "../types/blockSettingsType";

const imgBlock: { img: blockSettingsType } = {
  img: {
    label: 'Изображение',
    props: [
      {
        name: 'src',
        tag: 'input',
        inputType: 'url',
        label: 'Ссылка на картинку',
        default: 'https://via.placeholder.com/568x180.png?text=email.lepekhin.studio',
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
        default: 'https://lepekhin.studio/',
      },
      {
        name: 'width',
        tag: 'input',
        inputType: 'number',
        label: 'Ширина',
        default: '568',
      },
      {
        name: 'height',
        tag: 'input',
        inputType: 'number',
        label: 'Высота',
        default: '180',
      },
      ...fontProps,
      ...colorProps,
      ...paddingProps,
    ],
  },
}

export default imgBlock;
