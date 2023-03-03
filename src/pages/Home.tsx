import Hero from "../components/Hero";
import hero1 from "../assets/images/img1.svg";
import u from "../assets/svg/u.svg";
import t from "../assets/svg/t.svg";
import o from "../assets/svg/o.svg";
import r from "../assets/svg/r.svg";
import s from "../assets/svg/s.svg";
import CTA from "../components/CTA";
import Section_LR from "../components/Section_LR";
import Section_RL from "../components/Section_RL";

function Home() {
  const heroItems = {
    bigText: "The money app for Africans.",
    smallText: "Save, spend, send and invest money across borders",
    button: "",
    imgSvg: hero1,
  };
  const sectionItems1 = {
    bigText: "Save",
    smallText:
      "Putting money away for the future is smart but it takes discipline - something humans don’t have in abundance. We’re using technology to solve that by automating saving. You set an amount to save and the Kuda app takes care of the rest, prompt interest payout included",
    imgSvg: r,
  };
  const sectionItems2 = {
    bigText: "Spend",
    smallText:
      "Kuda gives you more than one way to pay easily, including a widely accepted debit card issued in partnership with Visa, quick web payments direct from your Kuda account, and location-based gift cards for shopping and subscriptions.",
    imgSvg: s,
  };
  const sectionItems3 = {
    bigText: "Send",
    smallText: `From international transfers to on-the-spot payments at market stalls, we’ve simplified sending money so you don’t need to think too much about it.

    You can find your friends on Kuda and make unlimited instant transfers free of charge, send money to local banks without breaking a sweat, or fulfil your promises to family across borders`,
    imgSvg: t,
  };
  const sectionItems4 = {
    bigText: "Invest",
    smallText: "We’re bringing verified global investment options closer to every African with fractional shares on Kuda, giving anyone with a Kuda account the opportunity to grow their money wherever they are in the world.",
    imgSvg: u,
  };
  const sectionItems5 = {
    bigText: "We’re always happy to help you.",
    smallText: "You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment, send an email or call. However you choose to reach out, there’ll always be a friendly person there to make your life easy.",
    imgSvg: o,
    action: "Contact Us"
  };
  return (
    <div>
      <Hero {...heroItems} />
      <Section_LR {...sectionItems1} />
      <Section_RL {...sectionItems2} />
      <Section_LR {...sectionItems3} />
      <Section_RL {...sectionItems4} />
      <Section_LR {...sectionItems5} />
      <CTA />
    </div>
  );
}

export default Home;
