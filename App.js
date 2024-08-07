import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import Navigation from "./src/navigation/Navigation"
import {AuthProvider} from "./src/context/AuthContext"

export default function App() {
  return (
    <AuthProvider>

    
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
    
    </AuthProvider>
  );
}
