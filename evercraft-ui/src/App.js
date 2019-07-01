import React, {useState} from 'react';
import './App.css';

function App() {
  const [players, addPlayer] = useState([])
  const [newPlayerName, setNewPlayerName] = useState('')
  const [allExpanded, toggleAllExpanded] = useState(false)

  function createPlayer() {
    let copyPlayers = [...players]
    copyPlayers.push({ name: newPlayerName, armor: 10, hp: 5 })
    addPlayer(copyPlayers)
    setNewPlayerName('')
  }
  
  return (
    <div className="App">
      <h1>Welcome to Evercraft</h1>
      <div className={'new-character'}>
        <input id={'new-character-name'} value={newPlayerName} onChange={(event) => setNewPlayerName(event.target.value)}/>
        <button id={'button-create-character'} onClick={createPlayer}>Create Character</button>
        <button id={"show-character-info"} onClick={() => toggleAllExpanded(!allExpanded)}>{allExpanded ? "Hide": "Show"} Character Info</button>
      </div>
      <div className='characters-container'>
      {
        players.map((player, i) => (<Player {...player} allExpanded={allExpanded}key={i} />))
      }
      </div>
    </div>
  );
}

const Player = ({name, armor, hp, allExpanded}) => {
  return (
    <div className={'character-card'}>
      <h2 id={'character-name'}>{name}</h2>
      {
        allExpanded &&
        <div>
          <p id={'character-armor'}>Armor Class: {armor}</p>
          <p id={'character-hp'}>Hit Points: {hp}</p>
        </div>
      }
    </div>
  )
}


export default App;
