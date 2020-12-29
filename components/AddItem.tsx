import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addItem}: any) => {
  const [title, setTitle] = useState('');

  const onChange = (textValue: string) => setTitle(textValue);

  return (
    <View>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={onChange}
        value={title}
      />
      <TouchableOpacity
        style={styles.btnAdd}
        onPress={() => {
          addItem(title);
          setTitle('');
        }}>
        <Text style={styles.textBtn}>
          <Icon name="plus" size={20} />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btnAdd: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  textBtn: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});
export default AddItem;
