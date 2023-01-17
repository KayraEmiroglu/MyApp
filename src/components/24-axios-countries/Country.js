import React from 'react'

const Country = (props) => {

    const{ccn3, flag,name, population, capital,currencies}= props;

  return (
    <>
        <td>{ccn3}</td>
        <td><img src={flag} alt="" /></td>
        <td>{name}</td>
        <td>{population}</td>
        <td>{capital}</td>
        <td>{currencies}</td>
        
    </>
  )
}

export default Country