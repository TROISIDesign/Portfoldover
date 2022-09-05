/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

// core components

function FooterBlack() {
  return (
    <>
      <footer className="footer footer-black footer-white">
        <Container>
          <Row>
            <nav className="footer-nav">
              <ul>
                <li>
                  <a
                    href="https://www.troisi.com"
                    target="_blank"
                    className="mr-1"
                  >
                    TROISI
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.troisimusic.com"
                    target="_blank"
                    className="mr-1"
                  >
                    Music
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/user/VintageTROiSi"
                    target="_blank"
                  >
                    Video
                  </a>
                </li>
              </ul>
            </nav>
            <div className="credits ml-auto">
              <span className="copyright">
                © 2003 - {new Date().getFullYear()}, TROiSi Design Ltd.
              </span>
            </div>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default FooterBlack;
