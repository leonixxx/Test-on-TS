import { useEffect, useState } from 'react';

export function useLocalStorage<T>(
	key: string,
	initialValue?: T
): [T, (value: T) => void] {
	const [value, setValue] = useState<T | undefined>(() => {
		const item = window.localStorage.getItem(key);
		return item !== null && item !== 'undefined'
			? (JSON.parse(item) as T)
			: initialValue;
	});

	useEffect(() => {
		const item = JSON.stringify(value);
		window.localStorage.setItem(key, item);
	}, [key, value]);

	return [value as T, setValue];
}
