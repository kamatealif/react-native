import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import { Link } from "expo-router";

import icedCoffeeImmage from "@/assets/images/iced-coffee.png";

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffeeImmage}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.title}>Coffee Shop</Text>

        {/* button */}
        <View style={styles.navigation}>
          <Link href="/explore" style={{ marginHorizontal: "auto" }} asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Explore</Text>
            </Pressable>
          </Link>
          {/* contact link */}
          <Link href="/contact" style={{ marginHorizontal: "auto" }} asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Contact</Text>
            </Pressable>
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    flex: 1,
    justifyContent: "center",
  },
  navigation:{
    flexDirection:'column',
  },
  link: {
    color: "chocolate",
    textAlign: "center",
    fontWeight: "bold",
    textDecorationLine: "underline",
    padding: 4,
    backgroundColor: "black",
    borderRadius: 4,
    width: "50%",
    alignSelf: "center",
  },
  button: {
    borderRadius: 20,
    backgroundColor: "black",
    padding: 10,
    justifyContent: "center",
    width: "50%",
    marginBottom:10,
  },
  buttonText: {
    color: "tomato",
    textAlign: "center",
    fontWeight: "bold",
  },
});
