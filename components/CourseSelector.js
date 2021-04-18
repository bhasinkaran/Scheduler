import Course from './Course';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import {hasConflict }from '../utils/course'
const CourseSelector = ({ courses, view }) =>{
        const [selected, setSelected]= useState([])
        const toggle = course => setSelected(selected => (
                selected.includes(course) ? selected.filter(x => x !== course) : [...selected, course]
              ));
return(<View style={styles.courseList}>
        {courses.map(course => 
        <Course course={course} 
                isDisabled={hasConflict(course, selected)}
                isSelected={selected.includes(course)} 
                select={toggle} 
                view={view}
                key={course.id}
        />)}
</View>)
}

const styles = StyleSheet.create({
        courseList: {
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
        },
})
export default CourseSelector;