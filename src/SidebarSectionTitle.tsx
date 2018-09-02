import * as React from 'react';

import * as styles from './SidebarSectionTitle.style';
import { iconMap } from './utils';

type SidebarSectionTitleProps = {
  expanded: boolean;
  onClick: any;
  label: string;
};

export const SidebarSectionTitle = ({
  expanded,
  onClick,
  label,
}: SidebarSectionTitleProps) => (
  <styles.SidebarSectionTitle onClick={onClick}>
    {expanded ? iconMap.treeOpen : iconMap.treeClosed}
    <span>{label}</span>
  </styles.SidebarSectionTitle>
);
