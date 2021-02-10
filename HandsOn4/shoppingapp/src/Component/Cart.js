import React, { Component } from 'react';
import '../Stylesheets/mystyle.css'

export class Cart extends Component{
    render(){       
            return(this.props.item.map((item)=>
            {
                return(
                    <tr className="Row">
                        <td>{item.itemname}</td>
                        <td>{item.price}</td>
                    </tr>
                )
            }
            )
            )
    }
}
export default Cart;