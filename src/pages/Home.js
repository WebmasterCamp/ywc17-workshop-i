import React from "react";
import firebase from '../firebase';
import Header from '../components/Header'
import ImageSlider from '../components/ImageSlider'
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        // firebase.auth().onAuthStateChanged(user => {
        //     if (user) {
        //         this.props.sessionAction(user.email)

        //     }
        // })
    }
    render() {
        return (
            <div>
                     <Header/>
                     <ImageSlider/>
            </div>
        )
    }
}

export default Home;