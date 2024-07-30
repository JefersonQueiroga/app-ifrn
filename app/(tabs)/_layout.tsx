import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: 'Registrar Tarefas',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="check-square-o" color={color} />,
        }}
      />
      <Tabs.Screen
        name="lista"
        options={{
          headerShown: false,
          title: 'Lista de Tarefas',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="list-ul" color={color} />,
        }}
      />
    </Tabs>
  );
}