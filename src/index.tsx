import { Text, View } from "react-native";
import { registerRootComponent } from 'expo'

function App() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Hello world</Text>
        </View>
    );
}

export default registerRootComponent(App)