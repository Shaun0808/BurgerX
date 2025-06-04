import Aurora from "../ReactBitsComponents/Aurora";
import TextPressure from "../ReactBitsComponents/TextPressure";
import Enquiry from "../Parts/EnquiryForm";
import Footer from "../Parts/Footer";
import FadeContent  from "../ReactBitsComponents/FadeContent";

import "../Css/Contact.css";
function Contact() {
  return (
    <>
      <div
        className="main"
        style={{ width: "100%", height: "600px", position: "relative" }}
      >
        <div className="sticker-background">
          <div className="content">
            <h1>Contact Us</h1>
           </div>
        </div>
      </div>
      <FadeContent blur={true} duration={800} easing="ease-in" initialOpacity={0}>

      <Enquiry></Enquiry>
</FadeContent>
      
<FadeContent blur={true} duration={800} easing="ease-in" initialOpacity={0}>
<div className="container-fluid">
      <div className="bg-dark text-white text-center m-5 p-3" style={{borderRadius:15}} id="contact_banner">
        <h3>🛍️ Welcome to Our Shop! 🛍️</h3>
        <p><strong>Timings:</strong> Monday - Friday | 11:00 AM - 10:30 PM</p>
        <p><strong>Timings:</strong> Saturday - Sunday | 11:00 AM - 12:00 PM</p>

        <p><strong>Franchise Enquiries:</strong> Email us at <a href="mailto:franchise@ourshop.com" className="text-white fw-bold">franchise@ourshop.com</a></p>
    </div>
    </div>
</FadeContent>

    
      <Footer></Footer>
    </>
  );
}

export default Contact;
