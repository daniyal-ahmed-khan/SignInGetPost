import React, {Component, useState} from 'react';
import {Spinner, Button, Card, CardSection, Input} from '../common';
import {Text, StyleSheet, Dimensions, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {loginRequest} from '../store/actions/actions';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
const _EMAIL = 'temp-mail@domain.com';
const _PASSWORD = '12345678';

const LoginForm = props => {
  const [email, setEmail] = useState('temp-mail@domain.com');
  const [password, setPassword] = useState('12345678');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const _storeData = async email => {
    try {
      await AsyncStorage.setItem('email', JSON.stringify(email));
      console.log('done');
    } catch (error) {
      console.log(error);
    }
  };

  const onButtonPress = () => {
    setLoading(true);
    setTimeout(() => {
      if (email === _EMAIL && password === _PASSWORD) {
        dispatch(loginRequest(email, password));
        setEmail('');
        setPassword('');
        setError('');
        _storeData(email);
        props.navigation.navigate('Home');
      } else {
        setError('Authentication Failed!');
        console.log('wrong combination');
      }
      setLoading(false);
    }, 4000);
  };

  return (
    <View style={styles?.container}>
      <Card>
        <CardSection>
          <Text style={styles?.heading}>Dummy Login App</Text>
        </CardSection>
        <CardSection>
          <Input
            placeholder="email@domain.com"
            label="Email"
            value={email}
            onChangeText={email => setEmail(email)}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={password}
            onChangeText={password => setPassword(password)}
          />
        </CardSection>

        {error !== '' && <Text style={styles.errorStyle}> {error}</Text>}

        <CardSection>
          {loading ? (
            <Spinner size="large" />
          ) : (
            <Button onPress={() => onButtonPress()}>Log-In</Button>
          )}
        </CardSection>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginHorizontal: Dimensions.get('window').width * 0.02,
  },
  errorStyle: {
    alignSelf: 'center',
    color: 'red',
    fontSize: 20,
  },
  heading: {
    fontWeight: '700',
    fontSize: Dimensions.get('window').width * 0.05,
    fontFamily: 'PatuaOne-Regular',
    marginVertical: Dimensions.get('window').width * 0.02,
  },
});

export default LoginForm;
