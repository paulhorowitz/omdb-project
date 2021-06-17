import React from 'react';
import {Row, Col} from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import Genre from './Genre'

const Header = (props) => {
  return (
      <Row className="header padding-left-md">
          <Col xs={6}>
            <FaSearch  size={24} className="search-icon" />
            <input 
              name="Search" 
              type="search"
              value={props.value}
              onChange={(event) => props.setSearchValue(event.target.value)}
              placeholder="Search" 
              className="search-input"
              autoComplete="off"/>
          </Col>
          <Col>Year Filter</Col>
          <Col><Genre radioValue={props.radioValue} setRadioValue={props.setRadioValue} getGenreFilteredMoviesRequest={props.getGenreFilteredMoviesRequest}/></Col>
      </Row>
  )
}

export default Header;