import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Imag from './components/backgroundImg';



export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.hello}>Hello World</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  hello:{
    color:'white',
    backgroundColor:'rgba(18,97,169,1)'
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
