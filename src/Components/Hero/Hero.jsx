import heroimg from "../../assets/heroimg.png";
import sun from '../../assets/sun.svg'
import whatsappLight from '../../assets/whatsapp-light.svg'
import whatsappDark from "../../assets/whatsapp-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import cv from '../../assets/Seblewongel_Dereje cv.pdf'
 import { useTheme } from '../../common/useTheme';
import moon from '../../assets/moon.svg'
import  './Hero.css'
const Hero = () => {
const {theme, toggleTheme } = useTheme();

const themeIcon =theme ==='light'? sun : moon
const whatsappIcon = theme === "light" ? whatsappLight : whatsappDark;
const githubIcon = theme === "light" ? githubLight : githubDark;
const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  return (
    <section id="hero" className="hero_container">
      <div className="colorModeContainer">
        <img className="hero" src={heroimg} alt="Potfolio"/>
        <img
          className="colorMode"
          src={themeIcon}
          alt=""
          onClick={toggleTheme}
        />
      </div>
      <div className="info">
        <h1>
          {" "}
          Seblewongel <br /> Dereje
        </h1>
        <h2>FullStack Developer</h2>
        <span>
          <a href="https://wa.me/qr/S2KULFV5FTMUK1">
            <img src={whatsappIcon} alt="whatsapp" />
          </a>
          <a href="https://www.linkedin.com/in/seblewongel-dereje/">
            <img src={linkedinIcon} alt="linkrdin" />
          </a>
          <a href="https://github.com/Seblewonge">
            <img src={githubIcon} alt="github" />
          </a>
        </span>
        <p></p>
        <a href={cv} download="Seblewongel_Resume.pdf">
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero
