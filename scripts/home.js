import { getCharacters, getLocations } from "./services/getData.js";

const display = document.querySelector(".data");
const charactersButton = document.querySelector("#characters");
const locationsButton = document.querySelector("#locations");
const episodesButton = document.querySelector("#episodes");



const locationList = async(page = 1) => {
    try {
        const { results } = await getLocations(page);
        display.textContent = "";
        results.forEach(location => {
            const article = document.createElement('article');
            article.setAttribute('class', 'location');
            article.innerHTML = `
            <h2>${location.name}</h2>
            <div>

            <p>${location.dimension}</p>
            <p>${location.type}</p>
            <p> Residents: ${location.residents.length}</p>
            </div>
            
            `
            display.appendChild(article);
        });
    } catch (error) {
        console.log("Error:" + error);
    }
}

const characterList = async(page = 1) => {
    try {
        const { results } = await getCharacters(page);
        display.textContent = "";
        results.forEach(character => {
            const article = document.createElement('article');
            article.setAttribute('class', 'character');
            article.innerHTML = `
            <img src="${character.image}", alt="Character ${character.name} from Rick and Morty">
            <h2>${character.name}</h2>
            <div>
            <p>${character.species}</p>
            <p class="${character.status.toLowerCase()}"></p>
            </div>
            
            <a href="/#/${character.id}" > Ver detalle
            </a>
            `

            display.appendChild(article);
        });
    } catch (error) {
        console.log("Error:" + error);
    }

}





locationsButton.addEventListener("click", (e) => {
    locationList();
})

// episodesButton

charactersButton.addEventListener("click", (e) => {
    characterList();
});