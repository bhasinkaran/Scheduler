
import CourseSelector from  './CourseSelector'
import TermSelector from './TermSelector'
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, View, TouchableOpacity } from 'react-native';
const CourseList = ({ courses, view }) => {
        const [selectedTerm, setSelectedTerm] = useState('Fall');
        const termMap = { F: 'Fall', W: 'Winter', S: 'Spring' };
        const getCourseTerm = course => (
                termMap[course.id.charAt(0)]
        );
        const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));
        
        const terms = Object.values(termMap);
        return (
        <ScrollView>
                <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
                <CourseSelector courses={termCourses} view={view}/>
        </ScrollView>)
};

export default CourseList;

