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
                   <p className = "description">OUT-FIT คือเว็บไซต์ที่สนับสนุนให้ทุกคนนำเสื้อผ้าที่ใช้แล้ว มาใช้ซ้ำอย่างคุ้มค่าด้วยการขายต่อ เช่า แลกเปลี่ยน และบริจาค เพื่อยืดวงจรการใช้งานเสื้อผ้าให้เต็มประสิทธิภาพ ลดปัญหาขยะแฟชั่น ให้การแต่งตัวเป็นเรื่องสนุก โดยไม่ต้องทำร้ายโลก</p>
             </div>
            </div>
        )
    }
}

export default Header;