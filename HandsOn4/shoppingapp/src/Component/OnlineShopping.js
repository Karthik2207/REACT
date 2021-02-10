import React, { Component } from 'react';
import { Cart } from './Cart';
import '../Stylesheets/mystyle.css'

export class OnlineShopping extends Component{
    render(){
        const CartInfo=[{itemname:"Laptop",price:80000},{itemname:"TV",price:120000},{itemname:"Washing Machine",price:50000}
                        ,{itemname:"Mobile",price:30000},{itemname:"Fridge",price:70000}];
        return(
            <div className="align">
                <h1><font color="green">Items Ordered:</font></h1>
                <table className="Table">
                    <tr> 
                        <th>{"Name"}</th>
                        <th>{"Price"}</th>
                    </tr>
                    <Cart item={CartInfo}></Cart>
                </table>
            </div>
        )                    
    }
}

export default OnlineShopping;