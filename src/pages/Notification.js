import React, { Component } from "react";
import './Notification.scss';
import Footer from '../components/Footer'

class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            typeSucess: 'success',
            disabled: 'disabled'
        }
    }

    render() {
        return (
            <div id="notification">
                <div className="container"> 
                    <h1>ยินดีด้วยให้จัดส่งสินค้าไปที่</h1>
                    <h3> 62/5 ถ.ลาดพร้าว แขวงจอมพล เขตจุจักร กรุงเทพมหานคร 10900</h3>
                    <a href="/point"><button className="btn btn-success" onClick={this.acceptProduct}>ส่งสินค้าแล้ว</button></a>
                    <button className="btn  btn-secondary disabled">ได้รับสินค้า</button>
                </div>
               
              <Footer/>
            </div>
        )
    }

}

export default RegisterForm

