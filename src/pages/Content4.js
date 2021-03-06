import React from "react";
import HeaderLoggedIn from '../components/HeaderLoggedIn'
import './Content.scss';
import InstagramEmbed from 'react-instagram-embed';

class Content4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="content">
                <HeaderLoggedIn />
                <img src="/content-logo-4.jpg"></img>
                <h1>เสื้อผ้าเก่า ต่อชีวิตใหม่</h1>
                <div className="contentBody container">
                    <p>
                        ในปัจจุบันอุตสหกรรมเสื้อผ้าถือเป็นที่ยั่งยืนเพราะผู้คนยังคงต้องการเสื้อผ้า  เนื่องด้วยความจำเป็น และเพื่อเสริมบุคลิกภาพ ทว่ายังมีผู้คนส่วนหนึ่งที่ยังคงขาดแคลนเสื้อผ้าและเครื่องนุ่งห่ม OUT-FIT จึงขอเป็นสื่อกลางในการบริจาคเสื้อผ้า เพื่อมอบชีวิตใหม่ให้กับพี่น้องเผ่ามูเซอ และลาหู่ ที่ประสบปัญหาขาดแคลนเสื้อผ้า ณ หมู่บ้านออบเสือแว่น อ.เมือง จ.เชียงราย ทั้งนี้ ทาง OUT-FIT ยังมีความตั้งใจที่จะแบ่งปันความอบอุ่น รอยยิ้มให้แก่ผู้ด้อยโอกาส ผู้ประสบภัย และผู้อพยพ ด้วยเสื้อผ้าที่ไม่ใช้แล้ว เพื่อเสื้อผ้าเหล่านั้นจะได้ถูกนำกลับมาใช้ใหม่ และมอบชีวิตใหม่ให้กับผู้ด้อยโอกาสในพื้นที่อื่น ๆ ต่อไป
                   </p>
                    <br />
                    <p>
                        นอกจากนั้นโครงการนี้ยังเป็นการสนับสนุนให้ใช้เสื้อผ้าได้เต็มประสิทธิภาพ เพราะหากผู้บริโภคใช้งานเสื้อผ้าเป็นระยะเวลาสั้น ๆ ย่อมส่งผลต่อเนื่องกลับมาที่วัฎจักรและอุตสาหกรรมแฟชั่น โดยอุตสาหกรรมจะผลิตสินค้าออกมาจำนวนมากในระยะเวลาอันสั้น จนก่อให้เกิดเป็นขยะแฟชั่น นอกจากนั้นกระบวนการผลิตยังก่อให้เกิดมลพิษเป็นอย่างมาก OUT-FIT ตระหนักดีว่าการใช้งานเสื้อผ้าให้ได้มากที่สุดจนกว่าเสื้อผ้านั้นจะหมดมูลค่า เป็นหน้าที่ความรับผิดชอบที่สำคัญของทุกคน ดังนั้น “เสื้อผ้าเก่า ต่อชีวิตใหม่” จึงไม่ใช่แค่การแบ่งปัน แต่ยังเป็นส่วนหนึ่งในการลดปัญหาขยะแฟชั่นอีกด้วย
                   </p>
                    <h2>วิธีการบริจาค</h2>
                    <p>
                        "ท่านสามารถบริจาคเสื้อผ้าที่ใช้แล้วได้โดยส่งสินค้ามาที่สำนักงาน OUT-FIT (50/552 ซ.จุฬาฯ 42 เขตปทุมวัน ถนนพญาไท กทมฯ 10330) หรือนำเสื้อผ้าที่ต้องการบริจาคไปวางได้ที่ร้าน
          Bear Couse Cafe สาขา สยาม
          Everyday I Love My Life สาขา  อารีย์
          Unbirthday สาขา พร้อมพงษ์
         กรุณาซักและทำความสะอาดก่อนนำมาบริจาค เพื่อให้แน่ใจว่าเสื้อผ้ายังอยู่ในสภาพที่ดีที่สุด
         โปรดตรวจสอบให้มั่นใจว่าไม่มีสิ่งของมีค่าของท่านปะปนอยู่ในเสื้อผ้าที่ท่านนำมาบริจาค
                   </p>
                </div>
            </div>
        )
    }
}

export default Content4;