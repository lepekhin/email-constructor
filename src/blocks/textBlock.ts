import fontProps from "./props/fontProps";
import colorProps from "./props/colorProps";
import paddingProps from "./props/paddingProps";
import {blockSettingsType} from "../types/blockSettingsType";

const textBlock: { text: blockSettingsType } = {
  text: {
    label: 'Текст',
    props: [
      {
        name: 'text',
        tag: 'textarea',
        label: 'Текст',
        default: '«Ключ к хорошей проморассылке — понимание читателя: что у него болит и о чём ему следует рассказывать».',
      },
      ...fontProps,
      ...colorProps,
      {
        name: 'tag',
        tag: 'select',
        options: [
          { value: 'p', label: 'Параграф <p>' },
          { value: 'h1', label: 'Заголовок письма <h1>' },
          { value: 'h2', label: 'Подзаголовок <h2>' },
        ],
        label: 'Тип',
        default: 'p',
      },
      ...paddingProps,
    ],
  },
}

export default textBlock;
