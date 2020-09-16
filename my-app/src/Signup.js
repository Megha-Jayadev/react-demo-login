import React from 'react'
import './Signup.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

class Signup extends React.Component{
    render(){
        return(
            <div className="signup-wrapper">
                <h1>Sign Up Form</h1>
                <form className="signup-form">
                    <input type="text" className="signup-form-control" placeholder="First name" required />
                    <input type="text" className="signup-form-control" placeholder="Last name" required />
                    <input type="email" className="signup-form-control" placeholder="mail@example.com" required/>
                    <input type="text" className="signup-form-control" placeholder="Please enter a phone number" required />
                    <input type="Password" className="signup-form-control" placeholder="Password" required/>
                    <input type="Password" className="signup-form-control" placeholder="Confirm Password" required />
                    <span className="signup-form-span">
                        <input type="checkbox"/>
                        <label className="signup-form-span-label">I agree to</label>
                        <a href="#">Terms </a> 
                        <label className="signup-form-span-label">and</label> 
                        <a href="#">Privacy Policy</a>
                    </span>
                    
                    <input type="submit" value="Sign Up" className="signup-form-button" />
                </form>
            </div>
        );
    }
}

export default Signup