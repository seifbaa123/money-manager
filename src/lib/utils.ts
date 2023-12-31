export function generateColorsFromUsername(username: string) {
	let hashCode = 0;
	for (let i = 0; i < username.length; i++) {
		hashCode = username.charCodeAt(i) + ((hashCode << 5) - hashCode);
	}

	const r = (hashCode & 0xff0000) >> 16;
	const g = (hashCode & 0x00ff00) >> 8;
	const b = hashCode & 0x0000ff;
	const bg = `rgb(${r}, ${g}, ${b})`;

	const grayscale = 0.299 * r + 0.587 * g + 0.114 * b;
	const text = grayscale > 128 ? 'var(--black)' : 'var(--white)';

	return { bg, text };
}
