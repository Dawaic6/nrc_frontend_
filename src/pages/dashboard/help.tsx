import React from "react";

const HelpDashboard: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">Help & Support</h1>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">1. How do I add a new team member?</h3>
          <p className="text-gray-700">
            Navigate to the <strong>Team</strong> section in the dashboard. Click the <strong>+ New</strong> button, fill in the required details, and upload an image if needed. Then, click <strong>Save</strong>.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">2. How do I edit or delete a blog post?</h3>
          <p className="text-gray-700">
            Go to the <strong>Blogs</strong> section. Use the <strong>Edit</strong> button (pencil icon) to modify a blog post or the <strong>Delete</strong> button (trash icon) to remove it.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">3. How do I manage events?</h3>
          <p className="text-gray-700">
            In the <strong>Events</strong> section, you can add, edit, or delete events. Use the provided form to input event details and save your changes.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">4. How do I log out?</h3>
          <p className="text-gray-700">
            Click the <strong>Log Out</strong> option in the sidebar menu. This will securely log you out of the dashboard.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
        <p className="text-gray-700 mb-4">
          If you need further assistance, please contact our support team:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Email: <a href="mailto:support@nrc.com" className="text-blue-600">support@nrc.com</a></li>
          <li>Phone: +1 (123) 456-7890</li>
          <li>Live Chat: Available 9 AM - 5 PM (Mon - Fri)</li>
        </ul>
      </div>
    </div>
  );
};

export default HelpDashboard;