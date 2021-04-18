import React,{ useState,useEffect } from 'react';
import 'react-native-gesture-handler';
import ScheduleScreen from './screens/ScheduleScreen'
import CourseDetailScreen from './screens/CourseDetailScreen'
import CourseEditScreen from './screens/CourseEditScreen'
import RegisterScreen from './screens/RegisterScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserContext from './UserContext';
import firebase from './firebase'
import { Button } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState({ role: 'admin'});
  const [auth, setAuth] = useState();
  useEffect(() => {
    if (auth && auth.uid) {
      const db = firebase.database().ref('users').child(auth.uid);
      const handleData = snap => {
        setUser({uid: auth.uid, ...snap.val()});
      }
      db.on('value', handleData, error => alert(error));
      return () => { db.off('value', handleData); };
    } else {
      setUser(null);
    }
  }, [auth]);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((auth) => {
      setAuth(auth);
    });
  }, []);
  const SignInButton = ({ navigation, user }) => (
    user && user.uid
    ? <Button title="Logout" color="#448aff"
        onPress={() => firebase.auth().signOut()}
      />
    : <Button title="SignIn" color="#448aff"
        onPress={() => navigation.navigate('RegisterScreen')}
      />
  );
  return (
    <UserContext.Provider value={user}>
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="ScheduleScreen"
          component={ScheduleScreen}
          options={({navigation}) => ({ 
            title: "Schedule",
            headerRight: () => (
              <SignInButton navigation={navigation} user={user} />
            ),
          })
        }
          
        />
        <Stack.Screen name="CourseDetailScreen"
            component={CourseDetailScreen}
            options={{ title: 'Course detail'}} 
          />
         <Stack.Screen name="CourseEditScreen"
            component={CourseEditScreen}
            options={{ title: 'Course Editor'}} 
          />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} 
          
          />

      </Stack.Navigator>
    </NavigationContainer>
  </UserContext.Provider>
  );
}
export default App