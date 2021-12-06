import axios from "axios";
import { selectFields } from "../utils/selectFields";

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json?orderBy="$key"&limitToFirst=100`;
export const newCommentUrl = `${baseUrl}item/`;
export const storyUrl = `${baseUrl}item/`;

export const getStory = async (storyId) => {
    const result = await axios.get(`${storyUrl + storyId}.json`).then(({data}) => data && selectFields(data));
    return result;
}

export const getStoryPage = async (storyId) => {
    const result = await axios.get(`${storyUrl + storyId}.json`).then(({data}) => data);
    return result;
}

export const getStoryIds = async () => {
    const result = await axios.get(newStoriesUrl).then(({ data }) => data);
    return result;
}

export const getComment = async (commentId) => {
    const result = await axios.get(`${storyUrl + commentId}.json`).then(({data}) => data);
    return result;
}