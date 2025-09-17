import { useState, useEffect, useRef } from "react";
import "../assets/css/rangeSlider.css";

function RangeSlider({
  min = 0,
  max = 100,
  step = 5,
  initial = 0,
  downpayment = 0,
  onChange,
}: {
  min?: number;
  max?: number;
  step?: number;
  initial?: number;
  downpayment?: number;
  onChange?: (v: number) => void;
}) {
  const [value, setValue] = useState<number>(initial);
  const sliderRef = useRef<HTMLInputElement | null>(null);

  // helper: update CSS variable
  const updateTrack = (val: number) => {
    const percent = ((val - min) / (max - min)) * 100;
    if (sliderRef.current) {
      sliderRef.current.style.setProperty("--value-percent", `${percent}%`);
    }
  };

  useEffect(() => {
    updateTrack(value); // set on first render
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const v = Number(e.target.value);
    setValue(v);
    updateTrack(v); // update CSS var
    onChange?.(v);
  }

  return (
    <div className="w-full max-w-2xl p-3 sm:p-4">
      {/* Labels Row */}
      <div className="text-xs sm:text-sm font-medium text-gray-500 mb-2 sm:mb-3 flex justify-between">
        <label className="truncate">{`AED ${downpayment.toLocaleString(
          "en-US"
        )}`}</label>
        <label>{`(${value}.0%)`}</label>
      </div>

      <input
        ref={sliderRef}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        aria-label="Price range"
        className="custom-range w-full h-2 sm:h-3 rounded-lg appearance-none focus:outline-none"
      />

      {/* <div className="mt-1 sm:mt-2 flex justify-between text-[10px] sm:text-xs text-gray-400">
        <span>{min}</span>
        <span>{max}</span>
      </div> */}
    </div>
  );
}

export default RangeSlider;
