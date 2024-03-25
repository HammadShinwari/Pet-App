import React from 'react'
import { useParams, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "../helpers/fetchPet";

function Details() {

    let { id } = useParams();
    const results = useQuery(["details", id], fetchPet)
    console.log('results', results)

    if (results.isLoading) {
        return (
            <div className="loading-pane">
                <h2 className="loader">😝</h2>
            </div>
        );
    }
    const pet = results.data.pets[0];
    console.log('pet', pet)
    return (
        <div className="details">
            <div>
                <img src={pet.images[0]} alt="pet image" />
                <h1>{pet.name}</h1>
                <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
                <button>Adopt {pet.name}</button>
                <p>{pet.description}</p>
            </div>
        </div>
    )
}

export default Details