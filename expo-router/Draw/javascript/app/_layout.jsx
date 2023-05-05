import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <Drawer>
        <Drawer.Screen
            name="index"
            options={{
                drawerLabel: "Home",
                title: "overview",
            }}
        />
        <Drawer.Screen
            name="TelaA"
            options={{
                drawerLabel: "TelaA",
                title: "overview",
            }}
        />
        <Drawer.Screen
            name="TelaB"
            options={{
                drawerLabel: "TelaB",
                title: "overview",
            }}
        />
        <Drawer.Screen
            name="TelaC"
            options={{
                drawerLabel: "TelaC",
                title: "overview",
            }}
        />
    </Drawer>
  )
}