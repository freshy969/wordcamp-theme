import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';
import styled from 'react-emotion';
import Card from './Card';
import Refresh from './Refresh';
import NextPage from './NextPage';
import TopBar from '../TopBar';

const Announcements = ({ entities, list }) => (
  <Fragment>
    <TopBar />
    <Content>
      <Refresh list={list} />
      <List>{entities.map(entity => <Card key={entity.mstId} entity={entity} />)}</List>
      <NextPage list={list} />
    </Content>
  </Fragment>
);

Announcements.propTypes = {
  entities: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  list: PropTypes.shape({}).isRequired,
};

export default inject(({ connection }) => ({
  entities: connection.list('latest', 'post').entities.peek(),
  list: connection.list('latest', 'post'),
}))(Announcements);

const Content = styled.div`
  box-sizing: border-box;
  width: 100vw;
  min-height: 100vh;
  padding: ${({ theme }) => theme.padding.credits};
`;

const List = styled.div`
  margin: 0 32px;
`;
