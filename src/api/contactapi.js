import axios from 'axios';

export const fetchAllContact = async () => {
  const { data } = await axios.get('http://localhost:4000/contact/getall');
  return data;
};

export const postContact = async (values) => {
  const AddContact = await axios.post('http://localhost:4000/contact/addcontact', { ...values });
};

export const updateContact = async (id, values) => {
  const updateContact = await axios.put(`http://localhost:4000/contact/addcontact/update/${id}`, values);
};

export const deleteContact = async (id) => {
  const deleteContact = await axios.delete(`http://localhost:4000/contact/delete/${id}`);
};

export const getUniqueContact = async (id) => {
  const { data } = await axios.get(`http://localhost:4000/contact/getunique/${id}`);
  return data;
};
