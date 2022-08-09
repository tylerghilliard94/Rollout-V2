import React, { useContext, useEffect, useState } from "react"
import { Row, Col, Image, Button, Card } from "react-bootstrap"

import CharacterNavBar from "../NavBar/CharacterNavBar"
import BaseNavBar from "../NavBar/BaseNavBar"

import "./CharacterProfile.css"
import { UserProfileContext } from "../../Providers/UserProvider"
import { getSingleCharacter } from "../APIManagers/CharacterManager"
import { useParams } from "react-router-dom"
import { getAllSkillsBySortedByAttribute } from "../APIManagers/SkillManager"
import { SkillBonuses } from "./SkillBonuses"
import { CharacterSkills } from "./CharacterSkills"

const CharacterProfile = () => {

    const { currentUser } = useContext(UserProfileContext)
    const [character, setCharacter] = useState({})
    const [skills, setSkills] = useState([])
    const [editable, setEditable] = useState(false)

    let { characterId } = useParams()
    useEffect(() => {
        getSingleCharacter(characterId)
            .then(setCharacter)

        getAllSkillsBySortedByAttribute()
            .then(setSkills)
    }, [editable])


    const handleEdit = () => {
        setEditable(true)
    }
    const skillCheck = (attribute, skill) => {
        let proficentSum = character[`${attribute}_bonus`] + character.proficiency_bonus
        let sum = character[`${attribute}_bonus`]
        if (character.skills?.map(skill => skill.id)?.includes(skill.id)) {
            return proficentSum > 0 ? "+" + proficentSum : proficentSum
        }
        else {
            return sum > 0 ? "+" + sum : sum
        }
    }
    const handleEvtChange = (event) => {
        const stateToChange = { ...character };
        stateToChange[event.target.id] = event.target.value;
        setCharacter(stateToChange);

    }

    const handleEditSave = () => {

        // APIManager.Update("characters", character.id, character).then(() => {
        //     setEditable(false)

        // })
    }

    if (character.rollout_user?.user?.id !== parseInt(currentUser?.user_id)) {
        return (
            <>

                <BaseNavBar />
                <Row>
                    <Col className="infoCol" sm={3}>
                        <div>



                            <Row>
                                <Image roundedCircle className="profileImage" src={character.image}></Image>
                                <p className="characterName"><a className="characterNameText">{character.character_name}</a></p>

                            </Row>
                            <p className="characterDescription">Description: </p>
                            <a className="infoTextDesc">{character.description}</a>

                            <p className="characterLevel">Level: <a className="infoText">{character.level}</a></p>
                            <p className="characterLevel">Race: <a className="infoText">{character.race?.name}</a></p>
                            <p className="characterExperience">Experience: <a className="infoText">{character.experience}</a></p>
                            <p className="characterAlignment">Alignment: <a className="infoText">{character.alignment?.name}</a></p>
                            <p className="characterSkills">Proficient Skills:<br></br>
                                <a className="infoTextSkills"> <CharacterSkills characterSkills={character.skills} /></a></p>
                            <p className="characterProficiency">Proficiency bonus: <a className="infoText">{character.proficiencyBonus}</a></p>
                            <p className="characterSpellcastingAbility">Spellcasting Ability: <a className="infoText">{character.character_class?.spellcasting_ability}</a></p>
                            <p className="characterSpellSaveDC">Spell Save DC: <a className="infoText">{character.spell_save_dc}</a></p>
                            <p className="characterSpellAttackBonus">Spell Attack Bonus: <a className="infoText">{character.spell_attack_bonus}</a></p>

                        </div>
                    </Col>
                    <Col className="profileStatCol">
                        <Row className="profileStatRow">


                            <Col>
                                <div className="HitPointContainer">
                                    <p className="hitPointsLabel">Hit Points</p>
                                    <Image roundedCircle className="hitPointsImage" src="http://res.cloudinary.com/dgllrw1m3/image/upload/v1596428401/gold_ring_tvyezp.png" />
                                    <p className="hitPoints"> <a className="hitPointsText" >{character.hit_points}</a></p>
                                </div>
                                <Card className={`profileCard`}>
                                    <Card.Body className="profileCardBody">
                                        <Card.Title className="characterStrength">Strength</Card.Title>
                                        <p className="strengthNumber">{character.strength}</p>
                                    </Card.Body>
                                </Card>
                                <Card className={`profileCardBonus`}>
                                    <Card.Body className="profileCardBodyBonus">
                                        <Card.Title className="characterStrengthBonus">{character.strength_bonus}</Card.Title>

                                    </Card.Body>
                                </Card>

                                <Card className={`profileCardRow2`}>
                                    <Card.Body className="profileCardBodyRow2">
                                        <Card.Title className="characterStrength">Intelligence</Card.Title>
                                        <p className="strengthNumber">{character.intelligence}</p>
                                    </Card.Body>
                                </Card>
                                <Card className={`profileCardBonus`}>
                                    <Card.Body className="profileCardBodyBonus">
                                        <Card.Title className="characterStrengthBonus">{character.intelligence_bonus}</Card.Title>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <p className="characterInitiativeTitle">Initiative</p>
                                <Card className={`profileCardInitiative`}>
                                    <Card.Body className="profileCardBodyInitiative">

                                        <p className="initiativeNumber">{character.dexterity_bonus}</p>
                                    </Card.Body>
                                </Card>
                                <Card className={`profileCardMiddle`}>
                                    <Card.Body className="profileCardBody">
                                        <Card.Title className="characterStrength">Dexterity</Card.Title>
                                        <p className="strengthNumber">{character.dexterity}</p>
                                    </Card.Body>
                                </Card>
                                <Card className={`profileCardBonus`}>
                                    <Card.Body className="profileCardBodyBonus">
                                        <Card.Title className="characterStrengthBonus">{character.dexterity_bonus}</Card.Title>

                                    </Card.Body>
                                </Card>
                                <Card className={`profileCardRow2`}>
                                    <Card.Body className="profileCardBodyRow2">
                                        <Card.Title className="characterStrength">Wisdom</Card.Title>
                                        <p className="strengthNumber">{character.wisdom}</p>
                                    </Card.Body>
                                </Card>
                                <Card className={`profileCardBonus`}>
                                    <Card.Body className="profileCardBodyBonus">
                                        <Card.Title className="characterStrengthBonus">{character.wisdom_bonus}</Card.Title>

                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className="armorClassCol">
                                <div className="armorClassContainer">
                                    <p className="ArmorClassLabel">Armor Class</p>
                                    <Image className="armorClassImg" src="http://res.cloudinary.com/dgllrw1m3/image/upload/v1596429468/darkenedShield_g5ypu5.png" />
                                    <p className="armorClass" > <a className="armorClassText" >{character.armor_class} + {character.dexterity_bonus}</a></p>
                                </div>
                                <Card className={`profileCardEnd`}>
                                    <Card.Body className="profileCardBody">
                                        <Card.Title className="characterStrength">Constitution</Card.Title>
                                        <p className="strengthNumber">{character.constitution}</p>
                                    </Card.Body>
                                </Card>
                                <Card className={`profileCardBonus`}>
                                    <Card.Body className="profileCardBodyBonus">
                                        <Card.Title className="characterStrengthBonus">{character.constitution_bonus}</Card.Title>

                                    </Card.Body>
                                </Card>
                                <Card className={`profileCardRow2`}>
                                    <Card.Body className="profileCardBodyRow2">
                                        <Card.Title className="characterStrength">Charisma</Card.Title>
                                        <p className="strengthNumber">{character.charisma}</p>
                                    </Card.Body>
                                </Card>
                                <Card className={`profileCardBonus`}>
                                    <Card.Body className="profileCardBodyBonus">
                                        <Card.Title className="characterStrengthBonus">{character.charisma_bonus}</Card.Title>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <SkillBonuses skills={skills} skillCheck={skillCheck} />
                        </Row>

                    </Col>
                </Row>
            </>
        )

    } else {


        if (editable === false) {
            return (
                <>

                    <CharacterNavBar />
                    <Row>
                        <Col className="infoCol" sm={3}>
                            <div>



                                <Row>
                                    <Image roundedCircle className="profileImage" src={character.image}></Image>
                                    <p className="characterName"><a className="characterNameText" onClick={handleEdit}>{character.character_name}</a></p>

                                </Row>
                                <p className="characterDescription">Description: </p>
                                <div className="characterDescriptionDiv"><a className="infoTextDesc" onClick={handleEdit}>{character.description}</a></div>
                                <p className="characterLevel">Level: <a className="infoText" onClick={handleEdit}>{character.level}</a></p>
                                <p className="characterLevel">Race: <a className="infoText">{character.race?.name}</a></p>
                                <p className="characterExperience">Experience: <a className="infoText" onClick={handleEdit}>{character.experience}</a></p>
                                <p className="characterAlignment">Alignment: <a className="infoText" onClick={handleEdit}>{character.alignment?.name}</a></p>
                                <p className="characterSkills">Proficient Skills:<br></br>
                                    <a className="infoTextSkills"><CharacterSkills characterSkills={character.skills} /></a></p>
                                <p className="characterProficiency">Proficiency bonus: <a className="infoText" onClick={handleEdit}>{character.proficiencyBonus}</a></p>
                                <p className="characterSpellcastingAbility">Spellcasting Ability: <a className="infoText">{character.character_class?.spellcasting_ability}</a></p>
                                <p className="characterSpellSaveDC">Spell Save DC: <a className="infoText">{character.spell_save_dc}</a></p>
                                <p className="characterSpellAttackBonus">Spell Attack Bonus: <a className="infoText">{character.spell_attack_bonus}</a></p>

                            </div>
                        </Col>
                        <Col className="profileStatCol">
                            <Row className="profileStatRow">


                                <Col>
                                    <div className="HitPointContainer">
                                        <p className="hitPointsLabel">Hit Points</p>
                                        <Image roundedCircle className="hitPointsImage" src="http://res.cloudinary.com/dgllrw1m3/image/upload/v1596428401/gold_ring_tvyezp.png" />
                                        <p className="hitPoints"> <a className="hitPointsText" onClick={handleEdit}>{character.hit_points}</a></p>
                                    </div>
                                    <Card className={`profileCard`}>
                                        <Card.Body className="profileCardBody">
                                            <Card.Title className="characterStrength">Strength</Card.Title>
                                            <p className="strengthNumber" onClick={handleEdit}>{character.strength}</p>
                                        </Card.Body>
                                    </Card>
                                    <Card className={`profileCardBonus`}>
                                        <Card.Body className="profileCardBodyBonus">
                                            <Card.Title className="characterStrengthBonus">{character.strength_bonus}</Card.Title>

                                        </Card.Body>
                                    </Card>

                                    <Card className={`profileCardRow2`}>
                                        <Card.Body className="profileCardBodyRow2">
                                            <Card.Title className="characterStrength">Intelligence</Card.Title>
                                            <p className="strengthNumber" onClick={handleEdit}>{character.intelligence}</p>
                                        </Card.Body>
                                    </Card>
                                    <Card className={`profileCardBonus`}>
                                        <Card.Body className="profileCardBodyBonus">
                                            <Card.Title className="characterStrengthBonus">{character.intelligence_bonus}</Card.Title>

                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <p className="characterInitiativeTitle">Initiative</p>
                                    <Card className={`profileCardInitiative`}>
                                        <Card.Body className="profileCardBodyInitiative">

                                            <p className="initiativeNumber">{character.dexterity_bonus}</p>
                                        </Card.Body>
                                    </Card>
                                    <Card className={`profileCardMiddle`}>
                                        <Card.Body className="profileCardBody">
                                            <Card.Title className="characterStrength">Dexterity</Card.Title>
                                            <p className="strengthNumber" onClick={handleEdit}>{character.dexterity}</p>
                                        </Card.Body>
                                    </Card>
                                    <Card className={`profileCardBonus`}>
                                        <Card.Body className="profileCardBodyBonus">
                                            <Card.Title className="characterStrengthBonus"> {character.dexterity_bonus}</Card.Title>

                                        </Card.Body>
                                    </Card>
                                    <Card className={`profileCardRow2`}>
                                        <Card.Body className="profileCardBodyRow2">
                                            <Card.Title className="characterStrength">Wisdom</Card.Title>
                                            <p className="strengthNumber" onClick={handleEdit}>{character.wisdom}</p>
                                        </Card.Body>
                                    </Card>
                                    <Card className={`profileCardBonus`}>
                                        <Card.Body className="profileCardBodyBonus">
                                            <Card.Title className="characterStrengthBonus">{character.wisdom_bonus}</Card.Title>

                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col className="armorClassCol">
                                    <div className="armorClassContainer">
                                        <p className="ArmorClassLabel">Armor Class</p>
                                        <Image className="armorClassImg" src="http://res.cloudinary.com/dgllrw1m3/image/upload/v1596429468/darkenedShield_g5ypu5.png" />
                                        <p className="armorClass" > <a className="armorClassText" onClick={handleEdit}>{character.armor_class} + {parseInt(character.dexterity_bonus)}</a></p>
                                    </div>
                                    <Card className={`profileCardEnd`}>
                                        <Card.Body className="profileCardBody">
                                            <Card.Title className="characterStrength">Constitution</Card.Title>
                                            <p className="strengthNumber" onClick={handleEdit}>{character.constitution}</p>
                                        </Card.Body>
                                    </Card>
                                    <Card className={`profileCardBonus`}>
                                        <Card.Body className="profileCardBodyBonus">
                                            <Card.Title className="characterStrengthBonus">{character.constitution_bonus}</Card.Title>

                                        </Card.Body>
                                    </Card>
                                    <Card className={`profileCardRow2`}>
                                        <Card.Body className="profileCardBodyRow2">
                                            <Card.Title className="characterStrength">Charisma</Card.Title>
                                            <p className="strengthNumber" onClick={handleEdit}>{character.charisma}</p>
                                        </Card.Body>
                                    </Card>
                                    <Card className={`profileCardBonus`}>
                                        <Card.Body className="profileCardBodyBonus">
                                            <Card.Title className="characterStrengthBonus">{character.charisma_bonus}</Card.Title>

                                        </Card.Body>
                                    </Card>
                                </Col>

                            </Row>
                            <SkillBonuses skills={skills} skillCheck={skillCheck} />
                        </Col>
                    </Row>
                </>
            )
        } else if (editable === true) {
            return (
                <>

                    <CharacterNavBar />
                    <Row>
                        <Col className="infoCol" sm={3}>
                            <div>



                                <Row>
                                    <Image roundedCircle className="profileImage" src={character.image}></Image>
                                    <p className="characterName"><textarea className="characterNameEdit" onChange={handleEvtChange} id="characterName" value={character.character_name}></textarea></p>

                                </Row>
                                <p className="characterDescription">Description: </p>
                                <textarea className="characterDescriptionEdit" onChange={handleEvtChange} id="description" value={character.description}></textarea>
                                <p className="characterLevel">Level: <textarea className="characterInfoEdit" onChange={handleEvtChange} id="level" value={character.level}></textarea></p>
                                <p className="characterLevel">Race: <a className="infoText">{character.race?.name}</a></p>
                                <p className="characterExperience">Experience: <textarea className="characterInfoEdit" onChange={handleEvtChange} id="experience" value={character.experience}></textarea></p>
                                <p className="characterAlignment">Alignment: <textarea className="characterInfoEdit" onChange={handleEvtChange} id="alignment" value={character.alignment?.name}></textarea></p>
                                <p className="characterSkills">Proficient Skills:<br></br>
                                    <a className="infoTextSkills"><CharacterSkills characterSkills={character.skills} /></a></p>
                                <p className="characterProficiency">Proficiency bonus: <textarea className="characterInfoEdit" onChange={handleEvtChange} id="proficiencyBonus" value={character.proficiencyBonus}></textarea></p>
                                <p className="characterSpellcastingAbility">Spellcasting Ability: <textarea className="characterInfoEdit" onChange={handleEvtChange} id="spellcastingAbility" value={character.character_class?.spellcasting_ability}></textarea></p>
                                <p className="characterSpellSaveDC">Spell Save DC: <textarea className="characterInfoEdit" onChange={handleEvtChange} id="spellSaveDC" value={character.spell_save_dc}></textarea></p>
                                <p className="characterSpellAttackBonus">Spell Attack Bonus: <textarea className="characterInfoEdit" onChange={handleEvtChange} id="spellAttackBonus" value={character.spell_attack_bonus}></textarea></p>

                            </div>
                        </Col>
                        <Col className="profileStatCol">
                            <Row className="profileStatRow">


                                <Col>
                                    <Row>
                                        <Button onClick={handleEditSave} className="profileEditBtn">
                                            <strong>Save Edits</strong>
                                        </Button>
                                        <div className="HitPointContainer">
                                            <p className="hitPointsLabel">Hit Points</p>
                                            <Image roundedCircle className="hitPointsImage" src="http://res.cloudinary.com/dgllrw1m3/image/upload/v1596428401/gold_ring_tvyezp.png" />
                                            <p className="hitPoints"> <textarea className="hitPointsEdit" onChange={handleEvtChange} id="hitPoints" value={character.hit_points}></textarea></p>
                                        </div>
                                    </Row>
                                    <Card className={`profileCardEdit`}>
                                        <Card.Body className="profileCardBody">
                                            <Card.Title className="characterStrength">Strength</Card.Title>
                                            <p className="strengthNumber"><textarea className="statTextEdit" onChange={handleEvtChange} id="strength" value={character.strength}></textarea></p>
                                        </Card.Body>
                                    </Card>
                                    <Card className={`profileCardBonus`}>
                                        <Card.Body className="profileCardBodyBonus">
                                            <Card.Title className="characterStrengthBonus">{character.strength_bonus}</Card.Title>

                                        </Card.Body>
                                    </Card>

                                    <Card className={`profileCardRow2`}>
                                        <Card.Body className="profileCardBodyRow2">
                                            <Card.Title className="characterStrength">Intelligence</Card.Title>
                                            <p className="strengthNumber"><textarea className="statTextEdit" onChange={handleEvtChange} id="intelligence" value={character.intelligence}></textarea></p>
                                        </Card.Body>
                                    </Card>
                                    <Card className={`profileCardBonus`}>
                                        <Card.Body className="profileCardBodyBonus">
                                            <Card.Title className="characterStrengthBonus">{character.intelligence_bonus}</Card.Title>

                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <p className="characterInitiativeTitle">Initiative</p>
                                    <Card className={`profileCardInitiative`}>
                                        <Card.Body className="profileCardBodyInitiative">

                                            <p className="initiativeNumber">{character.dexterity_bonus}</p>
                                        </Card.Body>
                                    </Card>
                                    <Card className={`profileCardMiddle`}>
                                        <Card.Body className="profileCardBody">
                                            <Card.Title className="characterStrength">Dexterity</Card.Title>
                                            <p className="strengthNumber"><textarea className="statTextEditMiddle" onChange={handleEvtChange} id="dexterity" value={character.dexterity}></textarea></p>
                                        </Card.Body>
                                    </Card>
                                    <Card className={`profileCardBonus`}>
                                        <Card.Body className="profileCardBodyBonus">
                                            <Card.Title className="characterStrengthBonus">{character.dexterity_bonus}</Card.Title>

                                        </Card.Body>
                                    </Card>
                                    <Card className={`profileCardRow2`}>
                                        <Card.Body className="profileCardBodyRow2">
                                            <Card.Title className="characterStrength">Wisdom</Card.Title>
                                            <p className="strengthNumber"><textarea className="statTextEditMiddle" onChange={handleEvtChange} id="wisdom" value={character.wisdom}></textarea></p>
                                        </Card.Body>
                                    </Card>
                                    <Card className={`profileCardBonus`}>
                                        <Card.Body className="profileCardBodyBonus">
                                            <Card.Title className="characterStrengthBonus">{character.wisdom_bonus}</Card.Title>

                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col className="armorClassCol">
                                    <div className="armorClassContainer">
                                        <p className="ArmorClassLabel">Armor Class</p>
                                        <Image className="armorClassImg" src="http://res.cloudinary.com/dgllrw1m3/image/upload/v1596429468/darkenedShield_g5ypu5.png" />
                                        <p className="armorClassEdit" > <textarea className="armorClassTextEdit" onChange={handleEvtChange} id="armorClass" value={character.armor_class}></textarea></p>
                                    </div>
                                    <Card className={`profileCardEditEnd`}>
                                        <Card.Body className="profileCardBody">
                                            <Card.Title className="characterStrength">Constitution</Card.Title>
                                            <p className="strengthNumber"><textarea className="statTextEditEnd" onChange={handleEvtChange} id="constitution" value={character.constitution}></textarea></p>
                                        </Card.Body>
                                    </Card>
                                    <Card className={`profileCardBonus`}>
                                        <Card.Body className="profileCardBodyBonus">
                                            <Card.Title className="characterStrengthBonus">{character.constitution_bonus}</Card.Title>

                                        </Card.Body>
                                    </Card>
                                    <Card className={`profileCardRow2`}>
                                        <Card.Body className="profileCardBodyRow2">
                                            <Card.Title className="characterStrength">Charisma</Card.Title>
                                            <p className="strengthNumber"><textarea className="statTextEditEnd" onChange={handleEvtChange} id="charisma" value={character.charisma}></textarea></p>
                                        </Card.Body>
                                    </Card>
                                    <Card className={`profileCardBonus`}>
                                        <Card.Body className="profileCardBodyBonus">
                                            <Card.Title className="characterStrengthBonus">{character.charisma_bonus}</Card.Title>

                                        </Card.Body>
                                    </Card>
                                </Col>

                            </Row>
                            <SkillBonuses skills={skills} skillCheck={skillCheck} />
                        </Col>
                    </Row>
                </>
            )
        }
    }

}

export default CharacterProfile