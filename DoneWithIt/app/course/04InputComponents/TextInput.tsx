import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import Screen from "../../screens/Screen";

function InputText() {
  const [firstName, setFirstName] = useState("");

  return (
    <Screen>
      <TextInput
        // secureTextEntry - prop for entering passwords
        maxLength={128}
        placeholder="First name"
        style={styles.input}
        onChangeText={setFirstName}
        value={firstName}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default InputText;
