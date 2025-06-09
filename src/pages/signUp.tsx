import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import axios from 'axios';

// Password strength checker
const isStrongPassword = (password: string): boolean => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return regex.test(password);
};

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  status: string;  // Changed from currentStatus to status
  password: string;
  confirmPassword: string;
  agreedToTerms: boolean;
  showPassword: boolean;
}

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    status: '',  // Changed from currentStatus to status
    password: '',
    confirmPassword: '',
    agreedToTerms: false,
    showPassword: false,
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const togglePasswordVisibility = () => {
    setFormData((prev) => ({
      ...prev,
      showPassword: !prev.showPassword,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!isStrongPassword(formData.password)) {
      setError("Password is not strong enough. Use at least 8 characters, one uppercase, one lowercase, one number, and one special character.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('https://backend-nrc.onrender.com/api/register', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        status: formData.status,  // Changed from currentStatus to status
        password: formData.password,
      });
      if (response.data.success) {
        navigate('/signIn');
      } else {
        setError(response.data.error || 'Registration failed.');
      }
    } catch (err) {
      setError('Registration failed. Please try again.');
      console.error('Registration error:', err);
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

          {/* Form content */}
          <div className="bg-white px-6 py-6">
            <h3 className="text-xl font-bold text-black mb-6 text-center">Sign Up</h3>

            {error && (
              <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded">
                {success}
              </div>
            )}

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

              <div>
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
              </div>

              <div>
                <input
                  id="status"  // Changed from currentStatus to status
                  name="status"  // Changed from currentStatus to status
                  type="text"
                  placeholder="Current status (e.g., HR at B)"
                  className="w-full border border-black px-3 py-2 placeholder-gray-500"
                  value={formData.status}
                  onChange={handleChange}
                />
              </div>

              <div className="relative">
                <input
                  type={formData.showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                  placeholder="Enter your password"
                  className="w-full border border-black px-3 py-2 placeholder-gray-500"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-2 top-2 text-xs text-gray-600"
                >
                  {formData.showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <div>
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
              </div>

              <div className="flex items-center">
                <input
                  id="agreedToTerms"
                  name="agreedToTerms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-green-600 border-gray-300 rounded"
                  checked={formData.agreedToTerms}
                  onChange={handleChange}
                />
                <label htmlFor="agreedToTerms" className="ml-2 text-sm text-gray-900">
                  I agree to the Terms of Use & Privacy Policy
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-green-800 text-white py-2 font-semibold hover:bg-green-700 transition ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </button>
            </form>

            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-3 text-gray-500">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <Link
              to="/signIn"
              className="w-full block text-center border border-gray-300 py-2 font-semibold text-gray-700 hover:bg-gray-50 transition"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SignUpForm;