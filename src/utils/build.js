export const build = (url) => {
	return import.meta.env.DEV
		? `http://localhost:4000/api/${url}`
		: `https://api-ecommerce-1.herokuapp.com/api/${url}`;
};
