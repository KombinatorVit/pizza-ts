import React, {FC} from 'react';
import Pizza from "../models/Pizza";

interface SinglePizzaProps {
    pizza: Pizza;
    updatePizza: (newPizza: Pizza) => void;
    deletePizza: (id: number) => void;
}

const SinglePizza: FC<SinglePizzaProps> = () => {
    return (
        <div>

        </div>
    );
};

export default SinglePizza;