/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';
import en from '../../translations/en.json';

export const scope = 'app.Container.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: en.Header,
  },
});
