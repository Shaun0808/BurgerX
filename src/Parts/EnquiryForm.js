const { useState } = require("react");

function Enquiry()
{
    const[formdata,setformdata] = useState({
        name:"",
        email:"",
        enquiry:"",
        userType:"Customer",
    });

    const[message,setmessage] = useState("");

    const handleChange = (e)=>{
        setformdata({...formdata,[e.target.name]:e.target.value});
    };


    const handleSubmit = async (e) =>{
        e.preventDefault();
    


    const response = await fetch("http://localhost/burgerx/Enquiry.php",{
        method:"POST",
        header:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(formdata),
    });

    const result = await response.json();
    setmessage(result.message);
};

return(
    <>
             <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Enquiry Form</h2>
        {message && <div className="alert alert-success">{message}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              name="name"
              value={formdata.name}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              name="email"
              value={formdata.email}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Enquiry:</label>
            <textarea
              name="enquiry"
              value={formdata.enquiry}
              onChange={handleChange}
              required
              className="form-control"
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">User Type:</label>
            <select
              name="userType"
              value={formdata.userType}
              onChange={handleChange}
              required
              className="form-select"
            >
              <option value="Customer">Customer</option>
              <option value="Businessman">Businessman</option>
              <option value="Staff">Staff</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>

    </>
)

}

export default Enquiry;