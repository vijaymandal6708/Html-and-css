// src/pages/AdminPanel.jsx
import { useContext, useMemo, useState, useEffect } from "react";
import { OrdersContext } from "../App";
import { FaUsers, FaBoxOpen, FaClipboardList, FaUserCog, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Legend,
  Cell,          // ⬅️ add Cell for colored slices
} from "recharts";

// --- FULL 24 PRODUCTS ---
const initialProducts = [
  { id: 1, title: "Relame GT6", price: 25999, stock: 40, image: "category-2.png", category: "Smartphone" },
  { id: 2, title: "iPhone 15", price: 69999, stock: 25, image: "category-1.png", category: "Smartphone" },
  { id: 3, title: "Samsung S24", price: 55999, stock: 30, image: "smartphone3.jpg", category: "Smartphone" },
  { id: 4, title: "HP 15s Laptop", price: 42999, stock: 20, image: "laptop1.jpg", category: "Laptops" },
  { id: 5, title: "Sony WH-1000XM5", price: 29999, stock: 60, image: "headphone1.jpg", category: "Headphones" },
  { id: 6, title: "IQOO Neo 10R", price: 21999, stock: 35, image: "smartphone6.jpg", category: "Smartphone" },

  { id: 7, title: "Realme Buds Air5", price: 3499, stock: 120, image: "category-5.jpg", category: "Headphones" },
  { id: 8, title: "Hitage Neckband", price: 1099, stock: 100, image: "category-6.jpg", category: "Headphones" },
  { id: 9, title: "Boat Airdopes 181", price: 1399, stock: 110, image: "category-7.jpg", category: "Headphones" },
  { id: 10, title: "Sony Headphone XB-100", price: 19999, stock: 30, image: "category-8.jpg", category: "Headphones" },
  { id: 11, title: "Apple Airpods Max", price: 59999, stock: 25, image: "headphone5.jpeg", category: "Headphones" },
  { id: 12, title: "Truke Buds Clarity", price: 3399, stock: 80, image: "headphone6.jpg", category: "Headphones" },

  { id: 13, title: "HP 15s ,13th Gen Intel Core i3 1315u", price: 45999, stock: 16, image: "laptop1.jpg", category: "Laptops" },
  { id: 14, title: "Asus Vivobook 15 OLED Ryzen 7530u", price: 38000, stock: 14, image: "laptop2.jpg", category: "Laptops" },
  { id: 15, title: "ULTIMUS Apex Laptop Intel Celeron Dual Core", price: 17999, stock: 30, image: "laptop3.jpg", category: "Laptops" },
  { id: 16, title: "MSI Modern 15, Intel Core i7", price: 39999, stock: 12, image: "laptop4.jpg", category: "Laptops" },
  { id: 17, title: "2022 Macbook Air Laptop, M2 Chip", price: 52999, stock: 15, image: "laptop5.jpg", category: "Laptops" },
  { id: 18, title: "2024 MacBook Pro with M4 Chip", price: 95999, stock: 10, image: "laptop6.jpg", category: "Laptops" },

  { id: 19, title: "Sony Alpha a7 48MP", price: 179999, stock: 6, image: "category-9.jpg", category: "Cameras" },
  { id: 20, title: "Fujifilm X-H2 40MP", price: 197999, stock: 4, image: "category-10.jpg", category: "Cameras" },
  { id: 21, title: "Canon Eos 300D", price: 148999, stock: 3, image: "category-11.jpg", category: "Cameras" },
  { id: 22, title: "Sony Alpha ILCE 24.2MP", price: 51990, stock: 12, image: "category-12.jpg", category: "Cameras" },
  { id: 23, title: "Sony Digital Camera 20MP", price: 34999, stock: 18, image: "camera5.webp", category: "Cameras" },
  { id: 24, title: "Sony New Alpha ILCE 24.2MP", price: 73990, stock: 8, image: "camera6.jpg", category: "Cameras" },
];

const LOW_STOCK_THRESHOLD = 10;

// ► Category colors (feel free to tweak)
const CATEGORY_COLORS = {
  Smartphone: "#3B82F6", // blue-500
  Headphones: "#10B981", // emerald-500
  Laptops:    "#F59E0B", // amber-500
  Cameras:    "#EF4444", // red-500
};
const FALLBACK_COLORS = ["#6366F1", "#06B6D4", "#84CC16", "#A855F7", "#14B8A6", "#E11D48"];

