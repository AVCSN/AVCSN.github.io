//Example fetch using pokemonapi.co
randomizer = (min, max) => Math.random() * (max - min) + min
document.querySelector('.summonServant').addEventListener('click', getFetch)
document.querySelector('.naButton').addEventListener('click', setNA)
document.querySelector('.jpButton').addEventListener('click', setJP)

function setNA(){
  return region = document.querySelector('.naButton').innerText
}

function setJP(){
  return region = document.querySelector('.jpButton').innerText
}

function choiceSanity(choice){
  let sanitizedChoice = choice.split(' ')
  if (sanitizedChoice.length == 1) {
    return choice = choice.toLowerCase()
  } else {
    sanitizedChoice[0] = sanitizedChoice[0].toLowerCase()
    sanitizedChoice[1] = sanitizedChoice[1][0].toUpperCase() + sanitizedChoice[1].substring(1).toLowerCase()
    return choice = sanitizedChoice.join('')
  }
}
region = 'NA'
function getFetch(){
  let choice = choiceSanity(document.querySelector('input').value)
  let url
  if (choice == '') {
    url = 'https://api.atlasacademy.io/basic/'+region+'/servant/search?lang=en&type=normal'
  } else {
    url = 'https://api.atlasacademy.io/basic/'+region+'/servant/search?lang=en&className='+choice
  }

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        let i = Math.floor(randomizer(0, data.length))
        console.log(data[i])
        document.querySelector('h2').innerText = data[i].name
        document.querySelector('img').src = data[i].face
        document.querySelector('h3').innerText = '⭐'.repeat(data[i].rarity)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}