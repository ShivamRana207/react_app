import PropTypes from 'prop-types'

import React, { Component } from 'react'
import Items from './Items'

export class Content extends Component {
    static propTypes = {}

    render() {
        
        return (
            <div className="container my-4">
                <h2>Top Content</h2>
                <div className="row">
                    <div className="col-md-auto">
                        <Items />
                    </div>
                    <div className="col-md-auto">
                        <Items />
                    </div>
                    <div className="col-md-auto">
                        <Items />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-auto">
                        <Items />
                    </div>
                    <div className="col-md-auto">
                        <Items />
                    </div>
                    <div className="col-md-auto">
                        <Items />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-auto">
                        <Items />
                    </div>
                    <div className="col-md-auto">
                        <Items />
                    </div>
                    <div className="col-md-auto">
                        <Items />
                    </div>
                </div>


            </div>

        )
    }
}

export default Content