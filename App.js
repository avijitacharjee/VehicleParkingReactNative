/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Login from './src/Login.js';
import SignUp from './src/SignUp.js';
import Park from './src/Park.js';
import VehicleEntry from './src/VehicleEntry.js'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './src/Components/Dashboard/Dashboard.js';
import Profile from './src/Components/Profile/Profile.js';
import Help from './src/Components/Dashboard/help/Help.js';
import History from './src/Components/History/History.js';
const Stack = createStackNavigator();
class App extends Component {
  componentDidMount(){
    StatusBar.setBarStyle( 'light-content',true);
    StatusBar.setBackgroundColor("#009387");
  }
  render() {
    
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
               />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen
              name="Park"
              component = {Park}
              // options = {{ headerShown: false}}
              headerStyle ={{
                backgroundColor: "RED",
                
              }}
              headerTintColor = '#009387'
              />
              <Stack.Screen
              name="QR"
              component = {VehicleEntry}
              />
              <Stack.Screen
              name="Dashboard"
              component = {Dashboard}
              />
              <Stack.Screen
              name="Profile"
              component = {Profile}
              />
              <Stack.Screen
              name="Help"
              component = {Help}
              />
              <Stack.Screen
              name="History"
              component = {History}
              />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }

};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
