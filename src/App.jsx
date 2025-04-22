import "./App.css";
import Logo from "../src/assets/images/logo.svg";
import arrowDown from "./assets/images/icon-arrow-down.svg";
import avatars from "./assets/images/image-avatars.webp";
import iconStar from "./assets/images/icon-star.svg";
import heroImage from "./assets/images/image-hero-desktop.webp";
import heroImageMobile from "./assets/images/image-hero-mobile.webp";
import heroImageTablet from "./assets/images/image-hero-tablet.webp";
import readImg from "./assets/images/image-read-together-desktop.webp";
import readImgMobile from "./assets/images/image-read-together-mobile.webp";
import readImgTablet from "./assets/images/image-read-together-tablet.webp";
import logosTech from "./assets/images/logos-tech.svg";
import circlePattern from "./assets/images/pattern-circle.png";
import averageImg from "./assets/images/image-not-average-desktop.webp";
import averageImgMobile from "./assets/images/image-not-average-mobile.webp";
import averageImgTablet from "./assets/images/image-not-average-tablet.webp";
import checkIcon from "./assets/images/icon-check.svg";
import SNC1 from "./assets/images/Step Number Container.png";
import SNC2 from "./assets/images/Step Number Container2.png";
import SNC3 from "./assets/images/Step Number Container3.png";
import SNC4 from "./assets/images/Step Number Container4.png";
import patternArrow from "./assets/images/pattern-arrow.svg";
import arrowUp from "./assets/images/icon-arrow-up.svg";
import vector from "./assets/images/Vector.png";
import linkedln from "./assets/images/logo-linkedin.svg";
import patternLight from "./assets/images/Pattern Light.svg";

