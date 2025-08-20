import React from "react";
import {
  FaTachometerAlt,
  FaBoxOpen,
  FaShoppingCart,
  FaUsers,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const AdminPanel = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-[rgb(68,202,250)] to-[rgb(68,100,280)] text-white flex flex-col p-5">
        <h2 className="text-2xl font-bold mb-10 text-center">Gadget Galaxy</h2>

        <nav className="flex-1 space-y-4">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-500"
          >
            <FaTachometerAlt /> Dashboard
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-500"
          >
            <FaBoxOpen /> Products
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-500"
          >
            <FaShoppingCart /> Orders
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-500"
          >
            <FaUsers /> Users
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-500"
          >
            <FaCog /> Settings
          </a>
        </nav>

        <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-red-600 mt-10">
          <FaSignOutAlt /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <button className="bg-[rgb(68,202,250)] hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
            Profile
          </button>
        </header>

        {/* Dashboard Stats */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white shadow rounded-xl p-5 text-center">
            <h3 className="text-gray-500 text-sm">Total Products</h3>
            <p className="text-2xl font-bold">120</p>
          </div>
          <div className="bg-white shadow rounded-xl p-5 text-center">
            <h3 className="text-gray-500 text-sm">Total Orders</h3>
            <p className="text-2xl font-bold">540</p>
          </div>
          <div className="bg-white shadow rounded-xl p-5 text-center">
            <h3 className="text-gray-500 text-sm">Users</h3>
            <p className="text-2xl font-bold">320</p>
          </div>
          <div className="bg-white shadow rounded-xl p-5 text-center">
            <h3 className="text-gray-500 text-sm">Revenue</h3>
            <p className="text-2xl font-bold">₹2.5L</p>
          </div>
        </section>

        {/* Recent Orders Table (No Customer Column) */}
        <section className="bg-white shadow rounded-xl p-6">
          <h2 className="text-lg font-bold mb-4">Recent Orders</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3 border">Order ID</th>
                <th className="p-3 border">Amount</th>
                <th className="p-3 border">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="p-3 border">#1001</td>
                <td className="p-3 border">₹15,000</td>
                <td className="p-3 border text-green-600">Completed</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 border">#1002</td>
                <td className="p-3 border">₹7,500</td>
                <td className="p-3 border text-yellow-600">Pending</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 border">#1003</td>
                <td className="p-3 border">₹22,000</td>
                <td className="p-3 border text-red-600">Cancelled</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default AdminPanel;
