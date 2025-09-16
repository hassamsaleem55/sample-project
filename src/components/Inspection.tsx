function Inspection() {
  return (
    <section className="bg-white w-full p-4 rounded-3xl">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4 h-[250px] sm:h-[350px] w-full rounded-2xl">
          <img
            className="h-full w-full rounded-3xl object-cover"
            src="./images/inspection-report.avif"
            alt=""
          />
        </div>
        <div className="md:col-span-8">
          <div className="mt-0 md:mt-10 space-y-6">
            <div className="grid grid-cols-2 gap-4 font-semibold">
              <div className="p-4 bg-gray-100 rounded-xl">
                <p className="space-x-2">
                  <i className="text-green-600 fa fa-light fa-circle-check"></i>
                  <span>{`Exterior`}</span>
                </p>
              </div>
              <div className="p-4 bg-gray-100 rounded-xl">
                <p className="space-x-2">
                  <i className="text-green-600 fa fa-light fa-circle-check"></i>
                  <span>{`Engine`}</span>
                </p>
              </div>
              <div className="p-4 bg-gray-100 rounded-xl">
                <p className="space-x-2">
                  <i className="text-green-600 fa fa-light fa-circle-check"></i>
                  <span>{`Electricals`}</span>
                </p>
              </div>
              <div className="p-4 bg-gray-100 rounded-xl">
                <p className="space-x-2">
                  <i className="text-green-600 fa fa-light fa-circle-check"></i>
                  <span>{`Suspension`}</span>
                </p>
              </div>
            </div>
            <p>{`Every car goes through three thorough inspections: when we buy it, after refurbishment, and before delivery. This ensures you get a used car in Dubai that looks and drives like new, backed by a free one-year warranty. For full transparency, you can check the final inspection report here.`}</p>

            <a href="#" className="space-x-2 text-orange-500 font-semibold">
              <span>{`View full report`}</span>
              <i className="fa fa-light fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inspection;
