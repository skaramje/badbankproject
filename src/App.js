import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import NavBar from './Components/navbar';
import Home from './Components/home';
import CreateAccount from './Components/createaccount';
import Login from './Components/login';
import Deposit from './Components/deposit';
import Withdraw from './Components/withdraw';
import AllData from './Components/alldata';
import UserContext from './Components/usercontext';




function App() {
  return (
    <HashRouter>
        <NavBar/>
        <UserContext.Provider value= {
          {users:[{
              name:'abel', 
              email:'abel@mit.edu', 
              password: 'secret12', 
              balance:0, 
              logs:[{
                  transactionDate: '2022-01-01', 
                  transactionTime: '00:00:00',
                  transactionType: 'Account Created',
                  transactionAmount: 'NA'
              }]
          }]
          }
          }
          >
            <div className = "container" style = {{padding: "20px"}}>
              <Routes>
                <Route path="/" element = {<Home />} />
                <Route path="/home" element = {<Home />} />
                <Route path="/login" element = {<Login />} />
                <Route path="/createAccount" element={<CreateAccount />} />
                <Route path="/deposit" element={< Deposit />} />
                <Route path="/withdraw" element={<Withdraw />} />
                <Route path="/alldata" element={<AllData />} />
                
              </Routes>
            </div>
        </UserContext.Provider>
    </HashRouter>
  );
}

export default App;
