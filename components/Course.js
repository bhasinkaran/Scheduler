import React from 'react';
import { StyleSheet,SafeAreaView,ScrollView, Text, View, TouchableOpacity } from 'react-native';
const Course = ({course, isDisabled, isSelected, select}) => (
        <TouchableOpacity style={styles[isSelected ? 'courseButtonSelected' : isDisabled ? 'courseButtonDisabled' : 'courseButton']}
        onPress={()  =>select(course)}
        >
          <Text style={styles.courseText}>
            {`CS ${getCourseNumber(course)}\n${course.meets}`}
          </Text>
        </TouchableOpacity>
      );
const getCourseNumber = course => (
course.id.slice(1)
);
const common={
        flex: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        height: 60,
        padding: 10,
        minWidth: 90,
        maxWidth: 90,}
const styles = StyleSheet.create({
        courseText:{
                color: '#fff',
                fontSize: 12,
                textAlign: 'center',
              },
        courseButton: {
               ...common,
                backgroundColor: '#66b0ff',
              },
        courseButtonSelected: {
                ...common,
                 backgroundColor: '#004a99',
               },
               courseButtonDisabled:{
                ...common,
                backgroundColor: '#d3d3d3',
              },

})
export default Course;
