import React from "react";
import firebase from '../firebase';
import './Header.scss'

class Header extends React.Component {
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
            <div id="header">
                <nav class="navbar navbar-expand-lg navbar-light bg-light" >
                    <a class="navbar-brand" href="#" id="logo">
                        {/* Logo Image */}
                        <img src="/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
                        Out-Fit
                </a>
                
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse d-flex justify-content-end" id="navBarButton">
                        <ul class="navbar-nav d-flex flex-row align-items-end">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Content</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Deal
                            </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Buy</a>
                                    <a class="dropdown-item" href="#">Rent</a>
                                    {/* <div class="dropdown-item"></div> */}
                                    <a class="dropdown-item" href="#">Trade</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;