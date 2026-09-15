import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { commonStyles, spacing, colors } from "../styles";

export default function Index() {
  return (
    <View style={commonStyles.screen}>
      <Text style={styles.title}>Your daily check-in.</Text>
      <Link href="/journal" style={styles.button}>
        <Text style={styles.buttonLabel}>Create new journal entry</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    ...commonStyles.title,
    marginTop: spacing.sm,
    maxWidth: 340,
  },
  text: {
    color: "#fff",
  },
  button: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: spacing.lg,
    minHeight: 56,
    paddingHorizontal: spacing.md,
  },
  buttonLabel: {
    color: colors.primaryDark,
    fontSize: 15,
    fontWeight: "700",
  },
});
