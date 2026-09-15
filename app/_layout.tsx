import { Stack } from "expo-router";
import { PaperProvider } from 'react-native-paper';
import { colors, paperTheme } from "./styles";

export default function RootLayout() {
  return (
    <PaperProvider theme={paperTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="journal"
          options={{
            title: "New entry",
            headerTintColor: colors.text,
            headerStyle: { backgroundColor: colors.background },
            headerShadowVisible: false,
          }}
        />
      </Stack>
    </PaperProvider>
  );
}