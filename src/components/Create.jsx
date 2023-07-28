import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { addUser } from './UserReduser';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

function Create() {
    const [name,setName] = useState(['']);
    const [email,setEmail] = useState(['']);

    const ppinputRef = useRef();
    const videoRef = useRef();
    const [video,setVideo] = useState(["./videos/video.jpg"]);
    const [profilePic,setProfilePic] = useState(["./images/profilepic.jpg"]);
    const users = useSelector((state)=>state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event)=>{
    event.preventDefault();
    dispatch(addUser({id:users[users.length-1].id+1,name,email,profilePic,video}));
    navigate('/')
    }
  return (
    <div>
      <Link to="/create" className='btn btn-success my-3'>Enter Student Details</Link>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' onChange={(e)=>{
                    setName(e.target.value)
                }}></input>
            </div>
            <div>
                <label htmlFor='class'>Class:</label>
                <input type='text' name='class' onChange={(e)=>{
                setEmail(e.target.value);
                }}></input>
            </div>
            <div>
                <label >Profile Pic</label>
                <input type='file' ref={ppinputRef} onChange={()=>{
                    let selectedurl = URL.createObjectURL(ppinputRef.current.files[0]);
                    setProfilePic(selectedurl);
                }}></input>
            </div>
            <div>
                <label >Video</label>
                <input type='file' ref={videoRef} onChange={()=>{
                    let selectedurl =URL.createObjectURL(videoRef.current.files[0]);
                    setVideo(selectedurl);
                }}></input>
            </div>
            <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th id='email'>Class</th>
                    <th className='pic'>Profile Pic</th>
                    <th className='pic'>Video</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user1,index)=>(
                    <tr key={index}>
                    <td>{user1.id}</td>
                    <td>{user1.name}</td>
                    <td>{user1.email}</td>
                    <td><img src={profilePic} alt=''></img></td>
                    <td><video src={video} controls muted ></video></td>
                    </tr>
                ))}
            </tbody>
        </table>
            
            {/* <div>
                <img src={profilePic} alt=''></img>
            </div> */}
            
            {/* <div>
                <video src={video} controls muted ></video>
            </div> */}
            {/* <div>
            {name.map((obj)=>{
             return <h5>{obj.name1}</h5>
            })}
            {email.map((obj)=>{
             return <h5>{obj.email1}</h5>
            })}
            {profilePic.map((obj)=>{
             return <img alt=''>{obj.pp1}</img>
            })}
            </div> */}
            <button className='btn btn-info'>Submit</button>
        </form>
    </div>
  )
}

export default Create