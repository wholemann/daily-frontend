const form = document.getElementById('form');
const emailInput = document.getElementById('email');

form.addEventListener('submit', e => {
  e.preventDefault();
  const email = emailInput.value;

  if (!validationEmail(email)) {
    form.classList.add('error');
  } else {
    form.classList.remove('error');
  }
});

const validationEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
}
