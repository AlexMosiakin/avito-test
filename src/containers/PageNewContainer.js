import React, {useEffect, useState} from 'react';
import { getStoryPage } from '../services/newsApi';
import { StoryWrapper } from '../styles/StoryStyles';
import { Comment } from '../components/Comment';
import { useStateIfMounted } from 'use-state-if-mounted';
// import { Link } from "react-router-dom";

import star  from "../img/star.svg"
import man  from "../img/man.svg"
import time  from "../img/time.svg"
import link  from "../img/link.svg"
import comment  from "../img/comment.svg"

export const PageNewContainer = ({newCurrentId}) => {
    const [text, setText] = useStateIfMounted(false);
    const [story, setStory] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getStoryPage(newCurrentId).then( (data) => {
            data && data.id && setStory(data);
            setText(true);
            if(data.hasOwnProperty('kids')){
            data && data.id && setComments(data.kids);
            }
        });
    },[])

    function format_time(s) {
        let a = new Date(s * 1000);
        let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();
        let hour = a.getHours();
        let min = a.getMinutes();
        let sec = a.getSeconds();
        let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        return time;
    }

    return story && story.id ? (
        <>
        <StoryWrapper data-testid={story.id} className={"story-click"}>
            <h2 className={"story-title-item"}>{story.title}</h2>
            <a href={story.url} target="_blank" className={"story-row"}><img src={link}/><span>{story.url}</span></a>
            <p className={"story-row"}><img src={time}/> {format_time(story.time)}</p>
            <p className={"story-row"}><img src={man}/> {story.by}</p>
            <p className={"story-row"}><img src={star}/> {story.score}</p>
            <p className={"story-row"}><img src={comment}/> {story.descendants}</p>
        </StoryWrapper>

        {
            comments.map(commentId => (
                <Comment key={commentId} commentId={commentId}/>
            ))
        }

        </>
        ) : ""

};