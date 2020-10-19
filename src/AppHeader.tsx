import React from 'react';
import { Button, Header, Icon, Left, Right, Text } from 'native-base';

const AppHeader = () => {
  return (
    <Header>
      <Left>
        <Button transparent>
          <Text>Edit</Text>
        </Button>
      </Left>

      <Right>
        <Button transparent>
          <Icon name="add" />
        </Button>
      </Right>
    </Header>
  );
};

export default AppHeader;
