import React, { useEffect, useState } from 'react';
import { AppLoading } from 'expo';
import { Container } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import AppHeader from './src/AppHeader';
import TodoList, { Todo } from './src/TodoList';
import NewTodoModal from './src/NewTodoModal';

const defaultTodos: Todo[] = [
  {
    title: 'Hello World',
  },
  {
    title: 'Hey Buddy',
  },
  {
    title: 'Good job',
  },
];

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [todos, setTodos] = useState<Todo[]>(defaultTodos);

  useEffect(() => {
    Font.loadAsync({
      // Roboto: require('native-base/Fonts/Roboto.ttf'),
      // Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    }).then(() => {
      setIsReady(true);
    });
  }, []);

  if (!isReady) {
    return <AppLoading />;
  }

  const modalClosed = (newTodo: Todo) => {
    setTodos((prev) => prev.concat(newTodo));
    setShowAddModal(false);
  };

  return (
    <Container>
      <AppHeader
        onAddItemPress={() => setShowAddModal(true)}
      />

      <NewTodoModal
        modalOpen={showAddModal}
        onModalClose={modalClosed}
      />

      <TodoList todos={todos} />
    </Container>
  );
};

export default App;
