import React from "react";
import { Container, Title, Logo, FormView} from "./styles";
import ifrn from "../../assets/ifrn.png";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function Home() {
  return(
    <Container>
      <Logo source={ifrn} />
      <Title>Agenda IFRN</Title>
           <FormView>
              <Input placeholder="Login"/>
              <Input placeholder="Senha"/>
              <Button/>
           </FormView>
    </Container>
  ) 
}