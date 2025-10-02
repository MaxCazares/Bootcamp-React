import { giphyAPI } from './giphy.api';
import { GiphyResponse } from '../Interfaces/giphy.response';
import { Gif } from '../Interfaces/gif.interface';

export const getGifByQuery = async (query: string): Promise<Gif[]> => {
	const { data } = await giphyAPI<GiphyResponse>('/search', {
		params: {
			q: query,
			limit: 10,
		},
	});

	return data.data.map((gif) => ({
		id: gif.id,
		title: gif.title,
		url: gif.images.original.url,
		width: Number(gif.images.original.width),
		height: Number(gif.images.original.height),
	}));
};
