import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
    const { images, isLoading, error } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {error && <p>Error cargando los GIFs</p>}
            {isLoading ? <h2>Cargando...</h2> :
                <div className="card-grid">
                    {images.map((image) => (
                        <GifItem key={image.id} {...image} />
                    ))}
                </div>
            }
        </>
    );
};
