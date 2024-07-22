import React from "react";
import { TextInputProps } from "react-native";

import { StyledInput } from "./styles";

type Props = TextInputProps;

export default function Input({...rest}: Props) {
  return(
    <StyledInput {...rest}/>
  )
}