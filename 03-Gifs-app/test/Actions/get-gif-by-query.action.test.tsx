import { describe, expect, test } from 'vitest';
import { getGifsByQuery } from '../../src/Actions/get-gif-by-query.action';

describe('getGifByQuery', () => {
	test('Should return a list of gifs', async () => {
		const gifs = await getGifsByQuery('naruto');

		console.log(gifs);
	});
});
