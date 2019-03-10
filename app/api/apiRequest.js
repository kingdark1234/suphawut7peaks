import axios from 'axios';

const apiKey = 'ViuopdkkMfiAnjwD8X1QGQKRRzxdCmae';
export const requestNytAll = sorted =>
  axios.get(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=${sorted}&api-key=${apiKey}`,
  );
export const requestNytSearch = param =>
  axios.get(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=${
      param.sorted
    }&q=${param.search}&api-key=${apiKey}`,
  );
