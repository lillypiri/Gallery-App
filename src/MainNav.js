import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Kittens from './Kittens';
import Puppies from './Puppies';
import Birbs from './Birbs';
import Container from './Container';

const MainNav = props => {
  return <nav className="main-nav">
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/kittens">Kittens</Link>
            </li>
            <li>
              <Link to="/puppies">Puppies</Link>
            </li>
            <li>
              <Link to="/birbs">Birbs</Link>
            </li>
          </ul>
          <Route path="/kittens" component={Kittens} />
          <Route path="/puppies" component={Puppies} />
          <Route path="/birbs" component={Birbs} />
        </div>
      </BrowserRouter>
    </nav>;
};

export default MainNav;
