import { Link } from "react-router-dom";
import article from "../../assets/img_article_1.png";
import article2 from "../../assets/img_article_2.jpg";
import SceltiSlider from "./SceltiSlider";

const Profile = () => {
  return (
    <div>
      <section>
        <div>
          <div className="flex items-center gap-2 md:gap-5 bg-green-200 p-6 rounded-t-2xl">
            <img
              src={article}
              alt=""
              className=" cursor-pointer w-12 h-12 md:w-24 md:h-24 rounded-xl object-cover"
            />
            <div>
              <h2 className="text-base md:text-xl lg:text-2xl font-semibold cursor-pointer">
                Emilio G.
              </h2>
              <p className="text-xs md:text-lg text-gray-400 font-semibold">
                del 02 agosto 2024, 17:36
              </p>
            </div>
          </div>
          <img src={article2} alt="article" className=" rounded-b-2xl" />
          <p className="text-base text-left md:text-2xl my-8 md:my-16 ">
            Si avvicina l’estate e stai pensando di acquistare un metal detector
            per le tue vacanze? La spiaggia è uno dei luoghi più affascinanti
            per praticare il metal detecting. Tuttavia, la scelta del metal
            detector giusto può fare la differenza tra un’avventura emozionante
            e una frustrante battaglia contro le interferenze dei minerali
            presenti nella sabbia e nell’acqua salata. In questo articolo ti
            indicheremo quale potrebbe essere il miglior metal detector da
            spiaggia per te
          </p>
        </div>

        <div className="flex flex-col gap-12">
          <div className=" space-y-5">
            <h2 className="text-2xl md:text-3xl lg:text-5xl  font-semibold leading-snug">
              Considerazioni nella scelta del tuo miglior metal detector da
              spiaggia
            </h2>
            <p className="text-base text-left md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              <span className="font-semibold">Nostrum corporis</span> numquam
              aspernatur deleniti eum perferendis blanditiis repudiandae enim,
              culpa odit velit accusamus assumenda veritatis expedita beatae
              ducimus, libero atque. Cum, provident dolorum? Adipisci magnam
              animi aliquam ut, eveniet nihil! Reprehenderit!
            </p>
          </div>
          <div className=" space-y-5">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold leading-snug">
              Caratteristiche dei Miglior Metal Detector da Spiaggia
            </h2>
            <p className="text-base text-left md:text-xl ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              laudantium dignissimos sunt.Lorem ipsum dolor sit amet consectetur
              adipisicing elit.{" "}
              <span className="font-semibold">Nostrum corporis</span> numquam
              aspernatur deleniti eum perferendis blanditiis repudiandae enim,
              culpa odit velit accusamus assumenda veritatis expedita beatae
              ducimus, libero atque. Cum, provident dolorum? Adipisci magnam
              animi aliquam ut, eveniet nihil! Reprehenderit!
            </p>
          </div>
          <div className=" space-y-5">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold leading-snug">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
              tenetur aliquam dolor?
            </h2>
            <p className="text-base text-left md:text-xl ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              laudantium dignissimos sunt.Lorem ipsum dolor sit amet consectetur
              adipisicing elit.{" "}
              <span className="font-semibold">Nostrum corporis</span> numquam
              aspernatur deleniti eum perferendis blanditiis repudiandae enim,
              culpa odit velit accusamus assumenda veritatis expedita beatae
              ducimus, libero atque. Cum, provident dolorum? Adipisci magnam
              animi aliquam ut, eveniet nihil! Reprehenderit!
            </p>
          </div>
          <div className=" space-y-5">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold leading-snug">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
              tenetur aliquam dolor?
            </h2>
            <p className="text-base text-left md:text-xl ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              laudantium dignissimos sunt.Lorem ipsum dolor sit amet consectetur
              adipisicing elit.{" "}
              <span className="font-semibold">Nostrum corporis</span> numquam
              aspernatur deleniti eum perferendis blanditiis repudiandae enim,
              culpa odit velit accusamus assumenda veritatis expedita beatae
              ducimus, libero atque. Cum, provident dolorum? Adipisci magnam
              animi aliquam ut, eveniet nihil! Reprehenderit!
            </p>
          </div>
          <div className=" space-y-5">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold leading-snug">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
              tenetur aliquam dolor?
            </h2>
            <p className="text-base text-left md:text-xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              <span className="font-semibold">Nostrum corporis</span> numquam
              aspernatur deleniti eum perferendis blanditiis repudiandae enim,
              culpa odit velit accusamus assumenda veritatis expedita beatae
              ducimus, libero atque. Cum, provident dolorum? Adipisci magnam
              animi aliquam ut, eveniet nihil! Reprehenderit!
            </p>
            <p className="text-base text-left md:text-xl ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              laudantium dignissimos sunt.Lorem ipsum dolor sit amet consectetur
              adipisicing elit.{" "}
              <span className="font-semibold">Nostrum corporis</span> numquam
              aspernatur deleniti eum perferendis blanditiis repudiandae enim,
              culpa odit velit accusamus assumenda veritatis expedita beatae
              ducimus, libero atque. Cum, provident dolorum? Adipisci magnam
              animi aliquam ut, eveniet nihil! Reprehenderit!
            </p>
            <p className="text-base text-left md:text-xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              <span className="font-semibold">Nostrum corporis</span> numquam
              aspernatur deleniti eum perferendis blanditiis repudiandae enim,
              culpa odit velit accusamus assumenda veritatis expedita beatae
              ducimus, libero atque. Cum, provident dolorum? Adipisci magnam
              animi aliquam ut, eveniet nihil! Reprehenderit!
            </p>
          </div>
          <div className=" space-y-5">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold leading-snug">
              Attrezzatura e buone maniere, dolor sit amet consectetur
              adipisicing elit. Ex tenetur aliquam dolor?
            </h2>
            <p className="text-base text-left md:text-xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              <span className="font-semibold">Nostrum corporis</span> numquam
              aspernatur deleniti eum perferendis blanditiis repudiandae enim,
              culpa odit velit accusamus assumenda veritatis expedita beatae
              ducimus, libero atque. Cum, provident dolorum? Adipisci magnam
              animi aliquam ut, eveniet nihil! Reprehenderit!
            </p>
            <p className="text-base text-left md:text-xl ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              laudantium dignissimos sunt.Lorem ipsum dolor sit amet consectetur
              adipisicing elit.{" "}
              <span className="font-semibold">Nostrum corporis</span> numquam
              aspernatur deleniti eum perferendis blanditiis repudiandae enim,
              culpa odit velit accusamus assumenda veritatis expedita beatae
              ducimus, libero atque. Cum, provident dolorum? Adipisci magnam
              animi aliquam ut, eveniet nihil! Reprehenderit!
            </p>
            <p className="text-base text-left md:text-xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              <span className="font-semibold">Nostrum corporis</span> numquam
              aspernatur deleniti eum perferendis blanditiis repudiandae enim,
              culpa odit velit accusamus assumenda veritatis expedita beatae
              ducimus, libero atque. Cum, provident dolorum? Adipisci magnam
              animi aliquam ut, eveniet nihil! Reprehenderit!
            </p>
          </div>
        </div>

        <div className=" space-y-5">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold leading-snug mt-12">
            Selezione dei Migliori Metal Detector da Spiaggia
          </h2>
          <p className="text-base text-left md:text-xl ">
            Ecco una piccola lista generica su cui basarti Lorem ipsum dolor sit
            amet consectetur.
          </p>
          <div>
            <h3 className="text-base text-left md:text-xl font-semibold leading-snug mb-3">
              Metal Detector per la ricerca in spiaggia di livello base:
            </h3>
            <ul className=" list-disc pl-8">
              <li>Garret Ace 250</li>
              <li>Nokta Makro Simplex Plus (Lite, BT o Utra)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-base text-left md:text-xl font-semibold leading-snug mb-3">
              Metal Detector per la ricerca in spiaggia di livello base:
            </h3>
            <ul className=" list-disc pl-8">
              <li>Garret Ace 250</li>
              <li>Nokta Makro Simplex Plus (Lite, BT o Utra)</li>
            </ul>
          </div>
        </div>

        <div className=" space-y-5">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold leading-snug mt-12">
            Conclusioni
          </h2>
          <p className="text-base text-left md:text-xl ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis exercitationem optio, voluptatum, consequatur nemo nisi
            cumque unde dolorum qui repellendus amet dolorem dolores pariatur
            eius ipsam voluptates error quo magnam? Lorem ipsum dolor sit amet
            consectetur adipisicing elit.{" "}
            <span className="font-semibold">Nostrum corporis</span> numquam
            aspernatur deleniti eum perferendis blanditiis repudiandae enim,
            culpa odit velit accusamus assumenda veritatis expedita beatae
            ducimus, libero atque. Cum, provident dolorum? Adipisci magnam animi
            aliquam ut, eveniet nihil! Reprehenderit!
          </p>
        </div>

        <div className="flex flex-wrap gap-2 my-12">
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

        <SceltiSlider />
      </section>
    </div>
  );
};

export default Profile;
