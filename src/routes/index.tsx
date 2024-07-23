import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import Home from "../screens/Home";
import Task from '../screens/Task';
import Pagina2 from '../screens/Pagina2';

const Stack = createNativeStackNavigator();

type StackNavigator = {
  Home: undefined;
  Task: undefined;
  Pagina2: undefined;
}

export type StactTypes = NativeStackNavigationProp<StackNavigator>;

export function Routes(){
  
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Task" component={Task} />
            <Stack.Screen name="Pagina2" component={Pagina2} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
