import React, { Component } from 'react';
import IndianPlayers from './IndianPlayers';
export class ListOfIndianPlayers extends Component{
    render(){       
        return(
            IndianPlayers.map((item,index)=>
            {
                return(
                    <div key={index}>
                        <li>Mr.{item}</li>
                    </div>
                )})
        )
    }
}
export default ListOfIndianPlayers;