import React from 'react';
import LoginForm from '../components/LoginForm';

const LandingPage = () => {
	return (
		<div
			style={{ backgroundColor: '#f2f4fa' }}
			className="w-full h-screen flex flex-row items-center justify-between px-20"
		>
			{/* Left Side */}
			<div className="flex flex-col gap-y-4">
				<h1 className="font-bold text-7xl text-orange-500">
					See Ya <span className="text-blue-800">Later Gator</span>
				</h1>
				<h2 className="text-3xl text-gray-600">By Gators, For Gators</h2>
			</div>

			{/* Right Side - Login Box */}
			<div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
				<LoginForm />
			</div>
		</div>
	);
};

export default LandingPage;
