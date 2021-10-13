import React from "react";
import { Touchable, Text } from "./styles";
import { ButtonProps } from "./typings";

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