import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const Header = (props) => {
  return (
      <Container fluid className="header">
        <Row>
          <Col xs={6} className="align-items-center">
            <FaSearch  size={24} className="search-icon" />
          </Col>
          <Col>Year Filter</Col>
          <Col>Type Checkbox</Col>
        </Row>
    </Container>
  )
}

export default Header;