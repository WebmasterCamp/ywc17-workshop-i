import React, { Component } from "react";
import './TradeList.scss'
import ProductCard from '../components/ProductCard'
import HeaderWithSearch from '../components/HeaderWithSearch'
class TradeDetail extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="tradeDetail">
                <HeaderWithSearch />
                <div className="product">
                    <img src="" />
                    <div className='description'>
                        <p className="productTitle">
                            Title: test
                   </p>
                        <p className="productRank">
                            Rank: A
                   </p>
                        <p className="productWarranty">
                            Warranty: 5 Years
                   </p>
                    </div>
                    <button>สนใจ Trade</button>
                    <button>Chat</button>
                </div>
                <div className='owner'>
                    <img src="" />
                    <p>Supakorn</p>
                    <p>Score *****</p>
                </div>
                <div className='Comment'>
                    
                </div>
            </div>
        )
    }

}

export default TradeDetail

