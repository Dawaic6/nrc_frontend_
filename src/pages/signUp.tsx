// import React, { useState } from 'react';
// import MainLayout from '../layouts/MainLayout';

// interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   currentStatus: string;
//   password: string;
//   confirmPassword: string;
//   agreedToTerms: boolean;
// }

// const SignUpForm: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     firstName: '',
//     lastName: '',
//     email: '',
//     currentStatus: '',
//     password: '',
//     confirmPassword: '',
//     agreedToTerms: false,
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <MainLayout>
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//           Sign Up
//         </h2>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
//                   First name
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="firstName"
//                     name="firstName"
//                     type="text"
//                     required
//                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
//                   Last name
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="lastName"
//                     name="lastName"
//                     type="text"
//                     required
//                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Enter your Email
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div>
//               <label htmlFor="currentStatus" className="block text-sm font-medium text-gray-700">
//                 Enter your Current Status
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="currentStatus"
//                   name="currentStatus"
//                   type="text"
//                   placeholder="ex: CEO at NRCS Ltd"
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
//                   value={formData.currentStatus}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Enter your Password
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="new-password"
//                   required
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div>
//               <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
//                 Confirm your Password
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   type="password"
//                   autoComplete="new-password"
//                   required
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div className="flex items-center">
//               <input
//                 id="agreedToTerms"
//                 name="agreedToTerms"
//                 type="checkbox"
//                 required
//                 className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
//                 checked={formData.agreedToTerms}
//                 onChange={handleChange}
//               />
//               <label htmlFor="agreedToTerms" className="ml-2 block text-sm text-gray-900">
//                 By Signing up, I agree the terms of use & Privacy Policy
//               </label>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//               >
//                 Sign up
//               </button>
//             </div>
//           </form>

//           <div className="mt-6 text-center">
//             <p className="text-sm text-gray-600">
//               Already have account?{' '}
//               <a href="/signIn" className="font-medium text-green-800 hover:text-green-600">
//                 Sign In
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//     </MainLayout>
//   );
// };

// export default SignUpForm;

import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  currentStatus: string;
  password: string;
  confirmPassword: string;
  agreedToTerms: boolean;
}

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    currentStatus: '',
    password: '',
    confirmPassword: '',
    agreedToTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <MainLayout> 
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md border-2 border-gray-400 p-0">
        {/* Header same as Sign In */}
        <div className="bg-[#414868] text-white text-center py-4">
          <h2 className="text-2xl font-bold">NRC’s</h2>
          <p className="text-sm">Nursing Research Club</p>
        </div>

        {/* Form content */}
        <div className="bg-white px-6 py-6">
          <h3 className="text-xl font-bold text-black mb-6 text-center">Sign Up</h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  placeholder="First name"
                  className="w-full border border-black px-3 py-2 placeholder-gray-500"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  placeholder="Last name"
                  className="w-full border border-black px-3 py-2 placeholder-gray-500"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="w-full border border-black px-3 py-2 placeholder-gray-500"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              id="currentStatus"
              name="currentStatus"
              type="text"
              placeholder="Enter your current status (e.g., CEO at NRCS Ltd)"
              className="w-full border border-black px-3 py-2 placeholder-gray-500"
              value={formData.currentStatus}
              onChange={handleChange}
            />

            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Enter your password"
              className="w-full border border-black px-3 py-2 placeholder-gray-500"
              value={formData.password}
              onChange={handleChange}
            />

            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              placeholder="Confirm your password"
              className="w-full border border-black px-3 py-2 placeholder-gray-500"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            <div className="flex items-start">
              <input
                id="agreedToTerms"
                name="agreedToTerms"
                type="checkbox"
                required
                className="h-4 w-4 mt-1 text-green-700 focus:ring-green-600 border-black rounded"
                checked={formData.agreedToTerms}
                onChange={handleChange}
              />
              <label htmlFor="agreedToTerms" className="ml-2 text-sm text-gray-900">
                By signing up, I agree to the terms of use & privacy policy
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-green-800 text-white py-2 font-semibold hover:bg-green-900 transition"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center">
             <p className="text-sm text-gray-600">
               Already have account?{' '}
               <a href="/signIn" className="font-medium text-green-800 hover:text-green-600">
                 Sign In
               </a>
             </p>
           </div>
        </div>
      </div>
    </div>
    </MainLayout>
  );
};

export default SignUpForm;
