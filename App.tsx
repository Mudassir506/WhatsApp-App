import React from 'react';
import Home from './Navigation/Home';
import Update from './Navigation/Update';
import Calls from './Navigation/Calls';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Harry from './Navigation/Harry';
import Stark from './Navigation/Stark';
import Willson from './Navigation/Willson';
import Noah from './Navigation/Noah';
import Liam from './Navigation/Liam';
import Oliver from './Navigation/Oliver';
import Elijah from './Navigation/Elijah';
import James from './Navigation/James';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Communities from './Navigation/Communities';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Stack.Screen name="Harry" component={Harry} options={{ headerShown: false }} />
      <Stack.Screen name="Stark" component={Stark} options={{ headerShown: false }} />
      <Stack.Screen name="Willson" component={Willson} options={{ headerShown: false }} />
      <Stack.Screen name="Noah" component={Noah} options={{ headerShown: false }} />
      <Stack.Screen name="Liam" component={Liam} options={{ headerShown: false }} />
      <Stack.Screen name="Oliver" component={Oliver} options={{ headerShown: false }} />
      <Stack.Screen name="Elijah" component={Elijah} options={{ headerShown: false }} />
      <Stack.Screen name="James" component={James} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Chat">
        <Tab.Screen
          name="Chat"
          component={HomeStackNavigator}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="chat" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Update"
          component={Update}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcon name="update" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Communities"
          component={Communities}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="groups" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Calls"
          component={Calls}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FeatherIcon name="phone" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
