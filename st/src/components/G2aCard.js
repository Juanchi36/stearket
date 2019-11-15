import React from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';

function getData(slug){
    // axios
	// 		.get(
	// 			'https://www.g2a.com/' + slug,
	// 			{
	// 				mode: 'cors',
	// 				credentials: 'include',
	// 				method: 'GET',
	// 				headers: headers
	// 			}
	// 		)
	// 		.then((res) => {
	// 			let prices = res.data.lowest_price
	// 			setPrice(prices);
				
	// 			//console.log(res.data);
	// 		});
}

function G2aCard(props){
    
    const {imageUrl, slug, showLinks, price, steamId, gameDescr } = props;console.log(price)
    if(imageUrl && !showLinks){
        return (
            <div>
                <div style={{ display: 'inline-flex', width: '100%', justifyContent: 'space-around' }}>
                    <Card style={{ width: '14rem' }}>
                        <Card.Img variant="top" src={imageUrl}/>
                        <Card.Body>
                            <Card.Title>{gameDescr}</Card.Title>
                            <Card.Text>
                            Precio: {price}
                            </Card.Text>
                            <Button href={'https://www.g2a.com' + slug} variant="primary" target="_blank">Ir a G2a</Button>
                        </Card.Body>
                    </Card>
                    
                </div>
            </div>    
        );
    }else{
        return(<div></div>)
    }
    
}

export default G2aCard;

