import axios from 'axios';

const pixabayInstance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '54647501-b4d3f23177e1e060f98944b22',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  },
});

export function getImagesByQuery(query = '') {
  return pixabayInstance
    .get('', {
      params: {
        q: query,
      },
    })
    .then(res => res.data.hits)
    .catch(error => console.log(error.message));
}
