document.addEventListener('click', (event) => {
  event.preventDefault()
  console.log(event.target);
  if ((event.target.tagName === 'BUTTON') || (event.target.tagName === 'A')) {

  }

})