function App() {
  return (
    <div className="general-div">
      <section className="section-one">
        <div className="nav-bar">
          <img src={Logo} alt="" className="logo" />
        </div>
        <div className="hero-section">
          <div className="hero-text">
            <h1>Join the ultimate tech book club</h1>
            <h6>
              Turn your reading time into learning time with fellow tech
              enthusiasts. Get curated recommendations, join vibrant
              discussions, and level up your skills one chapter at a time.
            </h6>
            <div className="hero-review">
              <div>
                <button>
                  REVIEW MEMBERSHIP OPTIONS
                  <img src={arrowDown} alt="" className="arrow-down" />
                </button>
              </div>

              <div className="hero-rating">
                <img src={avatars} alt="" className="image-avatars" />
                <div>
                  <img src={iconStar} alt="" className="icon-star" />
                  <img src={iconStar} alt="" className="icon-star" />
                  <img src={iconStar} alt="" className="icon-star" />
                  <img src={iconStar} alt="" className="icon-star" />
                  <img src={iconStar} alt="" className="icon-star" />
                  <p>200+ developers joined already</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-img">
            <img src={heroImage} alt="" className="heroImg-desktop" />
            <img src={heroImageMobile} alt="" className="heroImg-mobile" />
            <img src={heroImageTablet} alt="" className="heroImg-tablet" />
          </div>
        </div>
      </section>

      <section className="section-two">
        <div className="sect2">
          <img src={readImg} alt="" className="readImg-desktop" />
          <img src={readImgMobile} alt="" className="readImg-mobile" />
          <img src={readImgTablet} alt="" className="readImg-tablet" />
        </div>
        <div className="sect2-info">
          <h2>Read together, grow together</h2>

          <div className="info">
            <img src={checkIcon} alt="" className="check-icon" />
            <p>Monthly curated tech reads selected by industry experts</p>
          </div>
          <div className="info">
            <img src={checkIcon} alt="" className="check-icon" />
            <p>Virtual and in-person meetups for deep-dive discussions</p>
          </div>
          <div className="info">
            <img src={checkIcon} alt="" className="check-icon" />
            <p>Early access to new tech book releases</p>
          </div>
          <div className="info">
            <img src={checkIcon} alt="" className="check-icon" />
            <p>Author Q&A sessions with tech thought leaders</p>
          </div>
        </div>
      </section>

      <section className="section-three">
        <div className="sect3">
          <h2>Not your average book club</h2>
          <p>
            Connect with a community that speaks your language - from{" "}
            <b>Python</b> to <b>TypeScript</b> and everything in between. Our
            discussions blend technical depth with practical applications.
          </p>
          <img src={circlePattern} alt="" className="circle-pattern" />
        </div>
        <img src={logosTech} alt="" className="logos-tech" />
        <div>
          <img src={averageImg} alt="" className="averageImg-desktop" />
          <img src={averageImgMobile} alt="" className="averageImg-mobile" />
          <img src={averageImgTablet} alt="" className="averageImg-tablet" />
        </div>
      </section>

      <section className="section-four">
        <div className="sect4">
          <h2>Your tech reading journey</h2>

          <div className="sect4-info">
            <div className="Info-4">
              <div className="subInfo">
                <img src={SNC1} alt="" className="SNC1" />
                <h6>Choose your membership tier</h6>
              </div>
              <img src={patternArrow} alt="" className="pattern-arrow" />
            </div>
            <div className="Info-4">
              <div className="subInfo">
                <img src={SNC2} alt="" className="SNC2" />
                <h6>Get your monthly book selection</h6>
              </div>
              <img src={patternArrow} alt="" className="pattern-arrow" />
            </div>

            <div className="Info-4">
              <div className="subInfo">
                <img src={SNC3} alt="" className="SNC3" />
                <h6>Join our discussion forums</h6>
              </div>
              <img src={patternArrow} alt="" className="pattern-arrow" />
            </div>

            <div className="Info-4">
              <div className="subInfo">
                <img src={SNC4} alt="" className="SNC4" />
                <h6>Attend exclusive meetups</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-five">
        <div className="section5-info">
          <h2>Membership Options</h2>
          <div className="sect5">
            <div className="starter-pro">
              <div className="sect5-starter">
                <h4>Starter</h4>
                <div className="pay-rate">
                  <h3>$19</h3>
                  <p>/month</p>
                </div>
                <hr />
                <div className="access">
                  <div className="access-rate">
                    <img src={checkIcon} alt="" className="check-icon" />
                    <p>1 book/month</p>
                  </div>
                  <div className="access-rate">
                    <img src={checkIcon} alt="" className="check-icon" />
                    <p>Online forums</p>
                  </div>
                </div>
                <button>SUBSCRIBE NOW</button>
              </div>

              <div className="sect5-starter pro">
                <h4>Pro</h4>
                <div className="pay-rate">
                  <h3>$29</h3>
                  <p>/month</p>
                </div>
                <hr />
                <div className="access">
                  <div className="access-rate">
                    <img src={checkIcon} alt="" className="check-icon" />
                    <p>2 books/month</p>
                  </div>
                  <div className="access-rate">
                    <img src={checkIcon} alt="" className="check-icon" />
                    <p>Virtual meetups</p>
                  </div>
                </div>
                <button>SUBSCRIBE NOW</button>
              </div>
            </div>

            <div className="sect5-starter">
              <h4>Enterprise</h4>
              <div className="pay-rate">
                <h3>Custom</h3>
              </div>
              <hr />
              <div className="access">
                <div className="access-rate">
                  <img src={checkIcon} alt="" className="check-icon" />
                  <p>Team access</p>
                </div>
                <div className="access-rate">
                  <img src={checkIcon} alt="" className="check-icon" />
                  <p>Private sessions</p>
                </div>
              </div>
              <button>TALK TO US</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-six">
        <div className="star-icons">
          <img src={iconStar} alt="" className="icon-star" />
          <img src={iconStar} alt="" className="icon-star" />
          <img src={iconStar} alt="" className="icon-star" />
          <img src={iconStar} alt="" className="icon-star" />
          <img src={iconStar} alt="" className="icon-star" />
        </div>

        <h3>
          "This book club transformed my technical reading from a solitary
          activity into an enriching community experience. The discussions are
          gold!"
        </h3>

        <h5>Sarah Chen, Software Architect</h5>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-info">
          <h2>Ready to debug your reading list?</h2>
          <div className="text-btn">
            <button>
              <div className="btn-img">
                REVIEW MEMBERSHIP OPTION
                <img src={arrowUp} alt="" className="arrowup-img" />
              </div>
            </button>
          </div>
          <div className="hero-rating">
            <img src={avatars} alt="" className="image-avatars" />
            <div>
              <img src={iconStar} alt="" className="icon-star" />
              <img src={iconStar} alt="" className="icon-star" />
              <img src={iconStar} alt="" className="icon-star" />
              <img src={iconStar} alt="" className="icon-star" />
              <img src={iconStar} alt="" className="icon-star" />
              <p>200+ developers joined already</p>
            </div>
          </div>
          </div>
          <hr />
          <div className="copyright-socials">
            <p className="copyright">© 2024 - Tech Book Club</p>
            <div className="social-icon">
              <img src={vector} alt="" className="image-vector" />
              <img src={linkedln} alt="" className="linkedln" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
