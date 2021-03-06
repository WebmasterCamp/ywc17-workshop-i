import React, { Component } from "react";
import './Notification.scss';
import Footer from '../components/Footer'
import HeaderLoggedIn from '../components/HeaderLoggedIn'

class Notification2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            typeSucess: 'success',
            disabled: 'disabled'
        }
    }

    render() {
        return (
            <div>
                
                <HeaderLoggedIn/>
                <div className = "notification" id="notification">
                <div className="container"> 
                    <h1>ยินดีด้วย การแลกเปลี่ยนสำเร็จ</h1>
                    <h3>คุณสามารถทำการจัดส่งสินค้าไปที่</h3>
                    <h3 className = "location"> 62/5 ถ.ลาดพร้าว แขวงจอมพล เขตจุจักร กรุงเทพมหานคร 10900</h3>

                    <p>เมื่อส่งเรียบร้อย ให้กดส่งสินค้าแล้ว และรอรับสินค้าที่ทำการแลกเปลี่ยน</p>
                    <div className = "button-list">
                    <button className="btn  btn-secondary disabled" onClick={this.acceptProduct}>ส่งสินค้าแล้ว</button>
                    <a href="/point"><button className="btn btn-success">ได้รับสินค้า</button></a>
                    </div>
                </div>
            </div>
            <Footer/>
            </div>
        )
    }
}

export default Notification2