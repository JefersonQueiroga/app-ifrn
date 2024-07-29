import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #ffffff;
    align-items: center;
`;

export const TitleMain = styled.Text`
    margin-top: 100px;
    font-size: 26px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
`;

export const FormStyle = styled.View`
    margin-top: 20px;
    width: 80%;
    height: 300px;  
    justify-content: space-around;
`;