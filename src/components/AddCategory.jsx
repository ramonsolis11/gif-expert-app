import { useState } from 'react';


export const AddCategory = ({ setCategoties }) => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;

        setCategoties( categories => [ inputValue, ...categories ]);
        setInputValue('');
    }



    return (
        <form onSubmit={ onSubmit }>
        <input 
        type="text" 
        placeholder="Buscar Gif..."
        value={ inputValue }
        onChange={ onInputChange }
        />
        </form>
    )
}
