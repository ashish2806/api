import React, { Component } from 'react';
import './Login.css';
class Login extends Component
{
    state={
        email:'',
        password:''
    }

    loginHandler(){
    console.log(this.state);
    }

    onChnageHandler(e){
          //  this.setState({e.target.value : e.target.value});
          console.log(e.target.value);
    }
    render()
    {
        return(
            <div className="login-form">
                 <h2 className="text-center">Log in</h2>       
                        <div className="form-group">
                            <input name="email" type="text" className="form-control" placeholder="Username" required="required"  onChange={(event) => this.setState({[event.target.name]: event.target.value})} />
                        </div>
                        <div className="form-group">
                            <input name="password" type="password" className="form-control" placeholder="Password"  required="required" onChange={(event) => this.setState({[event.target.name]: event.target.value})} />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block" onClick={()=>this.loginHandler()}>Log in</button>
                        </div>
                        <div className="clearfix">
                            <label className="pull-left checkbox-inline"><input type="checkbox" /> Remember me</label>
                            <a href="#" className="pull-right">Forgot Password?</a>
                        </div>        
                
                        <p className="text-center"><a href="#">Create an Account</a></p>

            </div>
        );
    }
}


export default Login;