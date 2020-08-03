import React, {useState} from "react"
import {Form, Button, Card, ProgressBar} from "react-bootstrap"
import "./BaseInfo.css"


const BaseInfo = props => {
    
    const [info, setInfo] = useState({characterName: "", level: 0, description: ""})
   

    const handleBaseInfo = () => {
        sessionStorage.setItem("characterName", info.characterName)
        sessionStorage.setItem("level", info.level)
        sessionStorage.setItem("description", info.description)
        props.history.push("/Stats")
    }

    const handleBack = () => {
        props.history.push("/Race")

    }
    const handleFieldChange = (event) => {
        const stateToChange = { ...info };
        stateToChange[event.target.id] = event.target.value;
        setInfo(stateToChange);
    }
   

    return (
        <>
        <ProgressBar className="characterCreationProgress" animated variant="danger" now="42" ></ProgressBar>
        <div className="baseInfo">
        
        
        <div className="baseInfodiv">
            
        <Button 
            className="backButton"
            variant="custom" 
            type="submit"
            onClick={handleBack}>
              Back
            </Button>
        </div>
        
        <Form >
        <div>
            <Form.Group>
              <label className="characterNamelabel">Character Name</label>
              <Form.Control className="characterNameForm"
                onChange={handleFieldChange}
                type="text"
                id="characterName"
                placeholder="Character name"
              />
            </Form.Group>
            <Form.Group>
              <label className="characterLevellabel">Character Level</label>
              <Form.Control className="characterLevelForm"
                onChange={handleFieldChange}
                as="select"
                name="select"
                id="level"
                
                
            
              >
              <option value="">Choose...</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <label className="characterDescriptionlabel">Character Description</label>
              <Form.Control className="characterDescriptionForm"
                onChange={handleFieldChange}
                as="textarea"
                rows="4"
                id="description"
                placeholder="Character Description"
              />
            </Form.Group>
            </div>
            
            </Form>
            <div>
            <Button 
            className = "nextButton"
            variant="custom" 
            type="submit"
            onClick={handleBaseInfo}>
              Next
            </Button>
            </div>
           
            
        </div>
        </>
    )
}

export default BaseInfo