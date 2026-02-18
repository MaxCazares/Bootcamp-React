export const getGifs = async (category) => {
    const api_key = 'olker8uXsi4QXnEirqeLJiSG5rRrhjDy';
    const url = `http://api.giphy.com/v1/gifs/search?&api_key=${api_key}&limit=10&q=${category}`;

    const response = await fetch(url)
    const { data } = await response.json()

    const gifs = data.map(gif => ({
        'id': gif.id,
        'title': gif.title,
        'url': gif.images.downsized_medium.url
    }))
        
    return gifs
}