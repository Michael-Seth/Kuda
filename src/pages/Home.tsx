import Hero from "../components/Hero";
import hero1 from "../assets/images/img1.svg"


function Home() {
  const items = {
    bigText: "The money app for Africans.",
    smallText: "Save, spend, send and invest money across borders",
    button: "Join Kuda",
    imgSvg: hero1,
  };
  return (
    <div>
      <Hero {...items} />
    </div>
  );
}

export default Home;
