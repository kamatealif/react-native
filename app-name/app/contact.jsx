import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Card, Title } from "react-native-paper";

const ContactScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Contact Me</Title>
          <TextInput
            label="Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
            mode="outlined"
          />
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            mode="outlined"
            keyboardType="email-address"
          />
          <TextInput
            label="Message"
            value={message}
            onChangeText={setMessage}
            style={styles.input}
            mode="outlined"
            multiline
            numberOfLines={4}
          />
          <Button mode="contained" style={styles.button}>
            Send Message
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "inherit",
  },
  card: {
    padding: 10,
    borderRadius: 10,
    backgroundColor:'rgb(205, 71, 71)',
},
title: {
      color:'tomato',
    textAlign: "center",
    fontSize: 22,
    marginBottom: 10,
  },
  input: {
    marginBottom: 10,
    backgroundColor:'inherit',
    color:'white'
  },
  button: {
    marginTop: 10,
  },
});

export default ContactScreen;
