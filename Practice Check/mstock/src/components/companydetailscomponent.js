import { render } from '@testing-library/react';
import React, { Component } from 'react';
import '../StyleSheets/style.css'

export default function CompanyDetailsComponent(props){         
        return(        
            <div>
                <div className="card">
                    <div className="card-header" style={{fontWeight:"bold"}}>
                        {props.details.companyName}
                    </div>
                    <div className="card-body">
                        <p className="card-text">{props.details.description}</p>
                    </div>
                    <div className="card-footer" style={{fontWeight:"bold"}}>
                        Today's Price:{props.details.currentStockPrice} 
                        {props.login?<button type="button" className="btn btn-primary" onClick={props.watchlist}>
                            Watch</button>:""}
                        {props.watchList?<button type="button" id={props.details.companyId} className="btn btn-danger" onClick={props.removelist}>
                            remove</button>:""}
                    </div>
                </div>
            </div>
        );
}


