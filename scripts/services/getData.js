const apiUrl = "https://rickandmortyapi.com/api";

const getCharacter = async(id) => {
    try {
        const res = await fetch(`${apiUrl}/character/${id}`);
        const data = res.json();
        return data;
    } catch (error) {
        console.log("Error:" + error);
    }

}
const getCharacters = async(page) => {
    try {
        const res = await fetch(`${apiUrl}/character?page=${page}`);
        const data = res.json();
        return data;
    } catch (error) {
        console.log("Error:" + error);
    }

}

const getLocations = async(page) => {

    try {
        const res = await fetch(`${apiUrl}/location?page=${page}`);
        const data = res.json();
        return data;
    } catch (error) {
        console.log("Error:" + error);
    }
}



export { getCharacter, getCharacters, getLocations };