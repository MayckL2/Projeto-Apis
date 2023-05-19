let menu =  document.querySelector("header ul")

// api de conselhos
async function geraAdvice(){
    // w3.getHttpObject('https://api.adviceslip.com/advice', function(data){
    //     advice= data.slip.advice
    //     // alert(advice)
    //     document.querySelector(".conselho").innerHTML = advice
    // })
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()

    console.log(data)
}
// gera conselho quando abrir a pagina
geraAdvice()

//api de piadas do chuck norris
async function chuckNorris(){
    const response = await fetch('https://api.chucknorris.io/jokes/random')

    const data = await response.json()

    var piadaChuck = data.value

    document.querySelector(".piadaChuck").innerHTML = piadaChuck
}
// gera piada quando abrir a pagina
chuckNorris()

async function dogApi(){
    let x = Math.floor(Math.random() * 10)

    const response = await fetch('https://api.thedogapi.com/v1/breeds?limit=10&page=0')

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
}
// 
dogApi()

//api sobre gato
async function catApi(){
    let y = Math.floor(Math.random() * 10)

    const response = await fetch('https://api.thecatapi.com/v1/breeds?limit=10&page=0')

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
}

catApi()

async function rickMorty() {

    const response = await fetch('https://rickandmortyapi.com/api/character')
    
    const data = await response.json()
    
    let z = Math.floor(Math.random() * 10)
    console.log(data.results[z])
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
}

rickMorty()

function abreMenu(){
    menu.style.right = '0%'
}

function fechaMenu(){
    menu.style.right = '-120%'
}