import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Goku'])

    const onAddCategory = newCategory => {
        const lowerCaseCategories = categories.map(category => category.toLowerCase())
        if(lowerCaseCategories.includes(newCategory.toLowerCase())) return
        
        setCategories([newCategory, ...categories])        
    }

    return (
        <div>
            <div className="bg-white rounded-xl shadow-lg px-6 py-4">
                <h1 className="text-2xl font-semibold text-gray-800">GifExpertApp</h1>
            </div>

            <AddCategory 
                onNewCategory={onAddCategory}
            />

            {
                categories.map(category => 
                    <GifGrid 
                    key={category}
                    category={category}
                    />
                )
            }
        </div>
    )
}