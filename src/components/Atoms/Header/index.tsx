import React from "react";
import { Container, Text } from "./styles";
import {Props} from './typings'

const Header: React.FC<Props> = ({
    children,
    ...props
}) => {
    return (
        <Container {...props}>
            <Text> {children} </Text>
        </Container>
    )
}
export default Header;