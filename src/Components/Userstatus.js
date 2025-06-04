import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost/burgerx/getusers.php");
      setUsers(response.data);
    } catch (err) {
      console.error("Error fetching users:", err);
      setError("Failed to fetch user data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row min-vh-100">
        {/* Sidebar */}
        <aside className="col-md-3 col-lg-2 bg-white border-end p-4 shadow-sm">
          <h2 className="h4 fw-bold mb-4">Admin Panel</h2>
          <nav className="nav flex-column">
            <Link to="/Dashboard" className="nav-link text-dark mb-2">
               Dashboard
            </Link>
            <Link to="/Userstatus" className="nav-link active text-white bg-primary rounded mb-2">
               User Status
            </Link>
            <Link to="/Empdata" className="nav-link text-dark">
               Employee Data
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="col-md-9 col-lg-10 bg-light p-4">
          <h1 className="h3 mb-4 fw-bold">Registered Users</h1>

          {loading ? (
            <p>Loading users...</p>
          ) : error ? (
            <p className="text-danger">{error}</p>
          ) : (
            <div className="bg-white p-4 rounded shadow-sm">
              <div className="table-responsive">
                <table className="table table-bordered table-hover">
                  <thead className="table-light">
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Address</th>
                      <th>Registered On</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address}</td>
                        <td>{new Date(user.created_at).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default UserTable;
