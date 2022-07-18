import React from 'react'

const MonsterCard = ({monster}) => {
  return (
    <div>
      <img src={monster.image}/>
      <h3>name: {monster.name}</h3>
      <h3>maxDamage: {monster.maxDamage}</h3>
      <h3>maxItemsDrop: {monster.maxItemsDrop}</h3>
    </div>
  )
}

export default MonsterCard
