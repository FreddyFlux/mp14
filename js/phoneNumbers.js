/////////////////////////////////
// INT TEL PLUGIN

// IP LOCATION
function getIp(callback) {
  fetch('https://ipinfo.io/json?token=19e3f7a5bd031d', {
    headers: { Accept: 'application/json' },
  })
    .then((resp) => resp.json())
    .catch(() => {
      return {
        country: 'us',
      };
    })
    .then((resp) => callback(resp.country));
}

// INTL TEL INPUT PLUGIN
const phoneInputField = document.querySelector('#phone');
const phoneInput = window.intlTelInput(phoneInputField, {
  initialCountry: 'auto',
  geoIpLookup: getIp,
  utilsScript:
    'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
});

// INTL TEL FORM SUBMIT
const info = document.querySelector('.alert-info');

function process(event) {
  event.preventDefault();

  const phoneNumber = phoneInput.getNumber();

  info.style.display = '';
  info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;
}
