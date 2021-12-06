import React, {useState, useEffect} from "react";
import { getComment } from "../services/newsApi";
import { useStateIfMounted } from 'use-state-if-mounted';
import { CommentChild } from "./CommentChild";
import { CommentWrapper } from "../styles/CommentStyles";
import man  from "../img/man.svg";
export const Comment = ({commentId}) => {

    const [comment, setComment] = useState({});
    const [childComment, setChildComment] = useStateIfMounted([]);

    useEffect(() => {
        getComment(commentId).then( (data) => {
            data && data.id && setComment(data);
        });
    },[])

    const showComments = (e) => {
        if (e.target.classList.contains("comment-wrapper")) {
            let id = e.target.getAttribute('data-id');
            getComment(id).then( (data) => {
                if(data.hasOwnProperty('kids')){
                    setChildComment(data.kids);
                }
            });
        }
    }


    return comment && comment.id ? (
        <CommentWrapper className={'comment-wrapper'} onClick={showComments} data-id={commentId}>
            <p><img src={man} alt={man}/> {comment.by}</p>
            <p>{comment.text}</p>
                {childComment != 0 ? 
                    childComment.map(child => (
                        <div className={'comment-wrapper-child'}>
                        <CommentChild key={child} childId={child}></CommentChild>
                        </div>
                    )) : ""
                }
        </CommentWrapper>
        ) : ""
};