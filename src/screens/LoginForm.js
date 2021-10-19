import React, {Component, useState} from 'react';
import {Spinner, Button, Card, CardSection, Input} from '../common';
import {Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {loginRequest} from '../store/actions/actions';
const _EMAIL = 'temp-mail@domain.com';
const _PASSWORD = '12345678';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const onButtonPress = () => {
    setLoading(true);
    if (email === _EMAIL && password === _PASSWORD) {
      //   dispatch(loginRequest({email, password}));
      setEmail('');
      setPassword('');
      setError('');
      console.log('logged in');
    } else {
      setError('Authentication Failed!');
      console.log('wrong combination');
    }
    setTimeout(() => {
      setLoading(false);
    }, [3000]);
    setLoading(false);
  };

  return (
    <Card>
      <CardSection>
        <Input
          placeholder="youremail@email.com"
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
