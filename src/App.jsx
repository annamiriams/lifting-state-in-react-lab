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

    // addToBurger function
    // newIngredient will be the state variable in BurgerStack.jsx i think?
    const addToBurger = (newIngredient) => {
        const burgerStack = [...stack, newIngredient];
        setStack(burgerStack);
    };

    // removeFromBurger function
    // const removeFromBurger = (removedIngredient) => {
    //     const updatedBurgerStack = burgerStack.filter(ingredient => ingredient.id !== removedIngredient.id);
    //     setStack(updatedBurgerStack);
    // };

    return (
        <main>
            <h1>Burger Stacker</h1>
            <section>
                {/* List & Stack components */}
                <IngredientList availableIngredients={availableIngredients}/>
                <BurgerStack />
            </section>
        </main>
    );
};

export default App;
