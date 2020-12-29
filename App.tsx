import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import uuid from 'uuid-random';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

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

  const addItem = (title: string) => {
    let duplicate = false;
    items.map((item) => {
      if (title === item.title) {
        duplicate = true;
      }
    });
    if (!title) {
      Alert.alert('No item', 'Please enter an item.', [{text: 'Ok'}]);
    } else if (duplicate) {
      Alert.alert('Duplicate item', 'Please enter another an item.', [
        {text: 'Ok'},
      ]);
    } else {
      setItems((prevItems) => {
        return [{id: uuid(), title}, ...prevItems];
      });
    }
  };

  const editItem = (id: string, title: string) => {
    items.map((prevItem) => {
      if (prevItem.id === id) {
        if (!title) {
          Alert.alert('Cannot be empty', 'Please enter an item.', [
            {text: 'Ok'},
          ]);
        } else {
          prevItem.title = title;
        }
      }
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} editItem={editItem} />
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
