import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Post from './Post';



const PostContainer = (props) => {
    return(
        <Container className="post-container">        
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
            {props.postData.map(post => <Post post={post} />)}              
            </Col>
          </Row>
        </Container>
    );
}

export default PostContainer;