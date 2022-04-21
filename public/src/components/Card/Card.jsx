import "./Card.scss";

const Card = (props) => {
  const { name, ingredients, alcohol, country, img, key } = props;
  return (
    <div className="drink-card">
      {key} <h2>{name}</h2>
    <div className="drink-card__text">
      <img
        src={img}
        className="drink-card__image"
        alt={name}
          />
      <p>{ingredients} {alcohol} inspired by {country}</p>
    </div>
  </div>
  )
}

export default Card;
