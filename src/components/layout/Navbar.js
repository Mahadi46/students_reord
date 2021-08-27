import React,{useState,useCallback} from 'react'
import {Link,NavLink} from 'react-router-dom'
import axios from 'axios'

function Navbar(props) {
    
    const [searchTerm,setSearchTerm]=useState([])
    const [temp,setTemp]=useState("")
     
     const handleChange =  (value)=>{
         axios.get("http://localhost:3001/users")
        .then(res=>{
            let result=res.data
            
        let newPosts = result.filter((res)=>{
        return (res.name.toLowerCase().indexOf(value.toLowerCase())) >-1 });
      
       setSearchTerm(newPosts)

        })
        

       
  }

  const debounce = (func)=>{
    let timer;
    return function(...args){
      const context = this;
      if(timer)clearTimeout(timer);
      timer = setTimeout(()=>{
        timer=null;
        func.apply(context,args);
      },500);
    }
  }

  const optimizedFn = useCallback(debounce(handleChange),[]);





    return (
        
         <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
           <div className="container">
                  <Link className="navbar-brand" href="/">Student Info</Link>
                  <button className="navbar-toggler"
                     type="button" data-bs-toggle="collapse" 
                     data-bs-target="#navbarSupportedContent"
                     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                  </button>

             
                  <div className="collapse navbar-collapse">
                      <ul className="navbar-nav mr=auto">
                          <li className="nav-item ">
                             <NavLink className="nav-Link " aria-current="page" exact to="/">Home</NavLink>
                          </li>
                         
                         
                      </ul>
                  </div>
                  <div className="Search-items">
                  <input type="text" placeholder="search item.." onChange={(e)=>{optimizedFn(e.target.value);setTemp(e.target.value)}} />
                  {temp?
                <div className="showItems">
                 {
                  searchTerm.map((user)=>{
                   return (
                     <li className="list-group-item">{user.name}</li>
                        
                       
                        
                    )})
              }

           </div>:null}

      </div>
              
                  <Link className="btn btn-outline-light" to="/add" >Add user</Link>
                  
              
         </div>
     </nav>
      
            
      
    )
}

export default Navbar
