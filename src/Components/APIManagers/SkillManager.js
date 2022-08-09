export const getAllSkillsBySortedByAttribute = () => {
    return fetch(`${process.env.REACT_APP_API_ROUTE}/skills/get_all_skills_sorted_by_attribute`,
        {
            headers: {
                "Authorization": `Token ${localStorage.getItem("ro_token")}`
            }
        })
        .then(res => res.json())
}