import { SITE } from "../constants/constants";

export const getUserInfoUrl = (userId) =>
	`https://api.stackexchange.com/2.3/users/${userId}`;

export const getUserTagsUrl = (userId) =>
	`https://api.stackexchange.com/2.3/users/${userId}/top-question-tags`;

export const getUserQsUrl = (userId) =>
	`https://api.stackexchange.com/2.3/users/${userId}/questions`;

export const initUser = {
	name: undefined,
	imageUrl: undefined,
	location: undefined,
	link: undefined,
	reputation: undefined,
	badges: {
		gold: undefined,
		silver: undefined,
		bronze: undefined,
	},
};

export const userInfoParams = {
	site: SITE,
};

export const sortTags = (tags) =>
	tags.sort(
		(a, b) =>
			b.answer_score - a.answer_score || b.question_score - a.question_score
	);
