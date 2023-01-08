import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends Component {
  render(){  
  return (
    <View style={styles.area}>
      <Text style={[styles.TextoPrincipal, styles.AlinhaTexto]}>Olá 1</Text>
      <Text style={styles.AlinhaTexto}>Olá 2</Text>
      <Text>Olá 3</Text>
      <Text style={styles.TextoPrincipal}>Olá 4</Text>
    </View>
  );
}
}

const styles = StyleSheet.create({
  area:{
    marginTop:200
  },
  TextoPrincipal:{
    fontSize:25,
    color:'blue'
  },
  AlinhaTexto:{
    textAlign:'center'
  }
})

export default App;

