import RotatingText from "../ReactBitsComponents/Rotatingtext";
import "../Css/Deals.css"
import Footer from "../Parts/Footer";
function Deals1()
{
    return(
        <>

         <div className="sticker-background">
                <div className="content">
                  <h1>
                    <RotatingText
                      texts={["Good Deals", "Better Offers","Best Price"]}
                      ClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                      staggerFrom={"last"}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                      transition={{ type: "spring", damping: 30, stiffness: 400 }}
                      rotationInterval={2000}
                    />
                  </h1>
                </div>
              </div>
        
             <div class="container mt-4">
        <div class="row g-4">
            {/* <!-- Family Offer --> */}
            <div class="col-md-6 ">
                <div class="offer-card family-offer " id="Family"> 
                    <div class="offer-content">
                        <h1 class="offer-heading ">👨‍👩‍👧‍👦 Family Feast Deal</h1>
                        <p class="offer-text">30% OFF on a family combo (4+ People). Enjoy burgers, fries & drinks!</p>
                    </div>
                </div>
            </div>

            {/* <!-- College Offer --> */}
            <div class="col-md-6">
                <div class="offer-card college-offer" id="college">
                    <div class="offer-content">
                        <h1 class="offer-heading"> Group Discount</h1>
                        <p class="offer-text">20% OFF when you order 3+ burgers with your friends! 🍔🍟</p>
                    </div>
                </div>
            </div>

            {/* <!-- Weekend Special --> */}
            <div class="col-md-12">
                <div class="offer-card weekend-offer" id="weekend">
                    <div class="offer-content">
                        <h1 class="offer-heading"> Weekend Special</h1>
                        <p class="offer-text">Buy 1 Get 1 FREE on all cheeseburgers every Saturday & Sunday! 🍔</p>
                    </div>
                </div>
            </div>


         </div>
        </div>


        <Footer></Footer>
        </>
    )
}

export default Deals1;