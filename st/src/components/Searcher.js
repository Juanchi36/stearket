import React from 'react';
import axios from 'axios';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import G2aCard from './G2aCard';
import SteamCard from './SteamCard';

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
            gameDescr: '',
            steamImageUrl: '',
            steamPrice: '',
            steamSlug: '',
            steamGameDescr: '',
		};
		this.getPrice = this.getPrice.bind(this)
		this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.searchSql = this.searchSql.bind(this)
        this.callSteam = this.callSteam.bind(this)
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
        const query = queryName.replace(/\s/g, '%20').toLowerCase();
        
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
		headers.append('Accept', 'application/json');
		headers.append('origin', 'x-requested-with');
		headers.append("Access-Control-Allow-Origin", "*");
    	headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

		headers.append('Origin', 'http://localhost:3000');
		
		axios
			.get(
				'http://localhost:9001/searchGame?name=' + query,
				{
					mode: 'cors',
					credentials: 'include',
					method: 'GET',
					headers: headers
				}
			)
			.then((res) => {
                let data
                if(Array.isArray(res.data)){console.log(res.data.length)
                    data = res.data[res.data.length -1];console.log(data)
                }else{
                    data = res.data
                }
                
                this.setState({ queryResult: data });//console.log(this.state.queryResult)
                this.callSteam()
            })
            
    }
    
    callSteam(){
        let headers = new Headers();
        if(this.state.queryResult){
            let id = this.state.queryResult.appid;
        
		headers.append('Content-Type', 'application/json');
		headers.append('Accept', 'application/json');

        headers.append('Origin', 'http://localhost:3000');
                    
        headers.append('Set-Cookie','steamCountry=7C659907b7b15177e9d66acd22e0f086f7')
        
		axios
			.get(
				'https://cors-anywhere.herokuapp.com/https://store.steampowered.com/api/appdetails?appids='+ this.state.queryResult.appid +'&cc=ars',
				{
					mode: 'cors',
					credentials: 'include',
					method: 'GET',
                    headers: headers,
                    
				}
			)
            .then((res) => {console.log (res.data)
                let price
                if(res.data[id].data.price_overview){
                    let price = (res.data[id].data.price_overview.final / 100)*16
                    this.setState({ steamPrice: price })
                }
                this.setState({ steamImageUrl: res.data[id].data.header_image })
                this.setState({ steamGameDescr: res.data[id].data.name })
                this.setState({ steamSlug: id })
                // console.log(id)
                // console.log(price)
                //console.log(Object.keys(res.data))

            });

        }
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
				this.searchSql();
			});
			
    }
    
    render() {
        const { data, slug, imageUrl, showLinks, price, steamId, gameDescr, steamSlug, steamGameDescr, steamImageUrl, steamPrice } = this.state
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
                            <p key={item.id}><a href="#" id ={item.id} name={item.name} title={item.slug+ ' '+item.smallImage} onClick={this.getPrice} >{item.name}</a></p>
						))
					}
					</div>
                }
                <div style={{ display: 'inline-flex', width: '100%', justifyContent: 'space-around' }}>
				<G2aCard slug={slug} imageUrl={imageUrl} showLinks={showLinks} price={price} steamId={878570} gameDescr={gameDescr}/>
                <SteamCard slug={steamSlug} imageUrl={steamImageUrl} showLinks={showLinks} price={steamPrice} steamId={878570} gameDescr={steamGameDescr}/> 
                </div> 
            </div>
        );
    }
  }

  export default Searcher;

  