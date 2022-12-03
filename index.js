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


//** basic fecth request to connect to json server */
    fetch(`http://localhost:8000/dreams/${event.target.children[1].value}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    //** access user input from event object */
    });

    });

};
//** add event listener */
document.addEventListener('DOMContentLoaded', init);