export const getAllCurrentUsersCharacters = () => {
    return fetch(`${process.env.REACT_APP_API_ROUTE}/characters/current_user_characters`,
        {
            headers: {
                "Authorization": `Token ${localStorage.getItem("ro_token")}`
            }
        })
        .then(res => res.json())
}

export const getCharactersByUserId = (id) => {
    return fetch(`${process.env.REACT_APP_API_ROUTE}/characters/characters_by_user_id/${id}`,
        {
            headers: {
                "Authorization": `Token ${localStorage.getItem("ro_token")}`
            }
        })
        .then(res => res.json())
}

export const getSingleCharacter = (id) => {
    return fetch(`${process.env.REACT_APP_API_ROUTE}/characters/${id}`,
        {
            headers: {
                "Authorization": `Token ${localStorage.getItem("ro_token")}`
            }
        })
        .then(res => res.json())
}

export const deleteCharacterById = (id) => {
    return fetch(`${process.env.REACT_APP_API_ROUTE}/characters/${id}`,
        {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("ro_token")}`
            }
        })
}