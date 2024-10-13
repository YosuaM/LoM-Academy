import React, { useState } from 'react';
import { standarItems } from "@Content/game_data_en/Items.astro";
import TooltipItem from "./TooltipItem";


const SoulEssencesCalculator: React.FC = () => {
  const [soulCrystals, setSoulCrystals] = useState<number>(0);
  const [diamonds, setDiamonds] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [blessingPoints, setBlessingPoints] = useState<number>(0);
  const [result, setResult] = useState({
    spins: 0,
    well: 0,
    rare: 0,
    epic: 0,
    legendary: 0,
    essence: 0,
  });

  // Limit value between 0 and 999,999
  const handleSoulCrystalsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Math.max(Number(e.target.value), 0), 999999);
    setSoulCrystals(value);
  };

  // Limit value between 0 and 9,999,999
  const handleDiamondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Math.max(Number(e.target.value), 0), 9999999);
    setDiamonds(value);
  };

  const handleCalculate = () => {
    const totalSpinsFromSoulCrystals = soulCrystals;
    const totalSpinsFromDiamonds = Math.floor(diamonds / 800);
    const spins = totalSpinsFromSoulCrystals + totalSpinsFromDiamonds;

    let well = 0, rare = 0, epic = 0, legendary = 0;
    let currentBlessingPoints = blessingPoints;

    // Calculate rewards applying blessing points
    for (let i = 0; i < spins; i++) {
      if (currentBlessingPoints >= 20) {
        const guaranteedRoll = Math.random();
        if (guaranteedRoll < 0.02) {
          legendary++;
        } else if (guaranteedRoll < 0.2) {
          epic++;
        } else {
          rare++;
        }
        currentBlessingPoints = 0;
      } else {
        const roll = Math.random();
        if (roll < 0.004) {
          legendary++;
          currentBlessingPoints = 0;
        } else if (roll < 0.036) {
          epic++;
          currentBlessingPoints = 0;
        } else if (roll < 0.16) {
          rare++;
          currentBlessingPoints = 0;
        } else {
          well++;
          currentBlessingPoints++;
        }
      }
    }

    const essence = (well * 25) + (rare * 100) + (epic * 300);

    setResult({
      spins,
      well,
      rare,
      epic,
      legendary,
      essence,
    });

    setBlessingPoints(currentBlessingPoints);
    setShowResult(true);
  };

  return (
    <div className="grid grid-cols-1 gap-7.5 mb-4 lg:mb-7 xl:pr-12.5">
      {/* SOUL CRYSTALS INPUT */}
      <div className="">
        <label className="block text-sm font-bold uppercase text-gray-500" htmlFor="soul-crystals-owned">
          <img
            src={standarItems.find(i => i.id === 'soul_crystal')?.ico}
            alt={standarItems.find(i => i.id === 'soul_crystal')?.name}
            title={standarItems.find(i => i.id === 'soul_crystal')?.name}
            className="w-6 h-6 inline-block"
          />
          <span> Soul Crystals owned (cost: 1 per summon)</span>
        </label>
        <input
          className="group-[.is-success]:bg-input-success-dark group-[.is-error]:border-danger group-[.is-error]:bg-input-invalid group-[.is-error]:text-danger group-[.is-success]:pr-16 group-[.is-invalid]:pr-16 px-4 py-2 border-base bg-white/40 bg-[length:18px_18px,_38px_38px] bg-[position:right_16px_center,_right_6px_center] bg-no-repeat font-medium leading-8 tracking-tight text-gray-900 transition-all duration-150 placeholder:font-normal placeholder:text-gray-500/60 focus:border-accent focus:bg-white focus:text-gray-900 focus:outline-0 focus:ring-0 dark:border-gray-650 dark:group-[.is-success]:bg-input-success dark:bg-gray-900/40 dark:text-white dark:placeholder:text-gray-500/80 dark:focus:border-accent dark:focus:bg-gray-900 w-full"
          type="number"
          id="soul-crystals-owned"
          value={soulCrystals}
          onChange={handleSoulCrystalsChange}
          min="0"
          max="999999"
        />
      </div>

      {/* DIAMOND INPUT */}
      <div className="">
        <label className="block text-sm font-bold uppercase text-gray-500" htmlFor="diamonds-owned">
          <img
            src={standarItems.find(i => i.id === 'diamond')?.ico}
            alt={standarItems.find(i => i.id === 'diamond')?.name}
            title={standarItems.find(i => i.id === 'diamond')?.name}
            className="w-6 h-6 inline-block"
          />
          <span> Diamonds owned (cost: 800 per summon)</span>
        </label>
        <input
          className="group-[.is-success]:bg-input-success-dark group-[.is-error]:border-danger group-[.is-error]:bg-input-invalid group-[.is-error]:text-danger group-[.is-success]:pr-16 group-[.is-invalid]:pr-16 px-4 py-2 border-base bg-white/40 bg-[length:18px_18px,_38px_38px] bg-[position:right_16px_center,_right_6px_center] bg-no-repeat font-medium leading-8 tracking-tight text-gray-900 transition-all duration-150 placeholder:font-normal placeholder:text-gray-500/60 focus:border-accent focus:bg-white focus:text-gray-900 focus:outline-0 focus:ring-0 dark:border-gray-650 dark:group-[.is-success]:bg-input-success dark:bg-gray-900/40 dark:text-white dark:placeholder:text-gray-500/80 dark:focus:border-accent dark:focus:bg-gray-900 w-full"
          type="number"
          id="diamonds-owned"
          value={diamonds}
          onChange={handleDiamondsChange}
          min="0"
          max="9999999"
        />
      </div>

      {/* BUTTON */}
      <div className="">
        <button
          onClick={handleCalculate}
          className="inline-flex text-center font-bold leading-none uppercase py-4 px-4 bg-accent text-sm text-gray-900"
        >
          Simulate spins
        </button>
      </div>

      {/* RESULTADOS */}
      {showResult && (
        <div id="soul-essences-calculator-result" className="">
          <div>
            <span>Souls summoned: <span className="text-accent">{result.spins.toLocaleString()}</span></span>
            <br />
            <div className="inline-flex items-center mt-2">
              <TooltipItem
                id="blessing-points"
                img={standarItems.find(i => i.id === 'random_blue_soul')?.ico || standarItems[0].image}
                name={standarItems.find(i => i.id === 'random_blue_soul')?.name || standarItems[0].name}
                tooltip={standarItems.find(i => i.id === 'random_blue_soul')?.description || standarItems[0].description}
              />
              <span className="ml-2">Well: <span className="text-accent">{result.essence.toLocaleString()}</span></span>
            </div>
            <br />
            <div className="inline-flex items-center">
              <TooltipItem
                id="blessing-points"
                img={standarItems.find(i => i.id === 'random_purple_soul')?.ico || standarItems[0].image}
                name={standarItems.find(i => i.id === 'random_purple_soul')?.name || standarItems[0].name}
                tooltip={standarItems.find(i => i.id === 'random_purple_soul')?.description || standarItems[0].description}
              />
              <span className="ml-2">Rare: <span className="text-accent">{result.essence.toLocaleString()}</span></span>
            </div>
            <br />
            <div className="inline-flex items-center">
              <TooltipItem
                id="blessing-points"
                img={standarItems.find(i => i.id === 'random_orange_soul')?.ico || standarItems[0].image}
                name={standarItems.find(i => i.id === 'random_orange_soul')?.name || standarItems[0].name}
                tooltip={standarItems.find(i => i.id === 'random_orange_soul')?.description || standarItems[0].description}
              />
              <span className="ml-2">Epic: <span className="text-accent">{result.essence.toLocaleString()}</span></span>
            </div>
            <br />
            <div className="inline-flex items-center">
              <TooltipItem
                id="blessing-points"
                img={standarItems.find(i => i.id === 'random_red_soul')?.ico || standarItems[0].image}
                name={standarItems.find(i => i.id === 'random_red_soul')?.name || standarItems[0].name}
                tooltip={standarItems.find(i => i.id === 'random_red_soul')?.description || standarItems[0].description}
              />
              <span className="ml-2">Legendary: <span className="text-accent">{result.essence.toLocaleString()}</span></span>
            </div>
            <br />
            <div className="inline-flex items-center">
              <TooltipItem
                id="blessing-points"
                img={standarItems.find(i => i.id === 'soul_essence')?.ico || standarItems[0].image}
                name={standarItems.find(i => i.id === 'soul_essence')?.name || standarItems[0].name}
                tooltip={standarItems.find(i => i.id === 'soul_essence')?.description || standarItems[0].description}
              />
              <span className="ml-2">Soul Essence: <span className="text-accent">{result.essence.toLocaleString()}</span></span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SoulEssencesCalculator;
