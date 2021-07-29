const showResponseMsg = (message) => {
  const form = document.querySelector('form')
  const firstInput = document.getElementById('name');
  const p = document.createElement('p');
  p.textContent = message;
  form.insertBefore(p, firstInput);
  setTimeout(() => {
    p.remove();
  }, 5000);
}
export default showResponseMsg;