import React, { Component } from 'react'
import Items from './Items'
export class Content extends Component {

    constructor() {
        super();

        this.state = {
            articles: [],
            page: 1
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c9233111fe6c4dafa7f796e345798c9f&page=${this.state.page}&pageSize=6`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            page: this.state.page,
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        });
    }
    handlenext = async () => {

        console.log(" handlenext clicked")
        let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c9233111fe6c4dafa7f796e345798c9f&page=${this.state.page+1}1&pageSize=6`;
        let data = await fetch(url);
        let parsedData = await data.json();
        
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        });
    }
    handlepre = async () => {


        let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c9233111fe6c4dafa7f796e345798c9f&page=${this.state.page - 1}&pageSize=6`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        });

    }
    render() {

        return (
            <div className="container my-4">
                <h2>Top Content</h2>
                <div className="row">
                    {this.state.articles.map((element) => <div className="col-md-auto" key={element.url}>
                        <Items title={element.title.slice(0, 40)} imageurl={element.urlToImage} newsurl={element.url} />
                    </div>)}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlepre}>&larr;Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handlenext}>Next&rarr;</button>

                </div>

            </div>


        )
    }
}

export default Content