import fontProps from "./props/fontProps";
import colorProps from "./props/colorProps";
import paddingProps from "./props/paddingProps";
import {blockSettingsType} from "../types/blockSettingsType";

const btnBlock:{ btn: blockSettingsType } = {
  btn: {
    label: 'Кнопка',
    props: [
      {
        name: 'text',
        tag: 'input',
        label: 'Текст',
        default: 'Читать далее',
      },
      {
        name: 'href',
        tag: 'input',
        inputType: 'url',
        label: 'Ссылка',
        default: 'https://bureau.ru/books/howtowritethat/demo/8',
      },
      ...fontProps,
      ...colorProps,
      ...paddingProps,
    ],
  },
}

export default btnBlock;
