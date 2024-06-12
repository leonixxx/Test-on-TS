import { createContext } from 'react';

export interface LoginContextType {
	value: boolean;
	setValue: () => void;
}

export const LoginContext = createContext<LoginContextType>({
	value: false,
	setValue() {
		this.value = true;
	},
});
