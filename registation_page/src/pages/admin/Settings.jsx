import Sidebar from "../../components/admin/Sidebar";
import Navbar from "../../components/admin/Navbar";

export default function Settings() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Settings</h2>
          <p className="text-gray-600">This is the Settings page.</p>
        </div>
      </div>
    </div>
  );
}
