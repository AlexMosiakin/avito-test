import React, {useState, useEffect} from "react";
import { getStory } from "../services/newsApi";
import { StoryWrapper } from '../styles/StoryStyles';

export const New = ({newId}) => {

    const [story, setStory] = useState({});

    useEffect(() => {
        getStory(newId).then(data => data && data.id && setStory(data))
    },[])

    return story && story.id ? (
        <StoryWrapper data-testid="story">
        <p>Story: {story.title}</p>
        <p>Score: {story.score}</p>
        <p>By: {story.by}</p>
        <p>Posted: {story.time}</p>
        </StoryWrapper>
        ) : "";
};