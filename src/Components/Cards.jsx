import { useState } from "react";
import {Button} from "react-bootstrap";
const Cards =({ id, name, info, image, Remove })=>{
    const [read, setRead] = useState(false)
    const desc = read ? info : info.substring(0, 100) + "..."
    return(
   
                    <section key={id} className="d-flex my-2 border border-2 flex-column align-items-center"style={{height:"500px",width:"400px"}}>
                        <img src={image} alt="image1" className="h-50 w-100"/>
                        <h2 className="text-center">{name}</h2>
                        <p className="information">{desc} {read ? <span onClick={()=>{setRead(false)}} style={{cursor:'pointer',color:'#0984e3'}}>Read Less</span> : <span onClick={()=>{setRead(true)}} style={{cursor:'pointer',color:'#0984e3'}}>Read More</span> } </p>
                        <Button onClick={()=>{Remove(id)}}className="w-50">Remove</Button>
                    </section>
                )
            
            }
export default Cards;