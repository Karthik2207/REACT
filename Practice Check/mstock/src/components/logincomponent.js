import React, { Component } from 'react';
import '../StyleSheets/style.css'
import menuComponent from './MenuComponent'
import axios from 'axios';

export default class LoginComponent extends Component{
    state={
        email:"",
        password:""
    }    

    handlevalidation=(e) =>{
        e.preventDefault();
        var temp=document.getElementById('validation');            
        temp.innerHTML="";
        if(this.state.email=="")
            temp.innerHTML+='<li><font color="Red"> Email is required</font> '            
        if(this.state.password=="")
            temp.innerHTML+='</li><li><font color="Red"> Password is required</font></li>'       
        if(temp.innerHTML=="")
            this.handleSubmit(e);
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8081/users", this.state)
        .then(response =>{            
            document.getElementById('validation').innerHTML=""; 
           console.log("Done Submit")
        }).catch(error => {                  
            document.getElementById('validation').innerHTML=
            '<li><font color="Red"> Invalid username/password</font> </li>'            
        })
    } 
    
    handleChange= (e)=> {
        this.setState({[e.target.name]:e.target.value});
     }    
    render() {
        return (
        <div className="container" >
            <div className="col-sm-6">
            <h2 align="left">Let's get started by login</h2>
            <p><font color="Red"> Fields Marked with * are mandatory</font> </p   >
            <div id="validation"></div>
          <form name="validateForm" className="center" onSubmit={this.handlevalidation}>
              <table>
                  <tbody>                                    
                  <tr><td>Email address<font color="Red">*</font></td></tr>
                    <tr>
                  <td><input type="text"  name="email" value={this.state.email} onChange={this.handleChange}/></td>
                    </tr>                                   
                  <tr><td>Password<font color="Red">*</font></td></tr>
                  <tr>
                    <td><input type="password" name="password" value={this.state.password} onChange={this.handleChange}/></td>
                 </tr>
                  <tr>
                    <td colSpan="2" align="left">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </td>
                  </tr>
                  </tbody>
            </table>
          </form>
          </div>
          </div>
        );
        
    }
}