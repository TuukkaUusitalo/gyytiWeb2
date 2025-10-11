import about from "../assets/images/aboutPicture.webp";
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
          <h3>Sama suunta – sama gyyti</h3>
          <p>
            Matkusta nopeammin, suoraviivaisemmin ja edullisesti. Gyyti tuo yksityisautoilun ja tyhjät autonistuimet julkisen liikenteen yhteyteen.
            Spontaani matkojen yhdistely on nyt todella helppoa!
          </p>
          <p>
            Gyyti elää tien päällä. Ihmisiä on jatkuvasti matkalla eri suuntiin, ja moni muukin kulkee kanssasi jatkuvasti samoja reittejä. Gyydin avulla voit helposti löytää itsellesi kyyti-matcheja.
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
