import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();
  const links = [
    { to: "/admin/dashboard", label: "Dashboard" },
    { to: "/admin/orders", label: "Orders" },
    { to: "/admin/products", label: "Products" },
    { to: "/admin/customers", label: "Customers" },
    { to: "/admin/settings", label: "Settings" },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Admin</h2>
      <nav className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`block px-4 py-2 rounded-lg transition ${
              pathname === link.to
                ? "bg-gray-700 font-semibold"
                : "hover:bg-gray-700"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
