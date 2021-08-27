import axios from 'axios'
import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'

function AddUser() {
    let history = useHistory()
    const [user,setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    })
     
    const {name,username,email,phone,website}=user
    
    const onInputChange=(e)=>{

        setUser({...user,[e.target.name]:e.target.value})
    }
    const onSubmit= async e=>{
        e.preventDefault();
        await axios.post("http://localhost:3001/users",user)
        history.push("/")
    }

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
               <h2 className="text-center mb-4"> Add A User</h2>
               <form onSubmit={e=> onSubmit(e)}>
                  <div className="form-group">
                    <input type="text"
                           className="form-control form-control-lg"
                           placeholder="Enter your Name"
                           name="name"
                           value={name}
                           onChange={e=> onInputChange(e)}
                    />
                  </div>
                
                  <div className="form-group">
                    <input type="text"
                           className="form-control form-control-lg"
                           placeholder="Enter your User Name"
                           name="username"
                           value={username}
                           onChange={e=> onInputChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <input type="text"
                           className="form-control form-control-lg"
                           placeholder="Enter your E-mail"
                           name="email"
                           value={email}
                           onChange={e=> onInputChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <input type="text"
                           className="form-control form-control-lg"
                           placeholder="enter your phone number"
                           name="phone"
                           value={phone}
                           onChange={e=> onInputChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <input type="text"
                           className="form-control form-control-lg"
                           placeholder="Enter your website"
                           name="website"
                           value={website}
                           onChange={e=> onInputChange(e)}
                    />
                  </div>

                  <button className="btn btn-primary btn-block">Add User</button>

               </form>
            </div>   
        </div>
    )
}

export default AddUser

