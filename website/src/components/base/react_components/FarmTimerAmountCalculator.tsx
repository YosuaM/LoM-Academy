import React, { useState } from "react";
import { buildings, crops } from "@Content/game_data_en/Farm.astro";

const FarmTimerAmountCalculator: React.FC = () => {
  const levels: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [greenhouseLevel, setGreenhouseLevel] = useState<number>(0);
  const [lawnmowerLevel, setLawnmowerLevel] = useState<number>(0);
  const [scarecrowLevel, setScarecrowLevel] = useState<number>(0);
  const [farmBoostCard, setFarmBoostCard] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [result, setResult] = useState({
    fruit_1: {
      time: 0,
      amount: { baseAmount: 0, boostedAmount: 0, totalAmount: 0 },
    },
    fruit_2: {
      time: 0,
      amount: { baseAmount: 0, boostedAmount: 0, totalAmount: 0 },
    },
    fruit_3: {
      time: 0,
      amount: { baseAmount: 0, boostedAmount: 0, totalAmount: 0 },
    },
  });

  const formatTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  const handleCalculate = () => {
    const greenhouseBonus = buildings.find((b) => b.id === "greenhouse")
      ?.levels[greenhouseLevel] ?? {
      growthSpeedBonus: 0,
      harvestQuantityBonus: 0,
    };
    const lawnmowerBonus = buildings.find((b) => b.id === "lawnmower")?.levels[
      lawnmowerLevel
    ] ?? { growthSpeedBonus: 0 };
    const scarecrowBonus = buildings.find((b) => b.id === "scarecrow")?.levels[
      scarecrowLevel
    ] ?? { harvestQuantityBonus: 0 };

    const growthSpeedBonus =
      (greenhouseBonus.growthSpeedBonus ?? 0) +
      (lawnmowerBonus.growthSpeedBonus ?? 0);
    const harvestQuantityBonus =
      (greenhouseBonus.harvestQuantityBonus ?? 0) +
      (scarecrowBonus.harvestQuantityBonus ?? 0);

    const calculateTime = (baseTime: number) => {
      return Math.max(baseTime / (1 + growthSpeedBonus / 100), 0);
    };

    const calculateAmount = (baseAmount: number) => {
      return baseAmount + baseAmount * (harvestQuantityBonus / 100);
    };

    // Add 50% bonus if boost card is enabled
    const applyBoost = (amount: number) => {
      if (farmBoostCard === 1) {
        const boostedAmount = Math.round(amount * 0.5); // 50% boost
        return {
          baseAmount: Math.round(amount),
          boostedAmount,
          totalAmount: Math.round(amount + boostedAmount),
        };
      } else {
        return {
          baseAmount: Math.round(amount),
          boostedAmount: 0,
          totalAmount: Math.round(amount),
        };
      }
    };

    const updatedResult = {
      fruit_1: {
        time: calculateTime(
          crops.find((c) => c.id === "fruit_1")?.duration || 0
        ),
        amount: applyBoost(
          calculateAmount(crops.find((c) => c.id === "fruit_1")?.amount || 0)
        ),
      },
      fruit_2: {
        time: calculateTime(
          crops.find((c) => c.id === "fruit_2")?.duration || 0
        ),
        amount: applyBoost(
          calculateAmount(crops.find((c) => c.id === "fruit_2")?.amount || 0)
        ),
      },
      fruit_3: {
        time: calculateTime(
          crops.find((c) => c.id === "fruit_3")?.duration || 0
        ),
        amount: applyBoost(
          calculateAmount(crops.find((c) => c.id === "fruit_3")?.amount || 0)
        ),
      },
    };

    setResult(updatedResult);
    setShowResult(true);
  };

  return (
    <div className="grid grid-cols-1 gap-7.5 mb-4 lg:mb-7 xl:pr-12.5">
      {/* GREENHOUSE INPUT */}
      <div className="flex items-end">
        <div className="mr-4">
          <img
            src="/assets/img/tools/farm-calculator/greenhouse.webp"
            alt="Greenhouse"
            title="Greenhouse"
            className="inline-block h-12.5"
          />
        </div>
        <div className="flex-grow">
          <label
            className="block text-sm font-bold uppercase text-gray-500 [&:not(:empty)]:mb-2.5"
            htmlFor="greenhouse-level"
          >
            <span>Greenhouse level</span>
          </label>
          <select
            className="w-full border-base bg-white/40 px-4 h-12.5 font-medium text-gray-900 transition-all duration-150 bg-caret bg-[length:10px_6px] bg-[position:right_18px_center] focus:border-accent focus:outline-0 focus:ring-0 focus:text-gray-900 hover:cursor-pointer dark:border-gray-650 dark:bg-gray-900/40 dark:text-white dark:placeholder:text-gray-500/80 dark:focus:border-accent dark:focus:text-white dark:bg-caret-white dark:focus:bg-gray-900"
            name="greenhouse-level"
            id="greenhouse-level"
            value={greenhouseLevel}
            onChange={(e) => setGreenhouseLevel(Number(e.target.value))}
          >
            {levels.map((level, index) => (
              <option key={index} value={index}>{`Level ${level}`}</option>
            ))}
          </select>
        </div>
      </div>

      {/* LAWNMOWER INPUT */}
      <div className="flex items-end">
        <div className="mr-4">
          <img
            src="/assets/img/tools/farm-calculator/lawnmower.webp"
            alt="Lawnmower"
            title="Lawnmower"
            className="inline-block h-12.5"
          />
        </div>
        <div className="flex-grow">
          <label
            className="block text-sm font-bold uppercase text-gray-500 [&:not(:empty)]:mb-2.5"
            htmlFor="lawnmower-level"
          >
            <span>Lawnmower level</span>
          </label>
          <select
            className="w-full border-base bg-white/40 px-4 h-12.5 font-medium text-gray-900 transition-all duration-150 bg-caret bg-[length:10px_6px] bg-[position:right_18px_center] focus:border-accent focus:outline-0 focus:ring-0 focus:text-gray-900 hover:cursor-pointer dark:border-gray-650 dark:bg-gray-900/40 dark:text-white dark:placeholder:text-gray-500/80 dark:focus:border-accent dark:focus:text-white dark:bg-caret-white dark:focus:bg-gray-900"
            name="lawnmower-level"
            id="lawnmower-level"
            value={lawnmowerLevel}
            onChange={(e) => setLawnmowerLevel(Number(e.target.value))}
          >
            {levels.map((level, index) => (
              <option key={index} value={index}>{`Level ${level}`}</option>
            ))}
          </select>
        </div>
      </div>

      {/* SCARECROW INPUT */}
      <div className="flex items-end">
        <div className="mr-4">
          <img
            src="/assets/img/tools/farm-calculator/scarecrow.webp"
            alt="Scarecrow"
            title="Scarecrow"
            className="inline-block h-12.5"
          />
        </div>
        <div className="flex-grow">
          <label
            className="block text-sm font-bold uppercase text-gray-500 [&:not(:empty)]:mb-2.5"
            htmlFor="scarecrow-level"
          >
            <span>Scarecrow level</span>
          </label>
          <select
            className="w-full border-base bg-white/40 px-4 h-12.5 font-medium text-gray-900 transition-all duration-150 bg-caret bg-[length:10px_6px] bg-[position:right_18px_center] focus:border-accent focus:outline-0 focus:ring-0 focus:text-gray-900 hover:cursor-pointer dark:border-gray-650 dark:bg-gray-900/40 dark:text-white dark:placeholder:text-gray-500/80 dark:focus:border-accent dark:focus:text-white dark:bg-caret-white dark:focus:bg-gray-900"
            name="scarecrow-level"
            id="scarecrow-level"
            value={scarecrowLevel}
            onChange={(e) => setScarecrowLevel(Number(e.target.value))}
          >
            {levels.map((level, index) => (
              <option key={index} value={index}>{`Level ${level}`}</option>
            ))}
          </select>
        </div>
      </div>

      {/* BOOSTER INPUT */}
      <div className="flex items-end">
        <div className="mr-4">
          <img
            src="/assets/img/tools/farm-calculator/bountiful_harvest_boost_card.webp"
            alt="Bountiful Harvers Boost Card"
            title="Bountiful Harvers Boost Card"
            className="inline-block h-12.5"
          />
        </div>
        <div className="flex-grow">
          <label
            className="block text-sm font-bold uppercase text-gray-500 [&:not(:empty)]:mb-2.5"
            htmlFor="bountiful_harvest_boost_card"
          >
            <span>Bountiful Harvers Boost Card Enabled</span>
          </label>
          <select
            className="w-full border-base bg-white/40 px-4 h-12.5 font-medium text-gray-900 transition-all duration-150 bg-caret bg-[length:10px_6px] bg-[position:right_18px_center] focus:border-accent focus:outline-0 focus:ring-0 focus:text-gray-900 hover:cursor-pointer dark:border-gray-650 dark:bg-gray-900/40 dark:text-white dark:placeholder:text-gray-500/80 dark:focus:border-accent dark:focus:text-white dark:bg-caret-white dark:focus:bg-gray-900"
            name="bountiful_harvest_boost_card"
            id="bountiful_harvest_boost_card"
            value={farmBoostCard}
            onChange={(e) => setFarmBoostCard(Number(e.target.value))}
          >
            <option key="farm_boost_card_no" value={0}>
              No
            </option>
            <option key="farm_boost_card_yes" value={1}>
              Yes
            </option>
          </select>
        </div>
      </div>

      {/* BUTTON */}
      <div className="">
        <button
          onClick={handleCalculate}
          className="inline-flex text-center font-bold leading-none uppercase py-4 px-4 bg-accent text-sm text-gray-900"
        >
          Calculate outputs
        </button>
      </div>

      {/* RESULTADOS */}
      {showResult && (
        <div id="farm-calculator-result" className="w-full">
          {Object.entries(result).map(([fruitId, data]) => (
            <div key={fruitId} className="inline-flex items-center mt-2 w-full">
              <img
                src={`/assets/img/tools/farm-calculator/${fruitId}.webp`}
                alt={fruitId}
                title={fruitId}
                className="inline-block h-12.5"
              />
              <span className="ml-2">
                Time to grow up:{" "}
                <span className="text-accent">{formatTime(data.time)}</span>.
                Harvest:{" "}
                {/* Display boost value if > 0 */}
                { data.amount.boostedAmount > 0 ? (
                  <>
                    <span>
                      {data.amount.baseAmount}
                      {" "}
                      (+{data.amount.boostedAmount}) ={" "}
                    </span>
                    <span className="text-accent">
                      {data.amount.totalAmount}
                    </span>
                  </>
                ) : (
                  <span className="text-accent">{data.amount.baseAmount}</span>
                )}
                {" "}
                fruit offerings.
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FarmTimerAmountCalculator;
