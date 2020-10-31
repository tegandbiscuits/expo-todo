import {
  Button,
  Form,
  Input,
  Item,
  Text,
  View,
} from 'native-base';
import React, { useState } from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  Modal,
  StyleSheet,
} from 'react-native';
import { Todo } from './TodoList';

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 20,
    width: Dimensions.get('screen').width - (Dimensions.get('screen').width * 0.1),
    maxHeight: Dimensions.get('screen').height - (Dimensions.get('screen').height * 0.4),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

interface NewTodoModalProps {
  modalOpen: boolean;
  onModalClose: (todo: Todo) => any;
}

const NewTodoModal = (props: NewTodoModalProps) => {
  const [todoTitle, setTodoTitle] = useState('');
  const { modalOpen } = props;

  return (
    <Modal
      animationType="slide"
      transparent
      visible={modalOpen}
    >
      <KeyboardAvoidingView style={styles.containerView}>
        <View style={styles.modalView}>
          <Text>Add a Todo</Text>

          <Form>
            <Item>
              <Input
                placeholder="Title"
                value={todoTitle}
                onChangeText={(val) => setTodoTitle(val)}
              />
            </Item>
          </Form>

          <Button onPress={() => props.onModalClose({ title: todoTitle })}>
            <Text>Save</Text>
          </Button>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default NewTodoModal;
