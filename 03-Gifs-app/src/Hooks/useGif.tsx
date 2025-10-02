import { useRef, useState } from 'react';
import { getGifByQuery } from '../Actions/get-gif-by-query.action';
import { Gif } from '../Interfaces/gif.interface';

// const gifsCache: Record<string, Gif[]> = {};

export const useGif = () => {
	const [gifs, setGifs] = useState<Gif[]>([]);
	const [previousTerms, setPreviousTerms] = useState<string[]>([]);

	const gifsCache = useRef<Record<string, Gif[]>>({});

	const handleTermClicked = async (term: string) => {
		if (gifsCache.current[term]) {
			setGifs(gifsCache.current[term]);
			return;
		}

		setGifs(await getGifByQuery(term));
	};

	const handleSearch = async (query: string = '') => {
		query = query.toLowerCase().trim();

		if (query.length === 0) return;

		if (previousTerms.includes(query)) return;

		setPreviousTerms([query, ...previousTerms].splice(0, 8));

		const gifs = await getGifByQuery(query);
		setGifs(gifs);
		gifsCache.current[query] = gifs;
	};

	return {
		gifs,
		previousTerms,
		handleSearch,
		handleTermClicked,
	};
};
