function LowerSidebar({
  bgColor = "bg-white",
  padding = "p-6",
}: {
  bgColor?: string;
  padding?: string;
}) {
  return (
    <div
      className={`grid md:grid-cols-12 ${bgColor} w-full ${padding} rounded-3xl`}
    >
      <div className="md:col-span-3 w-full">
        <p className="text-5xl font-bold text-orange-600">{`0%`}</p>
      </div>
      <div className="md:col-span-9">
        <p className="text-orange-600">{`Downpayment for all cars`}</p>
        <p className="font-bold">{`1 Year free warranty`}</p>
      </div>
    </div>
  );
}

export default LowerSidebar;
