/* https://github.com/facebook/react-native *
 * @format
 * @flow strict-local */
import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import 'react-native-gesture-handler';

// or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Home</Text>
      <Button
        onPress={() => {
          navigation.navigate('Settings');
        }}
        title="Settings"
      />
    </View>
  );
}
function Notifications({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Notifications</Text>
      <Button
        onPress={() => {
          navigation.navigate('Settings');
        }}
        title="Settings"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}
function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Settings</Text>
    </View>
  );
}
export default function App() {
  return <Navigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
