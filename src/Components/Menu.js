import RotatingText from "../ReactBitsComponents/Rotatingtext";
import "../Css/Menu.css";
import cheeseburger from "../Images/cheeseburger.jpg";
import baconburger from "../Images/baconburger.jpg";
import veggie from "../Images/veggieburger.jpg";
import crispy from "../Images/chichkencripsy.jpg";
import spicy from "../Images/chichkenspicy.jpg";
import grill from "../Images/grilledchicken.jpg";
import kebab from "../Images/muttonburger.jpg";
import fish from "../Images/fish.jpg";
import egg from "../Images/baconegg.jpg";
import fries from "../Images/frenchfries.jpg";
import rings from "../Images/onionrings.jpg";
import nachos from "../Images/cheesynachos.jpg";
import nuggets from '../Images/chickennuggets.jpg';
import bread from "../Images/garlicbread.jpg";
import coleslow from "../Images/coleslaw.jpg";
import Footer from "../Parts/Footer";
function Menu() {
  
const menuData = [
  // Burgers
  { title: "Classic Cheeseburger", category: "Burger", img: cheeseburger, desc: "Juicy grilled beef patty with cheese and veggies." },
  { title: "BBQ Bacon Burger", category: "Burger", img: baconburger, desc: "BBQ sauce, crispy bacon, and cheddar cheese." },
  { title: "Veggie Burger", category: "Burger", img: veggie, desc: "A healthy and delicious plant-based option." },

  // Chicken
  { title: "Crispy Chicken Sandwich", category: "Chicken", img: crispy, desc: "Golden fried chicken breast with mayo and lettuce." },
  { title: "Spicy Chicken Wrap", category: "Chicken", img: spicy, desc: "Spicy grilled chicken wrapped with veggies." },
  { title: "Grilled Chicken Burger", category: "Chicken", img: grill, desc: "Grilled chicken patty with fresh toppings." },

  // Non-Veg
  { title: "Mutton Kebab Burger", category: "Non-Veg", img: kebab, desc: "Spiced mutton kebab in a soft bun." },
  { title: "Fish Fillet Burger", category: "Non-Veg", img: fish, desc: "Crispy fish fillet with tartar sauce." },
  { title: "Bacon Egg Burger", category: "Non-Veg", img: egg, desc: "Smoky bacon with egg and cheese." },

  // Side Dishes
  { title: "French Fries", category: "Sides", img: fries, desc: "Crispy golden potato fries." },
  { title: "Onion Rings", category: "Sides", img: rings, desc: "Deep-fried crispy onion rings." },
  { title: "Cheesy Nachos", category: "Sides", img: nachos, desc: "Loaded nachos with cheese and jalapenos." },

  // More Sides
  { title: "Chicken Nuggets", category: "Sides", img: nuggets, desc: "Bite-sized crispy chicken pieces." },
  { title: "Garlic Bread", category: "Sides", img: bread, desc: "Toasted bread with garlic and herbs." },
  { title: "Coleslaw", category: "Sides", img: coleslow, desc: "Creamy, fresh cabbage slaw." }
];


  return (
    <>
      <div className="sticker-background">
        <div className="content">
          <h1>
            EXPLORE
            <RotatingText
              texts={["  TASTE", "  MENU"]}
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

      <div className="container my-5">
            <h2 className="text-center mb-4">Our Menu</h2>

            <div className="row">
                {menuData.map((item, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card h-100 shadow-sm">
                            <img src={item.img} className="card-img-top" alt={item.title} />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.desc}</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">{item.category}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-4">
                <a className="btn btn-primary px-4 py-2" href="https://www.zomato.com/mumbai/burger-x-vasai/order">Explore Full Menu</a>
            </div>
        </div>
        <Footer></Footer>
    </>
  );
}

export default Menu;
