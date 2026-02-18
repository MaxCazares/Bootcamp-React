export const getGift = async () => {

    try {
        const apiKey = 'olker8uXsi4QXnEirqeLJiSG5rRrhjDy';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url} = data.images.original;

        return url;
        
    } catch (error) {
        return 'No existe';
    }
}

getGift();