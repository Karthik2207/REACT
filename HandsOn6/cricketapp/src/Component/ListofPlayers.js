import React, { Component } from 'react';
import players from './Players';
export class ListofPlayers extends Component{
    render(){        
        return(
            players.map((item)=>
            {
                return(
                    <div>
                        <li>Mr.{item.name} <span>{item.score}</span></li>
                    </div>
                )})
        )
    }
}
export default ListofPlayers;