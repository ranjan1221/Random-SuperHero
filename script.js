const superHeroToken = '1367975907489851'
const BASE_URL = `https://superheroapi.com/api.php/${superHeroToken}`
const heroImageDiv = document.getElementById('heroImage')
const searchButton = document.getElementById('searchButton')

const searchInput = document.getElementById('searchInput')


const getSuperHero =(id,name)=>{
fetch(`${BASE_URL}/${id}`)
.then(response => response.json())
.then(json => {
    console.log(json.powerstats)
    const superHero = json
    showHeroInfo(json)
    // const name = `<h2>${json.name}</h2>`
    // const power = `<p>intelligence ${json.powerstats.intelligence}</p>`
    // const speed =`<p>speed ${json.powerstats.speed}</p>`
    // const strength=`<p>strength ${json.powerstats.strength}</p>`
    // const durability=`<p>durability ${json.powerstats.durability}</p>`

    // heroImageDiv.innerHTML = `${name}<img src="${json.image.url}" height=200 width =200/>
    // ${power}  ${speed} ${strength} ${durability}`
    })}

    const getSearchSuperHero = (name) => {
        console.log(searchInput.value)
        fetch(`${BASE_URL}/search/${name}`)
          .then(response => response.json())
          .then(json => {
            const hero = json.results[0]
            console.log(json)
            heroImageDiv.innerHTML = `<img src="${hero.image.url}" height=200 width =200/>`
            // showHeroInfo(hero) 
          })
      }
      const statToEmoji = {
        intelligence: '🧠',
        strength: '💪',
        speed: '⚡',
        durability: '🏋️‍♂️',
        power: '📊',
        combat: '⚔️',
      }

const showHeroInfo =(characater)=>{
    const name = `<h2>${characater.name}</h2>`
    const image = `<img src="${characater.image.url}" height=200 width =200/>`
    const stats = Object.keys(characater.powerstats).map((stats)=>
    {
        return `<p>${statToEmoji[stats]} ${stats.toUpperCase()}: ${characater.powerstats[stats]}</p>`
    }).join('')
    heroImageDiv.innerHTML = `${name}${image}${stats}`
    }


const random = document.getElementById('harsh')
random.onclick=()=>getSuperHero(randomHero())
searchButton.onclick = () => getSearchSuperHero(searchInput.value)




const randomHero = () => {
    const numberOfHeroes = 731
    return Math.floor(Math.random() * numberOfHeroes) + 1
  }
