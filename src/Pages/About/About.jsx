import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkLight from "../../assets/checkmark-light.svg";
import { useTheme } from "../../common/useTheme";
import SkillList from "../../common/SkillList";
import "./about.css";

const About = () => {
  const { theme} = useTheme();
  const checkMarkIcon = theme === "light" ? checkLight : checkMarkIconDark;

  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
        
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm a passionate and curious junior FullStack developer with a strong
              interest in building responsive, user-friendly websites. I
              recently completed my degree in Computer Science and have
              experience working with HTML, CSS, JavaScript, and React.
            </p>
            <p>
              I enjoy turning creative ideas into functional and beautiful web
              interfaces. I'm currently seeking opportunities to grow as a
              developer and contribute to meaningful projects
            </p>
          </div>
          <div id="skills" className="container">
            <h3 className="sectionTitle">Skills</h3>
            <div className="skillList">
              <SkillList src={checkMarkIcon} skill="HTML" />
              <SkillList src={checkMarkIcon} skill="CSS" />
              <SkillList src={checkMarkIcon} skill="JavaScript" />
              <SkillList src={checkMarkIcon} skill="Node" />
            </div>
            <hr />
            <div className="skillList">
              <SkillList src={checkMarkIcon} skill="React" />
              <SkillList src={checkMarkIcon} skill="Angular" />
              <SkillList src={checkMarkIcon} skill="Git" />
              <SkillList src={checkMarkIcon} skill="Express" />
            </div>
             <hr />
            <div className="skillList">
              <SkillList src={checkMarkIcon} skill="C++" />
              <SkillList src={checkMarkIcon} skill="C#" />
              <SkillList src={checkMarkIcon} skill="php" />
              <SkillList src={checkMarkIcon} skill="java" />
              <SkillList src={checkMarkIcon} skill="Bootstrap" />
            </div> 
          </div> 
         </div>
     </div>
   </div>
  );
};

export default About;
