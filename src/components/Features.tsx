function Features() {
  const featuresList = [
    {
      icon: "map-pin",
      text: "Blind Spot Indicator",
    },
    {
      icon: "swatchbook",
      text: "ISOFIX",
    },
    {
      icon: "street-view",
      text: "Navigation",
    },
    {
      icon: "tv",
      text: "Rear AC",
    },
    {
      icon: "sun",
      text: "Ambient Lighting",
    },
    {
      icon: "camera",
      text: "Navigation",
    },
    {
      icon: "play",
      text: "Apple Car Play",
    },
    {
      icon: "car",
      text: "Panoramic Sunroof",
    },
    {
      icon: "chair",
      text: "Electric Seats",
    },
    {
      icon: "key",
      text: "Keyless Start",
    },
  ];
  return (
    <section className="bg-white w-full p-8 rounded-3xl">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">{`Key Features`}</h2>
      <div className="bg-gray-100 p-8 rounded-3xl">
        {" "}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {featuresList.map((item, index) => {
            return (
              <li key={index} className="flex items-center gap-2 font-semibold">
                <span className="text-orange-600">
                  <i className={`fa fa-light fa-${item.icon}`}></i>
                </span>
                <span className="text-gray-800">{item.text}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Features;
