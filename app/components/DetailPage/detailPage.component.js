import React, { Component } from 'react';
import { Button, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { noop } from 'redux-saga/utils';
import en from '../../translations/en.json';

/* eslint-disable react/prefer-stateless-function */
export default class Detail extends Component {
  onEventClick = () => {
    this.props.gotoHome();
  };

  iframe = url => ({
    __html: url,
  });

  render() {
    const { data } = this.props;
    const url = get(data, 'url', '');

    const iframeUrl = `<iframe src="${url}" width="100%" height="550px"></iframe>`;
    return (
      <Col>
        <Button variant="link" onClick={this.onEventClick}>
          {en.Home}
        </Button>
        <div dangerouslySetInnerHTML={this.iframe(iframeUrl)} />
      </Col>
    );
  }
}

Detail.defaultProps = {
  data: {},
  gotoHome: noop,
};
Detail.propTypes = {
  data: PropTypes.object,
  gotoHome: PropTypes.func,
};
