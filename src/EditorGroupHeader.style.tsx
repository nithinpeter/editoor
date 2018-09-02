import styled from 'styled-components';

import { getTheme, gridSize } from './theme';

export const EditorGroupHeader = styled.div`
  display: flex;
  background: ${getTheme().C0};
`;

export const CloseIconWrapper = styled.span`
  opacity: 0;
  margin: ${gridSize() * 0.5}px 0 0 ${gridSize() * 0.5}px;
`;

export const EditorGroupHeaderItem = styled.div<{ isActive: boolean }>`
  padding: ${gridSize() * 1.5}px ${gridSize() * 2}px;
  color: ${props => (props.isActive ? getTheme().C800 : getTheme().C200)};
  background: ${props => props.isActive && getTheme().C40};
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;

  & + & {
    border-left: 1px solid ${getTheme().C40};
  }

  &:hover {
    ${CloseIconWrapper} {
      opacity: 1;
    }
  }
`;

export const EditorGroupHeaderItemIcon = styled.span`
  margin-right: ${gridSize()}px;
`;
