import React from "react";
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type ButtonProps = {
  onPress: () => void;
};

export function Button({ onPress }: ButtonProps){
  return(
    <TouchableOpacity
      style={styles.button}
      activeOpacity={.7}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
});