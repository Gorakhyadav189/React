import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Navbar from "../../components/admin/Navbar";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const [form, setForm] = useState({
    name: "",
    price: "",
    salePrice: "",
    stock: "",
    category: "",
    images: [],
  });

  // handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle image change
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setForm({ ...form, images: files });
  };

  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.price || !form.stock || !form.category) {
      alert("Please fill all required fields");
      return;
    }

    if (editingIndex !== null) {
      // update existing product
      const updated = [...products];
      updated[editingIndex] = form;
      setProducts(updated);
      setEditingIndex(null);
    } else {
      // add new product
      setProducts([...products, form]);
    }

    // reset form
    setForm({
      name: "",
      price: "",
      salePrice: "",
      stock: "",
      category: "",
      images: [],
    });
    setShowForm(false);
  };

  // edit product
  const handleEdit = (index) => {
    setForm(products[index]);
    setEditingIndex(index);
    setShowForm(true);
  };

  // delete product
  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Products</h2>

          {/* Add Product Button */}
          <button
            onClick={() => {
              setForm({
                name: "",
                price: "",
                salePrice: "",
                stock: "",
                category: "",
                images: [],
              });
              setEditingIndex(null);
              setShowForm(!showForm);
            }}
            className="mb-6 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            {showForm ? "Close Form" : "Add Product"}
          </button>

          {/* Add Product Form */}
          {showForm && (
            <div className="bg-white p-6 rounded-xl shadow mb-6">
              <h3 className="text-lg font-semibold mb-4">
                {editingIndex !== null ? "Edit Product" : "Add New Product"}
              </h3>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Product Name"
                  className="border rounded-lg px-4 py-2 w-full"
                />
                <input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="Original Price"
                  className="border rounded-lg px-4 py-2 w-full"
                />
                <input
                  type="number"
                  name="salePrice"
                  value={form.salePrice}
                  onChange={handleChange}
                  placeholder="Sale Price (optional)"
                  className="border rounded-lg px-4 py-2 w-full"
                />
                <input
                  type="number"
                  name="stock"
                  value={form.stock}
                  onChange={handleChange}
                  placeholder="Stock"
                  className="border rounded-lg px-4 py-2 w-full"
                />
                <input
                  type="text"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  placeholder="Category"
                  className="border rounded-lg px-4 py-2 w-full"
                />

                <input
                  type="file"
                  multiple
                  onChange={handleImageChange}
                  className="col-span-full border rounded-lg px-4 py-2 w-full"
                />

                <button
                  type="submit"
                  className="col-span-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  {editingIndex !== null ? "Update Product" : "Save Product"}
                </button>
              </form>
            </div>
          )}

          {/* Product DataTable */}
          <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
            <h3 className="text-lg font-semibold mb-4">Product List</h3>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Price</th>
                  <th className="p-2 border">Sale Price</th>
                  <th className="p-2 border">Stock</th>
                  <th className="p-2 border">Category</th>
                  <th className="p-2 border">Images</th>
                  <th className="p-2 border text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.length === 0 ? (
                  <tr>
                    <td
                      colSpan="7"
                      className="text-center p-4 text-gray-500"
                    >
                      No products added yet
                    </td>
                  </tr>
                ) : (
                  products.map((p, idx) => (
                    <tr key={idx} className="border-b hover:bg-gray-50">
                      <td className="p-2">{p.name}</td>
                      <td className="p-2">${p.price}</td>
                      <td className="p-2">
                        {p.salePrice ? `$${p.salePrice}` : "-"}
                      </td>
                      <td className="p-2">{p.stock}</td>
                      <td className="p-2">{p.category}</td>
                      <td className="p-2 flex gap-1">
                        {p.images.length > 0
                          ? p.images.map((img, i) => (
                              <img
                                key={i}
                                src={URL.createObjectURL(img)}
                                alt="preview"
                                className="w-8 h-8 object-cover rounded"
                              />
                            ))
                          : "-"}
                      </td>
                      <td className="p-2 text-center">
                        <button
                          onClick={() => handleEdit(idx)}
                          className="bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(idx)}
                          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
