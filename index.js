const entryContainer = document.querySelector(".entryContainer")

const init = () => {

/** basic fetch request to connect to json server */
  fetch(`http://localhost:8000/dreams`)
    .then(response => response.json())
    .then(data => {

      data.forEach(entry => renderEntry(entry)) 

      // console.log(data)
      // console.log(data.forEach(newEntry => postEntry(newEntry)))

    });
};

  function postEntry(newEntry) {

    const dreamForm = document.querySelector('form')
    // console.log(newEntry)
    // console.log(entry.day)

    dreamForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // console.log(entry)
      const userDream = document.querySelector('input#enterDreamDate')
      // console.log(userDream)
       fetch(`http://localhost:8000/dreams`, {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(newEntry)
      })
        .then((response) => response.json())
        .then((newEntry) => renderEntry(newEntry))
        console.log(newEntry)
      
    })
};


function renderEntry({day, type, story}) {

  const dayH3Tag = document.createElement("h3")
  dayH3Tag.innerText = day

  const typeH3Tag = document.createElement("p")
  typeH3Tag.innerText = type

  const storyH3Tag = document.createElement("p")
  typeH3Tag.innerText = story

  const entryCard1 = document.createElement("div1")

  entryCard1.append(dayH3Tag)
  entryContainer.append(entryCard1)
  entryCard1.innerText = day

  const entryCard2 = document.createElement("div2")

  entryCard2.append(typeH3Tag)
  entryContainer.append(entryCard2)
  entryCard2.innerText = type

  const entryCard3 = document.createElement("div3")

  entryCard3.append(storyH3Tag)
  entryContainer.append(entryCard3)
  entryCard3.innerText = story

}

//** add event listener */
document.addEventListener('DOMContentLoaded', init);