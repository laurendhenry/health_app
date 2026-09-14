// import { TextInput, type TextInputRef } from "@expo/ui";
import { useRef, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Button from '@/app/components/button';


export default function AboutScreen() {
  // const inputRef = useRef<TextInputRef>(null);
  const [text, onChangeText] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Daily Journal</Text>
      <View>
        <Text>How are you feeling today?</Text>
        <Button label = "Great" />
        <Button label = "Good" />
        <Button label = "Nuetral" />
        <Button label = "Bad" />
        <Button label = "Awful" />
      </View>
      <TextInput
        // ref={inputRef}
        placeholder="Elaborate on why you feel this way."
        value={text}
        onChangeText={onChangeText}
        multiline
        numberOfLines={5}
        // autoCapitalize
        // autoComplete
      />
      <Button label = "Save" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
