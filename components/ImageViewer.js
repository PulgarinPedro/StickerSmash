import { StyleSheet, Image } from 'react-native';


const PlaceholderImage = require('./assets/imagenes/Holamundo.jpg');
export default function ImageViewer({ placeholderImageSource}) {

    return (
       <Image source={placeholderImageSource} style={styles.image}/>
    );
}

const styles = StyleSheet.create({

    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});