import { useEffect, useState } from "react";
import RangeSlider from "./RangeSlider";
import LowerSidebar from "./LowerSidebar";

function EstimateInstalment({ amount }: { amount: number }) {
  const interestRate = 3.5;
  const [loanAmount, setLoanAmount] = useState(amount);
  const [downpayment, setDownpayment] = useState(0);
  const [years, setYears] = useState(5);
  const [emi, setEmi] = useState(0);

  const onChange = async (value: number) => {
    let dpay: number = Math.round((value * amount) / 100);
    setDownpayment(dpay);
  };

  const calculateEmi = () => {
    let months = years * 12;
    let newAmount = amount - downpayment;
    let perYearInterest = (interestRate * newAmount) / 100;
    let totalInterest = perYearInterest * years;
    let totalAmount = newAmount + totalInterest;
    let emiAmount = Math.round(totalAmount / months);

    setEmi(emiAmount);
    setLoanAmount(Math.round(newAmount));
  };

  const renderYears = () => {
    const elements = [];

    for (let index = 1; index <= 5; index++) {
      let btnColors = "bg-gray-100 text-gray-500";
      if (index === years) {
        btnColors = "bg-orange-50 text-orange-600";
      }
      elements.push(
        <button
          key={index}
          onClick={() => {
            setYears(index);
          }}
          className={`w-[60px] h-[60px] rounded-xl cursor-pointer ${btnColors} hover:bg-orange-50 hover:text-orange-600 transition`}
        >
          {index}
        </button>
      );
    }
    return elements;
  };

  useEffect(() => {
    calculateEmi();
  }, [downpayment, years]);

  return (
    <div className="bg-white w-full p-6 sm:p-8 rounded-3xl space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        <div className="md:col-span-6">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-gray-800">
            {`Estimate your monthly installment`}
          </h2>
        </div>
        <div className="md:col-span-6">
          <LowerSidebar bgColor="bg-orange-50" padding="px-6 py-3" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        <div className="md:col-span-6 space-y-8">
          {/* <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-gray-800">
            Estimate your monthly installment
          </h2> */}

          <div className="text-gray-500 font-semibold space-y-3">
            <label>Select downpayment</label>
            <RangeSlider downpayment={downpayment} onChange={onChange} />

            <label>I can repay the loan in (years)*</label>
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-3">
              {renderYears()}
            </div>

            <p className="text-sm md:text-base">
              For 6 year old cars, maximum loan tenure is 5 years
            </p>
          </div>
        </div>

        <div className="md:col-span-6 space-y-4">
          <div className="bg-gray-100 p-4 sm:p-6 md:px-10 rounded-2xl text-gray-500 font-semibold">
            <div className="text-center mb-4">
              <label>{`Indicative EMI`}</label>
              <p>
                <span className="block text-xl md:text-2xl text-gray-800 font-semibold">
                  {`AED ${emi.toLocaleString("en-US")}`}
                </span>
              </p>
              <label>{`for ${years} years`}</label>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
              <div className="space-y-1">
                <p>{`Down Payment`}</p>
                <p className="text-gray-800">
                  {`AED ${downpayment.toLocaleString("en-US")}`}
                </p>
              </div>
              <div className="space-y-1 text-right">
                <p>{`Loan Amount`}</p>
                <p className="text-gray-800">
                  {`AED ${loanAmount.toLocaleString("en-US")}`}
                </p>
              </div>
              <div className="space-y-1">
                <p>{`Interest Rate`}</p>
                <p className="text-gray-800">{interestRate}%</p>
              </div>
            </div>

            <a
              href="#"
              className="mt-4 block w-full text-center px-4 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition"
            >
              {`Book a Free Test Drive`}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EstimateInstalment;
