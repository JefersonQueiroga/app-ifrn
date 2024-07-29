import React from "react";
import { StyledButton,TextButton } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface PropsButton extends TouchableOpacityProps {
    text?: string;
    add?: boolean;
}

export default function Button({text, add,...rest}:PropsButton) {
    return(
        <StyledButton add={add} {...rest}>
            <TextButton>{text}</TextButton>
        </StyledButton>
    )
}
    