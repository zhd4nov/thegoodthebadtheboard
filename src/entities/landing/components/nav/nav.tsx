import { memo } from 'react';

const Nav = ({ children }): JSX.Element => (
  <nav className="flex justify-center items-center ml-auto">
    <ul className="flex">{children}</ul>
  </nav>
);

export default memo(Nav);
