import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaMicrosoft } from 'react-icons/fa';
import { SiOkta } from 'react-icons/si';
import toast from 'react-hot-toast';

const LogIn = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    function submitHandler(event) {
        event.preventDefault();
        toast.success("Login Successful");
        navigate("/chat");
    }

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }));
    }

    return (
        <div className="flex items-center justify-center  min-h-screen">
            <div className="bg-white w-[400px] p-8 rounded-lg shadow-lg flex flex-col items-center">
                <h2 className="text-gray-800 text-2xl font-semibold">Sign In</h2>
                <p className="text-gray-500 text-sm mb-6">Access your account</p>

                {/* Social Login Buttons */}
                <div className="space-y-3 w-full">
                    <button className="flex items-center justify-center bg-gray-100 text-gray-800 px-4 py-2 w-full rounded-md border border-gray-300 hover:bg-gray-200 transition">
                        <FcGoogle className="mr-2" />
                        Sign in with Google
                    </button>
                    <button className="flex items-center justify-center bg-gray-100 text-gray-800 px-4 py-2 w-full rounded-md border border-gray-300 hover:bg-gray-200 transition">
                        <FaGithub className="mr-2" />
                        Sign in with GitHub
                    </button>
                    <button className="flex items-center justify-center bg-gray-100 text-gray-800 px-4 py-2 w-full rounded-md border border-gray-300 hover:bg-gray-200 transition">
                        <SiOkta className="mr-2" />
                        Sign in with Okta
                    </button>
                    <button className="flex items-center justify-center bg-gray-100 text-gray-800 px-4 py-2 w-full rounded-md border border-gray-300 hover:bg-gray-200 transition">
                        <FaMicrosoft className="mr-2" />
                        Sign in with Microsoft
                    </button>
                </div>

                {/* Divider */}
                <div className="flex items-center my-5 w-full">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="px-3 text-gray-500 text-sm">OR</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                {/* Login Form */}
                <form onSubmit={submitHandler} className="w-full">
                    <label className="block text-gray-700 text-sm font-medium">
                        Email<span className="text-red-500">*</span>
                    </label>
                    <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={changeHandler}
                        name="email"
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md "
                    />

                    <label className="block text-gray-700 text-sm font-medium mt-3">
                        Password<span className="text-red-500">*</span>
                    </label>
                    <input
                        required
                        type="password"
                        value={formData.password}
                        onChange={changeHandler}
                        name="password"
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md "
                    />

                    <button className="w-full bg-[#FFF7F3] cursor-pointer text-black py-2 mt-5 rounded-md font-medium  ">
                        Sign In
                    </button>
                </form>

                {/* Forgot Password */}
                <p className="text-sm text-gray-500 mt-4 hover:underline cursor-pointer">
                    Forgot your password?
                </p>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 w-full text-center py-3 bg-[#FFF7F3]">
                <p className="text-gray-600 text-sm">© 2025 BhashaBot. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default LogIn;
