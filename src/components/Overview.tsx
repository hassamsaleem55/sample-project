function Overview() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Car Overview</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="p-5 bg-white rounded-xl  text-center">
          <h3 className="text-lg font-semibold text-gray-700">Mileage</h3>
          <p className="text-gray-500">20,000 km</p>
        </div>
        <div className="p-5 bg-white rounded-xl  text-center">
          <h3 className="text-lg font-semibold text-gray-700">Fuel Type</h3>
          <p className="text-gray-500">Petrol</p>
        </div>
        <div className="p-5 bg-white rounded-xl  text-center">
          <h3 className="text-lg font-semibold text-gray-700">Transmission</h3>
          <p className="text-gray-500">Automatic</p>
        </div>
        <div className="p-5 bg-white rounded-xl  text-center">
          <h3 className="text-lg font-semibold text-gray-700">Seats</h3>
          <p className="text-gray-500">5</p>
        </div>
      </div>
    </section>
  );
}

export default Overview;
