
const Card = ({ recipe }) => {
  return (
    <>
          <div key={recipe.idMeal} className="meal-card">
            <h2>{recipe.strMeal}</h2>
            <p className="origin">Origin: {recipe.strArea}</p>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <p className="description">{recipe.strInstructions}</p>
          </div>
    </>
  );
};

export default Card;