import React from 'react'
import { Button } from 'react-bootstrap'

const Stateless = () => {

    let mode = "light";
    let classNames = "bg-light text-dark p-5";

    const setMode = (m)=>{
        if(mode==="dark"){
            classNames= "bg-dark text-light p-5";
        }else{
            classNames = "bg-light text-dark p-5";
        }
        document.getElementById("switcher").setAttribute("class",classNames);
    
        mode = m;
    }

    
    
  return (
    <div id='switcher' >
        
        <h1 className='text-center'>Dark/Light Mode Switcher</h1>
        <div className='d-flex justify-content-evenly mt-5'>
        <Button onClick={()=>setMode("dark")}>DarkMode</Button>
        <Button onClick={()=>setMode("light")}>LightMode</Button>
        </div>
    </div>
  )
}

export default Stateless