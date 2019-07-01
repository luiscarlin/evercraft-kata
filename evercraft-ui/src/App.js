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
      <input id={'new-character-name'}value={newPlayerName} onChange={(event) => setNewPlayerName(event.target.value)}/>
      <button id={'button-create-character'} onClick={createPlayer}>Create Character</button>
      <button id={"show-character-info"} onClick={() => toggleAllExpanded(!allExpanded)}>{allExpanded ? "Hide": "Show"} Character Info</button>
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
      <div id={'character-name'}>Name: {name}</div>
      {
        allExpanded &&
        <div>
          <div id={'character-armor'}>Armor Class: {armor}</div>
          <div id={'character-hp'}>Hit Points: {hp}</div>
        </div>
      }
    </div>
  )
}


export default App;
