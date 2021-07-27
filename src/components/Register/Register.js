import React from 'react'
import '../Signin/Signin.css'

const Register = ({onRouteChange}) => {

    return (
        <article className="ba b--gray  mv4 w-100 w-50-m w-25-l mw6 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="mv2 db fw6 lh-copy f6" htmlFor="name">Name</label>
                        <input className="input-from pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="name"  id="name" />
                    </div>
                    <div className="mt3">
                        <label className="mv2 db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="input-from pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="mv2 input-from  b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                    </div>
                    </fieldset>
                    <div className="">
                    <input
                        onClick= {() => onRouteChange("signin")} 
                        className="button-shadow b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" 
                        value="Register" />
                    </div>
                </div>
            </main>
    </article>

    )


}

export default Register