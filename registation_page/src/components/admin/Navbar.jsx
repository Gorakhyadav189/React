export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-white shadow px-6 py-4">
      <h1 className="text-xl font-bold">E-Commerce Admin</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">Hello, Admin</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
}
