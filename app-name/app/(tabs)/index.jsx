import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import icedCoffeeImmage from "@/assets/images/iced-coffee.png"

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={icedCoffeeImmage}
      resizeMode='cover'
      style={styles.image}
      >
        
      <Text style={styles.title}>Coffee Shop</Text>
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'white',
    textAlign:'center',
    backgroundColor:'rgba(0,0,0,0.6)',
  },
  image:{
    width:'100%',
    height:'100%',
    resizeMode:'cover',
    flex:1,
    justifyContent:'center',
  }
})