import { Button, Container, Typography } from '@mui/material';
import React, { useRef } from 'react';
import useAuth from '../../Hooks/useAuth'
import Navigation from '../Shared/Navigation/Navigation'
import Footer from '../Shared/Footer/Footer'
// import axios from 'axios';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
const SignIn = () => {
    const FirstNameRef = useRef();
    const LastNameRef = useRef();
    const PhoneRef = useRef();
    const EmailRef = useRef();
    const AdressRef = useRef();
    const EducationRef = useRef();
    const JoinRef = useRef();
    const PassRef = useRef();
    const { createUser, googleSignIn } = useAuth();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        const FirstName = FirstNameRef.current.value;
        const LastName = LastNameRef.current.value;
        const Phone = PhoneRef.current.value;
        const Email = EmailRef.current.value;
        const Adress = AdressRef.current.value;
        const Education = EducationRef.current.value;
        const Join = JoinRef.current.value;
        const Pass = PassRef.current.value;
        createUser(Email, Pass, FirstName, navigate);

        const newMember = {
            FirstName,
            LastName,
            Phone,
            Email,
            Adress,
            Education,
            Join
        }
        fetch('http://localhost:4000/newuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newMember)
        })
            .then(res => console.log(res.data))

        e.preventDefault();
        e.target.reset();
    }
    return (
        <>
            <Navigation />
            <Container>
                <div className="d-flex justify-content-center align-items-center m-3">
                    <form onSubmit={handleSubmit} className="w-50 text-center">
                        <fieldset>
                            <legend><span className="text-info fw-bolder fs-2">Please Resgister</span></legend>
                            <input type="text" className="form-control mb-2" ref={FirstNameRef} required placeholder="First Name" id="" />
                            <input type="text" className="form-control mb-2" ref={LastNameRef} required placeholder="Last Name" id="" />
                            <input type="text" className="form-control mb-2" ref={PhoneRef} required placeholder="Phone" id="" />
                            <input type="text" className="form-control mb-2" ref={AdressRef} required placeholder="Address" id="" />
                            <input type="text" className="form-control mb-2" ref={EducationRef} required placeholder="Highest Education" />
                            <input type="date" className="form-control mb-2" ref={JoinRef} required placeholder="Join Date" id="" />
                            <input type="email" className="form-control mb-2" ref={EmailRef} required placeholder="Email" id="" />
                            <input type="password" className="form-control mb-2" ref={PassRef} required placeholder="Password" id="" />
                            <button type="submit" className="btn btn-success">SUBMIT</button>
                        </fieldset>
                    </form>
                </div>
                <div className="d-flex flex-column align-items-center mb-3">
                    <Typography variant="h6">
                        OR
                    </Typography>
                    <Button variant="contained" onClick={googleSignIn} sx={{ backgroundColor: 'grey' }}>Signin Using google Account</Button>
                </div>
                <Link to="/login">Already An User? Please Login</Link>
            </Container>

            <Footer />
        </>
    );
};

export default SignIn;