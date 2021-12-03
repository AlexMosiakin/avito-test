import React, {useEffect, useState} from 'react';
import { getStoryIds } from '../services/newsApi';
import { New } from '../components/New';

export const NewsContainer = () => {
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getStoryIds().then(data => setStoryIds(data))

    },[])

    return storyIds.map(storyId => (
        <New key={storyId} newId={storyId}/>
    ));

};