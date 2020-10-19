import React, { useEffect, useState } from 'react';
import { AppLoading } from 'expo';
import { Container } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import AppHeader from './src/AppHeader';

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
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
      <AppHeader />
    </Container>
  );
};

export default App;
