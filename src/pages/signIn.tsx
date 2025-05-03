
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import axios from 'axios';

const SignInForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    showPassword: false
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('https://backend-nrc.onrender.com/api/login', {
        email: formData.email,
        password: formData.password
      });

      if (response.data.success) {
        // Store token in localStorage
        localStorage.setItem('token', response.data.token);
        
        
        // Redirect based on user role
        if (response.data.role === 'admin') {
          navigate('/dashboard');
        } else {
          navigate('/');
        }
      } else {
        setError(response.data.error || 'Invalid credentials');
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.error || 'Login failed. Please try again.');
      } else {
        setError('Something went wrong. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md border-2 border-gray-400 p-0">
          {/* Header */}
          <div className="bg-[#414868] text-white text-center py-4">
            <h2 className="text-2xl font-bold">NRC's</h2>
            <p className="text-sm">Nursing Research Club</p>
          </div>

          {/* Content */}
          <div className="px-6 py-6">
            <h3 className="text-xl font-bold text-black mb-6">Sign In</h3>

            {error && (
              <div className="mb-4 p-2 bg-red-100 text-red-700 text-sm rounded">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email to sign in"
                  className="w-full border border-black px-3 py-2 placeholder-gray-500"
                />
              </div>

              <div className="relative">
                <input
                  type={formData.showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your Password"
                  className="w-full border border-black px-3 py-2 placeholder-gray-500"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-2 top-2 text-xs text-gray-600"
                >
                  {formData.showPassword ? 'Hide' : 'Show'}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.showPassword}
                    onChange={togglePasswordVisibility}
                    id="showPassword"
                    className="mr-2"
                  />
                  <label htmlFor="showPassword" className="text-sm text-black">
                    Show Password
                  </label>
                </div>
                <Link 
                  to="/forgot-password" 
                  className="text-green-700 text-sm hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-green-800 text-white py-2 font-semibold hover:bg-green-900 transition ${
                  loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing In...
                  </span>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-3 text-gray-500">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <Link
              to="/signUp"
              className="w-full block text-center border border-gray-300 py-2 font-semibold text-gray-700 hover:bg-gray-50 transition"
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
