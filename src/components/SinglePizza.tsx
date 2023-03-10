import React, { FC, useState } from 'react';
import EditPizzaForm from './EditPizzaForm';
import Pizza from '../models/Pizza';
import {AiFillDelete, AiFillEdit} from "react-icons/ai";


interface SinglePizzaProps {
    pizza: Pizza;
    updatePizza: (newPizza: Pizza) => void;
    deletePizza: (id: number) => void;
}

const SinglePizza: FC<SinglePizzaProps> =
    ({ pizza, updatePizza, deletePizza }) => {
        const [edit, setEdit] = useState<boolean>(false);

        const handleToggleEdit = () => {
            setEdit(!edit);
        }

        const handleDelete = () => {
            deletePizza(pizza.id);
        }


        return (
            <div className="pizza">

                <img src={`/images/${pizza.img}`} alt={pizza.title}/>
                <h2>{pizza.title}</h2>
                <span>{pizza.price} грн</span>

                <div className="pizza-controls">
                    <AiFillEdit onClick={handleToggleEdit}/>
                    <AiFillDelete onClick={handleDelete} />
                </div>

                {edit
                    ? <EditPizzaForm
                        data={pizza}
                        updatePizza={updatePizza}
                        handleToggleEdit={handleToggleEdit}
                    />
                    : null}

            </div>
        )
    }

export default SinglePizza;