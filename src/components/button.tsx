import React from "react";
import {TouchableOpacityProps} from 'react-native';
import { Touchable, Text } from "./button.styles";

interface ButtonProps extends TouchableOpacityProps {
    color: string;
    children: string;
}

const Button: React.FC<ButtonProps> = ({
    color,
    children,
    onPress,
    ...props
}) => {
    return (
        <Touchable color={color} onPress={onPress} {...props}>
            <Text> {children} </Text>
        </Touchable>
    )
}
export default Button;