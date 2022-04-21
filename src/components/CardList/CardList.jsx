import Card from '../Card/Card';

export const CardList = ({cards}) => {
  return (
    <div className="card-container">
    {cards.map((drink, index) => {
      return (
        <Card
          name={drink.name}
          ingredients={drink.ingredients}
          alcohol={drink.alcohol}
          country={drink.countryOfOrigin}
          key={drink.id + index}
        />
      );
    })}
  </div>
  )
}
