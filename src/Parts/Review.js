// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const BurgerReviews = () => {
//   const [reviews, setReviews] = useState([]);
//   const [review, setReview] = useState("");
//   const [name, setName] = useState("");

//   useEffect(() => {
//     axios.get("http://localhost/burgerx/get_reviews.php").then((response) => {
//       setReviews(response.data);
//     });
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost/burgerx/add_review.php", {
//         name,
//         review,
//       })
//       .then((response) => {
//         setReviews([...reviews, response.data]);
//         setName("");
//         setReview("");
//       });
//   };

//   return (
//     <>
//     <div className="container-fluid bg-dark text-white py-5">
//       <div className="container">
//         <div className="row justify-content-center mb-4">
//           <div className="col-md-6">
//             <div className="card shadow-lg p-4 bg-light text-dark" style={{ borderRadius: "15px" }}>
//               <h2 className="text-center mb-3 text-primary">Burger Reviews</h2>
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     placeholder="Your Name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className="form-control"
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <textarea
//                     placeholder="Write your review..."
//                     value={review}
//                     onChange={(e) => setReview(e.target.value)}
//                     className="form-control"
//                     rows="3"
//                     required
//                   ></textarea>
//                 </div>
//                 <button type="submit" className="btn btn-primary w-100">
//                   Submit Review
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           {reviews.map((rev, index) => (
//             <div key={index} className="col-md-4 mb-3">
//               <div className="card p-3 bg-light text-dark shadow-sm" style={{ borderRadius: "10px" }}>
//                 <p className="fw-bold text-primary mb-1">{rev.name}</p>
//                 <p className="text-muted mb-0">{rev.review}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>

//     </>
//   );
// };

// export default BurgerReviews;
