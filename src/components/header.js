import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import logo from '../../static/learn-astropy-logo.png';

const HeaderContainer = styled.header`
  width: 100%;
  padding: var(--astropy-size-s) var(--astropy-size-m);
  margin: 0;
  background-color: var(--astropy-nav-header-color);
  color: var(--astropy-nav-header-text-color);

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;

  .learn-astropy-logo {
    width: 12rem;
  }

  .main-nav {
    display: flex;
    margin-left: 2rem;
    flex-direction: row
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-end;
  }

  .astropy-link {
    margin-left: auto;
  }

  a {
    color: var(--astropy-neutral-900);
  }

  a:hover {
    text-decoration: none;
  }
`;

const NavItem = styled.div`
  transition: all 0.2s ease-in-out;
  margin: 0 1em;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid var(--astropy-primary-color);
    color: var(--astropy-primary-color);
  }

  .astropy-link {
    margin-left: auto;
  }
`;

/*
 * Header component that includes the logo, search bar, and navigation tabs.
 */
export default function NavHeader() {
  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <img
            src={logo}
            alt="Learn Astropy Homepage"
            className="learn-astropy-logo"
          />
        </Link>
        <nav className="main-nav">
          <NavItem>
            <Link to="/contributing">Contribute</Link>
          </NavItem>
        </nav>
        <NavItem className="astropy-link">
          <a href="https://astropy.org">Astropy Project</a>
        </NavItem>
      </HeaderContainer>
    </>
  );
}
