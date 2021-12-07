import React, {useEffect, useState} from 'react';
import { getStoryIds } from '../services/newsApi';
import { New } from '../components/New';
import { Link } from "react-router-dom";
import { AppHeader } from '../styles/ListStyles';
import { NewsList } from '../styles/ListStyles';
import { Reload } from '../styles/reloadStyles';
import { AppHeaderWrapper } from '../styles/ListStyles';
import reload from '../img/reload.svg'

export const NewsContainer = ({appCallback}) => {
    const [storyIds, setStoryIds] = useState([]);
    const [isRun, setIsRun] = useState(false);

    useEffect(() => {
        getStoryIds().then(data => data && setStoryIds(data))
    },[])

    const handleReload = () => {
      if (isRun) { return; }
      setIsRun(true);
      getStoryIds().then(data => data && setStoryIds(data) && setIsRun(false))
    }

    const handleClickId = (e) => {
      if (e.target.classList.contains("story-wrapper")) {
        localStorage.setItem('newId', e.target.getAttribute('data-testid'));
        appCallback(e.target.getAttribute('data-testid'));
      }
  }
    return storyIds ? (
        <>
        <AppHeaderWrapper>
          <AppHeader>Hacker News</AppHeader>
          <Reload onClick={handleReload}>
            <img src={reload} alt={reload} />
          </Reload>
        </AppHeaderWrapper>
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