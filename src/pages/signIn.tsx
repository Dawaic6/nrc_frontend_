// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // Assuming you're using React Router
// import MainLayout from '../layouts/MainLayout';

// const SignInForm: React.FC = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     showPassword: false
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const togglePasswordVisibility = () => {
//     setFormData(prev => ({
//       ...prev,
//       showPassword: !prev.showPassword
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Add your authentication logic here
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <MainLayout>
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//           NRC's
//         </h2>
//         <h3 className="mt-2 text-center text-lg text-gray-600">
//           Enter your email to sign in
//         </h3>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email address
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <div className="mt-1 relative">
//                 <input
//                   id="password"
//                   name="password"
//                   type={formData.showPassword ? 'text' : 'password'}
//                   autoComplete="current-password"
//                   required
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//                 <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
//                   <button
//                     type="button"
//                     className="text-sm text-indigo-600 hover:text-indigo-500 focus:outline-none"
//                     onClick={togglePasswordVisibility}
//                   >
//                     {formData.showPassword ? 'Hide' : 'Show'} Password
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="text-sm">
//                 <Link
//                   to="/forgot-password" // Update with your actual route
//                   className="font-medium text-indigo-600 hover:text-indigo-500"
//                 >
//                   Forgot your password?
//                 </Link>
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               >
//                 Sign in
//               </button>
//             </div>
//           </form>

//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300" />
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">
//                   Don't have an account?
//                 </span>
//               </div>
//             </div>

//             <div className="mt-6">
//               <Link
//                 to="/signUp" // Update with your actual route
//                 className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               >
//                 Sign Up
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </MainLayout>
//   );
// };

// export default SignInForm;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const SignInForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    showPassword: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const togglePasswordVisibility = () => {
    setFormData(prev => ({
      ...prev,
      showPassword: !prev.showPassword
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md border-2 border-gray-400 p-0">
          {/* Header */}
          <div className="bg-[#414868] text-white text-center py-4">
            <h2 className="text-2xl font-bold">NRC’s</h2>
            <p className="text-sm">Nursing Research Club</p>
          </div>

          {/* Content */}
          <div className="px-6 py-6">
            <h3 className="text-xl font-bold text-black mb-6">Sign In</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email to sign in"
                className="w-full border border-black px-3 py-2 placeholder-gray-500"
              />

              <input
                type={formData.showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your Password"
                className="w-full border border-black px-3 py-2 placeholder-gray-500"
              />

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.showPassword}
                  onChange={togglePasswordVisibility}
                  id="showPassword"
                />
                <label htmlFor="showPassword" className="text-sm text-black">Show Password</label>
              </div>

              <Link to="/forgot-password" className="text-green-700 text-sm hover:underline">
                Forgot your password
              </Link>

              <button
                type="submit"
                className="w-full bg-green-800 text-white py-2 font-semibold hover:bg-green-900 transition"
              >
                Sign In
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-black" />
              <span className="mx-3 text-black">or</span>
              <div className="flex-grow border-t border-black" />
            </div>

            <Link
              to="/signUp"
              className="w-full block text-center border border-black py-2 font-semibold text-black hover:bg-gray-100 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SignInForm;
