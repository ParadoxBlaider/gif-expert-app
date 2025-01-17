import { useState } from 'react'

export const GifExperApp = () => {

  const [categories, setCategories] = useState(['One punch', 'DBZ']);
  
  const onAddCategory = () => {
    /* setCategories([...categories, 'Sailor moon']); */
    setCategories( cat => [...cat, 'Valorant']);
  };
  return (
    <>
      {/* titulo */}
      <h1>Gif Expert</h1>

      {/* input */}
      <button onClick={onAddCategory}>Agregar</button>
      {/* listado de gifs */}
      <ol>
        {
          categories.map((category, index) => {
            return <li key={index}>{category}</li>
          })
        }
      </ol>
        {/* gif item */}
    </>
  )
}
