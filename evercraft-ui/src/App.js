import React, {useState} from 'react';
import './App.css';

function App() {
  const [players, addPlayer] = useState([])
  const [newPlayerName, setNewPlayerName] = useState('')

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
      {
        players.map((player, i) => (<Player {...player} key={i} />))
      }
    </div>
  );
}

const Player = ({name, armor, hp}) => {
  const [ expanded, toggle ] = useState(false)

  return (
    <div onClick={() => toggle(!expanded)}>
      <div id={'character-name'}>Name: {name}</div>
      {
        expanded &&
        <div>
          <div id={'character-armor'}>Armor Class: {armor}</div>
          <div id={'character-hp'}>Hit Points: {hp}</div>
        </div>
      }
    </div>
  )
}


export default App;
