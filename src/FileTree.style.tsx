import styled from 'styled-components';

import { getTheme, gridSize } from './theme';

export const FileTreeTitle = styled.h1`
  text-transform: uppercase;
  font-weight: normal;
  font-size: 14px;
  margin: 0;
  padding: ${gridSize() * 0.5}px;
  background: ${getTheme().C40};
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SubFileTreeWrapper = styled.ul`
  list-style: none;
  margin: 0 0 0 ${gridSize()}px;
  padding: 0;

  li {
    margin-left: ${gridSize()}px;
  }
`;

export const TreeItemWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: ${gridSize() * 0.5}px;

  &:hover {
    color: ${getTheme().C800};
  }
`;

export const TreeIconWrapper = styled.span`
  margin: 0 ${gridSize()}px 0 0;
  padding: 0;
`;
