import { giphyAPI } from './giphy.api';
import { GiphyResponse } from '../Interfaces/giphy.response';
import { Gif } from '../Interfaces/gif.interface';

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
	try {
		const response = await giphyAPI<GiphyResponse>('/search', {
			params: {
				q: query,
				limit: 10,
			},
		});

		return response.data.data.map((gif) => ({
			id: gif.id,
			title: gif.title,
			url: gif.images.original.url,
			width: Number(gif.images.original.width),
			height: Number(gif.images.original.height),
		}));
	} catch (error) {
		console.error(error);
		return [];
	}
};
