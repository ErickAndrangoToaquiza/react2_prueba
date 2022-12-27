import { FC } from "react";
import Button from "../../atoms/button/button";
import "./card.scss";

interface CardProps{
    title:string;

}

const Card: FC<CardProps> = ({ title }) => {
    return (
        <div className="card">
          
            <Button 
            onClick={()=>{ }}>Eliminar</Button>



        </div>
    )
};

export default Card;