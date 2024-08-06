import styled from "styled-components/native";

interface PropsButton {
  checkedItem?: boolean;
}

interface PropsCheck{
  checkedItem?: boolean;
}

export const ItemView = styled.View`
  padding: 15px;
  font-size: 16px;
  background-color: #F9F9F9;
  border-radius: 4px;
  width: 100%;
  height: 54px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  
`;

export const ItemText = styled.Text<PropsCheck>`
  font-size: 16px; 
  color:    #666666;
  margin-left: 10px;
  text-decoration-line: ${(props) => (props.checkedItem ? 'line-through' : 'none')};
`;

export const ItemCheck = styled.View`
  width: 18px;
  height: 18px;
  margin: 5px;
  border-radius: 2px;
  border: 1px solid #B2B2B2;
`;

export const Check = styled.TouchableOpacity<PropsButton>`
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.checkedItem ? "#61C0BF" : "#FFFFFF")};
  border-radius: 2px;
  margin: 3px;
`;

export const ItemGroup = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ButtonDelete = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
`;