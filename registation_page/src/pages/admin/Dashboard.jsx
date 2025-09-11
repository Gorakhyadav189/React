import Sidebar from "../../components/admin/Sidebar";
import Navbar from "../../components/admin/Navbar";

function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start">
      <p className="text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold">{value}</h3>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar />
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Total Sales" value="$12,345" />
          <StatCard title="Orders" value="1,234" />
          <StatCard title="Products" value="567" />
          <StatCard title="Customers" value="890" />
        </div>
        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
            <ul className="divide-y text-sm">
              <li className="py-2 flex justify-between">
                <span>#1001</span> <span>$120</span>
              </li>
              <li className="py-2 flex justify-between">
                <span>#1002</span> <span>$80</span>
              </li>
              <li className="py-2 flex justify-between">
                <span>#1003</span> <span>$220</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Top Products</h2>
            <ul className="divide-y text-sm">
              <li className="py-2 flex justify-between">
                <span>Product A</span> <span>500 sales</span>
              </li>
              <li className="py-2 flex justify-between">
                <span>Product B</span> <span>300 sales</span>
              </li>
              <li className="py-2 flex justify-between">
                <span>Product C</span> <span>200 sales</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
