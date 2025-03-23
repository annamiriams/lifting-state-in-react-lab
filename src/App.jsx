// src/App.jsx

import './App.css';
import IngredientList from './components/IngredientList/IngredientList';
import BurgerStack from './components/BurgerStack/BurgerStack';
import { useState } from 'react';

const App = () => {
    const availableIngredients = [
        { name: 'Kaiser Bun', color: 'saddlebrown' },
        { name: 'Sesame Bun', color: 'sandybrown' },
        { name: 'Gluten Free Bun', color: 'peru' },
        { name: 'Lettuce Wrap', color: 'olivedrab' },
        { name: 'Beef Patty', color: '#3F250B' },
        { name: 'Soy Patty', color: '#3F250B' },
        { name: 'Black Bean Patty', color: '#3F250B' },
        { name: 'Chicken Patty', color: 'burlywood' },
        { name: 'Lettuce', color: 'lawngreen' },
        { name: 'Tomato', color: 'tomato' },
        { name: 'Bacon', color: 'maroon' },
        { name: 'Onion', color: 'lightyellow' },
        { name: 'Cheddar Cheese', color: '#FDE18B' },
        { name: 'Swiss Cheese', color: '#F1E1A8' },
    ];

    // initialize new useState variable called stack
    // starting with an empty array so that we can add ingredients from availableIngredients to the stack
    const [stack, setStack] = useState([]);
    // new state variable to track ing list
    const [ingredientsList, setIngredientsList] = useState([]);

    // handleAddToBurger function
    const handleAddToBurger = (ingredient) => {
        console.log(ingredient);
        // reversing order so first ingredient is on the bottom
        const burgerStack = [ingredient, ...stack];
        setStack(burgerStack);
    };

    // handleRemoveFromBurger function
    const handleRemoveFromBurger = (removedIngredient) => {
        console.log(removedIngredient);
        // this is working to remove an ing from stack, but it's not letting you readd the ing from the avail ings
        // fixed when i added state variable for ing list and set it below
        const updatedBurgerStack = stack.filter(ingredient => ingredient.name !== removedIngredient.name);
        setStack(updatedBurgerStack);
        setIngredientsList(ingredientsList);
    };

    return (
        <main>
            <h1>Burger Stacker</h1>
            <section>
                {/* List & Stack components */}
                <IngredientList 
                    availableIngredients={availableIngredients} 
                    handleAddToBurger={handleAddToBurger}
                />
                <BurgerStack 
                    stack={stack}
                    handleRemoveFromBurger={handleRemoveFromBurger}
                />
            </section>
        </main>
    );
};

export default App;
