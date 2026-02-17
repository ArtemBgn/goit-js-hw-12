import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'izitoast/dist/css/iziToast.min.css';

let myGallery = new SimpleLightbox('.gallery a', {
  animationSpeed: 250,
  fadeSpeed: 300,
  captionDelay: 250,
  captionsData: 'alt',
  navText: [
    '<span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.031 2.469C17.1008 2.53867 17.1563 2.62143 17.1941 2.71255C17.2319 2.80367 17.2513 2.90135 17.2513 3C17.2513 3.09865 17.2319 3.19633 17.1941 3.28745C17.1563 3.37857 17.1008 3.46133 17.031 3.531L8.5605 12L17.031 20.469C17.1718 20.6098 17.2509 20.8008 17.2509 21C17.2509 21.1992 17.1718 21.3902 17.031 21.531C16.8902 21.6718 16.6992 21.7509 16.5 21.7509C16.3008 21.7509 16.1098 21.6718 15.969 21.531L6.969 12.531C6.89915 12.4613 6.84374 12.3786 6.80593 12.2874C6.76812 12.1963 6.74866 12.0986 6.74866 12C6.74866 11.9013 6.76812 11.8037 6.80593 11.7125C6.84374 11.6214 6.89915 11.5387 6.969 11.469L15.969 2.469C16.0387 2.39915 16.1214 2.34374 16.2125 2.30593C16.3037 2.26812 16.4013 2.24866 16.5 2.24866C16.5986 2.24866 16.6963 2.26812 16.7874 2.30593C16.8786 2.34374 16.9613 2.39915 17.031 2.469Z" fill="white"/></svg></span>',
    '<span><svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.96912 2.469C7.03879 2.39915 7.12155 2.34374 7.21267 2.30593C7.30379 2.26812 7.40147 2.24866 7.50012 2.24866C7.59877 2.24866 7.69645 2.26812 7.78757 2.30593C7.87869 2.34374 7.96145 2.39915 8.03112 2.469L17.0311 11.469C17.101 11.5387 17.1564 11.6214 17.1942 11.7125C17.232 11.8037 17.2515 11.9013 17.2515 12C17.2515 12.0986 17.232 12.1963 17.1942 12.2874C17.1564 12.3786 17.101 12.4613 17.0311 12.531L8.03112 21.531C7.89029 21.6718 7.69928 21.7509 7.50012 21.7509C7.30096 21.7509 7.10995 21.6718 6.96912 21.531C6.82829 21.3902 6.74917 21.1992 6.74917 21C6.74917 20.8008 6.82829 20.6098 6.96912 20.469L15.4396 12L6.96912 3.531C6.89927 3.46133 6.84386 3.37857 6.80605 3.28745C6.76824 3.19633 6.74878 3.09865 6.74878 3C6.74878 2.90135 6.76824 2.80367 6.80605 2.71255C6.84386 2.62143 6.89927 2.53867 6.96912 2.469Z" fill="white"/></svg></span>',
  ],
  closeText:
    '<span><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.29208 9.29199C9.38497 9.19886 9.49532 9.12497 9.61681 9.07456C9.7383 9.02415 9.86854 8.9982 10.0001 8.9982C10.1316 8.9982 10.2619 9.02415 10.3833 9.07456C10.5048 9.12497 10.6152 9.19886 10.7081 9.29199L16.0001 14.586L21.2921 9.29199C21.3851 9.19901 21.4954 9.12526 21.6169 9.07494C21.7384 9.02462 21.8686 8.99872 22.0001 8.99872C22.1316 8.99872 22.2618 9.02462 22.3832 9.07494C22.5047 9.12526 22.6151 9.19901 22.7081 9.29199C22.8011 9.38496 22.8748 9.49534 22.9251 9.61682C22.9754 9.7383 23.0013 9.8685 23.0013 9.99999C23.0013 10.1315 22.9754 10.2617 22.9251 10.3832C22.8748 10.5046 22.8011 10.615 22.7081 10.708L17.4141 16L22.7081 21.292C22.8011 21.385 22.8748 21.4953 22.9251 21.6168C22.9754 21.7383 23.0013 21.8685 23.0013 22C23.0013 22.1315 22.9754 22.2617 22.9251 22.3832C22.8748 22.5046 22.8011 22.615 22.7081 22.708C22.6151 22.801 22.5047 22.8747 22.3832 22.925C22.2618 22.9754 22.1316 23.0012 22.0001 23.0012C21.8686 23.0012 21.7384 22.9754 21.6169 22.925C21.4954 22.8747 21.3851 22.801 21.2921 22.708L16.0001 17.414L10.7081 22.708C10.6151 22.801 10.5047 22.8747 10.3832 22.925C10.2618 22.9754 10.1316 23.0012 10.0001 23.0012C9.86859 23.0012 9.73839 22.9754 9.61691 22.925C9.49543 22.8747 9.38505 22.801 9.29208 22.708C9.1991 22.615 9.12535 22.5046 9.07503 22.3832C9.02471 22.2617 8.99881 22.1315 8.99881 22C8.99881 21.8685 9.02471 21.7383 9.07503 21.6168C9.12535 21.4953 9.1991 21.385 9.29208 21.292L14.5861 16L9.29208 10.708C9.19895 10.6151 9.12507 10.5047 9.07465 10.3833C9.02424 10.2618 8.99829 10.1315 8.99829 9.99999C8.99829 9.86845 9.02424 9.73821 9.07465 9.61672C9.12507 9.49523 9.19895 9.38488 9.29208 9.29199Z" fill="white"/></svg></span>',
});

const galImg = document.querySelector('ul.gallery');
const sniper = document.querySelector('.loader');
export const loadMoreBtn = document.querySelector('.load-more-btn');

export function createGallery(images) {
  if (images.length < 1) {
    iziToast.show({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      backgroundColor: `rgba(148, 128, 14, 0.8)`,
      messageColor: `#ffffff`,
      position: `topRight`,
      maxWidth: `432px`,
    });
  }
  const markup = images
    .map(
      item => `<li class="gallery-item">
              <a class="gallery-link" href="${item.largeImageURL}"
                ><img
                  class="gallery-image"
                  src="${item.webformatURL}"
                  alt="${item.tags}"
              /></a>
              <ul class="gallery-item-data">
                <li class="gallery-data-label">
                  <h4 class="gallery-data-name">Likes</h4>
                  <p class="gallery-data-value">${item.likes}</p>
                </li>
                <li class="gallery-data-label">
                  <h4 class="gallery-data-name">Views</h4>
                  <p class="gallery-data-value">${item.views}</p>
                </li>
                <li class="gallery-data-label">
                  <h4 class="gallery-data-name">Comments</h4>
                  <p class="gallery-data-value">${item.comments}</p>
                </li>
                <li class="gallery-data-label">
                  <h4 class="gallery-data-name">Downloads</h4>
                  <p class="gallery-data-value">${item.downloads}</p>
                </li>
              </ul>
          </li>`
    )
    .join('');
  galImg.insertAdjacentHTML('beforeend', markup);
  myGallery.refresh();
}

export function clearGallery() {
  galImg.innerHTML = '';
}

export function showLoader() {
  sniper.classList.remove('is-hidden');
}

export function hideLoader() {
  sniper.classList.add('is-hidden');
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.add('is-btn-visible');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.remove('is-btn-visible');
}

export function autoScroll() {
  const liElement = document.querySelector('li.gallery-item');
  const heigthLi = 2 * liElement.getBoundingClientRect().height;
  window.scrollBy({
    top: heigthLi,
    left: 0,
    behavior: 'smooth',
  });
}
