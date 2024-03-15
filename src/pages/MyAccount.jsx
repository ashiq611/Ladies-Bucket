import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MyAccount = () => {
  // Dummy user data
  const user = {
    name: "John Doe",
    email: "john@example.com",
    address: "123 Main St, City, Country",
    // Add more user details as needed
  };

  // Dummy order data
  const orders = [
    { id: 1, date: "2024-03-15", total: 50 },
    { id: 2, date: "2024-03-14", total: 70 },
    // Add more order details as needed
  ];
  return (
    <div>
      <Navbar />
      <header className="bg-[#C50076] opacity-80 text-white p-4">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Account</h1>
          <ul className="flex space-x-4">
            <li className="hover:text-gray-300 cursor-pointer">Orders</li>
            <li className="hover:text-gray-300 cursor-pointer">Settings</li>
            <li className="hover:text-gray-300 cursor-pointer">Logout</li>
          </ul>
        </nav>
      </header>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">User Information</h2>
            <div>
              <div className="avatar online">
                <div className="w-24 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <p>
                <span className="font-semibold">Name:</span> {user.name}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {user.email}
              </p>
              <p>
                <span className="font-semibold">Address:</span> {user.address}
              </p>
              {/* Add more user details here */}
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Orders</h2>
            <ul>
              {orders.map((order) => (
                <li key={order.id}>
                  <p>Date: {order.date}</p>
                  <p>Total: ${order.total}</p>
                  {/* Add more order details here */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyAccount;
