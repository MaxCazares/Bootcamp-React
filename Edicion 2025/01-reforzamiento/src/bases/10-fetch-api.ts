import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = "olker8uXsi4QXnEirqeLJiSG5rRrhjDy";

const request = fetch(
	`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

const createImageInsideDOM = (imageUrl: string) => {
	const imgElement = document.createElement("img");
	imgElement.src = imageUrl;
	document.body.append(imgElement);
};

request
	.then((resp) => resp.json())
	.then(({ data }: GiphyRandomResponse) => {
		const imageUrl = data.images.original.url;
		createImageInsideDOM(imageUrl);
	})
	.catch((err) => console.error(err));
