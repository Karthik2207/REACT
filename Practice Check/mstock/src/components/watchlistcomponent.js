import React, { Component } from 'react';
import CompanyDetailsComponent from './companydetailscomponent'
import axios from 'axios';

export default class WatchListComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            watchList:[],
            userId:props.userid,
            empty:false
        }
    }
    componentDidMount() {
        fetch("http://localhost:8081/watchList/"+this.state.userId)
        .then(res => res.json())
        .then((data) => {
          if(data.length==0)
            this.state.empty=true;
          this.setState({watchList:data})
        })
        .catch(console.log)
      }

      removemethod=(e)=>{
        e.preventDefault();         
        let companyId=e.target.id;                                      
        axios.delete("http://localhost:8081/watchList/"+this.state.userId+"/"+companyId)
        .then(response =>{                        
            alert("Removed Sucessfully from the Watch List");
            this.setState({watchList:this.state.watchList.filter(item=>{
                return(
                item.company.companyId!=companyId
                )
            })})
        }).catch(error => {                 
            console.log(error);
        })
    }    

      render(){  
          if(this.state.empty==true)
          return(
              <div style={{color:'black'} , {fontWeight: 'bold' }}>
                  <div >My Companies List</div>
                  <div> No Company stock prices added to watch list</div>                  
            </div>
          )
          else
        return(        
            <div className="container-fluid">
            <h1>Watch List</h1>      
          <div className="row">
            {this.state.watchList.map(details=>{
                return(                
                <div key={details.id} className="col-sm-4" style={{display:'flex'}}>
                    <CompanyDetailsComponent watchList={true} 
                    details={details.company} removelist={this.removemethod}/>
                </div>)
            })}
            </div>  
            </div>              
    )}
}