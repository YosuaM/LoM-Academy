/* DATA */
const mountLevels = [
  {
    tier: 1,
    name: "Lily Pad",
    image: "/assets/img/game/mounts/lily_pad.webp",
    count: 0,
    total: 0,
    bonuses: 4,
    evasion: 5,
    stars: [
      {
        star: "0-1",
        count: 0,
        total: 0,
        bonuses: 4,
      },
      {
        star: "1-2",
        count: 3,
        total: 3,
        bonuses: 9,
      },
      {
        star: "2-3",
        count: 3,
        total: 6,
        bonuses: 14,
      },
      {
        star: "3-4",
        count: 3,
        total: 9,
        bonuses: 20,
      },
      {
        star: "4-5",
        count: 3,
        total: 12,
        bonuses: 26,
      },
      {
        star: "5-6",
        count: 3,
        total: 15,
        bonuses: 33,
      },
      {
        star: "6-7",
        count: 3,
        total: 18,
        bonuses: 40,
      },
      {
        star: "7-8",
        count: 3,
        total: 21,
        bonuses: 48,
      },
      {
        star: "8-9",
        count: 4,
        total: 25,
        bonuses: 56,
      },
      {
        star: "9-10",
        count: 5,
        total: 30,
        bonuses: 65,
      },
    ],
  },
  {
    tier: 2,
    name: "Quack Splash",
    image: "/assets/img/game/mounts/quack_splash.webp",
    count: 35,
    total: 35,
    bonuses: 109,
    evasion: 8,
    stars: [
      {
        star: "10-1",
        count: 5,
        total: 35,
        bonuses: 109,
      },
      {
        star: "1-2",
        count: 5,
        total: 40,
        bonuses: 124,
      },
      {
        star: "2-3",
        count: 5,
        total: 45,
        bonuses: 139,
      },
      {
        star: "3-4",
        count: 10,
        total: 55,
        bonuses: 154,
      },
      {
        star: "4-5",
        count: 5,
        total: 60,
        bonuses: 171,
      },
      {
        star: "5-6",
        count: 10,
        total: 70,
        bonuses: 188,
      },
      {
        star: "6-7",
        count: 10,
        total: 80,
        bonuses: 206,
      },
      {
        star: "7-8",
        count: 10,
        total: 90,
        bonuses: 225,
      },
      {
        star: "8-9",
        count: 10,
        total: 100,
        bonuses: 244,
      },
      {
        star: "9-10",
        count: 10,
        total: 110,
        bonuses: 264,
      },
    ],
  },
  {
    tier: 3,
    name: "Surfboard",
    image: "/assets/img/game/mounts/surfboard.webp",
    count: 90,
    total: 125,
    bonuses: 518,
    evasion: 10,
    stars: [
      {
        star: "10-1",
        count: 15,
        total: 125,
        bonuses: 518,
      },
      {
        star: "1-2",
        count: 15,
        total: 140,
        bonuses: 558,
      },
      {
        star: "2-3",
        count: 20,
        total: 160,
        bonuses: 598,
      },
      {
        star: "3-4",
        count: 20,
        total: 180,
        bonuses: 640,
      },
      {
        star: "4-5",
        count: 25,
        total: 205,
        bonuses: 683,
      },
      {
        star: "5-6",
        count: 30,
        total: 235,
        bonuses: 728,
      },
      {
        star: "6-7",
        count: 35,
        total: 270,
        bonuses: 774,
      },
      {
        star: "7-8",
        count: 35,
        total: 305,
        bonuses: 821,
      },
      {
        star: "8-9",
        count: 45,
        total: 350,
        bonuses: 869,
      },
      {
        star: "9-10",
        count: 50,
        total: 400,
        bonuses: 919,
      },
    ],
  },
  {
    tier: 4,
    name: "Flyboard",
    image: "/assets/img/game/mounts/flyboard.webp",
    count: 330,
    total: 455,
    bonuses: 1941,
    evasion: 15,
    stars: [
      {
        star: "10-1",
        count: 55,
        total: 455,
        bonuses: 1941,
      },
      {
        star: "1-2",
        count: 45,
        total: 500,
        bonuses: 2046,
      },
      {
        star: "2-3",
        count: 50,
        total: 550,
        bonuses: 2154,
      },
      {
        star: "3-4",
        count: 60,
        total: 610,
        bonuses: 2264,
      },
      {
        star: "4-5",
        count: 100,
        total: 710,
        bonuses: 2377,
      },
      {
        star: "5-6",
        count: 110,
        total: 820,
        bonuses: 2492,
      },
      {
        star: "6-7",
        count: 135,
        total: 955,
        bonuses: 2611,
      },
      {
        star: "7-8",
        count: 150,
        total: 1105,
        bonuses: 2732,
      },
      {
        star: "8-9",
        count: 175,
        total: 1280,
        bonuses: 2855,
      },
      {
        star: "9-10",
        count: 200,
        total: 1480,
        bonuses: 2981,
      },
    ],
  },
  {
    tier: 5,
    name: "Skyglider",
    image: "/assets/img/game/mounts/skyglider.webp",
    count: 1330,
    total: 1785,
    bonuses: 6220,
    evasion: 20,
    stars: [
      {
        star: "10-1",
        count: 230,
        total: 1785,
        bonuses: 6220,
      },
      {
        star: "1-2",
        count: 265,
        total: 2050,
        bonuses: 6480,
      },
      {
        star: "2-3",
        count: 305,
        total: 2355,
        bonuses: 6750,
      },
      {
        star: "3-4",
        count: 350,
        total: 2705,
        bonuses: 7030,
      },
      {
        star: "4-5",
        count: 405,
        total: 3110,
        bonuses: 7300,
      },
      {
        star: "5-6",
        count: 460,
        total: 3570,
        bonuses: 7590,
      },
      {
        star: "6-7",
        count: 535,
        total: 4105,
        bonuses: 7880,
      },
      {
        star: "7-8",
        count: 610,
        total: 4715,
        bonuses: 8170,
      },
      {
        star: "8-9",
        count: 705,
        total: 5420,
        bonuses: 8470,
      },
      {
        star: "9-10",
        count: 810,
        total: 6230,
        bonuses: 8780,
      },
    ],
  },
  {
    tier: 6,
    name: "Amethyst Gourd",
    image: "/assets/img/game/mounts/amethyst_gourd.webp",
    count: 5415,
    total: 7200,
    bonuses: 18180,
    evasion: 25,
    stars: [
      {
        star: "10-1",
        count: 970,
        total: 7200,
        bonuses: 18180,
      },
      {
        star: "1-2",
        count: 1170,
        total: 8370,
        bonuses: 18810,
      },
      {
        star: "2-3",
        count: 1400,
        total: 9770,
        bonuses: 19450,
      },
      {
        star: "3-4",
        count: 1680,
        total: 11450,
        bonuses: 20110,
      },
      {
        star: "4-5",
        count: 2105,
        total: 13555,
        bonuses: 20770,
      },
      {
        star: "5-6",
        count: 2415,
        total: 15970,
        bonuses: 21440,
      },
      {
        star: "6-7",
        count: 2905,
        total: 18875,
        bonuses: 22130,
      },
      {
        star: "7-8",
        count: 3480,
        total: 22355,
        bonuses: 22830,
      },
      {
        star: "8-9",
        count: 4180,
        total: 26535,
        bonuses: 23530,
      },
      {
        star: "9-10",
        count: 5015,
        total: 31550,
        bonuses: 24250,
      },
    ],
  },
  {
    tier: 7,
    name: "Magic Broom",
    image: "/assets/img/game/mounts/magic_broom.webp",
    count: 30620,
    total: 37820,
    bonuses: 49950,
    evasion: 30,
    stars: [
      {
        star: "10-1",
        count: 6270,
        total: 37820,
        bonuses: 49950,
      },
      {
        star: "1-2",
        count: 7835,
        total: 45655,
        bonuses: 51430,
      },
      {
        star: "2-3",
        count: 9795,
        total: 55450,
        bonuses: 52930,
      },
      {
        star: "3-4",
        count: 12240,
        total: 67690,
        bonuses: 54440,
      },
      {
        star: "4-5",
        count: 15305,
        total: 82995,
        bonuses: 55980,
      },
      {
        star: "5-6",
        count: 19130,
        total: 102125,
        bonuses: 57540,
      },
      {
        star: "6-7",
        count: 23910,
        total: 126035,
        bonuses: 59130,
      },
      {
        star: "7-8",
        count: 29890,
        total: 155925,
        bonuses: 60730,
      },
      {
        star: "8-9",
        count: 37360,
        total: 401720,
        bonuses: 62350,
      },
      {
        star: "9-10",
        count: 46700,
        total: 448420,
        bonuses: 64000,
      },
    ],
  },
  {
    tier: 8,
    name: "Magic Broom",
    image: "/assets/img/game/mounts/magic_broom.webp",
    count: 208435,
    total: 246255,
    bonuses: 87130,
    evasion: 32,
    stars: [
      {
        star: "10-1",
        count: 6270,
        total: 246255,
        bonuses: 87130,
      },
      {
        star: "1-2",
        count: 7835,
        total: 254090,
        bonuses: 88610,
      },
      {
        star: "2-3",
        count: 9795,
        total: 263885,
        bonuses: 90110,
      },
      {
        star: "3-4",
        count: 12240,
        total: 276125,
        bonuses: 91620,
      },
      {
        star: "4-5",
        count: 15305,
        total: 291430,
        bonuses: 93160,
      },
      {
        star: "5-6",
        count: 19130,
        total: 310560,
        bonuses: 94720,
      },
      {
        star: "6-7",
        count: 23910,
        total: 334470,
        bonuses: 96310,
      },
      {
        star: "7-8",
        count: 29890,
        total: 364360,
        bonuses: 97910,
      },
      {
        star: "8-9",
        count: 37360,
        total: 401720,
        bonuses: 99530,
      },
      {
        star: "9-10",
        count: 46700,
        total: 448420,
        bonuses: 101180,
      },
    ],
  },
  {
    tier: 9,
    name: "Azure Feather",
    image: "/assets/img/game/mounts/azure_feather.webp",
    count: 208435,
    total: 454690,
    bonuses: 124310,
    evasion: 35,
    stars: [
      {
        star: "10-1",
        count: 6270,
        total: 454690,
        bonuses: 124310,
      },
      {
        star: "1-2",
        count: 7835,
        total: 462525,
        bonuses: 125790,
      },
      {
        star: "2-3",
        count: 9795,
        total: 472320,
        bonuses: 127290,
      },
      {
        star: "3-4",
        count: 12240,
        total: 484560,
        bonuses: 128800,
      },
      {
        star: "4-5",
        count: 15305,
        total: 499865,
        bonuses: 130340,
      },
      {
        star: "5-6",
        count: 19130,
        total: 518995,
        bonuses: 131900,
      },
      {
        star: "6-7",
        count: 23910,
        total: 542905,
        bonuses: 133490,
      },
      {
        star: "7-8",
        count: 29890,
        total: 572795,
        bonuses: 135090,
      },
      {
        star: "8-9",
        count: 37360,
        total: 610155,
        bonuses: 136710,
      },
      {
        star: "9-10",
        count: 46700,
        total: 656855,
        bonuses: 138360,
      },
    ],
  },
  {
    tier: 10,
    name: "Azure Feather",
    image: "/assets/img/game/mounts/azure_feather.webp",
    count: 208435,
    total: 663125,
    bonuses: 161490,
    evasion: 38,
    stars: [
      {
        star: "10-1",
        count: 6270,
        total: 663125,
        bonuses: 161490,
      },
      {
        star: "1-2",
        count: 7835,
        total: 670960,
        bonuses: 162970,
      },
      {
        star: "2-3",
        count: 9795,
        total: 680755,
        bonuses: 164470,
      },
      {
        star: "3-4",
        count: 12240,
        total: 692995,
        bonuses: 165980,
      },
      {
        star: "4-5",
        count: 15305,
        total: 708300,
        bonuses: 167520,
      },
      {
        star: "5-6",
        count: 19130,
        total: 727430,
        bonuses: 169080,
      },
      {
        star: "6-7",
        count: 23910,
        total: 751340,
        bonuses: 170670,
      },
      {
        star: "7-8",
        count: 29890,
        total: 781230,
        bonuses: 172270,
      },
      {
        star: "8-9",
        count: 37360,
        total: 818590,
        bonuses: 173890,
      },
      {
        star: "9-10",
        count: 46700,
        total: 865290,
        bonuses: 175540,
      },
    ],
  },
  {
    tier: 11,
    name: "Azure Feather",
    image: "/assets/img/game/mounts/azure_feather.webp",
    count: 208435,
    total: 871560,
    bonuses: 198670,
    evasion: 41,
    stars: [
      {
        star: "10-1",
        count: 6270,
        total: 871560,
        bonuses: 198670,
      },
      {
        star: "1-2",
        count: 7835,
        total: 879395,
        bonuses: 200150,
      },
      {
        star: "2-3",
        count: 9795,
        total: 889190,
        bonuses: 201650,
      },
      {
        star: "3-4",
        count: 12240,
        total: 901430,
        bonuses: 203160,
      },
      {
        star: "4-5",
        count: 15305,
        total: 916735,
        bonuses: 204700,
      },
      {
        star: "5-6",
        count: 19130,
        total: 935865,
        bonuses: 206260,
      },
      {
        star: "6-7",
        count: 23910,
        total: 959775,
        bonuses: 207850,
      },
      {
        star: "7-8",
        count: 29890,
        total: 989665,
        bonuses: 209450,
      },
      {
        star: "8-9",
        count: 37360,
        total: 1027025,
        bonuses: 211070,
      },
      {
        star: "9-10",
        count: 46700,
        total: 1073725,
        bonuses: 212720,
      },
    ],
  },
  {
    tier: 12,
    name: "Azure Feather",
    image: "/assets/img/game/mounts/azure_feather.webp",
    count: 208435,
    total: 1079995,
    bonuses: 235850,
    evasion: 44,
    stars: [
      {
        star: "10-1",
        count: 6270,
        total: 1079995,
        bonuses: 235850,
      },
      {
        star: "1-2",
        count: 7835,
        total: 1087830,
        bonuses: 237330,
      },
      {
        star: "2-3",
        count: 9795,
        total: 1097625,
        bonuses: 238830,
      },
      {
        star: "3-4",
        count: 12240,
        total: 1109865,
        bonuses: 240340,
      },
      {
        star: "4-5",
        count: 15305,
        total: 1125170,
        bonuses: 241880,
      },
      {
        star: "5-6",
        count: 19130,
        total: 1144300,
        bonuses: 243440,
      },
      {
        star: "6-7",
        count: 23910,
        total: 1168210,
        bonuses: 245030,
      },
      {
        star: "7-8",
        count: 29890,
        total: 1198100,
        bonuses: 246630,
      },
      {
        star: "8-9",
        count: 37360,
        total: 1235460,
        bonuses: 248250,
      },
      {
        star: "9-10",
        count: 46700,
        total: 1282160,
        bonuses: 249900,
      },
    ],
  },
  {
    tier: 13,
    name: "Azure Feather",
    image: "/assets/img/game/mounts/azure_feather.webp",
    count: 208435,
    total: 1288430,
    bonuses: 273030,
    evasion: 47,
    stars: [
      {
        star: "10-1",
        count: 6270,
        total: 1288430,
        bonuses: 273030,
      },
      {
        star: "1-2",
        count: 7835,
        total: 1296265,
        bonuses: 274510,
      },
      {
        star: "2-3",
        count: 9795,
        total: 1306060,
        bonuses: 276010,
      },
      {
        star: "3-4",
        count: 12240,
        total: 1318300,
        bonuses: 277520,
      },
      {
        star: "4-5",
        count: 15305,
        total: 1333605,
        bonuses: 279060,
      },
      {
        star: "5-6",
        count: 19130,
        total: 1352735,
        bonuses: 280620,
      },
      {
        star: "6-7",
        count: 23910,
        total: 1376645,
        bonuses: 282210,
      },
      {
        star: "7-8",
        count: 29890,
        total: 1406535,
        bonuses: 283810,
      },
      {
        star: "8-9",
        count: 37360,
        total: 1443895,
        bonuses: 285430,
      },
      {
        star: "9-10",
        count: 46700,
        total: 1490595,
        bonuses: 287080,
      },
    ],
  },
  {
    tier: 14,
    name: "Azure Feather",
    image: "/assets/img/game/mounts/azure_feather.webp",
    count: 208435,
    total: 1496865,
    bonuses: 310210,
    evasion: 50,
    stars: [
      {
        star: "10-1",
        count: 6270,
        total: 1496865,
        bonuses: 310210,
      },
      {
        star: "1-2",
        count: 7835,
        total: 1504700,
        bonuses: 311690,
      },
      {
        star: "2-3",
        count: 9795,
        total: 1514495,
        bonuses: 313190,
      },
      {
        star: "3-4",
        count: 12240,
        total: 1526735,
        bonuses: 314700,
      },
      {
        star: "4-5",
        count: 15305,
        total: 1542040,
        bonuses: 316240,
      },
      {
        star: "5-6",
        count: 19130,
        total: 1561170,
        bonuses: 317800,
      },
      {
        star: "6-7",
        count: 23910,
        total: 1585080,
        bonuses: 319390,
      },
      {
        star: "7-8",
        count: 29890,
        total: 1614970,
        bonuses: 320990,
      },
      {
        star: "8-9",
        count: 37360,
        total: 1652330,
        bonuses: 322610,
      },
      {
        star: "9-10",
        count: 46700,
        total: 1699030,
        bonuses: 324260,
      },
    ],
  },

  {
    tier: 15,
    name: "Soaring Wings",
    image: "/assets/img/game/mounts/soaring_wings.webp",
    count: 0,
    total: 0,
    bonuses: 0,
    evasion: 0,
    stars: [
      {
        star: "10-1",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "1-2",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "2-3",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "3-4",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "4-5",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "5-6",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "6-7",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "7-8",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "8-9",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "9-10",
        count: 0,
        total: 0,
        bonuses: 0,
      },
    ],
  },
  {
    tier: 16,
    name: "Soaring Wings",
    image: "/assets/img/game/mounts/soaring_wings.webp",
    count: 0,
    total: 0,
    bonuses: 0,
    evasion: 0,
    stars: [
      {
        star: "10-1",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "1-2",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "2-3",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "3-4",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "4-5",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "5-6",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "6-7",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "7-8",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "8-9",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "9-10",
        count: 0,
        total: 0,
        bonuses: 0,
      },
    ],
  },
  {
    tier: 17,
    name: "Soaring Wings",
    image: "/assets/img/game/mounts/soaring_wings.webp",
    count: 0,
    total: 0,
    bonuses: 0,
    evasion: 0,
    stars: [
      {
        star: "10-1",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "1-2",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "2-3",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "3-4",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "4-5",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "5-6",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "6-7",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "7-8",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "8-9",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "9-10",
        count: 0,
        total: 0,
        bonuses: 0,
      },
    ],
  },
  {
    tier: 18,
    name: "Soaring Wings",
    image: "/assets/img/game/mounts/soaring_wings.webp",
    count: 0,
    total: 0,
    bonuses: 0,
    evasion: 0,
    stars: [
      {
        star: "10-1",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "1-2",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "2-3",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "3-4",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "4-5",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "5-6",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "6-7",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "7-8",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "8-9",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "9-10",
        count: 0,
        total: 0,
        bonuses: 0,
      },
    ],
  },
  {
    tier: 19,
    name: "Soaring Wings",
    image: "/assets/img/game/mounts/soaring_wings.webp",
    count: 0,
    total: 0,
    bonuses: 0,
    evasion: 0,
    stars: [
      {
        star: "10-1",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "1-2",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "2-3",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "3-4",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "4-5",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "5-6",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "6-7",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "7-8",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "8-9",
        count: 0,
        total: 0,
        bonuses: 0,
      },
      {
        star: "9-10",
        count: 0,
        total: 0,
        bonuses: 0,
      },
    ],
  },
];
/* DATA */

