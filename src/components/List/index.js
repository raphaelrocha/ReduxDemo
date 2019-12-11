import React from 'react';

import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as CourseActions from '../../store/actions/course';

const List = ({modules, toggleLesson}) => (
  <View>
    <Text>Lista</Text>
    <FlatList
      style={styles.list}
      data={modules}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        let module = item;
        return (
          <View>
            <Text>{module.title}</Text>
            <FlatList
              style={styles.list}
              data={module.lessons}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                let lesson = item;
                return (
                  <TouchableOpacity
                    onPress={() => toggleLesson(module, lesson)}>
                    <Text>{lesson.title}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        );
      }}
    />
  </View>
);

const mapStateToProps = state => ({
  modules: state.course.modules,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CourseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);

const styles = StyleSheet.create({
  List: {
    height: '100%',
    width: '100%',
  },
});
