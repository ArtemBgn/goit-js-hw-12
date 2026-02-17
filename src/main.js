import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  loadMoreBtn,
  autoScroll,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form-search');
const inpSearch = formEl.elements['search-text'];

const store = {
  perPage: 15,
  page: 1,
  totalPages: 1,
  query: '',
  actionIsLastPage() {
    if (this.page < this.totalPages) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      iziToast.show({
        message: 'We`re sorry, but you`ve reached the end of search results.',
        backgroundColor: `rgba(148, 128, 14, 0.8)`,
        messageColor: `#ffffff`,
        position: `topRight`,
        maxWidth: `432px`,
      });
    }
  },
};

formEl.addEventListener('submit', async e => {
  e.preventDefault();
  hideLoadMoreButton();

  store.page = 1;
  store.query = inpSearch.value.trim();
  inpSearch.value = '';

  if (store.query === '') {
    iziToast.show({
      message: 'Please enter a search query!',
      backgroundColor: `rgba(148, 128, 14, 0.8)`,
      messageColor: `#ffffff`,
      position: `topRight`,
      maxWidth: `432px`,
    });
    clearGallery();
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(store.query, store.perPage, store.page);
    store.totalPages = Math.ceil(data.totalHits / store.perPage);
    if (data.totalHits < 1) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        backgroundColor: `rgba(148, 128, 14, 0.8)`,
        messageColor: `#ffffff`,
        position: `topRight`,
        maxWidth: `432px`,
      });
      return;
    }
    createGallery(data.hits);
    store.actionIsLastPage();
  } catch (error) {
    iziToast.error({
      message: `Error ${error.message}`,
      position: 'topright',
    });
  } finally {
    hideLoader();
  }
});

loadMoreBtn.addEventListener('click', async e => {
  store.page += 1;
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(store.query, store.perPage, store.page);
    createGallery(data.hits);
    autoScroll();
    store.actionIsLastPage();
  } catch (error) {
    iziToast.error({
      message: `Error ${error.message}`,
      position: 'topright',
    });
  } finally {
    hideLoader();
  }
});
