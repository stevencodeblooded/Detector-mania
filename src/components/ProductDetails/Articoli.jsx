import { Link } from "react-router-dom";
import article from "../../assets/img_article_1.png";
import article2 from "../../assets/img_article_2.jpg";

const Articoli = () => {
  return (
    <div>
      <section>
        <div className="flex flex-col gap-8">
          <Link>
            <div className="flex items-center gap-5 cursor-pointer hover:opacity-70">
              <img
                src={article}
                alt=""
                className="rounded-md w-24 lg:w-44 h-24 lg:h-44 object-cover"
              />
              <div className="flex flex-col gap-1">
                <p className="text-xs">Emilio G</p>
                <p className=" text-lg leading-none lg:text-3xl font-bold text-black">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quam, praesentium.
                </p>
                <p className="bg-green-300 px-4 md:px-8 py-1 text-emerald-600 rounded-xl w-fit text-xs md:text-sm font-extralight">
                  Curiosita
                </p>
              </div>
            </div>
          </Link>
          <Link>
            <div className="flex items-center gap-5 cursor-pointer hover:opacity-70">
              <img
                src={article2}
                alt=""
                className="rounded-md w-24 lg:w-44 h-24 lg:h-44 object-cover"
              />
              <div className="flex flex-col gap-1">
                <p className="text-xs">Emilio G</p>
                <p className=" text-lg leading-none lg:text-3xl font-bold text-black">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quam, praesentium.
                </p>
                <p className="bg-green-300 px-4 md:px-8 py-1 text-emerald-600 rounded-xl w-fit text-xs md:text-sm font-extralight">
                  Curiosita
                </p>
              </div>
            </div>
          </Link>
          <Link>
            <div className="flex items-center gap-5 cursor-pointer hover:opacity-70">
              <img
                src={article}
                alt=""
                className="rounded-md w-24 lg:w-44 h-24 lg:h-44 object-cover"
              />
              <div className="flex flex-col gap-1">
                <p className="text-xs">Emilio G</p>
                <p className=" text-lg leading-none lg:text-3xl font-bold text-black">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quam, praesentium.
                </p>
                <p className="bg-green-300 px-4 md:px-8 py-1 text-emerald-600 rounded-xl w-fit text-xs md:text-sm font-extralight">
                  Curiosita
                </p>
              </div>
            </div>
          </Link>
          <Link>
            <div className="flex items-center gap-5 cursor-pointer hover:opacity-70">
              <img
                src={article2}
                alt=""
                className="rounded-md w-24 lg:w-44 h-24 lg:h-44 object-cover"
              />
              <div className="flex flex-col gap-1">
                <p className="text-xs">Emilio G</p>
                <p className=" text-lg leading-none lg:text-3xl font-bold text-black">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quam, praesentium.
                </p>
                <p className="bg-green-300 px-4 md:px-8 py-1 text-emerald-600 rounded-xl w-fit text-xs md:text-sm font-extralight">
                  Curiosita
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Articoli;
