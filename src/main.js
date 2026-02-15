import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import './js/render-functions';

const formEl = document.querySelector('form.form');
const inpSearch = formEl.elements['search-text'];
formEl.addEventListener('submit', e => {
  e.preventDefault();
  const query = inpSearch.value.trim();
  if (query === '') {
    iziToast.show({
      message: 'Please enter a search query!',
      backgroundColor: `rgba(148, 128, 14, 0.8)`,
      messageColor: `#ffffff`,
      position: `topRight`,
      maxWidth: `432px`,
    });
    clearGallery();
    inpSearch.value = '';
    return;
  }
  showLoader();
  clearGallery();
  getImagesByQuery(query)
    .then(createGallery)
    .catch(error =>
      iziToast.error({
        message: `Error ${error.message}`,
        position: 'topright',
      })
    )
    .finally(hideLoader);
  inpSearch.value = '';
});
