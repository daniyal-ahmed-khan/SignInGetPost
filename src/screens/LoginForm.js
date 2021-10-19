import React, {Component, useState} from 'react';
import {Spinner, Button, Card, CardSection, Input} from '../common';
import {Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {loginRequest} from '../store/actions/actions';
import {NavigationContainer} from '@react-navigation/native';
const _EMAIL = 'temp-mail@domain.com';
const _PASSWORD = '12345678';

const LoginForm = props => {
  const [email, setEmail] = useState('temp-mail@domain.com');
  const [password, setPassword] = useState('12345678');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  _storeData = async (email, password) => {
    try {
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('password', password);
    } catch (error) {
      console.log('error saving');
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
        _storeData(email, password);
        props.navigation.navigate('Home');
      } else {
        setError('Authentication Failed!');
        console.log('wrong combination');
      }
      setLoading(false);
    }, 4000);
  };

  return (
    <Card>
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
  );
};

const styles = StyleSheet.create({
  errorStyle: {
    alignSelf: 'center',
    color: 'red',
    fontSize: 20,
  },
});

export default LoginForm;
