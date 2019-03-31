import React from 'react';
import { Form, Input, CardBody, CardText } from 'reactstrap';
import './CommentSection.css';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
        };
    }

    render() {
        return(        
            <CardBody>
                {this.state.comments.map(comment => {
                    return (
                        <CardText>
                        <span className="comment-user">{comment.username}</span>
                        <span className="text-muted"> {comment.text}</span>                        
                        </CardText>
                    );
                })}
                
                <CardText><small className="text-muted">Last updated 3 mins ago</small></CardText>
                <Form className="comment-container">
                    <Input className="comment-input" type="text" name="search" id="search" placeholder="Add a comment..." />
                </Form>
            </CardBody>
        );
    }
}

export default CommentSection;