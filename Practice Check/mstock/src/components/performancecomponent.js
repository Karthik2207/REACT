import React, { Component } from 'react';
import axios from 'axios';
export default class PerformanceComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            companydetails:[],
            stockdetails:[],
            companyCode1:0,            
            companyCode2:0,
            from:"",
            to:"",
            onsubmit:0            
        }
    }

    fetchDetails= (e) => {
        e.preventDefault();                     
        axios.get("http://localhost:8081/stocks/compare-performance?companyCode1="+ this.state.companyCode1
        +"&companyCode2="+this.state.companyCode2+"&from="+this.state.from+"&to="+this.state.to)
        .then(response =>{  
            this.setState({onsubmit:1})
            this.setState({stockdetails:response.data})
        }).catch(error => {    
            console.log("No Data Found with such data")              
        })        
    }

    componentDidMount() {
        fetch("http://localhost:8081/companies")
        .then(res => res.json())
        .then((data) => {          
          this.setState({companydetails:data})
        })
        .catch(console.log)
      }

      handleChange= (e)=> {
        e.preventDefault(); 
        this.setState({[e.target.name]:[e.target.value]});                                 
     }  

      render(){  
        return( 
            <div className="container">
                <h3 align="left" >Compare potential companies</h3>
                <h4 className="text-muted" align="left">Make smart investment decision</h4>
                <form className="center" onSubmit={this.fetchDetails}>   
                <div className="row">
                    <div className="form-group col">
                        <label>Select company 1</label>
                        <select className="form-control" name="companyCode1"  
                            onChange={this.handleChange}>
                            <option>choose..</option>
                            {
                            this.state.companydetails.map(details=>{
                                return(
                                <option key={details.companyId} value={details.companyId}>
                                    {details.companyName}
                                </option>)
                            })}                                                       
                        </select>
                    </div>
                    <div className="form-group col">
                        <label>Select company 2</label>
                        <select className="form-control" name="companyCode2" 
                            onChange={this.handleChange}>
                        <option>choose..</option>
                        {
                            this.state.companydetails.map(details=>{
                                return(
                                <option key={details.companyId} value={details.companyId}>
                                    {details.companyName}
                                </option>)
                            })}
                        </select>
                    </div> 
                </div> 
                <div className="row">
                    <div className="form-group col">
                        <label>From Date</label>
                        <input className="form-control" type="date" 
                        name="from" value={this.state.from} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group col">
                        <label>To Date</label>
                        <input className="form-control" type="date" 
                        name="to" value={this.state.to} onChange={this.handleChange}/>
                    </div>
                </div>  
                <button type="submit" className="btn btn-primary">Fetch Details</button>                                                                                                  
            </form>

            
            {this.state.onsubmit?
            <div>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Date</th>
                <th scope="col">Company</th>
                <th scope="col">Stock Price</th>
                </tr>
            </thead>                
            {
                this.state.stockdetails.map(details=>{
                    return(
                        <tbody key={details.id}>   
                            <tr>
                            {(details.company.companyId===1)?
                            <th scope="row">{details.date}</th>:
                            <th scope="row"></th>}
                            <td>{details.company.companyName}</td>
                            <td>{details.stockPrice}</td> 
                            </tr>                                                                  
                        </tbody>
                    )
                })                            
            }                                   
            </table>                                
            </div>
            :""}
        </div>                                    
        )
    }
}