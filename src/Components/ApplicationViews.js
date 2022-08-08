import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./Dashboard/Dashboard"
// import InitialCharacterPrompt from "./InititalCharacterPrompt/InitialCharacterPrompt"
// import Class from "./CharacterCreation/Class/Class"
// import CharacterType from "./CharacterCreation/CharacterType/CharacterType"
// import Race from "./CharacterCreation/Race/Race"
// import BaseInfo from "./CharacterCreation/BaseInfo/BaseInfo"
// import Stats from "./CharacterCreation/Stats/Stats"
// import HitPoints from "./CharacterCreation/HitPoints/HitPoints"
// import FinalDetails from "./CharacterCreation/FinalDetails/FinalDetails"
// import CharacterProfile from "./CharacterProfile/CharacterProfile"
// import SpellBook from "./Spellbook/Spellbook"
// import SpellBookNew from "./Spellbook/SpellBookNew"
// import SpellDetails from './Spellbook/SpellDetails';
// import SpellBookDetails from './Spellbook/SpellBookDetails';
// import Inventory from "./Inventory/Inventory"
// import InventoryNew from "./Inventory/InventoryNew"
// import InventoryDetails from "./Inventory/InventoryDetails"
// import EquipmentDetails from "./Inventory/EquipmentDetails"
// import InventoryCustom from "./Inventory/InventoryCustom"

const ApplicationViews = () => {



   return (
      <>
         <Routes>

            <Route
               exact
               path="/dashboard"
               element={<Dashboard />} />
            {/* <Route
               exact
               path="/FriendCharacters"
               element={<Dashboard friendPage={friendPage} {...props} />} />
            <Route
               exact
               path="/CharacterPrompt"
               element={<InitialCharacterPrompt {...props} />}

            />
            <Route
               exact
               path="/Class"
               element={<Class {...props} />}
            />
            <Route
               exact
               path="/CharacterType"
               element={<CharacterType {...props} />}

            />
            <Route
               exact
               path="/Race"
               element={<Race {...props} />}
            />
            <Route
               exact
               path="/BaseInfo"
               element={<BaseInfo {...props} />}
            />
            <Route
               exact
               path="/Stats"
               element={<Stats {...props} />}
            />
            <Route
               exact
               path="/HitPoints"
               element={<HitPoints {...props} />}

            />
            <Route
               exact
               path="/FinalDetails"
               element={<FinalDetails {...props} />}
            />
            <Route
               exact
               path="/CharacterProfile"
               element={<CharacterProfile {...props} />}
            />
            <Route
               exact
               path="/SpellBook"
               element={<SpellBook {...props} />}

            />
            <Route
               exact
               path="/SpellBookNew"
               element={<SpellBookNew {...props} />}

            />
            <Route
               exact
               path="/SpellDetails"
               element={<SpellDetails {...props} />}
            />
            <Route
               exact
               path="/SpellBookDetails"
               element={<SpellBookDetails {...props} />}
            />
            <Route
               exact
               path="/Inventory"
               element={<Inventory {...props} />}
            />
            <Route
               exact
               path="/InventoryNew"
               element={<InventoryNew {...props} />}
            />
            <Route
               exact
               path="/InventoryDetails"
               element={<InventoryDetails {...props} />}
            />
            <Route
               exact
               path="/EquipmentDetails"
               element={<EquipmentDetails {...props} />}
            />
            <Route
               exact
               path="/InventoryCustom"
               element={<InventoryCustom {...props} />}
            /> */}
         </Routes>
      </>
   )
}


export default ApplicationViews