import React, { Component } from 'react'
import Items from './Items'
import Spiner from './Spiner'
import PropTypes from 'prop-types'
export class Content extends Component {
    static defaultProps = {
        country: 'us',
        PageSize: 21,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        PageSize: PropTypes.number 
    }
            constructor() {
        super();

        this.state = {
            articles: [],
            page: 1,
            loading: false

        }
    }
    async componentDidMount() {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c9233111fe6c4dafa7f796e345798c9f&page=${this.state.page}&pageSize=${this.props.PageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            loading: false,
            page: this.state.page,
            articles: parsedData.articles,
            totalResults: parsedData.totalResults

        });

    }
    handlenext = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.PageSize)) {

        }
        else {

            console.log(" handlenext clicked")
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c9233111fe6c4dafa7f796e345798c9f&page=${this.state.page + 1}&pageSize=${this.props.PageSize}`;
            this.setState({loading: true})
            let data = await fetch(url);
            let parsedData = await data.json();

            this.setState({
                loading: false,
                page: this.state.page + 1,
                articles: parsedData.articles
            });
        }
    }
    handlepre = async () => {


        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c9233111fe6c4dafa7f796e345798c9f&page=${this.state.page - 1}&pageSize=${this.props.PageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json();
        
        this.setState({
            loading: false,
            page: this.state.page - 1,
            articles: parsedData.articles
        });

    }
    render() {

        return (
            <div className="container my-4">
                <h2 >Top Content</h2>
                {this.state.loading && <Spiner className="text-center"/>}

                <div className="row">
                    { this.state.articles.map((element) => <div className="col-md-auto" key={element.url}>
                        <Items title={element.title.slice(0, 40)} imageurl={element.urlToImage} newsurl={element.url} />
                    </div>)}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlepre}>&larr;Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.PageSize)} type="button" className="btn btn-dark" onClick={this.handlenext}>Next&rarr;</button>

                </div>

            </div>


        )
    }
}

export default Content