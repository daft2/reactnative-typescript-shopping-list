import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import uuid from 'uuid-random';
import Header from './components/Header';
import ListItem from './components/ListItem';

// Alert.alert('No item', 'Please enter an item.', [{text: 'Ok'}]);

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), title: 'Milk'},
    {id: uuid(), title: 'Bread'},
    {id: uuid(), title: 'Juice'},
    {id: uuid(), title: 'Eggs'},
  ]);

  const deleteItem = (id: string) => {
    setItems((previousItems) => {
      return previousItems.filter((item) => item.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
