import React from "react"


export const CharacterSkills = ({ characterSkills }) => {
    return (
        <>
            {characterSkills?.map(characterSkill => <p>{characterSkill.name}</p>)}
        </>
    )
}