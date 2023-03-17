import React from 'react';
import { StyleSheet, View } from 'react-native'
import { Appbar, TextInput, Button, Text } from 'react-native-paper';

import Container from './src/components/Container';
import Header from './src/components/Header';
import Body from './src/components/Body';
import Input from './src/components/Input';

import HomePage from './src/pages/HomePage'

const App = () => {

  const [gas, setGas] = React.useState('');
  const [eta, setEta] = React.useState('');
  const [res, setRes] = React.useState('');

  return (
    <Container>
      <Header title={"Calculadora"}/>

      <Body>
        <Input
          label = "Preço Gasolina"
          value={gas}
          onChangeText={text => setGas(text)}
        />

        <Input 
          label = "Preço Etanol"
          value={eta}
          onChangeText={text => setEta(text)}
        />

        <Button icon='alarm-panel' mode='contained' onPress={() => console.log('Apertado!')}>
          Calcular
        </Button>

        <Text style={styles.text}> {gas} </Text>

      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({
  text:{
    textAlign:'center',
    margin:8
  }
});

export default App;