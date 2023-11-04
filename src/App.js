
import "./components/Font.css";

import personicon from './person-icon.svg';

import library from './library.jpg';

import React, { useState } from "react"

const SearchUser = () => {
  const [users, setUsers] = useState([])
 
  const fetchData = e => {
    const query = e.target.value
    fetch(`https://jsonplaceholder.typicode.com/users?q=${query}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  return (
 
    <header className="App-header">
    <div >
      
      
            <nav class="navbar background"> 
            
                <ul class="nav-list"> 
                    
                    <li><a href="#Digital Library">Digital Library</a></li> 
                    <li><a href="#About Us">About Us</a></li> 
                    <li><a href="#Events">Events</a></li> 
                    <li><a href='#Contact Us'>Contact Us</a></li> 
                </ul> 
                <div class="rightNav"> 
                    <input type="text" name="search" id="search" /> 
                    <button class="btn btn-sm">Search</button> 
                </div> 
            
            
        </nav>
     
       
        <section class="section">
        <img src={library}   style={{ width: 1300, height: 1200 }} alt="logo"/> </section> 
        
           <p><section class="section"> 
                <div class="box-main"> 
                    <div class="secondHalf"> 
                        <h1 className=" text-backgroundColor font-semibold text-6xl">
                           Type your name to see your details
                        </h1> 
      <input onChange={fetchData} label="search user" id="search"/>
      
        <ul>
       
          {users.map(user => (
            <li key={user.id}>
             
              <div class="wrap">
              <img src={personicon}  style={{ width: 90, height: 250 }} alt="logo"/></div>
        <h5 className=" text-backgroundColor ">{"Name:  "}{user.name}
              <div><strong>{"Username:  "}</strong>{user.username}</div>
              <div><strong>{"Email:  "}</strong>{user.email}</div>
              <div><strong>{"Address: "}</strong>{user.address.street}</div>
             <div>{user.address.suite} {'\t'} {user.address.city}</div>
            
              <div>{"Zipcode: "}<span> {user.address.zipcode}</span></div>
            <span>{user.address.geo.lat}</span>
              <span> {user.address.geo.lng}</span>
              <div><strong>{"Phone: "}</strong>{user.phone}</div>
              <div><strong>{"Website: "}</strong>{user.website}</div>
              <div><strong>{"Company: "}</strong>{user.company.name}</div>{'\t'} 
             
              </h5>
              </li>
          ))}
        </ul>    
        </div> 
      
                </div> 
            </section> </p>
            <section>
            <footer className="footer"> 
                <p className="text-footer"> 
                    Copyright ©-All rights are reserved 
                </p> 
            </footer> </section>  
    </div>
    </header>
    )
  }

          
export default SearchUser