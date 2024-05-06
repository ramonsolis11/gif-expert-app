import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        getGifs(category)
            .then(newImages => {
                setImages(newImages);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setImages([]);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [category]);

    return {
        images,
        isLoading,
        error,
    };
};

