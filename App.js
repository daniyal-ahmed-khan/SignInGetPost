import React, {useEffect, useState} from 'react';
import LoginForm from './src/screens/LoginForm';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import NewPost from './src/screens/NewPost';
import {Provider, useSelector} from 'react-redux';
import store from './src/store/store';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginForm} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="NewPost" component={NewPost} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
