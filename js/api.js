import {onFormImgUploadClose, showSuccessWindow, showErrorWindow, unblockSubmitButton} from './form.js';

const URL_SEND = 'https://29.javascript.htmlacademy.pro/kekstagram';
const URL_GET = 'https://29.javascript.htmlacademy.pro/kekstagram/data';

const getData = (onSuccess, onFail) => fetch(URL_GET)
  .then((response) => response.json()).then((photos) => {
    onSuccess(photos);
  })
  .catch((err) => {
    onFail(err);
  });

const sendData = (formData) => {
  fetch(
    URL_SEND,
    {
      method: 'POST',
      body: formData,
    },
  ).then((response) => {
    if (response.ok) {
      onFormImgUploadClose();
      showSuccessWindow();
    } else {
      showErrorWindow();
    }
  })
    .catch(() => {
      showErrorWindow();
    })
    .finally(unblockSubmitButton);
};

export {getData, sendData};
