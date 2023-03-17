import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const Input = (props) => {
    return (
        <TextInput
            style={styles.input}
            keyboardType='decimal-pad'
            // Isso aqui indica que a gente quer
            // receber todas as propriedades padrão
            // do componente TextInput no nosso novo
            // componente
            {...props}
        />
    )
};

const styles = StyleSheet.create({
    input:{
        backgroundColor: '#FFF',
        marginBottom:9
    }
});

export default Input;