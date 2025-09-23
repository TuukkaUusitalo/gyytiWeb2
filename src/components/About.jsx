import about from "../assets/images/aboutPicture.png";
import Title from "./Title.jsx";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-title">
      <Title title="gyyti" subTitle="app" />
      </div>
      <div className="section-center about-center">
        <div className="about-img">
          <img src={about} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>Gyyti helpottaa päivittäistä liikkumistasi</h3>
          <p>
            Matkusta nopeammin, suoraviivaisemmin ja edullisesti muuttamalla tyhjiä auton istuimia osaksi julkista liikennettä.
          </p>
          <p>
            Gyyti elää tien päällä – ihmisiä on jatkuvasti matkalla eri suuntiin. Moni muukin kulkee kanssasi jatkuvasti samoja reittejä, siksi kyyti-match voi osua kohdallesi koska tahansa.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
