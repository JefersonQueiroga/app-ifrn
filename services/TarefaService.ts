// services/todoService.ts
import axios, { AxiosResponse } from 'axios';
import { Tarefa } from '../types/Tarefa';

// Configuração do Axios
const api = axios.create({
  baseURL: 'http://10.0.2.2:3000', 
});

// Função para buscar todos os todos
export async function getTarefas(): Promise<Tarefa[]> {
  const response: AxiosResponse<Tarefa[]> = await api.get('/tarefas');
  return response.data;
}

// Função para buscar um todo por ID
export async function getTarefaById(id: number): Promise<Tarefa> {
  const response: AxiosResponse<Tarefa> = await api.get(`/tarefas/${id}`);
  return response.data;
}

// Função para criar um novo todo
export async function createTarefa(newTarefa: Omit<Tarefa, 'id'>): Promise<Tarefa> {
  const response: AxiosResponse<Tarefa> = await api.post('/tarefas', newTarefa);
  return response.data;
}

// Função para atualizar um todo
export async function updateTodo(id: number, updatedTodo: Partial<Tarefa>): Promise<Tarefa> {
  const response: AxiosResponse<Tarefa> = await api.put(`/tarefas/${id}`, updatedTodo);
  return response.data;
}

// Função para deletar um todo
export async function deleteTarefas(id: number): Promise<void> {
  await api.delete(`/tarefas/${id}`);
}
