import React, { Component } from "react";

class Term extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="RegisterForm">
                <h1 className="d-flex flex-row justify-content-center">Registeration</h1>
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />    
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Surname</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />    
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">User Name</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />    
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />    
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Password</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />    
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Confirm Password</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />    
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Date Of Birth </label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />    
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Phone number</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />    
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />    
                    </div>
                </form>
                <div className="d-flex flex-row justify-content-center">
                    <button className="btn btn-success">submit</button>
                </div>
            </div>
        )
    }

}

export default Term

