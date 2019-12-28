import React, { Component } from "react";
import './Notification.scss';
import Footer from '../components/Footer'

class RegisterForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="notification">
                <div className="container"> 
                    <h1>ยินดีด้วยให้จัดส่งสินค้าไปที่</h1>
                    <h3> 62/5 ถ.ลาดพร้าว แขวงจอมพล เขตจุจักร กรุงเทพมหานคร 10900</h3>
                    <button className="btn btn-success">ส่งสินค้าแล้ว</button>
                    <button className="btn  btn-secondary disabled">ได้รับสินค้า</button>
                </div>
               
              <Footer/>
            </div>
        )
    }

}

export default RegisterForm

