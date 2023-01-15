import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadData = async () => {
        const resp = await axios.get("https://restcountries.com/v3.1/all");   
        setCountries(resp.data)
    }

    useEffect(() => {
        loadData();    
    }, [])
    

  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Bayrak</th>
        <th>Ülke</th>
        <th>Nüfus</th>
        <th>Baskent</th>
      </tr>
    </thead>
    <tbody>
    {countries.map(i=>{
        
      <tr>
        <td>{i}</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>@mdo</td>
      </tr>
    })}
    
      
    </tbody>
  </Table>
  )
}

export default Countries