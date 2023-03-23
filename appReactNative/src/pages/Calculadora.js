import React from 'react';
import { StyleSheet, View } from 'react-native'
import { Appbar, TextInput, Button, Text } from 'react-native-paper';

import Container from './../components/Container';
import Header from './../components/Header';
import Body from './../components/Body';
import Input from './../components/Input';

const Calculadora = () => {

  const [gas, setGas] = React.useState('');
  const [eta, setEta] = React.useState('');
  const [res, setRes] = React.useState('');

  const handleCalcular = () => {
    if (!gas || gas <= 0 || !eta || eta <= 0) {
      alert.alert('Campos preenchidos incorretamente!');
    } else {
      let pct = Math.round((eta / gas) * 100);

      if (pct < 70) {
        setRes(pct + "% Recomendado o uso de Etanol!")
      } else {
        setRes(pct + "% Recomendado o uso de Gasolina!")
      }
    }
  }

  return (
    <Container>
      <Header title={"Calculadora"} />

      <Body>
        <Input
          label="Preço Gasolina"
          value={gas}
          onChangeText={text => setGas(text)}
        />

        <Input
          label="Preço Etanol"
          value={eta}
          onChangeText={text => setEta(text)}
        />

        <Button icon='alarm-panel' mode='contained' onPress={handleCalcular}>
          Calcular
        </Button>

        <Text style={styles.text}> {res} </Text>

      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    margin: 8
  }
});

export default Calculadora;