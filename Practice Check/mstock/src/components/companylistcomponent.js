import React, { Component } from 'react';
import '../StyleSheets/style.css'
import CompanyDetailsComponent from './companydetailscomponent'
import axios from 'axios';

class CompanyListComponent extends Component{
    constructor(props){
        super(props);
        this.state={
        companydetails:[],
        userId:props.userId,
        companyId:0,
        login:props.login
        }
    }

    watchListmethod=(e)=>{
        e.preventDefault();        
        const obj1={
            userId:this.state.userId,
            companyId:1
        }
        axios.post("http://localhost:8081/watchList", obj1)
        .then(response =>{                        
            alert("Sucessfully added to the Watch List");
        }).catch(error => {                 
            console.log(error);
        })
    }

    componentDidMount() {
        fetch("http://localhost:8081/companies")
        .then(res => res.json())
        .then((data) => {
          this.setState({ companydetails: data })
        })
        .catch(console.log)
      }

    render(){  
        return(
            <div className="container-fluid">
            <h1>Companies List</h1>      
          <div className="row">
            {this.state.companydetails.map(details=>{
                return(                
                <div key={details.companyId} className="col-sm-4" style={{display:'flex'}}>
                    <CompanyDetailsComponent login={this.state.login} 
                    details={details} watchlist={this.watchListmethod}/>
                </div> )            
            })} 
            </div>  
            </div>         
    )}
}

export default CompanyListComponent;

