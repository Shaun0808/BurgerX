// src/Parallax.js
import React from "react";
import "../Css/Home.css";
import TextPressure from "../ReactBitsComponents/TextPressure";
import Footer from "../Parts/Footer";
import GradientText from "../ReactBitsComponents/GradientText.js";
import SpotlightCard from "../ReactBitsComponents/SpotlightCard.js";
import { ts1, ts2, ts3 } from "../Parts/ImageGallery.js";
// import BurgerReviews from "../Parts/Review.js";
import FAQ from "../Parts/FAQ.js";
import ClickSpark from "../ReactBitsComponents/Clickspark.js";
import Aurora from "../ReactBitsComponents/Aurora.js";
// import AnimatedContent from "../ReactBitsComponents/Animatedcontent.js"

const Home = () => {
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
              <h1> Welcome To</h1>
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
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={5}
                showBorder={true}
                className="p-3"
              >
                Explore More
              </GradientText>
            </div>
          </div>
        </div>

        <div className="topsellers">

          <div className="container mt-3 mb-3">
            <div className="row justify-content-center">
              {/* Card 1 */}
              <div className="col-md-4 col-sm-6 mb-3">
                <SpotlightCard
                  className="custom-spotlight-card"
                  spotlightColor="rgba(0, 229, 255, 0.2)"
                >
                  <div className="card text-center">
                    <img
                      src={ts1}
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
                      <h5 className="card-title">Chicken Wings</h5>
                      <p className="card-text">
                      Crispy, juicy chicken wings tossed in our signature spicy sauce – perfect for sharing or solo snacking!
                      </p>
                      {/* <Link to="/Menu" className="btn btn-primary">
                       
                      </Link> */}
                    </div>
                  </div>
                </SpotlightCard>
              </div>

              {/* Card 2 */}
              <div className="col-md-4 col-sm-6 mb-3">
                <SpotlightCard
                  className="custom-spotlight-card"
                  spotlightColor="rgba(0, 229, 255, 0.2)"
                >
                  <div className="card text-center">
                    <img
                      src={ts2} // Replace with your second image source
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
                      <h5 className="card-title">French Fries</h5>
                      <p className="card-text">
                      Golden, crispy fries seasoned to perfection – the ultimate sidekick to any meal or a snack on its own
                      </p>
                      {/* <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a> */}
                    </div>
                  </div>
                </SpotlightCard>
              </div>

              {/* Card 3 */}
              <div className="col-md-4 col-sm-6 mb-3">
                <SpotlightCard
                  className="custom-spotlight-card"
                  spotlightColor="rgba(0, 229, 255, 0.2)"
                >
                  <div className="card text-center">
                    <img
                      src={ts3} // Replace with your third image source
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
                      <h5 className="card-title">Chicken Burger</h5>
                      <p className="card-text">
                      Grilled chicken patty with fresh lettuce and creamy mayo, packed into a toasted bun – pure burger bliss!
                      </p>
                      {/* <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a> */}
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            </div>
          </div>
        </div>
                          <Aurora
                          colorStops={["#8F9090","#B5DEF7","#E9EBED"]}
                          blend={0.5}
                          amplitude={1.0}
                          speed={0.5}
                        />
        {/* <div className="container">
          <BurgerReviews></BurgerReviews>
        </div> */}
        

        <FAQ></FAQ>

        <Footer></Footer>

        {/* Your content here */}
      </ClickSpark>
    </>
  );
};

export default Home;
