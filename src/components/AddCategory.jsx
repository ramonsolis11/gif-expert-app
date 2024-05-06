import { useState } from "react";

export const AddCategory = ({ onNewCategory, categories }) => {
    const [inputValue, setInputValue] = useState("");

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const newCategory = inputValue.trim();
        if (newCategory.length <= 1 || categories.includes(newCategory)) return;

        setInputValue("");
        onNewCategory(newCategory);
    };

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="searchInput" className="visually-hidden">Buscar GIFs</label>
            <input
                id="searchInput"
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
};
