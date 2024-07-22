import styled from "styled-components/native";

interface StyledButtonProps {
    add?: boolean;
}


export const StyledButton = styled.TouchableOpacity<StyledButtonProps>`
    background-color: ${({ add,theme }) => add ? theme.colors.primary : '#666666'};
    width: 100%;
    height: 45px;
    align-items: center;
    justify-content: center;
`;

export const TextButton = styled.Text`
    color: #ffffff;
    font-size: 20px;
    font-family: 'Roboto_400Regular';
`;