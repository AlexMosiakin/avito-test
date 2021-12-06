import React, {useState, useEffect} from "react";
import { getStory } from "../services/newsApi";

export const NewItem = ({newCurrentId}) => {

    const [story, setStory] = useState({});

    useEffect(() => {
        getStory(newCurrentId).then(data => data && data.id && setStory(data))
    },[])

    return story && story.id ? (
        <>
        <p>Score: {story.score}</p>
        <p>By: {story.by}</p>
        <p>Posted: {story.time}</p>
        </>
        ) : "";
};