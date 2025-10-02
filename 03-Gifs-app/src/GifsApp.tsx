import { CustomHeader } from './Components/CustomHeader';
import { GifList } from './Components/Gifs/GifList';
import { PreviousSearches } from './Components/Gifs/PreviousSearches';
import { SearchBar } from './Components/Gifs/SearchBar';
import { useGif } from './Hooks/useGif';


export const GifsApp = () => {
	const {gifs, previousTerms, handleSearch, handleTermClicked} = useGif()

	return (
		<>
			<CustomHeader
				title='Buscador de Gifs'
				description='Busca y comparte el gif perfecto'
			/>

			<SearchBar
				placeholder='Busca lo que más te gusta'
				onQuery={handleSearch}
			/>

			<PreviousSearches
				previousSearches={previousTerms}
				onLabelClicked={handleTermClicked}
			/>

			<GifList gifs={gifs} />
		</>
	);
};
