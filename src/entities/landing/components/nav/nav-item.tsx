import { memo } from 'react';

const NavItem = ({ children }): JSX.Element => (
  <li>
    <a className="no-underline text-x-purple px-2">{children}</a>
  </li>
);

export default memo(NavItem);
