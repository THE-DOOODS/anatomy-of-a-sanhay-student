export const build = (url) => {
	return import.meta.env.DEV
		? `http://localhost:4000/api/${url}`
		: `https://anatomy-of-a-sanhay-student.vercel.app/api/${url}`;
};
