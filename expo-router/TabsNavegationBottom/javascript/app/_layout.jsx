import { Tabs } from "expo-router";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          href: "/",
        }}
      />
      <Tabs.Screen
        name="TelaA"
        options={{
          href: "/TelaA",
        }}
      />
      <Tabs.Screen
        name="TelaB"
        options={{
          href: "/TelaB",
        }}
      />
      <Tabs.Screen
        name="TelaC"
        options={{
          href: "/TelaC",
        }}
      />
    </Tabs>
  );
}