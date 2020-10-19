import React, { useEffect, useState } from 'react';
import { AppLoading } from 'expo';
import { Container } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import AppHeader from './src/AppHeader';
import TodoList from './src/TodoList';
import NewTodoModal from './src/NewTodoModal';

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

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
    return <AppLoading />
  }

  return (
    <Container>
      <AppHeader
        onAddItemPress={() => setShowAddModal(true)}
      />

      <NewTodoModal
        modalOpen={showAddModal}
        onModalClose={() => setShowAddModal(false)}
      />

      <TodoList />
    </Container>
  );
};

export default App;
