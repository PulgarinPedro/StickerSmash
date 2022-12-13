import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import ImageViewer from './components/imageViewer';
import Button from './components/Boton';

const PlaceholderImage = require('./assets/imagenes/HOLA.jpg');

export default function App() {
return (
<View style={styles.container}>
  <View style={styles.imageContainer}>
    <ImageViewer placeholderImageSource={PlaceholderImage} />
    </View>
    <View style={styles.footerContainer}>
    <Button theme="primary" label="Choose a photo" />
    <Button label="Use this photo" />
      </View>
    <StatusBar style="auto"/>
    </View>
);
}
const styles = StyleSheet.create({
container: { 
  flex: 1,
  backgroundColor: 'black',
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

footerContainer: {
  flex: 1 / 3,
  alignItems: 'center',
},

  
});

