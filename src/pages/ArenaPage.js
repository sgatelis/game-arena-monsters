import React, { useContext } from 'react'
import mainContext from '../context/mainContext'
import ToolbarArena from '../components/ToolbarArena'
import MonsterCard from '../components/MonsterCard'
import GameData from '../assets/gameData'
import { useNavigate } from 'react-router-dom'


const ArenaPage = () => {

    const {player, monster} = useContext(mainContext)

    const nav = useNavigate()

    function attack() {

    }

  return (
    <div>
        <ToolbarArena/>
        <div className='player'>           
            <img src={player.image}/>
            <h3>{player.race}</h3>
            <div>Health: {player.health}</div>
            <div>Damage: {player.damage}</div>
            <div>Gold: {player.gold}</div>
        </div>
        <button className='inventory' onClick={() => nav("/menu")}>Inventory</button>
        <button className='attack' onClick={attack}>Attack</button>

        <div>
            {GameData.monsters.map((x, i) => <MonsterCard monster={x} key={i} />)}
        </div>
    </div>
  )
}

export default ArenaPage
