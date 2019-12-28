import React from "react";
import firebase from '../firebase';
import './Footer.scss'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
                <div className="row d-flex justify-content-center">
                     <img src="/logo.svg" width="300"/>  
                </div>
               <div className="row justify-content-center">
                   <p>Contact</p>
                   <p>About Us</p>
                   <p>Deal</p>
                   <p>Articles</p>
               </div>
               <div className="row justify-content-center">
                   <p>Lorem Ipsum is simply dummy text of the printing ssages, and more re</p>
             </div>
            </div>
        )
    }
}

export default Header;