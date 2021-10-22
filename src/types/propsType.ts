import { HTMLInputTypeAttribute } from 'react';

export type propsType = {
  name: string;
  tag: 'input' | 'textarea' | 'select';
  options?: {value: string, label: string}[];
  inputType?: HTMLInputTypeAttribute;
  label: string;
  default: string;
}[];
