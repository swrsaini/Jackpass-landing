import videosrc from '../assets/videos/Jackpass.mp4'
import { Navbar } from "./Navbar";
export const Hero = () => {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">

      <video
        autoPlay
        muted
        loop
        playsInline
        preload='auto'
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        
        <source src='https://github.com/swrsaini/Jackpass-landing/blob/main/src/assets/videos/Jackpass.mp4?raw=true' type="video/mp4" />
      </video>

      <nav className="absolute top-0 left-0 z-20 w-full p-4 bg-transparent">
        <Navbar></Navbar>
      </nav>

      <div className="relative z-10 flex items-center justify-center h-full w-full text-white text-center bg-black bg-opacity-50">
        <div>
          <div className="flex justify-center">
            <img
              className="h-10"
              src="https://jackpass.io/static/media/jackpass%20full%20logo%20white.294d6ca47ec6b07af43a36c2b3cc384f.svg"
              alt=""
            />
          </div>
          <p className="mt-6 text-4xl md:text-6xl font-bold">Build your tribe</p>
        </div>
      </div>
    </div>
  );
};
