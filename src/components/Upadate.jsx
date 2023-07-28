import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UserReduser';


function Upadate() {
    const {id} = useParams();
    const users = useSelector((state)=>state.users);
    const existingUser = users.filter(f=>f.id == id);
    const {name,email} = existingUser[0]; 
    const [uname,setName] = useState(name);
    const [uemail,setEmail] = useState(email);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleUpdate = (event)=>{
    event.preventDefault();
    dispatch(updateUser({
        id:id,
        name:uname,
        email:uemail
    }))
    navigate('/')
    }
  return (
    <div>
    <form onSubmit={handleUpdate}>
        <div>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' value={uname} onChange={e=>setName(e.target.value)}></input>
        </div>
        <div>
            <label htmlFor='email'>Email:</label>
            <input type='email' name='email' value={uemail} onChange={e=>setEmail(e.target.value)}></input>
        </div>
        <button className='btn btn-info'>Submit</button>
    </form>
</div>
  )
}

export default Upadate