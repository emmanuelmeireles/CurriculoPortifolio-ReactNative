import { Stack } from "expo-router";

export default function RootLayout() {
  return ( 
    <Stack>
      <Stack.Screen name="index" options={{headerTitle: " Emmanuel Meireles Silva"}}/>
      <Stack.Screen name="About" options={{headerTitle: ""}}/>
      <Stack.Screen name="Academics Experiences" options={{headerTitle: ""}}/>
      <Stack.Screen name="Profissional Experience" options={{headerTitle: ""}}/>
      <Stack.Screen name="Projects" options={{headerTitle: ""}}/>
      <Stack.Screen name="PassWord Games"options={{headerTitle: ""}}/> 
    </Stack>
  )
}
