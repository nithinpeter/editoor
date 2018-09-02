import styled from 'styled-components';

import { getTheme, gridSize } from './theme';

export const SidebarWrapper = styled.div`
  background: ${getTheme().C0};
  height: 100vh;
  width: 300px;
  color: ${getTheme().C200};
  border-right: 1px solid ${getTheme().C30};
  user-select: none;
`;

export const SidebarTitle = styled.h1`
  height: ${gridSize() * 7}px;
  padding: ${gridSize() * 2}px;
  text-transform: uppercase;
  font-weight: normal;
  font-size: 14px;
  margin: 0;
  display: flex;
  align-items: center;
`;

export const SidebarItemWrapper = styled.div`
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

export const SidebarIconWrapper = styled.span`
  margin: 0 ${gridSize()}px 0 0;
  padding: 0;
`;

export const SidebarTextWrapper = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  flex: 1;
  overflow: hidden;
`;
