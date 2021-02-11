import React, { Component } from 'react';
import players from './Players'
export class Scorebelow70 extends Component{
    render(){
        var players70=[];
        return(
            players.map((item)=>
            {
                if(item.score<=70)
                {
                    players70.push(item);
                    return(<div>
                    <li>Mr.{item.name} <span>{item.score}</span></li>
                    </div>)
                }
                })
        )
    }
}
export default Scorebelow70;