import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstNameError, setFirstNameError] =useState("");
    const [lastNameError, setLastNameError] =useState("");
    const [emailError, setEmailError] =useState("");
    const [passwordError, setPasswordError] =useState("");
    const [confirmPasswordError, setConfirmPasswordError] =useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2) {
            setFirstNameError("First Name must be 2 characters or longer!");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2) {
            setLastNameError("Last Name must be 2 characters or longer!");
        } else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        } else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value !== password) {
            setConfirmPasswordError("Passwords must match!");
        } else {
            setConfirmPasswordError("");
        }
    }

    const createUser = (e) => {

        e.preventDefault();

        const newUser = { firstName, lastName, email, password, confirmPassword };
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label>
                    <input type="text" value={firstName} onChange={ handleFirstName } />
                    {
                        firstNameError ?
                        <p>{ firstNameError }</p> : 
                        ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" value={lastName} onChange={ handleLastName } />
                    {
                        lastNameError ?
                        <p>{ lastNameError }</p> : 
                        ''
                    }
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" value={email} onChange={ handleEmail } />
                </div>
                {
                        emailError ?
                        <p>{ emailError }</p> : 
                        ''
                    }
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={ handlePassword } />
                    {
                        passwordError ?
                        <p>{ passwordError }</p> : 
                        ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" value={confirmPassword} onChange={ handleConfirmPassword } />
                    {
                        confirmPasswordError ?
                        <p>{ confirmPasswordError }</p> : 
                        ''
                    }
                </div>
            </form>
            
            <div>
                <h2>Your Form Data</h2>
                <p>First Name: {firstName} </p>
                <p>Last Name: {lastName} </p>
                <p>Email: {email} </p>
                <p>Password: {password} </p>
                <p>Confirm Password: {confirmPassword} </p>
            </div>

        </div>
    );
};

export default UserForm;
