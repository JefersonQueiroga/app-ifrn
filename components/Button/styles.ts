import styled from "styled-components/native";

interface StyledButtonProps {
    add?: boolean;
}


export const StyledButton = styled.TouchableOpacity<StyledButtonProps>`
    background-color: ${props => (props.add ? '#1DB863' : '#333333')};
    width: 100%;
    height: 45px;
    align-items: center;
    justify-content: center;
`;

export const TextButton = styled.Text`
    color: #ffffff;
    font-size: 20px;
`;