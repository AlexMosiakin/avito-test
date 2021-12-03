import React, {useState, useEffect} from "react";
import { getStory } from "../services/newsApi";

export const NewItem = ({newId}) => {

    const [story, setStory] = useState({});

    useEffect(() => {
        getStory(newId).then(data => data && data.id && setStory(data))
    },[])

    return story && story.id ? (
        <>
        <p>Score: {story.score}</p>
        <p>By: {story.by}</p>
        <p>Posted: {story.time}</p>
        </>
        ) : "";
};