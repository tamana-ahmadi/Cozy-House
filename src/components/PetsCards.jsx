/* eslint-disable react/prop-types */
import "./Pets.css"

const PetsCards = ({
    image,
    title,
}) => {
    return (
        <>
        <div className="card">
            <img src={image} alt="Katrine" />
            <h3>{title}</h3>
            <button className="pets_btn">Learn more</button>
            </div>
        </>
    )
}

export { PetsCards }