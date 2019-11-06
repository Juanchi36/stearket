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
    
    const {imageUrl, slug, showLinks} = props;console.log(props.showLinks)
    if(imageUrl && !showLinks){
        return (
            <div>
                <div style={{ display: 'inline-flex', width: '100%', justifyContent: 'space-around' }}>
                    <Card style={{ width: '14rem' }}>
                        <Card.Img variant="top" src={imageUrl}/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button href={'https://www.g2a.com' + slug} variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem' }}>
                        <Card.Img variant="top" src={imageUrl}/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button href={'https://www.g2a.com' + slug} variant="primary">Go somewhere</Button>
                                                        
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

