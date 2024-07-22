// App.tsx
import React from 'react';
import { StatusBar as RNStatusBar, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';import { ThemeProvider } from 'styled-components/native';

import Home from "./src/screens/Home";
import Task from './src/screens/Task';
import Pagina2 from './src/screens/Pagina2';

import { theme } from "./src/global/styles/theme";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto"
import { Inter_900Black } from "@expo-google-fonts/inter"

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Inter_900Black
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (

      <ThemeProvider theme={theme}>
          <View style={{ flex: 1 }}>
          <View style={{ height: 150, backgroundColor: theme.colors.primary }}>
          </View>            
          <Pagina2/>
          </View>  
      </ThemeProvider>
  );
}
