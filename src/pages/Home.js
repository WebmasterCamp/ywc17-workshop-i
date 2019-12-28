import React from "react";
import Header from '../components/Header'
import ImageSlider from '../components/ImageSlider'
import SellingMenu from '../components/SellingMenu'
class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                     <Header/>
                     <ImageSlider/>
                     <SellingMenu />
            </div>
        )
    }
}

export default Home;