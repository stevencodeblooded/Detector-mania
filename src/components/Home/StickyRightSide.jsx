import {
  faInstagram,
  faThreads,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import tiktok from "../../assets/tiktok.png";
import whatsapp from "../../assets/whatsapp.png";
import facebook from "../../assets/facebook.png";
import spotify from "../../assets/spotify.png";
import telegram from "../../assets/telegram.png";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import article from "../../assets/img_article_1.png";
import { Link } from "react-router-dom";
import ads from '../../assets/ads.jpeg'
import { useTheme } from '../../shared/ThemeContext'; // Adjust path as necessary

const StickyRightSide = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      <div className="sticky top-0  z-10 p-4 mb-20">
        <div className="h-64 border w-full">
          <img
            src={ads}
            alt={`Ads`}
            className="w-full h-64 object-cover"
          />
        </div>
        <hr className="border border-b-gray-500 my-5" />

        <h2 className="flex items-center gap-2 my-5 text-3xl uppercase font-semibold text-emerald-700">
          <FontAwesomeIcon icon={faFire} /> Trends
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link
            to={"/"}
            className="bg-emerald-700 font-semibold text-white uppercase rounded-md px-2 py-1"
          >
            Nokta marko
          </Link>
          <Link
            to={"/"}
            className="bg-emerald-700 font-semibold text-white uppercase rounded-md px-2 py-1"
          >
            Garet
          </Link>
          <Link
            to={"/"}
            className="bg-emerald-700 font-semibold text-white uppercase rounded-md px-2 py-1"
          >
            News
          </Link>
          <Link
            to={"/"}
            className="bg-emerald-700 font-semibold text-white uppercase rounded-md px-2 py-1"
          >
            Garrett
          </Link>
          <Link
            to={"/"}
            className="bg-emerald-700 font-semibold text-white uppercase rounded-md px-2 py-1"
          >
            Lorem ipsum
          </Link>
        </div>

        <hr className="border border-b-gray-500 my-5" />
        <h2 className="text-3xl uppercase mb-7 font-semibold text-emerald-700">
          I Migliori
        </h2>
        <div className="flex flex-col gap-5 ">
          <Link>
            <div className="flex items-center gap-4 cursor-pointer hover:opacity-70">
              <img
                src={article}
                alt=""
                className="rounded-md w-28 h-28 object-cover"
              />
              <div className="flex flex-col gap-1">
                <p className="text-xs">Emilio G</p>
                <p className="font-bold leading-5 hover:underline">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam,
                  praesentium.
                </p>
                <p className="bg-green-300 px-2 py- rounded-md w-fit text-xs font-extralight">
                  Curiosta
                </p>
              </div>
            </div>
          </Link>
          <Link>
            <div className="flex items-center gap-4 cursor-pointer hover:opacity-70">
              <img
                src={article}
                alt=""
                className="rounded-md w-28 h-28 object-cover"
              />
              <div className="flex flex-col gap-1">
                <p className="text-xs">Emilio G</p>
                <p className="font-bold leading-5 hover:underline">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam,
                  praesentium.
                </p>
                <p className="bg-green-300 px-2 py- rounded-md w-fit text-xs font-extralight">
                  Curiosta
                </p>
              </div>
            </div>
          </Link>
          <Link>
            <div className="flex items-center gap-4 cursor-pointer hover:opacity-70">
              <img
                src={article}
                alt=""
                className="rounded-md w-28 h-28 object-cover"
              />
              <div className="flex flex-col gap-1">
                <p className="text-xs">Emilio G</p>
                <p className="font-bold leading-5 hover:underline">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam,
                  praesentium.
                </p>
                <p className="bg-green-300 px-2 py- rounded-md w-fit text-xs font-extralight">
                  Curiosta
                </p>
              </div>
            </div>
          </Link>
          <Link>
            <div className="flex items-center gap-4 cursor-pointer hover:opacity-70">
              <img
                src={article}
                alt=""
                className="rounded-md w-28 h-28 object-cover"
              />
              <div className="flex flex-col gap-1">
                <p className="text-xs">Emilio G</p>
                <p className="font-bold leading-5 hover:underline">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam,
                  praesentium.
                </p>
                <p className="bg-green-300 px-2 py- rounded-md w-fit text-xs font-extralight">
                  Curiosta
                </p>
              </div>
            </div>
          </Link>
        </div>

        <h2 className="text-2xl uppercase mb-7 font-semibold text-emerald-700 my-7">
          Scopri Tutte Le Guide
        </h2>

        <hr className="border border-b-gray-400 my-5" />

        <h2 className="text-3xl uppercase my-7 font-semibold text-emerald-700">
          Seguici Sui Social
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 rounded-md py-1 px-2 border-gray-400"
          >
            <img src={facebook} alt="facebook" className=" w-14" />
            <p className="font-semibold">Facebook</p>
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 rounded-md py-1 px-2 border-gray-400"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
            <p className="font-semibold">Instagram</p>
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 rounded-md py-1 px-2 border-gray-400"
          >
            <FontAwesomeIcon icon={faThreads} className="text-3xl" />
            <p className="font-semibold">Threads</p>
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 rounded-md py-1 px-2 border-gray-400"
          >
            <FontAwesomeIcon icon={faXTwitter} className="text-3xl" />
            <p className="font-semibold">Twitter</p>
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 rounded-md py-1 px-2 border-gray-400"
          >
            <img src={whatsapp} alt="whatsapp" className=" w-8" />
            <p className="font-semibold">Whatsapp</p>
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 rounded-md py-1 px-2 border-gray-400"
          >
            <img src={telegram} alt="telegram" className=" w-8" />
            <p className="font-semibold">Telegram</p>
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 rounded-md py-1 px-2 border-gray-400"
          >
            <img src={spotify} alt="spotify" className=" w-10" />
            <p className="font-semibold">Spotify</p>
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 rounded-md py-1 px-2 border-gray-400"
          >
            <img src={tiktok} alt="Tik Tok" className=" w-7" />
            <p className="font-semibold">Tik Tok</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyRightSide;
