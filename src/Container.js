import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import KeywordRoute from './KeywordRoute';
import SearchBar from './SearchBar';
import NotFound from './NotFound';

export default class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: 'hogwarts'
    };
  }

  render() {
    return (
        <nav className="main-nav">
        <BrowserRouter>
            <div>
                <Route path="/" exact render={props => {
                    return <SearchBar onSearch={keyword => this.setState({ keyword })} />
                }} />
                <ul>
                    <li>
                        <Link to="/">Search</Link>
                    </li>
                    <li>
                        <Link to="/moomins">Moomins</Link>
                    </li>
                    <li>
                        <Link to="/pusheen">Pusheen</Link>
                    </li>
                    <li>
                        <Link to="/dinosaurs">Dinosaurs</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/" exact render={props => {
                        return <KeywordRoute keyword={this.state.keyword} />;
                        }} />
                    <Route path="/:keyword" exact component={KeywordRoute} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
        </nav>
    );
  }
}
