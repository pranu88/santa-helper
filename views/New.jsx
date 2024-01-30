import React from 'react'

function New() {
  return (
    <div style={{display:'flex',textAlign:'right' ,alignItems:'center',flexFlow:'column',backgroundColor:'lightgreen',width:'100vw',height:'100vh'}}>
        <h1>Add New Toy</h1>
        <form action="/toys" method="POST" style={{fontWeight:'bold',fontSize:'large'}}>
        Name: <input type="text" name="name" style={{margin:"1em"}}/>  <br/>      
        Price: <input type="number" name="price" style={{margin:"1em"}}/><br/>   
        Image: <input type="text" name="img" style={{margin:"1em"}}/><br/>   
        Description: <input type="text" name="description" style={{margin:"1em"}}/>       
        <br />
        <input type="submit" value="Add" style={{borderRadius:'15px',marginRight:'7%',justifySelf:'center',marginTop:'1em',fontWeight:'bold',fontSize:'medium',padding:'5px 4em',backgroundColor:'crimson',cursor:'pointer',color:'lightgreen'}}/>
      </form>
    </div>
  )
}

export default New