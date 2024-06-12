interface ValidationResult {
	correctValue: boolean;
	message: string;
}

export function validationEmail(email: string): ValidationResult {
	const emailRegex = /^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i;
	if (emailRegex.test(email)) {
		return { correctValue: true, message: `` };
	} else {
		const domainExtension = email.split('.').slice(1).join('.').length;
		const domainName = email
			.split('@')
			.slice(1)
			.join('.')
			.split('.')
			.slice(0, 1)
			.join('.');
		if (!email.includes('@')) {
			return {
				correctValue: false,
				message: `В вашем email не хватает символа '@'`,
			};
		}
		if (!email.includes('.')) {
			return {
				correctValue: false,
				message: `В вашем email не хватает точки`,
			};
		}
		if (domainExtension <= 1 || domainExtension > 4) {
			return {
				correctValue: false,
				message: `В вашем email не корректное расширение доменного имени`,
			};
		}
		if (!(domainName.length > 0)) {
			return {
				correctValue: false,
				message: `В вашем email отсутствует доменное имя`,
			};
		}
		return {
			correctValue: false,
			message: `Некорректный формат ввода email`,
		};
	}
}
export function validationPassword(password: string): ValidationResult {
	const upper = /^(?=.*[A-Z]).+$/;
	password = password.trim();
	if (password.length < 8)
		return { correctValue: false, message: 'Пароль слишком короткий' };
	if (!upper.test(password))
		return {
			correctValue: false,
			message: 'В пароле отсутствует заглавная буква',
		};
	return { correctValue: true, message: `` };
}
