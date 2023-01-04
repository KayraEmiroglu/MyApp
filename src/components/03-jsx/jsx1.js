import React from 'react'

const Jsx1 = () => {

    const message = "Class isimleri className içinde verilir ve attribute'lar camelCase olarak yazilir"

  return (
    <>
        <div>jsx1</div>
        <div>Tüm elementler tek bir root element içinde olmalı</div>
        <div className='title'>{message}</div>
    </>
  )
}

export default Jsx1