function Sidebar() {
  return (
    <div className="space-y-4">
      <div className="space-y-6 bg-white w-full p-6 rounded-3xl">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-gray-800">
            {`Land Rover Range Rover Velar P250 SE R Dynamic`}
          </h1>
          <p className="text-sm text-gray-500 font-medium">{`Stock no: 10532AC`}</p>
        </div>

        <div className="space-y-2">
          <div className="text-3xl font-bold text-gray-800">
            {`AED 145,999 `}
            <span className="text-gray-500 text-sm">{`(Inclusive of VAT)`}</span>
          </div>

          <div className="mt-2 text-xl font-semibold text-green-700">
            {`AED 2,859/Month`}
          </div>
        </div>
        <div className="space-y-2">
          <p className="mt-1">
            <span className="text-orange-600">
              <i className="fa-solid fa-eye"></i> <span>{`19 People`}</span>{" "}
            </span>
            <span>{`are viewing right now`}</span>
          </p>
        </div>

        <div className="space-y-4">
          <a
            href="#"
            className="block w-full text-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg  hover:bg-orange-700 transition"
          >
            {`Book a Free Test Drive`}
          </a>
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-6">
              <a
                href="#"
                className="block w-full text-center px-6 py-3 bg-gray-100 text-orange-600 font-semibold rounded-lg  hover:bg-orange-600 hover:text-white transition"
              >
                {`Call Us`}
              </a>
            </div>

            <div className="col-span-6">
              <a
                href="#"
                className="block w-full text-center px-6 py-3 bg-gray-100 text-orange-600 font-semibold rounded-lg  hover:bg-orange-600 hover:text-white transition"
              >
                {`Buy this Car`}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-12 bg-white w-full p-6 rounded-3xl">
        <div className="md:col-span-3 w-full">
          <p className="text-5xl font-bold text-orange-600">{`0%`}</p>
        </div>
        <div className="md:col-span-9">
          <p className="text-orange-600">{`Downpayment for all cars`}</p>
          <p className="font-bold">{`1 Year free warranty`}</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
