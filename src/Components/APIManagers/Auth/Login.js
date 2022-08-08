

export const login = (userLogin) => {
    return fetch(`${process.env.REACT_APP_API_ROUTE}/login`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userLogin)
        })
        .then(res => res.json())
}