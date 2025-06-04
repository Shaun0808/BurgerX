function Footer()
{
    return(
        <>

    <footer className="bg-dark text-light pt-4 pb-2 mt-3">
      <div className="container">
        <div className="row">
          {/* Address Section */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Sandor, Bangli-Bhabola Road</p>
            <p>Vasai (W), Maharashtra, 401-201</p>
          </div>
          
          {/* Quick Links Section */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Home</a></li>
              <li><a href="/About" className="text-light">About</a></li>
              <li><a href="/Menu" className="text-light">Menu</a></li>
              <li><a href="/Contact" className="text-light">Contact</a></li>
            </ul>
          </div>
          
          {/* Google Map Section */}
          <div className="col-md-4">
            <h5>Find Us</h5>
            <iframe
              title="Google Map"
              // <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.096023670593!2d72.80478079651581!3d19.364994448219978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7afe6e1354a2b%3A0x58c522e1fda4c7ef!2sBurger%20x!5e0!3m2!1sen!2sin!4v1741670819958!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.096023670593!2d72.80478079651581!3d19.364994448219978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7afe6e1354a2b%3A0x58c522e1fda4c7ef!2sBurger%20x!5e0!3m2!1sen!2sin!4v1741670819958!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
      </div>
    </footer>
        </>
    )
}

export default Footer;