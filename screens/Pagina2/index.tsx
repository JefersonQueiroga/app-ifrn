import React from 'react';
import { Container, Header, TitleMain, TextSimple} from './styles'
import ItemList from '../../components/ItemList'
export default function App() {
  return (
    <Container>
      <Header>
        <TitleMain>Agenda.IFRN</TitleMain>
        <TextSimple>Você tem 2 Tarefas</TextSimple>
      </Header>
      <ItemList />
      <ItemList />

    </Container>
  );
}
