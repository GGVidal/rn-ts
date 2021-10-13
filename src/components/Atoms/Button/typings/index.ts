import { ReactNode } from 'react'
import {TouchableOpacityProps, TextProps} from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
    color: string;
    children: ReactNode;
}

export interface TextType extends TextProps {
}