import Contador from "@/components/contador";
import { Text, View ,Pressable, StyleSheet } from "react-native";
import react, {useState} from 'react'
import { FlipInEasyX } from "react-native-reanimated";
import { red } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

export default function Index() {

  const [isPressed,setIsPressed] = useState([false,false,false])

  const changeColor = (index:number)=>{
      setIsPressed(prevState => {
        const newState = [...prevState]
        newState[index] = !newState[index]
        return newState 
      })
  }

  return (
    <View style={styles.general}>
      <View style={styles.generalBoxStyle}>
        <Pressable style={isPressed[0] ? styles.boxStyleisPressed : styles.boxStyle} onPress={() => changeColor(0)}>
          <Text style={styles.cardTextStyle}>Tarjeta 1</Text>
        </Pressable>
        <Pressable style={isPressed[1] ? styles.boxStyleisPressed : styles.boxStyle} onPress={() => changeColor(1)}>
          <Text style={styles.cardTextStyle}>Tarjeta 2</Text>
        </Pressable>
        <Pressable style={isPressed[2] ? styles.boxStyleisPressed : styles.boxStyle} onPress={() => changeColor(2)}>
          <Text style={styles.cardTextStyle}>Tarjeta 3</Text>
        </Pressable>
    </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  general: {
    flex: 1, // Ocupa toda la pantalla
    justifyContent: 'center', // Centra verticalmente
    alignItems: 'center', // Centra horizontalmente
    backgroundColor: '#FFA07A', // Color de fondo opcional
  },
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