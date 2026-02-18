export interface ScrambleWordState {
	currentWord: string;
	errorCounter: number;
	guess: string;
	isGameOver: boolean;
	maxAllowErrors: number;
	maxSkips: number;
	points: number;
	scrambledWord: string;
	skipCounter: number;
	totalWords: number;
	words: string[];
}

const GAME_WORDS = [
	'REACT',
	'JAVASCRIPT',
	'TYPESCRIPT',
	'HTML',
	'ANGULAR',
	'SOLID',
	'NODE',
	'VUEJS',
	'SVELTE',
	'EXPRESS',
	'MONGODB',
	'POSTGRES',
	'DOCKER',
	'KUBERNETES',
	'WEBPACK',
	'VITE',
	'TAILWIND',
];

const shuffleArray = (array: string[]) => {
	return array.sort(() => Math.random() - 0.5);
};

const scrambleWord = (word: string = '') => {
	return word
		.split('')
		.sort(() => Math.random() - 0.5)
		.join('');
};

export const getInitialState = (): ScrambleWordState => {
	const shuffleWords = shuffleArray([...GAME_WORDS]);

	return {
		currentWord: shuffleWords[0],
		errorCounter: 0,
		guess: '',
		isGameOver: false,
		maxAllowErrors: 3,
		maxSkips: 3,
		points: 0,
		scrambledWord: scrambleWord(shuffleWords[0]),
		skipCounter: 0,
		words: shuffleWords,
		totalWords: shuffleWords.length,
	};
};

export type ScrambleWordAction =
	| { type: 'SET_GUESS'; payload: string }
	| { type: 'CHECK_ANSWER' }
	| { type: 'SKIP_WORD' }
	| { type: 'PLAY_AGAIN'; payload: ScrambleWordState };

export const ScrambleWordReducer = (
	state: ScrambleWordState,
	action: ScrambleWordAction
): ScrambleWordState => {
	switch (action.type) {
		case 'SET_GUESS': {
			return {
				...state,
				guess: action.payload.trim().toUpperCase(),
			};
		}
		case 'CHECK_ANSWER': {
			if (state.guess === state.currentWord) {
				const newWords = state.words.slice(1);

				return {
					...state,
					points: state.points + 1,
					guess: '',
					words: newWords,
					currentWord: newWords[0],
					scrambledWord: scrambleWord(newWords[0]),
				};
			}

			return {
				...state,
				guess: '',
				errorCounter: state.errorCounter + 1,
				isGameOver: state.errorCounter + 1 >= state.maxAllowErrors,
			};
		}

		case 'SKIP_WORD': {
			if (state.skipCounter >= state.maxSkips) return state;

			const skippedWords = state.words.slice(1);

			return {
				...state,
				guess: '',
				words: skippedWords,
				currentWord: skippedWords[0],
				skipCounter: state.skipCounter + 1,
				scrambledWord: scrambleWord(skippedWords[0]),
			};
		}

		case 'PLAY_AGAIN': {
			return action.payload;
		}

		default:
			return state;
	}
};
