import style from "./Hero.module.css";
import { LandInAnimation } from "../Animations";

const Hero = () => {
  return (
    <div
      className={`${style.main} w-full h-screen flex justify-center items-center text-white relative`}
      id="hero"
    >
      <div className="absolute top-4 left-4 z-10 bg-black/20 backdrop-blur-sm rounded-lg p-3 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>Live Online Classes</span>
        </div>
      </div>
      
      <div className="absolute top-4 right-4 z-10 bg-black/20 backdrop-blur-sm rounded-lg p-3 text-sm">
        <div className="flex items-center gap-2">
          <span>🎓 500+ Students Enrolled</span>
        </div>
      </div>
      
      <LandInAnimation />
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-sm">
          <span className="animate-bounce">↓</span>
          <span>Scroll to explore</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
