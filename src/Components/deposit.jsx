import React from 'react';
import Card from 'react-bootstrap/Card';
import UserContext from './usercontext';
import ActiveUserContext from './activeusercontext';

function Deposit(){
  
  const [show, setShow] = React.useState(true);
  const [amount, setAmount] = React.useState('');
  const [button, setButton] = React.useState(false);
  const ctx = React.useContext(UserContext);
  var activeuserMain = React.useContext(ActiveUserContext);
   
  const regEx = {
    numberFormatError: /^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/
  }

  function findId(user){
    let res = ctx.users.findIndex(item => item.name === user);
    return res;
  }

  function createLog(context, transactionType, amount, userId){
    const dateTime = new Date();
    context.users[userId].logs.push(
      {
          transactionDate: `${dateTime.getMonth() + 1}/${dateTime.getDate()}/${dateTime.getFullYear()}`,
          transactionTime: `${`0${dateTime.getHours()}`.slice(-2)}:${`0${dateTime.getMinutes()}`.slice(-2)}:${`0${dateTime.getSeconds()}`.slice(-2)}`,
          transactionType: transactionType,
          transactionAmount: `USD ${parseFloat(amount).toFixed(2)}`
      }
    );
  
  }

  function handleDeposit(){
    if(activeuserMain[0] == undefined){
      alert(`Log in to deposit`);
      return;
    }
    
    if(amount < 0){
      alert('Cannot deposit a negative value');
      return;
    }

    if(!regEx.numberFormatError.test(amount)){
      alert('Please enter a valid number');
      return;
    }
    
    var user = ctx.users.filter(user => user.name === activeuserMain[0])[0];
    console.log('active user' + JSON.stringify(user));
    
    ctx.users[ findId(activeuserMain[0]) ].balance += Number(amount);
    createLog(ctx, 'Deposit', amount, findId(activeuserMain[0]));

    setShow(false);
  }

  function clearForm(){
    setAmount('');
    setShow(true);
  }
  
  if(activeuserMain[0] !== undefined){
    var activeBalance = `Current account balance is USD ${parseFloat(ctx.users[findId(activeuserMain[0])].balance).toFixed(2)}`;
  }
  const header = 'Deposit Funds';
  const headerSuccess = 'Funds deposited';
  
  

  return (
    <Card bg='info' text='white' className='mb-2 m-auto' style={{width: '18rem'}}>
      <Card.Header>{show ? (<>{header}</>) : (<>{headerSuccess}</>) }</Card.Header>
      <Card.Body>{show ? (
        <>
        {activeBalance}<br/>
        <br/>
        Enter USD amount to deposit <br/>
        <input className="form-control" id="amount" placeholder="Enter amount" value={amount} onChange={e => {
          setAmount(e.currentTarget.value);
          setButton(true);
          }} /><br/>
          {button? <input type="submit" className="btn btn-light text-black-100" onClick={handleDeposit} value="Deposit" id="submit-button" /> : <input type="submit" className="btn btn-light text-black-50" value="Deposit" id="submit-button" />}
        </>
      ) : (
        <>
        <h5>Success</h5>
        {activeBalance}<br/>
        <button type="submit" className="btn btn-light" onClick={clearForm}>Add more funds</button>
        </>
      )}
      </Card.Body>
    </Card>
  );
  
}

export default Deposit;