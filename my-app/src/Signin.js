import React from 'react'
import './Signin.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';

class Signin extends React.Component{
    render(){
        return(
            <div className="signin-wrapper">
                <h1>Login Form</h1>
                
                <AccountCircleSharpIcon id="signin-profile"></AccountCircleSharpIcon>

                <form className="signin-form" action="#">
                    <input type="text" className="signin-form-control" placeholder="Mobile or Email" required />
                    <input type="password" className="signin-form-control" placeholder="Password" required />
                    <div className="signin-form-control, signin-form-control-span " >
                        <span>
                            <input type="checkbox" />
                            <label class="signin-form-span-label">Remember me</label>
                        </span>
                        <span>
                            <a href="#"> Forgot Password?</a>
                        </span>
                    </div>
                    <div className="signin-form-button">
                        <input type="submit" value="Login" className="signin-form-button" />
                    </div>
                </form>

                <div>
                    <a href="#">Create a New Account</a>
                    <p>(or)</p>
                    <a href="#">
                        <FacebookIcon id="signin-facebook"></FacebookIcon>
                    </a>
                    <a href="#">
                        <TwitterIcon id="signin-twitter"></TwitterIcon>
                    </a> 
                </div>
            </div>
        );
    }
}

export default Signin