import React, {useState} from 'react';
import './App.css';

function App() {
  const [attackerName, setAttackerName] = useState('')
  const [defenderName, setDefenderName] = useState('')
  const [attacker, setAttacker] = useState(null)
  const [defender, setDefender] = useState(null)

  function createAttacker() {
    attackerName.trim()

    if (attackerName !== "") {
      setAttacker({name: attackerName, armor: 10, hp: 5})
      setAttackerName('')
    }
  }

  function createDefender() {
    defenderName.trim()

    if (defenderName !== "") {
      setDefender({name: defenderName, armor: 10, hp: 5})
      setDefenderName('')
    }
  }
  
  return (
    <div className="app">
      <h1>Welcome to Evercraft</h1>
      <div className="versus-container">
        <div className="attacker">
          <h2>Attacker</h2>
          { 
            attacker 
            ? <Player {...attacker} type='attacker'/> 
            : <NewCharacter name={attackerName} setName={setAttackerName} createCharacter={createAttacker} type="attacker"/>
          }
        </div>
        <h1>VS</h1>
        <div className="defender">
          <h2>Defender</h2>
          { 
            defender 
            ? <Player {...defender} type='defender'/> 
            : <NewCharacter name={defenderName} setName={setDefenderName} createCharacter={createDefender} type='defender'/>
          }
        </div>
      </div>
    </div>
  );
}

const Player = ({name, armor, hp, type}) => {
  return (
    <div className={'character-card'}>
      <h2 id={`character-name-${type}`}>{name}</h2>
      <div>
        <p id={`character-armor-${type}`}>Armor Class: {armor}</p>
        <p id={`character-hp-${type}`}>Hit Points: {hp}</p>
      </div>
    </div>
  )
}

function NewCharacter({name, setName, createCharacter, type}) {
  return (
    <div className={'new-character'}>
      <div className="entry">
        <input id={`new-character-name-${type}`} value={name} placeholder="Name" onChange={(event) => setName(event.target.value)}/>
        <button id={`button-create-character-${type}`} onClick={createCharacter}>Create</button>
      </div>
    </div>
  )
}


export default App;
