const entryContainer = document.querySelector(".entryContainer")

const entryDetails = document.querySelector(".entryDetails")

const init = () => {

/** basic fetch request to connect to json server */
  fetch(`http://localhost:8000/dreams`)
    .then(response => response.json())
    .then(data => {

      data.forEach(entry => renderEntry(entry)) 

    });
};

  function postEntry(userEntry) {

       fetch(`http://localhost:8000/dreams`, {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(userEntry)
      })
        .then((response) => response.json())
        .then((newEntry) => renderEntry(newEntry))
};


function renderEntry({day, type, story}) {

  const dayH3Tag = document.createElement("h3")
  dayH3Tag.innerText = day


  const entryCard1 = document.createElement("div")
  entryCard1.setAttribute("id", "dayDiv")

  entryCard1.append(dayH3Tag)
  entryContainer.append(entryCard1)
  entryCard1.innerText = day

  entryCard1.addEventListener('mouseover', eventOver)

  entryCard1.addEventListener('mouseout', eventOut)

  let entryCard2 = null
  let typePTag = null

    function eventOver() {
      typePTag = document.createElement("p")
      typePTag.innerText = `type of dream: ${type}`

      entryCard2 = document.createElement("div")
      entryCard2.setAttribute("id", "typeDiv")

      entryCard1.append(typePTag, entryCard2)
      entryCard2.innerText = `Dream story: ${story}`
    }

    function eventOut() {

      entryCard2.remove()
      typePTag.remove()
    }

  }



/** add event listener */
document.addEventListener('DOMContentLoaded', init);

const journalForm = document.querySelector(".journal-form")

journalForm.addEventListener('submit', (e) => {
  e.preventDefault();

    const userDate = document.querySelector("#enterDreamDate").value

    const userType = document.querySelector("#enterDreamType").value

    const userStory = document.querySelector("#enterDreamStory").value

    const formObject = {
      day: userDate, 
      type: userType, 
      story: userStory
    }

    postEntry(formObject)

});
