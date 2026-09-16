import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";
import Button from "../components/button";
import { colors, commonStyles, spacing } from "../styles";

export default function Index() {
  return (
    <ScrollView
      style={commonStyles.content}
      contentContainerStyle={styles.centeredContent}
    >
      <Text style={[commonStyles.heading, styles.centeredHeading]}>
        Your daily check-in.
      </Text>
      <Link href="/journal">
        <Button label="Create a journal entry" />
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  centeredContent: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  centeredHeading: {
    textAlign: "center",
  },
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
