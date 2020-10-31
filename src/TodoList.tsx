import React from 'react';
import { List, ListItem, Text } from 'native-base';
import { ScrollView } from 'react-native';

export interface Todo {
  title: string;
}

interface TodoListProps {
  todos: Todo[],
}

const TodoList = (props: TodoListProps) => (
  <ScrollView>
    <List>
      {props.todos.map(({ title }) => (
        <ListItem key={title}>
          <Text>{title}</Text>
        </ListItem>
      ))}
    </List>
  </ScrollView>
);

export default TodoList;
