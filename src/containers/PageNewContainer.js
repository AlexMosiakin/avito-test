import React, {useEffect, useState} from 'react';
import { getStoryIds } from '../services/newsApi';
import { NewItem } from '../components/NewItem';
// import { Link } from "react-router-dom";

export const PageNewContainer = () => {
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        // const interval = setInterval(() => {
        getStoryIds().then(data => setStoryIds(data))
        // }, 60000 );
        // return () => clearInterval(interval);
    },[reloadData])

    function reloadData() {
        reload = true;
    }

    return storyIds.map(storyId => (
             <NewItem key={storyId} newId={storyId}/>
    ));

};