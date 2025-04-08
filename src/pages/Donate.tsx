import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';

interface DonationData {
  amount: string;
  customAmount: string;
  firstName: string;
  lastName: string;
  email: string;
  status: string;
  address: string;
  contactOk: boolean;
  city: string;
  country: string;
  phone: string;
  paymentMethod: 'paypal' | 'credit-card' | 'bank-transfer';
}

const DonationForm: React.FC = () => {
  const [donationData, setDonationData] = useState<DonationData>({
    amount: '1000',
    customAmount: '',
    firstName: '',
    lastName: '',
    email: '',
    status: '',
    address: '',
    contactOk: false,
    city: '',
    country: '',
    phone: '',
    paymentMethod: 'credit-card'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setDonationData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleAmountSelection = (amount: string) => {
    setDonationData(prev => ({
      ...prev,
      amount,
      customAmount: ''
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process donation here
    console.log('Donation submitted:', donationData);
  };

  return (
    <MainLayout>
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Gift. Your Impact</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The NRC is dedicated to preserving and advancing knowledge,
            serving as a living repository of research and innovation. By
            supporting us, you help power all of our learning, discovery, and
            impactful conversations that shape the future.
          </p>
        </div>

        <div className="bg-white shadow shadow-black rounded-lg overflow-hidden">
          <div className="p-8">
            <div className="flex space-x-4 mb-8">
              <button
                type="button"
                className={`px-6 py-3 rounded-md font-medium ${donationData.amount === 'one-time' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => handleAmountSelection('one-time')}
              >
                Give Today
              </button>
              <button
                type="button"
                className={`px-6 py-3 rounded-md font-medium ${donationData.amount === 'monthly' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => handleAmountSelection('monthly')}
              >
                Give Monthly
              </button>
            </div>

            <h2 className="text-xl font-semibold mb-4">Choose amount you want or enter an amount you want to donate</h2>
            <div className="grid grid-cols-4 gap-4 mb-6">
              {['100', '500', '1000', 'custom'].map((amount) => (
                <button
                  key={amount}
                  type="button"
                  className={`py-3 px-4 border rounded-md text-center ${donationData.amount === amount ? 'border-green-600 bg-indigo-50 text-green-700' : 'border-gray-300'}`}
                  onClick={() => amount === 'custom' ? null : handleAmountSelection(amount)}
                >
                  {amount === 'custom' ? (
                    <input
                      type="text"
                      placeholder="Enter amount"
                      className="w-full text-center outline-none bg-transparent"
                      value={donationData.customAmount}
                      onChange={(e) => {
                        setDonationData(prev => ({
                          ...prev,
                          customAmount: e.target.value,
                          amount: 'custom'
                        }));
                      }}
                    />
                  ) : (
                    `$${amount}`
                  )}
                </button>
              ))}
            </div>
            <div className="flex justify-end mb-8">
              <select 
                className="border border-gray-300 rounded-md px-3 py-2"
                value={donationData.amount === 'custom' ? 'USD' : donationData.amount}
                onChange={(e) => setDonationData(prev => ({...prev, amount: e.target.value}))}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>

            <h2 className="text-xl font-semibold mb-4 border-t pt-6">Your Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4">
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
                  placeholder="ex: CEO at NRC's"
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
                <label className="ml-2 block text-sm text-gray-700">It's okay to contact me in future.</label>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
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
                  <select
                    name="country"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    value={donationData.country}
                    onChange={handleChange}
                  >
                    <option value="">Select the country</option>
                    <option value="US">United States</option>
                    <option value="RW">Rwanda</option>
                    <option value="UK">United Kingdom</option>
                    {/* Add more countries as needed */}
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                <div className="flex">
                  <select className="px-3 py-2 border border-gray-300 rounded-l-md">
                    <option>+250</option>
                    <option>+358</option>
                    <option>+359</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="flex-1 px-3 py-2 border-t border-b border-r border-gray-300 rounded-r-md"
                    value={donationData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <h2 className="text-xl font-semibold mb-4 border-t pt-6">Payment Method</h2>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <button
                  type="button"
                  className={`py-3 px-4 border rounded-md text-center ${donationData.paymentMethod === 'paypal' ? 'border-green-600 bg-indigo-50 text-green-700' : 'border-gray-300'}`}
                  onClick={() => setDonationData(prev => ({...prev, paymentMethod: 'paypal'}))}
                >
                  PayPal
                </button>
                <button
                  type="button"
                  className={`py-3 px-4 border rounded-md text-center ${donationData.paymentMethod === 'credit-card' ? 'border-green-600 bg-indigo-50 text-green-700' : 'border-gray-300'}`}
                  onClick={() => setDonationData(prev => ({...prev, paymentMethod: 'credit-card'}))}
                >
                  Credit Card
                </button>
                <button
                  type="button"
                  className={`py-3 px-4 border rounded-md text-center ${donationData.paymentMethod === 'bank-transfer' ? 'border-green-600 bg-indigo-50 text-green-700' : 'border-gray-300'}`}
                  onClick={() => setDonationData(prev => ({...prev, paymentMethod: 'bank-transfer'}))}
                >
                  Bank Transfer
                </button>
              </div>

              <div className="bg-gray-50 p-4 rounded-md mb-6 flex justify-between items-center">
                <div>
                  <p className="font-medium">{donationData.amount === 'one-time' ? 'Give Today' : 'Give Monthly'} donation</p>
                  <p className="text-gray-600">
                    ${donationData.amount === 'custom' ? donationData.customAmount : donationData.amount} USD
                  </p>
                </div>
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Complete Donation
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