import {InputText} from './styles';
import {Props} from './typings';
import React from 'react';

const Input: React.FC<Props> = ({
  placeholder,
  value,
  onChangeText,
  ...props
}) => (
  <InputText
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    {...props}
  />
);

export default Input;
