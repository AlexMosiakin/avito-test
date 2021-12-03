import React, {useEffect, useState} from 'react';
import { getStoryIds } from '../services/newsApi';
import { New } from '../components/New';
import { Link } from "react-router-dom";

export const NewsContainer = () => {
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        // const interval = setInterval(() => {
        getStoryIds().then(data => setStoryIds(data))
        // }, 60000 );
        // return () => clearInterval(interval);
    },[])

    return (
        <>
        <h1>Hacker News Stories</h1>
        {storyIds.sort((a, b) => {
        if (a.time > b.time) {
          return -1;
        }
        if (a.time < b.time) {
          return 1;
        }
        return 0;
      })
    .map(storyId => (
        <Link to="/new-item">
             <New key={storyId} newId={storyId}/>
        </Link>
    ))}
        </>
    );




};