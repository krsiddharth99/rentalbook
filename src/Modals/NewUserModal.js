import axios from 'axios';
import React, { useState } from 'react'

function NewUserModal({closeModal}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [role, setRole] = useState("CUSTOMER");

    function handleCreateUser() {

        axios.post("http://localhost:8080/auth/register", {
            "username": username,
            "password": password,
            "first_name": firstname,
            "last_name": lastname,
            "email": email,
            "address": address,
            "role": role
        }).then(function (response) {
            closeModal();

        }).catch(function (error) {
            console.log(error);
        });
    }

  return (
    <div>
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
                                onClick={handleCreateUser}>
                                Register
                            </button>
                        </div>

                    </form>
    </div>
  )
}

export default NewUserModal