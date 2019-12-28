import React, { Component } from "react";
<<<<<<< HEAD
import './TradeDetail.scss'
import ProductCard from '../components/ProductCard'
=======
import './TradeList.scss'
>>>>>>> 3dd6e3caab2c9b035c7e12e25e7957f0ad08913a
import HeaderLoggedIn from '../components/HeaderLoggedIn'
import Footer from '../components/Footer'

class TradeDetail extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="tradeDetail">
                <HeaderLoggedIn />
<<<<<<< HEAD
                <div className="product">
                    <div className = "item-img">
                        <img className ="item" src="http://code.slicecrowd.com/labs/4/images/t-shirt.png" />
                    </div>

                    <div className='description'>
                        <p className="productTitle"> เสื้อยืดสกรีนลายภาษาอังกฤษ </p>
                        <p className="productRank"> Rank: A </p>
                        <p className="productWarranty"> Warranty: 5 Years</p>
                        <a href="/selecttotrade"><button>สนใจ Trade</button></a>
                    <button>Chat</button>
                    </div>
                </div>
                <div className='owner'>
                    <img src="" />
                    <p>Supakorn</p>
                    <p>Score *****</p>
                </div>
                <div className='Comment'>
                    <p>Comment Review</p>
=======
                <div className="row container">
                    <div className="col-6">
                            <img src="http://code.slicecrowd.com/labs/4/images/t-shirt.png" />
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
                    </div>

                    <div className="col-6">

                    </div>
>>>>>>> 3dd6e3caab2c9b035c7e12e25e7957f0ad08913a
                </div>

                <Footer />
            </div>
        )
    }

}

export default TradeDetail

