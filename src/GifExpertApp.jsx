import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState( ['One Punch', 'Dragon Ball'] );

  const onAddCategory = (newCategory) => {
    //console.log(newCategory)
    //categories.push(newCategory);
    setCategories( [ newCategory, ...categories ] )
    //setCategories ( cat => [...cat, 'Valorant'] )
  }
  
  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/*Input */}
        <AddCategory 
        //setCategories = { setCategories }
        onNewCategory = { value => onAddCategory(value)}
        
        />

        {/* Listado de Gif */}
        <ol>
          { categories.map( category =>{
            return <li key ={ category } > {category} </li>
          } ) }
        </ol>
    </>
  )
}
