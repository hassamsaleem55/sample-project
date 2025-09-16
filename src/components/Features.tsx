function Features() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Key Features</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl ">
          <span className="text-indigo-600">✅</span> Adaptive Cruise Control
        </li>
        <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl ">
          <span className="text-indigo-600">✅</span> Panoramic Sunroof
        </li>
        <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl ">
          <span className="text-indigo-600">✅</span> Premium Leather Seats
        </li>
        <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl ">
          <span className="text-indigo-600">✅</span> Meridian Sound System
        </li>
      </ul>
    </section>
  );
}

export default Features;
