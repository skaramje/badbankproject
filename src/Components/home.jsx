import React, { useState } from 'react';
import * as ReactBootstrap from "react-bootstrap";
import '../App.css';
import bank from './bank.png';

function Home(){
    const { Card, Button } = ReactBootstrap;
    const header = "BadBank Landing Module";
    const title = "Welcome to the bank";
    const text = "You can move around using the navigation bar."

    return(
        <Card style={{ width: '18rem' }}>
            <Card.Header>{header}</Card.Header>
            <Card.Img variant="top" src={bank} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Card.Link href="#/login/">Login</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default Home;