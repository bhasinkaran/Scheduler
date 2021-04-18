import React,{ useState,useEffect } from 'react';
import 'react-native-gesture-handler';
import ScheduleScreen from './screens/ScheduleScreen'
import CourseDetailScreen from './screens/CourseDetailScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="ScheduleScreen"
        component={ScheduleScreen}
        options={{ title: 'Schedule'}}
      />
      <Stack.Screen name="CourseDetailScreen"
          component={CourseDetailScreen}
          options={{ title: 'Course detail'}} 
        />
      
    </Stack.Navigator>
  </NavigationContainer>
  );
}
export default App