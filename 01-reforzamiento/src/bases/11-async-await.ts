import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = "olker8uXsi4QXnEirqeLJiSG5rRrhjDy";

const createImageInsideDOM = (imageUrl: string) => {
	const imgElement = document.createElement("img");
	imgElement.src = imageUrl;
	document.body.append(imgElement);
};

const getRandomGif = async () : Promise<string>=> {
	const response = await fetch(
		`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
	);
	const {data}: GiphyRandomResponse = await response.json();
	return data.images.original.url;
};

getRandomGif().then(gif => createImageInsideDOM(gif))