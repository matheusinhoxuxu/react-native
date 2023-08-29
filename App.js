import { StatusBar } from 'expo-status-bar';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';
import Botoes from './components/Botoes';
import Pag3 from './screens/Pag3';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pag1 from './screens/Pag1';
import Pag2 from './screens/Pag2';
import Arrays from './screens/Arrays';
import Objeto from './screens/Objeto';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>

      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="objetos" component={Objeto}  options={{title:"Objeto"}}/>
        <Stack.Screen name="arrays" component={Arrays}  options={{title:"Arrays"}}/>
          <Stack.Screen name="Pag1" component={Pag1}  options={{title:"Página principal"}}/>
          <Stack.Screen name="Pag2" component={Pag2} options={{title:"Página 2"}}/>
          <Stack.Screen name="Pag3" component={Pag3} options={{title:"Página 3"}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 2,
    marginBottom: 20
  },
  titulo: {
    color: 'white',
    fontSize: 30,
    padding: 10,
    marginBottom: 20,
    borderBottomColor: 'red',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    textAlign: 'center',
    backgroundColor: 'red',
  },
  paragrafo: {
    fontSize: 20
  }
});
