// src/components/IngredientList/IngredientList.jsx

const IngredientList = (props) => {
    return (
        <div>
            <h1>Available Ingredients</h1>
            <ul>
                {props.availableIngredients.map((ingredient, index) => (
                    <li key={index} style={{ backgroundColor: ingredient.color }}> 
                        {ingredient.name}
                        <button onClick={() => props.handleAddToBurger(ingredient)}>+</button>
                    </li>
                ))}
            </ul>
        </div>

    )
};

export default IngredientList;
