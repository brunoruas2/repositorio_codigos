import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { RadioButton, Button } from 'react-native-paper';
import { DateTimePicker } from '@react-native-community/datetimepicker';

import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';

import { useNavigation } from '@react-navigation/native';

const Abastecimento = () => {

  const navigation = useNavigation();

  // campos de input
  const [tipo, setTipo] = React.useState('gas')
  const [preco, setPreco] = React.useState('')
  const [valor, setValor] = React.useState('')
  const [odometro, setOdometro] = React.useState('')
  const [data, setData] = React.useState('')

  // datetime picker
  const [date, setDate] = React.useState(new Date());
  const [show, setShow] = React.useState(false);

  return (
    <Container>
      <Header
        title={'Abastecimento'}
        goBack={() => navigation.goBack()}
      />
      <Body>
        <View style={styles.radioContainer}>
          <View style = {{ flexDirection : 'row', alignItems : 'center' }}>
            <RadioButton
              value='first'
              status= { tipo == 'gas' ? 'checked' : 'unchecked'}
              onPress={ () => setTipo('gas')}
            />
            <Text>Gasolina</Text>
          </View>

          <View style = {{ flexDirection : 'row', alignItems : 'center' }}>
            <RadioButton
              value='second'
              status= { tipo == 'eta' ? 'checked' : 'unchecked'}
              onPress={ () => setTipo('eta')}
            />
            <Text>Etanol</Text>
          </View>
        </View>
        
        {show && (
          <DateTimePicker
            testID='dateTimePicker'
            value={date}
            mode={'date'}
            is24Hour={true}
            display='default'
            onTouchCancel = {() => setShow(false)}
            onChange = {(event, date) => {
              setShow(false);
              setData(date)
            }}
            //onChange={}
          />
        )}

        <TouchableOpacity
          onPress={() => setShow(true)}
        >
          <Input
            label = 'Data'
            value = {data}
            onChangeText={(text) => setData(text)}
            editable = {false}
          />
        </TouchableOpacity>

        <Input
          label = 'Preço'
          value = {preco}
          onChangeText={(text) => setPreco(text)}
        />

        <Input
          label = 'Valor'
          value = {valor}
          onChangeText={(text) => setValor(text)}
        />

        <Input
          label = 'Odometro'
          value = {odometro}
          onChangeText={(text) => setOdometro(text)}
        />

        <View style = {{ flexDirection : 'row', justifyContent : 'space-evenly' }}>
          <Button
            mode='contained'
            color='red'
          >
            Excluir
          </Button>

          <Button
            mode='contained'
          >
            Salvar
          </Button>
        </View>

      </Body>
    </Container>
  )
}

const styles = StyleSheet.create({
  radioContainer : {
    flexDirection : 'row',
    margin : 8,
    alignItems : 'center',
    justifyContent : 'space-evenly'
  }
});

export default Abastecimento;