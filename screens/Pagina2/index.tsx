import React, { useEffect, useState } from 'react';
import { Container, Header, TitleMain, TextSimple} from './styles'
import ItemList from '../../components/ItemList'
import { Tarefa } from '../../types/Tarefa';
import { getTarefas } from '../../services/TarefaService';
import { FlatList, ListRenderItemInfo } from 'react-native';


export default function ListaTarefas() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  
  async function buscarDadosTarefas() {
    try {
      const tarefas = await getTarefas();
      setTarefas(tarefas);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
    }
  }

  useEffect(() => { 
    buscarDadosTarefas();
  }, []);
  
  return (
    <Container>
      <Header>
        <TitleMain>Agenda.IFRN</TitleMain>
        <TextSimple>Você tem 2 Tarefas</TextSimple>
      </Header>
      <FlatList 
        data={tarefas} 
        renderItem={({ item }: ListRenderItemInfo<Tarefa>) => <ItemList text={item.nome_tarefa} />}
        keyExtractor={(t) => t.id.toString()} 
      />

    </Container>
  );
}
