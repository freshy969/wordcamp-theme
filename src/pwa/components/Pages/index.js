import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Page from './Page';
import TopBar from '../TopBar';
import Nav from '../Nav';

const Pages = ({ selectedItem }) => (
  <Fragment>
    <Page key={selectedItem.mstId} entity={selectedItem.entity} />
    <TopBar />
    <Nav />
  </Fragment>
);

Pages.propTypes = {
  selectedItem: PropTypes.shape({}).isRequired,
};

export default Pages;
