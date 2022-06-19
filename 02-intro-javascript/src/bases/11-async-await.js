const getGift = async () => {

    try {
        const apiKey = 'olker8uXsi4QXnEirqeLJiSG5rRrhjDy';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url} = data.images.original;
    
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

        setTimeout(() => {
            window.location.reload()
        }, 2500);
        
    } catch (error) {
        console.error(error);
    }
}

getGift();