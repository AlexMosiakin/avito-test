import React, {useState, useEffect} from "react";
import { getStory } from "../services/newsApi";
import { StoryWrapper } from '../styles/StoryStyles';
import star  from "../img/star.svg";
import man  from "../img/man.svg";
import time  from "../img/time.svg";
import ScrollAnimation from 'react-animate-on-scroll';

export const New = ({newId}) => {

    const [story, setStory] = useState({});

    useEffect(() => {
        getStory(newId).then(data => data && data.id && setStory(data))
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
        <ScrollAnimation  animateIn='fadeIn' animateOnce={true}>
        <StoryWrapper>
        <p className={"story-row story-title"}>{story.title}</p>
        <p className={"story-row"}><img src={man}/> {story.by}</p>
        <p className={"story-row"}><img src={star}/> {story.score}</p>
        <p className={"story-row"}><img src={time}/> {format_time(story.time)}</p>
        </StoryWrapper>
        </ScrollAnimation>
        ) : "";
};