const mountInfoTable = document.getElementById("mount-tier-detail-table-body");
const mountInfoName = document.getElementById("mount-tier-detail-name");
const mountInfoTier = document.getElementById("mount-tier-detail-tier");
const mountInfoEvasion = document.getElementById("mount-tier-detail-evasion");
const mountInfoImg = document.getElementById("mount-tier-detail-img");

// Function to update Mount Tier Details Table
function updateMountTableDetailTable(tier) {
  if (!mountInfoTable) return;

  mountInfoTable.innerHTML = "";

  const mountInfo = mountLevels.find((mount) => mount.tier === tier);

  // Create rows for each star level
  mountInfo?.stars.forEach((nivel) => {
    // Crear una nueva fila
    const fila = document.createElement("tr");
    fila.classList.add(
      "bg-white",
      "border-b",
      "dark:bg-gray-800",
      "dark:border-gray-700",
      "hover:bg-gray-50",
      "dark:hover:bg-gray-600"
    );

    // Crear celdas para cada atributo del nivel de estrella
    const celdaStar = document.createElement("td");
    celdaStar.classList.add("text-center", "px-4", "py-2");
    celdaStar.textContent = nivel.star;
    fila.appendChild(celdaStar);

    const celdaCount = document.createElement("td");
    celdaCount.classList.add("text-center", "px-4", "py-2");
    celdaCount.textContent = nivel.count.toString();
    fila.appendChild(celdaCount);

    const celdaTotal = document.createElement("td");
    celdaTotal.classList.add("text-center", "px-4", "py-2");
    celdaTotal.textContent = nivel.total.toString();
    fila.appendChild(celdaTotal);

    const celdaBonuses = document.createElement("td");
    celdaBonuses.classList.add("text-center", "px-4", "py-2");
    celdaBonuses.textContent = nivel.bonuses + "%";
    fila.appendChild(celdaBonuses);

    // Agregar la fila a la tabla
    mountInfoTable.appendChild(fila);
  });

  // Update mount tier info
  if (mountInfoName && mountInfoTier && mountInfoEvasion) {
    mountInfoName.textContent = mountInfo?.name ?? "MOUNT_NAME";
    mountInfoTier.textContent = mountInfo?.tier.toString() ?? "MOUNT_TIER";
    mountInfoEvasion.textContent = mountInfo?.evasion.toString() ?? "MOUNT_EVASION";
    mountInfoImg.src = mountInfo?.image ?? "MOUNT_IMG";
  }
}


// Add onlick event to mount tier details links
const detailsLinks = document.querySelectorAll("#mount-tiers-table a");

detailsLinks.forEach((link, index) => {
  const tier = parseInt(link.getAttribute("data-tier") ?? "0");

  link.addEventListener("click", () => {
    updateMountTableDetailTable(tier);
  });
});
