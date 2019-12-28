import React, { Component } from "react";
import './TradeList.scss'
import HeaderWithSearch from '../components/HeaderWithSearch'
import ProductCard from '../components/ProductCard'
class TradeList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="trade">
                <HeaderWithSearch />
                <h1 className="head">Trade</h1>
                <div className="h-divider" />
                <form class="search">
                    <input type="text" placeholder="Search.." name="search" />
                    <button type="submit"><i class="fa fa-search">Search</i></button>
                </form>
                <div className="cards">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>

            </div>
        )
    }

}

export default TradeList

