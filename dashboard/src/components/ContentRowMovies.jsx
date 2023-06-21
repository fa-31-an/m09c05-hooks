import React from "react";
import { Card } from "./Card";

let moviesInDataBase = {
    color:   "primary",
    titulo: "Movies in Data Base",
    valor: 21,
    icono: "fas fa-film",
}

let awards ={
    color:   "success",
    titulo: "Total awards",
    valor: 79,
    icono: "fas fa-award",
}

let actors = {
    color:   "warning",
    titulo: "Total of actors",
    valor: 49,
    icono: "fas fa-user",
}

let cardProps = [moviesInDataBase, awards, actors]

export const ContentRowMovies = () => {
    return (
        <>
        <div className="row">
            {cardProps.map((movie, i) => {
                return <Card {...movie} key={i}/>
            })}
        </div>
        </>
    );
};