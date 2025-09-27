import tour1 from "./assets/images/busStop.png";
import tour2 from "./assets/images/tour-2.jpeg";
import tour3 from "./assets/images/tour-3.jpeg";
import tour4 from "./assets/images/tour-4.jpeg";

import haagaHelia from "./assets/images/HH.jpg";

export const pageLinks = [
  { id: 1, href: "#home", text: "yritys" },
  { id: 2, href: "#about", text: "gyyti app" },
  { id: 3, href: "#services", text: "keskeistä" },
  //{ id: 4, href: "#tours", text: "tours" },
];

export const partner = [
  { id: 1, image: haagaHelia }
];

export const socialLinks = [
  { id: 0, href: "https://chat.whatsapp.com/G6mjwkWe1bvKy2lMlIickH", icon: "FaWhatsapp" },
  // { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  // { id: 2, href: "https://www.x.com", icon: "fab fa-x-twitter" },
  // { id: 3, href: "https://www.squarespace.com/", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "FaUsers",
    title: "Gyydin yhteisö",
    text: "Kuin Tori, mutta kyydeille. Jokainen voi vapaasti tarjota tai pyytää kyytiä omien aikataulujensa mukaan.",
  },
  {
    id: 2,
    icon: "FaRoute",
    title: "Älykäs reittien yhdistely",
    text: "Gyydi löytää reaaliajassa samaan suuntaan kulkevat ja näyttää selkeän reittikartan. Yhdessä liikkuminen ei ole koskaan ollut näin helppoa.",
  },
  {
    id: 3,
    icon: "UserRaiting",
    title: "Luottamus ja arvostelu",
    text: "Kaikki käyttäjät esiintyvät omalla nimellään ja arvosteluilla rakennetaan luottamusta.",
  },
  {
    id: 4,
    icon: "Timing",
    title: "Aina oikeaan aikaan",
    text: "Voit sopia kyydin etukäteen tai hypätä kyytiin spontaanisti tien päältä. Gyydi elää ruuhka-aikojen ja arjen rytmissä, joustavasti sinun aikatauluissasi.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2027",
    title: "Tibet Adventure",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "china",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "october 1th, 2027",
    title: "best of java",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "indonesia",
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: "september 15th, 2027",
    title: "explore hong kong",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "hong kong",
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: "december 5th, 2027",
    title: "kenya highlights",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "kenya",
    duration: 20,
    cost: 3300,
  },
];
