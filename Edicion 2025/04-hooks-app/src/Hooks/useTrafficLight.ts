import { useEffect, useState } from 'react';

const colors = {
	red: 'bg-red-500 animate-pulse',
	yellow: 'bg-yellow-500 animate-pulse',
	green: 'bg-green-500 animate-pulse',
};

// type TrafficLightColor = 'red' | 'yellow' | 'green';
type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = (initialTime: number) => {
	const [light, setLight] = useState<TrafficLightColor>('red');
	const [countdown, setCountdown] = useState(initialTime);

	useEffect(() => {
		if (countdown === 0) return;

		const intervalId = setInterval(() => {
			setCountdown((prev) => prev - 1);
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, [countdown]);

	useEffect(() => {
		if (countdown > 0) return;
		setCountdown(initialTime);
		if (light === 'red') {
			setLight('green');
			return;
		} else if (light === 'yellow') {
			setLight('red');
			return;
		} else if (light === 'green') {
			setLight('yellow');
			return;
		}
	}, [countdown, light]);

	return {
		light,
		colors,
		countdown,
		percentage: (countdown / initialTime) * 100,
		greenLight: light === 'green' ? colors.green : 'bg-gray-500',
		redLight: light === 'red' ? colors.red : 'bg-gray-500',
		yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500',
	};
};
