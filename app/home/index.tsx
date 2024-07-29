import React from "react";
import { Container, Title, Logo, FormView} from "../home/styles";
import ifrn from "../../assets/ifrn.png";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useRouter } from 'expo-router';

export default function Home(){
  const router = useRouter();

  const navigateToHome = () => {
    router.push('/(tabs)');
  };


  return(
    <Container>
      <Logo source={ifrn} />
      <Title>Agenda IFRN</Title>
           <FormView>
              <Input placeholder="Login"/>
              <Input placeholder="Senha"/>
              <Button onPress={ navigateToHome }/>
           </FormView>
    </Container>
  ) 
}