// src/components/IngredientList/IngredientList.jsx

const IngredientList = (props) => {

    return (
        <div>
            <h3>Available Ingredients</h3>
            <ul>
                {props.availableIngredients.map((ingredient, index) => (
                    <li key={index}> 
                        {ingredient.name}
                    </li>
                ))}
            </ul>
        </div>

    )
};

export default IngredientList;
