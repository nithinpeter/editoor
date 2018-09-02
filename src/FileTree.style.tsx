import styled from 'styled-components';

import { gridSize } from './theme';

export const SubFileTreeWrapper = styled.ul`
  list-style: none;
  margin: 0 0 0 ${gridSize()}px;
  padding: 0;

  li {
    margin-left: ${gridSize()}px;
  }
`;
