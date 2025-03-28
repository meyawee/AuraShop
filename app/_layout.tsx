// Import your global CSS file
import "../global.css"
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useEffect } from "react"
import { Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useColorScheme, StatusBar } from 'react-native'
import { View } from "@/components/Themed"


export default function RootLayout() { 

  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  })

  // Apply the fonts to the app
  useEffect(() => {
    if (error) throw error;
  }, [fontsLoaded, error])

  if (!fontsLoaded) return null
  if(!fontsLoaded && !error) return null

  return <RootLayoutNav />
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  return(
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <View className="h-screen">
        <StatusBar className={colorScheme === 'dark' ? 'bg-black text-white': 'bg-white text-black'} />
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name='(auth)' options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </View>
    </ThemeProvider>
  )
}