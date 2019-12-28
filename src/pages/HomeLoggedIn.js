import React from "react";
import HeaderLoggedIn from '../components/HeaderLoggedIn'
import ImageSlider from '../components/ImageSlider'
import SellingMenu from '../components/SellingMenu'
import Content from './Content/Content'
import Subheader from '../components/Subheader'
import Footer from '../components/Footer'
class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="home">
                <HeaderLoggedIn />
                <ImageSlider />
                <Subheader />
                <SellingMenu />
                <Content />
                <Footer />
            </div>
        )
    }
}

export default Home;