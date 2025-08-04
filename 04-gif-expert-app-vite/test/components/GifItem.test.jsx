import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en <GifItem />', () => {
    
    const title = 'Vegeta'
    const url = 'https://dragon-ball/vegeta.jpg'
    
    test('Debe de hacer match con el snapshot', () => {
        const {container} = render(<GifItem title={title} url={url}/>)

        expect(container).toMatchSnapshot()

    })

    test('Debe de mostrar el alt y el url indicados', () => {
        render(<GifItem title={title} url={url}/>)
        // screen.debug()
        const {src, alt} = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)        
    })

    test('Debe de mostar el titulo en el componente', () => {
        render(<GifItem title={title} url={url}/>)

        expect(screen.getByText(title)).toBeTruthy()
    })
})