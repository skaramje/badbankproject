import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import NavBar from './Components/navbar';
import Home from './Components/home';
import CreateAccount from './Components/createaccount';
import Login from './Components/login';
import Deposit from './Components/deposit';
import Withdraw from './Components/withdraw';
import Balance from './Components/balance';
import AllData from './Components/alldata';
import UserContext from './Components/usercontext';

function App() {
  return (
    <HashRouter>
        <NavBar/>
        <UserContext.Provider value= {{users:[{name:'abel', email:'abel@mit.edu', password: 'secret', balance:100}]}}>
            <div className = "container" style = {{padding: "20px"}}>
              <Routes>
                <Route path="/" element = {<Home />} />
                <Route path="/createAccount" element={<CreateAccount />} />
                <Route path="/login" element={< Login/>} />
                <Route path="/deposit" element={< Deposit />} />
                <Route path="/withdraw" element={<Withdraw />} />
                <Route path="/balance" element={<Balance />} />
                <Route path="/alldata" element={<AllData />} />
              </Routes>
            </div>
        </UserContext.Provider>
    </HashRouter>
  );
}

export default App;
