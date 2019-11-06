import React from 'react';
import axios from 'axios';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import G2aCard from './G2aCard';

class Searcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameName: '',
            data: [],
            price: [],
            gameIdG2a: '',
            queryName: '',
			queryResult: [],
			slug: '',
			imageUrl: '',
			showLinks: true,
            steamId: '',
            gameDescr: ''
		};
		this.getPrice = this.getPrice.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.handleChange = this.handleChange.bind(this)
    }

    callToG2a(name){
        let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Accept', 'application/json');

		headers.append('Origin', 'http://localhost:3000');
		axios
			.get(
				'https://cors-anywhere.herokuapp.com/https://www.g2a.com/lucene/search/filter?&search='+ name,
				{
					mode: 'cors',
					credentials: 'include',
					method: 'GET',
					headers: headers
				}
			)
			.then((res) => {console.log(res.data)
					let games = res.data.docs
					this.setState({ data : games })
				}
			);    
    }

    handleClick(){
        // const { gameName } = this.state;
        // let replacedName = gameName.replace(/ /g, '+');
		// this.callToG2a(replacedName);
		this.setState({ showLinks: true })
		//this.refs.searchInput.value = '';
	}
	
    handleChange(e){
		e.preventDefault();
		this.setState({ showLinks: true});
		this.setState({gameName: e.target.value});
		let replacedName = e.target.value.replace(/ /g, '+');
		this.callToG2a(replacedName); 
    }

    searchSql(){
        const { queryName } = this.state;
        let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Accept', 'application/json');
		headers.append('origin', 'x-requested-with');
		headers.append("Access-Control-Allow-Origin", "*");
    	headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

		headers.append('Origin', 'http://localhost:3000');
		
		axios
			.get(
				'http://localhost:9001/searchGame?name=' + queryName,
				{
					mode: 'cors',
					credentials: 'include',
					method: 'GET',
					headers: headers
				}
			)
			.then((res) => {
                let prices = res.data.lowest_price;//console.log('precios ',res.data)
                let data = res.data; 
				//const { price, queryResult } = this.state
			
                this.setState({
                   	queryResult: data
                })
			})
	}

	getPrice(e){//console.log(e.target.name)
		e.preventDefault();
		
		let data = e.target.title.split(" ");
		let slug = data[0];
        let image = data[1];
		this.setState({ slug : slug, imageUrl : image })
		let nameArr = e.target.name.split(' ');
        this.setState({ queryName : nameArr.slice(0, 2).join(' ') });
		this.setState({ gameIdG2a : e.target.id });
        this.setState({ showLinks: false});
        this.setState({ gameDescr: e.target.name});
		
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Accept', 'application/json');

		headers.append('Origin', 'http://localhost:3000');
		axios
			.get(
				'https://cors-anywhere.herokuapp.com/https://www.g2a.com/marketplace/product/auctions/?id=' + e.target.id,
				{
					mode: 'cors',
					credentials: 'include',
					method: 'GET',
					headers: headers
				}
			)
			.then((res) => {
                let prices = res.data.lowest_price;
                this.setState({ price: prices })
				this.searchSql();//console.log(res.data)
			});
			
    }
    
    render() {
        const { data, slug, imageUrl, showLinks, price, steamId, gameDescr } = this.state
        return (
            <div>
                <InputGroup className='mb-3'>
                    <FormControl
                        placeholder='Nombre del juego'
                        aria-label='Recipient&#39;s username'
						aria-describedby='basic-addon2'
						ref='searchInput'
                        onChange={(e) => this.handleChange(e)}
                    />
                    <InputGroup.Append>
                        <Button variant='outline-secondary' onClick={this.handleClick}>
                            Volver
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
				{ showLinks && 
					<div>
					{
						data.map(item => (
						item.name.indexOf('Key') === -1 ? <p key={item.id}><a href="#" id ={item.id} name={item.name} title={item.slug+ ' '+item.smallImage} onClick={this.getPrice} >{item.name}</a></p> : null
						))
					}
					</div>
				}
				<G2aCard slug={slug} imageUrl={imageUrl} showLinks={showLinks} price={price} steamId={878570} gameDescr={gameDescr}/> 
            </div>
        );
    }
  }

  export default Searcher;

  