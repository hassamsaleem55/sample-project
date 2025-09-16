function Overview() {
  const overviewPoints = [
    {
      label: "Year",
      value: "2019",
    },
    {
      label: "Mileage",
      value: "20,000 km",
    },
    {
      label: "Fuel Type",
      value: "Petrol",
    },
    {
      label: "Transmission",
      value: "Automatic",
    },
    {
      label: "Warranty",
      value: "Under Warranty",
    },
    {
      label: "Seats",
      value: "5",
    },
  ];
  return (
    <section className="bg-white w-full p-8 rounded-3xl">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">{`Car Overview`}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-6">
        {overviewPoints.map((item, index) => {
          return (
            <div
              key={index}
              className="p-5 bg-gray-100 rounded-xl  text-center"
            >
              <h3 className="text-lg font-semibold text-gray-700">
                {item.label}
              </h3>
              <p className="text-gray-500">{item.value}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Overview;
