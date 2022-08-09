import React, { useContext, useEffect, useState } from "react"
import { Row, Col, Image, Button, Card } from "react-bootstrap"

export const SkillBonuses = ({ skills, skillCheck }) => {
    return (
        <Row className="skillRow">
            <Col className="strengthCol">
                <Card className="skillBonusCard">
                    <Card.Title className="strengthSkillTitle">Strength Skills</Card.Title>
                    {skills.Strength?.map(skill =>

                        <p className="skillcharacter"> {skill.name}: {skillCheck("strength", skill)} </p>

                    )}
                </Card>
            </Col>
            <Col className="dexterityCol">
                <Card className="skillBonusCard">
                    <Card.Title className="dexteritySkillTitle">Dexterity Skills</Card.Title>
                    {skills.Dexterity?.map(skill =>

                        <p className="skillcharacter"> {skill.name}: {skillCheck("dexterity", skill)} </p>

                    )}
                </Card>
            </Col>

            <Col className="intelligenceCol">
                <Card className="skillBonusCard">
                    <Card.Title className="intelligenceSkillTitle">Intelligence Skills</Card.Title>
                    {skills.Intelligence?.map(skill =>

                        <p className="skillcharacter"> {skill.name}: {skillCheck("intelligence", skill)} </p>

                    )}
                </Card>
            </Col>
            <Col className="wisdomCol">
                <Card className="skillBonusCard">
                    <Card.Title className="wisdomSkillTitle">Wisdom Skills</Card.Title>
                    {skills.Wisdom?.map(skill =>

                        <p className="skillcharacter"> {skill.name}: {skillCheck("wisdom", skill)} </p>

                    )}
                </Card>
            </Col>
            <Col className="charismaCol">
                <Card className="skillBonusCard">
                    <Card.Title className="charismaSkillTitle">Charisma Skills</Card.Title>
                    {skills.Charisma?.map(skill =>

                        <p className="skillcharacter"> {skill.name}: {skillCheck("charisma", skill)} </p>

                    )}
                </Card>
            </Col>
        </Row>
    )
}
