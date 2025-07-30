import React from 'react'
import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs(category)
    
    return (
        <div className=''>
            <h1 className="text-left text-4xl font-bold py-5 px-8">{category}</h1>

            {isLoading && <h2>Cargando...</h2>}

            <div className="flex flex-wrap justify-center">
                {
                    images.map((image                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ) => (
                        <GifItem 
                            key={image.id} 
                            {...image}
                        />
                    ))
                }
            </div>
        </div>
    )
}
