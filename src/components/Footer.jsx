import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/104769463?v=4"}
          alt="Founder"
        />

        <h2>Jattin Kumar</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/jattin-kumar/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/heyy_jattin/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/JattinTHAKUR" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
