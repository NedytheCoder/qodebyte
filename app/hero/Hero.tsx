import style from "./Hero.module.css";
import { LandInAnimation } from "../Animations";

const Hero = () => {
  return (
    <div
      className={`${style.main} w-full h-screen flex justify-center items-center text-white relative`}
      id="hero"
      rel="preload"
    >
      <LandInAnimation />
    </div>
  );
};

export default Hero;
