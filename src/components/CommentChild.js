import React, {useState, useEffect} from "react";
import { getComment } from "../services/newsApi";
import man  from "../img/man.svg";
export const CommentChild = ({childId}) => {

    const [child, setChild] = useState({});

    useEffect(() => {
        getComment(childId).then(data => data && data.id && setChild(data))
    },[])


    return (
        <>
            <p><img src={man} alt={man}/> {child.by}</p>
            <p>{child.text}</p>
        </>
        )
};