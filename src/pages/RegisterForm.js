import React, { Component } from "react";

class RegisterForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="registerform">
                <h1 className="d-flex flex-row justify-content-center">Registeration</h1>
                <form className="container">
                    <div className="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" placeholder="Name" />    
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Surname</label>
                        <input type="text" className="form-control" placeholder="Surname" />    
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">User Name</label>
                        <input type="text" className="form-control" placeholder="User Name" />    
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control"  placeholder="Email" />    
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Password</label>
                        <input type="password" className="form-control"  placeholder="password" />    
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Confirm Password</label>
                        <input type="password" className="form-control" placeholder="confirm password" />    
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Date Of Birth </label>
                        <input type="date" className="form-control" placeholder="Date of Birth" />    
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Phone number</label>
                        <input type="tel" className="form-control" placeholder="phone number" />    
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Address</label>
                        <input type="text" className="form-control"  placeholder="Address" />    
                    </div>
                </form>
                <div className="d-flex flex-row justify-content-center">
                    <button className="btn btn-success">submit</button>
                </div>
            </div>
        )
    }

}

export default RegisterForm

