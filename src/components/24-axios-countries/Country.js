import React from 'react'

const Country = (props) => {

    const{ccn3, flag,name:{common}, population, capital}= props;

  return (
    <>
        <td>{ccn3}</td>
        <td>{flag}</td>
        <td>{common}</td>
        <td>{population}</td>
        <td>{capital}</td>
    </>
  )
}

export default Country