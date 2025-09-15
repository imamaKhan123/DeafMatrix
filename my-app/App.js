import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import './App.css';
import Courses from './pages/courses';
import CoursesPage from './pages/CoursesPage';
import Songs from './pages/Songs';
import Films from './pages/Films';
import Home from './pages/Home';
import Blog from './pages/Blog';
import DisplayVideo from './pages/DisplayVideo';
import Discover from './pages/Discover';
import Events from './pages/Events';
import SplashScreen from './components/SplashScreen';

// Create Stack & Tabs
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Tabs view for main navigation
const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: '#007bff',
      tabBarInactiveTintColor: 'gray',
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Songs') {
          iconName = focused ? 'musical-notes' : 'musical-notes-outline';
        } else if (route.name === 'Films') {
          iconName = focused ? 'film' : 'film-outline';
        } else if (route.name === 'Discover') {
          iconName = focused ? 'search' : 'search-outline';
        } else if (route.name === 'Events') {
          iconName = focused ? 'calendar' : 'calendar-outline';
        }

        // Return the icon component
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Songs" component={Songs} />
    <Tab.Screen name="Films" component={Films} />
    <Tab.Screen name="Discover" component={Discover} />
    <Tab.Screen name="Events" component={Events} />
  </Tab.Navigator>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Tabs as the main screen */}
        <Stack.Screen name="MainTabs" component={MainTabs} />
        {/* Other stack screens */}
        <Stack.Screen name="CourseDetails" component={Courses} />
        <Stack.Screen name="CoursesPage" component={CoursesPage} />
        <Stack.Screen name="Blog" component={Blog} />
        <Stack.Screen name="DisplayVideo" component={DisplayVideo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
