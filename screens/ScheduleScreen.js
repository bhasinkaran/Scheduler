import React ,{ useState,useEffect, useContext } from 'react';
import { StyleSheet,SafeAreaView,ScrollView, Text, View, TouchableOpacity } from 'react-native';
import CourseList from '../components/CourseList'
import CourseEditScreen from './CourseEditScreen'
import UserContext from '../UserContext';
import firebase from '../firebase'
import "firebase/database";

const Banner = ({title}) => (
  <Text style={styles.bannerStyle}>{title|| '[loading...]'}</Text>
);
const url = 'https://courses.cs.northwestern.edu/394/data/cs-courses.php'

const ScheduleScreen = ({navigation}) => {
  const [schedule, setSchedule] = useState({ title: '', courses: [] });
  const fixCourses = json => ({
    ...json,
    courses: Object.values(json.courses)
  });
  useEffect(() => {
    const db = firebase.database().ref();
    const handleData = snap => {
      if (snap.val()) setSchedule(fixCourses(snap.val()));
    }
    db.on('value', handleData, error => alert(error));
    return () => { db.off('value', handleData); };
  }, []);
  // useEffect(()=>{
  //   const fetchSchedule = async () => {
  //     const response = await fetch(url);
  //     if (!response.ok) throw response;
  //     const json = await response.json();
  //     setSchedule(json);
  //   };
  //   fetchSchedule()
  // }, [])
  const user=useContext(UserContext);
  const canEdit=user&&user.role=='admin'
  const view = (course) => {
        navigation.navigate(canEdit ? 'CourseEditScreen' : 'CourseDetailScreen', { course });
      };
  return (
    <SafeAreaView style={styles.container}>
       <Banner title={schedule.title} />
      <CourseList courses={schedule.courses}  view={view} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerStyle: {
    color: '#888',
    fontSize: 32,
  }, 
});

export default ScheduleScreen;