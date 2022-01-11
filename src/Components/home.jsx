import React from 'react';
import * as ReactBootstrap from "react-bootstrap";
import '../App.css';
import bank from './bank.png';

function Home(){
    const { Card } = ReactBootstrap;
    const header = "Bad Bank";
    const title = "Welcome to the Bad bank";
    const text = "For all your banking needs"

    return(
        <Card style={{ width: '18rem' }} className='m-auto'>
            <Card.Header>{header}</Card.Header>
            <Card.Img variant="top" src={bank} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Card.Link href="#/createaccount/">Create Account</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default Home;