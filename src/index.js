import './style.css';
import debounce from 'lodash.debounce';
import { notificationSpecific, errorNotification, successNotification } from './js/pnotify';
import countryCard from './js/hbs/cardCountries.hbs';
import countriesList from './js/hbs/countriesList.hbs';
import countriesFetch from './js/fetchCountries';

const refs = {
  input: document.querySelector('.js-input'),
  cardContainer: document.querySelector('.card-container'),
};

const renderCountries = (country, template) => {
  const markup = template(country);
  refs.cardContainer.innerHTML = markup;
};

const clearContainer = () => {
  refs.cardContainer.innerHTML = '';
};

refs.input.addEventListener('input', debounce(onSearch, 500));

function onSearch(e) {
  const query = e.target.value.trim();

  if (query) {
    countriesFetch(query)
      .then(data => {
        if (data.length > 10) {
          notificationSpecific();
          clearContainer();
        } else if (data.length >= 2 && data.length < 10) {
          renderCountries(data, countriesList);
        } else if (data.length === 1) {
          renderCountries(data, countryCard);
          successNotification();
        }
      })
      .catch(data => errorNotification())
      .finally(clearContainer());
  }
}
