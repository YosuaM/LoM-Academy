//
const artifactLevels = [
  {
    level: 1,
    bonus: 700,
    ignore_evasion: 8,
    cost: 0,
    total: 0,
  },
  {
    level: 2,
    bonus: 1260,
    ignore_evasion: 8,
    cost: 4,
    total: 4,
  },
  {
    level: 3,
    bonus: 1820,
    ignore_evasion: 8,
    cost: 23,
    total: 27,
  },
  {
    level: 4,
    bonus: 2380,
    ignore_evasion: 8,
    cost: 41,
    total: 68,
  },
  {
    level: 5,
    bonus: 2940,
    ignore_evasion: 8,
    cost: 69,
    total: 137,
  },
  {
    level: 6,
    bonus: 3500,
    ignore_evasion: 8,
    cost: 88,
    total: 225,
  },
  {
    level: 7,
    bonus: 4060,
    ignore_evasion: 8,
    cost: 106,
    total: 331,
  },
  {
    level: 8,
    bonus: 4620,
    ignore_evasion: 8,
    cost: 134,
    total: 465,
  },
  {
    level: 9,
    bonus: 5180,
    ignore_evasion: 8,
    cost: 171,
    total: 636,
  },
  {
    level: 10,
    bonus: 5740,
    ignore_evasion: 8,
    cost: 240,
    total: 876,
  },

  {
    level: 11,
    bonus: 6800,
    ignore_evasion: 12,
    cost: 13,
    total: 889,
  },
  {
    level: 12,
    bonus: 7860,
    ignore_evasion: 12,
    cost: 32,
    total: 921,
  },
  {
    level: 13,
    bonus: 8920,
    ignore_evasion: 12,
    cost: 106,
    total: 1027,
  },
  {
    level: 14,
    bonus: 9970,
    ignore_evasion: 12,
    cost: 180,
    total: 1207,
  },
  {
    level: 15,
    bonus: 11030,
    ignore_evasion: 12,
    cost: 290,
    total: 1497,
  },
  {
    level: 16,
    bonus: 12090,
    ignore_evasion: 12,
    cost: 364,
    total: 1861,
  },
  {
    level: 17,
    bonus: 13150,
    ignore_evasion: 12,
    cost: 438,
    total: 2299,
  },
  {
    level: 18,
    bonus: 14200,
    ignore_evasion: 12,
    cost: 549,
    total: 2848,
  },
  {
    level: 19,
    bonus: 15200,
    ignore_evasion: 12,
    cost: 696,
    total: 3544,
  },
  {
    level: 20,
    bonus: 16320,
    ignore_evasion: 12,
    cost: 973,
    total: 4517,
  },

  {
    level: 21,
    bonus: 17870,
    ignore_evasion: 18,
    cost: 265,
    total: 4782,
  },
  {
    level: 22,
    bonus: 19430,
    ignore_evasion: 18,
    cost: 535,
    total: 5317,
  },
  {
    level: 23,
    bonus: 20980,
    ignore_evasion: 18,
    cost: 1615,
    total: 6932,
  },
  {
    level: 24,
    bonus: 22540,
    ignore_evasion: 18,
    cost: 2696,
    total: 9628,
  },
  {
    level: 25,
    bonus: 24090,
    ignore_evasion: 18,
    cost: 4316,
    total: 13944,
  },
  {
    level: 26,
    bonus: 25650,
    ignore_evasion: 18,
    cost: 5396,
    total: 19340,
  },
  {
    level: 27,
    bonus: 27200,
    ignore_evasion: 18,
    cost: 6496,
    total: 25836,
  },
  {
    level: 28,
    bonus: 28760,
    ignore_evasion: 18,
    cost: 8097,
    total: 33933,
  },
  {
    level: 29,
    bonus: 30310,
    ignore_evasion: 18,
    cost: 10257,
    total: 44190,
  },
  {
    level: 30,
    bonus: 31870,
    ignore_evasion: 18,
    cost: 14308,
    total: 58498,
  },

  {
    level: 31,
    bonus: 33920,
    ignore_evasion: 24,
    cost: 517,
    total: 59015,
  },
  {
    level: 32,
    bonus: 35970,
    ignore_evasion: 24,
    cost: 1038,
    total: 60053,
  },
  {
    level: 33,
    bonus: 38030,
    ignore_evasion: 24,
    cost: 3125,
    total: 63178,
  },
  {
    level: 34,
    bonus: 40080,
    ignore_evasion: 24,
    cost: 5211,
    total: 68389,
  },
  {
    level: 35,
    bonus: 42130,
    ignore_evasion: 24,
    cost: 8341,
    total: 76730,
  },
  {
    level: 36,
    bonus: 44180,
    ignore_evasion: 24,
    cost: 10427,
    total: 87157,
  },
  {
    level: 37,
    bonus: 46240,
    ignore_evasion: 24,
    cost: 12513,
    total: 99670,
  },
  {
    level: 38,
    bonus: 48290,
    ignore_evasion: 24,
    cost: 15643,
    total: 115313,
  },
  {
    level: 39,
    bonus: 50340,
    ignore_evasion: 24,
    cost: 19816,
    total: 135129,
  },
  {
    level: 40,
    bonus: 52390,
    ignore_evasion: 24,
    cost: 27640,
    total: 162769,
  },

  {
    level: 41,
    bonus: 54940,
    ignore_evasion: 30,
    cost: 768,
    total: 163537,
  },
  {
    level: 42,
    bonus: 57490,
    ignore_evasion: 30,
    cost: 1541,
    total: 165078,
  },
  {
    level: 43,
    bonus: 60040,
    ignore_evasion: 30,
    cost: 4634,
    total: 169712,
  },
  {
    level: 44,
    bonus: 62590,
    ignore_evasion: 30,
    cost: 7727,
    total: 177439,
  },
  {
    level: 45,
    bonus: 65140,
    ignore_evasion: 30,
    cost: 12366,
    total: 189805,
  },
  {
    level: 46,
    bonus: 67690,
    ignore_evasion: 30,
    cost: 15459,
    total: 205264,
  },
  {
    level: 47,
    bonus: 70240,
    ignore_evasion: 30,
    cost: 18551,
    total: 223815,
  },
  {
    level: 48,
    bonus: 72790,
    ignore_evasion: 30,
    cost: 23190,
    total: 246005,
  },
  {
    level: 49,
    bonus: 75340,
    ignore_evasion: 30,
    cost: 29376,
    total: 275381,
  },
  {
    level: 50,
    bonus: 77890,
    ignore_evasion: 30,
    cost: 40973,
    total: 317354,
  },
].flatMap((artifactLevel) => {
  return {
    level: artifactLevel.level,
    count: artifactLevel.cost,
  };
});

