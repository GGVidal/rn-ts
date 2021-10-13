import styled from 'styled-components/native';
import { ButtonProps, TextType } from './typings';

export const Touchable = styled.TouchableOpacity<ButtonProps>`
  background: ${(props) => props.color || '#fff'};
  align-items: center;
  padding-vertical: 20px;
  border-radius: 5px;
`;

export const Text = styled.Text<TextType>`
  color: #fff;
  font-weight: 500;
  font-size: 12px;
`;
