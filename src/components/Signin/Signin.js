import React from 'react'
import './Signin.css'

class Signin extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            signinEmail : '',
            signinPassword : ''
        }
    }
    onEmailChange = (event)=> {
        this.setState({signinEmail : event.target.value})
    }
    onPasswordChange = (event)=> {
        this.setState({signinPassword : event.target.value})
    }

    onSubmitSignin = () => {
        fetch('http://localhost:3000/signin',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signinEmail,
                password: this.state.signinPassword
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user.id) {
                this.props.loadUser(user)
                this.props.onRouteChange("home")
            }
        })
        
    }
    render() {
        return (
            <article className="ba b--gray  mv4 w-100 w-50-m w-25-l mw6 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="mv2 db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input onChange={this.onEmailChange} className="input-from pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input onChange={this.onPasswordChange} className="mv2 input-from  b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                        </div>
                        </fieldset>
                        <div className="">
                        <input
                            onClick= {this.onSubmitSignin} 
                            className="button-shadow b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Sign in" />
                        </div>
                        <div className="lh-copy mt3">
                        <p onClick={()=> this.props.onRouteChange("Register")}  className="f6 link dim black db pointer">Register</p>
                        </div>
                    </div>
                </main>
        </article>
    
        )
        
    }
    


}

export default Signin