


export const register = (newUser) => {
    return fetch(`${process.env.REACT_APP_API_ROUTE}/register`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
}