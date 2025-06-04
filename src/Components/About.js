import TextPressure from "../ReactBitsComponents/TextPressure";
import SpotlightCard from "../ReactBitsComponents/SpotlightCard";
import { aboutimg1, aboutimg2, aboutimg3 } from "../Parts/ImageGallery";
import ClickSpark from "../ReactBitsComponents/Clickspark";
import "../Css/About.css";
import Footer from "../Parts/Footer";
import { cheeseburger } from "../Parts/ImageGallery";

function About() {
  return (
    <>
      <ClickSpark
        sparkColor="black"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
      <div
        className="main"
        style={{ width: "100%", height: "600px", position: "relative" }}
      >
        <div className="sticker-background">
          <div className="content">
            <h1>More About</h1>
            <div style={{ position: "relative", height: "100px" }}>
              <TextPressure
                text="BurgerX"
                // flex={true}
                alpha={false}
                stroke={true}
                width={0}
                weight={true}
                italic={true}
                textColor="skyblue"
                strokeColor="grey"
                minFontSize={40}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="qualities">
        <div className="container mt-3 mb-3">
          <div className="row justify-content-center">
            {/* Card 1 */}
            <div className="col-md-4 col-sm-6 mb-3" id="card1">
              <SpotlightCard
                className="custom-spotlight-card"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div className="card text-center">
                  <img
                    src={aboutimg1}
                    className="card-img-top"
                    alt="Spotlight 1"
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      margin: "15px auto",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Quality Ingridients</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </div>

            {/* Card 2 */}
            <div className="col-md-4 col-sm-6 mb-3" id="card2">
              <SpotlightCard
                className="custom-spotlight-card"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div className="card text-center">
                  <img
                    src={aboutimg2} // Replace with your second image source
                    className="card-img-top"
                    alt="Spotlight 2"
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      margin: "15px auto",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Great Ambiance</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </div>

            {/* Card 3 */}
            <div className="col-md-4 col-sm-6 mb-3" id="card3">
              <SpotlightCard
                className="custom-spotlight-card"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div className="card text-center">
                  <img
                    src={aboutimg3}
                    className="card-img-top"
                    alt="Spotlight 3"
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      margin: "15px auto",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Fast and Efficient Service</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 p-4" id="about_banner">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-md-6 text-dark">
            <h2 className="fw-bold text-info">Why Choose Our Burgers?</h2>
            <p className="text-light">
              Our burgers are made with the freshest ingredients, handcrafted
              patties, and deliciously soft buns. We believe in quality, taste,
              and the perfect burger experience.
            </p>
            <a className="btn btn-primary mt-3" href="https://www.zomato.com/mumbai/burger-x-vasai/order">Explore Menu</a>
          </div>

          {/* Image Section */}
          <div className="col-md-6 text-center">
            <img
              src={cheeseburger}
              alt="Delicious Burger"
              className="img-fluid rounded shadow-lg"
            />
          </div>
        </div>
      </div>

      <Footer></Footer>
      </ClickSpark>
    </>
  );
}

export default About;
