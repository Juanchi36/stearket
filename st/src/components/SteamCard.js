import React from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';

// function getData(slug){
//     // axios
// 	// 		.get(
// 	// 			'https://www.g2a.com/' + slug,
// 	// 			{
// 	// 				mode: 'cors',
// 	// 				credentials: 'include',
// 	// 				method: 'GET',
// 	// 				headers: headers
// 	// 			}
// 	// 		)
// 	// 		.then((res) => {
// 	// 			let prices = res.data.lowest_price
// 	// 			setPrice(prices);
				
// 	// 			//console.log(res.data);
// 	// 		});
// }

function SteamCard(props){
    
    const {imageUrl, slug, showLinks, price, steamId, gameDescr } = props;console.log(price)
    if(imageUrl && !showLinks){
        return (
            <div>
                <Card style={{ width: '14rem' }}>
                        <Card.Img variant="top" src={imageUrl}/>
                        <Card.Body>
                            <Card.Title>{gameDescr}</Card.Title>
                            <Card.Text>
                            Precio: {price}
                            </Card.Text>
                            <Button href={'https://store.steampowered.com/app/' + slug} variant="primary" target="_blank">Comprar en Steam</Button>
                        </Card.Body>
                    </Card>
                    
                
            </div>    
        );
    }else{
        return(<div></div>)
    }
    
}

export default SteamCard;

