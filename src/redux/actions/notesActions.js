import axios from 'axios';

export const listNotes = () => (dispatch, getState) => {
  axios.get('/list')
    .then(console.log)
    .then(console.log);
};