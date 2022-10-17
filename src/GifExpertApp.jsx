import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


const Api_key = '3XEZcB1CJYPudYs3p1ALkmdykWMOPpdJ';


export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(["Marvel"]);

  const onAddCategory = (newCategory) => {
    //Si cambias los parametros de orden se inserta al principio
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
    
    //categories.push(newCategory);
    //console.log(newCategory);
    //etCategories(cat => [...cat, 'Valorant']);
  }
  
  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory 
        //setCategories={setCategories}
        onNewCategory={value => onAddCategory(value)}
        />

            {categories.map(category => (
                <GifGrid 
                key={category}
                category={category}
                />
              ))
          }

    </>
  )
}
