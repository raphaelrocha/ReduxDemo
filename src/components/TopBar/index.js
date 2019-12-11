import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

const TopBar = ({modules}) => (
  <View>
    <Text>Top bar</Text>
  </View>
);

export default connect(state => ({modules: state.course}))(TopBar);
