import { memo } from 'react';
import { Nav, NavItem } from '../components/nav';
import { Logo } from '../../../components/logo';
import { Button } from '../../../components/common/button';

const Header = () => (
  <header className="flex justify-start items-center px-16 py-2 shadow-lg">
    <Logo />
    <Nav>
      {['section', 'section', 'section', 'section'].map((title) => (
        <NavItem>{title}</NavItem>
      ))}
    </Nav>
    <Button>log in</Button>
  </header>
);

export default memo(Header);
