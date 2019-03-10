import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { noop } from 'redux-saga/utils';
import en from '../../../translations/en.json';

/* eslint-disable react/prefer-stateless-function */
export default class ArticleCard extends Component {
  onEventClick = url => () => {
    this.props.gotoDetail(url);
  };

  render() {
    const { article } = this.props;
    const { title, detail, author, date, url, id } = article;
    return (
      <Card
        id={id}
        style={{
          margin: '5px',
          width: '17rem',
        }}
      >
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {`${author} ${date}`}
          </Card.Subtitle>
          <Card.Text>{detail}</Card.Text>
          <Button onClick={this.onEventClick(url)} variant="success">
            {en.Read}
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

ArticleCard.defaultProps = {
  article: {},
  gotoDetail: noop,
};
ArticleCard.propTypes = {
  article: PropTypes.object,
  gotoDetail: PropTypes.func,
};
