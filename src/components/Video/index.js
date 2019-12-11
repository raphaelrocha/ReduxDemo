import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

const Video = ({activeModule, activeLesson}) => (
  <View>
    <Text>Módulo {activeModule.title}</Text>
    <Text>Aula {activeLesson.title}</Text>
  </View>
);

export default connect(state => ({
  activeLesson: state.course.activeLesson,
  activeModule: state.course.activeModule,
}))(Video);
