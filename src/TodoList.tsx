import React from 'react';
import { List, ListItem, Text } from 'native-base';
import { ScrollView } from 'react-native';

export interface Todo {
  title: string;
}

interface TodoListProps {
  todos: Todo[],
}

const TodoList = (props: TodoListProps) => {
  return (
    <ScrollView>
      <List>
        {props.todos.map((todo) => (
          <ListItem key={todo.title}>
            <Text>{todo.title}</Text>
          </ListItem>
        ))}
      </List>
    </ScrollView>
  );
};

export default TodoList;
