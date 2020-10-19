import React from 'react';
import { Button, Header, Icon, Left, Right, Text } from 'native-base';

interface AppHeaderProps {
  onAddItemPress: () => any;
}

const AppHeader = (props: AppHeaderProps) => {
  return (
    <Header>
      <Left>
        <Button transparent>
          <Text>Edit</Text>
        </Button>
      </Left>

      <Right>
        <Button
          transparent
          onPress={() => { props.onAddItemPress() }}
        >
          <Icon name="add" />
        </Button>
      </Right>
    </Header>
  );
};

export default AppHeader;
