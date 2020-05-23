/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  Container,
  Links,
  Link,
  FilledLogo,
  Wrapper,
  MenuWrap,
  BurguerMenu,
  MenuLink,
  StartButton
} from "./styles";
import { slide as Menu } from "react-burger-menu";
import { useMedia, useToggle } from "react-use";

const Nav = () => {
  const isSmall = useMedia("(max-width: 800px)");
  const [isMenuOpened, toggleMenu] = useToggle(false);
  const handleStateChange = React.useCallback(state => {
    toggleMenu(state.isOpen);
  }, []);
  React.useEffect(() => {
    if (isMenuOpened && !isSmall) {
      toggleMenu(false);
    }
  }, [isMenuOpened, isSmall]);
  return (
    <>
      <Wrapper>
        <Container>
          <MenuLink href="/">
            <FilledLogo />
          </MenuLink>
          <MenuWrap>
            <Menu
              width={isSmall && isMenuOpened ? "80%" : "300px"}
              onStateChange={handleStateChange}
              isOpen={isMenuOpened}
              right
            >
              <Link href="/guides">Guias</Link>
            </Menu>
          </MenuWrap>
          {isSmall ? (
            <BurguerMenu
              isMenuOpened={isMenuOpened}
              pinned={isMenuOpened}
              onClick={() => toggleMenu()}
            />
          ) : (
            <Links>
              <Link href="/guides">Guias</Link>
            </Links>
          )}
        </Container>
      </Wrapper>
    </>
  );
};

export default Nav;
