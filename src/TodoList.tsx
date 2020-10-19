import React, { useContext } from 'react';
import { List, ListItem, Text } from 'native-base';
import { ScrollView } from 'react-native';
import { TodoContext } from './contexts';

const TodoList = () => {
  const todos = useContext(TodoContext);

  return (
    <ScrollView>
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            <Text>{todo.title}</Text>
          </ListItem>
        ))}
      </List>
    </ScrollView>
  );
};

export default TodoList;
