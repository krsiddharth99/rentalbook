import { Box, Button, Modal } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import NewUserModal from '../Modals/NewUserModal';

import { useAuth } from '../context/DecodedToken';


function ManageUsers() {

    const [users, setUsers] = useState([]);

    const [newUserModal, setNewUserModal] = useState(false);

    const { axiosHeaders, decodedToken } = useAuth();

    useEffect(() => {
        if (axiosHeaders !== undefined) {

            axios.get(`http://localhost:8080/admin/users`, axiosHeaders)
                .then((res) => setUsers(res.data))
                .catch((err) => console.log(err))
        }
    }, [newUserModal, axiosHeaders])

    const handleDelete = (userId) => {
        axios.delete(`http://localhost:8080/admin/users/${userId}`, axiosHeaders)
            .then((res) => alert(res.data))
            .catch((err) => console.log(err.response.data.message));
        window.location.reload();
    }


    return (
        <>
            <div className='p-8 bg-gray-100 text-2xl shadow-md text-center mb-8'>
                Manage Users
            </div>

            {decodedToken && decodedToken.roles === 'ADMIN'
                ?
                <div>
                    <table className='w-3/4 text-left border-separate border border-slate-600 p-2 m-auto mb-8'>

                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Role</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Delete User</th>
                            </tr>
                        </thead>

                        <tbody>

                            {users.length > 0
                                ?
                                users.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                        <td>{user.authorities[0].authority}</td>
                                        <td>{user.email}</td>
                                        <td>{user.address}</td>
                                        <td className='px-8'><RiDeleteBin6Line className='cursor-pointer hover:scale-125' onClick={() => handleDelete(user.id)} /></td>

                                    </tr>
                                ))

                                :
                                <tr></tr>}

                        </tbody>

                    </table >


                    <div className='m-8'>
                        <Button variant='contained' onClick={() => setNewUserModal(true)}>Create a new User</Button>
                    </div>

                    <Modal open={newUserModal}
                        onClose={() => setNewUserModal(false)}>
                        <Box className="modal-box-container">
                            <NewUserModal closeModal={() => setNewUserModal(false)} />
                        </Box>
                    </Modal>
                </div>
                :
                <div className='font-bold text-lg m-auto text-center mb-8'>
                    You are not authorized to view this page.
                </div>
            }


        </>
    )
}

export default ManageUsers