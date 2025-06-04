function FAQ()
{
    return(
        <><div className="container mt-5 mb-5">
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        What are your most popular burgers?
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>Our bestsellers include the Classic Cheeseburger, Spicy Jalapeño Burger, and the BBQ Bacon Burger.</strong> Each one is made with premium beef, fresh ingredients, and our signature sauces.
                    </div>
                </div>
            </div>
    
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Do you offer vegetarian or vegan options?
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>Yes, we do!</strong> Try our Veggie Delight Burger or the Vegan Classic made with a plant-based patty, vegan cheese, and egg-free mayo.
                    </div>
                </div>
            </div>
    
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Do you deliver or offer online ordering?
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>Absolutely!</strong> You can order online through our website or favorite food delivery apps like Uber Eats, DoorDash, and Grubhub. Fast, hot, and delicious straight to your door!
                    </div>
                </div>
            </div>
        </div>
    </div>
    
        </>
    )
}

export default FAQ;