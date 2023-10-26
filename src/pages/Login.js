import {Alert, Snackbar} from "@mui/material";
import axios from "axios";
import React, {useState} from "react";

function Login() {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [notification, setNotification] = useState(false)

    const successNotification = () => {
        setNotification(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setNotification(false);
    };

    function handleLogin() {
        axios.post("http://localhost:8080/auth/login", {
            "username": username,
            "password": password
        }).then(function (response) {
            console.log(response)
            successNotification()
        })
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
                        What you love to read? We have all types of book, login and enjoy all the genre book.
                    </p>
                    <p className="flex flex-col items-center justify-center mt-10 text-center">
                        <span>Don't have an account?</span>
                        <a href="/signup" className="underline">
                            Get Started!
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
                        Account Login
                    </h3>
                    <form onSubmit={
                            (e) => e.preventDefault()
                        }
                        className="flex flex-col space-y-5">
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="username" className="text-sm font-semibold text-gray-500">
                                Username
                            </label>
                            <input id="username" autoFocus className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                onChange={
                                    (e) => setUsername(e.target.value)
                                }/>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="text-sm font-semibold text-gray-500">
                                    Password
                                </label>
                                <a href="/" className="text-sm text-blue-600 hover:underline focus:text-blue-800">
                                    Forgot Password?
                                </a>
                            </div>
                            <input type="password" id="password" className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                onChange={
                                    (e) => setPassword(e.target.value)
                                }/>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" id="remember" className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"/>
                            <label htmlFor="remember" className="text-sm font-semibold text-gray-500">
                                Remember me
                            </label>
                        </div>
                        <div>
                            <button onClick={handleLogin} className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
                                Log in
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
