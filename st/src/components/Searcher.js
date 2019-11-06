import React from 'react';
import axios from 'axios';
import { InputGroup, Button, FormControl } from 'react-bootstrap';

class Searcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameName: '',
            data: [],
            price: [],
            gameIdG2a: '',
            queryName: '',
            queryResult: []
        };
        this.getPrice = this.getPrice.bind(this)
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
			.then((res) => {//console.log(res.data)
					let games = res.data.docs
					this.setState({ data : games })
				}
			);    
    }

    handleClick(){
        const { gameName } = this.state;
        let replacedName = gameName.replace(/ /g, '+');
		this.callToG2a(replacedName);
	}
	
    handleChange(e){
        e.preventDefault();
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
                let prices = res.data.lowest_price
                let data = res.data; //console.log(res.data)
				const { price, queryResult } = this.state
			
                this.setState({
                   	price : prices,
                    queryResult: data
                }, ()=>console.log(this.state.queryResult[0]))
			})
	}

	getPrice(e){
        e.preventDefault();
		//setPrice('https://www.g2a.com/marketplace/product/auctions/?id=' + e.target.id);
		let nameArr = e.target.name.split(' ');//console.log(nameArr)
        this.setState({ queryName : nameArr.slice(0, 2).join(' ') });
        
        this.setState({ gameIdG2a : e.target.id });
		
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
				this.searchSql();
				//console.log(res.data);
			});
			
    }
    
    render() {
        const { data } = this.state
        return (
            <div>
                <InputGroup className='mb-3'>
                    <FormControl
                        placeholder='Nombre del juego'
                        aria-label='Recipient&#39;s username'
                        aria-describedby='basic-addon2'
                        onChange={(e) => this.handleChange(e)}
                    />
                    <InputGroup.Append>
                        <Button variant='outline-secondary' onClick={this.handleClick}>
                            Buscar
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
                <div>
				{
					data.map(item => (
					item.name.indexOf('Key') === -1 ? <p><a href='#' id ={item.id} key={item.id} name={item.name} onClick={this.getPrice}>{item.name}</a></p> : null
					))
				}
			    </div>
                
            </div>
        );
    }
  }

  export default Searcher;