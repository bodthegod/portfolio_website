import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { TiCodeOutline } from "react-icons/ti";

import {
  Container,
  Div1,
  Div2,
  Div3,
  HomeLink,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <HomeLink>
        <Link href="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "0px",
            }}
          >
            <TiCodeOutline size="3rem" />
          </a>
        </Link>
      </HomeLink>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>My Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Tech Stack</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>My Journey</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://www.linkedin.com/in/joe-playdon-882a58231/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://github.com/bodthegod">
        <AiFillGithub size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
