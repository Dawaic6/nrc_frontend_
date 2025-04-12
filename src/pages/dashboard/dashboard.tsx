// import React from 'react';
// import { FaBook, FaUser, FaDonate, FaSignOutAlt, FaSearch } from 'react-icons/fa';
// import { MdDashboard } from 'react-icons/md';
// import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

// // Define the interface for the data items
// interface DataItem {
//   id: string;
//   title: string;
//   status: string;
//   longDescription: string;
//   shortDescription: string;
//   hasPhoto: boolean;
// }

// const Dashboard: React.FC = () => {
//   // Sample data for the table
//   const data: DataItem[] = [
//     {
//       id: '01',
//       title: 'Title',
//       status: 'News',
//       longDescription: 'Long description',
//       shortDescription: 'Short',
//       hasPhoto: true,
//     },
//     {
//       id: '02',
//       title: 'Another Title',
//       status: 'Published',
//       longDescription: 'Another long description',
//       shortDescription: 'Short',
//       hasPhoto: false,
//     },
//     {
//       id: '03',
//       title: 'Third Title',
//       status: 'Archived',
//       longDescription: 'Archived description',
//       shortDescription: 'Short',
//       hasPhoto: true,
//     },
//   ];

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <aside className="w-64 bg-[#414868] text-white flex flex-col">
//         <div className="p-6 text-center">
//           <h1 className="text-2xl font-bold">NRC's</h1>
//         </div>
//         <nav className="flex-1">
//           <ul>
//             <li className="px-6 py-3 hover:bg-green-700 flex items-center cursor-pointer">
//               <MdDashboard className="mr-3" />
//               Dashboard
//             </li>
//             <li className="px-6 py-3 hover:bg-green-700 flex items-center cursor-pointer">
//               <FaBook className="mr-3" />
//               Publication
//             </li>
//             <li className="px-6 py-3 hover:bg-green-700 flex items-center cursor-pointer">
//               <FaUser className="mr-3" />
//               User
//             </li>
//             <li className="px-6 py-3 hover:bg-green-700 flex items-center cursor-pointer">
//               <FaDonate className="mr-3" />
//               Donation
//             </li>
//             <li className="px-6 py-3 hover:bg-green-700 flex items-center cursor-pointer">
//               <FaSignOutAlt className="mr-3" />
//               Sign Out
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 bg-gray-100">
//         {/* Top Bar */}
//         <header className="flex items-center justify-between bg-white p-4 shadow">
//           <div className="flex items-center">
//             <FaSearch className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               placeholder="Search"
//               className="border border-gray-300 rounded px-4 py-2 focus:outline-none"
//             />
//           </div>
//           <div className="flex items-center">
//             <span className="mr-4">angel@nrcresearch.com</span>
//             <img
//               src="https://via.placeholder.com/40"
//               alt="User"
//               className="w-10 h-10 rounded-full"
//             />
//           </div>
//         </header>

//         {/* Statistics Cards */}
//         <div className="grid grid-cols-3 gap-4 p-6">
//           <div className="bg-white shadow rounded-lg p-4 text-center">
//             <h2 className="text-2xl font-bold">50</h2>
//             <p className="text-gray-600">Publication</p>
//           </div>
//           <div className="bg-white shadow rounded-lg p-4 text-center">
//             <h2 className="text-2xl font-bold">50</h2>
//             <p className="text-gray-600">Research</p>
//           </div>
//           <div className="bg-white shadow rounded-lg p-4 text-center">
//             <h2 className="text-2xl font-bold">50</h2>
//             <p className="text-gray-600">Donation</p>
//           </div>
//         </div>

//         {/* Latest News and Insights Table */}
//         <div className="p-6">
//           <h2 className="text-xl font-bold mb-4">Latest News and Insights</h2>
//           <div className="bg-white shadow rounded-lg overflow-hidden">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     ID
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Title
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Status
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Long Description
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Short Desc
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Photo
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Action
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {data.map((item) => (
//                   <tr key={item.id}>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.id}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.title}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.status}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.longDescription}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.shortDescription}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       {item.hasPhoto ? (
//                         <span className="text-green-500">✓</span>
//                       ) : (
//                         <span className="text-gray-400">✗</span>
//                       )}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       <button className="text-blue-500 hover:text-blue-700 mr-2">
//                         <AiOutlineEdit className="inline-block" />
//                       </button>
//                       <button className="text-red-500 hover:text-red-700">
//                         <AiOutlineDelete />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p>Welcome to the dashboard!</p>
    </div>
  );
};

export default Dashboard;