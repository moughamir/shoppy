import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Items from './Items';

const shops = '/shops';
axios.defaults.baseURL = shops;


export default class Shops extends Component {
    constructor() {
        super();
        this.state = {
            shops: [],
            favorite: [],
        }
    }

    getShops() {
        let that = this;
        axios.get('/')
            .then(function (response) {
                that.setState({
                    shops: response.data
                })
            })
            .catch(function (error) {
                console.error('Axios : ' + error)
            })
    }

    componentWillMount() {
        this.getShops();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Items shops={this.state.shops} />
                </div>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Shops />, document.getElementById('app'));
}
