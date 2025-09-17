import About from "../components/About";
import EstimateInstalment from "../components/EstimateInstalment";
import Features from "../components/Features";
import Inspection from "../components/Inspection";
import Overview from "../components/Overview";
import Sidebar from "../components/Sidebar";
import Slider from "../components/Slider";

function CarDetails() {
  const amount: number = 145999;
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="md:col-span-9">
        <Slider />
      </div>
      <div className="md:col-span-3">
        <div className="md:fixed md:top-[100px] md:w-[360px]">
          <Sidebar amount={amount} />
        </div>
      </div>
      <div className="md:col-span-9">
        <Overview />
      </div>
      <div className="md:col-span-9">
        <Features />
      </div>
      <div className="md:col-span-9">
        <About />
      </div>
      <div className="md:col-span-9">
        <Inspection />
      </div>
      <div className="md:col-span-9">
        <EstimateInstalment amount={amount} />
      </div>
    </div>
  );
}

export default CarDetails;
