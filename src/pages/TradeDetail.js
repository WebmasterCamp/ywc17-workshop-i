import React, { Component } from "react";
import './TradeList.scss'
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
                </div>

                <Footer />
            </div>
        )
    }

}

export default TradeDetail

