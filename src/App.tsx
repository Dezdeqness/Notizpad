import React from 'react';
import { Platform, StatusBar, View } from 'react-native';
import { RootNavigator } from './navigation/RootNavigator';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  const rootView = (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );

  if (Platform.OS == 'ios') {
    return (
      <View
        style={{
          backgroundColor: '#6871EE',
          flex: 1,
        }}
      >
        <SafeAreaView style={{ flex: 1 }}>{rootView}</SafeAreaView>
      </View>
    );
  } else {
    StatusBar.setBackgroundColor('#6871EE', true);
    return <SafeAreaProvider>{rootView}</SafeAreaProvider>;
  }
}

export default App;
