import React from 'react'
import Welcome from './Welcome'

const Greetings = () => {


  return (
    <div className='greetings'>
        <h1>Greeting Component</h1>
        <Welcome firstName="Ali" lastName="Gel"/>
        <Welcome firstName="Ayşe" lastName="Gel"/>
        
    </div>
  )
}

export default Greetings