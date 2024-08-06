import React,{ useState }  from "react";
import { ItemView,ItemText,ItemCheck,Check,ItemGroup,ButtonDelete } from "./styles";
import { TouchableOpacityProps } from "react-native";
import EvilIcons from '@expo/vector-icons/EvilIcons';

interface PropsButton  {
  checkedItem?: boolean;
  text?: string;
  id: number;
  onDelete: (id: number) => Promise<void>;
}


export default function ItemList({checkedItem,text,id,onDelete}:PropsButton) {
  const [checked, setChecked] = useState(false);
  
  function handlePress() {
    setChecked(!checked);
  };

  return(
    <ItemView>
      <ItemGroup>
        <ItemCheck>
              <Check checkedItem={checked} onPress={handlePress}></Check>
        </ItemCheck>
        <ItemText>{text}</ItemText>
       </ItemGroup>
       <ButtonDelete onPress={() => onDelete(id)}>
          <EvilIcons name="trash" size={30} color="black" />
       </ButtonDelete>
    </ItemView>    
    )
}