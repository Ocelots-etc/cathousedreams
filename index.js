const init = () => {
  // add an event listener to the form element
  const inputForm = document.querySelector('form');
  // when the event listener is triggered, the callback function 
  // we've provided will execute and an object representing the 
  // event will be passed in as an argument 
  inputForm.addEventListener('submit', (event) => {
    // this method prevents our form's default behavior
    event.preventDefault();
    // we access the input element directly here
    const dreamerInput = document.querySelector('input#searchByID');
    // console.log(dreamerInput.value)
    // this is our fetch request with string interpolation with `` backticks
    fetch(`http://localhost:8000/dreams/${dreamerInput.value}`)
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      // we capture user input and use it to customize a fetch request to our json server
      // section element with an id of movieDetails with an h4 and a p tags
      const day = document.querySelector('section#dreamDetails h4');
      const type = document.querySelector('section#dreamDetails h5');
      const story = document.querySelector('section#dreamDetails p');
      // change the innerText of the title and summary to match the data's title and summary
      day.innerText = data.day;
      type.innerText = data.type;
      story.innerText = data.story;


     });
  });
}

document.addEventListener('DOMContentLoaded', init);