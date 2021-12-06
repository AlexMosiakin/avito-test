import React, {useEffect, useState} from 'react';
import { getStoryIds } from '../services/newsApi';
import { New } from '../components/New';
import { Link } from "react-router-dom";
import { AppHeader } from '../styles/ListStyles';
import { NewsList } from '../styles/ListStyles';

export const NewsContainer = ({appCallback}) => {
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getStoryIds().then(data => data && setStoryIds(data))
        const interval = setInterval(() => {
        getStoryIds().then(data => data && setStoryIds(data))
        }, 60000 );
         return () => clearInterval(interval);
    },[])

    const handleClickId = (e) => {
      if (e.target.classList.contains("story-wrapper")) {
        console.log(e.target);
        appCallback(e.target.getAttribute('data-testid'));
      }
  }
    return storyIds ?(
        <>
        <AppHeader>Hacker News</AppHeader>
        <NewsList>
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
      
        <Link key={storyId} to="/new-item">
          <div key={storyId} className={'story-wrapper'} data-testid={storyId} onClick={handleClickId}>
             <New key={storyId} newId={storyId}/>
          </div>
        </Link>
     
    ))}
    </NewsList>
        </>
    ) : "";




};