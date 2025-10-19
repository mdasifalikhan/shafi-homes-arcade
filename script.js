const form = document.getElementById('booking-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you! Our team will contact you shortly to confirm your visit.');
  form.reset();
});