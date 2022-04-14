import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Items extends Component {
    constructor(){
        super();
        console.log("hello");
    }
    static propTypes = {}

    render() {
    let {title, discription, imageurl, url} = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                                <h5 className="card-title"> {title}</h5>
                        <p className="card-text">{discription}</p>
                        <a href={this.url} className="btn btn-primary btn-sm">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Items