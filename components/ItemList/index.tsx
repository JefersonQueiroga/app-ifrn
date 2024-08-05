import React,{ useState }  from "react";
import { ItemView,ItemText,ItemCheck,Check,ItemGroup } from "./styles";
import { TouchableOpacityProps } from "react-native";
import EvilIcons from '@expo/vector-icons/EvilIcons';

interface PropsButton extends TouchableOpacityProps {
  checkedItem?: boolean;
  text?: string;
}


export default function ItemList({checkedItem,text,...rest}:PropsButton) {
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

       <EvilIcons name="trash" size={30} color="black" />

    </ItemView>    
    )
}