const AdminPanel = () => {
  const { orders } = useContext(OrdersContext);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [products, setProducts] = useState(initialProducts);
  const [admin, setAdmin] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  // Auth guard
  useEffect(() => {
    const loggedIn = localStorage.getItem("adminLoggedIn");
    if (!loggedIn) navigate("/admin");
  }, [navigate]);

  // Load admin credentials
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("adminAccount") || "{}");
    if (stored.email) setAdmin(stored);
  }, []);

  // Unique Users from Orders
  const users = useMemo(() => {
    return Array.from(
      new Map(
        orders.map((o) => [o.customerName, { name: o.customerName, address: o.customerAddress }])
      ).values()
    );
  }, [orders]);

  // Dashboard charts
  const ordersChartData = useMemo(
    () =>
      orders.slice().sort((a, b) => Number(b.id) - Number(a.id)).map((o) => ({
        name: `#${o.id}`,
        total: Number(o.total) || 0,
      })),
    [orders]
  );

  const stockByCategoryData = useMemo(() => {
    const map = new Map();
    for (const p of products) {
      map.set(p.category, (map.get(p.category) || 0) + (p.stock || 0));
    }
    return Array.from(map, ([category, stock]) => ({ category, stock }));
  }, [products]);

  // Actions
  function restockProduct(id, amount = 10) {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, stock: (p.stock || 0) + amount } : p))
    );
  }

  function handleSaveAccount(e) {
    e.preventDefault();
    localStorage.setItem("adminAccount", JSON.stringify(admin));
    alert("Admin credentials updated ✅");
  }

  function handleLogout() {
    localStorage.removeItem("adminLoggedIn");
    navigate("/adminlogin");
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <h2 className="text-xl font-bold mb-8 text-center">Admin Panel</h2>
        <nav className="space-y-3">
          {[
            ["dashboard", "📊 Dashboard"],
            ["orders", "📝 Orders"],
            ["users", "👤 Users"],
            ["products", "📦 Products"],
            ["account", <span key="acc"><FaUserCog className="inline mr-2" /> Account</span>],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`w-full text-left px-4 py-2 rounded-lg font-medium ${
                activeTab === key ? "bg-blue-600 text-white" : "hover:bg-gray-200"
              }`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 rounded-lg font-medium text-red-600 hover:bg-red-100 flex items-center gap-2"
          >
            <FaSignOutAlt /> Logout
          </button>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">
        {/* Dashboard */}
        {activeTab === "dashboard" && (
          <div>
            <h2 className="text-xl mt-[-15px] font-bold mb-5">📊Admin Dashboard</h2>
            {/* KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
                <FaClipboardList className="text-blue-600 text-3xl mb-2" />
                <h3 className="font-semibold text-lg">Total Orders</h3>
                <p className="text-md font-bold">{orders.length}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
                <FaUsers className="text-green-600 text-3xl mb-2" />
                <h3 className="font-semibold text-lg">Users</h3>
                <p className="text-md font-bold">{users.length}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
                <FaBoxOpen className="text-orange-600 text-3xl mb-2" />
                <h3 className="font-semibold text-lg">Products</h3>
                <p className="text-md font-bold">{products.length}</p>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
                <h3 className="font-semibold text-lg mb-4">Order Totals</h3>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={ordersChartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(v) => `₹${v}`} />
                      <Bar dataKey="total" fill="#3B82F6" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
                <h3 className="font-semibold text-lg mb-4">Stock by Category</h3>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Tooltip formatter={(value, name) => [`${value}`, `${name}`]} />
                      <Legend />
                      <Pie
                        data={stockByCategoryData}
                        dataKey="stock"
                        nameKey="category"
                        cx="50%"
                        cy="50%"
                        outerRadius={90}
                        innerRadius={45}
                        label={(d) => `${d.category}: ${d.stock}`}
                      >
                        {stockByCategoryData.map((entry, idx) => {
                          const color =
                            CATEGORY_COLORS[entry.category] ||
                            FALLBACK_COLORS[idx % FALLBACK_COLORS.length];
                          return <Cell key={`slice-${idx}`} fill={color} />;
                        })}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Orders */}
        {activeTab === "orders" && (
          <div>
            <h2 className="text-2xl font-bold mb-6">📝 All Orders</h2>
            <div className="space-y-4">
              {orders.slice().sort((a, b) => Number(b.id) - Number(a.id)).map((order) => (
                <div key={order.id} className="p-4 bg-white rounded-lg shadow">
                  <h3 className="font-semibold">Order #{order.id}</h3>
                  <p className="text-sm text-gray-600">{order.customerName} | {order.customerAddress}</p>
                  <p className="text-sm text-gray-600">Total: ₹{order.total}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Users */}
        {activeTab === "users" && (
          <div>
            <h2 className="text-2xl font-bold mb-6">👤 Users</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {users.map((u, i) => (
                <div key={i} className="p-4 bg-white rounded-lg shadow">
                  <h3 className="font-semibold">{u.name}</h3>
                  <p className="text-sm text-gray-600">{u.address}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Products */}
        {activeTab === "products" && (
          <div>
            <h2 className="text-2xl font-bold mb-6">📦 Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => {
                const isOut = p.stock <= 0;
                const isLow = !isOut && p.stock < LOW_STOCK_THRESHOLD;
                return (
                  <div key={p.id} className="p-4 bg-white rounded-lg shadow relative">
                    {(isOut || isLow) && (
                      <span className={`absolute top-2 left-2 px-2 py-0.5 text-xs font-semibold rounded-full ${
                        isOut ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {isOut ? "Out of stock" : `Low stock (<${LOW_STOCK_THRESHOLD})`}
                      </span>
                    )}
                    <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-md mb-3 overflow-hidden">
                      <img src={p.image} alt={p.title} className={`absolute inset-0 w-full h-full object-contain ${isOut ? "opacity-60" : ""}`} loading="lazy" />
                    </div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-sm text-gray-600">Price: ₹{p.price}</p>
                    <p className="text-sm text-gray-600">Stock: {p.stock}</p>
                    <p className="text-xs text-gray-500 mb-3">Category: {p.category}</p>
                    <button onClick={() => restockProduct(p.id)} className="px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700">
                      Restock +10
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Account */}
        {activeTab === "account" && (
          <div>
            <h2 className="text-2xl font-bold mb-6">⚙️ Account Settings</h2>
            <form onSubmit={handleSaveAccount} className="bg-white p-6 rounded-xl shadow max-w-md space-y-4">
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input type="email" value={admin.email} onChange={(e) => setAdmin({ ...admin, email: e.target.value })} className="w-full border rounded-lg px-3 py-2 mt-1" required />
              </div>
              <div>
                <label className="block text-sm font-medium">Password</label>
                <input type="password" value={admin.password} onChange={(e) => setAdmin({ ...admin, password: e.target.value })} className="w-full border rounded-lg px-3 py-2 mt-1" required />
              </div>
              <button type="submit" className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700">
                Save Changes
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminPanel;
