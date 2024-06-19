import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

const App = () => {


  return (
    //dyrhnf
    <View style={styles.container}>
      <Button title="Click Me" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