const artifactCurrentLevel = document.getElementById("artifact-current-level");
const artifactTargetLevel = document.getElementById("artifact-target-level");
const divineHammersOwned = document.getElementById(
  "artifact-diviner-hammers-owned"
);
const artifactCalculatorResult = document.getElementById("artifact-calculator-result");
const artifactCalculatorError = document.getElementById("artifact-calculator-error");

const artifactCalculatorButton = document.getElementById("artifact-calculator-button");

if (artifactCalculatorButton) {
  artifactCalculatorButton.addEventListener("click", function () {
    // Get the result elements
    const resultSpans = artifactCalculatorResult.getElementsByTagName("span");
    const resultDivs = artifactCalculatorResult.getElementsByTagName("div");

    // Hide previous results
    artifactCalculatorError.classList.add("hidden");
    artifactCalculatorResult.classList.add("hidden");
    resultDivs[0].classList.add("hidden");
    resultSpans[1].classList.add("hidden");

    // Check if the current level and target level are selected
    if (!artifactCurrentLevel || !artifactTargetLevel) {
      console.error("Missing data.", artifactCurrentLevel, artifactTargetLevel);
      return;
    }

    // Check if the current level is higher than the target level
    if (parseInt(artifactCurrentLevel.value) >= parseInt(artifactTargetLevel.value)) {
      artifactCalculatorError.classList.remove("hidden");
      return;
    }

    // Calculate the total cost
    var totalCost = 0;
    for (
      var i = parseInt(artifactCurrentLevel.value) + 1;
      i <= parseInt(artifactTargetLevel.value);
      i++
    ) {
      totalCost += artifactLevels[i].count;
    }

    // Display divine hammers results
    resultSpans[0].textContent = totalCost.toLocaleString();
    let divineHammersNeeded = parseInt(totalCost);
    if (divineHammersOwned.value > 0) {
      divineHammersNeeded = Math.max(
        parseInt(totalCost) - parseInt(divineHammersOwned.value),
        0
      );
      resultSpans[2].textContent = divineHammersNeeded.toLocaleString();
      resultSpans[1].classList.remove("hidden");
    }
    resultDivs[0].classList.remove("hidden");

    // Display the result
    artifactCalculatorResult.classList.remove("hidden");
  });
}
