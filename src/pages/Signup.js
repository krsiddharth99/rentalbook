import {Alert, Snackbar} from "@mui/material";
import axios from "axios";
import React, {useState} from "react";


function Signup() {

    const [notification, setNotification] = React.useState(false);


    const successNotification = () => {
        setNotification(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setNotification(false);
    };


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [role, setRole] = useState("CUSTOMER");

    function handleSignUp() {

        axios.post("http://localhost:8080/auth/register", {
            "username": username,
            "password": password,
            "first_name": firstname,
            "last_name": lastname,
            "email": email,
            "address": address,
            "role": role
        }).then(function (response) {
            console.log(response);
            successNotification();

        }).catch(function (error) {
            console.log(error);
        });
    }


    return (
        <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
            <Snackbar open={notification}
                autoHideDuration={6000}
                onClose={handleClose}>
                <Alert onClose={handleClose}
                    severity="success"
                    sx={
                        {width: '100%'}
                }>
                    Successfully Registered
                </Alert>
            </Snackbar>
            <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
                <div className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
                    <div className="my-3 text-4xl font-bold tracking-wider text-center">
                        <a href="/">Rental Book</a>
                    </div>
                    <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
                        What you love to read? We have all types of book, login and enjoy
                                                                                                                                    all the genre book.
                    </p>
                    <p className="flex flex-col items-center justify-center mt-10 text-center">
                        <span>Already have an account?</span>
                        <a href="/login" className="underline">
                            Login!
                        </a>
                    </p>
                    <p className="mt-6 text-sm text-center text-gray-300">
                        Read our{" "}
                        <a href="/" className="underline">
                            terms
                        </a>
                        {" "}
                        and{" "}
                        <a href="/" className="underline">
                            conditions
                        </a>
                    </p>
                </div>
                <div className="p-5 bg-white md:flex-1">
                    <h3 className="my-4 text-2xl font-semibold text-gray-700">
                        Account Sign Up
                    </h3>
                    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col space-y-5">
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="email" className="text-sm font-semibold text-gray-500">
                                Username
                            </label>
                            <input type="text" id="username" autoFocus className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                onChange={
                                    (e) => setUsername(e.target.value)
                                }/>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="text-sm font-semibold text-gray-500">
                                    Password
                                </label>

                            </div>
                            <input type="password" id="password" className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                onChange={
                                    (e) => setPassword(e.target.value)
                                }/>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="email" className="text-sm font-semibold text-gray-500">
                                Email address
                            </label>
                            <input type="email" id="email" autoFocus className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                onChange={
                                    (e) => setEmail(e.target.value)
                                }/>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="firstname" className="text-sm font-semibold text-gray-500">
                                First Name
                            </label>
                            <input type="text" id="firstname" autoFocus className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                onChange={
                                    (e) => setFirstname(e.target.value)
                                }/>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="lastname" className="text-sm font-semibold text-gray-500">
                                Last Name
                            </label>
                            <input type="text" id="lastname" autoFocus className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                onChange={
                                    (e) => setLastname(e.target.value)
                                }/>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="address" className="text-sm font-semibold text-gray-500">
                                Address
                            </label>
                            <textarea type="text" id="address" autoFocus className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                onChange={
                                    (e) => setAddress(e.target.value)
                                }/>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="cars">Select a role:</label>

                            <select name="roles" id="roles" className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                onChange={
                                    (e) => setRole(e.target.value)
                            }>

                                <option value="CUSTOMER">Customer</option>
                                <option value="SELLER">Seller</option>
                            </select>
                        </div>


                        <div>
                            <button type="" className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                onClick={handleSignUp}>
                                Log in
                            </button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
}

export default Signup;
