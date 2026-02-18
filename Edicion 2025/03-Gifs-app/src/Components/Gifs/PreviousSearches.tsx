interface Props {
	previousSearches: string[];
	onLabelClicked: (term: string) => void;
}

export const PreviousSearches = ({
	previousSearches,
	onLabelClicked,
}: Props) => {
	return (
		<div className='previous-searches'>
			{previousSearches.length > 0 && <h2>Busquedas previas</h2>}
			<ul className='previous-searches-list'>
				{previousSearches.map((term) => (
					<li key={term} onClick={() => onLabelClicked(term)}>
						{term}
					</li>
				))}
			</ul>
		</div>
	);
};
