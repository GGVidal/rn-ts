import { TextInputProps } from "react-native";

export interface Props extends TextInputProps {
    placeholder: string;
    value: string;
}