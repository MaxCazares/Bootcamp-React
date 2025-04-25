const apiKey = 'olker8uXsi4QXnEirqeLJiSG5rRrhjDy';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(r => r.json())
    .then(({data}) => {
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(error => console.error(error))