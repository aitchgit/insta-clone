import React from 'react';
import { Container, Row, Col, Card, CardBody, CardText, CardImg } from 'reactstrap';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

const PostContainer = () => {
    return(
        <Container className="post-container">        
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Card>
              <div className="card-head"><img className="testing" src="https://i.imgur.com/uS8sT0Y.jpg" alt ="" /> Pewds</div>
                <CardImg top width="100%" src="https://i.imgur.com/i8YzdZ2.jpg" alt="Card image cap" />
                <CardBody>  
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                  <CardText><small className="text-muted">Last updated 3 mins ago</small></CardText>
                </CardBody>
                <CommentSection />
              </Card>
            </Col>
          </Row>
        </Container>
    );
}

export default PostContainer;