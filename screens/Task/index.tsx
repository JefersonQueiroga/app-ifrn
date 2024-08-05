import React, {useState} from "react";
import { Container,TitleMain,FormStyle } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import {createTarefa} from "../../services/TarefaService";
export default function Task() {
  const [nome, setNome] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [data, setData] = useState<string>("");

  function handlePress() {
    console.log("Nome:", nome);
    console.log("Descrição:", descricao);
    console.log("Data:", data);
    createTarefa({nome_tarefa: nome, descricao, data, feita: false});
    setNome("");
    setDescricao("");
    setData("");
    alert("Tarefa cadastrada com sucesso!");
  }

    return(
        <Container>
          <TitleMain>Cadastro de Tarefa</TitleMain>  
          <FormStyle>
                <Input 
                  placeholder="Nome da Tarefa"  
                  value={nome}
                  onChangeText={(nome) => setNome(nome)} />
                <Input placeholder="Descrição"
                  value={descricao}
                  onChangeText={(descricao) => setDescricao(descricao)} />
                <Input placeholder="Data" 
                  value={data}
                  onChangeText={(data) => setData(data)} />
                
                <Button text="Cadastrar" add={true} onPress={handlePress} />
          </FormStyle>
        </Container>   
    )
}
