import { tours } from "../data";
import Title from "./Title";
import Community from "./Community";

const Communities = () => {
  return (
    <section className="section" id="communities">
      <Title title="yhteisöille" subTitle="rakennettu" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          return <Community key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};
export default Communities;
