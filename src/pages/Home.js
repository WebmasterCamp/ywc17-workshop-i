import React from "react";
import logo from '../static/logo192.png'
import { connect } from 'react-redux'
import firebase from '../firebase';
import { sessionAction } from '../actions/sessionAction'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.sessionAction(user.email)
            }
        })
    }
    render() {
        return (
            <div>
                <img src={logo} alt="Logo" />
                {
                    !!!this.props.currentUser ?
                        <h1>Welcome To Todos Please Login</h1>
                        :
                        <h1>Welcome Back {this.props.currentUser}</h1>
                }
            </div>

        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.sessionReducer.currentUser
})
const mapDispatchToProps = dispatch => ({
    sessionAction: (user) => dispatch(sessionAction(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);