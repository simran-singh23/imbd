import {
  FaTiktok,FaInstagram, FaXTwitter,
  FaYoutube, FaFacebookF, FaArrowUp,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-black text-white px-6 md:px-16
    py-14 mt-20">


      <div className="flex justify-end">

        <button onClick={scrollToTop}

          className="bg-white text-black px-5 py-3 
          rounded-full flex items-center gap-2 font-semibold hover:scale-105 duration-300"
        >
          <FaArrowUp />
          Back to top
        </button>
      </div>


      <div className="mt-10">
        <h2 className="text-4xl font-bold">Recently viewed</h2>

        <p className="text-gray-400 mt-10 text-xl">
          You have no recently viewed pages
        </p>
      </div>

   
      <div className="mt-14 flex justify-center">
        <img src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/87872466-7fb3-4166-ae2e-89b8f02972bc.jpg"
        alt="banner"
          className="w-full max-w-6xl h-[260px] object-cover rounded-lg"
        />
      </div>

      <div className="flex justify-center mt-12">
        <Link
          to="/sign"
          className="bg-yellow-400 text-black font-bold px-10 py-4 rounded-full 
          text-xl hover:bg-yellow-300 duration-300"
        >
          Sign in for more access
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14 max-w-5xl mx-auto">

        <div className="border border-gray-700
         rounded-2xl p-8">

          <h3 className="text-3xl font-bold text-center">
            Follow IMDb on social
          </h3>

          <div className="flex items-center 
          justify-center gap-10 mt-8 text-4xl">
            <a href="#">
              <FaTiktok />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaXTwitter />
            </a>

            <a href="#">

              <FaYoutube />
            </a>

            <a href="#">
              <FaFacebookF />
            </a>
          </div>
        </div>


        <div className="border border-gray-700 rounded-2xl p-8 flex items-center justify-between">
          <div>
            <h3 className="text-3xl font-bold">
            
              Get the IMDb App
            </h3>

            <p className="text-gray-400 text-xl mt-3">
              For Android and iOS
            </p>
          </div>

          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://www.imdb.com"
            alt="qr"
            className="w-28 h-28 bg-white p-2 rounded-lg"
          />
        </div>
      </div>


      <div className="flex flex-wrap justify-center gap-8 mt-14 text-xl">
        <Link to="/help">Help</Link>
        
        <Link to="/site-index">Site Index</Link>

        <Link to="/imdbpro">IMDbPro</Link>

        <Link to="/box-office-mojo">Box Office Mojo</Link>

        <Link to="/press-room">Press Room</Link>
        <Link to="/advertising">Advertising</Link>
        <Link to="/jobs">Jobs</Link>



        <Link to="/conditions">Conditions of Use</Link>

        <Link to="/privacy-policy">Privacy Policy</Link>
      </div>

    
      <div className="text-center mt-14">
        <h2 className="text-3xl font-bold">
          an amazon company
        </h2>

        <p className="text-gray-500 mt-6 text-lg">
          © 1990-2026 by IMDb.com, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
