import React from 'react'

function Index({toys}) {
  return (
    <div style={{backgroundColor:'lightgreen',width:'100vw',height:'100vh'}}> 
    <h2 style={{textAlign:'center'}}>All Toys</h2>
    {toys.map((toy, i) => {
      return (
        <li key={i}  style={{
            
            margin: "1em",
            textAlign: "center",
            display:"flex",
            justifyContent: 'space-evenly'
          }}>
          <a href={`/toys/${toy._id}`} style={{fontWeight:'bold',fontSize:'larger',color:'black',textDecoration:'none'}}>{toy.name}</a>          
          <form action={`/toys/${toy._id}?_method=DELETE`} method="POST">
            <input type="submit" value="Delete" style={{backgroundColor:'crimson', color:'lightgreen',borderColor:'black', borderRadius:'5px',fontWeight:'bold',padding:'3px 2em',cursor:'pointer'}} />
          </form>
          <a href={`/toys/${toy._id}/edit`}>
            <button  style={{backgroundColor:'crimson', color:'lightgreen',borderColor:'black', borderRadius:'5px',fontWeight:'bold',padding:'3px 2em',cursor:'pointer'}}>Edit</button>
          </a>
        </li>
      );
    })}
    <a href="/toys/new" style={{backgroundColor:'darkgreen', fontWeight:'bold',textDecoration:'none',color:'lightgreen',marginLeft:'46%',borderRadius:'10px' ,padding:'6px 1em'}}>Add New Toy</a></div>
  )
}

export default Index