import React from 'react'

const Jsx5 = () => {
    const names = ["Ali","Veli","Ayşe","Fatma"];

  return (
    <div>
        <ul>
            {names.map((n,i)=><li key={i}>{n}</li>)}
            
        </ul>
    </div>
  )
}

export default Jsx5