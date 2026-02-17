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

export async function getImagesByQuery(query = '', per_page = 15, page = 1) {
  const res = await pixabayInstance.get('', {
    params: {
      q: query,
      per_page,
      page,
    },
  });
  return {
    total: res.data.total,
    totalHits: res.data.totalHits,
    hits: res.data.hits,
  };
}
