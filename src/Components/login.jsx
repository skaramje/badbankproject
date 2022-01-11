import React from 'react';
import Card from 'react-bootstrap/Card';
import ActiveUserContext from './activeusercontext';
import UserContext from './usercontext';

function Login(){

    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [activeuser, setActiveuser] = React.useState('');
    const [button, setButton] = React.useState(false);  
    const ctx = React.useContext(UserContext);    
    var activeuserMain = React.useContext(ActiveUserContext);

    function validate(field, label=''){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(()=> setStatus(''), 3000);
        return false;
      }
      return true;
    }
    
    function authenticate(email, password){
      if(!email){
        alert('This account does not exist')
        return false;
      } else if (!password){
        alert('Password is incorrect')
        return false;
      }
      return true;
    }

    function logincheck(name){
      if(activeuserMain[0] == name){
        return false;
      }
      return true;
    }

    async function update(user){
      var dateTime = new Date();
      await ctx.users.find(item => item.name === user).logs.push({
        transactionDate: `${dateTime.getMonth() + 1}/${dateTime.getDate()}/${dateTime.getFullYear()}`,
        transactionTime: `${`0${dateTime.getHours()}`.slice(-2)}:${`0${dateTime.getMinutes()}`.slice(-2)}:${`0${dateTime.getSeconds()}`.slice(-2)}`,
        transactionType: 'Account Login',
        transactionAmount: 'NA'
      });
    }
    
    function handleLogin(){
      
      if(!validate(email, 'email')){
        alert('Please enter a valid email');
        return;
      }
      if(!validate(password, 'password')){
        alert('Please enter a password');
        return;
      }

      var user = ctx.users.filter(user => user.email === email)[0];
      var pass = ctx.users.filter(user => user.password === password)[0];

      if(!authenticate(user, pass)){
        return;
      }

      if(!logincheck(user.name)){
        alert('User is already logged in');
        return;
      }

      console.log(`username is handle login ${user.name}`);
      setActiveuser(user.name);
      activeuserMain.splice(0,1,user.name);
      console.log(`active user ${activeuserMain}`);
      update(user.name);
      setShow(false);
    }

     
      
    function clearForm(){
      setEmail('');
      setPassword('');
      setShow(true);
      setButton(false);
    }
    
    function username(){
      setShow(false);
    }

    const header = 'Login to your account Account';
    const headerSuccess = 'Welcome!';

    return (
        <Card bg='info' text='white' className='mb-2 m-auto' style={{width: '18rem'}}>
          <Card.Header>{show ? (<>{header}</>) : (<>{headerSuccess}</>) }</Card.Header>

          <Card.Body>{show ? (
            <>
            Login Email address<br/>
            <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => {
              setEmail(e.currentTarget.value)
              setButton(true);
            }} /><br/>
            Password<br/>
            <input type="input" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => {
              setPassword(e.currentTarget.value);
              setButton(true);
            }} /><br/>
            {status} <br/>
            {button? <input type="submit" className="btn btn-light text-black-100" onClick={handleLogin} value="Login" id="submit-button" /> : <input type="submit" className="btn btn-light text-black-50" value="Login" id="submit-button" />}
            </>
          ) : (
            <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={username}>Welcome back, {activeuser}!</button>
            </>
          )}

          </Card.Body>
        </Card>
    );
}

export default Login;