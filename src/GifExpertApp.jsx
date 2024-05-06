import { useState } from "react";
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        const normalizedCategory = newCategory.trim().toLowerCase();
        if (categories.includes(normalizedCategory) || normalizedCategory === '') return;
        setCategories([normalizedCategory, ...categories]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={onAddCategory} />

            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    );
};

