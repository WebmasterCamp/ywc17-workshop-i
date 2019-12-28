import React from "react";
import firebase from '../firebase';

import './ProductCard.scss';

class ProductCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div id="productCard">
                <div class="container page-wrapper">
                    <div class="page-inner">
                        <div class="row">
                            <div class="el-wrapper">
                                <div class="box-up">
                                    <img class="img" src="http://code.slicecrowd.com/labs/4/images/t-shirt.png" alt="" />
                                    <div class="img-info">
                                        <div class="info-inner">

                                        </div>
                                        <div class="a-size">I feel like Pablo</div>
                                    </div>
                                </div>

                                <div class="box-down">
                                    <div class="h-bg">
                                        <div class="h-bg-inner"></div>
                                    </div>

                                    <a class="cart" href="#">
                                        <span class="price">*****</span>
                                        <span class="add-to-cart">
                                            <span class="txt">See detail</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductCard;