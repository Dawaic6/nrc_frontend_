import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';

interface DonationData {
  amount: string;
  firstName: string;
  lastName: string;
  email: string;
  status: string;
  address: string;
  contactOk: boolean;
  city: string;
  country: string;
  phone: string;
}

const DonationForm: React.FC = () => {
  const [donationData, setDonationData] = useState<DonationData>({
    amount: '',
    firstName: '',
    lastName: '',
    email: '',
    status: '',
    address: '',
    contactOk: false,
    city: '',
    country: '',
    phone: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setDonationData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('https://backend-nrc.onrender.com/donations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donationData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit donation');
      }

      const result = await response.json();
      console.log('Donation submitted successfully:', result);
      setSuccess(true);
      // Reset form after successful submission
      setDonationData({
        amount: '',
        firstName: '',
        lastName: '',
        email: '',
        status: '',
        address: '',
        contactOk: false,
        city: '',
        country: '',
        phone: '',
      });
    } catch (err) {
      console.error('Error submitting donation:', err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Your Gift. Your Impact</h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              The NRC is dedicated to preserving and advancing knowledge,
              serving as a living repository of research and innovation. By
              supporting us, you help power all of our learning, discovery, and
              impactful conversations that shape the future.
            </p>
          </div>

          <div className="bg-white shadow shadow-black rounded-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className='text-2xl pb-3'>Leave your information and the amount you are willing to offer.</h2>
              <p className='pb-4'>
                Once you press the submit button, your details will be safely stored in the NRC database and kept confidential. 
                After submitting, you will receive all the available account options you can use to complete your donation—whether
                it's a one-time gift or a monthly contribution. Your support means a lot to us.
              </p>

              {/* Success Message */}
              {success && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                  <p>Thank you for your donation! Your information has been submitted successfully.</p>
                  <p>We'll send the payment instructions to your email shortly.</p>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                  {error}
                </div>
              )}

              <h2 className="text-xl font-semibold mb-4 border-t pt-6">Your Information</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First name*</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      value={donationData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last name*</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      value={donationData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    value={donationData.email}
                    onChange={handleChange}
                  />
                  <p className="text-xs text-gray-500 mt-1">Your receipt will be emailed here.</p>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <input
                    type="text"
                    name="status"
                    placeholder="e.g. CEO at NRC"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    value={donationData.status}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address*</label>
                  <input
                    type="text"
                    name="address"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    value={donationData.address}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4 flex items-center">
                  <input
                    type="checkbox"
                    name="contactOk"
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    checked={donationData.contactOk}
                    onChange={handleChange}
                  />
                  <label className="ml-2 block text-sm text-gray-700">It's okay to contact me in the future.</label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City*</label>
                    <input
                      type="text"
                      name="city"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      value={donationData.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Country*</label>
                    <input
                      type="text"
                      placeholder="your country name"
                      name="country"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      value={donationData.country}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                  <div className="flex">
                    <input
                      type="tel"
                      placeholder="+250 (start with country code)"
                      name="phone"
                      required
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                      value={donationData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <h2 className="text-xl font-semibold mb-4 border-t pt-6">Donation Amount</h2>
                <input
                  type="number"
                  name="amount"
                  placeholder="Enter amount"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={donationData.amount}
                  onChange={handleChange}
                />

                <div className="text-center pt-6">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition ${
                      isLoading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isLoading ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DonationForm;