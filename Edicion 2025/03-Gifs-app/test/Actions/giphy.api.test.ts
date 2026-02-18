import { describe, expect, test } from 'vitest';
import { giphyAPI } from '../../src/Actions/giphy.api';

describe('first', () => {
	test('Should contain api_key and language as spanish', () => {
		expect(giphyAPI.defaults.baseURL).toBe('https://api.giphy.com/v1/gifs');
		
        const params = giphyAPI.defaults.params;
		expect(params).toStrictEqual({
			lang: 'es',
			api_key: import.meta.env.VITE_GIPHY_API_KEY,
		});
	});
});
