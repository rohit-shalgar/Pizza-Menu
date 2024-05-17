const Pizza = ({ name, ingredients, price, photoName }) => {
    return (
        <li>
            <h2>{name}</h2>
            <p>{ingredients}</p>
            <p>{price}</p>
            <img src={photoName} alt={name} />
        </li>
    );
};

export default Pizza;