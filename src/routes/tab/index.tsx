import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import Home from "../../screens/Home";
import Task from '../../screens/Task';
import Pagina2 from '../../screens/Pagina2';

const Tab = createBottomTabNavigator();
 
type TabNavigator = {
  Home: undefined;
  Task: undefined;
  Pagina2: undefined;
}

export type TabType = BottomTabNavigationProp<TabNavigator>;

export function TabComponent(){
  
  return(
    <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Task" component={Task} />
            <Tab.Screen name="Pagina2" component={Pagina2} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}
