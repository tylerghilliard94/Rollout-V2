import React, {useState, useEffect} from "react"
import { Card, Row, Button } from "react-bootstrap"
import APIManager from "../Modules/APIManager"


const Money = () => {
    const [money, setMoney] = useState([])
    const [editable, setEditable] = useState(false)


    const handleEvtChange = (event) => {
        const stateToChange = { ...money};
        stateToChange[event.target.id] = parseInt(event.target.value);
        setMoney(stateToChange);
        
    }
     useEffect(() => {
        APIManager.GetAll("moneyBags").then((response) => {
            let check = false
            let money = {}
            money.gp = 0
            money.sp = 0
            money.cp = 0
            money.characterId = parseInt(sessionStorage.characterId)
            response.forEach(bag => {
                
                if(bag.characterId === parseInt(sessionStorage.characterId)){
                    check=true
                }
            })
         
            
            if (check === true){
                APIManager.GetCharactersSpells("moneyBags").then((response) => {
                  
                    setMoney(response[0])
                })
            }else{
                APIManager.Post("moneyBags", money).then(() => {
                    APIManager.GetCharactersSpells("moneyBags").then((response) => {
                        setMoney(response[0])
                    })
                })
            }
        })
     }, [])

     const handleEdit = () => {
        setEditable(true)
    }
    const handleEditSave = () => {
        
        APIManager.Update("moneyBags", money.id, money).then(() => {
            setEditable(false)

        })
    }
    if(editable){

    
    return (
        <Card>
            <Row>
                <Card.Title>Coin Purse</Card.Title>
                <Button onClick={handleEditSave}>
                    Save Coins
                </Button>
            </Row>
            <Row> 
    <p>GP: <textarea id="gp"onChange={handleEvtChange}>{money.gp}</textarea></p> <p>SP: <textarea id="sp" onChange={handleEvtChange}>{money.sp}</textarea></p> <p>CP: <textarea id="cp" onChange={handleEvtChange}>{money.cp}</textarea></p>
            </Row>
        </Card>
    )
    }else {
        return(
            <Card>
              
            <Row>
                <Card.Title>Coin Purse</Card.Title>
            </Row>
            <Row> 
        <p>GP: <a onClick={handleEdit} >{money.gp}</a></p> <p>SP: <a onClick={handleEdit}>{money.sp}</a></p> <p>CP: <a onClick={handleEdit}>{money.cp}</a></p>
            </Row>
        </Card>
        )
    }
}

export default Money