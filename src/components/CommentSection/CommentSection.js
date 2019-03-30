import React from 'react';
import { Form, Input, Row, Col } from 'reactstrap';
import './CommentSection.css';

const CommentSection = () => {
    return(
        <Row>
              <Col className="comment-container">
                  <Form>
                      <Input className="comment-input" type="text" name="search" id="search" placeholder="Add a comment..."  />
                  </Form>
              </Col>
          </Row>
    );
}

export default CommentSection;