import { NavLink } from '@mantine/core';
import type { ReactNode } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from '../../css/NavLink.module.css';

interface LinksGroupProps {
  label: string;
  path: string;
  links?: { label: string; path: string }[];
}

const LinksGroup = ({ label, path, links }: LinksGroupProps) => {
  const pathname = usePathname();

  const hasLinks = Array.isArray(links);
  const activeStatus = (linkPath: string) => pathname === linkPath;

  const items: ReactNode[] = (hasLinks ? links : []).map((link) => (
    <NavLink
      component={Link}
      className={classes.link}
      label={link.label}
      key={link.path}
      active={activeStatus(link.path)}
      href={link.path}
    />
  ));

  return (
    <NavLink
      component={Link}
      label={label}
      className={classes.link}
      active={activeStatus(path)}
      childrenOffset={32}
      href={hasLinks ? '' : path}

    >
      {items.length === 0 ? null : items}
    </NavLink>
  );
};

export default LinksGroup;
