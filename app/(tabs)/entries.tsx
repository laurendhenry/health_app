import { MoodEntry, getItem } from "@/utils/AsyncStorage";
import { Link, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { colors, commonStyles, spacing } from "../styles";

const JOURNAL_ENTRIES_KEY = "@moodlog_entries";

//https://reactnative.dev/docs/flatlist#horizontal
export default function Index() {
  const [entries, setEntries] = useState<MoodEntry[]>([]);
  const loadEntries = async (): Promise<void> => {
    try {
      const storedValue = await getItem(JOURNAL_ENTRIES_KEY);
      const savedEntries: MoodEntry[] = Array.isArray(storedValue)
        ? (storedValue as MoodEntry[])
        : [];

      setEntries(savedEntries);
    } catch (error) {
      console.error("Could not load entries:", error);
      setEntries([]);
    }
  };

  //perplexity: useFocusEffect reloads data whenever user switches back to this tab
  useFocusEffect(
    useCallback(() => {
      loadEntries();
    }, []),
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

          <Text style={styles.date}>
            {new Date(item.createdAt).toLocaleString()}
          </Text>

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
