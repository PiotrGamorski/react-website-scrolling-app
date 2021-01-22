import svg1 from "../../images/svg-1.svg";
import svg2 from "../../images/svg-2.svg";
import svg3 from "../../images/svg-3.svg";

export const homeObjectOne = {
  id: "about",
  lightBackground: false,
  lightText: true,
  lightTextDescription: true,
  topLine: "Premium Bank",
  headline: "Unlimited Transactions with zero fees",
  description:
    "Get access to our exlusive app that allows you to send unlimited transactions without getting charged any fees.",
  buttonLabel: "Get Started",
  imgStart: false,
  img: svg1,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjectTwo = {
  id: "discover",
  lightBackground: true,
  lightText: false,
  lightTextDescription: false,
  topLine: "Unlimited Access",
  headline: "Login to your account at any time",
  description:
    "We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.",
  buttonLabel: "Learn More",
  imgStart: true,
  img: svg2,
  alt: "PiggyBank",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjectThree = {
  id: "signup",
  lightBackground: true,
  lightText: false,
  lightTextDescription: false,
  topLine: "Join our Team",
  headline: "Creating an account is extremly easy",
  description:
    "Get everything set up and ready is under 10 minutes. All you need to do is add your information and you're ready to go.",
  buttonLabel: "Start Now",
  imgStart: false,
  img: svg3,
  alt: "Paper",
  dark: false,
  primary: false,
  darkText: true,
};
