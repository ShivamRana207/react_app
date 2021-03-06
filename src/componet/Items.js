import React, { Component } from 'react'

export class Items extends Component {
   
    

    render() {
    let {title, discription, imageurl, newsurl, auther, date,source } = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{width: "18rem"}}>
                <h6> <span className="badge bg-danger">{source}</span></h6>
                    <img src={imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                                <h5 className="card-title"> {title}...</h5>
                        <p className="card-text">{discription}</p>
                        <p className="card-text"><small className="text-muted">By  {auther? auther : "Unkown"} on {date}</small></p>
                        <a rel="noreferrer"href={newsurl} target="_blank" className="btn btn-primary btn-sm bg-dark">Read More</a>
                    </div>
                </div>
                
            </div>
              
                
        )
    }
}

export default Items