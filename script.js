let menu =  document.querySelector("header ul")
let carregando = document.querySelectorAll(".carregando")

// api de conselhos
async function geraAdvice(){
// tela de carregando
    carregando[0].style.display = 'block'

    let n = Math.floor(Math.random() * 199) + 1
    const response = await fetch('https://api.adviceslip.com/advice/'+n)
    const data = await response.json()

    let slip = data.slip.advice

    document.querySelector(".conselho").innerHTML = slip

// carregado
    carregando[0].style.display = 'none'
}
// gera conselho quando abrir a pagina
geraAdvice()

//api de piadas do chuck norris
async function chuckNorris(){
    carregando[1].style.display = 'block'

    const response = await fetch('https://api.chucknorris.io/jokes/random')

    const data = await response.json()

    var piadaChuck = data.value

    document.querySelector(".piadaChuck").innerHTML = piadaChuck

    carregando[1].style.display = 'none'
}
// gera piada quando abrir a pagina
chuckNorris()

// api sobre cachorros
async function dogApi(){
    carregando[2].style.display = 'block'

    let x = Math.floor(Math.random() * 171) + 1

    const response = await fetch('https://api.thedogapi.com/v1/breeds?limit=171&page=0')

    const data = await response.json()

    let imgDog = data[x].image.url
    let nameDog = data[x].name
    let vidaDog = data[x].life_span
    let tempDog = data[x].temperament

    // console.log(data[x].name)

    document.querySelector(".fotoDog").src = imgDog
    document.querySelector(".nameDog").innerHTML = nameDog
    document.querySelector(".vidaDog").innerHTML = vidaDog
    document.querySelector(".tempDog").innerHTML = tempDog

    carregando[2].style.display = 'none'
}
// 
dogApi()

//api sobre gatos
async function catApi(){
    carregando[3].style.display = 'block'

    let y = Math.floor(Math.random() * 66)+1

    const response = await fetch('https://api.thecatapi.com/v1/breeds?limit=66&page=0')

    const data = await response.json()

    let procImg = data[y].reference_image_id
    const responseImg = await fetch(`https://api.thecatapi.com/v1/images/search?${procImg}`)
    const dataImg = await responseImg.json()

    const imgCat = dataImg.json
    let nameCat = data[y].name
    let vidaCat = data[y].life_span
    let tempCat = data[y].temperament

    document.querySelector(".fotoCat").src = dataImg[0].url
    document.querySelector(".nameCat").innerHTML = nameCat
    document.querySelector(".vidaCat").innerHTML = vidaCat
    document.querySelector(".tempCat").innerHTML = tempCat

    carregando[3].style.display = 'none'
}

catApi()

// api sobre rick&morty
async function rickMorty() {
    carregando[4].style.display = 'block'
    
    const response = await fetch('https://rickandmortyapi.com/api/character/?page=1')
    
    const data = await response.json()
    
    let z = Math.floor(Math.random() * 18) +1
    // let z = 19
    
    // console.log(data)

    let fotoRick = data.results[z].image
    let nameRick = data.results[z].name
    let nameOrig = data.results[z].origin.name
    let nameEspi = data.results[z].species
    let nameStat = data.results[z].status

    document.querySelector(".fotoRick").src = fotoRick
    document.querySelector(".nameRick").innerHTML = nameRick
    document.querySelector(".oriRick").innerHTML = nameOrig
    document.querySelector(".espiRick").innerHTML = nameEspi
    document.querySelector(".statRick").innerHTML = nameStat

    carregando[4].style.display = 'none'
}

rickMorty()
// abre menu lateral
function abreMenu(){
    menu.style.right = '0%'
}
// fecha menu lateral
function fechaMenu(){
    menu.style.right = '-120%'
}
