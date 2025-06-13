import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const SIPCalculator = () => {
  const [sip, setSip] = useState(5000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(12);
  const [futureValue, setFutureValue] = useState(0);
  const months = years * 12;

  useEffect(() => {
    const runFv = () => {
      const precise = (n) => Number.parseFloat(n.toFixed(10));
      const monthlyRate = precise(Math.pow(1 + rate / 100, 1 / 12) - 1);

      const fv =
        sip *
        ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
        (1 + monthlyRate);
      console.log("FV Debug:", fv, months, monthlyRate);

      setFutureValue(Math.ceil(fv));
    };

    if (sip) {
      runFv();
    }
  }, [sip, years, rate]);

  const investedAmount = sip * months;
  const gain = futureValue - investedAmount;

  const data = {
    labels: ["Invested Amount", "Returns"],
    datasets: [
      {
        data: [investedAmount, gain],
        backgroundColor: ["#3b82f6", "#10b981"],
        hoverOffset: 6,
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6">
        SIP Calculator
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="space-y-6">
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Monthly SIP Amount (₹)
            </label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={sip}
              onChange={(e) => setSip(Number(e.target.value))}
              min={500}
              max={100000}
            />
            <input
              type="range"
              className="w-full mt-2"
              value={sip}
              onChange={(e) => setSip(Number(e.target.value))}
              min={500}
              max={100000}
              step={500}
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Interest Rate (Annual %)
            </label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              min={1}
              max={30}
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Investment Period (Years)
            </label>
            <input
              type="range"
              className="w-full"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              min={1}
              max={40}
            />
            <p className="text-sm mt-1">Years: {years}</p>
          </div>
        </div>

        {/* Output */}
        <div className="flex flex-col items-center justify-center space-y-6">
          <Pie data={data} />
          <div className="text-lg text-center">
            <p>
              Future Value: <strong>₹{futureValue}</strong>
            </p>
            <p>
              Invested Amount: <strong>₹{investedAmount}</strong>
            </p>
            <p>
              Total Gain:{" "}
              <strong className="text-green-600">₹{gain}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIPCalculator;
