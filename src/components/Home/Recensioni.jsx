import SliderRecensioni from '../../components/Home/SliderRecensioni'
import Comparazione from "./Comparazione";
import OfferteInEvidenza from "./OfferteInEvidenza";
import DetectorManiaTv from "./DetectorManiaTv";
import SchedeTechniche from "./SchedeTechniche";
import Migliori from "./Migliori";
import StickyRightSide from "./StickyRightSide";

const Recensioni = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <div className="flex flex-col md:flex-row">
          {/* Main content on the left */}
          <div className="w-full md:w-2/3 p-4">
            <div className="">
              <div className="flex flex-col gap-12">
                <SliderRecensioni />
                <Comparazione />
                <Migliori />
                <OfferteInEvidenza />
                <DetectorManiaTv />
                <SchedeTechniche />
              </div>
            </div>
          </div>
          {/* Sticky component on the right */}
          <div className="relative w-full md:w-1/3">
            <StickyRightSide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recensioni;
