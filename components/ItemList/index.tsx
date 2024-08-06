import React,{ useState }  from "react";
import { ItemView,ItemText,ItemCheck,Check,ItemGroup,ButtonDelete } from "./styles";
import { TouchableOpacityProps } from "react-native";
import EvilIcons from '@expo/vector-icons/EvilIcons';

interface PropsButton  {
  checkedItem?: boolean;
  text?: string;
  id: number;
  onDelete: (id: number) => Promise<void>;
  onCheck: (id: number, checked: boolean) => Promise<void>;
}


export default function ItemList({checkedItem,text,id,onDelete,onCheck }:PropsButton) {
  const [checked, setChecked] = useState(false);
  
  async function handleCheck() {
    const newCheckedState = !checked;
    setChecked(newCheckedState);
    await onCheck(id,newCheckedState)
  }

  return(
    <ItemView>
      <ItemGroup>
        <ItemCheck>
              <Check checkedItem={checkedItem} onPress={handleCheck}></Check>
        </ItemCheck>
        <ItemText checkedItem={checkedItem}>{text}</ItemText>
       </ItemGroup>
       <ButtonDelete onPress={() => onDelete(id)}>
          <EvilIcons name="trash" size={30} color="black" />
       </ButtonDelete>
    </ItemView>    
    )
}