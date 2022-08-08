

export const setStorage = (authObj) => {

    localStorage.setItem("ro_token", authObj.token)
    localStorage.setItem("ro_user", authObj.user_id)
    localStorage.setItem("ro_username", authObj.username)

}