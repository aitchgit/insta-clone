import React from 'react';
import { Container, Form, Input, Row, Col } from 'reactstrap';
import './SearchBar.css';

const SearchBar = () => {
  return (
      <Container className="search-bar">
          <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                  <Form>
                      <Input type="search" name="search" id="search" />
                  </Form>
              </Col>
          </Row>
      </Container>
  );
}

export default SearchBar;