import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5A9BD4',
  },
  box: {
    width: '80%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B8D2EC',
  },
  text: {
    fontSize: 24,
    color: '#131313',
  },
});

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <View style={styles.box}>
          <Text style={styles.text} ellipsizeMode={'tail'} numberOfLines={2}>
            Main screen
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
