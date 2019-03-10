/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Image } from 'react-bootstrap';
import HomePageComponent from '../../components/HomePage/homePage.component';
import messages from './messages';
import './homePage.style.css';
import { getNyt, getSearchNyt, readMore } from '../../redux/action/action';
import Banner from '../../images/poweredby_nytimes_200c.png';

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.PureComponent {
  componentDidMount() {
    this.props.getDataNyt('newest');
  }

  render() {
    const { searchNyt, data, getDataNyt, gotoDetail } = this.props;
    return (
      <Container>
        <Row className="header">
          <h1>
            <FormattedMessage {...messages.header} />
          </h1>
        </Row>
        <Row>
          {
            <HomePageComponent
              searchNyt={searchNyt}
              data={data}
              getDataNyt={getDataNyt}
              gotoDetail={gotoDetail}
            />
          }
        </Row>
        <Row>
          <a href="https://developer.nytimes.com">
            <Image src={Banner} thumbnail />
          </a>
        </Row>
      </Container>
    );
  }
}

export const mapStateToProps = state => ({
  data: state.get('newYorkTimes'),
});

export const mapDispatchToProps = dispatch => ({
  getDataNyt: payload => dispatch(getNyt(payload)),
  searchNyt: payload => dispatch(getSearchNyt(payload)),
  gotoDetail: payload => dispatch(readMore(payload)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
