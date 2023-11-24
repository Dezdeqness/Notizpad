import React from 'react';
import {Platform, SafeAreaView, StatusBar, View } from 'react-native';
import { RootNavigator } from './navigation/RootNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {

  if (Platform.OS == 'ios') {
    return <View style={{
      backgroundColor: '#6871EE',
      flex: 1
    }}>
      <SafeAreaView style={{flex: 1}}>
        <RootNavigator/>
      </SafeAreaView>
    </View>
  } else {
    StatusBar.setBackgroundColor('#6871EE', true)
    return <SafeAreaProvider>
      <RootNavigator/>
    </SafeAreaProvider>
  }
}

export default App;
