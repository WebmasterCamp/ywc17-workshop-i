import React, { Component } from "react";
import './Notification.scss';
import Footer from '../components/Footer'
import Notification2 from "./Notification2";

class Notification extends Component {
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
                     <div className = "notification" id="notification">
                <div className="container"> 
                    <h1>ยินดีด้วย การแลกเปลี่ยนสำเร็จ</h1>
                    <h3>คุณสามารถทำการจัดส่งสินค้าไปที่</h3>
                    <h3 className = "location"> 62/5 ถ.ลาดพร้าว แขวงจอมพล เขตจุจักร กรุงเทพมหานคร 10900</h3>

                    <p>เมื่อส่งเรียบร้อย ให้กดส่งสินค้าแล้ว และรอรับสินค้าที่ทำการแลกเปลี่ยน</p>
                    <div className = "button-list">
                    <a href="/noti2"><button className="btn btn-success" onClick={this.acceptProduct}>ส่งสินค้าแล้ว</button></a>
                    <button className="btn  btn-secondary disabled">ได้รับสินค้า</button>
                    </div>
                </div>
            </div>
            <Footer/>
            </div>
        )
    }

}

export default Notification

