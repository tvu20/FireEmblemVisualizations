import React from "react";
import { Link } from "react-router-dom";

import { getArticles } from "../../utils/pages";

import footerOne from "../../assets/footer-sprites-v1.png";
import linkedin from "../../assets/linkedin.png";
import email from "../../assets/email.png";
import github from "../../assets/github.png";

import "./footer.css";

function Footer(props) {
  const { vertical } = props;

  const articles = getArticles();

  const createContactSection = () => {
    return (
      <div className="footer__right-contact">
        <h6>Contact me</h6>
        <span>
          <a
            href="https://www.linkedin.com/in/giao-vu-dinh-5609ab208/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Linkedin logo" />
          </a>
          <a
            href="mailto:tgdinh@princeton.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={email} alt="Email logo" />
          </a>
          <a
            href="https://github.com/tvu20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Github logo" />
          </a>
        </span>
      </div>
    );
  };

  const createArticleLinks = () => {
    return articles.map((article) => {
      return (
        <Link
          key={article.name}
          to={article.url}
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          {article.name}
        </Link>
      );
    });
  };

  return (
    <footer className={vertical ? "footer-vertical" : "footer-horizontal"}>
      <div className="footer__left">
        <h4>Created by Giao Vu Dinh</h4>
        <p>Published in Spring 2024</p>
        {/* <p>Senior Independent Thesis Work, 2023-2024</p> */}
        <img src={footerOne} alt="sprites running border" />
        {/* <h5>Special thanks to Tim Szetela and Adam Finkelstein</h5> */}
      </div>
      <div className="footer__right">
        <div className="footer__right-grid">
          <div>
            <h6>NAVIGATE</h6>
            <Link
              to="/"
              onClick={() => {
                window.scroll(0, 0);
              }}
            >
              Home
            </Link>
            <Link
              to="/viz"
              onClick={() => {
                window.scroll(0, 0);
              }}
            >
              Visualizations
            </Link>
            <Link to="/about">About the project</Link>
            <Link to="/what-is-fe">What is Fire Emblem?</Link>
            <Link to="/credits">Credits</Link>
          </div>
          <div>
            <h6>ARTICLES</h6>
            {createArticleLinks()}
          </div>
          <div>
            <h6>LINKS</h6>
            <a href="https://github.com/tvu20/FireEmblemVisualizations">
              Project Code
            </a>
            <a href="https://github.com/tvu20/FireEmblemTextCorpus">
              Text Corpus
            </a>
            <a href="https://drive.google.com/file/d/1rrZtRCRVQZJ9grFDnioefNDvUXXhA1Ay/view?usp=share_link">
              Writeup
            </a>
            {!vertical && createContactSection()}
          </div>
          {vertical && createContactSection()}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
