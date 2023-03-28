import React from 'react';
import { FlatList } from 'react-native';
import { List, Text, FAB } from 'react-native-paper';

import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';

import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    id: 1,
    tipo: 0,
    date: '13/01/2023',
    preco: 3.44,
    valor: 120,
    km: 2000
  },
  {
    id: 2,
    tipo: 1,
    date: '15/01/2023',
    preco: 3.34,
    valor: 122,
    km: 3000
  },
  {
    id: 3,
    tipo: 0,
    date: '17/01/2023',
    preco: 2.44,
    valor: 520,
    km: 4000
  },
];

const Custos = () => {

  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <List.Item
      title={'R$ ' + item.valor.toFixed(2) + ' ( R$ ' + item.preco.toFixed(2) + ' x ' + (item.valor / item.preco).toFixed(2) + ' L)'}
      description={item.km + 'km'}
      left={props => <List.Icon {...props} color={item.tipo == 0 ? 'green' : 'blue'} icon='gas-station' />}
      right={props => <Text {...props} style={{ alignSelf: 'center', fontSize: 10 }}> {item.date} </Text>}
    />
  );
  return (
    <Container>
      <Header title={'Gerenciador'} />
      <Body>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </Body>
      <FAB
          small
          icon='plus'
          onPress={() => navigation.navigate('Abastecimento')}
          style={{ position: 'absolute', margin: 16, right: 0, bottom: 0 }}
        />
    </Container>
  )
}

export default Custos;