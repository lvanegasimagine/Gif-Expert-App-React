import React, {useState} from 'react'
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    // const categories = ['One punch', 'Naruto', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One punch']);

    const handleAdd = () =>{
    //    Opcion 1 para agregar elemento a un arreglo se duplica con el operador spread duplica el anterior arreglo
           setCategories([...categories, 'Shingeky no Kyojin']);
    // Opcion 2 utilizando un callback que obtiene el valor anterior del arreglo
        // setCategories(cats => [...cats, 'Shingeky no Kyojin']);
        
    }
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <AddCategory setCategories={setCategories}/>
            {/* <button onClick={ handleAdd}>Agregar +</button> */}
            <ol>
                { categories.map((category) => {
                    // return <li key={category}>{category}</li>
                    return <GifGrid key={category} category={category}/>
                }) }
            </ol>
        </>
    )
}

// export default GifExpertApp
