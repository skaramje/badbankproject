import React from 'react';

import Card from 'react-bootstrap/Card';
import UserContext from './usercontext';

function Withdraw(){
  
  const [show, setShow] = React.useState(true);
  const [amount, setAmount] = React.useState('');
  const [button, setButton] = React.useState(false);
  const ctx = React.useContext(UserContext);
  
  const len = ctx.users.length;

  const regEx = {
    numberFormatError: /^\d+$/
  }

  function createLog(context, transactionType, amount, userID, balance){
    const dateTime = new Date();
    context.users[len - 1].logs.push(
      {
          transactionDate: `${dateTime.getMonth() + 1}/${dateTime.getDate()}/${dateTime.getFullYear()}`,
          transactionTime: `${`0${dateTime.getHours()}`.slice(-2)}:${`0${dateTime.getMinutes()}`.slice(-2)}:${`0${dateTime.getSeconds()}`.slice(-2)}`,
          transactionType: transactionType,
          transactionAmount: `USD ${amount}`
      }
    );
  
  }

  function handleWithdraw(){
    if(amount < 0){
      alert('Cannot withdraw a negative value');
      return;
    }

    if(!regEx.numberFormatError.test(amount)){
      alert('Please enter a number');
      return;
    }

    if(amount > ctx.users[len - 1].balance){
      alert('Cannot withdraw funds more than available in your account');
      return;
    }

    ctx.users[ len - 1 ].balance -= Number(amount);
    createLog(ctx, 'Withdraw', amount, 'skaramje', 'balance');
    setShow(false);
  }

  function clearForm(){
    setAmount('');
    setShow(true);
  }
  
  const header = 'Withdraw funds';
  const headerSuccess = 'Withdraw was processed';

  return (
    <Card bg='info' text='white' className='mb-2 m-auto' style={{width: '18rem'}}>
      <Card.Header>{show ? (<>{header}</>) : (<>{headerSuccess}</>) }</Card.Header>
      <Card.Body>{show ? (
        <>
        {`Current account balance is USD ${ctx.users[len - 1].balance}`}<br/>
        <br />
        Enter USD amount to Withdraw <br/>
        <input className="form-control" id="amount"               placeholder="Enter amount" value={amount} onChange={e => {
          setAmount(e.currentTarget.value);
          setButton(true);
          }} /><br/>
        {button? <input type="submit" className="btn btn-light text-black-100" onClick={handleWithdraw} value="Withdraw" id="submit-button" /> : <input type="submit" className="btn btn-light text-black-50" value="Withdraw" id="submit-button" />}
        </>
      ) : (
        <>
        <h5>Success</h5>
        {`Account balance is USD ${ctx.users[len - 1].balance}`}<br/>
        <button type="submit" className="btn btn-light" onClick={clearForm}>Withdraw more funds</button>
        </>
      )}
      </Card.Body>
    </Card>
  );
}

export default Withdraw;