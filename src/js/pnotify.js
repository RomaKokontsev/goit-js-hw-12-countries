import * as Pnotify from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const notificationSpecific = () => {
  Pnotify({
    text: 'Too many matches found. Please enter a more specific query!',
  });
};

const errorNotification = () => {
  Pnotify({
    text: 'Country is not found.',
  });
};

export { notificationSpecific, errorNotification };
