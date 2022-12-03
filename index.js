const init = () => {
//** add event listener to the form element */
  const inputForm = document.querySelector('form');

//** the ""inputForm"" callback function will execute */
//** and event is an object that will be passed */
//** in as an argument when the event listener is triggered */
  inputForm.addEventListener('submit', (event) => {  
//** to prevent the default of the page from refreshing */
//** permits me to do something beside refreshing the page */
    event.preventDefault();

//** access user input from event object in order to determine */
//** the best path for accessing the children property's HTML collection */
//** to display in the console all of the nested elements of the */
//** of the event.target element */
//** const input = document.querySelector('input#searchByID') */
//** console.log(input.value); */
    console.log(event.target.children[1].value);
//** access user input from event object */

//** basic fecth request to connect to json server */
    fetch(`http://localhost:8000/dreams/${event.target.children[1].value}`)
    .then(response => response.json())
    .then(data => {
//** input my data in place of default values by creating elements to store */
      const day = document.querySelector('section#dreamDetails h4')
      const type = document.querySelector('section#dreamDetails h5')
      const story = document.querySelector('section#dreamDetails p')
//** setting the values of the innerText to match the values of data */
      day.innerText = data.day
      type.innerText = data.type
      story.innerText = data.story

    });
    });

};
//** add event listener */
document.addEventListener('DOMContentLoaded', init);