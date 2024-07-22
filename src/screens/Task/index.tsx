import React from "react";
import { Container,TitleMain,FormStyle } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function Task() {
    return(
        <Container>
          <TitleMain>Cadastro de Tarefa</TitleMain>  
          <FormStyle>
                <Input placeholder="Nome da Tarefa"/>
                <Input placeholder="Descrição"/>
                <Input placeholder="Nome da Tarefa"/>
                <Input placeholder="Data"/>
                <Button text="Cadastrar" add={true}/>
          </FormStyle>
        </Container>   
    )
}
