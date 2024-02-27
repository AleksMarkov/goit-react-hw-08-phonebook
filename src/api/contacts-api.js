// import axios from 'axios';

import instance from './auth-api';

// const contactsInstance = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com/contacts',
// });

export const requestFetchContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const requestAddContacts = async body => {
  const { data } = await instance.post('/contacts', body);
  return data;
};

export const requestDeleteContacts = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
