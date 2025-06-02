import { Tabs } from "expo-router";

export default function TabLayout() {
  return ( 
    <Tabs>
      <Tabs.Screen name="index" options={{headerTitle: "Emmanuel Meireles Silva"}}/>
      <Tabs.Screen name="About" options={{headerTitle: ""}}/>
      <Tabs.Screen name="Academics Experiences" options={{headerTitle: ""}}/>
      <Tabs.Screen name="Profissional Experience" options={{headerTitle: ""}}/>
      <Tabs.Screen name="Projects" options={{headerTitle: ""}}/>
      <Tabs.Screen name="Password Games"options={{headerTitle: ""}}/> 
    </Tabs>
  )
}
