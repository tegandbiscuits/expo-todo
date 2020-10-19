import React from 'react';

const defaultTodos = [
  {
    id: 1,
    title: 'Hello World',
  },
  {
    id: 2,
    title: 'Hey Buddy',
  },
  {
    id: 3,
    title: 'Good job',
  },
];
export const TodoContext = React.createContext(defaultTodos);
