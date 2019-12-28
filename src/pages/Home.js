import React from "react";
import logo from '../static/logo192.png'
import firebase from '../firebase';
import Header from '../components/Header'
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
           <Header></Header>
        )
    }
}

export default Home;