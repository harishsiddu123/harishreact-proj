import React from 'react'
import { useDispatch } from 'react-redux';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';
import { deleteUser } from './UserReduser';


function Home() {
    const users = useSelector((state)=>state.users);
    const dispatch = useDispatch();
    const handleDelete =(id)=>{
    dispatch(deleteUser({id:id}))
    }
  return (
    <div>
        <Link to="/create" className='btn btn-success my-3'>Create Student Details</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th id='email'>Class</th>
                    <th className='action'>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,index)=>(
                    <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>Upadte</Link>
                        <button onClick={()=>handleDelete(user.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                    </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div>
        <Link to="/book" className='btn btn-success my-3'>Create Book Details</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Book Name</th>
                    <th id='email'>Author</th>
                    <th className='action'>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,index)=>(
                    <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>Upadte</Link>
                        <button onClick={()=>handleDelete(user.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                    </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default Home