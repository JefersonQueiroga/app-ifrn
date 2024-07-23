import React from "react";
import { Container, Title, Logo, FormView} from "./styles";
import ifrn from "../../assets/ifrn.png";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigation } from '@react-navigation/native'
import {StactTypes} from "../../routes/stack";

export default function Home(){

  const navigation = useNavigation<StactTypes>();

  return(
    <Container>
      <Logo source={ifrn} />
      <Title>Agenda IFRN</Title>
           <FormView>
              <Input placeholder="Login"/>
              <Input placeholder="Senha"/>
              <Button onPress={() => navigation.navigate("Task")}/>
           </FormView>
    </Container>
  ) 
}