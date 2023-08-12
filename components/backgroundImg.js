import { Image, StyleSheet } from "react-native";

export default function backgroundImg(imagemBase){
      return(
            <Image source={imagemBase} style={styles.img}/>
      );
}
const styles = StyleSheet.create({
      img:{
            borderRadius:20,
            width:350,
            height:100,
          }
})