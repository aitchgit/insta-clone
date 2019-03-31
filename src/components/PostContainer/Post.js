import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import { Card, CardImg } from 'reactstrap';
import './Post.css';

const Post = ( props ) => {
    return(
        <Card className="posts-spacing">
            <div className="card-head"><img className="card-head-image" src={props.post.thumbnailUrl} alt="" /><p className="card-head-p">{props.post.username}</p></div>
            <CardImg top width="100%" src={props.post.imageUrl} alt="Card image cap" />
            <CommentSection comments={props.post.comments} />
        </Card>
    );
}

export default Post;