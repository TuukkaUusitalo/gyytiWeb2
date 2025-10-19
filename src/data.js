import busStop from "./assets/images/busStop2.webp";
import haagaHelia from "./assets/images/HH.jpg";
import roads from "./assets/images/roads.webp";
import buildings from "./assets/images/buildings.webp";
import schools from "./assets/images/schools.webp";
import events from "./assets/images/events.webp";
import hobbies from "./assets/images/hobbies.webp";

export const pageLinks = [
  { id: 1, href: "#about", text: "gyyti app" },
  { id: 2, href: "#services", text: "keskeistä" },
  { id: 3, href: "#communities", text: "yritykset & yhteisöt" },
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
  // { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  // { id: 2, href: "https://www.x.com", icon: "fab fa-x-twitter" },
  // { id: 3, href: "https://www.squarespace.com/", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 0,
    icon: "FaCheck",
    title: "Helppo käyttää",
    text: "Yhtä helppo kuin Bolt tai Uber. Varaa kyyti muutamalla klikkauksella reaaliajassa tai ajastetusti.",
  },
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
    text: "Kaikki käyttäjät esiintyvät omalla nimellään, ja arvosteluilla rakennetaan luottamusta.",
  },
  {
    id: 4,
    icon: "Timing",
    title: "Aina oikeaan aikaan",
    text: "Voit sopia kyydin etukäteen tai hypätä kyytiin spontaanisti tien päältä. Gyyti elää ruuhka-aikojen ja arjen rytmissä, joustavasti sinun aikatauluissasi.",
  },
];

export const tours = [
  
  {
    id: 1,
    image: roads,
    date: "december 5th, 2027",
    title: "työmatkaraportointi yrityksille",
    info: ` Työpaikkojen valmiit yhteisöt tekevät toistuvien työmatkojen jakamisesta turvallista ja luonnolista. Gyyti on käyttäjäystävällinen työmatkaliikkumisen raportointiratkaisu työnantajalle.`,
    location: "kenya",
    duration: 20,
  },
  {
    id: 2,
    image: events,
    date: "december 5th, 2027",
    title: "tapahtumajärjestäjät",
    info: ` Tapahtumissa suurimmat hiilidioksidipäästöt syntyvät usein ihmisten liikkumisesta paikan päälle ja sieltä pois. Gyydin avulla raportoit vaivattomasti, luot yhteisöllisyyden ja osallisuuden tunnetta jo ennen tapahtumaa.`,
    location: "kenya",
    duration: 20,
  },
  {
    id: 3,
    image: busStop,
    date: "december 5th, 2027",
    title: "kaupungit",
    info: ` Kaupungit tarvitsevat ratkaisuja, jotka todella vähentävät autoilua arjessa. Gyyti tekee siitä yksinkertaista: Työmatkailun Bolt – yhdistetään ihmiset samoille reiteillä ja tehdään automatkojen yhdistelystä uusi normaali.`,
    location: "kenya",
    duration: 20,
  },
  {
    id: 4,
    image: schools,
    date: "december 5th, 2027",
    title: "korkeakoulut",
    info: ` Opiskelijat liikkuvat paljon kampusten ja kotien välillä – usein samoja reittejä, joista suuri osa kampusten päästöistä muodostuu. Gyyti tekee kyytien jakamisesta yhtä helppoa Boltin varaaminen.`,
    location: "kenya",
    duration: 20,
  },
  {
    id: 5,
    image: buildings,
    date: "december 5th, 2027",
    title: "taloyhtiöt",
    info: ` Tuttu kyyti omasta talosta on turvallinen, nopea ja helppo tapa liikkua arjessa. Kun naapurit jakavat kyytejä, vähenee autojen määrä pihassa ja parkkihalleissa, parkkitilaa vapautuu ja päästöt pienenevät. Samalla vahvistuu naapureiden välinen yhteisöllisyys ja luottamus.`,
    location: "kenya",
    duration: 20,
  },
  {
    id: 6,
    image: hobbies,
    date: "december 5th, 2027",
    title: "harrasteyhteisöt",
    info: ` Kyydit treeneihin, peleihin ja tapahtumiin Gyydissä muutamalla klikkauksella. Tutussa porukassa, olipa kyse urheilujoukkueesta, bändistä tai yhdistyksestä.`,
    location: "kenya",
    duration: 20,
  },
];
