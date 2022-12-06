const entryContainer = document.querySelector(".entryContainer")

const init = () => {

/** basic fetch request to connect to json server */
    fetch(`http://localhost:8000/dreams`)
    .then(response => response.json())
    .then(data => {

      console.log(data)

      data.forEach(entry => renderEntry(entry)) 

    });
};

/** cb function post upon submit 
 * 
 * function postEntry(entry) {
 *  fetch(`http://localhost:8000/dream`, {
 *    method: 'POST',
 *    headers:{'Content-Type': 'application/json'},
 *    body: JSON.stringify(entry)
 * })
 *    .then((response) => response.json())
 *    .then((newEntry) => renderEntry(newEntry))
 * }
 * 
*/

function renderEntry({day, type, story}) {

  const dayH3Tag = document.createElement("h3")
  dayH3Tag.innerText = day



  const entryCard1 = document.createElement("div1")

  entryCard1.append(dayH3Tag)
  entryContainer.append(entryCard1)
  entryCard1.innerText = day

}

//** add event listener */
document.addEventListener('DOMContentLoaded', init);