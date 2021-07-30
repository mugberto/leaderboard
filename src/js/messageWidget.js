const showResponseMsg = (message) => {
  const form = document.querySelector('form');
  const firstInput = document.getElementById('name');
  const p = document.createElement('p');
  p.textContent = message;
  p.className = 'alert-msg';
  form.insertBefore(p, firstInput);
  setTimeout(() => {
    p.remove();
  }, 4000);
};
export default showResponseMsg;