import React from "react";
import './Ads.scss';

class Ads extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
               <img src="/ads_01_new.jpg" id="ads"/>
            </div>
        )
    }
}

export default Ads;