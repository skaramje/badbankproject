import React from 'react';
import Card from 'react-bootstrap/Card';
import ActiveUserContext from './activeusercontext';
import UserContext from './usercontext';

function Logout(){
    const [show, setShow] = React.useState(true);
    const ctx = React.useContext(UserContext);  
    var activeuserMain = React.useContext(ActiveUserContext);      

    async function update(){
        if(activeuserMain[0] === undefined){
            alert('no user is logged in');
            return
        }else{
          var dateTime = new Date();
          await ctx.users.find(item => item.name === activeuserMain[0]).logs.push({
          transactionDate: `${dateTime.getMonth() + 1}/${dateTime.getDate()}/${dateTime.getFullYear()}`,
          transactionTime: `${`0${dateTime.getHours()}`.slice(-2)}:${`0${dateTime.getMinutes()}`.slice(-2)}:${`0${dateTime.getSeconds()}`.slice(-2)}`,
          transactionType: 'Account Logout',
          transactionAmount: 'NA'
        });

        activeuserMain.splice(0,1,undefined);
        setShow(false);
        return 
        }
        
    }
    
    
    
    
    return (
        <Card bg='info' text='white' className='mb-2 m-auto' style={{width: '18rem'}}>
          <Card.Header>{show? (<>Logout</>) : (<>Success</>)}</Card.Header>

          <Card.Body>{show ? (<input type="submit" className="btn btn-light text-black-100" onClick={update} value="Logout" id="submit-button" />) : (<>You have successfully logged out</>)}</Card.Body>
          
        </Card>
    );
}

export default Logout;