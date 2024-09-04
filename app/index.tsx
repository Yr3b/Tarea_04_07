import Contador from "@/components/contador";
import { Text, View ,Pressable, StyleSheet } from "react-native";
import react, {useState} from 'react'
import Tarjeta from "@/components/Tarjeta";

export default function Index() {

  return (
    <View style={styles.general}>
      <Tarjeta numero={1}/> 
      <Tarjeta numero={2}/> 
      <Tarjeta numero={3}/> 
    </View>
  );
}

const styles = StyleSheet.create({
  general: {
    flex: 1, // Ocupa toda la pantalla
    justifyContent: 'center', // Centra verticalmente
    alignItems: 'center', // Centra horizontalmente
    backgroundColor: '#FFA07A', // Color de fondo opcional
  }
})