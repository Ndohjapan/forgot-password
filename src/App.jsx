import React, { useState } from "react";
import logo from "./assets/logo.png";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword && password.length > 7) {
      console.log("Password changed successfully");
    } else {
      console.log("Error changing password");
    }
  };

  return (
    <div className="change-password bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg p-8 rounded-lg max-w-md">
        <img src={logo} alt="pfSense Logo" className="w-32 mx-auto my-6" />
        <h3 className="text-xl font-bold text-gray-800 mb-4 mt-14">
          Change Password
        </h3>
        <p className="text-gray-600 mb-2 mt-8">
          In order to <strong>protect your account,</strong> make sure your
          password:
        </p>
        <ul className="list-disc list-inside pl-4 mb-4 mt-8">
          <li>Is longer than 7 characters</li>
          <li>Does not contain any special characters</li>
        </ul>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 mt-10">
            <label
              htmlFor="new-password"
              className="block text-gray-700 font-bold mb-2"
            >
              New Password
            </label>
            <input
              type="password"
              id="new-password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-10">
            <label
              htmlFor="confirm-password"
              className="block text-gray-700 font-bold mb-2"
            >
              Re-enter your Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Enter your password again"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold px-4 py-2 rounded-full hover:bg-blue-600"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
