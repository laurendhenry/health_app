import { Tabs } from "expo-router";
import { colors } from "../styles";

export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
      }}>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="entries" options={{ title: "Journal Entries" }} />
    </Tabs>
  );
}