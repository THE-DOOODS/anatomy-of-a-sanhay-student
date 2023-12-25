import { Cookies } from "react-cookie";

export const useCreds = () => {
	const cookies = new Cookies();
	const setSession = (token) => {
		cookies.set("token", token, { path: "/", maxAge: 3600 });
	};

	const getSession = () => {
		const token = cookies.get("token");

		if (token) {
			return token;
		}

		return null;
	};

	return { setSession, getSession };
};
