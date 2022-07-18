import React from 'react'
import { useNavigate } from 'react-router-dom'

const ToolbarArena = () => {

    const nav = useNavigate()

  return (
    <div className='d-flex space-btw'>
      <button onClick={() => nav("/shop")}>Shop</button>
      <button onClick={() => nav("/")}>Logout</button>
    </div>
  )
}

export default ToolbarArena
