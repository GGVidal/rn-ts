import styled from 'styled-components/native';
import {TouchableOpacityProps, TextProps} from 'react-native';

interface TouchableType extends TouchableOpacityProps {
  color: string;
}

interface TextType extends TextProps {
}

export const Container = styled.View`
    height: 50px;
    background: transparent;
    position: relative;
    margin: 5px 0;
    opacity: 1;
`;

export const Touchable = styled.TouchableOpacity<TouchableType>`
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