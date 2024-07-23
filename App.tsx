// App.tsx
import React from 'react';
import { StatusBar as RNStatusBar, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';import { ThemeProvider } from 'styled-components/native';
import { theme } from "./src/global/styles/theme";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto"
import { Inter_900Black } from "@expo-google-fonts/inter"
import { Routes } from './src/routes';

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
            <View style={{ height: 70, backgroundColor: theme.colors.primary }}>
          </View>            
            <Routes />
          </View>  
      </ThemeProvider>
  );
}
