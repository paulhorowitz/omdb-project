import React from 'react';
import {Row, Col} from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import Type from './Type'
import MultiRangeSlider from './MultiRangeSlider/MultiRangeSlider'

const Header = (props) => {

  // Get current year to use in maximum value for year filter slider
  var d = new Date();
  var n = d.getFullYear();

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
          <Col>
            <Row className="align-top">
            <p className="header-headings">Year</p>
            </Row>
            <Row>
            {/* Filter by year via range slider */}
            <MultiRangeSlider min={1900} max={n} />
            </Row>
          </Col>
            {/* Filter by type via radio buttons */}
          <Col>
            <Row className="align-top">
              <p className="header-headings">Type</p>
            </Row>
            <Row>
              <Type radioValue={props.radioValue} setRadioValue={props.setRadioValue} getTypeFilteredMoviesRequest={props.getTypeFilteredMoviesRequest}/>
            </Row>
          </Col>
      </Row>
  )
}

export default Header;