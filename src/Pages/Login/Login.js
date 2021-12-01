import React, { useRef } from 'react';
import useAuth from '../../Hooks/useAuth'
import Footer from '../Shared/Footer/Footer'
import Navigation from '../Shared/Navigation/Navigation';
const Login = () => {
    const passRef = useRef();
    const emailRef = useRef();
    const { emailSignIn, error, isLoading } = useAuth();
    const handleSubmit = (e) => {
        const Pass = passRef.current.value;
        const Email = emailRef.current.value;
        const newLogin = { Email, Pass };
        emailSignIn(Email, Pass);
        e.preventDefault();
        e.target.reset();
    }
    return (
        <>
            <Navigation />
            <div className="d-flex justify-content-center align-items-center m-3">
                <form onSubmit={handleSubmit} className="w-50 text-center">
                    <fieldset>
                        <legend><span className="text-info fw-bolder fs-2">Please Login</span></legend>
                        <input type="email" className="form-control mb-2" ref={emailRef} required placeholder="Email" id="" />
                        <input type="password" className="form-control mb-2" ref={passRef} required placeholder="Password" id="" />

                        <button type="submit" className="btn btn-success">SUBMIT</button>
                    </fieldset>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Login;