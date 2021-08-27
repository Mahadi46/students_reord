import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Home() {
    const [users,setUsers]=useState([])

    useEffect(()=>{
        loadUsers();
    },[])

    const loadUsers = async ()=>{
        const result = await axios.get("http://localhost:3001/users")
        setUsers(result.data.reverse())
        //console.log(typeof result.data)
        console.log(typeof users)
    }
     const deleteUser= async (id)=>{
        await axios.delete(`http://localhost:3001/users/${id}`)
        loadUsers();
     }
    return (
        <div className='container'>
          <div className='py-4'>
             <h1>Home</h1>
             <table className="table boarder shadow">
             <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">User Name</th>
                  <th scope="col">Email</th>
                  <th>Action</th>
               </tr>
             </thead>
             <tbody>
               {
                 users.map((user,index)=>(
                 <tr>
                     <th scope="row">{index+1}</th>
                     <td>{user.name}</td>
                     <td>{user.username}</td>
                     <td>{user.email}</td>
                     <td>
                     <Link className="btn btn-primary mr-2"
                     to={`/user/${user.id}`}>View</Link>
                     <Link className="btn btn-outline-success mr-2" 
                     to={`/edit/${user.id}`}>Edit</Link>
                     <Link className="btn btn-danger" 
                           onClick={()=>deleteUser(user.id)}>
                     Delete</Link>
                     </td>
                 </tr>

                 ))
               }
            </tbody>
  
          </table>
        </div>
          
    </div>
    )
}

export default Home
