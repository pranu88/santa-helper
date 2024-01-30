import React from 'react'

function Home() {
  return (
    <div style={{backgroundColor:'lightgreen',padding:'14em'}}>
        <h1 style={{textAlign:'center'}}>Welcome to Toys Store!</h1>
        <a href='/toys' 
        style={{textDecoration:'none',
        backgroundColor:'crimson',
        marginLeft:'45%',
        color:'white',
        fontWeight:'bold',
        borderRadius:'20px',
        padding:'10px'}}
        >Click Here</a>

    </div>
  )
}

export default Home