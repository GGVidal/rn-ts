import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import Button from '../Atoms/Button';
import InputText from '../Atoms/InputText';
import Text from '../Atoms/TextItem'
export interface IItem {
  item: string;
  quantity: string;
}

interface Props {
  setShoppingList: React.Dispatch<React.SetStateAction<IItem[]>>;
  shoppingList: IItem[];
}
const AddItem: React.FC<Props> = ({shoppingList, setShoppingList}) => {
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const addItem = () => {
    if (!item) {
      Alert.alert('No Item!', 'You need to enter an item');
    } else {
      setShoppingList([
        ...shoppingList,
        {
          item,
          quantity: quantity || '1',
        },
      ]);
      setItem('');
      setQuantity('');
    }
  };
  return (
    <View>
      <Text>Add Shopping Item</Text>
      <View style={styles.form}>
        <InputText
          placeholder="Enter item"
          value={item}
          onChangeText={text => setItem(text)}
        />
        <InputText
          placeholder="Enter quantity"
          keyboardType="numeric"
          value={quantity}
          onChangeText={q => {
            setQuantity(q);
          }}
        />
        <Button color="#eb8634" onPress={addItem}>
          Add Item
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: '700',
  },
  form: {
    marginTop: 30,
  },
});
export default AddItem;
