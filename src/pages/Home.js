import React from "react";
import Header from '../components/Header'
import ImageSlider from '../components/ImageSlider'
import SellingMenu from '../components/SellingMenu'
import Content from '../pages/Content/Content'
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div id="home">
                <Header />
                <ImageSlider />
                <SellingMenu />
                <Content />
            </div>
        )
    }
}

export default Home;