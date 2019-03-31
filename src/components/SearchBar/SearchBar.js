import React from 'react';
import { Container, Form, Input, Row, Col } from 'reactstrap';
import './SearchBar.css';

const SearchBar = ( props ) => {
  return (
      <Container className="search-bar">
          <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                  <Form>
                      <Input type="search" name="search" id="search" onChange={props.searchChange} />
                  </Form>
              </Col>
          </Row>
      </Container>
  );
}

export default SearchBar;