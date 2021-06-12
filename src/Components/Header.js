import React from 'react';
import {Row, Col} from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const Header = (props) => {
  return (
      <Row className="header padding-left-md">
          <Col xs={6}>
            <FaSearch  size={24} className="search-icon" />
            <input name="Search" type="search" placeholder="Search" className="search-input"/>
          </Col>
          <Col>Year Filter</Col>
          <Col>Type Checkbox</Col>
      </Row>
  )
}

export default Header;