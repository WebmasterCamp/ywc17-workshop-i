import React from "react";
import Header from '../components/Header'
import ImageSlider from '../components/ImageSlider'
import SellingMenu from '../components/SellingMenu'
import Content from '../pages/Content/Content'
import Subheader from '../components/Subheader'
class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="home">
                <Header />
                <ImageSlider />
                <Subheader />
                <SellingMenu />
                <Content />
            </div>
        )
    }
}

export default Home;