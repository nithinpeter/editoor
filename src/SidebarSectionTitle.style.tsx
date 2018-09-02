import styled from 'styled-components';

import { getTheme, gridSize } from './theme';

export const SidebarSectionTitle = styled.h2`
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
  border-bottom: 1px solid ${getTheme().C60};
`;
