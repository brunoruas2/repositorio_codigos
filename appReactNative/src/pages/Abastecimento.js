import React from 'react';
import { FlatList } from 'react-native';
import { List, Text, FAB } from 'react-native-paper';

import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';

import { useNavigation } from '@react-navigation/native';

const Abastecimento = () => {

  const navigation = useNavigation();

  return (
    <Container>
      <Header
        title={'Abastecimento'}
        goBack={() => navigation.goBack()}
      />
      <Body>
        <Text>Aqui vai ficar o formulário de abastecimento!</Text>
      </Body>
    </Container>
  )
}

export default Abastecimento;