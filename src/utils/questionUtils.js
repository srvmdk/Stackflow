import { SITE, PAGE_SIZE } from "../constants/constants";

export const initData = {
	hasMore: false,
	items: [],
};

export const getParams = (page) => ({
	site: SITE,
	pagesize: PAGE_SIZE,
	page,
	order: "desc",
	sort: "activity",
});

export const featureQsUrl =
	"https://api.stackexchange.com/2.3/questions/featured";