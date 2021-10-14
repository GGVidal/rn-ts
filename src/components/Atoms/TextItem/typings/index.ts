import {TextProps} from 'react-native'
import {ReactNode} from 'react'

export interface Props extends TextProps {
    children: ReactNode;
}