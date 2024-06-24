import { ThemeProvider } from "styled-components";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/colors";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: 'home/1',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider theme={colorScheme === "dark" ? Colors.dark : Colors.light}>
      <Stack
        initialRouteName="home/1"
        screenOptions={{
          headerShown: false,
          statusBarColor: Colors[colorScheme ?? "light"].tint,
        }}
      >
        <Stack.Screen
          name="home/[page]"
          initialParams={{ page: 1 }}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="character/[id]"
          initialParams={{ id: 1 }}
          options={{ title: "Character" }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
