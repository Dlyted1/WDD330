async function start()  {
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json()
    //console.log(data)
    breedList(data.message)
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

async function loadBreed(breed) {
    if (breed != "Choose a dog breed") {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
        const data = await response.json()
        console.log(data)
    }

}