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
            Matkusta nopeammin, suoraviivaisemmin ja edullisesti hyödyntämällä tyhjiä auton istuimia osana julkista liikennettä.
          </p>
          <p>
            Gyyti elää tien päällä – ihmisiä on jatkuvasti matkalla eri suuntiin. Moni muukin kulkee kanssasi jatkuvasti samoja reittejä, ja Gyydin avulla voit helposti löytää itsellesi kyyti-matcheja.
          </p>
          {/*<a href="#" className="btn">
            read more
          </a>*/}
        </article>
      </div>
    </section>
  );
};
export default About;
