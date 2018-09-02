import styled from 'styled-components';

import { getTheme } from './theme';

export const SidebarWrapper = styled.div`
  background: ${getTheme().C0};
  height: 100vh;
  width: 300px;
  color: ${getTheme().C200};
  user-select: none;
`;
