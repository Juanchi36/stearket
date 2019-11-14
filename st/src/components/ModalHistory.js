import React, { Component } from 'react';
import { Button, Modal } from 'react-materialize';
import axios from 'axios';

class ModalHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [],
        };
		
        //this.callSteam = this.callSteam.bind(this)
    }

    componentDidMount(){
        const { user } = this.props;
        
        if(user){ console.log(user);
            
            let get = 'http://localhost:8081/search?userEmail=' + user.email;
                        
            axios({
                method: 'get', 
                url: get,
                
              }).then((res) =>{
                console.log(res.data)
                this.setState({ history: res.data })
              }).then((err)=>{
                  console.log(err)
            })
        }
    }

    render () {
        
        const { history } = this.state;

        return (
                <Modal header="Últimas búsquedas" trigger={<a style={{fontSize: '12px'}} >Historial</a>}>
                    <div>
					{
						history.map(item => (
                            <p key={item._id}>{item.gameName}</p>
						))
					}
					</div>
                </Modal>
                        
        )
    }
}

export default ModalHistory;
