import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item, deleteItem, editItem}: any) => {
  const [title, setTitle] = useState(item.title);
  const [isEditMode, setIsEditMode] = useState(false);
  const onChange = (textValue: string) => setTitle(textValue);

  return (
    <TouchableOpacity style={styles.item}>
      <View style={styles.view}>
        {isEditMode ? (
          <>
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={title}
              autoFocus
            />
            <Icon
              name="pencil"
              style={{paddingHorizontal: 10}}
              size={20}
              color="#0A2061"
              onPress={() => {
                editItem(item.id, title);
                setIsEditMode(false);
              }}
            />
          </>
        ) : (
          <>
            <Text style={styles.text}>{item.title}</Text>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="pencil"
                style={{paddingHorizontal: 10}}
                size={20}
                color="#0A2061"
                onPress={() => setIsEditMode(true)}
              />
              <Icon
                name="remove"
                style={{paddingHorizontal: 10}}
                size={20}
                color="firebrick"
                onPress={() => deleteItem(item.id)}
              />
            </View>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
  input: {
    height: 40,
    fontSize: 18,
  },
});
export default ListItem;
