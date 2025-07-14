import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;