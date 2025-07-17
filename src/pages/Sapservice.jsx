import { useEffect, useState } from "react";
import Layout from "../component/Layout";
import axios from "axios";

const Sapservice = () => {


    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos/');
                setUsers(response.data);
                console.log("Fetched users:", response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers(); // ✅ Call it here
    }, []); // ✅ Only run on mount

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(users.length / itemsPerPage);
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);




    return (
        <Layout>

            <div className="pt-20 p-4 max-w-7xl mx-auto">
                <div >
                    <h2 className="text-xl text-gray-700  mb-1 font-extrabold  textAlign: text-center">Sap Services</h2>
                    {/* Desktop View */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="min-w-full bg-white border text-gray-700 font-bold border-gray-200 shadow-sm">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-3 border-b text-left">No:</th>
                                    {/* <th className="px-4 py-3 border-b text-left">Name</th> */}
                                    <th className="px-4 py-3 border-b text-left">Service responce</th>
                                    <th className="px-4 py-3 border-b text-left">Status</th>
                                    {/* <th className="px-4 py-3 border-b text-left">Email</th> */}
                                    {/* <th className="px-4 py-3 border-b text-left">Password</th> */}
                                    {/* <th className="px-4 py-3 border-b text-left">Actions</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {currentUsers.map((user, index) => (

                                    <tr key={user.id} className="hover:bg-gray-50">
                                        {/* <td className="px-4 py-3 border-b">{index + 1}</td> */}
                                        <td className="px-4 py-3 border-b">{indexOfFirstItem + index + 1}</td>

                                        <td className="px-4 py-3 border-b">{user.title}</td>
                                        {/* <td className="px-4 py-3 border-b">{user.completed ? 'Yes' : 'No'}</td> */}
                                        {/* <td
                                        className={`px-4 py-3 border-b font-semibold ${user.error
                                            ? 'text-red-600'
                                            : user.completed
                                                ? 'text-green-600'
                                                : 'text-yellow-600'
                                            }`}
                                    >
                                        {user.error ? 'Error' : user.completed ? 'Active' : 'Pending'}
                                    </td> */}
                                        <td className="px-4 py-3 border-b font-semibold">
                                            <span
                                                className={`h-3 w-3 rounded-full inline-block mx-auto ${user.error ? 'bg-red-500' : user.completed ? 'bg-green-500' : 'bg-yellow-500'}`}
                                            ></span>
                                        </td>



                                        {/* <td className="px-4 py-3 border-b">{user.name}</td> */}
                                        {/* <td className="px-4 py-3 border-b">{user.email}</td> */}
                                        {/* <td className="px-4 py-3 border-b">{user.password}</td> */}
                                        {/* <td className="px-4 py-3 border-b space-x-2">
                                            <button className="text-blue-600 hover:underline">Edit</button>
                                            <button className="text-red-600 hover:underline">Delete</button>
                                        </td> */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* mobile view */}
                <div className="md:hidden mt-6 relative">

                    {/* Content, allow pointer events only on buttons */}
                    <div className="relative z-20 pointer-events-none">
                        {/* Header */}
                        <div className="grid grid-cols-4 gap-2 px-4 py-2 bg-gray-100 text-xs font-semibold text-gray-600 border-b pointer-events-none">
                            <span>No</span>
                            <span className="col-span-2">Service responce</span>
                            <span>Status</span>
                        </div>

                        {/* User rows */}
                        {currentUsers.map((user, index) => (
                            <div
                                key={user.id}
                                className="grid grid-cols-4 gap-2 px-4 py-3 border-b items-center bg-white text-sm pointer-events-none"
                            >
                                <span className="text-gray-600 font-medium">#{indexOfFirstItem + index + 1}</span>

                                <span className="col-span-2 text-gray-800 font-semibold truncate">
                                    {user.title}
                                </span>

                                <span className="flex justify-center">
                                    <span
                                        className={`h-3 w-3 rounded-full inline-block ${user.error ? 'bg-red-500' : user.completed ? 'bg-green-500' : 'bg-yellow-500'}`}
                                        title={user.error ? 'Error' : user.completed ? 'Active' : 'Pending'}
                                    ></span>
                                </span>

                                {/* Buttons with pointer events enabled
                                <div className="col-span-4 flex justify-end gap-4 mt-2 pointer-events-auto">
                                    <button className="text-blue-600 text-sm font-medium hover:underline" onClick={() => console.log('Edit', user.id)}>Edit</button>
                                    <button className="text-red-600 text-sm font-medium hover:underline" onClick={() => console.log('Delete', user.id)}>Delete</button>
                                </div> */}
                            </div>
                        ))}
                    </div>
                </div>

                {/* end point of mobile view */}


                <div className="flex justify-center items-center mt-6 gap-4">
                    <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 rounded bg-gray-300 text-black font-medium hover:bg-gray-400 disabled:opacity-50"
                    >
                        Back
                    </button>

                    <span className="text-gray-700 font-semibold">
                        Page {currentPage} of {totalPages}
                    </span>

                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 rounded bg-gray-300 text-black font-medium hover:bg-gray-400 disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>

            </div>


        </Layout>
    );
};

export default Sapservice;
