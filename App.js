import { Image, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const PlaceholderImage = require('./assets/imagenes/HOLA.jpg');
export default function App() {
return (
<View style={styles.container}>
  <View style={styles.imageContainer}>
    <Image source={PlaceholderImage} style={styles.image}/>
    </View>
    <StatusBar style="auto"/>
    </View>
);
}
const styles = StyleSheet.create({
container: { 
  flex: 1,
  backgroundColor: 'red',
  alignItems: 'center',
},

imageContainer: {
flex: 1,
paddingTop: 58,  
},

image: {
width: 320,
height: 440,
borderRadius: 18,
},
  
});

