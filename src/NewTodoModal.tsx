import { Button, Content, Form, Input, Item, Text, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Dimensions, KeyboardAvoidingView, Modal, StyleSheet, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 20,
    width: Dimensions.get('screen').width - (Dimensions.get('screen').width * 0.1),
    maxHeight: Dimensions.get('screen').height - (Dimensions.get('screen').height * 0.4),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
});

interface NewTodoModalProps {
  modalOpen: boolean;
  onModalClose: () => any;
}

const NewTodoModal = (props: NewTodoModalProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalOpen}
    >
      <KeyboardAvoidingView style={styles.containerView}>
        <View style={styles.modalView}>
          <Text>Add a Todo</Text>

          <Form>
            <Item>
              <Input placeholder="Title" />
            </Item>
          </Form>

          <Button>
            <Text>Save</Text>
          </Button>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default NewTodoModal;
