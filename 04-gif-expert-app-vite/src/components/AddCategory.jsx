import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => setInputValue(target.value) 

    const onSubmit = event => {
        event.preventDefault()

        const newCategory = inputValue.trim()
        if(newCategory.length <= 1) return;

        onNewCategory(newCategory)
        setInputValue('')
    }

    return(
        <form onSubmit={onSubmit} className="flex justify-center mt-8">
            <input  
                className="w-11/12 max-w-2xl bg-purple-300 text-white placeholder-white rounded-lg px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all duration-200"
                type="text" 
                placeholder="Busca algo..."
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}