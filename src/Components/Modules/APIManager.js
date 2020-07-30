const apiURL = 'http://localhost:8088/'

let friendQuery = ``

export default {
    GetAll(string){
        return fetch(`${apiURL}${string}`)
        .then(response=>response.json())
    },
    GetAllbyUserId(string, id){
        return fetch(`${apiURL}${string}?userId=${id}`)
        .then(response=>response.json())
    },
    
    GetDefaultbyClass(string, className){
        console.log(className)
        return fetch(`${apiURL}${string}?class=${className}`)
        .then(response=>response.json())
    },
    GetUsersFriends(str){
        return fetch(`${apiURL}${str}?activeUserId=${sessionStorage.activeUserID}&_expand=user`)
        .then(res=>res.json()).then((response) => {
            console.log(response)
            return response
        })
    },
    GetAllFriends(str){
        return fetch(`${apiURL}${str}?_expand=user`)
        .then(res=>res.json())
    },
    
    SortingbyFriend(friendArray){

         
        
        
        let sortString = ""
        sortString += `?`
       
        for(let friend of friendArray){
            sortString += `userId=${friend.userId}&`
        }
        sortString += `userId=${sessionStorage.activeUserID}`
        console.log(sortString)
        friendQuery = sortString
    },

    Post(string, obj) {
        return fetch(`${apiURL}${string}`, {
        method: `POST`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    },
    Delete(string, id) {
        return fetch(`${apiURL}${string}/${id}`, {
        method: `DELETE`
    })
    }
}