import React from 'react'

function Edit({toy}) {
  return (
    <div style={{display:'flex', alignItems:'center',flexFlow:'column',backgroundColor:'lightgreen',textAlign:'right',width:'100vw',height:'100vh'}}>
        <h1>Add Changes</h1>
        <form action={`/toys/${toy._id}?_method=PUT`} method="POST" style={{fontSize:'large',fontWeight:'bold'}}>
        Name: <input type="text" name="name" defaultValue={toy.name} style={{margin:"1em"}} /><br/>       
        Price: <input type="number" name="price" defaultValue={toy.price} style={{margin:"1em"}} /> <br/>  
        Image: <input type="text" name="img" defaultValue={toy.img}  style={{margin:"1em"}}/> <br/>        
        Discription: <input type="text" name="discription" defaultValue={toy.discription} style={{margin:"1em"}}/> <br/>        
        <input type="submit"  value="Submit" style={{borderRadius:'15px',borderColor:'none',marginRight:'8%',justifySelf:'center',marginTop:'1em',fontWeight:'bold',fontSize:'large',backgroundColor:'crimson',color:'lightgreen',cursor:'pointer',padding:'5px 3em'}}/>
      </form>
    </div>
  )
}

export default Edit