import React from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';

function SteamCard(props){
    
    const {imageUrl, slug, showLinks, price, steamId, gameDescr} = props;//console.log(price)
    if(gameDescr && !showLinks){
        return (
            <div>
                <Card style={{ width: '20rem', textAlign: '-webkit-center', backgroundColor: '#8080806b'}}>
                        <Card.Img variant="top" src={imageUrl} style={{ width: '60%', marginTop: '5px'}}/>
                        <Card.Body>
                            <Card.Title style={{fontSize: '18px'}}>{gameDescr}</Card.Title>
                            <Card.Text>
                            Precio: ${price}
                            </Card.Text>
                            <Button href={'https://store.steampowered.com/app/' + slug} variant="primary" target="_blank">Ir a Steam</Button>
                        </Card.Body>
                    </Card>
                    
                
            </div>    
        );
    }else{
        return(<div></div>)
    }
    
}

export default SteamCard;

