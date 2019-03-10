import React from 'react';
import {
  Row,
  Col,
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { get, map, isEqual, noop } from 'lodash';
import CardArticle from '../Shared/ArticleCard/articleCard';
import en from '../../translations/en.json';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  state = {
    article: '',
    sorted: 'newest',
    searchText: '',
  };

  onTextChange = event => {
    const value = get(event, 'target.value', null);
    const { sorted } = this.state;
    this.setState({
      searchText: value,
    });
    this.props.searchNyt({ sorted, search: value });
  };

  onSortedChange = value => {
    const { searchText } = this.state;
    this.setState(
      {
        sorted: value,
      },
      () => {
        if (searchText !== '') {
          this.props.searchNyt({
            sorted: this.state.sorted,
            search: searchText,
          });
        } else {
          this.props.getDataNyt(this.state.sorted);
        }
      },
    );
  };

  generateArticle = items => {
    const key = get(items, 'id', '');
    return (
      <CardArticle
        key={key}
        gotoDetail={this.props.gotoDetail}
        article={items}
      />
    );
  };

  setArticle = card => {
    this.setState({
      article: card,
    });
  };

  componentDidUpdate(prevProps) {
    const { data } = this.props;
    if (!isEqual(prevProps.data, data)) {
      const nyt = get(data, 'nyt', []);
      const getArticleComponent = map(nyt, this.generateArticle);
      this.setArticle(getArticleComponent);
    }
  }

  render() {
    const { article, sorted } = this.state;
    return (
      <Col lg>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search Group"
            aria-label="Search"
            aria-describedby="Search input"
            onChange={this.onTextChange}
          />
        </InputGroup>
        {en.Sorted}:
        <DropdownButton title={sorted} onSelect={this.onSortedChange}>
          <Dropdown.Item eventKey={en.Newest}>{en.Newest}</Dropdown.Item>
          <Dropdown.Item eventKey={en.Oldest}>{en.Oldest}</Dropdown.Item>
        </DropdownButton>
        <Row>{article}</Row>
      </Col>
    );
  }
}

HomePage.defaultProps = {
  data: {},
  searchNyt: noop,
  getDataNyt: noop,
  gotoDetail: noop,
};
HomePage.propTypes = {
  data: PropTypes.object,
  searchNyt: PropTypes.func,
  getDataNyt: PropTypes.func,
  gotoDetail: PropTypes.func,
};
