import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//TODO: change title type to String if already know how to do it
const Header = ({title}: any) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'Shopping List',
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkblue',
  },
  headerText: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
  },
});
export default Header;
