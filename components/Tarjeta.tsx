import Contador from "@/components/contador";
import { Text, View ,Pressable, StyleSheet } from "react-native";
import react, {useState} from 'react'
import { FlipInEasyX } from "react-native-reanimated";
import { red } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

const [isPressed,setIsPressed] = useState(false)

type TarjetaProps={
    numero:number
}

const Tarjeta = (props:TarjetaProps) => {
    
    const [isPressed, setIsPressed] = useState(false)

    const changeColor = ()=>{
        setIsPressed(prevState => !prevState)
    }

    return (
        <View style={styles.generalBoxStyle}>
            <Pressable style={isPressed ? styles.boxStyleisPressed : styles.boxStyle} onPress={changeColor}>
                <Text style={styles.cardTextStyle}>Tarjeta {props.numero}</Text>
            </Pressable>
        </View>
      );
}

export default Tarjeta

const styles = StyleSheet.create({
    generalBoxStyle: {
      flexDirection:'column',
      alignItems:'center',
  
      },
    boxStyle: {
      paddingHorizontal:100,
      paddingVertical:70,
      backgroundColor: '#CD5C5C',
      alignItems:'center',
      marginBottom:'5%',
      },
    boxStyleisPressed: {
      paddingHorizontal:100,
      paddingVertical:70,
      backgroundColor: 'black',
      alignItems:'center',
      marginBottom:'5%',
    },
    cardTextStyle:{
      color: 'white',
      fontSize: 30,
      fontFamily: 'arial',
      
    }
  })