import React, { useEffect, useState } from 'react';
import { Container, Header, TitleMain, TextSimple} from './styles'
import ItemList from '../../components/ItemList'
import { Tarefa } from '../../types/Tarefa';
import { getTarefas,deleteTarefas } from '../../services/TarefaService';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';


export default function ListaTarefas() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const router = useRouter();
  const params = useLocalSearchParams(); // Para detectar mudanças nos parâmetros da rota, se aplicável
  
  async function handleDelete(id: number) {
    try {
      await deleteTarefas(id); // Chama a função de serviço para deletar a tarefa
      setTarefas((prevTarefas) => prevTarefas.filter(tarefa => tarefa.id !== id));
    } catch (error) {
      console.error('Erro ao deletar tarefa:', error);
    }
  }

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
  }, [router,params]);
  
  return (
    <Container>
      <Header>
        <TitleMain>Agenda.IFRN</TitleMain>
        <TextSimple>Você tem {tarefas.length} Tarefas</TextSimple>
      </Header>
      <FlatList 
        data={tarefas} 
        renderItem={({ item }: ListRenderItemInfo<Tarefa>) => (
          <ItemList 
            id={item.id} 
            text={item.nome_tarefa} 
            onDelete={handleDelete} // Passa a função de deleção como prop
          />
        )}
        keyExtractor={(t) => t.id.toString()} 
      />
    </Container>
  );
}
