import { Link, useFocusEffect } from "expo-router";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useState, useCallback } from 'react';
import { MoodEntry, getAllItems } from "@/utils/AsyncStorage";


//https://reactnative.dev/docs/flatlist#horizontal
const DATA = getAllItems();



export default function Index() {
  const [entries, setEntries] = useState<MoodEntry[]>([]);

  const JOURNAL_ENTRIES_KEY = '@moodlog_entries';

  const loadEntries = async (): Promise<void> => {
    
    try {
      const allItems = await getAllItems();
      console.log('Loaded entries:', allItems);
      const savedEntries = Object.values(allItems) as MoodEntry[];
      
      console.log('Loaded entries:', savedEntries);
      console.log('Is array?', Array.isArray(savedEntries));
      console.log('Entry count:', savedEntries.length);

      setEntries(savedEntries);
    } catch (error) {
      console.error('Could not load entries:', error);
      setEntries([]);
    }
  };

  //perplexity: useFocusEffect reloads data whenever user switches back to this tab
  useFocusEffect(
    useCallback(() => {
      loadEntries();
    }, [])
  );

  return (
    <FlatList
      data={entries}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}//{ padding: 16, gap: 12 }
      ListEmptyComponent={
        <Link href="/journal" style={styles.button}>
           Create new journal entry
        </Link>
      }
      renderItem={({ item }) => (
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: 16,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: '600' }}>
            {item.mood}
          </Text>

          <Text style={{ color: '#666', marginTop: 4 }}>
            {new Date(item.createdAt).toLocaleString()}
          </Text>

          <Text style={{ marginTop: 10 }}>
            {item.note}
          </Text>
        </View>
      )}
    />
  );
}
//https://reactnative.dev/docs/flatlist#horizontal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});