import React from 'react';
import { Card, Button } from 'react-bootstrap';

function G2aCard(props){
    
    return (
        <div>
            <div style={{ display: 'inline-flex', width: '100%', justifyContent: 'space-around' }}>
                <Card style={{ width: '14rem' }}>
                    <Card.Img variant="top" src={props.imageUrl}/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '14rem' }}>
                    <Card.Img variant="top" src={props.imageUrl}/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>    
    );
}

export default G2aCard;

