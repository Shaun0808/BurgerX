import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Css/Dashboard.css"; // You can still use this for extra custom styles

function AdminDashboard() {
  const [customerName, setCustomerName] = useState("");
  const [amount, setAmount] = useState("");
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost/burgerx/getorders.php");
      setOrders(response.data);
    } catch (err) {
      console.error("Failed to fetch orders:", err);
    }
  };

  const handleAddOrder = async (e) => {
    e.preventDefault();

    if (!customerName.trim() || !amount || parseFloat(amount) <= 0) {
      setMessage("Please fill in all fields with valid data.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await axios.post("http://localhost/burgerx/order.php", {
        customer_name: customerName,
        amount: amount,
      });

      if (res.data.success) {
        setMessage("Order added!");
        setCustomerName("");
        setAmount("");
        fetchOrders();
      } else {
        setMessage("Failed to add order.");
      }
    } catch (err) {
      console.error("Error while adding order:", err);
      setMessage("Server error.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row min-vh-100">
        {/* Sidebar */}
        <aside className="col-md-3 col-lg-2 bg-white border-end p-4 shadow-sm">
          <h2 className="h4 fw-bold mb-4">Admin Panel</h2>
          <nav className="nav flex-column">
            <Link to="/Dashboard" className="nav-link active text-white bg-primary rounded mb-2">
               Dashboard
            </Link>
            <Link to="/Userstatus" className="nav-link text-dark mb-2">
              User Status
            </Link>
            <Link to="/Empdata" className="nav-link text-dark">
               Employee Data
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="col-md-9 col-lg-10 bg-light p-4">
          <h1 className="h3 mb-4 fw-bold">Order Billing System</h1>

          {/* Order Form */}
          <form onSubmit={handleAddOrder} className="bg-white p-4 rounded shadow-sm mb-5">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Customer Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-success"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Adding..." : "Add Order"}
            </button>
            {message && <p className="mt-3 text-primary">{message}</p>}
          </form>

          {/* Order History */}
          <div className="bg-white p-4 rounded shadow-sm">
            <h2 className="h5 mb-3 fw-semibold">Order History</h2>
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="table-light">
                  <tr>
                    <th>Date</th>
                    <th>Customer</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td>{new Date(order.created_at).toLocaleString()}</td>
                      <td>{order.customer_name}</td>
                      <td>₹{order.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
