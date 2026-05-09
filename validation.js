document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  let isValid = true;

  const name = document.getElementById('name');
  const nameError = document.getElementById('nameError');
  if (name.value.trim() === '') {
    name.classList.add('invalid');
    nameError.classList.add('show');
    isValid = false;
  } else {
    name.classList.remove('invalid');
    nameError.classList.remove('show');
  }

  const email = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    email.classList.add('invalid');
    emailError.classList.add('show');
    isValid = false;
  } else {
    email.classList.remove('invalid');
    emailError.classList.remove('show');
  }

  const phone = document.getElementById('phone');
  const phoneError = document.getElementById('phoneError');
  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone.value.trim())) {
    phone.classList.add('invalid');
    phoneError.classList.add('show');
    isValid = false;
  } else {
    phone.classList.remove('invalid');
    phoneError.classList.remove('show');
  }

  const message = document.getElementById('message');
  const messageError = document.getElementById('messageError');
  if (message.value.trim() === '') {
    message.classList.add('invalid');
    messageError.classList.add('show');
    isValid = false;
  } else {
    message.classList.remove('invalid');
    messageError.classList.remove('show');
  }

  const successMsg = document.getElementById('successMsg');
  if (isValid) {
    successMsg.classList.add('show');
    document.getElementById('contactForm').reset();
    setTimeout(() => successMsg.classList.remove('show'), 3000);
  }
});