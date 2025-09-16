import About from "../components/About";
import Features from "../components/Features";
import Inspection from "../components/Inspection";
import Overview from "../components/Overview";
import Sidebar from "../components/Sidebar";
import Slider from "../components/Slider";

function CarDetails() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="md:col-span-9 p-3">
        <Slider />
      </div>
      <div className="md:col-span-3 p-3">
        <div className="md:fixed md:top-[100px] md:w-[360px]">
          <Sidebar />
        </div>
      </div>
      <div className="md:col-span-9 p-3">
        <Overview />
      </div>
      <div className="md:col-span-9 p-3">
        <Features />
      </div>
      <div className="md:col-span-9 p-3">
        <About />
      </div>
      <div className="md:col-span-9 p-3">
        <Inspection />
      </div>
    </div>
  );
}

export default CarDetails;
