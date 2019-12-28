import React from "react";
import firebase from '../firebase';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Content from './Content/Content'
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
            <div id="home">
                <Header />
                <Content />
                {/* <Footer></Footer> */}
            </div>

        )
    }
}

export default Home;