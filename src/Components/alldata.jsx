import React from 'react';
import UserContext from './usercontext';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';

function AllData(){
    const ctx = React.useContext(UserContext);
    
    return (
      <Card bg='info' text='white' className='mb-2 m-auto align-self-center' style={{width: '18rem'}}>
      <Card.Header>All Data Log</Card.Header>
      
      {ctx.users.map((user, index) => 
      <ListGroup key={index}>

      <ListGroup.Item variant="info" key={index}> 
          Name: {user.name} <br/>
          Email: {user.email} <br/>
          Password: {user.password} <br/>
          Balance (USD): {parseFloat(user.balance).toFixed(2)} <br/>
          {user.logs.map((log, idx) => 
            <ListGroup.Item key={idx}>
              <br />
              Transaction Date: {log.transactionDate} <br />
              Transaction Time: {log.transactionTime} <br />
              Transaction Type: {log.transactionType} <br />
              Transaction Amount: {log.transactionAmount} <br />
              <br />
            </ListGroup.Item>
          )}
      </ListGroup.Item>
      
      </ListGroup>
      )}
      </Card>
    );
}

export default AllData;