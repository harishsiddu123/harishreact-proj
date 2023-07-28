import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { addUser } from './UserReduser';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// import { useRef } from 'react';

function Book() {
    const [name,setName] = useState(['']);
    const [email,setEmail] = useState(['']);
    const [publication,setPublication] = useState(['']);
    const [date,setDate] = useState(['']);
    const [endDate,setEndDate] = useState(['']);
    

    // const ppinputRef = useRef();
    // const videoRef = useRef();
    // const [video,setVideo] = useState(["./videos/video.jpg"]);
    // const [profilePic,setProfilePic] = useState(["./images/profilepic.jpg"]);
    const users = useSelector((state)=>state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event)=>{
    event.preventDefault();
    dispatch(addUser({id:users[users.length-1].id+1,name,email,publication,date,endDate}));
    navigate('/')
    }
  return (
    <div>
     <Link to="/book" className='btn btn-success my-3'>Enter Book Details </Link>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>BookName:</label>
                <input type='text' name='name' onChange={(e)=>{
                    setName(e.target.value)
                }}></input>
            </div>
            <div>
                <label htmlFor='email'>Author:</label>
                <input type='text' name='email' onChange={(e)=>{
                setEmail(e.target.value);
                }}></input>
            </div>
            <div>
                <label htmlFor='public'>Publication:</label>
                <input type='text' name='public' onChange={(e)=>{
                    setPublication(e.target.value);
                }}></input>
            </div>
            <div>
                <label htmlFor='Date'>Start Date:</label>
                <input type='date' name='Date' onChange={(e)=>{
                    setDate(e.target.value);
                }}></input>
            </div>
            <div>
                <label htmlFor='EndDate'>End Date:</label>
                <input type='date' name='EndDate' onChange={(e)=>{
                    setEndDate(e.target.value);
                }}></input>
            </div>
            <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Book Name</th>
                    <th >Author</th>
                    <th className='public'>publication</th>
                    <th className='public'>Start Date</th>
                    <th className='public'>End Date</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user2,index)=>(
                    <tr key={index}>
                    <td>{user2.id}</td>
                    <td>{user2.name}</td>
                    <td>{user2.email}</td>
                    <td>{user2.publication}</td>
                    <td>{user2.date}</td>
                    <td>{user2.endDate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
            {/* <div>
                <label>Profile Pic</label>
                <input type='file' ref={ppinputRef} onChange={()=>{
                    let selectedurl = URL.createObjectURL(ppinputRef.current.files[0]);
                    setProfilePic(selectedurl);
                }}></input>
            </div>
            <div>
                <img src={profilePic} alt=''></img>
            </div> */}
            {/* <div>
                <label>Video</label>
                <input type='file' ref={videoRef} onChange={()=>{
                    let selectedurl =URL.createObjectURL(videoRef.current.files[0]);
                    setVideo(selectedurl);
                }}></input>
            </div>
            <div>
                <video src={video} controls muted ></video>
            </div> */}
            <button className='btn btn-info'>Submit</button>
        </form>
    </div>
  )
}

export default Book