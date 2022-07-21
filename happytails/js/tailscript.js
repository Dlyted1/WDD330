
let timer
let deletePhotoDelay

async function start()  {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json()
    //console.log(data)
    breedList(data.message)
    } catch (e) {
      console.log("There is an error fetching the dog list")  
    }
}

//call our function to run
start()

function breedList(breeds) {
    document.getElementById("breed").innerHTML = `
    <select onchange="loadBreed(this.value)">
    <option>Choose a dog breed</option>
    ${Object.keys(breeds).map(function (breed) { 
        return `<option>${breed}</option>`
    }).join('')}
</select>`

}

//load breed images
async function loadBreed(breed) {
    if (breed != "Choose a dog breed") {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
        const data = await response.json()
        //console.log(data)
        createSlideshow(data.message)

    }

}

function createSlideshow(images) {
    //console.log(images)
    let position = 0
    clearInterval(timer)
    clearTimeout(deletePhotoDelay)


    if (images.length > 1) {
        document.getElementById("slideshow").innerHTML = `
        <div class="slide" style="background-image: url(${images[0]}); height:100%;"></div>
        <div class="slide" style="background-image: url(${images[1]}); height:100%;"></div>
        `
        position += 2
        if (images.length == 2) position = 0
        //timer
        timer = setInterval(nextSlide, 3000)
        console.log('finishedif')

    } else {
        document.getElementById("slideshow").innerHTML = `
        <div class="slide" style="background-image: url(${images[0]}); height:100%;"></div>
        <div class="slide"></div>
        `
        console.log('else')
    }



    function nextSlide() {
        document.getElementById("slideshow").insertAdjacentHTML("beforeend", `<div class="slide" style="background-image: url('${images[position]}')"></div>`)
        deletePhotoDelay = setTimeout(function () {
            document.querySelector(".slide").remove()

        }, 1000)
        if (position + 1 >= images.length) {
            position = 0
        } else {
            position++
        }
    }

}