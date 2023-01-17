import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Spinner, Table } from 'react-bootstrap'
import Country from './Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadData = async () => {
      try {
        const resp = await axios.get("https://restcountries.com/v3.1/all");

        

        const arr = resp.data.map((item)=>({
            ccn3: item.ccn3,
            flag: item.flags.png,
            name: item.name.common,
            population: item.population,
            capital: item.capital?.join("-"),
            currencies: item.currencies ? Object.keys(item.currencies).map(cur=>item.currencies[cur].name).join(`-`) : ""
          
        }))

        setCountries(arr);
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        loadData().catch((err) => {
          console.log(err);
        }).finally(() => {
          setLoading(false);
        });
      }, 5000);
      return () => clearTimeout(timeoutId);
    }, []);

  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Bayrak</th>
        <th>Ülke</th>
        <th>Nüfus</th>
        <th>Baskent</th>
        <th>Para Birimi</th>
      </tr>
    </thead>
    <tbody >
      
     <tr>
      <td colSpan="5">
        {loading && <Spinner animation="border" variant="primary"/>} 
      </td>
    </tr>
    {countries.map((ulke,i)=>(
      <tr key={i}>
        <Country {...ulke} />
      </tr>
    ))}
    

    </tbody>
  </Table>
  )
}

export default Countries