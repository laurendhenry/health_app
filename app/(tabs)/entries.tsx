import { db, SHARED_TEST_GROUP } from "@/firebaseConfig"; // <-- Added Firestore db config
import { Link, useFocusEffect } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useCallback, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from "react-native";
import { colors, commonStyles, spacing } from '../styles';

interface FirestoreEntry {
  id: string;
  mood: string;
  note: string;
  createdAt: Date;
}

//https://reactnative.dev/docs/flatlist#horizontal
export default function Index() {
  const [entries, setEntries] = useState<FirestoreEntry[]>([]);

  const loadEntries = async (): Promise<void> => {
    try {
      // If you are using the shared test filter across devices, use query/where:
      const q = query(
        collection(db, "healthapp"),
        where("testGroup", "==", SHARED_TEST_GROUP)
      );

      const querySnapshot = await getDocs(q);
      console.log("Raw Firestore documents found:", querySnapshot.size);
      const savedEntries = querySnapshot.docs
        .map((document) => {
          const data = document.data();
          return {
            id: document.id,
            mood: data.mood,
            note: data.note,
          createdAt: data.createdAt?.toDate ? data.createdAt.toDate() : new Date(),
          };
        })
        .sort(
          (firstEntry, secondEntry) =>
            secondEntry.createdAt.getTime() - firstEntry.createdAt.getTime(),
        ) as FirestoreEntry[];

      console.log('Loaded Firestore entries count:', savedEntries.length);
      setEntries(savedEntries);
    } catch (error) {
      console.error('Could not load entries from Firestore:', error);
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
      style={commonStyles.screen}
      data={entries}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.content}
      ListEmptyComponent={
        <Link href="/journal" style={styles.button}>
          Create new journal entry
        </Link>
      }
      renderItem={({ item }) => (
        <View style={[commonStyles.card, styles.entryCard]}>
          <Text style={styles.mood}>{item.mood}</Text>

          <Text style={styles.date}>{item.createdAt.toLocaleString()}</Text>

          <Text style={styles.note}>{item.note}</Text>
        </View>
      )}
    />
  );
}
//https://reactnative.dev/docs/flatlist#horizontal

//copilot agent
const styles = StyleSheet.create({
  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl,
    gap: spacing.md,
  },
  emptyContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  emptyState: {
    alignItems: "center",
    paddingHorizontal: spacing.md,
  },
  emptyTitle: {
    color: colors.text,
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 14,
    marginTop: spacing.lg,
    minHeight: 54,
    justifyContent: "center",
    paddingHorizontal: spacing.lg,
  },
  buttonLabel: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "700",
  },
  entryCard: {
    gap: spacing.sm,
  },
  entryHeader: {
    gap: spacing.xs,
  },
  mood: {
    color: colors.primaryDark,
    fontSize: 20,
    fontWeight: "800",
  },
  date: {
    color: colors.textMuted,
    fontSize: 13,
  },
  note: {
    color: colors.text,
    fontSize: 16,
    lineHeight: 24,
  },
});