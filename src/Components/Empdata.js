import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Empdata() {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    joining_date: "",
    salary: ""
  });
  const [message, setMessage] = useState("");

  const fetchEmployees = async () => {
    try {
      const res = await axios.get("http://localhost/burgerx/getemp.php");
      setEmployees(res.data);
    } catch (err) {
      console.error("Error fetching employees", err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost/burgerx/addemp.php", formData);
      if (res.data.success) {
        setMessage("Employee added successfully!");
        setFormData({ name: "", age: "", address: "", joining_date: "", salary: "" });
        fetchEmployees();
      } else {
        setMessage("Failed to add employee.");
      }
    } catch (err) {
      console.error("Submit error:", err);
      setMessage("Server error.");
    }
  };

  useEffect(() => {
    fetchEmployees();
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
            <Link to="/Userstatus" className="nav-link text-dark mb-2">
               User Status
            </Link>
            <Link to="/Empdata" className="nav-link active text-white bg-primary rounded">
               Employee Data
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="col-md-9 col-lg-10 bg-light p-4">
          <h2 className="h4 mb-4 fw-bold">Add Employee</h2>
          <form onSubmit={handleSubmit} className="mb-5 row g-3">
            {["name", "age", "address", "salary"].map((field, idx) => (
              <div className="col-md-6" key={idx}>
                <input
                  type={field === "age" || field === "salary" ? "number" : "text"}
                  name={field}
                  className="form-control"
                  placeholder={field[0].toUpperCase() + field.slice(1)}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}
            <div className="col-md-6">
              <input
                type="date"
                name="joining_date"
                className="form-control"
                value={formData.joining_date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Add Employee
              </button>
              {message && <div className="mt-3 text-success">{message}</div>}
            </div>
          </form>

          <h2 className="h5 mb-3 fw-semibold">Employee List</h2>
          <div className="table-responsive bg-white p-3 shadow-sm rounded">
            <table className="table table-bordered table-striped">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Address</th>
                  <th>Joining Date</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp, index) => (
                  <tr key={index}>
                    <td>{emp.name}</td>
                    <td>{emp.age}</td>
                    <td>{emp.address}</td>
                    <td>{emp.joining_date}</td>
                    <td>₹{emp.salary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Empdata;
