import React from 'react'

function Show({toy}) {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',fontSize:'large',fontWeight:'bold',backgroundColor:'lightgreen',width:'100vw',height:'100vh'}}>
    <h4>{toy.name}</h4>
    <img src={toy.img} style={{width:'15em',height:'15em'}}/>    
    <p>Price:{toy.price}$</p>
    <p>{toy.description}</p>
    <a href="/toys" style={{ textDecoration:'none',
        backgroundColor:'crimson',        
        borderRadius:'50px',
        fontWeight:'bold',
        fontSize:'large',
        padding:'3px 2em',
        color:'lightgreen'}}>Back</a>
    </div>
  )
}

export default Show