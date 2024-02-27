import { nanoid } from 'nanoid';

const menuItems = [
  {
    id: nanoid(),
    to: '/',
    text: 'Home page',
    private: false,
  },
  {
    id: nanoid(),
    to: '/phonebook',
    text: 'My phonebook',
    private: true,
  },
];

export default menuItems;
