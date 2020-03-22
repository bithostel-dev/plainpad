/*
  Plainpad - Self Hosted Note Taking App

  Copyright (C) 2020 Alex Tselegidis - https://alextselegidis.com

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>
*/

import React from 'react';
import vendorLogo from '../../assets/img/brand/alextselegidis-logo.png';
import appLogo from '../../assets/img/brand/plainpad-logo.png';
import {Col, Row} from 'reactstrap';

class NoteCopyright extends React.Component {
  render() {
    return (
      <div>
        <Row className="w-100 mb-2">
          <Col>
            <small>
              <img src={appLogo} alt="App Logo" className="mr-2 mt-1 float-left d-inline-block"/>
              <a href="https://alextselegidis.com/get/plainpad" target="_blank" rel="noopener noreferrer">Plainpad</a> {process.env.REACT_APP_VERSION} <br/>
              Licensed under <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank" rel="noopener noreferrer">GPL-3.0</a>
            </small>
          </Col>
        </Row>
        <Row>
          <Col>
            <small>
              <img src={vendorLogo} alt="Vendor Logo" className="mr-2 mt-1 float-left d-inline-block rounded-circle"/>
              <a href="https://alextselegidis.com" target="_blank" rel="noopener noreferrer">Alex Tselegidis</a>
              <span> &copy; {(new Date()).getFullYear()}</span> <br/>
              Software Development
            </small>
          </Col>
        </Row>
      </div>
    );
  }
}

export default NoteCopyright;
