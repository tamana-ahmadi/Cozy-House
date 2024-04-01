import './petsfood.css'



function PetsFood (){
    return(
        <div className='pets_food_container'>
            <div className="all">
            <div className="pets_foods_layout">

                <div className="foods_text">
                <p>
                How you can help <br /> our shelter
                </p>
                </div>

                <div className="foods_icons_container">

                    <div className="food_icon">
                        <img src="../icon-pet-food.png" alt="Food icon" />
                        <h3>Pet food</h3>
                    </div>
                    <div className="food_icon">
                        <img src="../transportation.png" alt="Transportaion" />
                        <h3>Transportation</h3>
                    </div>
                    <div className="food_icon">
                        <img src="../icon-toys.png" alt="Toys" />
                        <h3>Toys</h3>
                    </div>
                    <div className="food_icon">
                        <img src="../bowls-and-cups.png" alt="Bowls" />
                        <h3>Bowls and cups</h3>
                    </div>
                    <div className="food_icon">
                        <img src="../bowls-and-cups.png" alt="Shampoos" />
                        <h3>Shampoos</h3>
                    </div>
                    <div className="food_icon">
                        <img src="../vitamins.png" alt="Vitamins" />
                        <h3>Vitamins</h3>
                    </div>
                    <div className="food_icon">
                        <img src="../icon-medicines.png" alt="Medicines" />
                        <h3>Medicines</h3>
                    </div>
                    <div className="food_icon">
                        <img src="../collars-or-leashes.png" alt="Collars / leashes" />
                        <h3>Collars / leashes</h3>
                    </div>
                    <div className="food_icon">
                        <img src="../sleeping-area.png" alt="Sleeping areas" />
                        <h3>Sleeping areas</h3>
                    </div>


                </div>
            </div>

            </div>
        </div>
    )
}

export { PetsFood };