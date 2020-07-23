const apiURL = 'http://localhost:8088/'

export default {
    GetAll(string){
        return fetch(`${apiURL}${string}`)
        .then(response=>response.json())
    }
}