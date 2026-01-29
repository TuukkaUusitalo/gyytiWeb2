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
  { id: 4, href: "#mission", text: "missio" },
  //{ id: 5, href: "#tours", text: "tours" },
];

export const partner = [
  { id: 1, image: haagaHelia }
];

export const socialLinks = [
  { id: 0, href: "https://chat.whatsapp.com/JPhol4gvpCx9xB5FEXWqSd", icon: "FaWhatsapp", text: "WhatsApp Community" },
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
    text: "Yhtä helppo kuin Bolt. Varaa kyyti muutamalla klikkauksella reaaliajassa tai ajastetusti.",
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
    title: "työmatkaraportointi yrityksille (Scope 3)",
    info: `Työpaikkojen valmiit yhteisöt tekevät toistuvien työmatkojen jakamisesta turvallista ja luonnollista. Gyyti on käyttäjäystävällinen työmatkaliikkumisen raportointiratkaisu työnantajalle.`,
    hasModal: true,
    pdfUrl: "/src/assets/GyytiRaportointi.pdf",
  },
  {
    id: 2,
    image: events,
    title: "tapahtumajärjestäjät",
    info: ` Tapahtumissa suurimmat hiilidioksidipäästöt syntyvät usein ihmisten liikkumisesta paikan päälle ja sieltä pois. Gyydin avulla raportoit vaivattomasti, luot yhteisöllisyyden ja osallisuuden tunnetta jo ennen tapahtumaa.`,
    hasModal: false,
  },
  {
    id: 3,
    image: busStop,
    title: "kaupungit",
    info: ` Kaupungit tarvitsevat ratkaisuja, jotka todella vähentävät autoilua arjessa. Gyyti tekee siitä yksinkertaista: Työmatkailun Bolt – yhdistetään ihmiset samoille reiteillä ja tehdään automatkojen yhdistelystä uusi normaali.`,
    hasModal: false,
  },
  {
    id: 4,
    image: schools,
    title: "korkeakoulut",
    info: ` Opiskelijat liikkuvat paljon kampusten ja kotien välillä – usein samoja reittejä, joista suuri osa kampusten päästöistä muodostuu. Gyyti tekee kyytien jakamisesta yhtä helppoa kuin Boltilla matkustaminen.`,
    hasModal: false,
  },
  {
    id: 5,
    image: buildings,
    title: "taloyhtiöt",
    info: ` Tuttu kyyti omasta talosta on turvallinen, nopea ja helppo tapa liikkua arjessa. Kun naapurit jakavat kyytejä, vähenee autojen määrä pihassa ja parkkihalleissa, parkkitilaa vapautuu ja päästöt pienenevät. Samalla vahvistuu naapureiden välinen yhteisöllisyys ja luottamus.`,
    hasModal: false,
  },
  {
    id: 6,
    image: hobbies,
    title: "harrasteyhteisöt",
    info: ` Kimppakyydit treeneihin, peleihin ja tapahtumiin Gyydissä muutamalla klikkauksella. Tutussa porukassa, olipa kyse urheilujoukkueesta, bändistä tai yhdistyksestä.`,
    hasModal: false,
  },
];
