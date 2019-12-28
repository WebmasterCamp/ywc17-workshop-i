import React, { Component } from "react";
import './RegisterForm.scss';

class RegisterForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="RegisterForm">
                <div className = "registration-left"></div>
                <div className = "registration-right">
                
                    <div className = "registration-box">
                        <h1 className="d-flex flex-row justify-content-center">Registration</h1>
                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1">ชื่อ</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />    
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">นามสกุล</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />    
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">username</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />    
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">อีเมล์</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />    
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">รหัสผ่าน</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />    
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">ยืนยันรหัสผ่าน</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />    
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">วันเดือนปีเกิด </label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />    
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">เบอร์โทรศัพท์</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />    
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">ที่อยู่</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />    
                            </div>
                        </form>
                    
                        <div className="d-flex flex-row justify-content-center">
                            <button className="btn">ยืนยัน</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default RegisterForm

