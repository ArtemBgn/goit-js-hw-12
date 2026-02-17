import axios from 'axios';

const pixabayInstance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '54647501-b4d3f23177e1e060f98944b22',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
  },
});

export async function getImagesByQuery(query = '', page = 1) {
  const res = await pixabayInstance.get('', {
    params: {
      q: query,
      page,
    },
  });
  return {
    hits: res.data.hits,
    totalHits: res.data.totalHits,
  };
}
