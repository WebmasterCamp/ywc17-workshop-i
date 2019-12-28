import React, { Component } from "react";
import './Term.scss';

class Term extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className = "condition-container" id="Term">
                <div className = "condition-box">
                <h1 className="d-flex flex-row justify-content-center">ข้อกำหนดและเงื่อนไข</h1>
                <div  className="condition-list">
                    <p className = "topic">1.การลงทะเบียน</p>
                    <p>1.1) ในการส่งคำสั่งซื้อ ท่านจะต้องลงทะเบียนกับเราโดยการสร้างบัญชีผู้ใช้บนเว็บไซต์นี้ ท่านต้องยื่นเฉพาะข้อมูลที่ถูกต้องและแท้จริงกับเราเท่านั้น นอกจากนี้ ท่านยังต้องอัปเดตข้อมูลที่ท่านให้ไว้กับเรา โดยแจ้งทางเราถ้ามีการเปลี่ยนแปลงใด ๆ ในข้อมูลที่ท่านให้ไว้กับเรา โดยใช้ส่วนที่เกี่ยวกับการแจ้งเรื่องในเว็บไซต์นี้</p>
                    <p>1.2) ท่านต้องไม่นำเว็บไซต์นี้ไปใช้ในทางที่ผิดโดยการสร้างบัญชีผู้ใช้หลาย ๆ บัญชี</p>
                    <p className = "topic">2.การทำสัญญา</p>
                    <p>2.1) ในการยื่นคำสั่งซื้อ ท่านจะต้องทำตามขั้นตอน การซื้อสินค้าทางออนไลน์ในเว็บไซต์นี้ หลังจากนี้ท่านจะได้รับคำยืนยันคำสั่งซื้อ ซึ่งถือว่าเป็นการยอมรับคำสั่งซื้อของท่าน</p>
                    <p className = "topic">3.ราคาและการชำระเงิน</p>
                    <p>3.1) แม้ว่าเราจะใช้ความพยายามอย่างดีที่สุดในการทำให้รายละเอียด คำอธิบาย และราคาที่ปรากฏอยู่ในเว็บไซต์นี้ถูกต้อง ความผิดพลาดอาจเกิดขึ้นได้ ถ้าเราพบว่าเกิดความผิดพลาดขึ้นในราคาของสินค้าใด ๆ ที่ท่านได้สั่งซื้อ เราจะแจ้งท่านเกี่ยวกับเรื่องนี้โดยเร็วที่สุด และยังคงให้ท่านตัดสินใจว่าจะยังคงยืนยันคำสั่งซื้อของท่านเช่นเดิม หรือยกเลิกคำสั่งซื้อนั้นไป</p>
                    <p>3.2) ท่านสามารถชำระเงินโดยใช้ช่องทางบริการชำระเงินที่แสดงรายชื่อไว้ในโฮมเพจของเรา นอกจากนั้นท่านยังสามารถชำระเงินทั้งหมดหรือบางส่วนของราคาสินค้า โดยใช้แต้มคะแนนสะสมได้เช่นกัน</p>
                    <p className = "topic">4.คำสั่งซื้อที่ผิดพลาด</p>
                    <p className = "topic">5.การจัดส่ง</p>
                    <p>5.1) เรามุ่งหมายที่จะเป็นตัวกลางในการแลกเปลี่ยนและซื้อขายสินค้า ณ สถานที่ส่งมอบที่ท่านระบุไว้ในใบคำสั่งซื้อของท่านและผู้แลกเปลี่ยน และตามวันส่งมอบที่ได้ระบุไว้ ณ วันที่ท่านออกจากหน้าเพจคำสั่งซื้อ (ตามข้อมูลในอีเมลยืนยันคำสั่งซื้อ)</p>
                    <p>5.2) ทางเราจะรับผิดชอบต่อความผิดพลาดหากท่านไม่ได้รับสินค้า</p>
                    <p>5.3) เมื่อได้ส่งมอบสินค้าแล้ว ท่านต้องลงนามรับรองการส่งมอบ ท่านสามารถติดต่อ OUT-FIT ฝ่ายบริการลูกค้าที่เบอร์ 1639 หรือ customerservice.th@out-fit.com ในกรณีที่มีความผิดพลาด ความบกพร่อง หรือความเสียหายเกิดขึ้นกับสินค้า ท่านต้องจัดหาเอกสารที่ส่งมอบพร้อมกับสินค้าคืนให้เราได้ เมื่อเราร้องขอไป</p>
                    <p className = "topic">6.การส่งคืนสินค้า และนโยบายการคืนเงิน</p>
                    <p>6.1) ถ้าท่านไม่พึงพอใจกับสินค้าที่ท่านซื้อ ท่านอาจส่งสินค้าดังกล่าวคืนภายในสามสิบ (30) วันนับจากวันที่ได้รับสินค้า</p>
                    <p>6.2) ท่านต้องส่งคืนสินค้ามาในสภาพเหมือนเดิมดังที่เป็นตอนที่ท่านรับสินค้า และบรรจุหีบห่ออย่างเรียบร้อย</p>
                    <p>6.3) หากคุณภาพของสินค้าไม่ตรงตามรายละเอียดที่ระบุไว้บนเว็บไซต์ ทางเว็บไซต์จะคืนเงินเป็นจำนวนเงินตามที่ระบุไว้ในเงื่อนไขประกัน</p>
                    <p>6.4) ในบางกรณี นโยบายการชำระเงิน/การยกเลิกและการคืนเงินสำหรับสินค้าบางอย่างอาจแตกต่างจากเงื่อนไขมาตรฐานทั่วไปตามที่ระบุไว้ ณ ที่นี้ ในกรณีดังกล่าว เราจะแสดงเงื่อนไขพิเศษไว้ในส่วนของรายละเอียดสินค้า</p>
                    <p>6.5) บรรดาคำอธิบายสินค้า และข้อมูลที่โพสต์ไว้ในเว็บไซต์นี้ ได้แสดงไว้ “ตามที่เป็นอยู่” โดยไม่มีการให้การรับประกันไว้อย่างชัดแจ้ง หรือเป็นนัยไว้ หรือรับประกันไว้โดยประการอื่นใดก็ตาม</p>
                    <p>6.6) รูปภาพผลิตภัณฑ์ที่เห็นบนในเว็บไซต์นี้อาจแตกต่างไปเล็กน้อยจากตัวผลิตภัณฑ์จริงที่ท่านได้รับ</p>
                    <p>6.7) ถ้าสินค้าที่ท่านได้รับมีความบกพร่อง ให้ติดต่อฝ่ายบริการลูกค้าของเรา ที่หมายเลขโทรศัพท์ 1639 หรือ customerservice.th@out-fit.com แล้วแจ้งเลขที่คำสั่งซื้อ ชื่อและที่อยู่ของท่าน รายละเอียดของสินค้า และเหตุผลที่ต้องการส่งคืน ทางเว็บไซต์จะคืนเงินเป็นจำนวนเงินตามที่ระบุไว้ในแพ็กเกจประกัน</p>
                    <p>6.8) ทันทีที่ได้รับสินค้า ท่านต้องตรวจสอบสินค้าภายในเจ็ด (7) วัน  จากนั้นเราจะแจ้งท่านเกี่ยวกับสิทธิในการได้รับการเปลี่ยนสินค้าให้ใหม่หรือขอเงินคืน (ถ้ามี) ผ่านทางอีเมลโดยเร็วที่สุดเท่าที่ทำได้</p>
                    <p className = "topic">7.การปกป้องข้อมูลส่วนตัว</p>
                </div>
                <div className="checkbox d-flex flex-row justify-content-center">
                    <label for="cbk1">
                        <input className = "checkmark" type="checkbox" value = "checked" />
                        ฉันได้อ่านและยอมรับข้อกำหนดข้างต้นแล้ว
                    </label>
                </div>

                <div className="d-flex flex-row justify-content-center">
                    <button className="btn">ไปต่อ</button>
                </div>
                </div>     
            </div>
        )
    }

}

export default Term

