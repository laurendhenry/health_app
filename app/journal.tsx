// import { TextInput, type TextInputRef } from "@expo/ui";
import { useRef, useState } from "react";
import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
import Button from '@/app/components/button';
import { router } from "expo-router";
import { MoodEntry, setItem } from "@/utils/AsyncStorage";

const handleSave = async (mood: string, text: string): Promise<void> => {
  
  
  const createdAt = new Date().toString()

  const journalEntry: MoodEntry = {
    id: createdAt, 
    mood: mood, 
    note: text, 
    createdAt: createdAt
  };

  try {
    await setItem(createdAt, journalEntry);

    
    Alert.alert('Saved', 'Your journal entry was saved.');
    router.back();
  } catch (error) {
    console.error(error);
    Alert.alert('Save failed', 'Please try again.');
  }

}


//https://react.dev/reference/react/useState
export default function AboutScreen() {
  // const inputRef = useRef<TextInputRef>(null);
  const [text, onChangeText] = useState('');
  const [mood, setMood] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Daily Journal</Text>
      <View>
        <Text>How are you feeling today?</Text>
        <View style={styles.moods}>
          <Button label = "Great" onClick={() => setMood('Great')}/>
          <Button label = "Good" onClick={() => setMood('Good')}/>
          <Button label = "Neutral" onClick={() => setMood('Nuetral')}/>
          <Button label = "Bad" onClick={() => setMood('Bad')}/>
          <Button label = "Awful" onClick={() => setMood('Awful')}/>
        </View>
      </View>
      <TextInput
        // ref={inputRef}
        placeholder="Elaborate on why you feel this way."
        value={text}
        onChangeText={onChangeText}
        multiline
        numberOfLines={5}

      />
      <Button label = "Save" onClick={() => handleSave(mood, text)}/>
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
  moods: {
    flexDirection: 'row',
    gap: '5',
    alignItems: 'center'
  }
});

