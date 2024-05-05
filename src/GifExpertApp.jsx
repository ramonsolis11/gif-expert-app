import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = () => {
        setCategories(['HunterXHunter', ...categories]);
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input*/}
            <AddCategory setCategoties={ setCategories } />

            {/* Listado de Gif */}
            
            <ol>
                {
                    categories.map( category => {
                        return <li key={ category }>{ category }</li>
                    })
                }
            </ol>

            {/* Gif Item */}

        </>
    )
}

