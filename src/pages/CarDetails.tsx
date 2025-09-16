import Features from "../components/Features";
import Overview from "../components/Overview";
import Sidebar from "../components/Sidebar";
import Slider from "../components/Slider";

function CarDetails() {
  return (
    <div className="grid md:grid-cols-12">
      <div className="md:col-span-9 p-3 overflow-hidden">
        <Slider />
        <Overview />
        <Features />
      </div>
      <div className="md:col-span-3 p-3 overflow-hidden md:sticky md:top-[100px]">
        <Sidebar />
      </div>
    </div>
  );
}

export default CarDetails;
