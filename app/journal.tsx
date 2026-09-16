// import { TextInput, type TextInputRef } from "@expo/ui";
import Button from '@/app/components/button';
import { db, SHARED_TEST_GROUP } from "@/firebaseConfig";
import { router } from "expo-router";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { colors, commonStyles, spacing } from "./styles";


const JOURNAL_ENTRIES_KEY = '@moodlog_entries';


const handleSave = async (mood: string, text: string): Promise<void> => {
  try {
    await addDoc(collection(db, "healthapp"), {
      mood: mood,
      note: text,
      testGroup: SHARED_TEST_GROUP,
      createdAt: new Date(),
    });

    Alert.alert('Saved', 'Your journal entry was saved.');
    router.replace('/entries');
  } catch (error) {
    console.error("Error saving journal entry:", error);
    Alert.alert('Save failed', 'Please try again.');
  }
};

//https://react.dev/reference/react/useState
export default function AboutScreen() {
  // const inputRef = useRef<TextInputRef>(null);
  const [text, onChangeText] = useState('');
  const [mood, setMood] = useState('');
  return (
    <ScrollView style={commonStyles.screen} contentContainerStyle={styles.content}>
      <Text style={commonStyles.title}>Daily Journal</Text>
      <View style={styles.section}>
        <Text>How are you feeling today?</Text>
        <View style={styles.moods}>
          {['Great', 'Good', 'Neutral', 'Bad', 'Awful'].map((option) => (
            <Button
              key={option}
              label={option}
              selected={mood === option}
              //containerStyle={styles.moodButton}
              onClick={() => setMood(option)}
            />
          ))}
        </View>
      </View>
      <TextInput
        // ref={inputRef}
        placeholder="Elaborate on why you feel this way."
        style={styles.input}
        value={text}
        onChangeText={onChangeText}
        multiline
      />
      <Button label = "Save" onClick={() => handleSave(mood, text)}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    ...commonStyles.content,
    paddingBottom: spacing.xxl,
  },
  intro: {
    marginTop: spacing.sm,
  },
  section: {
    marginTop: spacing.xl,
  },
  moods: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginTop: spacing.md,
  },
  moodButton: {
    flexBasis: '28%',
  },
  input: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 16,
    borderWidth: 1,
    color: colors.text,
    fontSize: 16,
    lineHeight: 24,
    marginTop: spacing.xl,
    minHeight: 152,
    padding: spacing.md,
  },
  saveButton: {
    flexBasis: '100%',
    height: 56,
    marginTop: spacing.lg,
  }
});


