import { defineMessages } from 'react-intl';
import en from '../../translations/en.json';

export const scope = 'app.Container.DetailPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: en.Header,
  },
});
