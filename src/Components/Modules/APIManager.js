const apiURL = 'http://localhost:8088/'

export default {
    GetAll(string){
        return fetch(`${apiURL}${string}`)
        .then(response=>response.json())
    },

    Push(string, obj) {
        return fetch(`${apiURL}${string}`, {
        method: `POST`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    }
}