import StickyRightSide from "../Home/StickyRightSide";
import Profile from "./Profile";

const NewsContent = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <div className="flex flex-col md:flex-row">
          {/* Main content on the left */}
          <div className="w-full md:w-2/3 p-4">
            <div>
              <div className="flex flex-col gap-12">
                <Profile />
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

export default NewsContent;
