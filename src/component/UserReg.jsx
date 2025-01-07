import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

function UserReg() {

    const [userdata, setUserdata] = useState({})

    function handeluserdata(e) {
        setUserdata({ ...userdata, [e.target.name]: e.target.value })
    }
    console.log("userdata :", userdata)

    function handelRegister() {
        if (
            userdata.name?.length >= 2 &&
            userdata.email?.length >= 6 &&
            userdata.password === userdata.cnfpassword

        ) {
            let previousData = JSON.parse(localStorage.getItem("reguserdata"));
            let flag = false;

            previousData.map((e) => {
                if (e.email === userdata.email) flag = true;
            });

            if (flag) {
                toast.error("User already exists");
            } else {
                let newData = previousData.concat(userdata);
                localStorage.setItem("reguserdata", JSON.stringify(newData));
                toast.success("Data Register Successfully");

                setUserdata({
                    name: "",
                    email: "",
                    password: "",
                    cnfpassword: ""
                });
            }
        } else {
            toast.error("Password doesn't match");

        }
    }

    useEffect(() => {
        if (!localStorage.getItem("reguserdata")) {
            localStorage.setItem("reguserdata", JSON.stringify([]));
        }
    }, [])

    return (
        <>
            <Toaster />
            {/* Form Start */}
            <div className='flex items-center justify-center min-h-screen bg-gray-100'>
                <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                    {/* <label htmlFor="" className='me-1'>First name:</label>
                    <input type="text" name='fname' className='' placeholder='first name' /> <br />

                    <label for="lname">Last name:</label>
                    <input type="text" id="lname" className='' name="lname" placeholder='Enter your last name' /> */}

                    <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
                        Registration Form
                    </h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                            Full Name
                        </label>
                        <input
                            type="text" id="name" name='name' placeholder="Enter your full name" onChange={handeluserdata} className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" value={userdata.name}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            type="email" id="email" name='email' placeholder="Enter your email" onChange={handeluserdata} className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" value={userdata.email}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password" id="password" name='password' placeholder="Enter your password" onChange={handeluserdata} className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" value={userdata.password}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="confirm-password">
                            Confirm Password
                        </label>
                        <input
                            type="password" id="confirm-password" name='cnfpassword' placeholder="Confirm your password" onChange={handeluserdata} className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" value={userdata.cnfpassword}
                        />
                    </div>

                </form>
            </div>

            {/* Form End */}
        </>
    )
}

export default UserReg