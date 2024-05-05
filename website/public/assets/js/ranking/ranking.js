/* DATA */
const familyPowers = [
  {
    server: 1001,
    family: "Origin",
    power: 2011157761,
  },
  {
    server: 1001,
    family: "TriadPhoenix",
    power: 1661908824,
  },
  {
    server: 1001,
    family: "Vaultcity",
    power: 1642311160,
  },
  {
    server: 1001,
    family: "TriadFenrir",
    power: 1482541184,
  },
  {
    server: 1001,
    family: "TriadHorus",
    power: 580888965,
  },
  {
    server: 1001,
    family: "Clannabis",
    power: 498278777,
  },
  {
    server: 1001,
    family: "BeyondTheWall",
    power: 496059414,
  },
  {
    server: 1001,
    family: "Aces",
    power: 490529463,
  },
  {
    server: 1001,
    family: "GastroShrooms",
    power: 295387003,
  },
  {
    server: 1001,
    family: "Originll",
    power: 292571954,
  },
  {
    server: 1002,
    family: "EGC",
    power: 2062548450,
  },
  {
    server: 1002,
    family: "ChaoticMushies",
    power: 1459281345,
  },
  {
    server: 1002,
    family: "CoffeeBreak",
    power: 1337243671,
  },
  {
    server: 1002,
    family: "Purgatory",
    power: 1255087002,
  },
  {
    server: 1002,
    family: "Anonymous",
    power: 1244909214,
  },
  {
    server: 1002,
    family: "The_OG_Shrooms",
    power: 638339273,
  },
  {
    server: 1002,
    family: "Mushies",
    power: 607545240,
  },
  {
    server: 1002,
    family: "Terrasen",
    power: 501165971,
  },
  {
    server: 1002,
    family: "DooM",
    power: 341351564,
  },
  {
    server: 1002,
    family: "《Tempare》",
    power: 340474799,
  },
  {
    server: 1003,
    family: "UnitY",
    power: 1916571258,
  },
  {
    server: 1003,
    family: "TheCoop",
    power: 1735776488,
  },
  {
    server: 1003,
    family: "ShroomFactory",
    power: 1418868725,
  },
  {
    server: 1003,
    family: "Unityll",
    power: 1317462322,
  },
  {
    server: 1003,
    family: "chicken",
    power: 713673296,
  },
  {
    server: 1003,
    family: "SycoTherapy",
    power: 559055532,
  },
  {
    server: 1003,
    family: "Olympus",
    power: 435368139,
  },
  {
    server: 1003,
    family: "KarnageRealm",
    power: 267664441,
  },
  {
    server: 1003,
    family: "ETERNALS",
    power: 263754075,
  },
  {
    server: 1003,
    family: "Mafia",
    power: 239502826,
  },
  {
    server: 1004,
    family: "HIVE",
    power: 2081926695,
  },
  {
    server: 1004,
    family: "MagicMushrooms",
    power: 1624033903,
  },
  {
    server: 1004,
    family: "PowerBottoms",
    power: 1126614485,
  },
  {
    server: 1004,
    family: "Exodus",
    power: 989554918,
  },
  {
    server: 1004,
    family: "GlitterFarts",
    power: 785189260,
  },
  {
    server: 1004,
    family: "FRIED",
    power: 696213542,
  },
  {
    server: 1004,
    family: "ShroomZone",
    power: 487953099,
  },
  {
    server: 1004,
    family: "Shroomies",
    power: 457004598,
  },
  {
    server: 1004,
    family: "RANK1",
    power: 385827071,
  },
  {
    server: 1004,
    family: "Dragonkin",
    power: 349368259,
  },
  {
    server: 1005,
    family: "Shroomies",
    power: 1876135745,
  },
  {
    server: 1005,
    family: "Akatsuki",
    power: 1558260076,
  },
  {
    server: 1005,
    family: "CCDeclined",
    power: 1467129926,
  },
  {
    server: 1005,
    family: "TheChickens",
    power: 554978768,
  },
  {
    server: 1005,
    family: "Shroomacon",
    power: 520549270,
  },
  {
    server: 1005,
    family: "CelestialRose",
    power: 448024545,
  },
  {
    server: 1005,
    family: "Shroomates",
    power: 442551542,
  },
  {
    server: 1005,
    family: "Shroomdom",
    power: 297072946,
  },
  {
    server: 1005,
    family: "idk",
    power: 216867339,
  },
  {
    server: 1005,
    family: "ShroomGng",
    power: 187007756,
  },
  {
    server: 1006,
    family: "FairyTale",
    power: 1862238221,
  },
  {
    server: 1006,
    family: "HoneyJade",
    power: 1541643834,
  },
  {
    server: 1006,
    family: "OpiuMush",
    power: 1041255095,
  },
  {
    server: 1006,
    family: "Unseen",
    power: 572842868,
  },
  {
    server: 1006,
    family: "Shroom_Power",
    power: 316470672,
  },
  {
    server: 1006,
    family: "Luminous",
    power: 283695752,
  },
  {
    server: 1006,
    family: "Alfheim",
    power: 264739668,
  },
  {
    server: 1006,
    family: "Kaddins",
    power: 246918640,
  },
  {
    server: 1006,
    family: "Powershrooms",
    power: 193332243,
  },
  {
    server: 1006,
    family: "ZazaLand",
    power: 170160383,
  },
  {
    server: 1007,
    family: "PANTHEON",
    power: 2145146699,
  },
  {
    server: 1007,
    family: "CthuwuFwtagn",
    power: 1126690364,
  },
  {
    server: 1007,
    family: "SnuggleHuddle",
    power: 985369941,
  },
  {
    server: 1007,
    family: "Evergreen",
    power: 872489659,
  },
  {
    server: 1007,
    family: "Heaven",
    power: 859114206,
  },
  {
    server: 1007,
    family: "Lethal",
    power: 336644130,
  },
  {
    server: 1007,
    family: "RAGNAROK",
    power: 321387499,
  },
  {
    server: 1007,
    family: "Shroomywoomy",
    power: 270558447,
  },
  {
    server: 1007,
    family: "YeahBuddy",
    power: 262217503,
  },
  {
    server: 1007,
    family: "Valhalla",
    power: 226007545,
  },
  {
    server: 1008,
    family: "Rebirth",
    power: 2062119307,
  },
  {
    server: 1008,
    family: "psychedelic",
    power: 1467391660,
  },
  {
    server: 1008,
    family: "LampShit",
    power: 1209207211,
  },
  {
    server: 1008,
    family: "٭𝔾ood𝕍ibes٭",
    power: 674451704,
  },
  {
    server: 1008,
    family: "THESMURFS",
    power: 338831077,
  },
  {
    server: 1008,
    family: "Topshroom",
    power: 316091617,
  },
  {
    server: 1008,
    family: "Light",
    power: 294168480,
  },
  {
    server: 1008,
    family: "Snowfall",
    power: 272268082,
  },
  {
    server: 1008,
    family: "mantras",
    power: 267021928,
  },
  {
    server: 1008,
    family: "Geese",
    power: 236058936,
  },
  {
    server: 1009,
    family: "LostShrooms",
    power: 1641494124,
  },
  {
    server: 1009,
    family: "Tempest",
    power: 1574372637,
  },
  {
    server: 1009,
    family: "SolCovenant",
    power: 472819442,
  },
  {
    server: 1009,
    family: "ShroominOut",
    power: 454392718,
  },
  {
    server: 1009,
    family: "TopShelfShroom",
    power: 391200008,
  },
  {
    server: 1009,
    family: "MintyGang",
    power: 282268005,
  },
  {
    server: 1009,
    family: "ShadowWarriors",
    power: 281107490,
  },
  {
    server: 1009,
    family: "Mushroom",
    power: 230348702,
  },
  {
    server: 1009,
    family: "HellsDragons",
    power: 229583968,
  },
  {
    server: 1009,
    family: "MycoDragons",
    power: 180211634,
  },
  {
    server: 1010,
    family: "Legends",
    power: 2032007027,
  },
  {
    server: 1010,
    family: "Myths",
    power: 940521913,
  },
  {
    server: 1010,
    family: "OnePiece",
    power: 475432380,
  },
  {
    server: 1010,
    family: "CRACK",
    power: 390369640,
  },
  {
    server: 1010,
    family: "Day1s",
    power: 334330568,
  },
  {
    server: 1010,
    family: "DRUNKInSHROOMs",
    power: 332681474,
  },
  {
    server: 1010,
    family: "Genesis",
    power: 289942411,
  },
  {
    server: 1010,
    family: "Kindness",
    power: 262524668,
  },
  {
    server: 1010,
    family: "FungiFam",
    power: 254448956,
  },
  {
    server: 1010,
    family: "Nazgûl",
    power: 227403929,
  },
  {
    server: 1011,
    family: "MagicMushrooms",
    power: 1787849706,
  },
  {
    server: 1011,
    family: "Strawhats",
    power: 1135275705,
  },
  {
    server: 1011,
    family: "InsomniaShroom",
    power: 709069422,
  },
  {
    server: 1011,
    family: "BoomShrooms",
    power: 330425327,
  },
  {
    server: 1011,
    family: "SuperShrooms",
    power: 285371026,
  },
  {
    server: 1011,
    family: "Psych",
    power: 227986251,
  },
  {
    server: 1011,
    family: "Shroomery",
    power: 212061699,
  },
  {
    server: 1011,
    family: "Toadfamily",
    power: 209229204,
  },
  {
    server: 1011,
    family: "RICEnBEANS",
    power: 196427965,
  },
  {
    server: 1011,
    family: "FungiEmpire",
    power: 180894097,
  },
  {
    server: 1012,
    family: "Celestial",
    power: 1821922188,
  },
  {
    server: 1012,
    family: "Mycelium",
    power: 1336526971,
  },
  {
    server: 1012,
    family: "Darkspore",
    power: 1217467844,
  },
  {
    server: 1012,
    family: "Mushroom",
    power: 350392840,
  },
  {
    server: 1012,
    family: "NARNIA",
    power: 319596014,
  },
  {
    server: 1012,
    family: "TheCouncil",
    power: 293379656,
  },
  {
    server: 1012,
    family: "ShadowGarden",
    power: 236911443,
  },
  {
    server: 1012,
    family: "PowerShrooms",
    power: 200255241,
  },
  {
    server: 1012,
    family: "Psychedelic",
    power: 178882534,
  },
  {
    server: 1012,
    family: "Scrooms",
    power: 175092242,
  },
  {
    server: 1013,
    family: "Void",
    power: 1856985004,
  },
  {
    server: 1013,
    family: "WaffleHouse",
    power: 1506949918,
  },
  {
    server: 1013,
    family: "Onepiece",
    power: 727712541,
  },
  {
    server: 1013,
    family: "RavenMoore",
    power: 448628374,
  },
  {
    server: 1013,
    family: "MoonPalace",
    power: 383002126,
  },
  {
    server: 1013,
    family: "Rebellious",
    power: 380386938,
  },
  {
    server: 1013,
    family: "Pineapple",
    power: 274541092,
  },
  {
    server: 1013,
    family: "AnorLondo",
    power: 212514276,
  },
  {
    server: 1013,
    family: "Shiitake",
    power: 197198163,
  },
  {
    server: 1013,
    family: "DeadlySlimes",
    power: 176286863,
  },
  {
    server: 1014,
    family: "Family",
    power: 2069582944,
  },
  {
    server: 1014,
    family: "Dashrooms",
    power: 1186117742,
  },
  {
    server: 1014,
    family: "DrunkPandas",
    power: 929475328,
  },
  {
    server: 1014,
    family: "SHROOMIN",
    power: 473897154,
  },
  {
    server: 1014,
    family: "Loveloyalty",
    power: 346820581,
  },
  {
    server: 1014,
    family: "DaBois",
    power: 309233788,
  },
  {
    server: 1014,
    family: "FungusFamily",
    power: 264675271,
  },
  {
    server: 1014,
    family: "Shadow",
    power: 257626233,
  },
  {
    server: 1014,
    family: "bbc",
    power: 211723874,
  },
  {
    server: 1014,
    family: "OGShroomers",
    power: 203710803,
  },
  {
    server: 1015,
    family: "Wonderland",
    power: 1825600156,
  },
  {
    server: 1015,
    family: "Skywalkers",
    power: 1339681805,
  },
  {
    server: 1015,
    family: "roomMush",
    power: 866130146,
  },
  {
    server: 1015,
    family: "MushStompas",
    power: 731684439,
  },
  {
    server: 1015,
    family: "Shroomlings",
    power: 509186005,
  },
  {
    server: 1015,
    family: "USA",
    power: 266499046,
  },
  {
    server: 1015,
    family: "Traveleurs",
    power: 242595293,
  },
  {
    server: 1015,
    family: "MagicShroomies",
    power: 242460464,
  },
  {
    server: 1015,
    family: "ITsADiddyParty",
    power: 238633148,
  },
  {
    server: 1015,
    family: "Trippyshrooms",
    power: 177196454,
  },
  {
    server: 1016,
    family: "Vamp🦇",
    power: 1681886958,
  },
  {
    server: 1016,
    family: "Mycophobia",
    power: 1170358341,
  },
  {
    server: 1016,
    family: "Legends",
    power: 984654452,
  },
  {
    server: 1016,
    family: "Retribution",
    power: 755154692,
  },
  {
    server: 1016,
    family: "Shroomsies",
    power: 333600945,
  },
  {
    server: 1016,
    family: "SporeSquad",
    power: 283893987,
  },
  {
    server: 1016,
    family: "LegionOfShroom",
    power: 268182281,
  },
  {
    server: 1016,
    family: "DeathCult",
    power: 259533527,
  },
  {
    server: 1016,
    family: "flameheart",
    power: 243570913,
  },
  {
    server: 1016,
    family: "shroomdoom",
    power: 227047568,
  },
  {
    server: 1017,
    family: "ShroomWalker",
    power: 1657483176,
  },
  {
    server: 1017,
    family: "StrawHats",
    power: 1441455176,
  },
  {
    server: 1017,
    family: "Alpha",
    power: 1185774581,
  },
  {
    server: 1017,
    family: "TheRider",
    power: 360168239,
  },
  {
    server: 1017,
    family: "Myconids",
    power: 326182421,
  },
  {
    server: 1017,
    family: "FungiFanatics",
    power: 313060847,
  },
  {
    server: 1017,
    family: "Hellsing",
    power: 272532514,
  },
  {
    server: 1017,
    family: "MagicMushrooms",
    power: 268494292,
  },
  {
    server: 1017,
    family: "ImmortalFamily",
    power: 242113827,
  },
  {
    server: 1017,
    family: "JurassicPark",
    power: 185308810,
  },
  {
    server: 1018,
    family: "WeAreGay",
    power: 1880006211,
  },
  {
    server: 1018,
    family: "FruityPebbles",
    power: 1535661712,
  },
  {
    server: 1018,
    family: "SnakTopia",
    power: 848890434,
  },
  {
    server: 1018,
    family: "SPORE",
    power: 361101111,
  },
  {
    server: 1018,
    family: "ShroomWarriors",
    power: 335072960,
  },
  {
    server: 1018,
    family: "KingdomShoom",
    power: 247244039,
  },
  {
    server: 1018,
    family: "Sinister",
    power: 245676197,
  },
  {
    server: 1018,
    family: "Vikings",
    power: 189936616,
  },
  {
    server: 1018,
    family: "Void",
    power: 133333924,
  },
  {
    server: 1018,
    family: "Bigshroom",
    power: 116662611,
  },
  {
    server: 1019,
    family: "Moomoo",
    power: 1794266585,
  },
  {
    server: 1019,
    family: "Thicc",
    power: 1204374536,
  },
  {
    server: 1019,
    family: "OnlyFans",
    power: 1083407246,
  },
  {
    server: 1019,
    family: "Synodic",
    power: 381747079,
  },
  {
    server: 1019,
    family: "TheParthenon",
    power: 312828626,
  },
  {
    server: 1019,
    family: "Akatsuki",
    power: 292767287,
  },
  {
    server: 1019,
    family: "Oricalcos",
    power: 221441365,
  },
  {
    server: 1019,
    family: "HighElfs",
    power: 202985468,
  },
  {
    server: 1019,
    family: "GothsUnite",
    power: 166502145,
  },
  {
    server: 1019,
    family: "CrimsonTide",
    power: 165483094,
  },
  {
    server: 1020,
    family: "The_OGs",
    power: 1827096856,
  },
  {
    server: 1020,
    family: "LEGION",
    power: 1099152415,
  },
  {
    server: 1020,
    family: "MagicMushies",
    power: 754994354,
  },
  {
    server: 1020,
    family: "GoldShrooms",
    power: 754910065,
  },
  {
    server: 1020,
    family: "Asheholes",
    power: 585195956,
  },
  {
    server: 1020,
    family: "SporeCookies",
    power: 415767880,
  },
  {
    server: 1020,
    family: "MushMadness",
    power: 308578296,
  },
  {
    server: 1020,
    family: "ShroomGods",
    power: 292234016,
  },
  {
    server: 1020,
    family: "Nazarick",
    power: 229477314,
  },
  {
    server: 1020,
    family: "Shroomies",
    power: 227649605,
  },
  {
    server: 1021,
    family: "420Shrooms",
    power: 1710414591,
  },
  {
    server: 1021,
    family: "MushyRooms",
    power: 1018459702,
  },
  {
    server: 1021,
    family: "Immortals",
    power: 1016746145,
  },
  {
    server: 1021,
    family: "Chromatica",
    power: 431549934,
  },
  {
    server: 1021,
    family: "DemonsInc",
    power: 335660918,
  },
  {
    server: 1021,
    family: "ShroomLand",
    power: 310796687,
  },
  {
    server: 1021,
    family: "FungusRaiders",
    power: 221206755,
  },
  {
    server: 1021,
    family: "ShroomShootas",
    power: 205450266,
  },
  {
    server: 1021,
    family: "Shroomies",
    power: 194168191,
  },
  {
    server: 1021,
    family: "LGBT",
    power: 185967852,
  },
  {
    server: 1022,
    family: "DragonAge",
    power: 1781997748,
  },
  {
    server: 1022,
    family: "shrooms",
    power: 1318933406,
  },
  {
    server: 1022,
    family: "OwO",
    power: 693032580,
  },
  {
    server: 1022,
    family: "JustChilln",
    power: 503466782,
  },
  {
    server: 1022,
    family: "BadDragons",
    power: 274735945,
  },
  {
    server: 1022,
    family: "Valhalla",
    power: 247730728,
  },
  {
    server: 1022,
    family: "MapleTree",
    power: 228629990,
  },
  {
    server: 1022,
    family: "Mushrooms",
    power: 216325413,
  },
  {
    server: 1022,
    family: "MagicMushroom",
    power: 215435021,
  },
  {
    server: 1022,
    family: "weed",
    power: 206786067,
  },
  {
    server: 1023,
    family: "Elite",
    power: 1736139106,
  },
  {
    server: 1023,
    family: "Mush_Supremacy",
    power: 1177898740,
  },
  {
    server: 1023,
    family: "LitShrooms",
    power: 890751539,
  },
  {
    server: 1023,
    family: "Pengu",
    power: 615110024,
  },
  {
    server: 1023,
    family: "ShroomBlades",
    power: 368526287,
  },
  {
    server: 1023,
    family: "MushroomGang",
    power: 287913373,
  },
  {
    server: 1023,
    family: "The_Pickle_Jar",
    power: 246325862,
  },
  {
    server: 1023,
    family: "JujutsuKaisen",
    power: 244659137,
  },
  {
    server: 1023,
    family: "Psychy_shrooms",
    power: 218084159,
  },
  {
    server: 1023,
    family: "Reapers",
    power: 212883983,
  },
  {
    server: 1024,
    family: "Shroomys",
    power: 1791830979,
  },
  {
    server: 1024,
    family: "ArchDevils",
    power: 1236765222,
  },
  {
    server: 1024,
    family: "Misfits",
    power: 1186719587,
  },
  {
    server: 1024,
    family: "ShroomKingdom",
    power: 339727573,
  },
  {
    server: 1024,
    family: "SithShrooms",
    power: 324825738,
  },
  {
    server: 1024,
    family: "THESTRONGEST",
    power: 320023077,
  },
  {
    server: 1024,
    family: "WitchyCoven",
    power: 317504050,
  },
  {
    server: 1024,
    family: "Shrooms",
    power: 298731169,
  },
  {
    server: 1024,
    family: "Shroomieland",
    power: 198161176,
  },
  {
    server: 1024,
    family: "TheOrphanage",
    power: 191623589,
  },
  {
    server: 1025,
    family: "Mushi",
    power: 1791217315,
  },
  {
    server: 1025,
    family: "Voids",
    power: 1344201644,
  },
  {
    server: 1025,
    family: "Remnant",
    power: 1177544025,
  },
  {
    server: 1025,
    family: "Rebels",
    power: 612017217,
  },
  {
    server: 1025,
    family: "HunkyShrooms",
    power: 435503027,
  },
  {
    server: 1025,
    family: "CutieShrooms",
    power: 328612659,
  },
  {
    server: 1025,
    family: "IMMORTAL",
    power: 278931925,
  },
  {
    server: 1025,
    family: "Hollow",
    power: 271965036,
  },
  {
    server: 1025,
    family: "WhoGotShroomz",
    power: 211967590,
  },
  {
    server: 1025,
    family: "Roundtable",
    power: 189303161,
  },
  {
    server: 1026,
    family: "WeHateSnails",
    power: 1426022115,
  },
  {
    server: 1026,
    family: "SnailGang",
    power: 1095515892,
  },
  {
    server: 1026,
    family: "Lampcult",
    power: 652958587,
  },
  {
    server: 1026,
    family: "LazyShrooms",
    power: 445202845,
  },
  {
    server: 1026,
    family: "CHAØ§",
    power: 442147623,
  },
  {
    server: 1026,
    family: "Akatsuki",
    power: 373838417,
  },
  {
    server: 1026,
    family: "TheStonedOnes",
    power: 360119166,
  },
  {
    server: 1026,
    family: "Shroomnite",
    power: 300248445,
  },
  {
    server: 1026,
    family: "BonkSquad",
    power: 289072520,
  },
  {
    server: 1026,
    family: "MUSHROOMS",
    power: 261588563,
  },
  {
    server: 1027,
    family: "SporeHouse",
    power: 1476373103,
  },
  {
    server: 1027,
    family: "Delirium",
    power: 1181078161,
  },
  {
    server: 1027,
    family: "Mazoku",
    power: 921738205,
  },
  {
    server: 1027,
    family: "EliteShrooms",
    power: 571651975,
  },
  {
    server: 1027,
    family: "flame",
    power: 472731769,
  },
  {
    server: 1027,
    family: "Shroomies",
    power: 355102974,
  },
  {
    server: 1027,
    family: "Shroomers",
    power: 263676768,
  },
  {
    server: 1027,
    family: "Shadow",
    power: 241949255,
  },
  {
    server: 1027,
    family: "gasserkingfam",
    power: 206662020,
  },
  {
    server: 1027,
    family: "amogus",
    power: 186547479,
  },
  {
    server: 1028,
    family: "Shrooms",
    power: 1697164455,
  },
  {
    server: 1028,
    family: "BOOTYBLASTERS",
    power: 1505574135,
  },
  {
    server: 1028,
    family: "ForsakenShroom",
    power: 680850635,
  },
  {
    server: 1028,
    family: "Availed",
    power: 432220567,
  },
  {
    server: 1028,
    family: "Valhalla",
    power: 394961652,
  },
  {
    server: 1028,
    family: "ogshrooms",
    power: 310034048,
  },
  {
    server: 1028,
    family: "MVP",
    power: 268131831,
  },
  {
    server: 1028,
    family: "NOTGFY",
    power: 258120633,
  },
  {
    server: 1028,
    family: "Boosted",
    power: 191204098,
  },
  {
    server: 1028,
    family: "Somnus",
    power: 125516675,
  },
  {
    server: 1029,
    family: "Binkies",
    power: 1714055579,
  },
  {
    server: 1029,
    family: "TrippyKids",
    power: 909056741,
  },
  {
    server: 1029,
    family: "MadMushrooms",
    power: 730616861,
  },
  {
    server: 1029,
    family: "JustTheTip",
    power: 353398845,
  },
  {
    server: 1029,
    family: "ShinyShroom",
    power: 344162733,
  },
  {
    server: 1029,
    family: "Oblivion",
    power: 327035182,
  },
  {
    server: 1029,
    family: "Mushrooms",
    power: 313575237,
  },
  {
    server: 1029,
    family: "SHROOMYTIPS",
    power: 247130921,
  },
  {
    server: 1029,
    family: "WintersTears",
    power: 239193383,
  },
  {
    server: 1029,
    family: "Doomshrooms",
    power: 134483687,
  },
  {
    server: 1030,
    family: "IMPACT",
    power: 1407631223,
  },
  {
    server: 1030,
    family: "ShroomerSquad",
    power: 1197064817,
  },
  {
    server: 1030,
    family: "ToadTown",
    power: 472937665,
  },
  {
    server: 1030,
    family: "Shroomicide",
    power: 374650314,
  },
  {
    server: 1030,
    family: "GrimBlossom",
    power: 327159850,
  },
  {
    server: 1030,
    family: "TheGoldencaps",
    power: 270720987,
  },
  {
    server: 1030,
    family: "BoBrOsS",
    power: 259755400,
  },
  {
    server: 1030,
    family: "HyruleShrooms",
    power: 255523655,
  },
  {
    server: 1030,
    family: "Intrepid",
    power: 232769805,
  },
  {
    server: 1030,
    family: "Shroomdoom",
    power: 225358958,
  },
  {
    server: 1031,
    family: "Byakko",
    power: 1825282811,
  },
  {
    server: 1031,
    family: "BlackWingKings",
    power: 1097304452,
  },
  {
    server: 1031,
    family: "Shroomville",
    power: 399637536,
  },
  {
    server: 1031,
    family: "PandaCubs",
    power: 293456045,
  },
  {
    server: 1031,
    family: "Etheria",
    power: 245752173,
  },
  {
    server: 1031,
    family: "Portobello",
    power: 195385705,
  },
  {
    server: 1031,
    family: "DinoNuggies",
    power: 176342966,
  },
  {
    server: 1031,
    family: "OnlyFans",
    power: 163691459,
  },
  {
    server: 1031,
    family: "Zen",
    power: 147687139,
  },
  {
    server: 1031,
    family: "Solo",
    power: 145159169,
  },
  {
    server: 1032,
    family: "Legacy",
    power: 1837421411,
  },
  {
    server: 1032,
    family: "SunsetRavens",
    power: 683048602,
  },
  {
    server: 1032,
    family: "Titans",
    power: 558319844,
  },
  {
    server: 1032,
    family: "shroomies",
    power: 407040089,
  },
  {
    server: 1032,
    family: "Olympians",
    power: 299447852,
  },
  {
    server: 1032,
    family: "Epoch",
    power: 253401747,
  },
  {
    server: 1032,
    family: "Goobers",
    power: 236918077,
  },
  {
    server: 1032,
    family: "Eschaton",
    power: 198177484,
  },
  {
    server: 1032,
    family: "Astral",
    power: 169654247,
  },
  {
    server: 1032,
    family: "CitrusBrunch",
    power: 61162979,
  },
  {
    server: 1033,
    family: "Tempest",
    power: 1567960049,
  },
  {
    server: 1033,
    family: "Nuggets",
    power: 423279706,
  },
  {
    server: 1033,
    family: "BambooForest",
    power: 376114093,
  },
  {
    server: 1033,
    family: "ToastyCoconut",
    power: 310042798,
  },
  {
    server: 1033,
    family: "WompWomp",
    power: 272336025,
  },
  {
    server: 1033,
    family: "HamsterHammond",
    power: 242035258,
  },
  {
    server: 1033,
    family: "Crispy",
    power: 232109568,
  },
  {
    server: 1033,
    family: "Shadow",
    power: 206583899,
  },
  {
    server: 1033,
    family: "Quantum",
    power: 167399561,
  },
  {
    server: 1033,
    family: "SHROOMIES",
    power: 97624084,
  },
  {
    server: 1034,
    family: "Eclipse",
    power: 1414760914,
  },
  {
    server: 1034,
    family: "Ragnarök",
    power: 658495633,
  },
  {
    server: 1034,
    family: "KitsuneShin",
    power: 390883092,
  },
  {
    server: 1034,
    family: "OxC",
    power: 317711109,
  },
  {
    server: 1034,
    family: "MorelSupport",
    power: 191577279,
  },
  {
    server: 1034,
    family: "RatCult",
    power: 171471717,
  },
  {
    server: 1034,
    family: "OnePiece",
    power: 163322249,
  },
  {
    server: 1034,
    family: "StrawHats",
    power: 160086114,
  },
  {
    server: 1034,
    family: "DragonsDen",
    power: 151733896,
  },
  {
    server: 1034,
    family: "ＥＸＯＤＵＳ",
    power: 115643328,
  },
  {
    server: 1035,
    family: "MVP",
    power: 1449794049,
  },
  {
    server: 1035,
    family: "Shroomies",
    power: 427513922,
  },
  {
    server: 1035,
    family: "Overlord",
    power: 374768802,
  },
  {
    server: 1035,
    family: "kittens",
    power: 232133813,
  },
  {
    server: 1035,
    family: "ShroomHunters",
    power: 195270264,
  },
  {
    server: 1035,
    family: "nerd_emoji",
    power: 190631024,
  },
  {
    server: 1035,
    family: "ShroomyStoners",
    power: 160778086,
  },
  {
    server: 1035,
    family: "Solstice",
    power: 157386264,
  },
  {
    server: 1035,
    family: "Goobers",
    power: 103627141,
  },
  {
    server: 1035,
    family: "deadlyshrooms",
    power: 72400330,
  },
  {
    server: 1036,
    family: "ChosenOnes",
    power: 1483629595,
  },
  {
    server: 1036,
    family: "Koifish",
    power: 741569238,
  },
  {
    server: 1036,
    family: "zen",
    power: 379749949,
  },
  {
    server: 1036,
    family: "shroomville",
    power: 321914911,
  },
  {
    server: 1036,
    family: "Moon_Spell",
    power: 245272708,
  },
  {
    server: 1036,
    family: "Kings",
    power: 152644003,
  },
  {
    server: 1036,
    family: "Megamoxxed",
    power: 75948833,
  },
  {
    server: 1036,
    family: "Ducks",
    power: 64893162,
  },
  {
    server: 1036,
    family: "Nation",
    power: 61671100,
  },
  {
    server: 1036,
    family: "IronLotus",
    power: 59940567,
  },
  {
    server: 1037,
    family: "Legion",
    power: 1524395772,
  },
  {
    server: 1037,
    family: "Monkeys",
    power: 779594085,
  },
  {
    server: 1037,
    family: "Shadows",
    power: 581117483,
  },
  {
    server: 1037,
    family: "Nobility",
    power: 342048808,
  },
  {
    server: 1037,
    family: "Deathcaps",
    power: 308438362,
  },
  {
    server: 1037,
    family: "TheMushies",
    power: 266050945,
  },
  {
    server: 1037,
    family: "LoserLover",
    power: 206004967,
  },
  {
    server: 1037,
    family: "ValiantSouls",
    power: 165607813,
  },
  {
    server: 1037,
    family: "ShroomGarden",
    power: 128335115,
  },
  {
    server: 1037,
    family: "Unicorn",
    power: 95534682,
  },
  {
    server: 1038,
    family: "Legends",
    power: 1658136333,
  },
  {
    server: 1038,
    family: "OG",
    power: 457945564,
  },
  {
    server: 1038,
    family: "300ĞŁĄĐÏÀŤÖŔ",
    power: 351174722,
  },
  {
    server: 1038,
    family: "Capybara",
    power: 292843085,
  },
  {
    server: 1038,
    family: "OppaStoppa",
    power: 252247715,
  },
  {
    server: 1038,
    family: "TheGods",
    power: 193251599,
  },
  {
    server: 1038,
    family: "Krakens",
    power: 187402433,
  },
  {
    server: 1038,
    family: "Fungi’s",
    power: 178753236,
  },
  {
    server: 1038,
    family: "Thepotatos",
    power: 122875679,
  },
  {
    server: 1038,
    family: "the7deadlysins",
    power: 67052477,
  },
  {
    server: 1039,
    family: "Mycena",
    power: 1638630457,
  },
  {
    server: 1039,
    family: "LilFluffGang",
    power: 843589679,
  },
  {
    server: 1039,
    family: "MUSHYKINGDOM",
    power: 321496473,
  },
  {
    server: 1039,
    family: "Legion",
    power: 320763004,
  },
  {
    server: 1039,
    family: "PokéGang",
    power: 224949284,
  },
  {
    server: 1039,
    family: "heheman",
    power: 199687905,
  },
  {
    server: 1039,
    family: "Shiitake",
    power: 134109525,
  },
  {
    server: 1039,
    family: "ShroomyEmpire",
    power: 93125970,
  },
  {
    server: 1039,
    family: "SagesDestiny",
    power: 82875321,
  },
  {
    server: 1039,
    family: "FungiFactory",
    power: 34549629,
  },
  {
    server: 1040,
    family: "Ascension",
    power: 1659214402,
  },
  {
    server: 1040,
    family: "McPoyles",
    power: 820915732,
  },
  {
    server: 1040,
    family: "KingsNQueens",
    power: 424333766,
  },
  {
    server: 1040,
    family: "Lostinspace",
    power: 336806020,
  },
  {
    server: 1040,
    family: "InBloom",
    power: 236019773,
  },
  {
    server: 1040,
    family: "InfiniteVoid",
    power: 226523569,
  },
  {
    server: 1040,
    family: "Silly",
    power: 202159267,
  },
  {
    server: 1040,
    family: "Akatsuki",
    power: 106462649,
  },
  {
    server: 1040,
    family: "Immortals",
    power: 101096564,
  },
  {
    server: 1040,
    family: "TheNobody’s",
    power: 76922225,
  },
  {
    server: 1041,
    family: "OnlyShrooms",
    power: 1638115297,
  },
  {
    server: 1041,
    family: "ZoomyShroomy",
    power: 642960916,
  },
  {
    server: 1041,
    family: "Toads",
    power: 556365273,
  },
  {
    server: 1041,
    family: "Strawhats",
    power: 333309215,
  },
  {
    server: 1041,
    family: "FungusMafia",
    power: 138168859,
  },
  {
    server: 1041,
    family: "Deathgods",
    power: 121395116,
  },
  {
    server: 1041,
    family: "Basidiomycota",
    power: 91277225,
  },
  {
    server: 1041,
    family: "Pandas",
    power: 90816334,
  },
  {
    server: 1041,
    family: "SoloLevelling",
    power: 83348702,
  },
  {
    server: 1041,
    family: "BigBoys",
    power: 76908592,
  },
  {
    server: 1042,
    family: "Paradox",
    power: 1443945029,
  },
  {
    server: 1042,
    family: "GodSpeed",
    power: 1379524268,
  },
  {
    server: 1042,
    family: "Silly_lil_guys",
    power: 222182973,
  },
  {
    server: 1042,
    family: "MacrazyClan",
    power: 217304143,
  },
  {
    server: 1042,
    family: "MushroomKaisen",
    power: 179436283,
  },
  {
    server: 1042,
    family: "Illuminati",
    power: 152282161,
  },
  {
    server: 1042,
    family: "Legends",
    power: 129329516,
  },
  {
    server: 1042,
    family: "Tempest",
    power: 112115482,
  },
  {
    server: 1042,
    family: "Chill_House_QC",
    power: 70051247,
  },
  {
    server: 1042,
    family: "DeathCaps",
    power: 67765591,
  },
  {
    server: 1043,
    family: "MilkTax",
    power: 1777496739,
  },
  {
    server: 1043,
    family: "Crimson_Moon",
    power: 907205823,
  },
  {
    server: 1043,
    family: "Fungus",
    power: 669637187,
  },
  {
    server: 1043,
    family: "Elite",
    power: 302333772,
  },
  {
    server: 1043,
    family: "WINNERS",
    power: 230551861,
  },
  {
    server: 1043,
    family: "toptiercooch",
    power: 208555631,
  },
  {
    server: 1043,
    family: "ShadowGlitch",
    power: 111117652,
  },
  {
    server: 1043,
    family: "LaBONBON",
    power: 54512278,
  },
  {
    server: 1043,
    family: "WhiteLotus",
    power: 28722679,
  },
  {
    server: 1043,
    family: "BrkenGlassKids",
    power: 23062350,
  },
  {
    server: 1044,
    family: "Deathcaps",
    power: 1624992313,
  },
  {
    server: 1044,
    family: "NOXIOUS_TRAP",
    power: 501800905,
  },
  {
    server: 1044,
    family: "Mushmellows",
    power: 418588991,
  },
  {
    server: 1044,
    family: "funguys",
    power: 267634293,
  },
  {
    server: 1044,
    family: "CashFamily",
    power: 218885872,
  },
  {
    server: 1044,
    family: "Portobello",
    power: 202939611,
  },
  {
    server: 1044,
    family: "Shrooms",
    power: 194270839,
  },
  {
    server: 1044,
    family: "7DeadySins",
    power: 191408363,
  },
  {
    server: 1044,
    family: "angels",
    power: 168006252,
  },
  {
    server: 1044,
    family: "monkey",
    power: 163793476,
  },
  {
    server: 1045,
    family: "BuffFungi",
    power: 1739853694,
  },
  {
    server: 1045,
    family: "HouseOfBravo",
    power: 588200534,
  },
  {
    server: 1045,
    family: "BuffShrooms",
    power: 416010773,
  },
  {
    server: 1045,
    family: "MudWhistle",
    power: 280488463,
  },
  {
    server: 1045,
    family: "Mythic",
    power: 202571319,
  },
  {
    server: 1045,
    family: "Spartans",
    power: 190383861,
  },
  {
    server: 1045,
    family: "Cult",
    power: 185910263,
  },
  {
    server: 1045,
    family: "DragonFlame",
    power: 103053505,
  },
  {
    server: 1045,
    family: "LazyLRanch",
    power: 58023417,
  },
  {
    server: 1045,
    family: "PCubensis",
    power: 47837037,
  },
  {
    server: 1046,
    family: "FirstFamily",
    power: 1457126467,
  },
  {
    server: 1046,
    family: "Legends",
    power: 576472737,
  },
  {
    server: 1046,
    family: "Shroomland",
    power: 534087361,
  },
  {
    server: 1046,
    family: "Youngbludz",
    power: 274053735,
  },
  {
    server: 1046,
    family: "FriedShroomies",
    power: 215209587,
  },
  {
    server: 1046,
    family: "SHROOMIES",
    power: 172730200,
  },
  {
    server: 1046,
    family: "Mafia",
    power: 164589097,
  },
  {
    server: 1046,
    family: "FuriousFungi",
    power: 147152419,
  },
  {
    server: 1046,
    family: "fairytale",
    power: 136952852,
  },
  {
    server: 1046,
    family: "Fungicides",
    power: 106048744,
  },
  {
    server: 1047,
    family: "Royale",
    power: 1614853331,
  },
  {
    server: 1047,
    family: "SporeSyndicate",
    power: 674939810,
  },
  {
    server: 1047,
    family: "MushroomKingdm",
    power: 603340023,
  },
  {
    server: 1047,
    family: "WhatTheFungus",
    power: 371228829,
  },
  {
    server: 1047,
    family: "LeadToHead",
    power: 173022038,
  },
  {
    server: 1047,
    family: "Wnf",
    power: 139020153,
  },
  {
    server: 1047,
    family: "Adopted",
    power: 54677553,
  },
  {
    server: 1047,
    family: "Lightz",
    power: 41235512,
  },
  {
    server: 1047,
    family: "gonerogue",
    power: 34637733,
  },
  {
    server: 1047,
    family: "FungusAmongus",
    power: 32952305,
  },
  {
    server: 1048,
    family: "TOP1",
    power: 1370953813,
  },
  {
    server: 1048,
    family: "Potatoes",
    power: 1176610520,
  },
  {
    server: 1048,
    family: "Divinity",
    power: 254228400,
  },
  {
    server: 1048,
    family: "TeamMisplay",
    power: 242469047,
  },
  {
    server: 1048,
    family: "Cordyceps",
    power: 215562734,
  },
  {
    server: 1048,
    family: "Teemos",
    power: 190983012,
  },
  {
    server: 1048,
    family: "shadowdemons",
    power: 123351339,
  },
  {
    server: 1048,
    family: "SoaringPhoenix",
    power: 76192563,
  },
  {
    server: 1048,
    family: "Pawg",
    power: 62673549,
  },
  {
    server: 1048,
    family: "BANNANA",
    power: 42611175,
  },
  {
    server: 1049,
    family: "Deadlantis",
    power: 1807565240,
  },
  {
    server: 1049,
    family: "Shroomlantis",
    power: 673644349,
  },
  {
    server: 1049,
    family: "Psilocybins",
    power: 366844822,
  },
  {
    server: 1049,
    family: "JJK",
    power: 248130925,
  },
  {
    server: 1049,
    family: "Ronin",
    power: 236032133,
  },
  {
    server: 1049,
    family: "Lunaris",
    power: 206399584,
  },
  {
    server: 1049,
    family: "FairyTail",
    power: 200424703,
  },
  {
    server: 1049,
    family: "BEANS",
    power: 190906801,
  },
  {
    server: 1049,
    family: "GraveDiggers",
    power: 128046763,
  },
  {
    server: 1049,
    family: "TapTapShrooms",
    power: 86945459,
  },
  {
    server: 1050,
    family: "ShroomSquad",
    power: 1627820874,
  },
  {
    server: 1050,
    family: "StrawHats",
    power: 445664754,
  },
  {
    server: 1050,
    family: "TheFoxxFam",
    power: 333754526,
  },
  {
    server: 1050,
    family: "ninja",
    power: 274272106,
  },
  {
    server: 1050,
    family: "immortal4242",
    power: 246004996,
  },
  {
    server: 1050,
    family: "Legendz",
    power: 222686654,
  },
  {
    server: 1050,
    family: "MagicShrooms",
    power: 185309654,
  },
  {
    server: 1050,
    family: "🦝",
    power: 174734782,
  },
  {
    server: 1050,
    family: "VietNam",
    power: 138062701,
  },
  {
    server: 1050,
    family: "Smokeweed",
    power: 114614607,
  },
  {
    server: 1051,
    family: "നythril",
    power: 1795714556,
  },
  {
    server: 1051,
    family: "mushies",
    power: 440880788,
  },
  {
    server: 1051,
    family: "Shroomies",
    power: 340892737,
  },
  {
    server: 1051,
    family: "The_Ballers",
    power: 275416969,
  },
  {
    server: 1051,
    family: "Weebs",
    power: 245513218,
  },
  {
    server: 1051,
    family: "immortalized",
    power: 239976236,
  },
  {
    server: 1051,
    family: "ShroomArmy",
    power: 224621539,
  },
  {
    server: 1051,
    family: "Radient",
    power: 177354183,
  },
  {
    server: 1051,
    family: "TheCursedFam",
    power: 126319504,
  },
  {
    server: 1051,
    family: "Soulfire",
    power: 125582834,
  },
  {
    server: 1052,
    family: "Bone",
    power: 1695842921,
  },
  {
    server: 1052,
    family: "ToadFamily",
    power: 376420622,
  },
  {
    server: 1052,
    family: "FunGuys",
    power: 329850108,
  },
  {
    server: 1052,
    family: "Mushys",
    power: 292595660,
  },
  {
    server: 1052,
    family: "snozberries",
    power: 174401046,
  },
  {
    server: 1052,
    family: "SinfulSaints",
    power: 167591767,
  },
  {
    server: 1052,
    family: "bubbles",
    power: 118405713,
  },
  {
    server: 1052,
    family: "MushroomCult",
    power: 112680234,
  },
  {
    server: 1052,
    family: "Greyhawk",
    power: 109264448,
  },
  {
    server: 1052,
    family: "Sori",
    power: 34866198,
  },
  {
    server: 1053,
    family: "Akatsuki",
    power: 1527525852,
  },
  {
    server: 1053,
    family: "Shroom_Kings",
    power: 566064364,
  },
  {
    server: 1053,
    family: "Erm",
    power: 460192486,
  },
  {
    server: 1053,
    family: "Fortuitous",
    power: 287165390,
  },
  {
    server: 1053,
    family: "mushrooms",
    power: 238410779,
  },
  {
    server: 1053,
    family: "Toadstools",
    power: 168481112,
  },
  {
    server: 1053,
    family: "Sporeson",
    power: 150150649,
  },
  {
    server: 1053,
    family: "Psilocybin",
    power: 119564607,
  },
  {
    server: 1053,
    family: "Sporstuction",
    power: 104217931,
  },
  {
    server: 1053,
    family: "HardcoreSpores",
    power: 103396073,
  },
  {
    server: 1054,
    family: "Nebula",
    power: 1277775262,
  },
  {
    server: 1054,
    family: "Day1",
    power: 406540569,
  },
  {
    server: 1054,
    family: "Fortnite",
    power: 355095664,
  },
  {
    server: 1054,
    family: "Fungi’s",
    power: 325008371,
  },
  {
    server: 1054,
    family: "ez",
    power: 298030664,
  },
  {
    server: 1054,
    family: "Ashen",
    power: 263501928,
  },
  {
    server: 1054,
    family: "Shrooms",
    power: 195237218,
  },
  {
    server: 1054,
    family: "Canada",
    power: 172384086,
  },
  {
    server: 1054,
    family: "Ogs",
    power: 151538849,
  },
  {
    server: 1054,
    family: "Kil’Garden",
    power: 149188231,
  },
  {
    server: 1055,
    family: "MUSHROOMS",
    power: 1787665947,
  },
  {
    server: 1055,
    family: "Strawhats",
    power: 734385432,
  },
  {
    server: 1055,
    family: "Psilocybin",
    power: 362703237,
  },
  {
    server: 1055,
    family: "Shroomington",
    power: 269510313,
  },
  {
    server: 1055,
    family: "ShroomArmy",
    power: 242871738,
  },
  {
    server: 1055,
    family: "ToadsVilliage",
    power: 230087858,
  },
  {
    server: 1055,
    family: "chill",
    power: 98209609,
  },
  {
    server: 1055,
    family: "QuietHills",
    power: 49302878,
  },
  {
    server: 1055,
    family: "AlaskaMafia",
    power: 40970385,
  },
  {
    server: 1055,
    family: "Portalgods",
    power: 39310312,
  },
  {
    server: 1056,
    family: "Drowsy",
    power: 1661659473,
  },
  {
    server: 1056,
    family: "Proletarian",
    power: 323799916,
  },
  {
    server: 1056,
    family: "LandOfGods",
    power: 289781082,
  },
  {
    server: 1056,
    family: "Da_Bois",
    power: 194325786,
  },
  {
    server: 1056,
    family: "Tempest",
    power: 160870558,
  },
  {
    server: 1056,
    family: "Lions_Mane",
    power: 146311180,
  },
  {
    server: 1056,
    family: "doomshrooms",
    power: 130888883,
  },
  {
    server: 1056,
    family: "Deathcap",
    power: 126550045,
  },
  {
    server: 1056,
    family: "Climbingup",
    power: 123357174,
  },
  {
    server: 1056,
    family: "Broken_Rice",
    power: 109976437,
  },
  {
    server: 1057,
    family: "EKX",
    power: 1354052753,
  },
  {
    server: 1057,
    family: "Fungicide",
    power: 612175763,
  },
  {
    server: 1057,
    family: "CreamyShrooms",
    power: 484921515,
  },
  {
    server: 1057,
    family: "WeebNation",
    power: 328398235,
  },
  {
    server: 1057,
    family: "Trashy",
    power: 249944589,
  },
  {
    server: 1057,
    family: "MushroomEmpir",
    power: 229481188,
  },
  {
    server: 1057,
    family: "ShroombaTribe",
    power: 163090424,
  },
  {
    server: 1057,
    family: "Homos",
    power: 151172753,
  },
  {
    server: 1057,
    family: "Koolkidsklub",
    power: 136017744,
  },
  {
    server: 1057,
    family: "ChillShrooms",
    power: 106526401,
  },
  {
    server: 1058,
    family: "Uchiha",
    power: 1754114900,
  },
  {
    server: 1058,
    family: "DeathCaps",
    power: 560501667,
  },
  {
    server: 1058,
    family: "Shroomies",
    power: 273232322,
  },
  {
    server: 1058,
    family: "Ace2Aces",
    power: 252656173,
  },
  {
    server: 1058,
    family: "VoLocity",
    power: 188639876,
  },
  {
    server: 1058,
    family: "VOID",
    power: 167397142,
  },
  {
    server: 1058,
    family: "ABYSS",
    power: 160195071,
  },
  {
    server: 1058,
    family: "God",
    power: 120452019,
  },
  {
    server: 1058,
    family: "TheCozyCafe",
    power: 47791256,
  },
  {
    server: 1058,
    family: "Trickster",
    power: 41231297,
  },
  {
    server: 1059,
    family: "ETERNALS",
    power: 1441483183,
  },
  {
    server: 1059,
    family: "DragonEmpire",
    power: 679093078,
  },
  {
    server: 1059,
    family: "Sentinels",
    power: 323105028,
  },
  {
    server: 1059,
    family: "Lesgooo",
    power: 229500146,
  },
  {
    server: 1059,
    family: "GOD",
    power: 221522302,
  },
  {
    server: 1059,
    family: "strungout_cats",
    power: 192982811,
  },
  {
    server: 1059,
    family: "Opium",
    power: 143627099,
  },
  {
    server: 1059,
    family: "Pfutzengilde",
    power: 137382494,
  },
  {
    server: 1059,
    family: "Spore",
    power: 127547592,
  },
  {
    server: 1059,
    family: "PandaShroomies",
    power: 90588344,
  },
  {
    server: 1060,
    family: "totsdom",
    power: 1355913707,
  },
  {
    server: 1060,
    family: "2C4U",
    power: 947872498,
  },
  {
    server: 1060,
    family: "Legion",
    power: 301334283,
  },
  {
    server: 1060,
    family: "titan",
    power: 268926245,
  },
  {
    server: 1060,
    family: "JustForFun",
    power: 98774735,
  },
  {
    server: 1060,
    family: "Whalesquad",
    power: 63548838,
  },
  {
    server: 1060,
    family: "SpookySquad",
    power: 36064854,
  },
  {
    server: 1060,
    family: "FrijolesFC",
    power: 30263942,
  },
  {
    server: 1060,
    family: "Helldivers",
    power: 29446779,
  },
  {
    server: 1060,
    family: "Shroomed",
    power: 28346902,
  },
  {
    server: 1061,
    family: "Genesis",
    power: 1683820199,
  },
  {
    server: 1061,
    family: "Gladiators",
    power: 292139107,
  },
  {
    server: 1061,
    family: "Vindicated",
    power: 274464912,
  },
  {
    server: 1061,
    family: "ArchAngels",
    power: 242875815,
  },
  {
    server: 1061,
    family: "Halloweentown",
    power: 240418165,
  },
  {
    server: 1061,
    family: "KoiFishes",
    power: 238106137,
  },
  {
    server: 1061,
    family: "GreyFruitGuild",
    power: 185398503,
  },
  {
    server: 1061,
    family: "TheFungi",
    power: 168826470,
  },
  {
    server: 1061,
    family: "Mandalorians",
    power: 111041060,
  },
  {
    server: 1061,
    family: "ShitakeSaiyans",
    power: 63163299,
  },
  {
    server: 1062,
    family: "Beggars",
    power: 1646734266,
  },
  {
    server: 1062,
    family: "Cutecats",
    power: 579832445,
  },
  {
    server: 1062,
    family: "Temptation",
    power: 389815747,
  },
  {
    server: 1062,
    family: "grimdragons",
    power: 197662538,
  },
  {
    server: 1062,
    family: "StonerClub",
    power: 196583285,
  },
  {
    server: 1062,
    family: "Scarlet_cup",
    power: 173821343,
  },
  {
    server: 1062,
    family: "Mushrooms",
    power: 168634212,
  },
  {
    server: 1062,
    family: "YummyRamen",
    power: 144125439,
  },
  {
    server: 1062,
    family: "Furia",
    power: 116947443,
  },
  {
    server: 1062,
    family: "Doom_Shrooms",
    power: 112479193,
  },
  {
    server: 1063,
    family: "7eaven",
    power: 1376128048,
  },
  {
    server: 1063,
    family: "ManicShrooms",
    power: 452564802,
  },
  {
    server: 1063,
    family: "ApocalypsePets",
    power: 394935340,
  },
  {
    server: 1063,
    family: "hehe",
    power: 283200890,
  },
  {
    server: 1063,
    family: "Aurous",
    power: 232192261,
  },
  {
    server: 1063,
    family: "Shroom",
    power: 172483972,
  },
  {
    server: 1063,
    family: "crybbyfam",
    power: 138008368,
  },
  {
    server: 1063,
    family: "TheCoalition",
    power: 67192999,
  },
  {
    server: 1063,
    family: "PrEDAOC",
    power: 55154507,
  },
  {
    server: 1063,
    family: "TheScrapYard",
    power: 52299690,
  },
  {
    server: 1064,
    family: "BlackLotus",
    power: 1548443246,
  },
  {
    server: 1064,
    family: "WhiteLotus",
    power: 491875821,
  },
  {
    server: 1064,
    family: "ZoomShrooms",
    power: 317714281,
  },
  {
    server: 1064,
    family: "FurryMushrooms",
    power: 255067496,
  },
  {
    server: 1064,
    family: "WELOVESHROOMS",
    power: 242709209,
  },
  {
    server: 1064,
    family: "TempleOfAthena",
    power: 185128428,
  },
  {
    server: 1064,
    family: "koinoyokan",
    power: 136571415,
  },
  {
    server: 1064,
    family: "Theawesomest1",
    power: 119995000,
  },
  {
    server: 1064,
    family: "MementoOfWar",
    power: 87303702,
  },
  {
    server: 1064,
    family: "Ohana",
    power: 69592912,
  },
  {
    server: 1065,
    family: "TheBestBuddies",
    power: 1250382815,
  },
  {
    server: 1065,
    family: "EXILED",
    power: 389754402,
  },
  {
    server: 1065,
    family: "MagicMushies",
    power: 339843783,
  },
  {
    server: 1065,
    family: "WolfPack",
    power: 330199091,
  },
  {
    server: 1065,
    family: "MagicShroomies",
    power: 312352489,
  },
  {
    server: 1065,
    family: "Shroomies",
    power: 240783687,
  },
  {
    server: 1065,
    family: "FürDieEhre",
    power: 158857844,
  },
  {
    server: 1065,
    family: "GaygarPokemon",
    power: 98944952,
  },
  {
    server: 1065,
    family: "BamBoom",
    power: 58174118,
  },
  {
    server: 1065,
    family: "Smiski",
    power: 39640913,
  },
  {
    server: 1066,
    family: "Eden",
    power: 1783929316,
  },
  {
    server: 1066,
    family: "2Much4You",
    power: 521518999,
  },
  {
    server: 1066,
    family: "TheGarden",
    power: 441842748,
  },
  {
    server: 1066,
    family: "Gravity",
    power: 329690986,
  },
  {
    server: 1066,
    family: "ShroomySages",
    power: 266228354,
  },
  {
    server: 1066,
    family: "og",
    power: 182951702,
  },
  {
    server: 1066,
    family: "Shroomeri",
    power: 176421202,
  },
  {
    server: 1066,
    family: "novastar",
    power: 169201594,
  },
  {
    server: 1066,
    family: "Juicygobble",
    power: 84837986,
  },
  {
    server: 1066,
    family: "Shrooms",
    power: 61805573,
  },
  {
    server: 1067,
    family: "Hellguard",
    power: 1450610290,
  },
  {
    server: 1067,
    family: "Wendys",
    power: 371024910,
  },
  {
    server: 1067,
    family: "Shroom",
    power: 296653272,
  },
  {
    server: 1067,
    family: "Rivals",
    power: 149568930,
  },
  {
    server: 1067,
    family: "Weed",
    power: 132978323,
  },
  {
    server: 1067,
    family: "gangnem",
    power: 125011733,
  },
  {
    server: 1067,
    family: "SautéShroomies",
    power: 75385769,
  },
  {
    server: 1067,
    family: "Truckers",
    power: 31790633,
  },
  {
    server: 1067,
    family: "Morelands",
    power: 20466934,
  },
  {
    server: 1067,
    family: "GoofyGoobers",
    power: 15827850,
  },
  {
    server: 1068,
    family: "BurningDragons",
    power: 1580289339,
  },
  {
    server: 1068,
    family: "ŞþðřëŞÿñďïċäťë",
    power: 586082762,
  },
  {
    server: 1068,
    family: "LateNighters",
    power: 347238474,
  },
  {
    server: 1068,
    family: "TheShrooms",
    power: 173107440,
  },
  {
    server: 1068,
    family: "GameWarriorS",
    power: 162357007,
  },
  {
    server: 1068,
    family: "ShroomKings",
    power: 157785512,
  },
  {
    server: 1068,
    family: "YoureShroomed",
    power: 149825768,
  },
  {
    server: 1068,
    family: "BloodDragons",
    power: 106128888,
  },
  {
    server: 1068,
    family: "Bruh_team",
    power: 103625366,
  },
  {
    server: 1068,
    family: "TheBombers",
    power: 34779250,
  },
  {
    server: 1069,
    family: "TheShroomans",
    power: 1355745083,
  },
  {
    server: 1069,
    family: "FunGuys",
    power: 410286386,
  },
  {
    server: 1069,
    family: "Fairytale",
    power: 357289879,
  },
  {
    server: 1069,
    family: "Godshrooms",
    power: 226648575,
  },
  {
    server: 1069,
    family: "TheMonsterMush",
    power: 196093575,
  },
  {
    server: 1069,
    family: "GoDz",
    power: 164693336,
  },
  {
    server: 1069,
    family: "Shroomin’",
    power: 126711642,
  },
  {
    server: 1069,
    family: "Wevewevewevewe",
    power: 48724767,
  },
  {
    server: 1069,
    family: "nytrokitty",
    power: 40582329,
  },
  {
    server: 1069,
    family: "Psilocybin",
    power: 36116617,
  },
  {
    server: 1070,
    family: "KDAR",
    power: 1393958983,
  },
  {
    server: 1070,
    family: "Parasitic",
    power: 489887676,
  },
  {
    server: 1070,
    family: "Just4Fun",
    power: 281190217,
  },
  {
    server: 1070,
    family: "Nazarick",
    power: 178871805,
  },
  {
    server: 1070,
    family: "JujuShroom",
    power: 145173519,
  },
  {
    server: 1070,
    family: "HighLife",
    power: 96646956,
  },
  {
    server: 1070,
    family: "Hedliane",
    power: 90283307,
  },
  {
    server: 1070,
    family: "LEGION",
    power: 67871001,
  },
  {
    server: 1070,
    family: "The_RoadDawgs",
    power: 39776470,
  },
  {
    server: 1070,
    family: "Weirdz",
    power: 25383281,
  },
  {
    server: 1071,
    family: "HarmFarm",
    power: 1605831664,
  },
  {
    server: 1071,
    family: "Excalivus",
    power: 751637097,
  },
  {
    server: 1071,
    family: "Enoki",
    power: 201448640,
  },
  {
    server: 1071,
    family: "Gang",
    power: 163487501,
  },
  {
    server: 1071,
    family: "TheUnionHall",
    power: 159231915,
  },
  {
    server: 1071,
    family: "WeLuvShrooms",
    power: 148342143,
  },
  {
    server: 1071,
    family: "FungusAmongUs",
    power: 54326569,
  },
  {
    server: 1071,
    family: "ShroomGrower",
    power: 47332801,
  },
  {
    server: 1071,
    family: "LokiSpiders",
    power: 38720726,
  },
  {
    server: 1071,
    family: "TheFirst",
    power: 36608146,
  },
  {
    server: 1072,
    family: "Mushy",
    power: 1481876773,
  },
  {
    server: 1072,
    family: "TheGang🤫",
    power: 274920022,
  },
  {
    server: 1072,
    family: "Mushis",
    power: 266067947,
  },
  {
    server: 1072,
    family: "shroom",
    power: 246096739,
  },
  {
    server: 1072,
    family: "OVERKILLERS",
    power: 240888264,
  },
  {
    server: 1072,
    family: "Lotus",
    power: 177550796,
  },
  {
    server: 1072,
    family: "Bsquared",
    power: 129745008,
  },
  {
    server: 1072,
    family: "MapleTree",
    power: 94640120,
  },
  {
    server: 1072,
    family: "Akatsuki",
    power: 80901431,
  },
  {
    server: 1072,
    family: "CHAMPIONS",
    power: 51741885,
  },
  {
    server: 1073,
    family: "Envy",
    power: 1562666543,
  },
  {
    server: 1073,
    family: "Vongola",
    power: 422463692,
  },
  {
    server: 1073,
    family: "GodTier",
    power: 398147492,
  },
  {
    server: 1073,
    family: "ItzLemonzzz",
    power: 302871759,
  },
  {
    server: 1073,
    family: "High_Lyfe",
    power: 241348729,
  },
  {
    server: 1073,
    family: "UchihaClan",
    power: 204767003,
  },
  {
    server: 1073,
    family: "Icons",
    power: 200273575,
  },
  {
    server: 1073,
    family: "ShroomZone",
    power: 143175801,
  },
  {
    server: 1073,
    family: "HashDabs",
    power: 82224341,
  },
  {
    server: 1073,
    family: "Kleptomaniacs",
    power: 58151302,
  },
  {
    server: 1074,
    family: "Fools",
    power: 1644491108,
  },
  {
    server: 1074,
    family: "Redemption",
    power: 799755834,
  },
  {
    server: 1074,
    family: "Shadow_Reapers",
    power: 311959441,
  },
  {
    server: 1074,
    family: "DemonSlayer",
    power: 236619726,
  },
  {
    server: 1074,
    family: "uwu",
    power: 231960392,
  },
  {
    server: 1074,
    family: "Bloodlust",
    power: 199554203,
  },
  {
    server: 1074,
    family: "Mushroomland",
    power: 105834782,
  },
  {
    server: 1074,
    family: "SharkArmy",
    power: 99059148,
  },
  {
    server: 1074,
    family: "Champinon",
    power: 37129213,
  },
  {
    server: 1074,
    family: "COOKIES4life",
    power: 33073671,
  },
  {
    server: 1075,
    family: "Superiore",
    power: 1455217428,
  },
  {
    server: 1075,
    family: "Requiem",
    power: 1007011796,
  },
  {
    server: 1075,
    family: "CobraChickens",
    power: 403480653,
  },
  {
    server: 1075,
    family: "Goat_Town",
    power: 396687991,
  },
  {
    server: 1075,
    family: "Squishy",
    power: 235342983,
  },
  {
    server: 1075,
    family: "Ghosts",
    power: 161510591,
  },
  {
    server: 1075,
    family: "Pulps",
    power: 138767777,
  },
  {
    server: 1075,
    family: "Wolfpack",
    power: 54375960,
  },
  {
    server: 1075,
    family: "GoldenTeachers",
    power: 33036319,
  },
  {
    server: 1075,
    family: "pickles",
    power: 30361419,
  },
  {
    server: 1076,
    family: "ELITE",
    power: 1200076219,
  },
  {
    server: 1076,
    family: "Enoki",
    power: 865937364,
  },
  {
    server: 1076,
    family: "Killjoy",
    power: 728099155,
  },
  {
    server: 1076,
    family: "Notorious",
    power: 523368686,
  },
  {
    server: 1076,
    family: "GlitchMob",
    power: 496430716,
  },
  {
    server: 1076,
    family: "StrawHatCrew",
    power: 203696171,
  },
  {
    server: 1076,
    family: "KingdomOfFungi",
    power: 199959661,
  },
  {
    server: 1076,
    family: "Halfpence",
    power: 131748248,
  },
  {
    server: 1076,
    family: "disciples",
    power: 74348642,
  },
  {
    server: 1076,
    family: "Legends",
    power: 39201009,
  },
  {
    server: 1077,
    family: "MonkeyBusiness",
    power: 1786989337,
  },
  {
    server: 1077,
    family: "ShroomMates",
    power: 566897464,
  },
  {
    server: 1077,
    family: "SmurfsVillage",
    power: 343900377,
  },
  {
    server: 1077,
    family: "ShroomDynasty",
    power: 325025190,
  },
  {
    server: 1077,
    family: "Life",
    power: 251978428,
  },
  {
    server: 1077,
    family: "cigarettes",
    power: 249790849,
  },
  {
    server: 1077,
    family: "shroomies",
    power: 233240975,
  },
  {
    server: 1077,
    family: "MyceliumMates",
    power: 230585338,
  },
  {
    server: 1077,
    family: "LomGods",
    power: 136293578,
  },
  {
    server: 1077,
    family: "Watchers",
    power: 134068544,
  },
  {
    server: 1078,
    family: "Angels",
    power: 1520900904,
  },
  {
    server: 1078,
    family: "Spore",
    power: 690718192,
  },
  {
    server: 1078,
    family: "DEMONS",
    power: 520909376,
  },
  {
    server: 1078,
    family: "EMS",
    power: 332302546,
  },
  {
    server: 1078,
    family: "ShroomKingdom",
    power: 156765167,
  },
  {
    server: 1078,
    family: "4X¥",
    power: 143378086,
  },
  {
    server: 1078,
    family: "TheFunGuys",
    power: 106352192,
  },
  {
    server: 1078,
    family: "shroomlife",
    power: 67993693,
  },
  {
    server: 1078,
    family: "SwiftyyShrooms",
    power: 67330866,
  },
  {
    server: 1078,
    family: "SmokersTable",
    power: 66981371,
  },
  {
    server: 1079,
    family: "SERAPHIM",
    power: 1759603958,
  },
  {
    server: 1079,
    family: "Chaotica",
    power: 1011648716,
  },
  {
    server: 1079,
    family: "Akatsuki",
    power: 356559145,
  },
  {
    server: 1079,
    family: "Fairytail",
    power: 341793232,
  },
  {
    server: 1079,
    family: "MadMushrooms",
    power: 269183040,
  },
  {
    server: 1079,
    family: "Invictus",
    power: 238849308,
  },
  {
    server: 1079,
    family: "Bobsarmy",
    power: 209953478,
  },
  {
    server: 1079,
    family: "limarooms",
    power: 200745783,
  },
  {
    server: 1079,
    family: "Dunghouse",
    power: 130891574,
  },
  {
    server: 1079,
    family: "Tapei",
    power: 82839786,
  },
  {
    server: 1080,
    family: "GoldenShrooms",
    power: 1796933214,
  },
  {
    server: 1080,
    family: "Ducks",
    power: 990066089,
  },
  {
    server: 1080,
    family: "TheDarKRose",
    power: 363925369,
  },
  {
    server: 1080,
    family: "FurrySpores",
    power: 273551712,
  },
  {
    server: 1080,
    family: "SithEmpire",
    power: 231474528,
  },
  {
    server: 1080,
    family: "SmokeBuddies",
    power: 206327914,
  },
  {
    server: 1080,
    family: "Mushromies",
    power: 204214178,
  },
  {
    server: 1080,
    family: "Winterfell",
    power: 150050080,
  },
  {
    server: 1080,
    family: "Genesis",
    power: 55332392,
  },
  {
    server: 1080,
    family: "Unwell",
    power: 39927766,
  },
  {
    server: 1081,
    family: "GoofTroops",
    power: 1697391784,
  },
  {
    server: 1081,
    family: "Shroominators",
    power: 455131381,
  },
  {
    server: 1081,
    family: "Shroomies",
    power: 345965217,
  },
  {
    server: 1081,
    family: "Mushroom",
    power: 345231600,
  },
  {
    server: 1081,
    family: "OrphanBros",
    power: 270648321,
  },
  {
    server: 1081,
    family: "Shrooms",
    power: 248566405,
  },
  {
    server: 1081,
    family: "FrozenHeartz",
    power: 147884090,
  },
  {
    server: 1081,
    family: "Caffinated",
    power: 140029017,
  },
  {
    server: 1081,
    family: "Lords",
    power: 138518284,
  },
  {
    server: 1081,
    family: "TheGreats",
    power: 134777762,
  },
  {
    server: 1082,
    family: "Forsaken",
    power: 1569103049,
  },
  {
    server: 1082,
    family: "SwordArtOnline",
    power: 589030219,
  },
  {
    server: 1082,
    family: "APEX",
    power: 331117684,
  },
  {
    server: 1082,
    family: "MagicShrooms",
    power: 281640086,
  },
  {
    server: 1082,
    family: "Laughingcoffin",
    power: 264677072,
  },
  {
    server: 1082,
    family: "StrawHats",
    power: 186570404,
  },
  {
    server: 1082,
    family: "ShroomzRus",
    power: 162086019,
  },
  {
    server: 1082,
    family: "iShowShrooms",
    power: 154823652,
  },
  {
    server: 1082,
    family: "BlueOyster",
    power: 107837560,
  },
  {
    server: 1082,
    family: "StormyWeather",
    power: 70725947,
  },
  {
    server: 1083,
    family: "Rejects",
    power: 1698922674,
  },
  {
    server: 1083,
    family: "NANDOSfamily",
    power: 407059886,
  },
  {
    server: 1083,
    family: "Wizards",
    power: 395241916,
  },
  {
    server: 1083,
    family: "DarkArmy",
    power: 358457223,
  },
  {
    server: 1083,
    family: "SporePlay",
    power: 319583641,
  },
  {
    server: 1083,
    family: "SquirtleSquad",
    power: 269937803,
  },
  {
    server: 1083,
    family: "LUVNTIDDIES",
    power: 247873816,
  },
  {
    server: 1083,
    family: "Doominator",
    power: 126583678,
  },
  {
    server: 1083,
    family: "Quantum",
    power: 106292728,
  },
  {
    server: 1083,
    family: "Bru",
    power: 97021712,
  },
  {
    server: 1084,
    family: "SGB",
    power: 1726682932,
  },
  {
    server: 1084,
    family: "Essence",
    power: 610307669,
  },
  {
    server: 1084,
    family: "MythicalKings",
    power: 319722724,
  },
  {
    server: 1084,
    family: "FALLEN",
    power: 261561355,
  },
  {
    server: 1084,
    family: "SmokedShrooms",
    power: 174133584,
  },
  {
    server: 1084,
    family: "evil",
    power: 163319204,
  },
  {
    server: 1084,
    family: "Death_Caps",
    power: 132027871,
  },
  {
    server: 1084,
    family: "Hope",
    power: 112041421,
  },
  {
    server: 1084,
    family: "Mushrooms",
    power: 108685017,
  },
  {
    server: 1084,
    family: "Ewok_Familia",
    power: 75304704,
  },
  {
    server: 1085,
    family: "Atrium",
    power: 1723664028,
  },
  {
    server: 1085,
    family: "Psychedelic",
    power: 476481161,
  },
  {
    server: 1085,
    family: "MagicMushrooms",
    power: 381731800,
  },
  {
    server: 1085,
    family: "Fellas",
    power: 290515318,
  },
  {
    server: 1085,
    family: "SHADOWGHOST",
    power: 273987531,
  },
  {
    server: 1085,
    family: "Polarbear",
    power: 223318607,
  },
  {
    server: 1085,
    family: "Apathy",
    power: 222707803,
  },
  {
    server: 1085,
    family: "Psilovibin",
    power: 174903692,
  },
  {
    server: 1085,
    family: "Sakeshroom",
    power: 168263303,
  },
  {
    server: 1085,
    family: "PinkPosse",
    power: 122672795,
  },
  {
    server: 1086,
    family: "WhiteLotus",
    power: 1538411738,
  },
  {
    server: 1086,
    family: "420club",
    power: 1070307854,
  },
  {
    server: 1086,
    family: "Nightshades",
    power: 379904291,
  },
  {
    server: 1086,
    family: "Robonia",
    power: 257602114,
  },
  {
    server: 1086,
    family: "chaos",
    power: 243167347,
  },
  {
    server: 1086,
    family: "Yamato",
    power: 207761248,
  },
  {
    server: 1086,
    family: "TheBurrow",
    power: 144870127,
  },
  {
    server: 1086,
    family: "ApocalypseMush",
    power: 116802773,
  },
  {
    server: 1086,
    family: "MushMen",
    power: 58659115,
  },
  {
    server: 1086,
    family: "Darkphoenix052",
    power: 51655809,
  },
  {
    server: 1087,
    family: "808Kingdom",
    power: 1220124196,
  },
  {
    server: 1087,
    family: "Debauchery",
    power: 439147232,
  },
  {
    server: 1087,
    family: "LegendOfShroom",
    power: 416918170,
  },
  {
    server: 1087,
    family: "TheFunGuys",
    power: 367481706,
  },
  {
    server: 1087,
    family: "MONSTERSof420",
    power: 283579466,
  },
  {
    server: 1087,
    family: "Kuriboh",
    power: 226746644,
  },
  {
    server: 1087,
    family: "Togoodtobetrue",
    power: 170642453,
  },
  {
    server: 1087,
    family: "Wallstreetbets",
    power: 121379480,
  },
  {
    server: 1087,
    family: "Buh",
    power: 88720687,
  },
  {
    server: 1087,
    family: "TransRights",
    power: 86602447,
  },
  {
    server: 1088,
    family: "LostSouls",
    power: 1671706492,
  },
  {
    server: 1088,
    family: "DarkKnights",
    power: 297204893,
  },
  {
    server: 1088,
    family: "Rocka",
    power: 293425610,
  },
  {
    server: 1088,
    family: "darkened420",
    power: 266208064,
  },
  {
    server: 1088,
    family: "Crackheads",
    power: 264754390,
  },
  {
    server: 1088,
    family: "MUSHROOMKFCLAN",
    power: 258502406,
  },
  {
    server: 1088,
    family: "Hanahaki",
    power: 244036660,
  },
  {
    server: 1088,
    family: "Ravenclaw",
    power: 139414349,
  },
  {
    server: 1088,
    family: "Indoctrinated",
    power: 121395329,
  },
  {
    server: 1088,
    family: "HazbinFamily",
    power: 110313085,
  },
  {
    server: 1089,
    family: "Afterlife",
    power: 1155889911,
  },
  {
    server: 1089,
    family: "LaughingCoffin",
    power: 1150951765,
  },
  {
    server: 1089,
    family: "Haven",
    power: 542051919,
  },
  {
    server: 1089,
    family: "BLANK",
    power: 252577654,
  },
  {
    server: 1089,
    family: "ThatWhtSheSaid",
    power: 228091235,
  },
  {
    server: 1089,
    family: "SuperFamily",
    power: 198480902,
  },
  {
    server: 1089,
    family: "Mandalore",
    power: 185116073,
  },
  {
    server: 1089,
    family: "mcpuffins",
    power: 160308864,
  },
  {
    server: 1089,
    family: "SoulOfShrooms",
    power: 143963669,
  },
  {
    server: 1089,
    family: "FDP",
    power: 81600905,
  },
  {
    server: 1090,
    family: "BigOlYellaWood",
    power: 1695380352,
  },
  {
    server: 1090,
    family: "Disney",
    power: 1277614995,
  },
  {
    server: 1090,
    family: "ShadyFields",
    power: 441423223,
  },
  {
    server: 1090,
    family: "MooshMooshFam",
    power: 260766789,
  },
  {
    server: 1090,
    family: "ALMIGHTY",
    power: 135322398,
  },
  {
    server: 1090,
    family: "Fungi",
    power: 91762640,
  },
  {
    server: 1090,
    family: "Casual",
    power: 63886719,
  },
  {
    server: 1090,
    family: "Infected",
    power: 54872557,
  },
  {
    server: 1090,
    family: "FamilySpore",
    power: 53950046,
  },
  {
    server: 1090,
    family: "LaidBackGamers",
    power: 21993542,
  },
  {
    server: 1091,
    family: "Cafe",
    power: 1612179654,
  },
  {
    server: 1091,
    family: "Chill",
    power: 1111061134,
  },
  {
    server: 1091,
    family: "ThaKillers",
    power: 302316381,
  },
  {
    server: 1091,
    family: "Lilith",
    power: 293543260,
  },
  {
    server: 1091,
    family: "Rebels",
    power: 230707199,
  },
  {
    server: 1091,
    family: "TRXSH",
    power: 226771358,
  },
  {
    server: 1091,
    family: "shroom",
    power: 188522893,
  },
  {
    server: 1091,
    family: "Poobis",
    power: 155404449,
  },
  {
    server: 1091,
    family: "TheShiitakes",
    power: 105408279,
  },
  {
    server: 1091,
    family: "Thegang",
    power: 59135180,
  },
  {
    server: 1092,
    family: "Warlords",
    power: 1679257579,
  },
  {
    server: 1092,
    family: "Empire",
    power: 483511327,
  },
  {
    server: 1092,
    family: "SternEchelon",
    power: 428341631,
  },
  {
    server: 1092,
    family: "ROYALS",
    power: 420975652,
  },
  {
    server: 1092,
    family: "SpaceCowboys",
    power: 398659764,
  },
  {
    server: 1092,
    family: "strawhats",
    power: 321508245,
  },
  {
    server: 1092,
    family: "Nirvana",
    power: 196163125,
  },
  {
    server: 1092,
    family: "Legion",
    power: 192704606,
  },
  {
    server: 1092,
    family: "BlackPaw",
    power: 180208231,
  },
  {
    server: 1092,
    family: "RedStars",
    power: 37563416,
  },
  {
    server: 1093,
    family: "Mermaid",
    power: 1744342402,
  },
  {
    server: 1093,
    family: "Lords",
    power: 621529889,
  },
  {
    server: 1093,
    family: "OnePiece",
    power: 341718748,
  },
  {
    server: 1093,
    family: "M4DN3SS",
    power: 300026671,
  },
  {
    server: 1093,
    family: "DoomShroom",
    power: 250959156,
  },
  {
    server: 1093,
    family: "ATOMIC",
    power: 228353861,
  },
  {
    server: 1093,
    family: "Bratticus",
    power: 197450751,
  },
  {
    server: 1093,
    family: "FairyTail",
    power: 153538563,
  },
  {
    server: 1093,
    family: "ShroomTea",
    power: 149543204,
  },
  {
    server: 1093,
    family: "EorziaBound",
    power: 146548111,
  },
  {
    server: 1094,
    family: "Amoonguss",
    power: 1684855868,
  },
  {
    server: 1094,
    family: "SETA",
    power: 552507737,
  },
  {
    server: 1094,
    family: "InsomniacsRus",
    power: 380403226,
  },
  {
    server: 1094,
    family: "zeroknight",
    power: 375390385,
  },
  {
    server: 1094,
    family: "Kingdom",
    power: 354323125,
  },
  {
    server: 1094,
    family: "CrowsNest",
    power: 333665731,
  },
  {
    server: 1094,
    family: "blackmagic",
    power: 333460090,
  },
  {
    server: 1094,
    family: "TheFamily",
    power: 215348545,
  },
  {
    server: 1094,
    family: "TRIP",
    power: 151626772,
  },
  {
    server: 1094,
    family: "Funguys",
    power: 89087982,
  },
  {
    server: 1095,
    family: "Shrooms",
    power: 1590634404,
  },
  {
    server: 1095,
    family: "Glitch",
    power: 974196828,
  },
  {
    server: 1095,
    family: "TeepoSwarm",
    power: 392835553,
  },
  {
    server: 1095,
    family: "B0rky",
    power: 333282695,
  },
  {
    server: 1095,
    family: "USA",
    power: 240223837,
  },
  {
    server: 1095,
    family: "TheGnomes",
    power: 234256922,
  },
  {
    server: 1095,
    family: "Hawks",
    power: 212725132,
  },
  {
    server: 1095,
    family: "MagicMushrooms",
    power: 182675130,
  },
  {
    server: 1095,
    family: "kings",
    power: 143911810,
  },
  {
    server: 1095,
    family: "Reapers",
    power: 128613302,
  },
  {
    server: 1096,
    family: "TheWhales",
    power: 1627023305,
  },
  {
    server: 1096,
    family: "Rawr",
    power: 1104845171,
  },
  {
    server: 1096,
    family: "DragonSect",
    power: 383269264,
  },
  {
    server: 1096,
    family: "MagicMushrooms",
    power: 231679639,
  },
  {
    server: 1096,
    family: "Champions",
    power: 182896820,
  },
  {
    server: 1096,
    family: "Villains",
    power: 170614706,
  },
  {
    server: 1096,
    family: "GOATS",
    power: 114200872,
  },
  {
    server: 1096,
    family: "Mushies",
    power: 53737872,
  },
  {
    server: 1096,
    family: "grim_Reaper",
    power: 47776538,
  },
  {
    server: 1096,
    family: "Inferno",
    power: 47760526,
  },
  {
    server: 1097,
    family: "Fungi",
    power: 1493432119,
  },
  {
    server: 1097,
    family: "Skilldap",
    power: 1027300767,
  },
  {
    server: 1097,
    family: "HouseForsaken",
    power: 459014191,
  },
  {
    server: 1097,
    family: "Lucky",
    power: 200293652,
  },
  {
    server: 1097,
    family: "Trippyfam",
    power: 186730459,
  },
  {
    server: 1097,
    family: "Ajin",
    power: 185054781,
  },
  {
    server: 1097,
    family: "TheMemeTeam",
    power: 107614977,
  },
  {
    server: 1097,
    family: "Isekai",
    power: 99946077,
  },
  {
    server: 1097,
    family: "MushroomClan",
    power: 89528529,
  },
  {
    server: 1097,
    family: "Tyranny",
    power: 59086530,
  },
  {
    server: 1098,
    family: "§atansAngels",
    power: 1853114425,
  },
  {
    server: 1098,
    family: "Camelot",
    power: 629002267,
  },
  {
    server: 1098,
    family: "Novea",
    power: 333889394,
  },
  {
    server: 1098,
    family: "Tyrants",
    power: 305631374,
  },
  {
    server: 1098,
    family: "WigWam",
    power: 185309954,
  },
  {
    server: 1098,
    family: "Mothership",
    power: 106332582,
  },
  {
    server: 1098,
    family: "TheShroomery",
    power: 104584637,
  },
  {
    server: 1098,
    family: "thicklargebig",
    power: 87898155,
  },
  {
    server: 1098,
    family: "Cyber",
    power: 70466176,
  },
  {
    server: 1098,
    family: "CherryLove",
    power: 61396167,
  },
  {
    server: 1099,
    family: "Cryptic",
    power: 1788615991,
  },
  {
    server: 1099,
    family: "FairyTail",
    power: 906240402,
  },
  {
    server: 1099,
    family: "Primordial",
    power: 289887595,
  },
  {
    server: 1099,
    family: "Mush",
    power: 264772314,
  },
  {
    server: 1099,
    family: "ShvroomVillage",
    power: 233936102,
  },
  {
    server: 1099,
    family: "Marseille",
    power: 189629405,
  },
  {
    server: 1099,
    family: "Cloud9",
    power: 179277069,
  },
  {
    server: 1099,
    family: "BadAssery",
    power: 161357006,
  },
  {
    server: 1099,
    family: "OathKnights",
    power: 142202869,
  },
  {
    server: 1099,
    family: "Myconids",
    power: 135129676,
  },
  {
    server: 1100,
    family: "ShrooMates",
    power: 1663771498,
  },
  {
    server: 1100,
    family: "Ambition",
    power: 609150092,
  },
  {
    server: 1100,
    family: "Legends",
    power: 585110408,
  },
  {
    server: 1100,
    family: "Noodles",
    power: 535389367,
  },
  {
    server: 1100,
    family: "MagicMUSH",
    power: 442392397,
  },
  {
    server: 1100,
    family: "LosersOnly",
    power: 293015985,
  },
  {
    server: 1100,
    family: "Shroomzerk",
    power: 285863886,
  },
  {
    server: 1100,
    family: "Purgatory",
    power: 231245461,
  },
  {
    server: 1100,
    family: "AngelFairy702",
    power: 225186050,
  },
  {
    server: 1100,
    family: "Shroominators",
    power: 216657191,
  },
  {
    server: 1101,
    family: "ShitakeHappens",
    power: 1744487405,
  },
  {
    server: 1101,
    family: "ShroomEmpire1",
    power: 1265414539,
  },
  {
    server: 1101,
    family: "TakiGang",
    power: 437408787,
  },
  {
    server: 1101,
    family: "ShroomBoom",
    power: 331792239,
  },
  {
    server: 1101,
    family: "Solaris",
    power: 301610270,
  },
  {
    server: 1101,
    family: "Hentai",
    power: 171860547,
  },
  {
    server: 1101,
    family: "FunGuyz",
    power: 144015394,
  },
  {
    server: 1101,
    family: "Shroomies",
    power: 105510801,
  },
  {
    server: 1101,
    family: "Monkeymushroom",
    power: 56461120,
  },
  {
    server: 1101,
    family: "MushroomStamp",
    power: 43035141,
  },
  {
    server: 1102,
    family: "Nova",
    power: 1624873986,
  },
  {
    server: 1102,
    family: "Purgatory",
    power: 917974121,
  },
  {
    server: 1102,
    family: "Tempest",
    power: 407320106,
  },
  {
    server: 1102,
    family: "SCPFoundation",
    power: 325522225,
  },
  {
    server: 1102,
    family: "Degenerates",
    power: 219966608,
  },
  {
    server: 1102,
    family: "HippieHermits",
    power: 203702475,
  },
  {
    server: 1102,
    family: "mushrooms",
    power: 108906068,
  },
  {
    server: 1102,
    family: "REAPERS",
    power: 96515713,
  },
  {
    server: 1102,
    family: "EggsNtoast",
    power: 50518336,
  },
  {
    server: 1102,
    family: "Brightside",
    power: 24851785,
  },
  {
    server: 1103,
    family: "ShroomArmy",
    power: 1645668654,
  },
  {
    server: 1103,
    family: "SaintsOfPoison",
    power: 661205824,
  },
  {
    server: 1103,
    family: "1UP",
    power: 391600366,
  },
  {
    server: 1103,
    family: "SHROOMS",
    power: 327982378,
  },
  {
    server: 1103,
    family: "Doom_Makers",
    power: 253202564,
  },
  {
    server: 1103,
    family: "Stormyzz",
    power: 224270654,
  },
  {
    server: 1103,
    family: "Destroyer",
    power: 212293774,
  },
  {
    server: 1103,
    family: "ShroomySweets",
    power: 192355131,
  },
  {
    server: 1103,
    family: "GreenFn",
    power: 128935888,
  },
  {
    server: 1103,
    family: "Psilocybros",
    power: 80959825,
  },
  {
    server: 1104,
    family: "Chrysanthemum",
    power: 1777934769,
  },
  {
    server: 1104,
    family: "Malevolent",
    power: 569296254,
  },
  {
    server: 1104,
    family: "MagicMushies",
    power: 465490375,
  },
  {
    server: 1104,
    family: "Meeps",
    power: 244848713,
  },
  {
    server: 1104,
    family: "Bingo",
    power: 219124959,
  },
  {
    server: 1104,
    family: "SporeSquad",
    power: 189134577,
  },
  {
    server: 1104,
    family: "Psycellia",
    power: 169259045,
  },
  {
    server: 1104,
    family: "ShadowKnights",
    power: 50676347,
  },
  {
    server: 1104,
    family: "RoyalShrooms",
    power: 46873213,
  },
  {
    server: 1104,
    family: "Moonlight",
    power: 36878204,
  },
  {
    server: 1105,
    family: "GoonerVile",
    power: 1251406930,
  },
  {
    server: 1105,
    family: "Mushlords",
    power: 707225960,
  },
  {
    server: 1105,
    family: "Blu’sDemons",
    power: 434030655,
  },
  {
    server: 1105,
    family: "goobergangster",
    power: 364806758,
  },
  {
    server: 1105,
    family: "shroomsntaters",
    power: 358621634,
  },
  {
    server: 1105,
    family: "20KGLORY",
    power: 322364414,
  },
  {
    server: 1105,
    family: "Flacidpeen",
    power: 294192475,
  },
  {
    server: 1105,
    family: "PeppaSteppas",
    power: 164170143,
  },
  {
    server: 1105,
    family: "Gods",
    power: 144462354,
  },
  {
    server: 1105,
    family: "TheMushies",
    power: 139798481,
  },
  {
    server: 1106,
    family: "MagicShrooms",
    power: 1509005137,
  },
  {
    server: 1106,
    family: "BloodRaven",
    power: 1019009259,
  },
  {
    server: 1106,
    family: "ChaosShrooms",
    power: 418162079,
  },
  {
    server: 1106,
    family: "LobsterBaby",
    power: 409871372,
  },
  {
    server: 1106,
    family: "Gods",
    power: 298794187,
  },
  {
    server: 1106,
    family: "Shroomsniffers",
    power: 276785694,
  },
  {
    server: 1106,
    family: "Shroomies",
    power: 271427970,
  },
  {
    server: 1106,
    family: "Sporadix",
    power: 155359641,
  },
  {
    server: 1106,
    family: "MagikarpKing",
    power: 106281560,
  },
  {
    server: 1106,
    family: "FlyingPickles",
    power: 87750056,
  },
  {
    server: 1107,
    family: "Origami",
    power: 1594279499,
  },
  {
    server: 1107,
    family: "RAWR",
    power: 523415800,
  },
  {
    server: 1107,
    family: "DUCKMODE",
    power: 368618135,
  },
  {
    server: 1107,
    family: "Toadstool",
    power: 332759228,
  },
  {
    server: 1107,
    family: "Ashfall",
    power: 273817011,
  },
  {
    server: 1107,
    family: "Goonsquad",
    power: 263828443,
  },
  {
    server: 1107,
    family: "MushroomRoyals",
    power: 212772180,
  },
  {
    server: 1107,
    family: "ShroomHaven",
    power: 157899443,
  },
  {
    server: 1107,
    family: "⭐️Lunar⭐️",
    power: 142821753,
  },
  {
    server: 1107,
    family: "femboys",
    power: 105537554,
  },
  {
    server: 1108,
    family: "IMMORTALS",
    power: 1476015389,
  },
  {
    server: 1108,
    family: "Predators",
    power: 1247577735,
  },
  {
    server: 1108,
    family: "HolyShitake",
    power: 390433108,
  },
  {
    server: 1108,
    family: "Epitome",
    power: 296469195,
  },
  {
    server: 1108,
    family: "MathMeeps",
    power: 193155456,
  },
  {
    server: 1108,
    family: "Deadly_Shrooms",
    power: 180626765,
  },
  {
    server: 1108,
    family: "DEATHCAP",
    power: 168451410,
  },
  {
    server: 1108,
    family: "TRICHYY’S",
    power: 133226627,
  },
  {
    server: 1108,
    family: "Liquidarmy",
    power: 114724338,
  },
  {
    server: 1108,
    family: "LilWolves",
    power: 67784750,
  },
  {
    server: 1109,
    family: "Jutsu",
    power: 1647891106,
  },
  {
    server: 1109,
    family: "Clone_Jutsu",
    power: 502018702,
  },
  {
    server: 1109,
    family: "Sage",
    power: 446898319,
  },
  {
    server: 1109,
    family: "Philippines",
    power: 376104413,
  },
  {
    server: 1109,
    family: "Elysium",
    power: 281928702,
  },
  {
    server: 1109,
    family: "Poisonmushroom",
    power: 265279523,
  },
  {
    server: 1109,
    family: "Wings_of_Aura",
    power: 259826666,
  },
  {
    server: 1109,
    family: "DEEzSHROOMz",
    power: 205740678,
  },
  {
    server: 1109,
    family: "Legends",
    power: 193612240,
  },
  {
    server: 1109,
    family: "Chaos",
    power: 36509391,
  },
  {
    server: 1110,
    family: "Chaos",
    power: 1633856036,
  },
  {
    server: 1110,
    family: "FatalFoxx",
    power: 1132658350,
  },
  {
    server: 1110,
    family: "Yggdrasil",
    power: 447785183,
  },
  {
    server: 1110,
    family: "Mojimoji",
    power: 385179988,
  },
  {
    server: 1110,
    family: "ShroomRaiders",
    power: 329773791,
  },
  {
    server: 1110,
    family: "NoFoxxGiven",
    power: 273100784,
  },
  {
    server: 1110,
    family: "Free2Play",
    power: 272624198,
  },
  {
    server: 1110,
    family: "ACDSHROOMS",
    power: 231396833,
  },
  {
    server: 1110,
    family: "Insomnia",
    power: 126903181,
  },
  {
    server: 1110,
    family: "Shroomato’s",
    power: 117630042,
  },
  {
    server: 1111,
    family: "MushroomBros",
    power: 1639751145,
  },
  {
    server: 1111,
    family: "EliteDragons",
    power: 973594566,
  },
  {
    server: 1111,
    family: "TomuaraCLAN",
    power: 450091357,
  },
  {
    server: 1111,
    family: "ShadowGarden",
    power: 289252540,
  },
  {
    server: 1111,
    family: "ThousandGods",
    power: 279621875,
  },
  {
    server: 1111,
    family: "Nebula",
    power: 248042456,
  },
  {
    server: 1111,
    family: "DivineMycelium",
    power: 211624810,
  },
  {
    server: 1111,
    family: "blackdiamond",
    power: 193626083,
  },
  {
    server: 1111,
    family: "TheCrusaders",
    power: 189795465,
  },
  {
    server: 1111,
    family: "DumbledorsArmy",
    power: 92390980,
  },
  {
    server: 1112,
    family: "BustACap",
    power: 1647810937,
  },
  {
    server: 1112,
    family: "DaFungiPlague",
    power: 1181537930,
  },
  {
    server: 1112,
    family: "Unstoppables",
    power: 541269990,
  },
  {
    server: 1112,
    family: "SKillzM4dNess",
    power: 328211470,
  },
  {
    server: 1112,
    family: "MEMBERSONLY",
    power: 285981180,
  },
  {
    server: 1112,
    family: "reaperz",
    power: 276807141,
  },
  {
    server: 1112,
    family: "TheShrooms",
    power: 251275019,
  },
  {
    server: 1112,
    family: "Cmplex",
    power: 230531534,
  },
  {
    server: 1112,
    family: "ShroomieBoys",
    power: 127086548,
  },
  {
    server: 1112,
    family: "moonlight",
    power: 85808475,
  },
  {
    server: 1113,
    family: "Legends",
    power: 1677760497,
  },
  {
    server: 1113,
    family: "Versals",
    power: 511864692,
  },
  {
    server: 1113,
    family: "ShroomBurn",
    power: 267619498,
  },
  {
    server: 1113,
    family: "Gods",
    power: 219855907,
  },
  {
    server: 1113,
    family: "Fungis",
    power: 212969649,
  },
  {
    server: 1113,
    family: "Celestials",
    power: 211924484,
  },
  {
    server: 1113,
    family: "Loyalty",
    power: 197509439,
  },
  {
    server: 1113,
    family: "dragons",
    power: 160577644,
  },
  {
    server: 1113,
    family: "Shroombussy",
    power: 154240404,
  },
  {
    server: 1113,
    family: "DEATHNDARKNESS",
    power: 122320442,
  },
  {
    server: 1114,
    family: "PSILOCYBIN",
    power: 1425520493,
  },
  {
    server: 1114,
    family: "BananaRepublic",
    power: 1382197644,
  },
  {
    server: 1114,
    family: "FungusAmong’us",
    power: 298902757,
  },
  {
    server: 1114,
    family: "Gyatt2Win",
    power: 229793853,
  },
  {
    server: 1114,
    family: "ScarletReapers",
    power: 220259057,
  },
  {
    server: 1114,
    family: "TheFallen",
    power: 188880977,
  },
  {
    server: 1114,
    family: "Chxllz",
    power: 147933125,
  },
  {
    server: 1114,
    family: "shroomfam",
    power: 138435176,
  },
  {
    server: 1114,
    family: "Psychedelic",
    power: 120764485,
  },
  {
    server: 1114,
    family: "Hippyslayers",
    power: 79141450,
  },
  {
    server: 1115,
    family: "Schrooms",
    power: 1239169644,
  },
  {
    server: 1115,
    family: "3amZoomies",
    power: 1234252444,
  },
  {
    server: 1115,
    family: "beastz",
    power: 377719996,
  },
  {
    server: 1115,
    family: "TheHunters",
    power: 312785118,
  },
  {
    server: 1115,
    family: "Mooshrooms",
    power: 279541730,
  },
  {
    server: 1115,
    family: "Swarm",
    power: 271520549,
  },
  {
    server: 1115,
    family: "Gooners",
    power: 258064695,
  },
  {
    server: 1115,
    family: "Crypticomen",
    power: 251668904,
  },
  {
    server: 1115,
    family: "Introverts",
    power: 251551345,
  },
  {
    server: 1115,
    family: "hazbinhotel",
    power: 137151900,
  },
  {
    server: 1116,
    family: "Psychedelics",
    power: 1682888389,
  },
  {
    server: 1116,
    family: "Reapers",
    power: 1444977302,
  },
  {
    server: 1116,
    family: "Reapers2",
    power: 664238997,
  },
  {
    server: 1116,
    family: "MapleTree",
    power: 251607232,
  },
  {
    server: 1116,
    family: "Midgard",
    power: 245426258,
  },
  {
    server: 1116,
    family: "MushyLegends",
    power: 206807107,
  },
  {
    server: 1116,
    family: "TransPride",
    power: 193003660,
  },
  {
    server: 1116,
    family: "MicroDose",
    power: 148314133,
  },
  {
    server: 1116,
    family: "mushroom",
    power: 112212332,
  },
  {
    server: 1116,
    family: "Valhalla",
    power: 57815178,
  },
  {
    server: 1117,
    family: "BloodySins",
    power: 1729779314,
  },
  {
    server: 1117,
    family: "ClayPots",
    power: 685105687,
  },
  {
    server: 1117,
    family: "WarringShrooms",
    power: 551680504,
  },
  {
    server: 1117,
    family: "DeathHasAName",
    power: 511443696,
  },
  {
    server: 1117,
    family: "whyyyy",
    power: 260734591,
  },
  {
    server: 1117,
    family: "Cordyceps",
    power: 190178582,
  },
  {
    server: 1117,
    family: "ShroomMilitia",
    power: 161912793,
  },
  {
    server: 1117,
    family: "Shroomsters",
    power: 128302265,
  },
  {
    server: 1117,
    family: "CreamyMushroom",
    power: 70065422,
  },
  {
    server: 1117,
    family: "Eagles",
    power: 53829701,
  },
  {
    server: 1118,
    family: "TheCollective",
    power: 1768543909,
  },
  {
    server: 1118,
    family: "RiceRockets",
    power: 844633011,
  },
  {
    server: 1118,
    family: "Hazbin_Hotel",
    power: 797864670,
  },
  {
    server: 1118,
    family: "Slaying",
    power: 371149312,
  },
  {
    server: 1118,
    family: "Soulfire",
    power: 366573953,
  },
  {
    server: 1118,
    family: "FarFarAway",
    power: 290478465,
  },
  {
    server: 1118,
    family: "Myconids",
    power: 203038348,
  },
  {
    server: 1118,
    family: "SpudsUnited",
    power: 193202015,
  },
  {
    server: 1118,
    family: "FOREVERKILLING",
    power: 189137239,
  },
  {
    server: 1118,
    family: "Unstoppable",
    power: 148766931,
  },
  {
    server: 1119,
    family: "———Queen———",
    power: 1559607791,
  },
  {
    server: 1119,
    family: "DemonLords",
    power: 702700532,
  },
  {
    server: 1119,
    family: "TheGods",
    power: 505199208,
  },
  {
    server: 1119,
    family: "Noobs",
    power: 447080592,
  },
  {
    server: 1119,
    family: "idk",
    power: 355457709,
  },
  {
    server: 1119,
    family: "MAGICMUSHYS",
    power: 351769310,
  },
  {
    server: 1119,
    family: "Psychedelic",
    power: 321035045,
  },
  {
    server: 1119,
    family: "Elites",
    power: 311245209,
  },
  {
    server: 1119,
    family: "Mushiest",
    power: 283058356,
  },
  {
    server: 1119,
    family: "Efif_Musse",
    power: 74702438,
  },
  {
    server: 1120,
    family: "Celestial",
    power: 1516007518,
  },
  {
    server: 1120,
    family: "SEES",
    power: 1032858862,
  },
  {
    server: 1120,
    family: "Bugs",
    power: 743520278,
  },
  {
    server: 1120,
    family: "MushroomROAD",
    power: 725873454,
  },
  {
    server: 1120,
    family: "Unknowns",
    power: 423275405,
  },
  {
    server: 1120,
    family: "Xenocide",
    power: 280797605,
  },
  {
    server: 1120,
    family: "house_of_fungu",
    power: 213767829,
  },
  {
    server: 1120,
    family: "Zomb33land",
    power: 206600941,
  },
  {
    server: 1120,
    family: "ShroomKingdom",
    power: 182740838,
  },
  {
    server: 1120,
    family: "MushroomMafia",
    power: 140403805,
  },
  {
    server: 1121,
    family: "BloodSpore",
    power: 1820251416,
  },
  {
    server: 1121,
    family: "Ahjin",
    power: 999319576,
  },
  {
    server: 1121,
    family: "Warriors",
    power: 550584349,
  },
  {
    server: 1121,
    family: "The_Hero_Party",
    power: 440648863,
  },
  {
    server: 1121,
    family: "Happy",
    power: 325045226,
  },
  {
    server: 1121,
    family: "Bioluminescent",
    power: 290540954,
  },
  {
    server: 1121,
    family: "SQUAD",
    power: 266221819,
  },
  {
    server: 1121,
    family: "Pinguelos",
    power: 224599463,
  },
  {
    server: 1121,
    family: "DragonBall",
    power: 201193504,
  },
  {
    server: 1121,
    family: "Thetrolls",
    power: 152566426,
  },
  {
    server: 1122,
    family: "Delinquents",
    power: 1757119372,
  },
  {
    server: 1122,
    family: "Degenerates",
    power: 952624408,
  },
  {
    server: 1122,
    family: "shroomsRfun420",
    power: 524294651,
  },
  {
    server: 1122,
    family: "Mooshrooms",
    power: 499593374,
  },
  {
    server: 1122,
    family: "berserk",
    power: 305846297,
  },
  {
    server: 1122,
    family: "Doofenshmirtz",
    power: 291926833,
  },
  {
    server: 1122,
    family: "Just4fun",
    power: 104801442,
  },
  {
    server: 1122,
    family: "TheShroomRoom",
    power: 91129029,
  },
  {
    server: 1122,
    family: "Shroomtopia",
    power: 90658819,
  },
  {
    server: 1122,
    family: "AutoBots",
    power: 64027467,
  },
  {
    server: 1123,
    family: "ShroomzNation",
    power: 1773975458,
  },
  {
    server: 1123,
    family: "Shrimp",
    power: 665636681,
  },
  {
    server: 1123,
    family: "Fiddleheads",
    power: 335166727,
  },
  {
    server: 1123,
    family: "MirrorStars",
    power: 330833520,
  },
  {
    server: 1123,
    family: "ShroomsMen",
    power: 328088183,
  },
  {
    server: 1123,
    family: "Shroomtastic",
    power: 233172279,
  },
  {
    server: 1123,
    family: "soulblades",
    power: 229255228,
  },
  {
    server: 1123,
    family: "GANG",
    power: 207368646,
  },
  {
    server: 1123,
    family: "Smaug",
    power: 102747197,
  },
  {
    server: 1123,
    family: "OnE",
    power: 63587293,
  },
  {
    server: 1124,
    family: "OnlyLamps",
    power: 1203402077,
  },
  {
    server: 1124,
    family: "Kingz",
    power: 1162341999,
  },
  {
    server: 1124,
    family: "ShadowGarden",
    power: 308393851,
  },
  {
    server: 1124,
    family: "ShroomGods",
    power: 261554664,
  },
  {
    server: 1124,
    family: "FunGuy",
    power: 237901203,
  },
  {
    server: 1124,
    family: "EliteFiends",
    power: 228711015,
  },
  {
    server: 1124,
    family: "Dragonquest",
    power: 193778335,
  },
  {
    server: 1124,
    family: "Wonderland",
    power: 114657829,
  },
  {
    server: 1124,
    family: "Aeterna",
    power: 40523758,
  },
  {
    server: 1124,
    family: "StickyJohn",
    power: 34720420,
  },
  {
    server: 1125,
    family: "AssaultTeam",
    power: 1761288339,
  },
  {
    server: 1125,
    family: "BloodBorne",
    power: 769354239,
  },
  {
    server: 1125,
    family: "SwagKings",
    power: 374876563,
  },
  {
    server: 1125,
    family: "GardenGate",
    power: 217316911,
  },
  {
    server: 1125,
    family: "FingerBlasters",
    power: 177185973,
  },
  {
    server: 1125,
    family: "ShroomHeroes",
    power: 148860791,
  },
  {
    server: 1125,
    family: "shoom",
    power: 108751290,
  },
  {
    server: 1125,
    family: "Demonsouls",
    power: 98043366,
  },
  {
    server: 1125,
    family: "StrawHats",
    power: 89326714,
  },
  {
    server: 1125,
    family: "Roughnecks",
    power: 85231333,
  },
  {
    server: 1126,
    family: "Gods",
    power: 1621372585,
  },
  {
    server: 1126,
    family: "TheShroomies",
    power: 475077791,
  },
  {
    server: 1126,
    family: "Angels",
    power: 421100188,
  },
  {
    server: 1126,
    family: "Limitless",
    power: 341954349,
  },
  {
    server: 1126,
    family: "StrawHats",
    power: 258056777,
  },
  {
    server: 1126,
    family: "OnePiece",
    power: 257181308,
  },
  {
    server: 1126,
    family: "Yggdrasil",
    power: 252024196,
  },
  {
    server: 1126,
    family: "Shroomers",
    power: 205833070,
  },
  {
    server: 1126,
    family: "Shroomihut",
    power: 184414132,
  },
  {
    server: 1126,
    family: "420Fam",
    power: 179851433,
  },
  {
    server: 1127,
    family: "CookieGods",
    power: 1813715501,
  },
  {
    server: 1127,
    family: "Shroomates",
    power: 1020868446,
  },
  {
    server: 1127,
    family: "Moon",
    power: 395584035,
  },
  {
    server: 1127,
    family: "7DeadlyFungi",
    power: 347420867,
  },
  {
    server: 1127,
    family: "CookieFathers",
    power: 264312672,
  },
  {
    server: 1127,
    family: "Elite",
    power: 225983334,
  },
  {
    server: 1127,
    family: "TransRights",
    power: 199088267,
  },
  {
    server: 1127,
    family: "Myconids",
    power: 166172110,
  },
  {
    server: 1127,
    family: "MoltenMushroom",
    power: 155116128,
  },
  {
    server: 1127,
    family: "MyShroomies",
    power: 79330842,
  },
  {
    server: 1128,
    family: "Skylla",
    power: 1829376242,
  },
  {
    server: 1128,
    family: "ClownHouse",
    power: 958096533,
  },
  {
    server: 1128,
    family: "Equinox",
    power: 372213392,
  },
  {
    server: 1128,
    family: "DaKimz",
    power: 372115351,
  },
  {
    server: 1128,
    family: "MistVillage",
    power: 319847514,
  },
  {
    server: 1128,
    family: "Strawhats",
    power: 266545216,
  },
  {
    server: 1128,
    family: "Paradox",
    power: 215479114,
  },
  {
    server: 1128,
    family: "Amanita",
    power: 190931349,
  },
  {
    server: 1128,
    family: "Typhon",
    power: 157428021,
  },
  {
    server: 1128,
    family: "ShroomDoom",
    power: 152645936,
  },
  {
    server: 1129,
    family: "Apex",
    power: 1319811198,
  },
  {
    server: 1129,
    family: "TheNation",
    power: 527543996,
  },
  {
    server: 1129,
    family: "psychedelics",
    power: 430264914,
  },
  {
    server: 1129,
    family: "Villains",
    power: 353708201,
  },
  {
    server: 1129,
    family: "Slimegang",
    power: 333151133,
  },
  {
    server: 1129,
    family: "ALOHA",
    power: 263742959,
  },
  {
    server: 1129,
    family: "bakedshroom",
    power: 220311561,
  },
  {
    server: 1129,
    family: "BET",
    power: 198520487,
  },
  {
    server: 1129,
    family: "Stormraven",
    power: 169316111,
  },
  {
    server: 1129,
    family: "Eldritchfamily",
    power: 71807473,
  },
  {
    server: 1130,
    family: "Rapture",
    power: 1759434421,
  },
  {
    server: 1130,
    family: "CaveDwellers",
    power: 1182298399,
  },
  {
    server: 1130,
    family: "DeathWish",
    power: 409787926,
  },
  {
    server: 1130,
    family: "LEGENDS",
    power: 368141744,
  },
  {
    server: 1130,
    family: "Storm",
    power: 292395595,
  },
  {
    server: 1130,
    family: "IcedCoffee",
    power: 286319336,
  },
  {
    server: 1130,
    family: "DevilTown",
    power: 233172081,
  },
  {
    server: 1130,
    family: "shroomville",
    power: 227918704,
  },
  {
    server: 1130,
    family: "Ragnarok",
    power: 216205875,
  },
  {
    server: 1130,
    family: "SAKURA",
    power: 156806650,
  },
  {
    server: 1131,
    family: "GothicsRUs",
    power: 1270466775,
  },
  {
    server: 1131,
    family: "DeathCap",
    power: 1224201385,
  },
  {
    server: 1131,
    family: "Monarchs",
    power: 1209127773,
  },
  {
    server: 1131,
    family: "ShroomSlayers",
    power: 321849946,
  },
  {
    server: 1131,
    family: "starfire",
    power: 213986180,
  },
  {
    server: 1131,
    family: "Mushrooms",
    power: 192926779,
  },
  {
    server: 1131,
    family: "Funguys",
    power: 177984905,
  },
  {
    server: 1131,
    family: "EDENS",
    power: 125316468,
  },
  {
    server: 1131,
    family: "TheHubStars",
    power: 108256688,
  },
  {
    server: 1131,
    family: "Isekaied",
    power: 96347818,
  },
  {
    server: 1132,
    family: "TheFinalNut",
    power: 1733051300,
  },
  {
    server: 1132,
    family: "FunGuy",
    power: 752217463,
  },
  {
    server: 1132,
    family: "FUNgi",
    power: 429951387,
  },
  {
    server: 1132,
    family: "Shroomies",
    power: 427695240,
  },
  {
    server: 1132,
    family: "Deathfromabove",
    power: 226116738,
  },
  {
    server: 1132,
    family: "legends",
    power: 164215093,
  },
  {
    server: 1132,
    family: "FurGamers",
    power: 157098409,
  },
  {
    server: 1132,
    family: "Funging",
    power: 156677292,
  },
  {
    server: 1132,
    family: "Mushlings",
    power: 137490500,
  },
  {
    server: 1132,
    family: "Hi",
    power: 93960716,
  },
  {
    server: 1133,
    family: "Whales",
    power: 1773954189,
  },
  {
    server: 1133,
    family: "SoloLeveling",
    power: 717453113,
  },
  {
    server: 1133,
    family: "DeathWish",
    power: 544064302,
  },
  {
    server: 1133,
    family: "Ghost",
    power: 284433059,
  },
  {
    server: 1133,
    family: "FormidablShrom",
    power: 278537062,
  },
  {
    server: 1133,
    family: "BEROFF",
    power: 268632884,
  },
  {
    server: 1133,
    family: "Legendary",
    power: 254256861,
  },
  {
    server: 1133,
    family: "Karma",
    power: 224365743,
  },
  {
    server: 1133,
    family: "ShroomMagicks",
    power: 217818944,
  },
  {
    server: 1133,
    family: "MUSHROOMFAMILY",
    power: 68754254,
  },
  {
    server: 1134,
    family: "Bløssøm",
    power: 1506267370,
  },
  {
    server: 1134,
    family: "SharkesOcean",
    power: 1011471556,
  },
  {
    server: 1134,
    family: "WildOnes",
    power: 964860683,
  },
  {
    server: 1134,
    family: "Toad",
    power: 405826164,
  },
  {
    server: 1134,
    family: "Fffffffffff",
    power: 249185126,
  },
  {
    server: 1134,
    family: "Shroomies",
    power: 221702235,
  },
  {
    server: 1134,
    family: "SleepRose",
    power: 180541783,
  },
  {
    server: 1134,
    family: "CutiePatooties",
    power: 162977061,
  },
  {
    server: 1134,
    family: "Canada",
    power: 147109395,
  },
  {
    server: 1134,
    family: "UnderWorld",
    power: 118179976,
  },
  {
    server: 1135,
    family: "Bandits",
    power: 1789709797,
  },
  {
    server: 1135,
    family: "Cookies",
    power: 558882278,
  },
  {
    server: 1135,
    family: "Shroomys",
    power: 480797161,
  },
  {
    server: 1135,
    family: "LOM",
    power: 323460261,
  },
  {
    server: 1135,
    family: "NormalPeople",
    power: 319040026,
  },
  {
    server: 1135,
    family: "Twister",
    power: 254796624,
  },
  {
    server: 1135,
    family: "Shrooms",
    power: 230303959,
  },
  {
    server: 1135,
    family: "Nazarick",
    power: 216635798,
  },
  {
    server: 1135,
    family: "Divine",
    power: 184830779,
  },
  {
    server: 1135,
    family: "FunGuys",
    power: 120735563,
  },
  {
    server: 1136,
    family: "OnlyShrooms",
    power: 1678610646,
  },
  {
    server: 1136,
    family: "Shiitake",
    power: 734063599,
  },
  {
    server: 1136,
    family: "CunningStunts",
    power: 410091215,
  },
  {
    server: 1136,
    family: "SporeSomeMore",
    power: 387468739,
  },
  {
    server: 1136,
    family: "semars",
    power: 335560773,
  },
  {
    server: 1136,
    family: "ChungusFungus",
    power: 221925186,
  },
  {
    server: 1136,
    family: "GalaxyShrooms",
    power: 198808464,
  },
  {
    server: 1136,
    family: "MuffinStuffers",
    power: 87355865,
  },
  {
    server: 1136,
    family: "mushheads",
    power: 82077341,
  },
  {
    server: 1136,
    family: "TruffleButter",
    power: 79015131,
  },
  {
    server: 1137,
    family: "Fate",
    power: 1446970993,
  },
  {
    server: 1137,
    family: "MapleStory",
    power: 547277095,
  },
  {
    server: 1137,
    family: "Origin",
    power: 536476106,
  },
  {
    server: 1137,
    family: "Shrooms",
    power: 414565673,
  },
  {
    server: 1137,
    family: "Yes",
    power: 308983156,
  },
  {
    server: 1137,
    family: "crazyshroom",
    power: 283431916,
  },
  {
    server: 1137,
    family: "Legendary",
    power: 250510135,
  },
  {
    server: 1137,
    family: "Divinity",
    power: 241434579,
  },
  {
    server: 1137,
    family: "NoTruffle",
    power: 213807262,
  },
  {
    server: 1137,
    family: "TheKings",
    power: 210426681,
  },
  {
    server: 1138,
    family: "Frogs",
    power: 1529805845,
  },
  {
    server: 1138,
    family: "Akatsuki",
    power: 714645780,
  },
  {
    server: 1138,
    family: "FourHorsemen",
    power: 547433110,
  },
  {
    server: 1138,
    family: "GalacticShroom",
    power: 382268878,
  },
  {
    server: 1138,
    family: "COSMICS",
    power: 347653821,
  },
  {
    server: 1138,
    family: "BlackIce",
    power: 310150397,
  },
  {
    server: 1138,
    family: "Pheonix",
    power: 259032113,
  },
  {
    server: 1138,
    family: "Shromenators",
    power: 220929120,
  },
  {
    server: 1138,
    family: "Shroomsnu",
    power: 188003482,
  },
  {
    server: 1138,
    family: "DragonsDen",
    power: 179595643,
  },
  {
    server: 1139,
    family: "Mushers",
    power: 1735440518,
  },
  {
    server: 1139,
    family: "Wagwan",
    power: 1427488509,
  },
  {
    server: 1139,
    family: "Troubledesk",
    power: 538324028,
  },
  {
    server: 1139,
    family: "frenchteam",
    power: 366834112,
  },
  {
    server: 1139,
    family: "片工卞卞工ヨ己",
    power: 353826089,
  },
  {
    server: 1139,
    family: "SkittleSquad",
    power: 306638953,
  },
  {
    server: 1139,
    family: "ShroomgoVroom",
    power: 187494607,
  },
  {
    server: 1139,
    family: "Freak_Nation",
    power: 186405643,
  },
  {
    server: 1139,
    family: "OnePiece",
    power: 146473596,
  },
  {
    server: 1139,
    family: "TippyTakis",
    power: 86304497,
  },
  {
    server: 1140,
    family: "TG",
    power: 1441844651,
  },
  {
    server: 1140,
    family: "MasterPiece",
    power: 1191442126,
  },
  {
    server: 1140,
    family: "ShroomHalks",
    power: 403836101,
  },
  {
    server: 1140,
    family: "POISON",
    power: 305280943,
  },
  {
    server: 1140,
    family: "Valhalla",
    power: 289175696,
  },
  {
    server: 1140,
    family: "MagicMushroom",
    power: 285197124,
  },
  {
    server: 1140,
    family: "DayTrippers",
    power: 264322133,
  },
  {
    server: 1140,
    family: "MilkOfZaddy",
    power: 240720325,
  },
  {
    server: 1140,
    family: "Toadstools",
    power: 202224429,
  },
  {
    server: 1140,
    family: "KURTYDORES",
    power: 161539952,
  },
  {
    server: 1141,
    family: "Leviathan",
    power: 1726027501,
  },
  {
    server: 1141,
    family: "Adventure⭐Time",
    power: 655741839,
  },
  {
    server: 1141,
    family: "Uprising",
    power: 608750069,
  },
  {
    server: 1141,
    family: "LE",
    power: 397969311,
  },
  {
    server: 1141,
    family: "Spore4Spore",
    power: 385351005,
  },
  {
    server: 1141,
    family: "Shrooms",
    power: 364987888,
  },
  {
    server: 1141,
    family: "SporeNexus",
    power: 201806114,
  },
  {
    server: 1141,
    family: "FeistyFungi",
    power: 145395808,
  },
  {
    server: 1141,
    family: "H3llFire",
    power: 108627928,
  },
  {
    server: 1141,
    family: "FUNgiKINGdom",
    power: 105194018,
  },
  {
    server: 1142,
    family: "Royalty",
    power: 1532414222,
  },
  {
    server: 1142,
    family: "Boba",
    power: 980793125,
  },
  {
    server: 1142,
    family: "weirdos",
    power: 301344527,
  },
  {
    server: 1142,
    family: "Nebula",
    power: 299487758,
  },
  {
    server: 1142,
    family: "SOA",
    power: 265316603,
  },
  {
    server: 1142,
    family: "kanekis_family",
    power: 251827519,
  },
  {
    server: 1142,
    family: "MagicShrooms",
    power: 202729158,
  },
  {
    server: 1142,
    family: "FUBAR",
    power: 168700615,
  },
  {
    server: 1142,
    family: "Dharan",
    power: 125528455,
  },
  {
    server: 1142,
    family: "FriedChicken",
    power: 108472762,
  },
  {
    server: 1143,
    family: "Hell_Hounds",
    power: 1788114114,
  },
  {
    server: 1143,
    family: "WeAreShroom",
    power: 627675853,
  },
  {
    server: 1143,
    family: "FriedChicken",
    power: 480621161,
  },
  {
    server: 1143,
    family: "RamenLOVERS",
    power: 288018923,
  },
  {
    server: 1143,
    family: "shroomlovers",
    power: 278230538,
  },
  {
    server: 1143,
    family: "Reaper",
    power: 238312972,
  },
  {
    server: 1143,
    family: "Solo",
    power: 211565696,
  },
  {
    server: 1143,
    family: "420Fam",
    power: 157245487,
  },
  {
    server: 1143,
    family: "DIABLO",
    power: 144570510,
  },
  {
    server: 1143,
    family: "Familia",
    power: 120822770,
  },
  {
    server: 1144,
    family: "HazyShrooms",
    power: 1467608424,
  },
  {
    server: 1144,
    family: "Yggdrasil",
    power: 837358198,
  },
  {
    server: 1144,
    family: "FungusAmongus",
    power: 520090752,
  },
  {
    server: 1144,
    family: "SadisticSpores",
    power: 383930257,
  },
  {
    server: 1144,
    family: "Gods",
    power: 328493808,
  },
  {
    server: 1144,
    family: "InnocentZero",
    power: 318659458,
  },
  {
    server: 1144,
    family: "GodIsKing",
    power: 277271215,
  },
  {
    server: 1144,
    family: "Eternia",
    power: 208956995,
  },
  {
    server: 1144,
    family: "Kittens",
    power: 143541630,
  },
  {
    server: 1144,
    family: "Azathoth_Cult",
    power: 130251081,
  },
  {
    server: 1145,
    family: "OnlyShrooms",
    power: 1655589185,
  },
  {
    server: 1145,
    family: "NeonGhosts",
    power: 987196205,
  },
  {
    server: 1145,
    family: "§KINGDOM§",
    power: 498832377,
  },
  {
    server: 1145,
    family: "PENUMBRA",
    power: 384783524,
  },
  {
    server: 1145,
    family: "RavenClaw",
    power: 322010815,
  },
  {
    server: 1145,
    family: "LeafVillage",
    power: 245799021,
  },
  {
    server: 1145,
    family: "SporeKnight",
    power: 227555919,
  },
  {
    server: 1145,
    family: "Femboyfriendly",
    power: 169784474,
  },
  {
    server: 1145,
    family: "BBL",
    power: 149904181,
  },
  {
    server: 1145,
    family: "EvilShroom",
    power: 106087223,
  },
  {
    server: 1146,
    family: "Shiitake",
    power: 1771820887,
  },
  {
    server: 1146,
    family: "LowIQShrooms",
    power: 1240072967,
  },
  {
    server: 1146,
    family: "Feet",
    power: 348442246,
  },
  {
    server: 1146,
    family: "Reaper",
    power: 283433433,
  },
  {
    server: 1146,
    family: "Akatsuki",
    power: 270252299,
  },
  {
    server: 1146,
    family: "zach130",
    power: 263553623,
  },
  {
    server: 1146,
    family: "Equinox",
    power: 253082406,
  },
  {
    server: 1146,
    family: "BagOfBones",
    power: 245227450,
  },
  {
    server: 1146,
    family: "🧀",
    power: 226511202,
  },
  {
    server: 1146,
    family: "Eaer",
    power: 218274401,
  },
  {
    server: 1147,
    family: "Prophecy",
    power: 1653504084,
  },
  {
    server: 1147,
    family: "ShroomCity",
    power: 1376453148,
  },
  {
    server: 1147,
    family: "Mafia",
    power: 409479297,
  },
  {
    server: 1147,
    family: "Ducks",
    power: 323102041,
  },
  {
    server: 1147,
    family: "OnTop",
    power: 315225556,
  },
  {
    server: 1147,
    family: "TheSyndicate",
    power: 257166381,
  },
  {
    server: 1147,
    family: "ADHDisaB",
    power: 202559244,
  },
  {
    server: 1147,
    family: "QCChampieKings",
    power: 194262541,
  },
  {
    server: 1147,
    family: "InnerCircle",
    power: 193816203,
  },
  {
    server: 1147,
    family: "stoneyhomie420",
    power: 125991979,
  },
  {
    server: 1148,
    family: "Aesthetica",
    power: 1776295738,
  },
  {
    server: 1148,
    family: "Snowflake",
    power: 654368682,
  },
  {
    server: 1148,
    family: "XsunstriderX",
    power: 450399786,
  },
  {
    server: 1148,
    family: "M_Cult_M",
    power: 298427794,
  },
  {
    server: 1148,
    family: "Psilocybin",
    power: 298185855,
  },
  {
    server: 1148,
    family: "SnowyHideaway",
    power: 284545871,
  },
  {
    server: 1148,
    family: "Doji",
    power: 267271274,
  },
  {
    server: 1148,
    family: "rougarou",
    power: 248004104,
  },
  {
    server: 1148,
    family: "KING",
    power: 224988853,
  },
  {
    server: 1148,
    family: "TheVoid",
    power: 224497583,
  },
  {
    server: 1149,
    family: "SteelShrooms",
    power: 1614900585,
  },
  {
    server: 1149,
    family: "FungalFury",
    power: 723277366,
  },
  {
    server: 1149,
    family: "makeAwish",
    power: 461496839,
  },
  {
    server: 1149,
    family: "Roomies",
    power: 418662999,
  },
  {
    server: 1149,
    family: "Shroompies",
    power: 387366343,
  },
  {
    server: 1149,
    family: "TheWildZ",
    power: 261257365,
  },
  {
    server: 1149,
    family: "Chaos",
    power: 202359235,
  },
  {
    server: 1149,
    family: "BrasilLegend",
    power: 116772647,
  },
  {
    server: 1149,
    family: "Freelo",
    power: 72967294,
  },
  {
    server: 1149,
    family: "FaeFam",
    power: 50069982,
  },
  {
    server: 1150,
    family: "Yggdrasil",
    power: 1577756528,
  },
  {
    server: 1150,
    family: "Devastation",
    power: 747089869,
  },
  {
    server: 1150,
    family: "Creampuffs",
    power: 337835904,
  },
  {
    server: 1150,
    family: "Psychedelic",
    power: 306685673,
  },
  {
    server: 1150,
    family: "DemonShroom",
    power: 299644991,
  },
  {
    server: 1150,
    family: "banana",
    power: 236507159,
  },
  {
    server: 1150,
    family: "out4blood",
    power: 225038192,
  },
  {
    server: 1150,
    family: "Dreams",
    power: 180855169,
  },
  {
    server: 1150,
    family: "LickWindows",
    power: 158898284,
  },
  {
    server: 1150,
    family: "LostShrooms",
    power: 96066647,
  },
  {
    server: 1151,
    family: "IronGods",
    power: 1586214829,
  },
  {
    server: 1151,
    family: "RAMEN",
    power: 511202574,
  },
  {
    server: 1151,
    family: "Sybil",
    power: 404872380,
  },
  {
    server: 1151,
    family: "Placido",
    power: 381659092,
  },
  {
    server: 1151,
    family: "HtF",
    power: 294642043,
  },
  {
    server: 1151,
    family: "AoA",
    power: 262375622,
  },
  {
    server: 1151,
    family: "Hallownest",
    power: 242549282,
  },
  {
    server: 1151,
    family: "Kami",
    power: 221240558,
  },
  {
    server: 1151,
    family: "AlphaShroomz",
    power: 215575161,
  },
  {
    server: 1151,
    family: "Shroomish",
    power: 213429126,
  },
  {
    server: 1152,
    family: "Shroomageddon",
    power: 1412379571,
  },
  {
    server: 1152,
    family: "DarkGate",
    power: 1224434421,
  },
  {
    server: 1152,
    family: "Valhalla",
    power: 738780024,
  },
  {
    server: 1152,
    family: "ShroomLords",
    power: 559255114,
  },
  {
    server: 1152,
    family: "WompWomp",
    power: 292471170,
  },
  {
    server: 1152,
    family: "Felonious",
    power: 262656041,
  },
  {
    server: 1152,
    family: "DootsHouse",
    power: 235155200,
  },
  {
    server: 1152,
    family: "HoshiBochi",
    power: 198254471,
  },
  {
    server: 1152,
    family: "Black",
    power: 167472427,
  },
  {
    server: 1152,
    family: "Nextgenz",
    power: 104764133,
  },
  {
    server: 1153,
    family: "MushLords",
    power: 1400084764,
  },
  {
    server: 1153,
    family: "LittleShrooms",
    power: 1258093200,
  },
  {
    server: 1153,
    family: "Crazycrackers",
    power: 534004000,
  },
  {
    server: 1153,
    family: "DoubleCheekdUp",
    power: 312004761,
  },
  {
    server: 1153,
    family: "RebelShrooms",
    power: 233124387,
  },
  {
    server: 1153,
    family: "toasts",
    power: 226752473,
  },
  {
    server: 1153,
    family: "Mushroomlings",
    power: 201925333,
  },
  {
    server: 1153,
    family: "Dragons",
    power: 191921986,
  },
  {
    server: 1153,
    family: "goofyshrooms",
    power: 189487183,
  },
  {
    server: 1153,
    family: "Fairytail",
    power: 174269843,
  },
  {
    server: 1154,
    family: "HiddenOutpost",
    power: 1705638291,
  },
  {
    server: 1154,
    family: "Immortals",
    power: 762219255,
  },
  {
    server: 1154,
    family: "SLAYFULBADDIES",
    power: 391002653,
  },
  {
    server: 1154,
    family: "nobodys",
    power: 384504290,
  },
  {
    server: 1154,
    family: "WolfPack",
    power: 383996510,
  },
  {
    server: 1154,
    family: "GrownFolk",
    power: 351649102,
  },
  {
    server: 1154,
    family: "Lucky",
    power: 279113330,
  },
  {
    server: 1154,
    family: "MushroomTrip",
    power: 269248065,
  },
  {
    server: 1154,
    family: "Deathcaps",
    power: 154287773,
  },
  {
    server: 1154,
    family: "NewOrder",
    power: 140469220,
  },
  {
    server: 1155,
    family: "Funguys",
    power: 1477631575,
  },
  {
    server: 1155,
    family: "Caratmakers",
    power: 752122598,
  },
  {
    server: 1155,
    family: "Shrooms",
    power: 470472117,
  },
  {
    server: 1155,
    family: "Salty",
    power: 415360612,
  },
  {
    server: 1155,
    family: "Noobers",
    power: 406349280,
  },
  {
    server: 1155,
    family: "Spored",
    power: 294140473,
  },
  {
    server: 1155,
    family: "Valhalla",
    power: 287535939,
  },
  {
    server: 1155,
    family: "MushSquad",
    power: 277860740,
  },
  {
    server: 1155,
    family: "TheValley",
    power: 275783642,
  },
  {
    server: 1155,
    family: "shroomvibes",
    power: 230597069,
  },
  {
    server: 1156,
    family: "shroomless",
    power: 1694775513,
  },
  {
    server: 1156,
    family: "Shrooms",
    power: 450530003,
  },
  {
    server: 1156,
    family: "Mushroom",
    power: 414135083,
  },
  {
    server: 1156,
    family: "MacDaddyShroom",
    power: 408412515,
  },
  {
    server: 1156,
    family: "501st_legion",
    power: 286971632,
  },
  {
    server: 1156,
    family: "psyllium",
    power: 243439548,
  },
  {
    server: 1156,
    family: "ShadowStalkers",
    power: 239634129,
  },
  {
    server: 1156,
    family: "Tempest",
    power: 221567996,
  },
  {
    server: 1156,
    family: "ShroomVille",
    power: 182756210,
  },
  {
    server: 1156,
    family: "Shroomism",
    power: 144633183,
  },
  {
    server: 1157,
    family: "topFAMILY",
    power: 1599308179,
  },
  {
    server: 1157,
    family: "MushroomVilla",
    power: 657538750,
  },
  {
    server: 1157,
    family: "MushroomEmpire",
    power: 428825213,
  },
  {
    server: 1157,
    family: "Shroomish",
    power: 388828969,
  },
  {
    server: 1157,
    family: "Trippy",
    power: 260938257,
  },
  {
    server: 1157,
    family: "Dragon",
    power: 224535356,
  },
  {
    server: 1157,
    family: "FrungyLeague",
    power: 196928954,
  },
  {
    server: 1157,
    family: "Arcadie",
    power: 182615634,
  },
  {
    server: 1157,
    family: "ShroomieAgenda",
    power: 120156931,
  },
  {
    server: 1157,
    family: "Knoyx",
    power: 113644727,
  },
  {
    server: 1158,
    family: "𝟐𝐋𝐔𝐂𝐊𝐘",
    power: 1770894987,
  },
  {
    server: 1158,
    family: "2UNLucky",
    power: 665513210,
  },
  {
    server: 1158,
    family: "Valhalla",
    power: 577300488,
  },
  {
    server: 1158,
    family: "Shameless",
    power: 455194878,
  },
  {
    server: 1158,
    family: "Fungi",
    power: 361009083,
  },
  {
    server: 1158,
    family: "TheBlackRose",
    power: 266051386,
  },
  {
    server: 1158,
    family: "Power",
    power: 242298242,
  },
  {
    server: 1158,
    family: "RAT",
    power: 172524179,
  },
  {
    server: 1158,
    family: "DoomShrooms",
    power: 170072460,
  },
  {
    server: 1158,
    family: "FairyCircle",
    power: 150992112,
  },
  {
    server: 1159,
    family: "ᵂᵉ’ʳᵉᴼⁿˢʰʳᵒᵒᵐˢ",
    power: 1333867799,
  },
  {
    server: 1159,
    family: "Ronin",
    power: 965806952,
  },
  {
    server: 1159,
    family: "Doomshrooms",
    power: 442111798,
  },
  {
    server: 1159,
    family: "G59",
    power: 379913192,
  },
  {
    server: 1159,
    family: "HitmansShrooms",
    power: 312172411,
  },
  {
    server: 1159,
    family: "FungiArmada",
    power: 249993024,
  },
  {
    server: 1159,
    family: "DragonBall",
    power: 236550192,
  },
  {
    server: 1159,
    family: "Fungi",
    power: 188644186,
  },
  {
    server: 1159,
    family: "DOOM_SHROOMS",
    power: 165924129,
  },
  {
    server: 1159,
    family: "TurtlePower",
    power: 136533847,
  },
  {
    server: 1160,
    family: "Shrooms",
    power: 1600164178,
  },
  {
    server: 1160,
    family: "StarbiesUnited",
    power: 1246579577,
  },
  {
    server: 1160,
    family: "SOS",
    power: 509375361,
  },
  {
    server: 1160,
    family: "CanadianPower",
    power: 274884428,
  },
  {
    server: 1160,
    family: "1000Sunny",
    power: 232493295,
  },
  {
    server: 1160,
    family: "Deadmen",
    power: 222839289,
  },
  {
    server: 1160,
    family: "Nicksfamily",
    power: 194490216,
  },
  {
    server: 1160,
    family: "PartyShrooms",
    power: 192920642,
  },
  {
    server: 1160,
    family: "mushroomsoup",
    power: 172302877,
  },
  {
    server: 1160,
    family: "MushroomGuys",
    power: 122374987,
  },
  {
    server: 1161,
    family: "Grind4Fun",
    power: 1719728482,
  },
  {
    server: 1161,
    family: "Creampufflover",
    power: 1032894290,
  },
  {
    server: 1161,
    family: "Solaria",
    power: 535903527,
  },
  {
    server: 1161,
    family: "HellsNation",
    power: 268683036,
  },
  {
    server: 1161,
    family: "Nest",
    power: 266469730,
  },
  {
    server: 1161,
    family: "7DeadlyShrooms",
    power: 254019832,
  },
  {
    server: 1161,
    family: "Akatsuki",
    power: 253855349,
  },
  {
    server: 1161,
    family: "Cake",
    power: 165324998,
  },
  {
    server: 1161,
    family: "Eden",
    power: 151960931,
  },
  {
    server: 1161,
    family: "ShroomKnights",
    power: 130995899,
  },
  {
    server: 1162,
    family: "Night",
    power: 1680419066,
  },
  {
    server: 1162,
    family: "VALHALLA",
    power: 734053124,
  },
  {
    server: 1162,
    family: "Elite",
    power: 540607416,
  },
  {
    server: 1162,
    family: "Paytowin",
    power: 329382282,
  },
  {
    server: 1162,
    family: "OppenHeimer",
    power: 313305082,
  },
  {
    server: 1162,
    family: "420canada",
    power: 225851869,
  },
  {
    server: 1162,
    family: "mccorp",
    power: 219164470,
  },
  {
    server: 1162,
    family: "ToadsFamily",
    power: 200988070,
  },
  {
    server: 1162,
    family: "Nomads",
    power: 188144108,
  },
  {
    server: 1162,
    family: "mommieshummers",
    power: 187263874,
  },
  {
    server: 1163,
    family: "8bit",
    power: 1612908441,
  },
  {
    server: 1163,
    family: "Shromies",
    power: 826957977,
  },
  {
    server: 1163,
    family: "ShakeNBake",
    power: 360796488,
  },
  {
    server: 1163,
    family: "Spore",
    power: 296493580,
  },
  {
    server: 1163,
    family: "ShroomDoom",
    power: 296294631,
  },
  {
    server: 1163,
    family: "haters",
    power: 291027633,
  },
  {
    server: 1163,
    family: "MushroomQueen",
    power: 259172215,
  },
  {
    server: 1163,
    family: "WhiteLotus",
    power: 227782403,
  },
  {
    server: 1163,
    family: "ShroomCrimeFam",
    power: 209083975,
  },
  {
    server: 1163,
    family: "Pros",
    power: 181560447,
  },
  {
    server: 1164,
    family: "GoonShrooms",
    power: 1629992681,
  },
  {
    server: 1164,
    family: "Deathbringers",
    power: 707584422,
  },
  {
    server: 1164,
    family: "Strawhats",
    power: 583797870,
  },
  {
    server: 1164,
    family: "Vagabonds",
    power: 418490206,
  },
  {
    server: 1164,
    family: "FinalFantasy",
    power: 347299000,
  },
  {
    server: 1164,
    family: "Shroomers",
    power: 229254525,
  },
  {
    server: 1164,
    family: "itchyonions",
    power: 207259408,
  },
  {
    server: 1164,
    family: "TheOfficeFans",
    power: 196480567,
  },
  {
    server: 1164,
    family: "ShroomFest",
    power: 179149348,
  },
  {
    server: 1164,
    family: "Security",
    power: 127377084,
  },
  {
    server: 1165,
    family: "Synergy",
    power: 1549045494,
  },
  {
    server: 1165,
    family: "SHROOMTASTIC",
    power: 1174561137,
  },
  {
    server: 1165,
    family: "MFs",
    power: 348036642,
  },
  {
    server: 1165,
    family: "WeAreGroot",
    power: 282621070,
  },
  {
    server: 1165,
    family: "ShroomLine",
    power: 280621236,
  },
  {
    server: 1165,
    family: "Olympus",
    power: 248638646,
  },
  {
    server: 1165,
    family: "REAPERS",
    power: 239284732,
  },
  {
    server: 1165,
    family: "MooseClan",
    power: 156014088,
  },
  {
    server: 1165,
    family: "HOWLERS",
    power: 135135597,
  },
  {
    server: 1165,
    family: "lilyfamily",
    power: 92977579,
  },
  {
    server: 1166,
    family: "KAΩS",
    power: 1742497301,
  },
  {
    server: 1166,
    family: "GodlessHeathen",
    power: 603940425,
  },
  {
    server: 1166,
    family: "ChaoticInkCaps",
    power: 453154944,
  },
  {
    server: 1166,
    family: "TaterChips",
    power: 399863326,
  },
  {
    server: 1166,
    family: "Aurous",
    power: 350663477,
  },
  {
    server: 1166,
    family: "shroomarmy",
    power: 300415536,
  },
  {
    server: 1166,
    family: "StonerLife",
    power: 231827164,
  },
  {
    server: 1166,
    family: "KINGS",
    power: 179304050,
  },
  {
    server: 1166,
    family: "pack",
    power: 159607594,
  },
  {
    server: 1166,
    family: "WhoCares",
    power: 110043342,
  },
  {
    server: 1167,
    family: "Chaotic",
    power: 1453013094,
  },
  {
    server: 1167,
    family: "WARCRAFT",
    power: 739808614,
  },
  {
    server: 1167,
    family: "EverFlame",
    power: 310169152,
  },
  {
    server: 1167,
    family: "MushroomArmy",
    power: 279765218,
  },
  {
    server: 1167,
    family: "MilTownMshRoom",
    power: 276987323,
  },
  {
    server: 1167,
    family: "blazed",
    power: 270737611,
  },
  {
    server: 1167,
    family: "Crucified",
    power: 261475434,
  },
  {
    server: 1167,
    family: "TheAzylum",
    power: 260845991,
  },
  {
    server: 1167,
    family: "WolfPack",
    power: 194116685,
  },
  {
    server: 1167,
    family: "Infernos",
    power: 135152875,
  },
  {
    server: 1168,
    family: "BTS",
    power: 1507919866,
  },
  {
    server: 1168,
    family: "DeathCaps",
    power: 1085038045,
  },
  {
    server: 1168,
    family: "NoGameNoLife",
    power: 1050754265,
  },
  {
    server: 1168,
    family: "the_shrooms",
    power: 268251146,
  },
  {
    server: 1168,
    family: "HighOnShrooms",
    power: 233900075,
  },
  {
    server: 1168,
    family: "RamRaids",
    power: 193841048,
  },
  {
    server: 1168,
    family: "death",
    power: 192657156,
  },
  {
    server: 1168,
    family: "dragons",
    power: 181840882,
  },
  {
    server: 1168,
    family: "powerboys",
    power: 180734570,
  },
  {
    server: 1168,
    family: "RainbowMafia",
    power: 171888680,
  },
  {
    server: 1169,
    family: "Chefs一R一Us",
    power: 1531139261,
  },
  {
    server: 1169,
    family: "OnePiece",
    power: 596971415,
  },
  {
    server: 1169,
    family: "theFam",
    power: 387893167,
  },
  {
    server: 1169,
    family: "Lemon",
    power: 358813219,
  },
  {
    server: 1169,
    family: "Limitless",
    power: 342659463,
  },
  {
    server: 1169,
    family: "ShroomLife",
    power: 300653541,
  },
  {
    server: 1169,
    family: "Happy",
    power: 277463528,
  },
  {
    server: 1169,
    family: "Yakuza",
    power: 234938227,
  },
  {
    server: 1169,
    family: "Poison",
    power: 220818075,
  },
  {
    server: 1169,
    family: "OneCrew",
    power: 187613400,
  },
  {
    server: 1170,
    family: "M3rkpocalypse",
    power: 1427701237,
  },
  {
    server: 1170,
    family: "Pinnacle",
    power: 1100017676,
  },
  {
    server: 1170,
    family: "Quantum7",
    power: 450838189,
  },
  {
    server: 1170,
    family: "Gym",
    power: 319273963,
  },
  {
    server: 1170,
    family: "MushromKingdom",
    power: 253454622,
  },
  {
    server: 1170,
    family: "TheToastPeople",
    power: 247526633,
  },
  {
    server: 1170,
    family: "Slytherin",
    power: 244098118,
  },
  {
    server: 1170,
    family: "Cake",
    power: 210167350,
  },
  {
    server: 1170,
    family: "Mushroomcult",
    power: 185837667,
  },
  {
    server: 1170,
    family: "Dragonball",
    power: 174112820,
  },
  {
    server: 1171,
    family: "FilthySpores",
    power: 1405734496,
  },
  {
    server: 1171,
    family: "RiseOfMushroom",
    power: 635146503,
  },
  {
    server: 1171,
    family: "LionsMainMen",
    power: 341349826,
  },
  {
    server: 1171,
    family: "MushroomArmy",
    power: 323837546,
  },
  {
    server: 1171,
    family: "LiverMushrooms",
    power: 289333515,
  },
  {
    server: 1171,
    family: "SporesńMores",
    power: 276046993,
  },
  {
    server: 1171,
    family: "Immortals",
    power: 239581453,
  },
  {
    server: 1171,
    family: "AbsolutChaos",
    power: 216142239,
  },
  {
    server: 1171,
    family: "THC",
    power: 215828932,
  },
  {
    server: 1171,
    family: "Aces",
    power: 213147524,
  },
  {
    server: 1172,
    family: "Sporium",
    power: 1415957545,
  },
  {
    server: 1172,
    family: "FungiFlock",
    power: 905869101,
  },
  {
    server: 1172,
    family: "Champignons",
    power: 620111349,
  },
  {
    server: 1172,
    family: "DaJokesters",
    power: 343642961,
  },
  {
    server: 1172,
    family: "Mushalorians",
    power: 298909831,
  },
  {
    server: 1172,
    family: "BloodBorne",
    power: 288095983,
  },
  {
    server: 1172,
    family: "MushGrove",
    power: 239886497,
  },
  {
    server: 1172,
    family: "Frogpad",
    power: 167491287,
  },
  {
    server: 1172,
    family: "HaveFun",
    power: 94861643,
  },
  {
    server: 1172,
    family: "Maincharacters",
    power: 71431447,
  },
  {
    server: 1173,
    family: "SOULS",
    power: 1440611724,
  },
  {
    server: 1173,
    family: "TrippyShrooms",
    power: 640924962,
  },
  {
    server: 1173,
    family: "PSILOCYBES",
    power: 532546163,
  },
  {
    server: 1173,
    family: "FreedomFighter",
    power: 348772213,
  },
  {
    server: 1173,
    family: "TheCult",
    power: 262574370,
  },
  {
    server: 1173,
    family: "HabitatKings",
    power: 246572004,
  },
  {
    server: 1173,
    family: "Vikings",
    power: 233801294,
  },
  {
    server: 1173,
    family: "RedShrooms",
    power: 195482546,
  },
  {
    server: 1173,
    family: "DeathShrooms",
    power: 160571664,
  },
  {
    server: 1173,
    family: "Coolshrooms",
    power: 146486045,
  },
  {
    server: 1174,
    family: "Akatsuki",
    power: 1423358217,
  },
  {
    server: 1174,
    family: "DeathRats",
    power: 975731454,
  },
  {
    server: 1174,
    family: "Shadowfox",
    power: 381635044,
  },
  {
    server: 1174,
    family: "MagicSHROOM420",
    power: 339469638,
  },
  {
    server: 1174,
    family: "TheHolyFamily",
    power: 247391695,
  },
  {
    server: 1174,
    family: "Doge",
    power: 183977732,
  },
  {
    server: 1174,
    family: "kushykush",
    power: 178210073,
  },
  {
    server: 1174,
    family: "creepitshroom",
    power: 177061342,
  },
  {
    server: 1174,
    family: "Deathcaps",
    power: 126764195,
  },
  {
    server: 1174,
    family: "FOSTERS",
    power: 116957204,
  },
  {
    server: 1175,
    family: "Dopamine",
    power: 1402025602,
  },
  {
    server: 1175,
    family: "BrunchTime",
    power: 1221226623,
  },
  {
    server: 1175,
    family: "SporeCorps",
    power: 432951566,
  },
  {
    server: 1175,
    family: "BigC_Empire",
    power: 282530311,
  },
  {
    server: 1175,
    family: "Loa",
    power: 268912264,
  },
  {
    server: 1175,
    family: "TheCoffeeDen",
    power: 232049752,
  },
  {
    server: 1175,
    family: "Hotpot",
    power: 184529999,
  },
  {
    server: 1175,
    family: "Nightshade",
    power: 182302214,
  },
  {
    server: 1175,
    family: "ChumBucket",
    power: 165543762,
  },
  {
    server: 1175,
    family: "TheAzylum",
    power: 162879156,
  },
  {
    server: 1176,
    family: "Awesomesauce",
    power: 1634245145,
  },
  {
    server: 1176,
    family: "CommieCorner",
    power: 820261150,
  },
  {
    server: 1176,
    family: "Raiders",
    power: 485478175,
  },
  {
    server: 1176,
    family: "HaHaCienda",
    power: 241369814,
  },
  {
    server: 1176,
    family: "Jingoku",
    power: 231881817,
  },
  {
    server: 1176,
    family: "ShroomGods",
    power: 225041975,
  },
  {
    server: 1176,
    family: "Shrooms",
    power: 211064517,
  },
  {
    server: 1176,
    family: "FungiFoxes",
    power: 202016934,
  },
  {
    server: 1176,
    family: "Theshrooms",
    power: 201494294,
  },
  {
    server: 1176,
    family: "TopShroomz",
    power: 131684084,
  },
  {
    server: 1177,
    family: "Boba🧋",
    power: 1683330405,
  },
  {
    server: 1177,
    family: "DaFunGuys",
    power: 722377412,
  },
  {
    server: 1177,
    family: "BrainGemPirate",
    power: 349062754,
  },
  {
    server: 1177,
    family: "Guardians",
    power: 279939685,
  },
  {
    server: 1177,
    family: "SporeExplorer",
    power: 274398581,
  },
  {
    server: 1177,
    family: "Hunters",
    power: 241458941,
  },
  {
    server: 1177,
    family: "throwinghands",
    power: 239351041,
  },
  {
    server: 1177,
    family: "Cheese",
    power: 213614737,
  },
  {
    server: 1177,
    family: "SuperEarth",
    power: 206312221,
  },
  {
    server: 1177,
    family: "StrawHats",
    power: 141530387,
  },
  {
    server: 1178,
    family: "MagicMushrooms",
    power: 1619530485,
  },
  {
    server: 1178,
    family: "Elysia",
    power: 754898523,
  },
  {
    server: 1178,
    family: "Murder_Inc",
    power: 649351629,
  },
  {
    server: 1178,
    family: "OpiumHQ",
    power: 544596906,
  },
  {
    server: 1178,
    family: "TossMyTrundle",
    power: 493512249,
  },
  {
    server: 1178,
    family: "SHROOMS",
    power: 226028983,
  },
  {
    server: 1178,
    family: "HitMyHyde",
    power: 193043581,
  },
  {
    server: 1178,
    family: "gdgbfcxh",
    power: 177622525,
  },
  {
    server: 1178,
    family: "TheShikigamis",
    power: 144401898,
  },
  {
    server: 1178,
    family: "victory",
    power: 120532524,
  },
  {
    server: 1179,
    family: "GoodVibeTribe",
    power: 1295874826,
  },
  {
    server: 1179,
    family: "Wonderland",
    power: 716078956,
  },
  {
    server: 1179,
    family: "Idleon",
    power: 581638602,
  },
  {
    server: 1179,
    family: "TheShroomGang",
    power: 216488782,
  },
  {
    server: 1179,
    family: "VikingShrooms",
    power: 213044511,
  },
  {
    server: 1179,
    family: "FungFuMushroom",
    power: 192738568,
  },
  {
    server: 1179,
    family: "StrawHats",
    power: 158032705,
  },
  {
    server: 1179,
    family: "MrX",
    power: 123817580,
  },
  {
    server: 1179,
    family: "ShroomGods",
    power: 116084970,
  },
  {
    server: 1179,
    family: "ShroomShed",
    power: 60871830,
  },
  {
    server: 1180,
    family: "Degens",
    power: 1619014779,
  },
  {
    server: 1180,
    family: "ShroomLife",
    power: 797176061,
  },
  {
    server: 1180,
    family: "Gremlins",
    power: 407806675,
  },
  {
    server: 1180,
    family: "DMT",
    power: 319429454,
  },
  {
    server: 1180,
    family: "Sunagakure",
    power: 297127594,
  },
  {
    server: 1180,
    family: "CreamDream",
    power: 275105029,
  },
  {
    server: 1180,
    family: "BangarangSquad",
    power: 67022157,
  },
  {
    server: 1180,
    family: "ShadowRage",
    power: 60394868,
  },
  {
    server: 1180,
    family: "StonedParents",
    power: 44353481,
  },
  {
    server: 1180,
    family: "THC",
    power: 41099281,
  },
  {
    server: 1181,
    family: "DragonLegacy",
    power: 1573437134,
  },
  {
    server: 1181,
    family: "ThePeeps",
    power: 407981579,
  },
  {
    server: 1181,
    family: "Nope",
    power: 379575031,
  },
  {
    server: 1181,
    family: "LogHorizon",
    power: 295723679,
  },
  {
    server: 1181,
    family: "Sunlight",
    power: 281664247,
  },
  {
    server: 1181,
    family: "FungusAmongus",
    power: 264093078,
  },
  {
    server: 1181,
    family: "Magical",
    power: 236649102,
  },
  {
    server: 1181,
    family: "InfinitiShroom",
    power: 224658031,
  },
  {
    server: 1181,
    family: "Popcorn",
    power: 154757619,
  },
  {
    server: 1181,
    family: "Akatsuki",
    power: 141935381,
  },
  {
    server: 1182,
    family: "Mortality",
    power: 1614714760,
  },
  {
    server: 1182,
    family: "Villainous",
    power: 535616463,
  },
  {
    server: 1182,
    family: "AbyssKnights",
    power: 324989452,
  },
  {
    server: 1182,
    family: "Ravenclaw",
    power: 288615255,
  },
  {
    server: 1182,
    family: "Shroomlords",
    power: 271853899,
  },
  {
    server: 1182,
    family: "Tsukuyomi",
    power: 269624773,
  },
  {
    server: 1182,
    family: "Midknights",
    power: 190738351,
  },
  {
    server: 1182,
    family: "winners",
    power: 180885561,
  },
  {
    server: 1182,
    family: "FungusAmongUs",
    power: 160458585,
  },
  {
    server: 1182,
    family: "BoomShrooms",
    power: 149281027,
  },
  {
    server: 1183,
    family: "Snackpack",
    power: 1530519765,
  },
  {
    server: 1183,
    family: "SinfulShrooms",
    power: 657780658,
  },
  {
    server: 1183,
    family: "Zfighters",
    power: 453686083,
  },
  {
    server: 1183,
    family: "Exorcists",
    power: 318144329,
  },
  {
    server: 1183,
    family: "RabidShrooms",
    power: 308312541,
  },
  {
    server: 1183,
    family: "Noobs",
    power: 295230232,
  },
  {
    server: 1183,
    family: "DaDan",
    power: 168594022,
  },
  {
    server: 1183,
    family: "drknghts",
    power: 108013304,
  },
  {
    server: 1183,
    family: "Ultra",
    power: 67948678,
  },
  {
    server: 1183,
    family: "Warlords",
    power: 58313406,
  },
  {
    server: 1184,
    family: "GoodestBois",
    power: 1494799497,
  },
  {
    server: 1184,
    family: "DogHouse",
    power: 917752797,
  },
  {
    server: 1184,
    family: "Keres",
    power: 565508639,
  },
  {
    server: 1184,
    family: "Atrium",
    power: 392901369,
  },
  {
    server: 1184,
    family: "GOONZSquad",
    power: 272372849,
  },
  {
    server: 1184,
    family: "mushroomlove",
    power: 265786753,
  },
  {
    server: 1184,
    family: "KamiKasy",
    power: 238408471,
  },
  {
    server: 1184,
    family: "Yggdrasil",
    power: 214257516,
  },
  {
    server: 1184,
    family: "EliteOutlaws",
    power: 207531902,
  },
  {
    server: 1184,
    family: "Shroomyshrooms",
    power: 184555337,
  },
  {
    server: 1185,
    family: "Shroomland",
    power: 1525691260,
  },
  {
    server: 1185,
    family: "UnitedShrooms",
    power: 492165322,
  },
  {
    server: 1185,
    family: "Toads",
    power: 333952047,
  },
  {
    server: 1185,
    family: "Anonymous",
    power: 281393492,
  },
  {
    server: 1185,
    family: "BigHut",
    power: 279111253,
  },
  {
    server: 1185,
    family: "blazingkittens",
    power: 244188516,
  },
  {
    server: 1185,
    family: "FunGuys",
    power: 243669893,
  },
  {
    server: 1185,
    family: "HypnoticAdv",
    power: 242321795,
  },
  {
    server: 1185,
    family: "Reapers",
    power: 215520564,
  },
  {
    server: 1185,
    family: "Diabolos",
    power: 111110020,
  },
  {
    server: 1186,
    family: "OnlyShrooMs",
    power: 1104490495,
  },
  {
    server: 1186,
    family: "Legends",
    power: 967796376,
  },
  {
    server: 1186,
    family: "Valhalla",
    power: 531437309,
  },
  {
    server: 1186,
    family: "Heartless",
    power: 302420637,
  },
  {
    server: 1186,
    family: "GoodGame",
    power: 274629704,
  },
  {
    server: 1186,
    family: "SCAVENGERS",
    power: 211517912,
  },
  {
    server: 1186,
    family: "ShroomLife",
    power: 184011925,
  },
  {
    server: 1186,
    family: "Shroomtastic",
    power: 170391486,
  },
  {
    server: 1186,
    family: "Mushy",
    power: 147135258,
  },
  {
    server: 1186,
    family: "EPIC",
    power: 121421875,
  },
  {
    server: 1187,
    family: "Fungi_Force",
    power: 1318107999,
  },
  {
    server: 1187,
    family: "Death_Caps",
    power: 727906716,
  },
  {
    server: 1187,
    family: "FungusAmongus",
    power: 565994263,
  },
  {
    server: 1187,
    family: "Hollow",
    power: 269678788,
  },
  {
    server: 1187,
    family: "SmokePit",
    power: 253503038,
  },
  {
    server: 1187,
    family: "AEB",
    power: 242884722,
  },
  {
    server: 1187,
    family: "MONKEYZZ",
    power: 223319718,
  },
  {
    server: 1187,
    family: "Bandits",
    power: 175100656,
  },
  {
    server: 1187,
    family: "Vicinity",
    power: 161164234,
  },
  {
    server: 1187,
    family: "KINGS",
    power: 137748753,
  },
  {
    server: 1188,
    family: "venom",
    power: 1454395281,
  },
  {
    server: 1188,
    family: "Antivenom",
    power: 1116548047,
  },
  {
    server: 1188,
    family: "Psilocybin",
    power: 513506835,
  },
  {
    server: 1188,
    family: "TheChosen",
    power: 324187960,
  },
  {
    server: 1188,
    family: "DaNewbs",
    power: 284476886,
  },
  {
    server: 1188,
    family: "TheYeagerist",
    power: 278409285,
  },
  {
    server: 1188,
    family: "MapleTree",
    power: 258185293,
  },
  {
    server: 1188,
    family: "PantsOptional",
    power: 177126810,
  },
  {
    server: 1188,
    family: "DoomShroom",
    power: 136009611,
  },
  {
    server: 1188,
    family: "yuzu_shroomy",
    power: 116318526,
  },
  {
    server: 1189,
    family: "Forsaken",
    power: 1602745537,
  },
  {
    server: 1189,
    family: "Maple",
    power: 610392858,
  },
  {
    server: 1189,
    family: "WolvesWrath",
    power: 561426773,
  },
  {
    server: 1189,
    family: "trippin",
    power: 325214838,
  },
  {
    server: 1189,
    family: "shroom_room",
    power: 321977845,
  },
  {
    server: 1189,
    family: "SmokeSumPurP",
    power: 319632458,
  },
  {
    server: 1189,
    family: "Doom_shrooms",
    power: 260802736,
  },
  {
    server: 1189,
    family: "MushieArmy",
    power: 249741776,
  },
  {
    server: 1189,
    family: "Bag_o_Shrooms",
    power: 161990719,
  },
  {
    server: 1189,
    family: "ThiccBoiis",
    power: 152488055,
  },
  {
    server: 1190,
    family: "NightCaps",
    power: 1460865054,
  },
  {
    server: 1190,
    family: "Eternium",
    power: 1112566725,
  },
  {
    server: 1190,
    family: "Rebirth",
    power: 436418061,
  },
  {
    server: 1190,
    family: "Hestia",
    power: 268962904,
  },
  {
    server: 1190,
    family: "Valhalla",
    power: 247711494,
  },
  {
    server: 1190,
    family: "AnimeLovers",
    power: 245648690,
  },
  {
    server: 1190,
    family: "LivingLegends",
    power: 243850803,
  },
  {
    server: 1190,
    family: "Rainbowshrooms",
    power: 228597404,
  },
  {
    server: 1190,
    family: "Nightmares",
    power: 192795003,
  },
  {
    server: 1190,
    family: "ShroomBoom",
    power: 148719489,
  },
  {
    server: 1191,
    family: "Aincrad",
    power: 1465475889,
  },
  {
    server: 1191,
    family: "ShroomLords",
    power: 960000878,
  },
  {
    server: 1191,
    family: "PumpkinPatch",
    power: 895861914,
  },
  {
    server: 1191,
    family: "FLOW",
    power: 343944851,
  },
  {
    server: 1191,
    family: "Taiwan",
    power: 333263472,
  },
  {
    server: 1191,
    family: "shroomz4life",
    power: 279514008,
  },
  {
    server: 1191,
    family: "OtherWorld",
    power: 259586834,
  },
  {
    server: 1191,
    family: "HellsMinions",
    power: 255794477,
  },
  {
    server: 1191,
    family: "HOLYSHROOMERS",
    power: 243450312,
  },
  {
    server: 1191,
    family: "Shishow",
    power: 189670593,
  },
  {
    server: 1192,
    family: "Manifest",
    power: 1471600613,
  },
  {
    server: 1192,
    family: "TheColony",
    power: 986697620,
  },
  {
    server: 1192,
    family: "DragonsDen",
    power: 535334273,
  },
  {
    server: 1192,
    family: "Vault_33",
    power: 270175242,
  },
  {
    server: 1192,
    family: "Wildlands",
    power: 263174881,
  },
  {
    server: 1192,
    family: "ChipiChapaClan",
    power: 246122692,
  },
  {
    server: 1192,
    family: "MARVEL",
    power: 215188588,
  },
  {
    server: 1192,
    family: "TuneSquad",
    power: 201704147,
  },
  {
    server: 1192,
    family: "Bestfamever",
    power: 184290241,
  },
  {
    server: 1192,
    family: "LEGENDS",
    power: 147209252,
  },
  {
    server: 1193,
    family: "BadgerDen",
    power: 1638894739,
  },
  {
    server: 1193,
    family: "Enticer",
    power: 866161207,
  },
  {
    server: 1193,
    family: "WeOnShrooms",
    power: 694380740,
  },
  {
    server: 1193,
    family: "Anime4Ever",
    power: 364292426,
  },
  {
    server: 1193,
    family: "Enoki",
    power: 289297842,
  },
  {
    server: 1193,
    family: "mushyPho",
    power: 279546157,
  },
  {
    server: 1193,
    family: "funguys",
    power: 226132259,
  },
  {
    server: 1193,
    family: "PandaHut",
    power: 186623214,
  },
  {
    server: 1193,
    family: "ροωεr",
    power: 166725508,
  },
  {
    server: 1193,
    family: "Shroomies",
    power: 157148898,
  },
  {
    server: 1194,
    family: "OnlyLamps",
    power: 1581279477,
  },
  {
    server: 1194,
    family: "Niteshade",
    power: 1239268022,
  },
  {
    server: 1194,
    family: "SuperCats",
    power: 591536831,
  },
  {
    server: 1194,
    family: "funinja",
    power: 304233944,
  },
  {
    server: 1194,
    family: "Ouroboros",
    power: 282756700,
  },
  {
    server: 1194,
    family: "SIGMAMALES",
    power: 258234126,
  },
  {
    server: 1194,
    family: "THE_PRO_PLAYER",
    power: 256719501,
  },
  {
    server: 1194,
    family: "joinifyouwant",
    power: 236203340,
  },
  {
    server: 1194,
    family: "Shroomers",
    power: 228197570,
  },
  {
    server: 1194,
    family: "SillyGooseClub",
    power: 224412114,
  },
  {
    server: 1195,
    family: "Avengers",
    power: 1457025675,
  },
  {
    server: 1195,
    family: "LampRubbers",
    power: 1142629120,
  },
  {
    server: 1195,
    family: "Heroes_Academy",
    power: 419668907,
  },
  {
    server: 1195,
    family: "TheGoingMerry",
    power: 251135117,
  },
  {
    server: 1195,
    family: "Freedom",
    power: 227683518,
  },
  {
    server: 1195,
    family: "Shroomers",
    power: 193827383,
  },
  {
    server: 1195,
    family: "Shrooms",
    power: 179831021,
  },
  {
    server: 1195,
    family: "ANONYMOUS",
    power: 173106411,
  },
  {
    server: 1195,
    family: "Tempest",
    power: 139584557,
  },
  {
    server: 1195,
    family: "Shroomys",
    power: 136941275,
  },
  {
    server: 1196,
    family: "Slayers",
    power: 1463916973,
  },
  {
    server: 1196,
    family: "Psilocybin",
    power: 798872324,
  },
  {
    server: 1196,
    family: "FIGJAM",
    power: 554186068,
  },
  {
    server: 1196,
    family: "Shroomtown",
    power: 386338919,
  },
  {
    server: 1196,
    family: "NordicWolfs",
    power: 310838970,
  },
  {
    server: 1196,
    family: "Mythic",
    power: 278406110,
  },
  {
    server: 1196,
    family: "AGENCY",
    power: 246666334,
  },
  {
    server: 1196,
    family: "chill",
    power: 213938088,
  },
  {
    server: 1196,
    family: "Shroomville",
    power: 148787278,
  },
  {
    server: 1196,
    family: "MushFitz",
    power: 143909594,
  },
  {
    server: 1197,
    family: "OutLawZ",
    power: 1599580801,
  },
  {
    server: 1197,
    family: "NewEra",
    power: 751586615,
  },
  {
    server: 1197,
    family: "TheMafia",
    power: 601683998,
  },
  {
    server: 1197,
    family: "DemiGodz",
    power: 302623363,
  },
  {
    server: 1197,
    family: "ShroomFellows",
    power: 254196728,
  },
  {
    server: 1197,
    family: "OneOfGus",
    power: 242236884,
  },
  {
    server: 1197,
    family: "MushyBoys",
    power: 216238093,
  },
  {
    server: 1197,
    family: "ShroomTown",
    power: 213281980,
  },
  {
    server: 1197,
    family: "ShroomCity",
    power: 207606010,
  },
  {
    server: 1197,
    family: "LethalMushroom",
    power: 194673840,
  },
  {
    server: 1198,
    family: "NightRaid",
    power: 1381635013,
  },
  {
    server: 1198,
    family: "Province",
    power: 705596355,
  },
  {
    server: 1198,
    family: "Spores",
    power: 515035118,
  },
  {
    server: 1198,
    family: "TheFunGuys",
    power: 360195545,
  },
  {
    server: 1198,
    family: "ShroomGarden",
    power: 328096565,
  },
  {
    server: 1198,
    family: "Kimchi",
    power: 216290823,
  },
  {
    server: 1198,
    family: "Ocean",
    power: 215319023,
  },
  {
    server: 1198,
    family: "ETHEREAL",
    power: 200463486,
  },
  {
    server: 1198,
    family: "Elmo",
    power: 171926282,
  },
  {
    server: 1198,
    family: "Adams",
    power: 117610413,
  },
  {
    server: 1199,
    family: "PhantomShrooms",
    power: 1580147190,
  },
  {
    server: 1199,
    family: "MagikShroom",
    power: 1034967269,
  },
  {
    server: 1199,
    family: "Fungi",
    power: 386340097,
  },
  {
    server: 1199,
    family: "DeathWatch",
    power: 260734595,
  },
  {
    server: 1199,
    family: "Hoesandbros",
    power: 235734972,
  },
  {
    server: 1199,
    family: "PsychoShrooms",
    power: 229309647,
  },
  {
    server: 1199,
    family: "WerewolfFeast",
    power: 220864098,
  },
  {
    server: 1199,
    family: "MushroomTips",
    power: 171011618,
  },
  {
    server: 1199,
    family: "warriors",
    power: 164657365,
  },
  {
    server: 1199,
    family: "TheDuck",
    power: 149080487,
  },
  {
    server: 1200,
    family: "ChildSupport",
    power: 1278839962,
  },
  {
    server: 1200,
    family: "SAO",
    power: 682532022,
  },
  {
    server: 1200,
    family: "SupremeShrooms",
    power: 332863997,
  },
  {
    server: 1200,
    family: "Loyalty",
    power: 250926867,
  },
  {
    server: 1200,
    family: "Knightsdark",
    power: 245531556,
  },
  {
    server: 1200,
    family: "Bloodlust",
    power: 228595278,
  },
  {
    server: 1200,
    family: "mushroom45gang",
    power: 212193867,
  },
  {
    server: 1200,
    family: "L0gH0rizon",
    power: 196416144,
  },
  {
    server: 1200,
    family: "Crusade",
    power: 190129096,
  },
  {
    server: 1200,
    family: "DEATH",
    power: 128501953,
  },
  {
    server: 1201,
    family: "Fortitude",
    power: 1628127783,
  },
  {
    server: 1201,
    family: "ARISE",
    power: 606617670,
  },
  {
    server: 1201,
    family: "Hallowseve",
    power: 339878634,
  },
  {
    server: 1201,
    family: "Grind4Fun",
    power: 267230154,
  },
  {
    server: 1201,
    family: "TheWorkshop",
    power: 248998886,
  },
  {
    server: 1201,
    family: "Utopia",
    power: 198049198,
  },
  {
    server: 1201,
    family: "LaughingCoffin",
    power: 188538893,
  },
  {
    server: 1201,
    family: "illgottengains",
    power: 169734361,
  },
  {
    server: 1201,
    family: "ShroomNchill",
    power: 169114642,
  },
  {
    server: 1201,
    family: "Shadow",
    power: 155208884,
  },
  {
    server: 1202,
    family: "Gatekeepers",
    power: 1471455257,
  },
  {
    server: 1202,
    family: "Shrooms",
    power: 581769423,
  },
  {
    server: 1202,
    family: "Hell",
    power: 505313463,
  },
  {
    server: 1202,
    family: "AINCRAD",
    power: 431654668,
  },
  {
    server: 1202,
    family: "Faded",
    power: 286408114,
  },
  {
    server: 1202,
    family: "OTV",
    power: 240265386,
  },
  {
    server: 1202,
    family: "Duck",
    power: 214574321,
  },
  {
    server: 1202,
    family: "Ragnarok",
    power: 210536263,
  },
  {
    server: 1202,
    family: "Shroomtrail",
    power: 210270384,
  },
  {
    server: 1202,
    family: "DPS",
    power: 183451973,
  },
  {
    server: 1203,
    family: "Ragnarok",
    power: 1492997261,
  },
  {
    server: 1203,
    family: "Immortalz",
    power: 544645870,
  },
  {
    server: 1203,
    family: "TheAsylum",
    power: 514989868,
  },
  {
    server: 1203,
    family: "LegionofKings",
    power: 455961824,
  },
  {
    server: 1203,
    family: "SoloLeveling",
    power: 353419163,
  },
  {
    server: 1203,
    family: "Addicted",
    power: 340906429,
  },
  {
    server: 1203,
    family: "MidWestFam",
    power: 277362337,
  },
  {
    server: 1203,
    family: "Shroomies",
    power: 245436049,
  },
  {
    server: 1203,
    family: "A4H",
    power: 224781879,
  },
  {
    server: 1203,
    family: "Unattended",
    power: 138841986,
  },
  {
    server: 1204,
    family: "ShroomCorps",
    power: 1606995376,
  },
  {
    server: 1204,
    family: "SisterCorps",
    power: 761955173,
  },
  {
    server: 1204,
    family: "goodvibes",
    power: 373079771,
  },
  {
    server: 1204,
    family: "Bromosexuals",
    power: 289033659,
  },
  {
    server: 1204,
    family: "Caramelo",
    power: 273950253,
  },
  {
    server: 1204,
    family: "DragonLegacy",
    power: 226160844,
  },
  {
    server: 1204,
    family: "LampLighters",
    power: 217951832,
  },
  {
    server: 1204,
    family: "Vikings",
    power: 185448514,
  },
  {
    server: 1204,
    family: "shroomville",
    power: 163324134,
  },
  {
    server: 1204,
    family: "Team_Boricua",
    power: 123278533,
  },
  {
    server: 1205,
    family: "Stonecutters",
    power: 1364829806,
  },
  {
    server: 1205,
    family: "MAUSOLEUM",
    power: 623696311,
  },
  {
    server: 1205,
    family: "DREADNOUGHT",
    power: 406729673,
  },
  {
    server: 1205,
    family: "MAGICMUSHROOMS",
    power: 307728621,
  },
  {
    server: 1205,
    family: "44Legions",
    power: 298204155,
  },
  {
    server: 1205,
    family: "DemonShroom",
    power: 250129266,
  },
  {
    server: 1205,
    family: "D4M4G3D",
    power: 248503341,
  },
  {
    server: 1205,
    family: "Dhickdawgs",
    power: 244625520,
  },
  {
    server: 1205,
    family: "litrina",
    power: 227173112,
  },
  {
    server: 1205,
    family: "FAMILY",
    power: 179710391,
  },
  {
    server: 1206,
    family: "HAVOC",
    power: 1311412833,
  },
  {
    server: 1206,
    family: "Voided",
    power: 1022610831,
  },
  {
    server: 1206,
    family: "BarBearians",
    power: 597580976,
  },
  {
    server: 1206,
    family: "Kaizen",
    power: 388660405,
  },
  {
    server: 1206,
    family: "Magic",
    power: 236610236,
  },
  {
    server: 1206,
    family: "Funguys",
    power: 230118750,
  },
  {
    server: 1206,
    family: "SHROOMIES",
    power: 220799180,
  },
  {
    server: 1206,
    family: "Draconis",
    power: 140192213,
  },
  {
    server: 1206,
    family: "Shroomers",
    power: 139778688,
  },
  {
    server: 1206,
    family: "BigShroomers",
    power: 129929098,
  },
  {
    server: 1207,
    family: "MushroomGang",
    power: 1448226416,
  },
  {
    server: 1207,
    family: "LegionofShroom",
    power: 1044812672,
  },
  {
    server: 1207,
    family: "ShroomBuns",
    power: 383867953,
  },
  {
    server: 1207,
    family: "KrokaVarna",
    power: 277121754,
  },
  {
    server: 1207,
    family: "shroompot",
    power: 227095593,
  },
  {
    server: 1207,
    family: "AlphaMush",
    power: 203438555,
  },
  {
    server: 1207,
    family: "Beetlejuice",
    power: 176005111,
  },
  {
    server: 1207,
    family: "OrphanWarriors",
    power: 174786414,
  },
  {
    server: 1207,
    family: "Thunder",
    power: 95649354,
  },
  {
    server: 1207,
    family: "Tekkadan",
    power: 91599360,
  },
  {
    server: 1208,
    family: "Legends",
    power: 1556707919,
  },
  {
    server: 1208,
    family: "Myths",
    power: 860895475,
  },
  {
    server: 1208,
    family: "ŤĥêŔéãpèř§",
    power: 397462598,
  },
  {
    server: 1208,
    family: "Spores",
    power: 203448689,
  },
  {
    server: 1208,
    family: "SylvanFam",
    power: 181297466,
  },
  {
    server: 1208,
    family: "Sumeria",
    power: 181218735,
  },
  {
    server: 1208,
    family: "Olympus",
    power: 173693044,
  },
  {
    server: 1208,
    family: "Australia",
    power: 151510957,
  },
  {
    server: 1208,
    family: "ShroomTown",
    power: 107359918,
  },
  {
    server: 1208,
    family: "regionals",
    power: 97513846,
  },
  {
    server: 1209,
    family: "Spores",
    power: 1520004722,
  },
  {
    server: 1209,
    family: "Light",
    power: 628206412,
  },
  {
    server: 1209,
    family: "Legion135",
    power: 366235413,
  },
  {
    server: 1209,
    family: "Kings",
    power: 286834461,
  },
  {
    server: 1209,
    family: "Miscreants",
    power: 246013163,
  },
  {
    server: 1209,
    family: "popi",
    power: 225316206,
  },
  {
    server: 1209,
    family: "Judgement",
    power: 216237981,
  },
  {
    server: 1209,
    family: "Shroomyarmy",
    power: 164549749,
  },
  {
    server: 1209,
    family: "Hustlers",
    power: 159299290,
  },
  {
    server: 1209,
    family: "ShroomsOfDoom",
    power: 82083820,
  },
  {
    server: 1210,
    family: "ValhallaCalls",
    power: 1479839752,
  },
  {
    server: 1210,
    family: "Fate",
    power: 829021246,
  },
  {
    server: 1210,
    family: "OhShiitake",
    power: 422086329,
  },
  {
    server: 1210,
    family: "Souls",
    power: 276000986,
  },
  {
    server: 1210,
    family: "_N_I_N_J_A_",
    power: 268326044,
  },
  {
    server: 1210,
    family: "shroomyTown",
    power: 264082322,
  },
  {
    server: 1210,
    family: "RatPack",
    power: 224028383,
  },
  {
    server: 1210,
    family: "OceanGang",
    power: 209809814,
  },
  {
    server: 1210,
    family: "WARDRAGON",
    power: 169413222,
  },
  {
    server: 1210,
    family: "Oblivion",
    power: 168363171,
  },
  {
    server: 1211,
    family: "Gods",
    power: 1467624720,
  },
  {
    server: 1211,
    family: "Dragonslayer75",
    power: 534200697,
  },
  {
    server: 1211,
    family: "Goobers",
    power: 451210391,
  },
  {
    server: 1211,
    family: "Celestial",
    power: 384727949,
  },
  {
    server: 1211,
    family: "BombSquad",
    power: 361799134,
  },
  {
    server: 1211,
    family: "Legends",
    power: 312452648,
  },
  {
    server: 1211,
    family: "ShroomKingdom",
    power: 271186273,
  },
  {
    server: 1211,
    family: "Ment2Bee",
    power: 224371103,
  },
  {
    server: 1211,
    family: "ShroomZone",
    power: 206388265,
  },
  {
    server: 1211,
    family: "KushKillerz",
    power: 180492711,
  },
  {
    server: 1212,
    family: "ShroomVille",
    power: 1302587501,
  },
  {
    server: 1212,
    family: "Riot",
    power: 1202602032,
  },
  {
    server: 1212,
    family: "ThePalFrends",
    power: 334505710,
  },
  {
    server: 1212,
    family: "SporeCore",
    power: 261272473,
  },
  {
    server: 1212,
    family: "shroomsofmagic",
    power: 252406697,
  },
  {
    server: 1212,
    family: "EternalKingz",
    power: 224275083,
  },
  {
    server: 1212,
    family: "cainshroom",
    power: 184394970,
  },
  {
    server: 1212,
    family: "ChronosInc",
    power: 148496182,
  },
  {
    server: 1212,
    family: "BaconGods",
    power: 140735720,
  },
  {
    server: 1212,
    family: "MagicAcademy",
    power: 84654311,
  },
  {
    server: 1213,
    family: "Legacy",
    power: 1462702391,
  },
  {
    server: 1213,
    family: "AfterDark",
    power: 1009572504,
  },
  {
    server: 1213,
    family: "Hentai",
    power: 470149340,
  },
  {
    server: 1213,
    family: "DoomShrooms",
    power: 373595821,
  },
  {
    server: 1213,
    family: "Lol",
    power: 294724744,
  },
  {
    server: 1213,
    family: "Funguys",
    power: 218567942,
  },
  {
    server: 1213,
    family: "StrawHatPir8s",
    power: 218010735,
  },
  {
    server: 1213,
    family: "ShroomShack",
    power: 199504812,
  },
  {
    server: 1213,
    family: "NomNomNoms",
    power: 191277970,
  },
  {
    server: 1213,
    family: "4PF",
    power: 167395586,
  },
  {
    server: 1214,
    family: "Royalty",
    power: 1758227914,
  },
  {
    server: 1214,
    family: "RainFall",
    power: 890707019,
  },
  {
    server: 1214,
    family: "GamerShrub",
    power: 570832533,
  },
  {
    server: 1214,
    family: "Fungi",
    power: 250158416,
  },
  {
    server: 1214,
    family: "Olympus",
    power: 240849448,
  },
  {
    server: 1214,
    family: "Inferno",
    power: 240233743,
  },
  {
    server: 1214,
    family: "Asura",
    power: 237968976,
  },
  {
    server: 1214,
    family: "Dripkings",
    power: 214794102,
  },
  {
    server: 1214,
    family: "SHADOWKNIGHTS",
    power: 202675074,
  },
  {
    server: 1214,
    family: "ShroomGobbler",
    power: 197425771,
  },
  {
    server: 1215,
    family: "Jabberwocky’s",
    power: 1440264609,
  },
  {
    server: 1215,
    family: "StrikeForce",
    power: 505427863,
  },
  {
    server: 1215,
    family: "CelestialCity",
    power: 366732548,
  },
  {
    server: 1215,
    family: "SleepyShrooms",
    power: 277974088,
  },
  {
    server: 1215,
    family: "Mushimush",
    power: 229471469,
  },
  {
    server: 1215,
    family: "Toadstoolies",
    power: 211260893,
  },
  {
    server: 1215,
    family: "WeebNation",
    power: 204995968,
  },
  {
    server: 1215,
    family: "Pandaville",
    power: 180829680,
  },
  {
    server: 1215,
    family: "HuntersHub",
    power: 155437560,
  },
  {
    server: 1215,
    family: "ShroomKingdom",
    power: 126401154,
  },
  {
    server: 1216,
    family: "NewMycelium",
    power: 1327391645,
  },
  {
    server: 1216,
    family: "DeadlyCaps",
    power: 398679479,
  },
  {
    server: 1216,
    family: "MagicShroom",
    power: 396742582,
  },
  {
    server: 1216,
    family: "Crusaders",
    power: 321883705,
  },
  {
    server: 1216,
    family: "SporeForce",
    power: 282024162,
  },
  {
    server: 1216,
    family: "Spores",
    power: 256918087,
  },
  {
    server: 1216,
    family: "timelords",
    power: 207839777,
  },
  {
    server: 1216,
    family: "CanadianCartel",
    power: 199830695,
  },
  {
    server: 1216,
    family: "Yggdrasil",
    power: 110268811,
  },
  {
    server: 1216,
    family: "DemonSlayer",
    power: 86809057,
  },
  {
    server: 1217,
    family: "Elevated",
    power: 1198746609,
  },
  {
    server: 1217,
    family: "MellowMushroom",
    power: 1077129217,
  },
  {
    server: 1217,
    family: "mush",
    power: 345316287,
  },
  {
    server: 1217,
    family: "SithLords",
    power: 299100781,
  },
  {
    server: 1217,
    family: "Zero",
    power: 256151702,
  },
  {
    server: 1217,
    family: "Reapershrooms",
    power: 255733848,
  },
  {
    server: 1217,
    family: "DoomShrooms",
    power: 255328420,
  },
  {
    server: 1217,
    family: "GodDamn",
    power: 207761195,
  },
  {
    server: 1217,
    family: "psychedelicXx",
    power: 204384205,
  },
  {
    server: 1217,
    family: "WeAvoidClan",
    power: 198365476,
  },
  {
    server: 1218,
    family: "KingsOfShroom",
    power: 1238510123,
  },
  {
    server: 1218,
    family: "LokisCircus",
    power: 556317395,
  },
  {
    server: 1218,
    family: "itachiselite",
    power: 305551106,
  },
  {
    server: 1218,
    family: "AlmightyMush",
    power: 234542122,
  },
  {
    server: 1218,
    family: "shoominghard",
    power: 232736169,
  },
  {
    server: 1218,
    family: "ShroomKingdom",
    power: 222835776,
  },
  {
    server: 1218,
    family: "Striders",
    power: 218194934,
  },
  {
    server: 1218,
    family: "PORTOBELLOS",
    power: 213009008,
  },
  {
    server: 1218,
    family: "Aincrad",
    power: 209771516,
  },
  {
    server: 1218,
    family: "TheDeathCaps",
    power: 205241555,
  },
  {
    server: 1219,
    family: "Osiris",
    power: 1414868926,
  },
  {
    server: 1219,
    family: "Mycelia",
    power: 1016604156,
  },
  {
    server: 1219,
    family: "Royalty",
    power: 365517983,
  },
  {
    server: 1219,
    family: "ChaosRun",
    power: 310419931,
  },
  {
    server: 1219,
    family: "GIRL_DINNER",
    power: 295903453,
  },
  {
    server: 1219,
    family: "funguys",
    power: 210885515,
  },
  {
    server: 1219,
    family: "Mafia",
    power: 205912998,
  },
  {
    server: 1219,
    family: "Shrooms",
    power: 177535682,
  },
  {
    server: 1219,
    family: "Genghis",
    power: 142478451,
  },
  {
    server: 1219,
    family: "MamasMob",
    power: 136916183,
  },
  {
    server: 1220,
    family: "ShadowGarden",
    power: 1552408013,
  },
  {
    server: 1220,
    family: "FanClub",
    power: 605340117,
  },
  {
    server: 1220,
    family: "ShroomyFun",
    power: 483511675,
  },
  {
    server: 1220,
    family: "MilfHunters",
    power: 355795202,
  },
  {
    server: 1220,
    family: "TacoCity",
    power: 348469035,
  },
  {
    server: 1220,
    family: "DragonShrooms",
    power: 297057761,
  },
  {
    server: 1220,
    family: "Shroomnators",
    power: 242961887,
  },
  {
    server: 1220,
    family: "Dragons",
    power: 209625828,
  },
  {
    server: 1220,
    family: "MagicShroomys",
    power: 199014477,
  },
  {
    server: 1220,
    family: "Squiggles",
    power: 161016102,
  },
  {
    server: 1221,
    family: "Ascendant",
    power: 1397285390,
  },
  {
    server: 1221,
    family: "Peacekeepers",
    power: 531391955,
  },
  {
    server: 1221,
    family: "LomChampions",
    power: 332680301,
  },
  {
    server: 1221,
    family: "Strawhats",
    power: 283899506,
  },
  {
    server: 1221,
    family: "MagicMushrooms",
    power: 230016862,
  },
  {
    server: 1221,
    family: "ShroomDominion",
    power: 226596641,
  },
  {
    server: 1221,
    family: "HellsAngels",
    power: 219057294,
  },
  {
    server: 1221,
    family: "Deathcaps",
    power: 190459622,
  },
  {
    server: 1221,
    family: "Maple",
    power: 174245835,
  },
  {
    server: 1221,
    family: "GoonSquad",
    power: 169735072,
  },
  {
    server: 1222,
    family: "JoinOrDie",
    power: 1462816892,
  },
  {
    server: 1222,
    family: "MellowMushroom",
    power: 674574967,
  },
  {
    server: 1222,
    family: "EatersOfShroom",
    power: 329661226,
  },
  {
    server: 1222,
    family: "WeedWeebs",
    power: 301621021,
  },
  {
    server: 1222,
    family: "DaBois",
    power: 290707928,
  },
  {
    server: 1222,
    family: "MushroomSavers",
    power: 289225552,
  },
  {
    server: 1222,
    family: "ShroomStompers",
    power: 269243861,
  },
  {
    server: 1222,
    family: "Relentless",
    power: 261197877,
  },
  {
    server: 1222,
    family: "mushROOMIES",
    power: 233863435,
  },
  {
    server: 1222,
    family: "KamisLookout",
    power: 214262181,
  },
  {
    server: 1223,
    family: "Starlight",
    power: 1162258455,
  },
  {
    server: 1223,
    family: "Tyceno",
    power: 864613235,
  },
  {
    server: 1223,
    family: "DarkSaintz",
    power: 842942193,
  },
  {
    server: 1223,
    family: "Depresso",
    power: 330854163,
  },
  {
    server: 1223,
    family: "Darkness",
    power: 328277005,
  },
  {
    server: 1223,
    family: "Shadows",
    power: 256824626,
  },
  {
    server: 1223,
    family: "genshin",
    power: 240484645,
  },
  {
    server: 1223,
    family: "SakuraTree",
    power: 203443156,
  },
  {
    server: 1223,
    family: "Roundtable",
    power: 202836289,
  },
  {
    server: 1223,
    family: "BrownBoyZ",
    power: 178053813,
  },
  {
    server: 1224,
    family: "Deathrow",
    power: 1197232581,
  },
  {
    server: 1224,
    family: "ShroomLegion",
    power: 884361180,
  },
  {
    server: 1224,
    family: "Arson",
    power: 513969381,
  },
  {
    server: 1224,
    family: "RisingSpores",
    power: 305221785,
  },
  {
    server: 1224,
    family: "oldSpores",
    power: 273886013,
  },
  {
    server: 1224,
    family: "DevilMafia",
    power: 261853300,
  },
  {
    server: 1224,
    family: "Graveyard",
    power: 175356270,
  },
  {
    server: 1224,
    family: "Monkeys",
    power: 166330074,
  },
  {
    server: 1224,
    family: "CornDogs",
    power: 97606903,
  },
  {
    server: 1224,
    family: "Silvermoon",
    power: 75238302,
  },
  {
    server: 1225,
    family: "Lunaire",
    power: 1429486938,
  },
  {
    server: 1225,
    family: "Tempest",
    power: 460259669,
  },
  {
    server: 1225,
    family: "SAC",
    power: 358294835,
  },
  {
    server: 1225,
    family: "MushPit",
    power: 226689289,
  },
  {
    server: 1225,
    family: "Legacy",
    power: 212640735,
  },
  {
    server: 1225,
    family: "Wicked",
    power: 186839766,
  },
  {
    server: 1225,
    family: "fullmetal",
    power: 185836761,
  },
  {
    server: 1225,
    family: "Immortals710",
    power: 157219553,
  },
  {
    server: 1225,
    family: "Misfits",
    power: 131115423,
  },
  {
    server: 1225,
    family: "DabSquad",
    power: 47545561,
  },
  {
    server: 1226,
    family: "Angels",
    power: 1271737572,
  },
  {
    server: 1226,
    family: "Demons",
    power: 733393081,
  },
  {
    server: 1226,
    family: "Sensation",
    power: 472074190,
  },
  {
    server: 1226,
    family: "420Shroomies",
    power: 389322363,
  },
  {
    server: 1226,
    family: "Carnal",
    power: 285626851,
  },
  {
    server: 1226,
    family: "FreeForAll",
    power: 274411794,
  },
  {
    server: 1226,
    family: "Canada",
    power: 244087905,
  },
  {
    server: 1226,
    family: "Mushers",
    power: 241732973,
  },
  {
    server: 1226,
    family: "Vikings",
    power: 159516711,
  },
  {
    server: 1226,
    family: "TopGlobal",
    power: 154777015,
  },
  {
    server: 1227,
    family: "DREADNOUGHT",
    power: 1151082584,
  },
  {
    server: 1227,
    family: "BC4Honey",
    power: 911909115,
  },
  {
    server: 1227,
    family: "Misfits",
    power: 460469555,
  },
  {
    server: 1227,
    family: "ParkinsonsPals",
    power: 410238352,
  },
  {
    server: 1227,
    family: "HighLife",
    power: 407607391,
  },
  {
    server: 1227,
    family: "LoneWolves",
    power: 298061121,
  },
  {
    server: 1227,
    family: "Heaven",
    power: 270011322,
  },
  {
    server: 1227,
    family: "Brawlers",
    power: 212564334,
  },
  {
    server: 1227,
    family: "StrayDogs",
    power: 210275333,
  },
  {
    server: 1227,
    family: "hi",
    power: 106364897,
  },
  {
    server: 1228,
    family: "KoopaTropaS",
    power: 1392315372,
  },
  {
    server: 1228,
    family: "X",
    power: 908286330,
  },
  {
    server: 1228,
    family: "Kaizen",
    power: 337360299,
  },
  {
    server: 1228,
    family: "TheHiddenLeaf",
    power: 294560477,
  },
  {
    server: 1228,
    family: "Berserkers",
    power: 292581692,
  },
  {
    server: 1228,
    family: "legends",
    power: 252920682,
  },
  {
    server: 1228,
    family: "Valhalla",
    power: 249767939,
  },
  {
    server: 1228,
    family: "DeathAcademy",
    power: 175797516,
  },
  {
    server: 1228,
    family: "FamilyTides",
    power: 171410124,
  },
  {
    server: 1228,
    family: "Cantharellus",
    power: 130808922,
  },
  {
    server: 1229,
    family: "TOP",
    power: 1345687597,
  },
  {
    server: 1229,
    family: "MushroomKNGDM",
    power: 793556259,
  },
  {
    server: 1229,
    family: "Tokers",
    power: 457705155,
  },
  {
    server: 1229,
    family: "godspeed",
    power: 329205561,
  },
  {
    server: 1229,
    family: "Fam",
    power: 259501812,
  },
  {
    server: 1229,
    family: "MeowShroom",
    power: 227804197,
  },
  {
    server: 1229,
    family: "Shroomvile",
    power: 216188899,
  },
  {
    server: 1229,
    family: "BrokeBois",
    power: 204534534,
  },
  {
    server: 1229,
    family: "GG",
    power: 174365192,
  },
  {
    server: 1229,
    family: "TheClamFam",
    power: 165310266,
  },
  {
    server: 1230,
    family: "Timekillers",
    power: 1212387919,
  },
  {
    server: 1230,
    family: "MansonFamily",
    power: 714057905,
  },
  {
    server: 1230,
    family: "Umbreonican",
    power: 399251759,
  },
  {
    server: 1230,
    family: "Slayshrooms",
    power: 256528928,
  },
  {
    server: 1230,
    family: "Yeska",
    power: 253696690,
  },
  {
    server: 1230,
    family: "Wolf_Cry",
    power: 230215491,
  },
  {
    server: 1230,
    family: "akatsuki",
    power: 182378996,
  },
  {
    server: 1230,
    family: "Goonmaxxing",
    power: 143077346,
  },
  {
    server: 1230,
    family: "VALHALLA",
    power: 122149735,
  },
  {
    server: 1230,
    family: "FunGuys",
    power: 58983491,
  },
  {
    server: 1231,
    family: "Çrèampìé",
    power: 1240067436,
  },
  {
    server: 1231,
    family: "OmegaProject",
    power: 789226301,
  },
  {
    server: 1231,
    family: "chosens",
    power: 392947065,
  },
  {
    server: 1231,
    family: "StrawHats",
    power: 320389954,
  },
  {
    server: 1231,
    family: "Mushies",
    power: 304033057,
  },
  {
    server: 1231,
    family: "Art_of_War",
    power: 276637087,
  },
  {
    server: 1231,
    family: "home",
    power: 250406270,
  },
  {
    server: 1231,
    family: "psychMushies",
    power: 218809269,
  },
  {
    server: 1231,
    family: "Munchkins",
    power: 209607982,
  },
  {
    server: 1231,
    family: "Grind4Fun",
    power: 196587282,
  },
  {
    server: 1232,
    family: "KillerWhales",
    power: 1329292634,
  },
  {
    server: 1232,
    family: "Malevolence",
    power: 1116952009,
  },
  {
    server: 1232,
    family: "MegaShrooms",
    power: 291382235,
  },
  {
    server: 1232,
    family: "Chaos",
    power: 275754254,
  },
  {
    server: 1232,
    family: "AbyssalShrooms",
    power: 259310093,
  },
  {
    server: 1232,
    family: "Demon",
    power: 244814451,
  },
  {
    server: 1232,
    family: "BingBong",
    power: 229807617,
  },
  {
    server: 1232,
    family: "Panda",
    power: 220519270,
  },
  {
    server: 1232,
    family: "Destruction",
    power: 219278649,
  },
  {
    server: 1232,
    family: "GodOfWar",
    power: 116601075,
  },
  {
    server: 1233,
    family: "Themisfits",
    power: 1112068874,
  },
  {
    server: 1233,
    family: "Shroomland",
    power: 1095409081,
  },
  {
    server: 1233,
    family: "YOLO",
    power: 348932296,
  },
  {
    server: 1233,
    family: "SlightlyActive",
    power: 246679559,
  },
  {
    server: 1233,
    family: "OnlyTrueShroom",
    power: 223234202,
  },
  {
    server: 1233,
    family: "NoGs",
    power: 220098728,
  },
  {
    server: 1233,
    family: "Ragnarok",
    power: 201799908,
  },
  {
    server: 1233,
    family: "TheWarriors",
    power: 187297057,
  },
  {
    server: 1233,
    family: "DEMON_LORDS",
    power: 177314804,
  },
  {
    server: 1233,
    family: "Coffees",
    power: 168906394,
  },
  {
    server: 1234,
    family: "OnlyLamps",
    power: 1322134558,
  },
  {
    server: 1234,
    family: "FreshStart",
    power: 441984162,
  },
  {
    server: 1234,
    family: "TheEmpire",
    power: 293776610,
  },
  {
    server: 1234,
    family: "Outsiderz",
    power: 264541002,
  },
  {
    server: 1234,
    family: "Family",
    power: 238003512,
  },
  {
    server: 1234,
    family: "RAGNAROK",
    power: 196149590,
  },
  {
    server: 1234,
    family: "HeroGuild",
    power: 189093334,
  },
  {
    server: 1234,
    family: "Juggalofamily",
    power: 178900064,
  },
  {
    server: 1234,
    family: "Fungicide",
    power: 170895349,
  },
  {
    server: 1234,
    family: "Toadstool",
    power: 153991472,
  },
  {
    server: 1235,
    family: "DeathGuard",
    power: 1402310438,
  },
  {
    server: 1235,
    family: "MagicMushrooms",
    power: 529356770,
  },
  {
    server: 1235,
    family: "Horizon",
    power: 418562389,
  },
  {
    server: 1235,
    family: "Unsociable",
    power: 260114070,
  },
  {
    server: 1235,
    family: "BOREDGANG",
    power: 185016469,
  },
  {
    server: 1235,
    family: "Lycans",
    power: 178114826,
  },
  {
    server: 1235,
    family: "Akatsuki",
    power: 173886447,
  },
  {
    server: 1235,
    family: "ShroomGods",
    power: 172711618,
  },
  {
    server: 1235,
    family: "Le",
    power: 138144832,
  },
  {
    server: 1235,
    family: "Meow",
    power: 115099557,
  },
  {
    server: 1236,
    family: "AINCRAD",
    power: 1302102299,
  },
  {
    server: 1236,
    family: "HiddenLeaf",
    power: 800860830,
  },
  {
    server: 1236,
    family: "NFK",
    power: 286019742,
  },
  {
    server: 1236,
    family: "TheDeathCaps",
    power: 253626501,
  },
  {
    server: 1236,
    family: "GoWitThaFlow",
    power: 219771192,
  },
  {
    server: 1236,
    family: "achros",
    power: 206580548,
  },
  {
    server: 1236,
    family: "Angelic",
    power: 201582028,
  },
  {
    server: 1236,
    family: "Euphoria",
    power: 194413251,
  },
  {
    server: 1236,
    family: "Mrgalaxy",
    power: 189766182,
  },
  {
    server: 1236,
    family: "fatthairyspore",
    power: 181412986,
  },
  {
    server: 1237,
    family: "OnlyShrooms",
    power: 1191581538,
  },
  {
    server: 1237,
    family: "Mushmellow",
    power: 1012688888,
  },
  {
    server: 1237,
    family: "Shroomreapers",
    power: 331837457,
  },
  {
    server: 1237,
    family: "PandaPirates",
    power: 248137785,
  },
  {
    server: 1237,
    family: "MysticShroom",
    power: 236273921,
  },
  {
    server: 1237,
    family: "TheChickenFam",
    power: 202718841,
  },
  {
    server: 1237,
    family: "Unstoppable",
    power: 188414343,
  },
  {
    server: 1237,
    family: "Shroomnation",
    power: 158080733,
  },
  {
    server: 1237,
    family: "꧁༒Aveภgerຮ༒꧂",
    power: 148073030,
  },
  {
    server: 1237,
    family: "TheShrooms",
    power: 133393900,
  },
  {
    server: 1238,
    family: "MushieKingdom",
    power: 1436474641,
  },
  {
    server: 1238,
    family: "LEGENDS",
    power: 673018422,
  },
  {
    server: 1238,
    family: "MysticMush",
    power: 414079993,
  },
  {
    server: 1238,
    family: "Tip",
    power: 217193251,
  },
  {
    server: 1238,
    family: "Mafia",
    power: 213113878,
  },
  {
    server: 1238,
    family: "Xhakyn",
    power: 194601108,
  },
  {
    server: 1238,
    family: "fungi",
    power: 180242044,
  },
  {
    server: 1238,
    family: "Sapphire",
    power: 171139940,
  },
  {
    server: 1238,
    family: "KiwiShrooms",
    power: 163091413,
  },
  {
    server: 1238,
    family: "DeadFools",
    power: 155289891,
  },
  {
    server: 1239,
    family: "Straw_Hats",
    power: 1243968169,
  },
  {
    server: 1239,
    family: "Shroomies",
    power: 826085521,
  },
  {
    server: 1239,
    family: "Wanted",
    power: 351929978,
  },
  {
    server: 1239,
    family: "CanadiansRule",
    power: 294767536,
  },
  {
    server: 1239,
    family: "BlackClover",
    power: 277686486,
  },
  {
    server: 1239,
    family: "Azreguard",
    power: 260944880,
  },
  {
    server: 1239,
    family: "Section8",
    power: 209405030,
  },
  {
    server: 1239,
    family: "GoofyGøøbers",
    power: 199439739,
  },
  {
    server: 1239,
    family: "demonhunter",
    power: 178429052,
  },
  {
    server: 1239,
    family: "Shadows",
    power: 137224085,
  },
  {
    server: 1240,
    family: "WhiteLotus",
    power: 1287994498,
  },
  {
    server: 1240,
    family: "KungfuKoalas",
    power: 642614267,
  },
  {
    server: 1240,
    family: "AceS",
    power: 374484424,
  },
  {
    server: 1240,
    family: "QcMushroom",
    power: 271782236,
  },
  {
    server: 1240,
    family: "Knitsworth",
    power: 266649319,
  },
  {
    server: 1240,
    family: "SleepyBois",
    power: 260772417,
  },
  {
    server: 1240,
    family: "Ragnarök",
    power: 223678002,
  },
  {
    server: 1240,
    family: "kumo",
    power: 220227301,
  },
  {
    server: 1240,
    family: "Tripp",
    power: 188743731,
  },
  {
    server: 1240,
    family: "PhantomTroupe",
    power: 176183595,
  },
  {
    server: 1241,
    family: "Abnormal",
    power: 1357628639,
  },
  {
    server: 1241,
    family: "Anime",
    power: 420522298,
  },
  {
    server: 1241,
    family: "TheShrooms",
    power: 399649346,
  },
  {
    server: 1241,
    family: "ThisIsSus",
    power: 313989933,
  },
  {
    server: 1241,
    family: "theEND",
    power: 226822197,
  },
  {
    server: 1241,
    family: "room2shroom",
    power: 220877626,
  },
  {
    server: 1241,
    family: "SimpleTimes",
    power: 209426817,
  },
  {
    server: 1241,
    family: "Evening_arrow",
    power: 203652817,
  },
  {
    server: 1241,
    family: "Reaver",
    power: 194196101,
  },
  {
    server: 1241,
    family: "shroom247",
    power: 193577738,
  },
  {
    server: 1242,
    family: "DevilsRejects",
    power: 1290050634,
  },
  {
    server: 1242,
    family: "Luminescence",
    power: 899537767,
  },
  {
    server: 1242,
    family: "finals",
    power: 272792463,
  },
  {
    server: 1242,
    family: "mushy’s",
    power: 246079785,
  },
  {
    server: 1242,
    family: "Mlonde",
    power: 240464548,
  },
  {
    server: 1242,
    family: "Demon_Clan",
    power: 170301995,
  },
  {
    server: 1242,
    family: "Overlords",
    power: 168698166,
  },
  {
    server: 1242,
    family: "Reapers",
    power: 165138643,
  },
  {
    server: 1242,
    family: "onion",
    power: 155280413,
  },
  {
    server: 1242,
    family: "MilkandCookies",
    power: 136282344,
  },
  {
    server: 1243,
    family: "RAVENOUS",
    power: 1296732370,
  },
  {
    server: 1243,
    family: "RoguesRevenge",
    power: 408072113,
  },
  {
    server: 1243,
    family: "Shroomers",
    power: 384383099,
  },
  {
    server: 1243,
    family: "W33D",
    power: 323669197,
  },
  {
    server: 1243,
    family: "TheCoolFamily",
    power: 321557191,
  },
  {
    server: 1243,
    family: "HeavenlyShroom",
    power: 284982021,
  },
  {
    server: 1243,
    family: "lightdragon",
    power: 259622318,
  },
  {
    server: 1243,
    family: "Dark_Legion",
    power: 219436706,
  },
  {
    server: 1243,
    family: "thefellas",
    power: 210051697,
  },
  {
    server: 1243,
    family: "JV_THE_GODS",
    power: 199551464,
  },
  {
    server: 1244,
    family: "3amZoomies",
    power: 1155451971,
  },
  {
    server: 1244,
    family: "FunGuys",
    power: 635148391,
  },
  {
    server: 1244,
    family: "GhostMan",
    power: 618112483,
  },
  {
    server: 1244,
    family: "TheJizzards",
    power: 356995153,
  },
  {
    server: 1244,
    family: "Bombastic",
    power: 273704723,
  },
  {
    server: 1244,
    family: "Stereotypical",
    power: 234923208,
  },
  {
    server: 1244,
    family: "gamer",
    power: 195044721,
  },
  {
    server: 1244,
    family: "zygon",
    power: 170290810,
  },
  {
    server: 1244,
    family: "WolfsDen",
    power: 162366754,
  },
  {
    server: 1244,
    family: "minicrawlers",
    power: 146764507,
  },
  {
    server: 1245,
    family: "MostHated",
    power: 1314085452,
  },
  {
    server: 1245,
    family: "Family",
    power: 536925332,
  },
  {
    server: 1245,
    family: "MushiesUnited",
    power: 390013966,
  },
  {
    server: 1245,
    family: "Primesupreme",
    power: 338104088,
  },
  {
    server: 1245,
    family: "TheBombDotCom",
    power: 307837719,
  },
  {
    server: 1245,
    family: "GODSOFWAR",
    power: 287698534,
  },
  {
    server: 1245,
    family: "ShroomHeads",
    power: 255281268,
  },
  {
    server: 1245,
    family: "Dmc",
    power: 211216923,
  },
  {
    server: 1245,
    family: "hitheres",
    power: 196630341,
  },
  {
    server: 1245,
    family: "LunarShrooms",
    power: 182418742,
  },
  {
    server: 1246,
    family: "MoonlitPub",
    power: 1099077442,
  },
  {
    server: 1246,
    family: "SolarPub",
    power: 1013342974,
  },
  {
    server: 1246,
    family: "CrabPeople",
    power: 308636311,
  },
  {
    server: 1246,
    family: "Murphies",
    power: 282039272,
  },
  {
    server: 1246,
    family: "Forsaken",
    power: 234379107,
  },
  {
    server: 1246,
    family: "Volunter",
    power: 215957240,
  },
  {
    server: 1246,
    family: "UK",
    power: 209105527,
  },
  {
    server: 1246,
    family: "Mushroom",
    power: 192284901,
  },
  {
    server: 1246,
    family: "Slayers",
    power: 173813904,
  },
  {
    server: 1246,
    family: "Dark",
    power: 168738305,
  },
  {
    server: 1247,
    family: "Olympus",
    power: 1248594216,
  },
  {
    server: 1247,
    family: "ShroomLordz",
    power: 1032310845,
  },
  {
    server: 1247,
    family: "ThePond",
    power: 461762927,
  },
  {
    server: 1247,
    family: "solem",
    power: 387425264,
  },
  {
    server: 1247,
    family: "TheBoys",
    power: 346416465,
  },
  {
    server: 1247,
    family: "huh",
    power: 244029240,
  },
  {
    server: 1247,
    family: "Kingdom",
    power: 207086443,
  },
  {
    server: 1247,
    family: "ThorsHammer",
    power: 171621922,
  },
  {
    server: 1247,
    family: "shroomed",
    power: 158140116,
  },
  {
    server: 1247,
    family: "Elementals",
    power: 157330393,
  },
  {
    server: 1248,
    family: "Purgatory",
    power: 1316356817,
  },
  {
    server: 1248,
    family: "LampLovers",
    power: 771382588,
  },
  {
    server: 1248,
    family: "The_Fun_Guys",
    power: 433797121,
  },
  {
    server: 1248,
    family: "shroomFam",
    power: 258486963,
  },
  {
    server: 1248,
    family: "SHRooMS",
    power: 255949214,
  },
  {
    server: 1248,
    family: "Korrupt",
    power: 237609822,
  },
  {
    server: 1248,
    family: "VoidedXZ",
    power: 216916779,
  },
  {
    server: 1248,
    family: "BoxCompany",
    power: 215585947,
  },
  {
    server: 1248,
    family: "Lethals",
    power: 214156537,
  },
  {
    server: 1248,
    family: "Ruthlesselite",
    power: 210700515,
  },
  {
    server: 1249,
    family: "RamenShøp",
    power: 1267108606,
  },
  {
    server: 1249,
    family: "LostShroomies",
    power: 593047908,
  },
  {
    server: 1249,
    family: "Mycelium",
    power: 451150792,
  },
  {
    server: 1249,
    family: "kingShrooms",
    power: 259207000,
  },
  {
    server: 1249,
    family: "Zackontop",
    power: 258289436,
  },
  {
    server: 1249,
    family: "TheKingz",
    power: 252610300,
  },
  {
    server: 1249,
    family: "Incels",
    power: 231792851,
  },
  {
    server: 1249,
    family: "Lunasxs",
    power: 223975567,
  },
  {
    server: 1249,
    family: "420Chill",
    power: 216817911,
  },
  {
    server: 1249,
    family: "FlamenHamen",
    power: 184532130,
  },
  {
    server: 1250,
    family: "SAO",
    power: 1181470366,
  },
  {
    server: 1250,
    family: "TheSaints",
    power: 625487829,
  },
  {
    server: 1250,
    family: "Temptations",
    power: 453481561,
  },
  {
    server: 1250,
    family: "Stinky",
    power: 228547452,
  },
  {
    server: 1250,
    family: "afterPARTY",
    power: 211713925,
  },
  {
    server: 1250,
    family: "ReApErZ",
    power: 206905350,
  },
  {
    server: 1250,
    family: "SGShroom",
    power: 196485278,
  },
  {
    server: 1250,
    family: "AbyssalKnights",
    power: 177699813,
  },
  {
    server: 1250,
    family: "Fatal",
    power: 173453169,
  },
  {
    server: 1250,
    family: "wolfpack",
    power: 168116027,
  },
  {
    server: 1251,
    family: "AngelsOfWar",
    power: 1253022291,
  },
  {
    server: 1251,
    family: "ButterShrooms",
    power: 493777530,
  },
  {
    server: 1251,
    family: "Chaychna",
    power: 407058511,
  },
  {
    server: 1251,
    family: "FunGuys",
    power: 315159189,
  },
  {
    server: 1251,
    family: "FungalFury",
    power: 262423946,
  },
  {
    server: 1251,
    family: "themunks",
    power: 226115181,
  },
  {
    server: 1251,
    family: "Tʰᵉ۝Gᵃᵗʰᵉʳⁱⁿᵍ",
    power: 214873976,
  },
  {
    server: 1251,
    family: "Synthesis",
    power: 212540395,
  },
  {
    server: 1251,
    family: "Shroomers",
    power: 182294048,
  },
  {
    server: 1251,
    family: "Runtz",
    power: 177101392,
  },
  {
    server: 1252,
    family: "Arise",
    power: 1324354215,
  },
  {
    server: 1252,
    family: "GoofyGoobers",
    power: 685489694,
  },
  {
    server: 1252,
    family: "HouseOfHope",
    power: 428638303,
  },
  {
    server: 1252,
    family: "Happiness",
    power: 268504311,
  },
  {
    server: 1252,
    family: "𝓢𝓴𝔂𝓱𝓲𝓰𝓱",
    power: 236230502,
  },
  {
    server: 1252,
    family: "Skywalkers",
    power: 228393600,
  },
  {
    server: 1252,
    family: "BADD",
    power: 217437370,
  },
  {
    server: 1252,
    family: "HazbinHotel",
    power: 213191129,
  },
  {
    server: 1252,
    family: "ShroomHeads",
    power: 179170439,
  },
  {
    server: 1252,
    family: "StrawHats",
    power: 144624735,
  },
  {
    server: 1253,
    family: "OnlyBops",
    power: 1093024655,
  },
  {
    server: 1253,
    family: "420Shrooms",
    power: 906502372,
  },
  {
    server: 1253,
    family: "NoGameNoLife",
    power: 351805087,
  },
  {
    server: 1253,
    family: "Casuals",
    power: 291779655,
  },
  {
    server: 1253,
    family: "MYCELIUM",
    power: 284729594,
  },
  {
    server: 1253,
    family: "HiddenFate",
    power: 273593495,
  },
  {
    server: 1253,
    family: "Reapers",
    power: 199665940,
  },
  {
    server: 1253,
    family: "BcGrown",
    power: 187037204,
  },
  {
    server: 1253,
    family: "FUNGIS",
    power: 150178535,
  },
  {
    server: 1253,
    family: "Royalty",
    power: 122848327,
  },
  {
    server: 1254,
    family: "Omega",
    power: 1137889405,
  },
  {
    server: 1254,
    family: "Elonville",
    power: 714054556,
  },
  {
    server: 1254,
    family: "AlpinaB6",
    power: 369946992,
  },
  {
    server: 1254,
    family: "Lube",
    power: 303545763,
  },
  {
    server: 1254,
    family: "Shampoo",
    power: 258960740,
  },
  {
    server: 1254,
    family: "NAZARICK",
    power: 250864798,
  },
  {
    server: 1254,
    family: "Meeks",
    power: 233745769,
  },
  {
    server: 1254,
    family: "Sanctury",
    power: 220830432,
  },
  {
    server: 1254,
    family: "shroomMafia86",
    power: 184331239,
  },
  {
    server: 1254,
    family: "Yourmom",
    power: 167573035,
  },
  {
    server: 1255,
    family: "AgentsOfChaos¿",
    power: 1298996648,
  },
  {
    server: 1255,
    family: "TaintedPeaches",
    power: 593757163,
  },
  {
    server: 1255,
    family: "SporeAddicts",
    power: 495411221,
  },
  {
    server: 1255,
    family: "Mafia",
    power: 410815637,
  },
  {
    server: 1255,
    family: "JustTheTip",
    power: 249915339,
  },
  {
    server: 1255,
    family: "ShroomSmoothie",
    power: 229885950,
  },
  {
    server: 1255,
    family: "DieselsDen",
    power: 228811950,
  },
  {
    server: 1255,
    family: "Mushle",
    power: 219833038,
  },
  {
    server: 1255,
    family: "HardlyActive",
    power: 202624889,
  },
  {
    server: 1255,
    family: "Arise",
    power: 197423672,
  },
  {
    server: 1256,
    family: "Ts",
    power: 867398601,
  },
  {
    server: 1256,
    family: "ONLYSHROOMS",
    power: 708823823,
  },
  {
    server: 1256,
    family: "TheFamily",
    power: 419057006,
  },
  {
    server: 1256,
    family: "CoppersFam",
    power: 270965045,
  },
  {
    server: 1256,
    family: "UnholyDarkChap",
    power: 263097515,
  },
  {
    server: 1256,
    family: "FoxGaming",
    power: 233869030,
  },
  {
    server: 1256,
    family: "HolyShroom",
    power: 233208146,
  },
  {
    server: 1256,
    family: "MMC",
    power: 212132049,
  },
  {
    server: 1256,
    family: "idkSomething",
    power: 209858109,
  },
  {
    server: 1256,
    family: "BloodHoney",
    power: 169992524,
  },
  {
    server: 1257,
    family: "Athotski",
    power: 1206669869,
  },
  {
    server: 1257,
    family: "CreatorS",
    power: 467124742,
  },
  {
    server: 1257,
    family: "WolfPack",
    power: 446460025,
  },
  {
    server: 1257,
    family: "SlayQueen",
    power: 258230479,
  },
  {
    server: 1257,
    family: "EvienceKramoor",
    power: 233733858,
  },
  {
    server: 1257,
    family: "boss",
    power: 231894775,
  },
  {
    server: 1257,
    family: "Shiitake",
    power: 225153896,
  },
  {
    server: 1257,
    family: "Seraphim",
    power: 218669351,
  },
  {
    server: 1257,
    family: "OurCrazyGroup",
    power: 209656600,
  },
  {
    server: 1257,
    family: "Dark",
    power: 178833063,
  },
  {
    server: 1258,
    family: "LOVE",
    power: 1155033511,
  },
  {
    server: 1258,
    family: "HATE",
    power: 547025117,
  },
  {
    server: 1258,
    family: "CatCartel",
    power: 389933350,
  },
  {
    server: 1258,
    family: "amungus",
    power: 301578212,
  },
  {
    server: 1258,
    family: "MushRoomies",
    power: 298040784,
  },
  {
    server: 1258,
    family: "shroomroom",
    power: 288782183,
  },
  {
    server: 1258,
    family: "PsiloVibin",
    power: 216747869,
  },
  {
    server: 1258,
    family: "FairyTail",
    power: 207596999,
  },
  {
    server: 1258,
    family: "Legends",
    power: 196892305,
  },
  {
    server: 1258,
    family: "TheDarkness",
    power: 175749774,
  },
  {
    server: 1259,
    family: "SpyXFamily",
    power: 1186686526,
  },
  {
    server: 1259,
    family: "BNK",
    power: 784730142,
  },
  {
    server: 1259,
    family: "Hogwarts",
    power: 497909980,
  },
  {
    server: 1259,
    family: "zzzz",
    power: 276562461,
  },
  {
    server: 1259,
    family: "ChillZone",
    power: 215191456,
  },
  {
    server: 1259,
    family: "VALHALLA",
    power: 207297411,
  },
  {
    server: 1259,
    family: "NeverForget",
    power: 201110349,
  },
  {
    server: 1259,
    family: "Axle",
    power: 200341079,
  },
  {
    server: 1259,
    family: "DeadlyGnomes",
    power: 196921105,
  },
  {
    server: 1259,
    family: "NuggetSyrup",
    power: 195629463,
  },
  {
    server: 1260,
    family: "Mycelium",
    power: 1152230950,
  },
  {
    server: 1260,
    family: "Shroomies",
    power: 459183420,
  },
  {
    server: 1260,
    family: "Deadly",
    power: 424450884,
  },
  {
    server: 1260,
    family: "destroyers",
    power: 347919168,
  },
  {
    server: 1260,
    family: "Order2",
    power: 314307789,
  },
  {
    server: 1260,
    family: "0PIUM",
    power: 279913756,
  },
  {
    server: 1260,
    family: "Scout_Regiment",
    power: 217125188,
  },
  {
    server: 1260,
    family: "radicalbunnies",
    power: 213666217,
  },
  {
    server: 1260,
    family: "FoxDragonFam",
    power: 151525778,
  },
  {
    server: 1260,
    family: "FunGamers",
    power: 139527334,
  },
  {
    server: 1261,
    family: "RetirementHome",
    power: 1057561618,
  },
  {
    server: 1261,
    family: "NeverKnowsBest",
    power: 505886699,
  },
  {
    server: 1261,
    family: "OnePiecE",
    power: 448186662,
  },
  {
    server: 1261,
    family: "OnlyVets",
    power: 304661829,
  },
  {
    server: 1261,
    family: "shrooms",
    power: 276914613,
  },
  {
    server: 1261,
    family: "Gods",
    power: 273425084,
  },
  {
    server: 1261,
    family: "TheDeathCaps",
    power: 225071120,
  },
  {
    server: 1261,
    family: "MushroomStamps",
    power: 221107655,
  },
  {
    server: 1261,
    family: "TheGangatron",
    power: 171633358,
  },
  {
    server: 1261,
    family: "merica",
    power: 159318580,
  },
  {
    server: 1262,
    family: "ShroomCartel",
    power: 1199031880,
  },
  {
    server: 1262,
    family: "Legends",
    power: 666103836,
  },
  {
    server: 1262,
    family: "Pweepepee",
    power: 329769205,
  },
  {
    server: 1262,
    family: "TwoCrows",
    power: 253530172,
  },
  {
    server: 1262,
    family: "Famdamily",
    power: 245854789,
  },
  {
    server: 1262,
    family: "Noodles",
    power: 240016638,
  },
  {
    server: 1262,
    family: "Dreadnaught",
    power: 222199988,
  },
  {
    server: 1262,
    family: "Magic",
    power: 217411364,
  },
  {
    server: 1262,
    family: "Frogos",
    power: 194666155,
  },
  {
    server: 1262,
    family: "Onlyspores",
    power: 193700596,
  },
  {
    server: 1263,
    family: "DegensUnited",
    power: 1278950023,
  },
  {
    server: 1263,
    family: "CircusClowns",
    power: 425315234,
  },
  {
    server: 1263,
    family: "MushLove",
    power: 301928193,
  },
  {
    server: 1263,
    family: "StrawHatCrew",
    power: 237565720,
  },
  {
    server: 1263,
    family: "CrimsonBlades",
    power: 206188821,
  },
  {
    server: 1263,
    family: "StrangeLandGC",
    power: 200243515,
  },
  {
    server: 1263,
    family: "ShrroomGods",
    power: 180746749,
  },
  {
    server: 1263,
    family: "YoshidaCľáñ",
    power: 175693600,
  },
  {
    server: 1263,
    family: "Legacy",
    power: 169256563,
  },
  {
    server: 1263,
    family: "ChaoticOrder",
    power: 149005116,
  },
  {
    server: 1264,
    family: "NightWalkers",
    power: 1051544173,
  },
  {
    server: 1264,
    family: "𝐒𝐇𝐑𝐎𝐎𝐌𝐒",
    power: 408377325,
  },
  {
    server: 1264,
    family: "BrokeBitches",
    power: 364097216,
  },
  {
    server: 1264,
    family: "ShroomPirates",
    power: 285393540,
  },
  {
    server: 1264,
    family: "Atramentaria",
    power: 234648531,
  },
  {
    server: 1264,
    family: "MushOnTop",
    power: 202062384,
  },
  {
    server: 1264,
    family: "Pack",
    power: 176925512,
  },
  {
    server: 1264,
    family: "DmaKat",
    power: 134352881,
  },
  {
    server: 1264,
    family: "NinthGate",
    power: 120186692,
  },
  {
    server: 1264,
    family: "Ragnarok",
    power: 107545493,
  },
  {
    server: 1265,
    family: "Apollyon",
    power: 1243644589,
  },
  {
    server: 1265,
    family: "Dragonslayer",
    power: 404746801,
  },
  {
    server: 1265,
    family: "Whitefang",
    power: 376363092,
  },
  {
    server: 1265,
    family: "TripleCat",
    power: 284647308,
  },
  {
    server: 1265,
    family: "Mushdooms",
    power: 265610577,
  },
  {
    server: 1265,
    family: "StrawHatCrew",
    power: 257845748,
  },
  {
    server: 1265,
    family: "Godkiller",
    power: 254802250,
  },
  {
    server: 1265,
    family: "Dragon",
    power: 177365097,
  },
  {
    server: 1265,
    family: "BloodHoney",
    power: 174645847,
  },
  {
    server: 1265,
    family: "Girlkissers",
    power: 171120668,
  },
  {
    server: 1266,
    family: "Chexmix",
    power: 1111626850,
  },
  {
    server: 1266,
    family: "MushyKingdom",
    power: 894319137,
  },
  {
    server: 1266,
    family: "Shroomalicious",
    power: 387542995,
  },
  {
    server: 1266,
    family: "TheMunchkins",
    power: 264381874,
  },
  {
    server: 1266,
    family: "Strife",
    power: 235645011,
  },
  {
    server: 1266,
    family: "TheOnyxLegion",
    power: 217882617,
  },
  {
    server: 1266,
    family: "FungiFans",
    power: 196504198,
  },
  {
    server: 1266,
    family: "Thars_Shrooms",
    power: 184196281,
  },
  {
    server: 1266,
    family: "shroomheadz",
    power: 171573284,
  },
  {
    server: 1266,
    family: "Axios",
    power: 152138071,
  },
  {
    server: 1267,
    family: "SomethingSuper",
    power: 1166524480,
  },
  {
    server: 1267,
    family: "SoulSociety",
    power: 834176776,
  },
  {
    server: 1267,
    family: "Funguys",
    power: 393165563,
  },
  {
    server: 1267,
    family: "Soup",
    power: 282890622,
  },
  {
    server: 1267,
    family: "Herd",
    power: 259922838,
  },
  {
    server: 1267,
    family: "SumTingWong",
    power: 228530098,
  },
  {
    server: 1267,
    family: "Gabgoooooooooo",
    power: 225155531,
  },
  {
    server: 1267,
    family: "Bitten",
    power: 198298993,
  },
  {
    server: 1267,
    family: "thegrandcircus",
    power: 195599448,
  },
  {
    server: 1267,
    family: "Shroomie",
    power: 168012897,
  },
  {
    server: 1268,
    family: "TOP",
    power: 1085391435,
  },
  {
    server: 1268,
    family: "Envy",
    power: 609346877,
  },
  {
    server: 1268,
    family: "Misfits",
    power: 591899080,
  },
  {
    server: 1268,
    family: "FullShiitake",
    power: 266780546,
  },
  {
    server: 1268,
    family: "WeAreNice",
    power: 247175239,
  },
  {
    server: 1268,
    family: "shitake",
    power: 240810411,
  },
  {
    server: 1268,
    family: "Lamentation",
    power: 197692369,
  },
  {
    server: 1268,
    family: "Valhalla",
    power: 187075446,
  },
  {
    server: 1268,
    family: "BloodHoney",
    power: 178272470,
  },
  {
    server: 1268,
    family: "Weverse",
    power: 148324339,
  },
  {
    server: 1269,
    family: "NightOwls",
    power: 1145147985,
  },
  {
    server: 1269,
    family: "ShroomLegion",
    power: 810604916,
  },
  {
    server: 1269,
    family: "Losmegachampi",
    power: 318810426,
  },
  {
    server: 1269,
    family: "Queensland",
    power: 229343450,
  },
  {
    server: 1269,
    family: "Peanutbutter",
    power: 221288351,
  },
  {
    server: 1269,
    family: "Parkours",
    power: 202380353,
  },
  {
    server: 1269,
    family: "Donny",
    power: 192015156,
  },
  {
    server: 1269,
    family: "stormshadow",
    power: 168760130,
  },
  {
    server: 1269,
    family: "StrawHatCrew",
    power: 154706620,
  },
  {
    server: 1269,
    family: "AussieShrooms",
    power: 141780226,
  },
  {
    server: 1270,
    family: "FungalFury",
    power: 931527613,
  },
  {
    server: 1270,
    family: "ShadowLegion",
    power: 732696443,
  },
  {
    server: 1270,
    family: "Lunaire",
    power: 314521084,
  },
  {
    server: 1270,
    family: "Abyss",
    power: 257392408,
  },
  {
    server: 1270,
    family: "AlucArdon",
    power: 251062467,
  },
  {
    server: 1270,
    family: "Pineapple",
    power: 197446491,
  },
  {
    server: 1270,
    family: "Franceswar",
    power: 188624548,
  },
  {
    server: 1270,
    family: "chomik",
    power: 177694229,
  },
  {
    server: 1270,
    family: "TheRedeemed",
    power: 164291735,
  },
  {
    server: 1270,
    family: "LOL",
    power: 147776691,
  },
  {
    server: 1271,
    family: "ShroomShire",
    power: 1140217046,
  },
  {
    server: 1271,
    family: "PremiumBlend",
    power: 424991084,
  },
  {
    server: 1271,
    family: "King",
    power: 298746933,
  },
  {
    server: 1271,
    family: "Empire",
    power: 257365105,
  },
  {
    server: 1271,
    family: "Bigd",
    power: 237640754,
  },
  {
    server: 1271,
    family: "LionsMane",
    power: 232236746,
  },
  {
    server: 1271,
    family: "MusherShip9000",
    power: 217007778,
  },
  {
    server: 1271,
    family: "TheFunguys",
    power: 195052964,
  },
  {
    server: 1271,
    family: "DuckyPond",
    power: 166419273,
  },
  {
    server: 1271,
    family: "Tripz",
    power: 113648205,
  },
  {
    server: 1272,
    family: "Legacy",
    power: 1079273872,
  },
  {
    server: 1272,
    family: "bbFamily",
    power: 659864312,
  },
  {
    server: 1272,
    family: "LegacyLite",
    power: 416660731,
  },
  {
    server: 1272,
    family: "Unkindled",
    power: 264569762,
  },
  {
    server: 1272,
    family: "NeverForget",
    power: 215185782,
  },
  {
    server: 1272,
    family: "SHOGUN",
    power: 189877877,
  },
  {
    server: 1272,
    family: "PH",
    power: 168980431,
  },
  {
    server: 1272,
    family: "Femboys",
    power: 160067189,
  },
  {
    server: 1272,
    family: "Chaos",
    power: 152526198,
  },
  {
    server: 1272,
    family: "Legends",
    power: 114699883,
  },
  {
    server: 1273,
    family: "Sins",
    power: 1144707147,
  },
  {
    server: 1273,
    family: "ShadowRealm",
    power: 489816115,
  },
  {
    server: 1273,
    family: "TheManagers",
    power: 327173200,
  },
  {
    server: 1273,
    family: "magicMushrooms",
    power: 215229291,
  },
  {
    server: 1273,
    family: "MushyBoys",
    power: 214471438,
  },
  {
    server: 1273,
    family: "ShroomChooms",
    power: 193946064,
  },
  {
    server: 1273,
    family: "StonedKings",
    power: 189050004,
  },
  {
    server: 1273,
    family: "Legends",
    power: 169922937,
  },
  {
    server: 1273,
    family: "CrazyTown",
    power: 159274612,
  },
  {
    server: 1273,
    family: "mogger",
    power: 155055250,
  },
  {
    server: 1274,
    family: "SurveyCorps",
    power: 1016469142,
  },
  {
    server: 1274,
    family: "Silly_Stoners",
    power: 482392556,
  },
  {
    server: 1274,
    family: "YOUTUBE",
    power: 294499173,
  },
  {
    server: 1274,
    family: "SmolPotatoes",
    power: 214407847,
  },
  {
    server: 1274,
    family: "FriedMushrooms",
    power: 212266397,
  },
  {
    server: 1274,
    family: "MentalSpace",
    power: 173451672,
  },
  {
    server: 1274,
    family: "ODYSSEY",
    power: 159207133,
  },
  {
    server: 1274,
    family: "pookie",
    power: 149766036,
  },
  {
    server: 1274,
    family: "DownHazardous",
    power: 145095025,
  },
  {
    server: 1274,
    family: "BioShock",
    power: 140080145,
  },
  {
    server: 1275,
    family: "Xeno",
    power: 1003903381,
  },
  {
    server: 1275,
    family: "BambooBrigade²",
    power: 659567071,
  },
  {
    server: 1275,
    family: "Shrooms",
    power: 252136345,
  },
  {
    server: 1275,
    family: "TheGarden",
    power: 211039794,
  },
  {
    server: 1275,
    family: "Xeno2",
    power: 184692376,
  },
  {
    server: 1275,
    family: "BigBoys",
    power: 161037622,
  },
  {
    server: 1275,
    family: "RoseGold",
    power: 148678579,
  },
  {
    server: 1275,
    family: "hoj",
    power: 143738919,
  },
  {
    server: 1275,
    family: "Coolcactus’s",
    power: 129294192,
  },
  {
    server: 1275,
    family: "Shmokerz420",
    power: 102733533,
  },
  {
    server: 1276,
    family: "Masters",
    power: 840925178,
  },
  {
    server: 1276,
    family: "MushInAss",
    power: 720368572,
  },
  {
    server: 1276,
    family: "TOXIC",
    power: 320897818,
  },
  {
    server: 1276,
    family: "Mycotyrants",
    power: 229722306,
  },
  {
    server: 1276,
    family: "ShroomMonsoon",
    power: 220280491,
  },
  {
    server: 1276,
    family: "Muzzshrooms",
    power: 213775850,
  },
  {
    server: 1276,
    family: "LGBTeam",
    power: 189335713,
  },
  {
    server: 1276,
    family: "Shrooms",
    power: 180791749,
  },
  {
    server: 1276,
    family: "WheelieBins",
    power: 171450868,
  },
  {
    server: 1276,
    family: "Mexican",
    power: 151991698,
  },
  {
    server: 1277,
    family: "Dumplings",
    power: 1084732602,
  },
  {
    server: 1277,
    family: "Ghosts",
    power: 596536352,
  },
  {
    server: 1277,
    family: "loltrip",
    power: 270567286,
  },
  {
    server: 1277,
    family: "Ashes_of_Eden",
    power: 192709265,
  },
  {
    server: 1277,
    family: "SpaceTrain",
    power: 183405742,
  },
  {
    server: 1277,
    family: "demons",
    power: 175395360,
  },
  {
    server: 1277,
    family: "Mcgeeties",
    power: 168090584,
  },
  {
    server: 1277,
    family: "Play4Fun",
    power: 150170391,
  },
  {
    server: 1277,
    family: "Outcasts",
    power: 149860610,
  },
  {
    server: 1277,
    family: "Québec",
    power: 131447077,
  },
  {
    server: 1278,
    family: "ShadowGarden",
    power: 1061284336,
  },
  {
    server: 1278,
    family: "HollowPurple",
    power: 568508863,
  },
  {
    server: 1278,
    family: "Empire",
    power: 460083718,
  },
  {
    server: 1278,
    family: "Family",
    power: 230835664,
  },
  {
    server: 1278,
    family: "enders666",
    power: 213609743,
  },
  {
    server: 1278,
    family: "StrawHatCrew",
    power: 210639996,
  },
  {
    server: 1278,
    family: "FungusAmongUs",
    power: 198399375,
  },
  {
    server: 1278,
    family: "Cordyceps",
    power: 175947947,
  },
  {
    server: 1278,
    family: "Silly_Stoners",
    power: 142848475,
  },
  {
    server: 1278,
    family: "Arctic",
    power: 98168906,
  },
  {
    server: 1279,
    family: "FungalFreaks",
    power: 1045493751,
  },
  {
    server: 1279,
    family: "Arise",
    power: 873598108,
  },
  {
    server: 1279,
    family: "MooShroom",
    power: 270215063,
  },
  {
    server: 1279,
    family: "hunters",
    power: 209484212,
  },
  {
    server: 1279,
    family: "CoffeeCrew",
    power: 208448885,
  },
  {
    server: 1279,
    family: "nuhuh",
    power: 167510127,
  },
  {
    server: 1279,
    family: "DivineMist",
    power: 158573048,
  },
  {
    server: 1279,
    family: "Clueless",
    power: 154099177,
  },
  {
    server: 1279,
    family: "TheDemons",
    power: 153154849,
  },
  {
    server: 1279,
    family: "TheBois420",
    power: 120411222,
  },
  {
    server: 1280,
    family: "LillysGarden",
    power: 1072570221,
  },
  {
    server: 1280,
    family: "Seraphim",
    power: 885388160,
  },
  {
    server: 1280,
    family: "CheesyDegens",
    power: 359274824,
  },
  {
    server: 1280,
    family: "MoonShrooms",
    power: 227225458,
  },
  {
    server: 1280,
    family: "ChaoticOgres",
    power: 222134776,
  },
  {
    server: 1280,
    family: "ShroomShield",
    power: 189708868,
  },
  {
    server: 1280,
    family: "ShadowArmy",
    power: 188170694,
  },
  {
    server: 1280,
    family: "sololeveling",
    power: 181884533,
  },
  {
    server: 1280,
    family: "Limitless",
    power: 150828098,
  },
  {
    server: 1280,
    family: "Mooshrooms",
    power: 117038436,
  },
  {
    server: 1281,
    family: "ᵀᴴᴱKINGDOM",
    power: 1161609156,
  },
  {
    server: 1281,
    family: "Fate",
    power: 796561797,
  },
  {
    server: 1281,
    family: "Cat",
    power: 555251687,
  },
  {
    server: 1281,
    family: "DeathBringers",
    power: 293439383,
  },
  {
    server: 1281,
    family: "Immortals",
    power: 288152696,
  },
  {
    server: 1281,
    family: "Umbra",
    power: 260812663,
  },
  {
    server: 1281,
    family: "Shadow",
    power: 220662728,
  },
  {
    server: 1281,
    family: "GODSOFWAR",
    power: 187094929,
  },
  {
    server: 1281,
    family: "BuDdIeS",
    power: 182452705,
  },
  {
    server: 1281,
    family: "souleaterclan",
    power: 169836353,
  },
  {
    server: 1282,
    family: "MoshiMushie",
    power: 991220338,
  },
  {
    server: 1282,
    family: "LegendaryFew",
    power: 954560076,
  },
  {
    server: 1282,
    family: "Shroomify",
    power: 339743685,
  },
  {
    server: 1282,
    family: "HouseAtreides",
    power: 214013293,
  },
  {
    server: 1282,
    family: "Jwavy999",
    power: 165813182,
  },
  {
    server: 1282,
    family: "constantinefan",
    power: 164081733,
  },
  {
    server: 1282,
    family: "NƏCRØPHÏLÏªCS",
    power: 157108721,
  },
  {
    server: 1282,
    family: "ShroomFarm",
    power: 156761447,
  },
  {
    server: 1282,
    family: "HolyShitake",
    power: 143513006,
  },
  {
    server: 1282,
    family: "HorseApples",
    power: 125393215,
  },
  {
    server: 1283,
    family: "MatchaMush",
    power: 846499454,
  },
  {
    server: 1283,
    family: "HolyShiitake",
    power: 530586974,
  },
  {
    server: 1283,
    family: "OnlyGoats",
    power: 521352730,
  },
  {
    server: 1283,
    family: "Cheekies",
    power: 237011945,
  },
  {
    server: 1283,
    family: "Darkmoons",
    power: 212673126,
  },
  {
    server: 1283,
    family: "reaper",
    power: 201952102,
  },
  {
    server: 1283,
    family: "SporeForceOne",
    power: 198335200,
  },
  {
    server: 1283,
    family: "BigTips",
    power: 196186875,
  },
  {
    server: 1283,
    family: "Sonic",
    power: 175199701,
  },
  {
    server: 1283,
    family: "Fallout",
    power: 167420099,
  },
  {
    server: 1284,
    family: "NewAge",
    power: 1035425490,
  },
  {
    server: 1284,
    family: "Zaza",
    power: 421698297,
  },
  {
    server: 1284,
    family: "Stonetopia",
    power: 260052235,
  },
  {
    server: 1284,
    family: "xD",
    power: 196432797,
  },
  {
    server: 1284,
    family: "Chicken_Coop",
    power: 180126479,
  },
  {
    server: 1284,
    family: "Veritas",
    power: 176931961,
  },
  {
    server: 1284,
    family: "TheSpooders",
    power: 153850924,
  },
  {
    server: 1284,
    family: "RoyalBeeings",
    power: 149296663,
  },
  {
    server: 1284,
    family: "MagicMushroom",
    power: 143839848,
  },
  {
    server: 1284,
    family: "Faisoif",
    power: 138088880,
  },
  {
    server: 1285,
    family: "TheMushroomTip",
    power: 835722200,
  },
  {
    server: 1285,
    family: "TheGasChamber",
    power: 500670121,
  },
  {
    server: 1285,
    family: "TubMafia",
    power: 374863651,
  },
  {
    server: 1285,
    family: "Champions",
    power: 180267165,
  },
  {
    server: 1285,
    family: "Nightrulers",
    power: 174495557,
  },
  {
    server: 1285,
    family: "supernatural",
    power: 168485863,
  },
  {
    server: 1285,
    family: "Theshroomcourt",
    power: 159995391,
  },
  {
    server: 1285,
    family: "Berserk",
    power: 153323726,
  },
  {
    server: 1285,
    family: "Eclipse",
    power: 118231464,
  },
  {
    server: 1285,
    family: "vanilly",
    power: 76709172,
  },
  {
    server: 1286,
    family: "DoomShrooms",
    power: 951481186,
  },
  {
    server: 1286,
    family: "HouseOfDragon",
    power: 707074139,
  },
  {
    server: 1286,
    family: "Alliance",
    power: 619183924,
  },
  {
    server: 1286,
    family: "Apex",
    power: 267570986,
  },
  {
    server: 1286,
    family: "Forbid",
    power: 183676815,
  },
  {
    server: 1286,
    family: "MagicMushroom",
    power: 176955911,
  },
  {
    server: 1286,
    family: "magnatas",
    power: 139767941,
  },
  {
    server: 1286,
    family: "KINGOFKINGS",
    power: 133662257,
  },
  {
    server: 1286,
    family: "shrooms",
    power: 128622644,
  },
  {
    server: 1286,
    family: "shroomdemonium",
    power: 108226883,
  },
  {
    server: 1287,
    family: "Arise",
    power: 1071376062,
  },
  {
    server: 1287,
    family: "StonerKlub",
    power: 511564512,
  },
  {
    server: 1287,
    family: "ArcadiaKnights",
    power: 413037070,
  },
  {
    server: 1287,
    family: "DankNation",
    power: 334680203,
  },
  {
    server: 1287,
    family: "SniperGang",
    power: 261032331,
  },
  {
    server: 1287,
    family: "Wieners",
    power: 155882499,
  },
  {
    server: 1287,
    family: "Taco",
    power: 155612881,
  },
  {
    server: 1287,
    family: "Ghostbusters",
    power: 140089396,
  },
  {
    server: 1287,
    family: "Vigilantes",
    power: 138990839,
  },
  {
    server: 1287,
    family: "Koolkidsklan",
    power: 135726417,
  },
  {
    server: 1288,
    family: "CHAMPIONS",
    power: 999403481,
  },
  {
    server: 1288,
    family: "GardenFungus",
    power: 602286700,
  },
  {
    server: 1288,
    family: "CHAMPS2",
    power: 392243333,
  },
  {
    server: 1288,
    family: "Illustrious",
    power: 238157561,
  },
  {
    server: 1288,
    family: "DenverREC",
    power: 197923292,
  },
  {
    server: 1288,
    family: "PlagueDoctors",
    power: 195049160,
  },
  {
    server: 1288,
    family: "Mob",
    power: 156077564,
  },
  {
    server: 1288,
    family: "ÐRĒĄMĒRZ",
    power: 151394930,
  },
  {
    server: 1288,
    family: "Shroomies",
    power: 124042478,
  },
  {
    server: 1288,
    family: "N1c",
    power: 115940747,
  },
  {
    server: 1289,
    family: "ShadowFist",
    power: 927099584,
  },
  {
    server: 1289,
    family: "ChaoticOrder",
    power: 428785627,
  },
  {
    server: 1289,
    family: "DragonSlayer",
    power: 306532512,
  },
  {
    server: 1289,
    family: "ThePack",
    power: 216047647,
  },
  {
    server: 1289,
    family: "ChaoticSlayers",
    power: 215364802,
  },
  {
    server: 1289,
    family: "Valhalla",
    power: 169091835,
  },
  {
    server: 1289,
    family: "BootyMunchers",
    power: 166067616,
  },
  {
    server: 1289,
    family: "Gerbur",
    power: 158193090,
  },
  {
    server: 1289,
    family: "naZguL",
    power: 134795203,
  },
  {
    server: 1289,
    family: "Pookie",
    power: 126397433,
  },
  {
    server: 1290,
    family: "FreakShrooms",
    power: 999035792,
  },
  {
    server: 1290,
    family: "ESPADA",
    power: 631746489,
  },
  {
    server: 1290,
    family: "Reapers",
    power: 498472032,
  },
  {
    server: 1290,
    family: "RoyalFamily",
    power: 195553505,
  },
  {
    server: 1290,
    family: "Clowns",
    power: 192450692,
  },
  {
    server: 1290,
    family: "Inizio",
    power: 192036054,
  },
  {
    server: 1290,
    family: "SocialAnxiety",
    power: 189580125,
  },
  {
    server: 1290,
    family: "MortalCombat",
    power: 176970519,
  },
  {
    server: 1290,
    family: "Mushrooms",
    power: 167896192,
  },
  {
    server: 1290,
    family: "Eclipse",
    power: 162166100,
  },
  {
    server: 1291,
    family: "Immortals",
    power: 846692055,
  },
  {
    server: 1291,
    family: "Shittalkies",
    power: 737141545,
  },
  {
    server: 1291,
    family: "Brakilaz",
    power: 264235252,
  },
  {
    server: 1291,
    family: "SoulSociety",
    power: 202112917,
  },
  {
    server: 1291,
    family: "RIZZOPOLY",
    power: 201698458,
  },
  {
    server: 1291,
    family: "Purgatory",
    power: 183876852,
  },
  {
    server: 1291,
    family: "ELITE",
    power: 159848117,
  },
  {
    server: 1291,
    family: "Hunter",
    power: 151572623,
  },
  {
    server: 1291,
    family: "HellzGate",
    power: 147029524,
  },
  {
    server: 1291,
    family: "Phoenix420",
    power: 141540284,
  },
  {
    server: 1292,
    family: "Phoenix",
    power: 952782821,
  },
  {
    server: 1292,
    family: "Phoenix_Down",
    power: 493614587,
  },
  {
    server: 1292,
    family: "AllStars",
    power: 288502217,
  },
  {
    server: 1292,
    family: "MUSHSUPREMACY",
    power: 199128271,
  },
  {
    server: 1292,
    family: "Misfits",
    power: 188801409,
  },
  {
    server: 1292,
    family: "Nilderwess",
    power: 170166208,
  },
  {
    server: 1292,
    family: "crank40s",
    power: 155950510,
  },
  {
    server: 1292,
    family: "Chevelure",
    power: 155168792,
  },
  {
    server: 1292,
    family: "BakedLettuce",
    power: 143712710,
  },
  {
    server: 1292,
    family: "Shatter",
    power: 136170767,
  },
  {
    server: 1293,
    family: "Eternal",
    power: 908099997,
  },
  {
    server: 1293,
    family: "Ares",
    power: 511994278,
  },
  {
    server: 1293,
    family: "Avirus",
    power: 367348350,
  },
  {
    server: 1293,
    family: "haters",
    power: 190863172,
  },
  {
    server: 1293,
    family: "ShroomKNGDM",
    power: 185699904,
  },
  {
    server: 1293,
    family: "Shroomengers",
    power: 177325741,
  },
  {
    server: 1293,
    family: "Koolkidsklub",
    power: 170773853,
  },
  {
    server: 1293,
    family: "onePiece",
    power: 165214679,
  },
  {
    server: 1293,
    family: "Shroomies",
    power: 144118621,
  },
  {
    server: 1293,
    family: "ForgettaShroom",
    power: 122308204,
  },
  {
    server: 1294,
    family: "TwoThieves",
    power: 921602855,
  },
  {
    server: 1294,
    family: "Divinity",
    power: 735666969,
  },
  {
    server: 1294,
    family: "WhiteLotus",
    power: 471788174,
  },
  {
    server: 1294,
    family: "TheLampRubbers",
    power: 197306319,
  },
  {
    server: 1294,
    family: "Gremlins",
    power: 192940463,
  },
  {
    server: 1294,
    family: "ShroomArmy",
    power: 169609505,
  },
  {
    server: 1294,
    family: "珠莠术",
    power: 125945590,
  },
  {
    server: 1294,
    family: "Villian",
    power: 124967434,
  },
  {
    server: 1294,
    family: "Shroomkingdom",
    power: 111437164,
  },
  {
    server: 1294,
    family: "ChikenNuggets",
    power: 103087788,
  },
  {
    server: 1295,
    family: "dumplings",
    power: 877480374,
  },
  {
    server: 1295,
    family: "FungusAmongUs",
    power: 351618576,
  },
  {
    server: 1295,
    family: "mushrooms",
    power: 214198593,
  },
  {
    server: 1295,
    family: "Psilocybin",
    power: 177682344,
  },
  {
    server: 1295,
    family: "BloodLegacy",
    power: 175912992,
  },
  {
    server: 1295,
    family: "HellDivers",
    power: 168622278,
  },
  {
    server: 1295,
    family: "Strongwolf",
    power: 164312249,
  },
  {
    server: 1295,
    family: "NEWBIE",
    power: 156708268,
  },
  {
    server: 1295,
    family: "Shroomsters",
    power: 130740696,
  },
  {
    server: 1295,
    family: "ₘycₑₗᵢᵤₘ",
    power: 125735857,
  },
  {
    server: 1296,
    family: "bloodhoney",
    power: 885465157,
  },
  {
    server: 1296,
    family: "ShroomLand",
    power: 406256250,
  },
  {
    server: 1296,
    family: "BlueCaps",
    power: 391404275,
  },
  {
    server: 1296,
    family: "PowerShroom",
    power: 270727871,
  },
  {
    server: 1296,
    family: "All_For_One",
    power: 190109721,
  },
  {
    server: 1296,
    family: "Checkmate",
    power: 134508451,
  },
  {
    server: 1296,
    family: "kightsofmush",
    power: 133388928,
  },
  {
    server: 1296,
    family: "Meep",
    power: 127183852,
  },
  {
    server: 1296,
    family: "POWA",
    power: 121171157,
  },
  {
    server: 1296,
    family: "checkmaster",
    power: 111606101,
  },
  {
    server: 1297,
    family: "TheForest",
    power: 886991419,
  },
  {
    server: 1297,
    family: "RedLotus",
    power: 336377715,
  },
  {
    server: 1297,
    family: "ForestsShadow",
    power: 223825321,
  },
  {
    server: 1297,
    family: "DSM",
    power: 186627845,
  },
  {
    server: 1297,
    family: "MoB",
    power: 151090285,
  },
  {
    server: 1297,
    family: "HiddenLeaf",
    power: 138272721,
  },
  {
    server: 1297,
    family: "Asgard",
    power: 129807780,
  },
  {
    server: 1297,
    family: "Theriley",
    power: 125684530,
  },
  {
    server: 1297,
    family: "Türkiye",
    power: 123757319,
  },
  {
    server: 1297,
    family: "GODS",
    power: 114002584,
  },
  {
    server: 1298,
    family: "MoonLight",
    power: 825453343,
  },
  {
    server: 1298,
    family: "OriginalSins",
    power: 760962777,
  },
  {
    server: 1298,
    family: "WallyWorld",
    power: 344617410,
  },
  {
    server: 1298,
    family: "FunGuys",
    power: 179655434,
  },
  {
    server: 1298,
    family: "Akatsuki°W",
    power: 147959475,
  },
  {
    server: 1298,
    family: "UnoriginalSins",
    power: 134644524,
  },
  {
    server: 1298,
    family: "Minty",
    power: 110548362,
  },
  {
    server: 1298,
    family: "xXxstarmoonxXx",
    power: 103332330,
  },
  {
    server: 1298,
    family: "UnoriginalSins",
    power: 100588432,
  },
  {
    server: 1298,
    family: "Crystic",
    power: 94181368,
  },
  {
    server: 1299,
    family: "Embrace",
    power: 891246488,
  },
  {
    server: 1299,
    family: "Immortalz",
    power: 580388203,
  },
  {
    server: 1299,
    family: "GodClan",
    power: 374522672,
  },
  {
    server: 1299,
    family: "ColdPhalanges",
    power: 154684488,
  },
  {
    server: 1299,
    family: "wewinlosers",
    power: 147450101,
  },
  {
    server: 1299,
    family: "RebelWolves",
    power: 143124625,
  },
  {
    server: 1299,
    family: "balancebreaker",
    power: 113140172,
  },
  {
    server: 1299,
    family: "Underbelly",
    power: 109934661,
  },
  {
    server: 1299,
    family: "Lifestyle",
    power: 105266208,
  },
  {
    server: 1299,
    family: "hifamily",
    power: 87970577,
  },
  {
    server: 1300,
    family: "Shroomin",
    power: 888481587,
  },
  {
    server: 1300,
    family: "bored",
    power: 527758869,
  },
  {
    server: 1300,
    family: "GUILDLESS",
    power: 347936494,
  },
  {
    server: 1300,
    family: "SHROOMERS",
    power: 162870759,
  },
  {
    server: 1300,
    family: "GHOSTFACE",
    power: 156852733,
  },
  {
    server: 1300,
    family: "Sakeshroom",
    power: 134020475,
  },
  {
    server: 1300,
    family: "Reverie",
    power: 130679317,
  },
  {
    server: 1300,
    family: "DeviousOnes",
    power: 124298776,
  },
  {
    server: 1300,
    family: "Ghost",
    power: 120976130,
  },
  {
    server: 1300,
    family: "VeiledLady",
    power: 120818349,
  },
  {
    server: 1301,
    family: "Arise",
    power: 770952687,
  },
  {
    server: 1301,
    family: "Fairytail",
    power: 660593712,
  },
  {
    server: 1301,
    family: "Eternal",
    power: 295957068,
  },
  {
    server: 1301,
    family: "Atlantis",
    power: 211543664,
  },
  {
    server: 1301,
    family: "BUFFSHROOMS",
    power: 189074455,
  },
  {
    server: 1301,
    family: "Lemonwing",
    power: 188851775,
  },
  {
    server: 1301,
    family: "Omnia",
    power: 173262146,
  },
  {
    server: 1301,
    family: "VikingPrevails",
    power: 160537062,
  },
  {
    server: 1301,
    family: "Mushkingdom",
    power: 151112055,
  },
  {
    server: 1301,
    family: "FBI",
    power: 122833242,
  },
  {
    server: 1302,
    family: "EternalBW",
    power: 880639975,
  },
  {
    server: 1302,
    family: "Deathking",
    power: 294185678,
  },
  {
    server: 1302,
    family: "TokyoManjiGang",
    power: 278980924,
  },
  {
    server: 1302,
    family: "0verlordz",
    power: 166641786,
  },
  {
    server: 1302,
    family: "SubZero",
    power: 166034787,
  },
  {
    server: 1302,
    family: "Tips",
    power: 157052186,
  },
  {
    server: 1302,
    family: "Alcateia",
    power: 143082604,
  },
  {
    server: 1302,
    family: "ReLegacy",
    power: 142266135,
  },
  {
    server: 1302,
    family: "AtomicShrooms",
    power: 138135045,
  },
  {
    server: 1302,
    family: "EternallyOM",
    power: 131304421,
  },
  {
    server: 1303,
    family: "JadePalace",
    power: 839934051,
  },
  {
    server: 1303,
    family: "DeusVult",
    power: 393251812,
  },
  {
    server: 1303,
    family: "OdanEmpire",
    power: 304331460,
  },
  {
    server: 1303,
    family: "Starshroom",
    power: 156588522,
  },
  {
    server: 1303,
    family: "Walkingdead",
    power: 148009609,
  },
  {
    server: 1303,
    family: "Mycelium",
    power: 143468653,
  },
  {
    server: 1303,
    family: "Ashy",
    power: 141450337,
  },
  {
    server: 1303,
    family: "CursedFamily",
    power: 115505280,
  },
  {
    server: 1303,
    family: "Pikachu",
    power: 110764376,
  },
  {
    server: 1303,
    family: "Star",
    power: 100956022,
  },
  {
    server: 1304,
    family: "TheMovingCstle",
    power: 689367576,
  },
  {
    server: 1304,
    family: "Siege",
    power: 601336848,
  },
  {
    server: 1304,
    family: "Void",
    power: 236411949,
  },
  {
    server: 1304,
    family: "GoldenHope",
    power: 154230566,
  },
  {
    server: 1304,
    family: "TheStrawHats",
    power: 147588961,
  },
  {
    server: 1304,
    family: "Death",
    power: 137198667,
  },
  {
    server: 1304,
    family: "MushyBois",
    power: 134180525,
  },
  {
    server: 1304,
    family: "Shroomz",
    power: 125213338,
  },
  {
    server: 1304,
    family: "DoomShroom",
    power: 114803910,
  },
  {
    server: 1304,
    family: "DGK",
    power: 108959128,
  },
  {
    server: 1305,
    family: "Predators",
    power: 788816501,
  },
  {
    server: 1305,
    family: "EmberFall",
    power: 363992840,
  },
  {
    server: 1305,
    family: "RN_United",
    power: 320286081,
  },
  {
    server: 1305,
    family: "Shroomie",
    power: 200094142,
  },
  {
    server: 1305,
    family: "familiaMdZ",
    power: 153908835,
  },
  {
    server: 1305,
    family: "WolfDen",
    power: 151076627,
  },
  {
    server: 1305,
    family: "StrixShroomies",
    power: 150992030,
  },
  {
    server: 1305,
    family: "DarkAngels",
    power: 122180811,
  },
  {
    server: 1305,
    family: "HELL",
    power: 110392616,
  },
  {
    server: 1305,
    family: "kliftted",
    power: 95268160,
  },
  {
    server: 1306,
    family: "TrippingBalls",
    power: 599001578,
  },
  {
    server: 1306,
    family: "Purgatory",
    power: 515828508,
  },
  {
    server: 1306,
    family: "Psychedelic",
    power: 263662126,
  },
  {
    server: 1306,
    family: "section8",
    power: 150431902,
  },
  {
    server: 1306,
    family: "Canadaeh",
    power: 133323400,
  },
  {
    server: 1306,
    family: "Legends",
    power: 123079050,
  },
  {
    server: 1306,
    family: "Ryujin",
    power: 117145732,
  },
  {
    server: 1306,
    family: "INSTANTDEATH",
    power: 116342376,
  },
  {
    server: 1306,
    family: "Ritzs",
    power: 102424658,
  },
  {
    server: 1306,
    family: "TheGods",
    power: 101687523,
  },
  {
    server: 1307,
    family: "RoyalShrooms",
    power: 653154423,
  },
  {
    server: 1307,
    family: "SilverMoon",
    power: 488033938,
  },
  {
    server: 1307,
    family: "Fungis",
    power: 276352790,
  },
  {
    server: 1307,
    family: "WolfPack",
    power: 159379319,
  },
  {
    server: 1307,
    family: "ShroomRejectz",
    power: 139960282,
  },
  {
    server: 1307,
    family: "WompWomp",
    power: 130672342,
  },
  {
    server: 1307,
    family: "SlimeFamily",
    power: 129478558,
  },
  {
    server: 1307,
    family: "DAPPOLOGP",
    power: 127729078,
  },
  {
    server: 1307,
    family: "Paradox",
    power: 116943397,
  },
  {
    server: 1307,
    family: "Olympus",
    power: 114346075,
  },
  {
    server: 1308,
    family: "Anteiku",
    power: 656106114,
  },
  {
    server: 1308,
    family: "Legends",
    power: 307483037,
  },
  {
    server: 1308,
    family: "stonerbros",
    power: 254160389,
  },
  {
    server: 1308,
    family: "KiNGS",
    power: 153432115,
  },
  {
    server: 1308,
    family: "BNRS",
    power: 141000667,
  },
  {
    server: 1308,
    family: "Moth",
    power: 138400601,
  },
  {
    server: 1308,
    family: "femboys",
    power: 132200829,
  },
  {
    server: 1308,
    family: "HellDivers",
    power: 129478059,
  },
  {
    server: 1308,
    family: "Neverwinter",
    power: 128369874,
  },
  {
    server: 1308,
    family: "USA",
    power: 124947494,
  },
  {
    server: 1309,
    family: "BlackRose",
    power: 673388423,
  },
  {
    server: 1309,
    family: "Southpark",
    power: 327846155,
  },
  {
    server: 1309,
    family: "ApexShroomies",
    power: 241802460,
  },
  {
    server: 1309,
    family: "AFungus",
    power: 127637151,
  },
  {
    server: 1309,
    family: "ShroomSquad",
    power: 124674815,
  },
  {
    server: 1309,
    family: "Apocalipse",
    power: 117608245,
  },
  {
    server: 1309,
    family: "Justbored",
    power: 116280602,
  },
  {
    server: 1309,
    family: "SerpentsBallad",
    power: 114430801,
  },
  {
    server: 1309,
    family: "Salty",
    power: 105097924,
  },
  {
    server: 1309,
    family: "TheRedNotice",
    power: 92557479,
  },
  {
    server: 1310,
    family: "JENOVA",
    power: 719320329,
  },
  {
    server: 1310,
    family: "StrawHats",
    power: 311288823,
  },
  {
    server: 1310,
    family: "Karuteru",
    power: 244888689,
  },
  {
    server: 1310,
    family: "ButtPirates",
    power: 139772487,
  },
  {
    server: 1310,
    family: "AUXILIARY",
    power: 131573699,
  },
  {
    server: 1310,
    family: "Sanctum",
    power: 130414462,
  },
  {
    server: 1310,
    family: "Devotion",
    power: 110586680,
  },
  {
    server: 1310,
    family: "ShroomGang",
    power: 109969675,
  },
  {
    server: 1310,
    family: "DarkWraiths",
    power: 103575286,
  },
  {
    server: 1310,
    family: "Eternal",
    power: 103383335,
  },
  {
    server: 1311,
    family: "Purgatory",
    power: 652315767,
  },
  {
    server: 1311,
    family: "Foundation",
    power: 330029984,
  },
  {
    server: 1311,
    family: "SoloLevelers",
    power: 305660359,
  },
  {
    server: 1311,
    family: "Xclusive",
    power: 126156106,
  },
  {
    server: 1311,
    family: "Goonsquad",
    power: 116040663,
  },
  {
    server: 1311,
    family: "Sharkman",
    power: 109250473,
  },
  {
    server: 1311,
    family: "RedDawnSqaud",
    power: 105644569,
  },
  {
    server: 1311,
    family: "Hahahahahahaha",
    power: 102908967,
  },
  {
    server: 1311,
    family: "ShroomiePros",
    power: 81653862,
  },
  {
    server: 1311,
    family: "yolo",
    power: 80798055,
  },
  {
    server: 1312,
    family: "Misfits",
    power: 518664114,
  },
  {
    server: 1312,
    family: "Shiitake",
    power: 449299300,
  },
  {
    server: 1312,
    family: "420lanez",
    power: 318539492,
  },
  {
    server: 1312,
    family: "crusaders",
    power: 124441753,
  },
  {
    server: 1312,
    family: "Rebels",
    power: 105181400,
  },
  {
    server: 1312,
    family: "Arise",
    power: 95291611,
  },
  {
    server: 1312,
    family: "Caffeine",
    power: 91402729,
  },
  {
    server: 1312,
    family: "GetB8kd",
    power: 79323908,
  },
  {
    server: 1312,
    family: "F2P",
    power: 74508923,
  },
  {
    server: 1312,
    family: "1Cent",
    power: 65151752,
  },
  {
    server: 1313,
    family: "HomiesUnited",
    power: 538879402,
  },
  {
    server: 1313,
    family: "Labyrinth",
    power: 454679273,
  },
  {
    server: 1313,
    family: "DEEZ",
    power: 389434579,
  },
  {
    server: 1313,
    family: "FurBabies",
    power: 138244371,
  },
  {
    server: 1313,
    family: "Infamous",
    power: 124878492,
  },
  {
    server: 1313,
    family: "Legion",
    power: 102293997,
  },
  {
    server: 1313,
    family: "R6discord",
    power: 90567283,
  },
  {
    server: 1313,
    family: "Idol",
    power: 87955720,
  },
  {
    server: 1313,
    family: "Wargoth",
    power: 77672435,
  },
  {
    server: 1313,
    family: "Supertroopers",
    power: 67827852,
  },
  {
    server: 1314,
    family: "DIVINE",
    power: 623956276,
  },
  {
    server: 1314,
    family: "Genesis",
    power: 301043269,
  },
  {
    server: 1314,
    family: "MushClub",
    power: 241821270,
  },
  {
    server: 1314,
    family: "GodOfSnoot",
    power: 120785640,
  },
  {
    server: 1314,
    family: "ShadeMaster",
    power: 104596735,
  },
  {
    server: 1314,
    family: "DevilsRejects",
    power: 102181208,
  },
  {
    server: 1314,
    family: "TheCottage",
    power: 93622695,
  },
  {
    server: 1314,
    family: "Heartris",
    power: 70700680,
  },
  {
    server: 1314,
    family: "ThebabyMushys",
    power: 67075949,
  },
  {
    server: 1314,
    family: "TKOFM",
    power: 65228121,
  },
  {
    server: 1315,
    family: "MyceliumMaster",
    power: 580800170,
  },
  {
    server: 1315,
    family: "AllOrNothing",
    power: 321407521,
  },
  {
    server: 1315,
    family: "MushCats",
    power: 204747381,
  },
  {
    server: 1315,
    family: "Mar1oLo1",
    power: 90901834,
  },
  {
    server: 1315,
    family: "PartyofBanter",
    power: 87772443,
  },
  {
    server: 1315,
    family: "Blizzard",
    power: 86281615,
  },
  {
    server: 1315,
    family: "Taco_Clan",
    power: 76502929,
  },
  {
    server: 1315,
    family: "Protectors",
    power: 71555854,
  },
  {
    server: 1315,
    family: "SHROOMS",
    power: 67814579,
  },
  {
    server: 1315,
    family: "Global",
    power: 64299464,
  },
  {
    server: 1316,
    family: "PURGATORY",
    power: 502623143,
  },
  {
    server: 1316,
    family: "UYU",
    power: 364100712,
  },
  {
    server: 1316,
    family: "Kaijus",
    power: 318421649,
  },
  {
    server: 1316,
    family: "Prodigy",
    power: 80962039,
  },
  {
    server: 1316,
    family: "Fartdragons",
    power: 74313673,
  },
  {
    server: 1316,
    family: "ToBeUnKnow",
    power: 70475246,
  },
  {
    server: 1316,
    family: "Death_Blight",
    power: 67385922,
  },
  {
    server: 1316,
    family: "Yggdrasil",
    power: 65709364,
  },
  {
    server: 1316,
    family: "Anime",
    power: 63232573,
  },
  {
    server: 1316,
    family: "Defenders",
    power: 58625754,
  },
  {
    server: 1317,
    family: "ROYALTY",
    power: 585613534,
  },
  {
    server: 1317,
    family: "Reapers",
    power: 224729807,
  },
  {
    server: 1317,
    family: "ShroomLords",
    power: 220175845,
  },
  {
    server: 1317,
    family: "Wassup",
    power: 91123663,
  },
  {
    server: 1317,
    family: "HeadHunters",
    power: 88963896,
  },
  {
    server: 1317,
    family: "EZ",
    power: 83174203,
  },
  {
    server: 1317,
    family: "Shroomers",
    power: 82737434,
  },
  {
    server: 1317,
    family: "Stoners",
    power: 80012937,
  },
  {
    server: 1317,
    family: "Lightness",
    power: 69509537,
  },
  {
    server: 1317,
    family: "Slayers",
    power: 66012834,
  },
  {
    server: 1319,
    family: "Helldivers",
    power: 517217467,
  },
  {
    server: 1319,
    family: "Lamp",
    power: 245398222,
  },
  {
    server: 1319,
    family: "PrisonBreakers",
    power: 239567627,
  },
  {
    server: 1319,
    family: "CrockOfShitake",
    power: 79677957,
  },
  {
    server: 1319,
    family: "BLASPHEMY",
    power: 75871447,
  },
  {
    server: 1319,
    family: "MiFamilia",
    power: 71156622,
  },
  {
    server: 1319,
    family: "TruffleTribe",
    power: 66694025,
  },
  {
    server: 1319,
    family: "TOAST",
    power: 66010607,
  },
  {
    server: 1319,
    family: "Lovethefam",
    power: 60975615,
  },
  {
    server: 1319,
    family: "ForgottenOnes",
    power: 54284181,
  },
  {
    server: 1320,
    family: "ROYALTY",
    power: 532157528,
  },
  {
    server: 1320,
    family: "Wildcard",
    power: 262055369,
  },
  {
    server: 1320,
    family: "Prodigy",
    power: 134841393,
  },
  {
    server: 1320,
    family: "DirtNap",
    power: 90224167,
  },
  {
    server: 1320,
    family: "ShroomKnights",
    power: 75057211,
  },
  {
    server: 1320,
    family: "mooshiee",
    power: 72545688,
  },
  {
    server: 1320,
    family: "GloomyShroomy",
    power: 67993219,
  },
  {
    server: 1320,
    family: "BarbiexKen",
    power: 66242234,
  },
  {
    server: 1320,
    family: "Idiots",
    power: 62259545,
  },
  {
    server: 1320,
    family: "Khazâdgathol",
    power: 54601626,
  },
  {
    server: 1323,
    family: "Void",
    power: 499709253,
  },
  {
    server: 1323,
    family: "CastleintheSky",
    power: 215912017,
  },
  {
    server: 1323,
    family: "finnablow",
    power: 123107785,
  },
  {
    server: 1323,
    family: "Frost",
    power: 0,
  },
  {
    server: 1323,
    family: "DarkAngels",
    power: 0,
  },
  {
    server: 1323,
    family: "Loveducks",
    power: 0,
  },
  {
    server: 1323,
    family: "TekShroom",
    power: 0,
  },
  {
    server: 1323,
    family: "pokisfeet",
    power: 0,
  },
  {
    server: 1323,
    family: "Walmart5929",
    power: 0,
  },
  {
    server: 1323,
    family: "THICKSHROOMIE",
    power: 0,
  },
  {
    server: 1324,
    family: "ONLYSHROOMS",
    power: 147445962,
  },
  {
    server: 1324,
    family: "Eternal",
    power: 146711532,
  },
  {
    server: 1324,
    family: "Asgard",
    power: 93233138,
  },
  {
    server: 1324,
    family: "Valhalla",
    power: 0,
  },
  {
    server: 1324,
    family: "Brawlstars",
    power: 0,
  },
  {
    server: 1324,
    family: "leer",
    power: 0,
  },
  {
    server: 1324,
    family: "AnimeWeebs",
    power: 0,
  },
  {
    server: 1324,
    family: "Murface",
    power: 0,
  },
  {
    server: 1324,
    family: "PizzaMinions",
    power: 0,
  },
  {
    server: 1324,
    family: "Rain",
    power: 0,
  },
  {
    server: 1325,
    family: "Halloween",
    power: 448301711,
  },
  {
    server: 1325,
    family: "dontsleep",
    power: 161064791,
  },
  {
    server: 1325,
    family: "Tempest",
    power: 122813767,
  },
  {
    server: 1325,
    family: "CaveOfCummies",
    power: 0,
  },
  {
    server: 1325,
    family: "Quack",
    power: 0,
  },
  {
    server: 1325,
    family: "Nuggets",
    power: 0,
  },
  {
    server: 1325,
    family: "y",
    power: 0,
  },
  {
    server: 1325,
    family: "42O",
    power: 0,
  },
  {
    server: 1325,
    family: "idkbored",
    power: 0,
  },
  {
    server: 1325,
    family: "Ogrebuddy",
    power: 0,
  },
  {
    server: 1326,
    family: "Cougarcallers",
    power: 134776581,
  },
  {
    server: 1326,
    family: "relikias",
    power: 110633836,
  },
  {
    server: 1326,
    family: "THEREALGODS",
    power: 101605181,
  },
  {
    server: 1326,
    family: "Glorious",
    power: 0,
  },
  {
    server: 1326,
    family: "OpiumHQ",
    power: 0,
  },
  {
    server: 1326,
    family: "UniversalLove",
    power: 0,
  },
  {
    server: 1326,
    family: "We’re_FRIED",
    power: 0,
  },
  {
    server: 1326,
    family: "SmartFellas",
    power: 0,
  },
  {
    server: 1326,
    family: "FJB",
    power: 0,
  },
  {
    server: 1326,
    family: "cosmohoes",
    power: 0,
  },
  {
    server: 1327,
    family: "Ahjin",
    power: 342536202,
  },
  {
    server: 1327,
    family: "Millenium",
    power: 98081282,
  },
  {
    server: 1327,
    family: "Synthesis",
    power: 95273600,
  },
  {
    server: 1327,
    family: "MINENOTYOURS",
    power: 0,
  },
  {
    server: 1327,
    family: "Shiitake",
    power: 0,
  },
  {
    server: 1327,
    family: "JuggaloFamily",
    power: 0,
  },
  {
    server: 1327,
    family: "Thepicboss",
    power: 0,
  },
  {
    server: 1327,
    family: "Royalty",
    power: 0,
  },
  {
    server: 1327,
    family: "Hallucinogenic",
    power: 0,
  },
  {
    server: 1327,
    family: "Sad",
    power: 0,
  },
  {
    server: 1328,
    family: "Valkyrie",
    power: 179380149,
  },
  {
    server: 1328,
    family: "Valhalla",
    power: 93702324,
  },
  {
    server: 1328,
    family: "NewJeans",
    power: 85516374,
  },
  {
    server: 1328,
    family: "Maple",
    power: 0,
  },
  {
    server: 1328,
    family: "Anime",
    power: 0,
  },
  {
    server: 1328,
    family: "IPS",
    power: 0,
  },
  {
    server: 1328,
    family: "RedeemD2",
    power: 0,
  },
  {
    server: 1328,
    family: "Blaze",
    power: 0,
  },
  {
    server: 1328,
    family: "ShroomKru",
    power: 0,
  },
  {
    server: 1328,
    family: "Twice",
    power: 0,
  },
  {
    server: 1329,
    family: "Nova",
    power: 273194960,
  },
  {
    server: 1329,
    family: "gigashroom",
    power: 201633025,
  },
  {
    server: 1329,
    family: "SEVENDEADLYSIN",
    power: 79964310,
  },
  {
    server: 1329,
    family: "Sonic",
    power: 0,
  },
  {
    server: 1329,
    family: "Shroomland",
    power: 0,
  },
  {
    server: 1329,
    family: "LEGION",
    power: 0,
  },
  {
    server: 1329,
    family: "TheFam",
    power: 0,
  },
  {
    server: 1329,
    family: "CoffeeSloots",
    power: 0,
  },
  {
    server: 1329,
    family: "soulsociety",
    power: 0,
  },
  {
    server: 1329,
    family: "vets",
    power: 0,
  },
  {
    server: 1330,
    family: "LEGION",
    power: 253300110,
  },
  {
    server: 1330,
    family: "Skyrim",
    power: 101724415,
  },
  {
    server: 1330,
    family: "Valhalla",
    power: 97904853,
  },
  {
    server: 1330,
    family: "NotDizzy",
    power: 0,
  },
  {
    server: 1330,
    family: "StarFall",
    power: 0,
  },
  {
    server: 1330,
    family: "JuraTempest",
    power: 0,
  },
  {
    server: 1330,
    family: "ASSASSINS",
    power: 0,
  },
  {
    server: 1330,
    family: "Rivia",
    power: 0,
  },
  {
    server: 1330,
    family: "LeTsunami",
    power: 0,
  },
  {
    server: 1330,
    family: "Fartsalot67",
    power: 0,
  },
  {
    server: 1331,
    family: "Void",
    power: 266983294,
  },
  {
    server: 1331,
    family: "Draggos",
    power: 83603236,
  },
  {
    server: 1331,
    family: "DoomShrooms",
    power: 75295364,
  },
  {
    server: 1331,
    family: "LostArcanium",
    power: 0,
  },
  {
    server: 1331,
    family: "Pappa_Johns",
    power: 0,
  },
  {
    server: 1331,
    family: "ThePepe’s",
    power: 0,
  },
  {
    server: 1331,
    family: "shrooms",
    power: 0,
  },
  {
    server: 1331,
    family: "Elysia",
    power: 0,
  },
  {
    server: 1331,
    family: "ᴛᴇᴍᴘᴇsᴛ",
    power: 0,
  },
  {
    server: 1331,
    family: "Dragons",
    power: 0,
  },
  {
    server: 1332,
    family: "TheMafia",
    power: 235082808,
  },
  {
    server: 1332,
    family: "Anxishrooms",
    power: 146571471,
  },
  {
    server: 1332,
    family: "Shroomies",
    power: 103841796,
  },
  {
    server: 1332,
    family: "eclipse",
    power: 0,
  },
  {
    server: 1332,
    family: "Dream",
    power: 0,
  },
  {
    server: 1332,
    family: "BruhMoment",
    power: 0,
  },
  {
    server: 1332,
    family: "OnePiece",
    power: 0,
  },
  {
    server: 1332,
    family: "Nightmare",
    power: 0,
  },
  {
    server: 1332,
    family: "Descendants",
    power: 0,
  },
  {
    server: 1332,
    family: "CRACKHEADS",
    power: 0,
  },
  {
    server: 1333,
    family: "Destructors",
    power: 87386539,
  },
  {
    server: 1333,
    family: "Ahjin",
    power: 58395513,
  },
  {
    server: 1333,
    family: "DemiGlory",
    power: 58230111,
  },
  {
    server: 1333,
    family: "SocietyDecode",
    power: 0,
  },
  {
    server: 1333,
    family: "Rizzy",
    power: 0,
  },
  {
    server: 1333,
    family: "Shadows",
    power: 0,
  },
  {
    server: 1333,
    family: "Qct",
    power: 0,
  },
  {
    server: 1333,
    family: "Maplestory",
    power: 0,
  },
  {
    server: 1333,
    family: "Hellhounds",
    power: 0,
  },
  {
    server: 1333,
    family: "tnation",
    power: 0,
  },
  {
    server: 1334,
    family: "Shroomy",
    power: 80056694,
  },
  {
    server: 1334,
    family: "BREAD",
    power: 59025436,
  },
  {
    server: 1334,
    family: "Kaos",
    power: 51194707,
  },
  {
    server: 1334,
    family: "hiddenleaf",
    power: 0,
  },
  {
    server: 1334,
    family: "GrindTime",
    power: 0,
  },
  {
    server: 1334,
    family: "shrooms",
    power: 0,
  },
  {
    server: 1334,
    family: "CalamityofSoul",
    power: 0,
  },
  {
    server: 1334,
    family: "NoBoss4U",
    power: 0,
  },
  {
    server: 1334,
    family: "seaweed",
    power: 0,
  },
  {
    server: 1334,
    family: "FourthWing",
    power: 0,
  },
  {
    server: 1335,
    family: "GigaShroom",
    power: 233892501,
  },
  {
    server: 1335,
    family: "Shroomies",
    power: 81660662,
  },
  {
    server: 1335,
    family: "Pizza",
    power: 75472376,
  },
  {
    server: 1335,
    family: "UnholyKillers",
    power: 0,
  },
  {
    server: 1335,
    family: "Grimreapers",
    power: 0,
  },
  {
    server: 1335,
    family: "greenFN",
    power: 0,
  },
  {
    server: 1335,
    family: "SoulTakers",
    power: 0,
  },
  {
    server: 1335,
    family: "TrippingShroom",
    power: 0,
  },
  {
    server: 1335,
    family: "MagesONTOP",
    power: 0,
  },
  {
    server: 1335,
    family: "noggas",
    power: 0,
  },
  {
    server: 1336,
    family: "bloodhoney",
    power: 77991254,
  },
  {
    server: 1336,
    family: "Spiicy",
    power: 52250177,
  },
  {
    server: 1336,
    family: "beanrz",
    power: 50823557,
  },
  {
    server: 1336,
    family: "Mn_on_top",
    power: 0,
  },
  {
    server: 1336,
    family: "Reyes",
    power: 0,
  },
  {
    server: 1336,
    family: "Vamp",
    power: 0,
  },
  {
    server: 1336,
    family: "real",
    power: 0,
  },
  {
    server: 1336,
    family: "FumbleburgerYT",
    power: 0,
  },
  {
    server: 1336,
    family: "Wolfpack",
    power: 0,
  },
  {
    server: 1336,
    family: "Horizoninc",
    power: 0,
  },
  {
    server: 1337,
    family: "OnlyBops",
    power: 152163677,
  },
  {
    server: 1337,
    family: "Murder",
    power: 103492012,
  },
  {
    server: 1337,
    family: "KINGS",
    power: 55146084,
  },
  {
    server: 1337,
    family: "Derpalicious",
    power: 0,
  },
  {
    server: 1337,
    family: "Drk_legion",
    power: 0,
  },
  {
    server: 1337,
    family: "rat",
    power: 0,
  },
  {
    server: 1337,
    family: "Nightwing",
    power: 0,
  },
  {
    server: 1337,
    family: "Hi",
    power: 0,
  },
  {
    server: 1337,
    family: "idkfam",
    power: 0,
  },
  {
    server: 1337,
    family: "KoolKidsKlub",
    power: 0,
  },
  {
    server: 1338,
    family: "Nightcord_N25",
    power: 74913214,
  },
  {
    server: 1338,
    family: "Templar_Order",
    power: 65316554,
  },
  {
    server: 1338,
    family: "OLIMPO",
    power: 61539398,
  },
  {
    server: 1338,
    family: "PandaFam",
    power: 0,
  },
  {
    server: 1338,
    family: "HTFUDragon",
    power: 0,
  },
  {
    server: 1338,
    family: "Mushroomfarm",
    power: 0,
  },
  {
    server: 1338,
    family: "boysonly",
    power: 0,
  },
  {
    server: 1338,
    family: "ConeSmokas",
    power: 0,
  },
  {
    server: 1338,
    family: "rapé",
    power: 0,
  },
  {
    server: 1338,
    family: "Jiggerboo",
    power: 0,
  },
  {
    server: 1339,
    family: "ElfenLiege",
    power: 172502043,
  },
  {
    server: 1339,
    family: "Joogyland",
    power: 49951538,
  },
  {
    server: 1339,
    family: "Bitches",
    power: 48560897,
  },
  {
    server: 1339,
    family: "AznCorp",
    power: 0,
  },
  {
    server: 1339,
    family: "Phalspals",
    power: 0,
  },
  {
    server: 1339,
    family: "InItForTheLULZ",
    power: 0,
  },
  {
    server: 1339,
    family: "Golden",
    power: 0,
  },
  {
    server: 1339,
    family: "NewBee",
    power: 0,
  },
  {
    server: 1339,
    family: "WeFamily",
    power: 0,
  },
  {
    server: 1339,
    family: "the_shroomes",
    power: 0,
  },
  {
    server: 1340,
    family: "Phoenix",
    power: 51851842,
  },
  {
    server: 1340,
    family: "Gourmet",
    power: 39052301,
  },
  {
    server: 1340,
    family: "TheRealFamily",
    power: 34045525,
  },
  {
    server: 1340,
    family: "ETotDeR",
    power: 0,
  },
  {
    server: 1340,
    family: "Chicken",
    power: 0,
  },
  {
    server: 1340,
    family: "wompwomp",
    power: 0,
  },
  {
    server: 1340,
    family: "Titans",
    power: 0,
  },
  {
    server: 1340,
    family: "Undead",
    power: 0,
  },
  {
    server: 1340,
    family: "lilmeatgang",
    power: 0,
  },
  {
    server: 1340,
    family: "tbone",
    power: 0,
  },
  {
    server: 1341,
    family: "Rise",
    power: 62171816,
  },
  {
    server: 1341,
    family: "Trikru",
    power: 34620807,
  },
  {
    server: 1341,
    family: "Ueudhudje",
    power: 31223869,
  },
  {
    server: 1341,
    family: "Greenhome",
    power: 0,
  },
  {
    server: 1341,
    family: "SoloLeveling",
    power: 0,
  },
  {
    server: 1341,
    family: "Haven",
    power: 0,
  },
  {
    server: 1341,
    family: "KinitoPET",
    power: 0,
  },
  {
    server: 1341,
    family: "fantasyland",
    power: 0,
  },
  {
    server: 1341,
    family: "GamersLounge",
    power: 0,
  },
  {
    server: 1341,
    family: "planetofshroom",
    power: 0,
  },
  {
    server: 6001,
    family: "SoloLeveling",
    power: 2064581503,
  },
  {
    server: 6001,
    family: "AKATSUKI",
    power: 1493702030,
  },
  {
    server: 6001,
    family: "Zoológico",
    power: 1483351517,
  },
  {
    server: 6001,
    family: "AlienLegion",
    power: 1380445939,
  },
  {
    server: 6001,
    family: "LosXivatos",
    power: 1367103214,
  },
  {
    server: 6001,
    family: "Hispania",
    power: 672344748,
  },
  {
    server: 6001,
    family: "TopEspañoles",
    power: 644927931,
  },
  {
    server: 6001,
    family: "ChampHub",
    power: 612700995,
  },
  {
    server: 6001,
    family: "VivaEspaña",
    power: 433973922,
  },
  {
    server: 6001,
    family: "JUSTICE",
    power: 397283685,
  },
  {
    server: 6002,
    family: "Radiance",
    power: 2269882971,
  },
  {
    server: 6002,
    family: "Vortex",
    power: 1605444688,
  },
  {
    server: 6002,
    family: "Hispanos",
    power: 1425071154,
  },
  {
    server: 6002,
    family: "DarkGaliza",
    power: 1332940422,
  },
  {
    server: 6002,
    family: "Wz",
    power: 1103968257,
  },
  {
    server: 6002,
    family: "GODS",
    power: 515496022,
  },
  {
    server: 6002,
    family: "SpainWarriors",
    power: 390561654,
  },
  {
    server: 6002,
    family: "ImperioEspañol",
    power: 365167552,
  },
  {
    server: 6002,
    family: "BoletusLegion",
    power: 359171893,
  },
  {
    server: 6002,
    family: "españita",
    power: 344911754,
  },
  {
    server: 6003,
    family: "꧁️Շѧмѯ_️θѵэя꧂",
    power: 1881227447,
  },
  {
    server: 6003,
    family: "TeemoQuest",
    power: 1564029876,
  },
  {
    server: 6003,
    family: "Patólogos",
    power: 920551826,
  },
  {
    server: 6003,
    family: "BARBAAZUL",
    power: 596919222,
  },
  {
    server: 6003,
    family: "GamerQuest2",
    power: 562848826,
  },
  {
    server: 6003,
    family: "España",
    power: 362338616,
  },
  {
    server: 6003,
    family: "ChachasFumonas",
    power: 313408378,
  },
  {
    server: 6003,
    family: "Legendarios",
    power: 253986788,
  },
  {
    server: 6003,
    family: "Andalucía",
    power: 225964203,
  },
  {
    server: 6003,
    family: "honguitosfull",
    power: 210242280,
  },
  {
    server: 6004,
    family: "Overlords",
    power: 1639553575,
  },
  {
    server: 6004,
    family: "Destroyers",
    power: 1473780249,
  },
  {
    server: 6004,
    family: "DarkPhoenix",
    power: 978033239,
  },
  {
    server: 6004,
    family: "SpainCity",
    power: 584717354,
  },
  {
    server: 6004,
    family: "ESPAÑA",
    power: 484670955,
  },
  {
    server: 6004,
    family: "Valhalla",
    power: 482077165,
  },
  {
    server: 6004,
    family: "TopSpain",
    power: 466987922,
  },
  {
    server: 6004,
    family: "OLYMPUS",
    power: 385749912,
  },
  {
    server: 6004,
    family: "Pumarin",
    power: 342069439,
  },
  {
    server: 6004,
    family: "FUERAMOROS",
    power: 319281311,
  },
  {
    server: 6005,
    family: "Nexus",
    power: 1870367738,
  },
  {
    server: 6005,
    family: "Setas",
    power: 688568353,
  },
  {
    server: 6005,
    family: "ESPAÑA",
    power: 361414688,
  },
  {
    server: 6005,
    family: "EsPaÑa",
    power: 332080959,
  },
  {
    server: 6005,
    family: "espartacusEsp",
    power: 256921017,
  },
  {
    server: 6005,
    family: "Valhalla",
    power: 253367828,
  },
  {
    server: 6005,
    family: "Slayers",
    power: 201939175,
  },
  {
    server: 6005,
    family: "Andalucía",
    power: 190605253,
  },
  {
    server: 6005,
    family: "Heretics",
    power: 142110534,
  },
  {
    server: 6005,
    family: "EspañitaTop",
    power: 106056563,
  },
  {
    server: 6006,
    family: "LaMafia",
    power: 1829614760,
  },
  {
    server: 6006,
    family: "CosaNostra",
    power: 1202957880,
  },
  {
    server: 6006,
    family: "AMANECER",
    power: 490010226,
  },
  {
    server: 6006,
    family: "LaTaberna",
    power: 477933066,
  },
  {
    server: 6006,
    family: "Rebellion",
    power: 363204510,
  },
  {
    server: 6006,
    family: "ManolosClan",
    power: 289417324,
  },
  {
    server: 6006,
    family: "España",
    power: 270163153,
  },
  {
    server: 6006,
    family: "Españoles",
    power: 255181045,
  },
  {
    server: 6006,
    family: "Spain",
    power: 241281967,
  },
  {
    server: 6006,
    family: "BLADIMIR",
    power: 192032048,
  },
  {
    server: 6007,
    family: "×Mugiwaras×",
    power: 1749194629,
  },
  {
    server: 6007,
    family: "MushiKnights",
    power: 1486759634,
  },
  {
    server: 6007,
    family: "España",
    power: 503796590,
  },
  {
    server: 6007,
    family: "༒LEGIÓN༒",
    power: 316083781,
  },
  {
    server: 6007,
    family: "Illoamoajugah",
    power: 297080372,
  },
  {
    server: 6007,
    family: "ARES",
    power: 296862078,
  },
  {
    server: 6007,
    family: "CELESTIALES",
    power: 260601827,
  },
  {
    server: 6007,
    family: "SetasEspaña",
    power: 237984966,
  },
  {
    server: 6007,
    family: "MAGNERIDON",
    power: 161856358,
  },
  {
    server: 6007,
    family: "Xampileyends",
    power: 137699913,
  },
  {
    server: 6008,
    family: "Angel_Of_Death",
    power: 1706795470,
  },
  {
    server: 6008,
    family: "Hispanos",
    power: 1318439597,
  },
  {
    server: 6008,
    family: "Thë༒LOM༒Ünïtëd",
    power: 352260405,
  },
  {
    server: 6008,
    family: "MUSHROOMSKILL",
    power: 350478604,
  },
  {
    server: 6008,
    family: "EspañaLegends",
    power: 339209576,
  },
  {
    server: 6008,
    family: "España",
    power: 270449624,
  },
  {
    server: 6008,
    family: "SunsetRavensES",
    power: 251838154,
  },
  {
    server: 6008,
    family: "Atomic",
    power: 114371307,
  },
  {
    server: 6008,
    family: "Spain",
    power: 112726846,
  },
  {
    server: 6008,
    family: "Death",
    power: 61589817,
  },
  {
    server: 6009,
    family: "ELITE",
    power: 1721701938,
  },
  {
    server: 6009,
    family: "ELITE_2",
    power: 756492740,
  },
  {
    server: 6009,
    family: "IMPERIOESPAÑOL",
    power: 716738693,
  },
  {
    server: 6009,
    family: "SAYANS",
    power: 414158196,
  },
  {
    server: 6009,
    family: "ESPAÑAGOD",
    power: 350475603,
  },
  {
    server: 6009,
    family: "Campiman",
    power: 273455821,
  },
  {
    server: 6009,
    family: "LEYENDAS",
    power: 270534661,
  },
  {
    server: 6009,
    family: "Champimon",
    power: 172425313,
  },
  {
    server: 6009,
    family: "Sololatinos",
    power: 164234025,
  },
  {
    server: 6009,
    family: "MUSHROOMSCLUB",
    power: 103713958,
  },
  {
    server: 6010,
    family: "Hunters",
    power: 1708566003,
  },
  {
    server: 6010,
    family: "ALPHA",
    power: 965384705,
  },
  {
    server: 6010,
    family: "Nyanshis",
    power: 491432688,
  },
  {
    server: 6010,
    family: "FoxXHoud",
    power: 316482973,
  },
  {
    server: 6010,
    family: "todospueden",
    power: 201269897,
  },
  {
    server: 6010,
    family: "FOLLADORES",
    power: 156631707,
  },
  {
    server: 6010,
    family: "Españaaaa",
    power: 125526728,
  },
  {
    server: 6010,
    family: "LatinosMx",
    power: 99410869,
  },
  {
    server: 6010,
    family: "MushBloodSP",
    power: 81257537,
  },
  {
    server: 6010,
    family: "DARK",
    power: 60142563,
  },
  {
    server: 6011,
    family: "Ølimpø®",
    power: 1300663435,
  },
  {
    server: 6011,
    family: "Falkreath",
    power: 831240622,
  },
  {
    server: 6011,
    family: "Deadlysins",
    power: 775123535,
  },
  {
    server: 6011,
    family: "HELIX",
    power: 466536530,
  },
  {
    server: 6011,
    family: "Barceloca",
    power: 227488942,
  },
  {
    server: 6011,
    family: "ZeroWings",
    power: 223170748,
  },
  {
    server: 6011,
    family: "DESERT",
    power: 215989816,
  },
  {
    server: 6011,
    family: "España",
    power: 75992832,
  },
  {
    server: 6011,
    family: "Mugiwara",
    power: 71607408,
  },
  {
    server: 6011,
    family: "barcobasurero",
    power: 71145040,
  },
  {
    server: 6012,
    family: "Dulce_Reino",
    power: 1342097269,
  },
  {
    server: 6012,
    family: "RYŌIKI_TENKAI",
    power: 959950038,
  },
  {
    server: 6012,
    family: "CaídaDeAlbaz",
    power: 350283335,
  },
  {
    server: 6012,
    family: "DemonSlayer",
    power: 292446338,
  },
  {
    server: 6012,
    family: "Gnomos",
    power: 189145520,
  },
  {
    server: 6012,
    family: "Fairy_Tail",
    power: 168521920,
  },
  {
    server: 6012,
    family: "MushroomsOG",
    power: 95901982,
  },
  {
    server: 6012,
    family: "BlackMoon",
    power: 60818606,
  },
  {
    server: 6012,
    family: "DEMONS",
    power: 51614791,
  },
  {
    server: 6012,
    family: "Team_MORTALS",
    power: 49531377,
  },
  {
    server: 6013,
    family: "NoMercy",
    power: 1344636917,
  },
  {
    server: 6013,
    family: "ALONSISTAS",
    power: 852725021,
  },
  {
    server: 6013,
    family: "ALUCINÓGENOS",
    power: 225887821,
  },
  {
    server: 6013,
    family: "AKATSUKI",
    power: 223149204,
  },
  {
    server: 6013,
    family: "EsporaToxica",
    power: 150922845,
  },
  {
    server: 6013,
    family: "TheDragons",
    power: 130526622,
  },
  {
    server: 6013,
    family: "sayayines",
    power: 128482279,
  },
  {
    server: 6013,
    family: "Themewing",
    power: 57656365,
  },
  {
    server: 6013,
    family: "Latinox",
    power: 57391350,
  },
  {
    server: 6013,
    family: "UCHIHA",
    power: 49585310,
  },
  {
    server: 6014,
    family: "RealBetis",
    power: 1280220655,
  },
  {
    server: 6014,
    family: "MarisqueríaSW",
    power: 1107378211,
  },
  {
    server: 6014,
    family: "ChampMasters",
    power: 1032656544,
  },
  {
    server: 6014,
    family: "RuidoSpain",
    power: 458603882,
  },
  {
    server: 6014,
    family: "Español",
    power: 291029723,
  },
  {
    server: 6014,
    family: "PUNKNOTDEAD",
    power: 232002860,
  },
  {
    server: 6014,
    family: "BluffClan",
    power: 216263908,
  },
  {
    server: 6014,
    family: "Championes",
    power: 189086408,
  },
  {
    server: 6014,
    family: "Libertad",
    power: 165099599,
  },
  {
    server: 6014,
    family: "TRX",
    power: 159442516,
  },
  {
    server: 6015,
    family: "Hispanos",
    power: 1648409142,
  },
  {
    server: 6015,
    family: "Leviathan",
    power: 1400430412,
  },
  {
    server: 6015,
    family: "Españita",
    power: 586833341,
  },
  {
    server: 6015,
    family: "GLADIADORES",
    power: 474836170,
  },
  {
    server: 6015,
    family: "PAJA",
    power: 342975206,
  },
  {
    server: 6015,
    family: "LosHongitos🤑",
    power: 190913260,
  },
  {
    server: 6015,
    family: "TOADS",
    power: 148147728,
  },
  {
    server: 6015,
    family: "vikingsetas",
    power: 128762921,
  },
  {
    server: 6015,
    family: "OLIMPO",
    power: 109209280,
  },
  {
    server: 6015,
    family: "JURA_PAJA",
    power: 106630036,
  },
  {
    server: 6016,
    family: "Españoles",
    power: 1523850550,
  },
  {
    server: 6016,
    family: "Españolas",
    power: 582656574,
  },
  {
    server: 6016,
    family: "PERROSANCHE",
    power: 499843383,
  },
  {
    server: 6016,
    family: "Dragon",
    power: 348479056,
  },
  {
    server: 6016,
    family: "HISPANO",
    power: 281840373,
  },
  {
    server: 6016,
    family: "Champiñones",
    power: 222794956,
  },
  {
    server: 6016,
    family: "LaTiNoS",
    power: 194995088,
  },
  {
    server: 6016,
    family: "champDIOS",
    power: 189415501,
  },
  {
    server: 6016,
    family: "champi",
    power: 182232842,
  },
  {
    server: 6016,
    family: "xxX_Sin_Perfil",
    power: 113077996,
  },
  {
    server: 6017,
    family: "SweeTDeatH",
    power: 1536168638,
  },
  {
    server: 6017,
    family: "TokyoManji",
    power: 434467444,
  },
  {
    server: 6017,
    family: "LATINOS",
    power: 429417875,
  },
  {
    server: 6017,
    family: "España",
    power: 400401239,
  },
  {
    server: 6017,
    family: "champihongos",
    power: 375777026,
  },
  {
    server: 6017,
    family: "Principes",
    power: 263813963,
  },
  {
    server: 6017,
    family: "yitos",
    power: 241046426,
  },
  {
    server: 6017,
    family: "Nido",
    power: 209227309,
  },
  {
    server: 6017,
    family: "Losrompetopos1",
    power: 91118156,
  },
  {
    server: 6017,
    family: "México",
    power: 64708156,
  },
  {
    server: 6018,
    family: "DISTRITO18",
    power: 1307519761,
  },
  {
    server: 6018,
    family: "LEGENDS",
    power: 563040591,
  },
  {
    server: 6018,
    family: "INVICTUS",
    power: 457644615,
  },
  {
    server: 6018,
    family: "VALHALLA",
    power: 378847578,
  },
  {
    server: 6018,
    family: "🤑DEAD",
    power: 201549451,
  },
  {
    server: 6018,
    family: "Viva_España",
    power: 176421064,
  },
  {
    server: 6018,
    family: "King_Champ",
    power: 172329094,
  },
  {
    server: 6018,
    family: "MushClan",
    power: 139634228,
  },
  {
    server: 6018,
    family: "SECTOR18",
    power: 100025898,
  },
  {
    server: 6018,
    family: "Killersss",
    power: 98640825,
  },
  {
    server: 6019,
    family: "SonsOfKittens",
    power: 1620636337,
  },
  {
    server: 6019,
    family: "SonsOfKittens2",
    power: 460102711,
  },
  {
    server: 6019,
    family: "Akatsuki暁",
    power: 362726947,
  },
  {
    server: 6019,
    family: "Champions",
    power: 279555461,
  },
  {
    server: 6019,
    family: "EspañaHub",
    power: 208121735,
  },
  {
    server: 6019,
    family: "LATAM",
    power: 200916349,
  },
  {
    server: 6019,
    family: "Speedrunners",
    power: 172358815,
  },
  {
    server: 6019,
    family: "Mugiwaras",
    power: 88411851,
  },
  {
    server: 6019,
    family: "guerreros",
    power: 81835461,
  },
  {
    server: 6019,
    family: "Ramenempire",
    power: 81215651,
  },
  {
    server: 6020,
    family: "Musshu",
    power: 1518530025,
  },
  {
    server: 6020,
    family: "HispanosTop",
    power: 708353320,
  },
  {
    server: 6020,
    family: "Gladorium",
    power: 472130167,
  },
  {
    server: 6020,
    family: "animeverse",
    power: 197472009,
  },
  {
    server: 6020,
    family: "Sunshinne",
    power: 164547865,
  },
  {
    server: 6020,
    family: "Laycan",
    power: 154139690,
  },
  {
    server: 6020,
    family: "sheeee",
    power: 139829692,
  },
  {
    server: 6020,
    family: "nineTOP",
    power: 96328215,
  },
  {
    server: 6020,
    family: "LOS_PIBES",
    power: 94187249,
  },
  {
    server: 6020,
    family: "aventureros",
    power: 63112068,
  },
  {
    server: 6021,
    family: "Olympus",
    power: 1564599656,
  },
  {
    server: 6021,
    family: "demonspanish",
    power: 495722100,
  },
  {
    server: 6021,
    family: "Ragnarok",
    power: 349463557,
  },
  {
    server: 6021,
    family: "Latinos",
    power: 289119789,
  },
  {
    server: 6021,
    family: "SenTineLs",
    power: 287626295,
  },
  {
    server: 6021,
    family: "SobaTetas",
    power: 262085812,
  },
  {
    server: 6021,
    family: "España",
    power: 218572062,
  },
  {
    server: 6021,
    family: "LatinosUnidos",
    power: 201948732,
  },
  {
    server: 6021,
    family: "INFiNiTY",
    power: 189703912,
  },
  {
    server: 6021,
    family: "Barcelona",
    power: 167651006,
  },
  {
    server: 6022,
    family: "JųгaTє๓ρεรT",
    power: 1853938580,
  },
  {
    server: 6022,
    family: "JųгaTє๓ρεรT2",
    power: 935069798,
  },
  {
    server: 6022,
    family: "Kil4TOR_CL4N",
    power: 561704729,
  },
  {
    server: 6022,
    family: "OrgXIII",
    power: 317775598,
  },
  {
    server: 6022,
    family: "VALINOR",
    power: 307589074,
  },
  {
    server: 6022,
    family: "ChampiEscuela",
    power: 301221509,
  },
  {
    server: 6022,
    family: "ProClanX",
    power: 254259907,
  },
  {
    server: 6022,
    family: "pelones777",
    power: 235324909,
  },
  {
    server: 6022,
    family: "VamoAJuga",
    power: 223148828,
  },
  {
    server: 6022,
    family: "Los_hongos",
    power: 208431756,
  },
  {
    server: 6023,
    family: "TheOlympus",
    power: 1677476546,
  },
  {
    server: 6023,
    family: "resistencia",
    power: 569583127,
  },
  {
    server: 6023,
    family: "Simbióticos",
    power: 369960769,
  },
  {
    server: 6023,
    family: "españoles",
    power: 297565266,
  },
  {
    server: 6023,
    family: "chiscuchampi",
    power: 286869747,
  },
  {
    server: 6023,
    family: "GalaxyX",
    power: 282170948,
  },
  {
    server: 6023,
    family: "Alucinógenos",
    power: 251052955,
  },
  {
    server: 6023,
    family: "Champiñones",
    power: 191205875,
  },
  {
    server: 6023,
    family: "🥳PapuParty🥳",
    power: 188489161,
  },
  {
    server: 6023,
    family: "devastación",
    power: 185970561,
  },
  {
    server: 6024,
    family: "SecretSociety",
    power: 1356089974,
  },
  {
    server: 6024,
    family: "TU_KARMA",
    power: 1006095648,
  },
  {
    server: 6024,
    family: "HoraDeAventura",
    power: 743458241,
  },
  {
    server: 6024,
    family: "España",
    power: 334357035,
  },
  {
    server: 6024,
    family: "LuckyFesst",
    power: 288099298,
  },
  {
    server: 6024,
    family: "CJNG",
    power: 247998853,
  },
  {
    server: 6024,
    family: "InsanoGuerrero",
    power: 172396922,
  },
  {
    server: 6024,
    family: "ANIQUILADORES",
    power: 168025377,
  },
  {
    server: 6024,
    family: "PAIN",
    power: 142879057,
  },
  {
    server: 6024,
    family: "latinos_unidos",
    power: 112654110,
  },
  {
    server: 6025,
    family: "HC",
    power: 1589895217,
  },
  {
    server: 6025,
    family: "HC2",
    power: 577174420,
  },
  {
    server: 6025,
    family: "HonguitoMagico",
    power: 380087339,
  },
  {
    server: 6025,
    family: "AlmaMula",
    power: 299071004,
  },
  {
    server: 6025,
    family: "Olimpo",
    power: 297871718,
  },
  {
    server: 6025,
    family: "Terox",
    power: 235206359,
  },
  {
    server: 6025,
    family: "KTA4ALL",
    power: 229394455,
  },
  {
    server: 6025,
    family: "Esporas_Lambda",
    power: 202867110,
  },
  {
    server: 6025,
    family: "GALIZA",
    power: 168228912,
  },
  {
    server: 6025,
    family: "papas",
    power: 161990198,
  },
  {
    server: 6026,
    family: "AssasinsS",
    power: 1330593590,
  },
  {
    server: 6026,
    family: "ImperioEspañol",
    power: 638134272,
  },
  {
    server: 6026,
    family: "PUYEYE",
    power: 347168888,
  },
  {
    server: 6026,
    family: "Latinos",
    power: 309243785,
  },
  {
    server: 6026,
    family: "MiClan",
    power: 238073023,
  },
  {
    server: 6026,
    family: "LIGA_CHAMPIÑON",
    power: 219302496,
  },
  {
    server: 6026,
    family: "LonguitoMagico",
    power: 204030542,
  },
  {
    server: 6026,
    family: "facheritos",
    power: 188712697,
  },
  {
    server: 6026,
    family: "ESPAÑA",
    power: 188031871,
  },
  {
    server: 6026,
    family: "Hentai",
    power: 149824595,
  },
  {
    server: 6027,
    family: "latinos",
    power: 1510706766,
  },
  {
    server: 6027,
    family: "REALEZA",
    power: 989554364,
  },
  {
    server: 6027,
    family: "Akatsuki",
    power: 387668125,
  },
  {
    server: 6027,
    family: "HalfLife",
    power: 368780083,
  },
  {
    server: 6027,
    family: "Champiteam",
    power: 295870673,
  },
  {
    server: 6027,
    family: "Nazarick",
    power: 269882770,
  },
  {
    server: 6027,
    family: "Champiclan",
    power: 248924094,
  },
  {
    server: 6027,
    family: "Mercenarios",
    power: 126946401,
  },
  {
    server: 6027,
    family: "saquemen_latam",
    power: 109530163,
  },
  {
    server: 6027,
    family: "Insanos",
    power: 105973742,
  },
  {
    server: 6028,
    family: "ReNeGa2",
    power: 1720765652,
  },
  {
    server: 6028,
    family: "Akatsuki",
    power: 590159202,
  },
  {
    server: 6028,
    family: "ANDALUCIA",
    power: 399603843,
  },
  {
    server: 6028,
    family: "EspañaxLatam",
    power: 393629169,
  },
  {
    server: 6028,
    family: "LATAM",
    power: 299093420,
  },
  {
    server: 6028,
    family: "TeamArg",
    power: 256596599,
  },
  {
    server: 6028,
    family: "§ØMßRA§",
    power: 254264172,
  },
  {
    server: 6028,
    family: "ESPARTINOS",
    power: 252202427,
  },
  {
    server: 6028,
    family: "BERSERK",
    power: 216341062,
  },
  {
    server: 6028,
    family: "TopsMundiales",
    power: 212326014,
  },
  {
    server: 6029,
    family: "TOTI",
    power: 1674314800,
  },
  {
    server: 6029,
    family: "PSICODÉLICOS",
    power: 715744853,
  },
  {
    server: 6029,
    family: "DEMOLITION",
    power: 356017876,
  },
  {
    server: 6029,
    family: "Españita",
    power: 255098930,
  },
  {
    server: 6029,
    family: "ViViDoReS",
    power: 226866213,
  },
  {
    server: 6029,
    family: "Feliz",
    power: 226561582,
  },
  {
    server: 6029,
    family: "TopSpain",
    power: 196911265,
  },
  {
    server: 6029,
    family: "LaMafilia",
    power: 196366525,
  },
  {
    server: 6029,
    family: "Masturboys",
    power: 174108673,
  },
  {
    server: 6029,
    family: "“INMORTAL”",
    power: 157700014,
  },
  {
    server: 6030,
    family: "Resurrection",
    power: 1403032535,
  },
  {
    server: 6030,
    family: "NoobLegends",
    power: 1305420286,
  },
  {
    server: 6030,
    family: "El_ChampiClan",
    power: 385536197,
  },
  {
    server: 6030,
    family: "Imperial",
    power: 234592070,
  },
  {
    server: 6030,
    family: "fujin",
    power: 231860437,
  },
  {
    server: 6030,
    family: "nerverland",
    power: 223601799,
  },
  {
    server: 6030,
    family: "Ragnarok",
    power: 192364253,
  },
  {
    server: 6030,
    family: "UniónChampiñon",
    power: 174932536,
  },
  {
    server: 6030,
    family: "MushroomCorp2",
    power: 169751860,
  },
  {
    server: 6030,
    family: "Guishekillers",
    power: 167468534,
  },
  {
    server: 6031,
    family: "HummusSapiens",
    power: 1343024924,
  },
  {
    server: 6031,
    family: "LCSP",
    power: 974500375,
  },
  {
    server: 6031,
    family: "FateFansClub",
    power: 410829388,
  },
  {
    server: 6031,
    family: "Humility",
    power: 355857984,
  },
  {
    server: 6031,
    family: "ALPHAS",
    power: 293034417,
  },
  {
    server: 6031,
    family: "Escuad_Lobo",
    power: 232893929,
  },
  {
    server: 6031,
    family: "TOP",
    power: 220713148,
  },
  {
    server: 6031,
    family: "Sinners",
    power: 211485535,
  },
  {
    server: 6031,
    family: "MEXAMAFIA",
    power: 206188480,
  },
  {
    server: 6031,
    family: "HISPANIA",
    power: 192081484,
  },
  {
    server: 6032,
    family: "SPARTANS",
    power: 1146489847,
  },
  {
    server: 6032,
    family: "TopChamps",
    power: 1019881216,
  },
  {
    server: 6032,
    family: "Radicalz",
    power: 381545533,
  },
  {
    server: 6032,
    family: "Demons",
    power: 307971453,
  },
  {
    server: 6032,
    family: "PATRONES",
    power: 280917023,
  },
  {
    server: 6032,
    family: "peakyblinders",
    power: 280743818,
  },
  {
    server: 6032,
    family: "Monster",
    power: 279579553,
  },
  {
    server: 6032,
    family: "Latinos",
    power: 226744727,
  },
  {
    server: 6032,
    family: "SUPERHONGUITOS",
    power: 224703868,
  },
  {
    server: 6032,
    family: "GenteMX",
    power: 174254354,
  },
  {
    server: 6033,
    family: "OrdenYCaos",
    power: 1436318267,
  },
  {
    server: 6033,
    family: " ͡° ͜ʖ ͡° ",
    power: 890353192,
  },
  {
    server: 6033,
    family: "FairyTail",
    power: 341530483,
  },
  {
    server: 6033,
    family: "BlackDragon",
    power: 338101537,
  },
  {
    server: 6033,
    family: "GhostShadow",
    power: 313596715,
  },
  {
    server: 6033,
    family: "THE_IMPERIO_MX",
    power: 300251957,
  },
  {
    server: 6033,
    family: "Guerreros",
    power: 280153162,
  },
  {
    server: 6033,
    family: "México",
    power: 265734003,
  },
  {
    server: 6033,
    family: "King",
    power: 261650434,
  },
  {
    server: 6033,
    family: "RichVagos",
    power: 242414595,
  },
  {
    server: 6034,
    family: "Tetoners",
    power: 1339418162,
  },
  {
    server: 6034,
    family: "EspañolUnido",
    power: 1234878722,
  },
  {
    server: 6034,
    family: "F2P",
    power: 774417518,
  },
  {
    server: 6034,
    family: "GuerrerosZ",
    power: 599233919,
  },
  {
    server: 6034,
    family: "MëxäMäfîä",
    power: 276708742,
  },
  {
    server: 6034,
    family: "WHIT444",
    power: 238045113,
  },
  {
    server: 6034,
    family: "kingdom",
    power: 202802404,
  },
  {
    server: 6034,
    family: "DevilMayCry",
    power: 190166329,
  },
  {
    server: 6034,
    family: "CusCusClan",
    power: 179641881,
  },
  {
    server: 6034,
    family: "españoles",
    power: 178892086,
  },
  {
    server: 6035,
    family: "SetasYPetas",
    power: 1336272242,
  },
  {
    server: 6035,
    family: "DRAGONBALL",
    power: 1284905630,
  },
  {
    server: 6035,
    family: "REVOLUCIÓN",
    power: 503270133,
  },
  {
    server: 6035,
    family: "Pilares",
    power: 335375246,
  },
  {
    server: 6035,
    family: "España",
    power: 334203944,
  },
  {
    server: 6035,
    family: "LATAM",
    power: 266695675,
  },
  {
    server: 6035,
    family: "2B2T",
    power: 203775905,
  },
  {
    server: 6035,
    family: "mexico",
    power: 167864880,
  },
  {
    server: 6035,
    family: "Giardians",
    power: 134884910,
  },
  {
    server: 6035,
    family: "latinoamerica",
    power: 126631694,
  },
  {
    server: 6036,
    family: "INFERNAL",
    power: 1591603854,
  },
  {
    server: 6036,
    family: "Bullying",
    power: 444999578,
  },
  {
    server: 6036,
    family: "GAGAAA",
    power: 415126741,
  },
  {
    server: 6036,
    family: "Akatsuki",
    power: 331086187,
  },
  {
    server: 6036,
    family: "SabDerzx",
    power: 315430951,
  },
  {
    server: 6036,
    family: "HISPANIA",
    power: 304007302,
  },
  {
    server: 6036,
    family: "LostVayne",
    power: 263917734,
  },
  {
    server: 6036,
    family: "DesganadosFC",
    power: 214862109,
  },
  {
    server: 6036,
    family: "ELITE",
    power: 198019063,
  },
  {
    server: 6036,
    family: "_Cowboys_",
    power: 146198194,
  },
  {
    server: 6037,
    family: "ELITE",
    power: 1468125398,
  },
  {
    server: 6037,
    family: "Familia",
    power: 858127886,
  },
  {
    server: 6037,
    family: "Legendarios",
    power: 415094822,
  },
  {
    server: 6037,
    family: "Cordyceps",
    power: 387852110,
  },
  {
    server: 6037,
    family: "Reyes",
    power: 321832158,
  },
  {
    server: 6037,
    family: "Codigo8",
    power: 223918216,
  },
  {
    server: 6037,
    family: "minihongos",
    power: 221475448,
  },
  {
    server: 6037,
    family: "ANTEIKU",
    power: 215355579,
  },
  {
    server: 6037,
    family: "Ragnarôk",
    power: 202598362,
  },
  {
    server: 6037,
    family: "SKY",
    power: 182226574,
  },
  {
    server: 6038,
    family: "ALPHAS",
    power: 1616570373,
  },
  {
    server: 6038,
    family: "Legion",
    power: 1076835854,
  },
  {
    server: 6038,
    family: "GRK",
    power: 493830287,
  },
  {
    server: 6038,
    family: "Champigods",
    power: 444105611,
  },
  {
    server: 6038,
    family: "ARGENTINA",
    power: 383055869,
  },
  {
    server: 6038,
    family: "©EthernalsBlod",
    power: 254978156,
  },
  {
    server: 6038,
    family: "wolves",
    power: 220603322,
  },
  {
    server: 6038,
    family: "PHOENIXESPAÑOL",
    power: 216985838,
  },
  {
    server: 6038,
    family: "CHIMUELOS",
    power: 195398277,
  },
  {
    server: 6038,
    family: "MVP",
    power: 181114543,
  },
  {
    server: 6039,
    family: "MAFIA",
    power: 1456014798,
  },
  {
    server: 6039,
    family: "BigSeta",
    power: 942638371,
  },
  {
    server: 6039,
    family: "WhiteKnights",
    power: 782282486,
  },
  {
    server: 6039,
    family: "Destructores",
    power: 425292638,
  },
  {
    server: 6039,
    family: "MundoLatino",
    power: 355398633,
  },
  {
    server: 6039,
    family: "SEGADORES",
    power: 331703850,
  },
  {
    server: 6039,
    family: "ESPARTA",
    power: 311781591,
  },
  {
    server: 6039,
    family: "Onic",
    power: 208586279,
  },
  {
    server: 6039,
    family: "MushroomWorld",
    power: 182516982,
  },
  {
    server: 6039,
    family: "ATLANTIS",
    power: 170088201,
  },
  {
    server: 6040,
    family: "༺𝐺𝑜𝒅𝒔༻",
    power: 1307482429,
  },
  {
    server: 6040,
    family: "KingHunters",
    power: 1299698702,
  },
  {
    server: 6040,
    family: "mewing",
    power: 350803509,
  },
  {
    server: 6040,
    family: "OLYMPUS",
    power: 285619087,
  },
  {
    server: 6040,
    family: "WildRift",
    power: 268004762,
  },
  {
    server: 6040,
    family: "Paticano",
    power: 252643501,
  },
  {
    server: 6040,
    family: "FairyTail",
    power: 233455976,
  },
  {
    server: 6040,
    family: "Mushroom_Latam",
    power: 232495922,
  },
  {
    server: 6040,
    family: "SoloLeveling",
    power: 171424573,
  },
  {
    server: 6040,
    family: "champilandia",
    power: 125628556,
  },
  {
    server: 6041,
    family: "Asgard",
    power: 1633414673,
  },
  {
    server: 6041,
    family: "Latinos",
    power: 673648733,
  },
  {
    server: 6041,
    family: "Astrales",
    power: 444917157,
  },
  {
    server: 6041,
    family: "PUYEYE",
    power: 321039987,
  },
  {
    server: 6041,
    family: "LunaEterna",
    power: 290387319,
  },
  {
    server: 6041,
    family: "Harkonnen",
    power: 279610223,
  },
  {
    server: 6041,
    family: "MUGIWARAS",
    power: 206805488,
  },
  {
    server: 6041,
    family: "Mexicas",
    power: 198039861,
  },
  {
    server: 6041,
    family: "Iluminatis",
    power: 190003140,
  },
  {
    server: 6041,
    family: "chupete",
    power: 188458064,
  },
  {
    server: 6042,
    family: "FAIRYTOPIA",
    power: 1577919549,
  },
  {
    server: 6042,
    family: "FairyAcademy",
    power: 1248201189,
  },
  {
    server: 6042,
    family: "BlueDemons_2",
    power: 646907716,
  },
  {
    server: 6042,
    family: "INMORTALES",
    power: 454070733,
  },
  {
    server: 6042,
    family: "Faxtikusu",
    power: 332622720,
  },
  {
    server: 6042,
    family: "bbhouse",
    power: 325267358,
  },
  {
    server: 6042,
    family: "España",
    power: 263134495,
  },
  {
    server: 6042,
    family: "KillersReturns",
    power: 252691960,
  },
  {
    server: 6042,
    family: "deymod",
    power: 224312835,
  },
  {
    server: 6042,
    family: "Warriors",
    power: 218315054,
  },
  {
    server: 6043,
    family: "Atharaxia",
    power: 1624722179,
  },
  {
    server: 6043,
    family: "ensetados",
    power: 945836685,
  },
  {
    server: 6043,
    family: "COLOMBIANITOS",
    power: 778157812,
  },
  {
    server: 6043,
    family: "argentos",
    power: 371552334,
  },
  {
    server: 6043,
    family: "DarkReborn",
    power: 263069876,
  },
  {
    server: 6043,
    family: "OLYMPUS",
    power: 248176301,
  },
  {
    server: 6043,
    family: "€£¥",
    power: 216274542,
  },
  {
    server: 6043,
    family: "España",
    power: 213915207,
  },
  {
    server: 6043,
    family: "OnePiece",
    power: 202982751,
  },
  {
    server: 6043,
    family: "🧐MACHIWI🧐",
    power: 198305424,
  },
  {
    server: 6044,
    family: "EminencE",
    power: 1634533343,
  },
  {
    server: 6044,
    family: "GameOver",
    power: 769107965,
  },
  {
    server: 6044,
    family: "White",
    power: 472538649,
  },
  {
    server: 6044,
    family: "PARANOIA",
    power: 380943933,
  },
  {
    server: 6044,
    family: "IMPERIAL",
    power: 283671138,
  },
  {
    server: 6044,
    family: "Legions",
    power: 277532578,
  },
  {
    server: 6044,
    family: "WARRIORS",
    power: 276359958,
  },
  {
    server: 6044,
    family: "MEXICO",
    power: 237493488,
  },
  {
    server: 6044,
    family: "Lospapus",
    power: 223148093,
  },
  {
    server: 6044,
    family: "BLACKDOG",
    power: 193050109,
  },
  {
    server: 6045,
    family: "DeadArmy",
    power: 1548830252,
  },
  {
    server: 6045,
    family: "HispanosUnidos",
    power: 1497471633,
  },
  {
    server: 6045,
    family: "Apocalipsis",
    power: 580396581,
  },
  {
    server: 6045,
    family: "EspañaUnida",
    power: 343131973,
  },
  {
    server: 6045,
    family: "LaMafia",
    power: 336341812,
  },
  {
    server: 6045,
    family: "Ensetaos",
    power: 259162755,
  },
  {
    server: 6045,
    family: "HEAVENLY",
    power: 256813554,
  },
  {
    server: 6045,
    family: "Xcalibur",
    power: 230409768,
  },
  {
    server: 6045,
    family: "SLK",
    power: 229770367,
  },
  {
    server: 6045,
    family: "OnePiece",
    power: 183068043,
  },
  {
    server: 6046,
    family: "ZLEGION",
    power: 1535224746,
  },
  {
    server: 6046,
    family: "SetasIbéricas",
    power: 819537254,
  },
  {
    server: 6046,
    family: "LATINOS_TEAM",
    power: 606108925,
  },
  {
    server: 6046,
    family: "Ecstasy",
    power: 396660988,
  },
  {
    server: 6046,
    family: "Champi",
    power: 312586839,
  },
  {
    server: 6046,
    family: "DarkeBuild",
    power: 286590078,
  },
  {
    server: 6046,
    family: "AtaudRisueño",
    power: 255971209,
  },
  {
    server: 6046,
    family: "DEATNOTE",
    power: 250630022,
  },
  {
    server: 6046,
    family: "Sanyes",
    power: 238516163,
  },
  {
    server: 6046,
    family: "DRACARYS",
    power: 173969472,
  },
  {
    server: 6047,
    family: "Legions",
    power: 1464574358,
  },
  {
    server: 6047,
    family: "SetasAsesinas",
    power: 1150149055,
  },
  {
    server: 6047,
    family: "CallampinesCL",
    power: 553648821,
  },
  {
    server: 6047,
    family: "Los_Vrgs",
    power: 458458760,
  },
  {
    server: 6047,
    family: "LegendZ",
    power: 372882747,
  },
  {
    server: 6047,
    family: "TheLegends",
    power: 371458522,
  },
  {
    server: 6047,
    family: "GodsOfValhalla",
    power: 344020305,
  },
  {
    server: 6047,
    family: "Hellbourne",
    power: 275263619,
  },
  {
    server: 6047,
    family: "FLYstars",
    power: 213268498,
  },
  {
    server: 6047,
    family: "PuroPelon",
    power: 209340994,
  },
  {
    server: 6048,
    family: "I𐌽𐍆I𐌽I𐍄𐍅",
    power: 1643362884,
  },
  {
    server: 6048,
    family: "LORDS_CHAMPI",
    power: 1134613338,
  },
  {
    server: 6048,
    family: "Duxinz",
    power: 618005735,
  },
  {
    server: 6048,
    family: "papus7",
    power: 307709756,
  },
  {
    server: 6048,
    family: "latinoamerica",
    power: 307688119,
  },
  {
    server: 6048,
    family: "COBRA_KAI",
    power: 304097785,
  },
  {
    server: 6048,
    family: "Fluxo",
    power: 292420936,
  },
  {
    server: 6048,
    family: "KINGS",
    power: 256285385,
  },
  {
    server: 6048,
    family: "Akatsuki",
    power: 228321286,
  },
  {
    server: 6048,
    family: "Realeza",
    power: 223706040,
  },
  {
    server: 6049,
    family: "ᴹᴳᵂMugiwaras",
    power: 1588055378,
  },
  {
    server: 6049,
    family: "Shadow",
    power: 657052117,
  },
  {
    server: 6049,
    family: "España",
    power: 470413792,
  },
  {
    server: 6049,
    family: "ARGENTINA",
    power: 378294874,
  },
  {
    server: 6049,
    family: "La_PESADILLA",
    power: 332479800,
  },
  {
    server: 6049,
    family: "IceCream",
    power: 328571318,
  },
  {
    server: 6049,
    family: "argentina",
    power: 310423292,
  },
  {
    server: 6049,
    family: "TuristaMundial",
    power: 283556793,
  },
  {
    server: 6049,
    family: "ARGENTO",
    power: 248666170,
  },
  {
    server: 6049,
    family: "mugiwara",
    power: 198849327,
  },
  {
    server: 6050,
    family: "乂𝕂𝕚𝕟𝕘𝕤乂",
    power: 1498724034,
  },
  {
    server: 6050,
    family: "ᵖᵏ²¦ԍoᴅs¦ᴇvιʟs",
    power: 1047233426,
  },
  {
    server: 6050,
    family: "͜͡яαgиαяσк乂",
    power: 476039039,
  },
  {
    server: 6050,
    family: "CELESTIALES",
    power: 414444130,
  },
  {
    server: 6050,
    family: "xOnlyFansヅ",
    power: 364048183,
  },
  {
    server: 6050,
    family: "Robellons",
    power: 237396345,
  },
  {
    server: 6050,
    family: "dfenix",
    power: 227467552,
  },
  {
    server: 6050,
    family: "Mexlatino",
    power: 192833222,
  },
  {
    server: 6050,
    family: "MESSI",
    power: 190521110,
  },
  {
    server: 6050,
    family: "ArgenTop",
    power: 178359658,
  },
  {
    server: 6051,
    family: "𓆏HueBs𓆏",
    power: 1549220993,
  },
  {
    server: 6051,
    family: "Potterheads",
    power: 1050382727,
  },
  {
    server: 6051,
    family: "LasCepas",
    power: 321574133,
  },
  {
    server: 6051,
    family: "ESPAÑOLES",
    power: 313560176,
  },
  {
    server: 6051,
    family: "LATINOS",
    power: 297979216,
  },
  {
    server: 6051,
    family: "LatinGods",
    power: 276319445,
  },
  {
    server: 6051,
    family: "Clan",
    power: 261667650,
  },
  {
    server: 6051,
    family: "Chilenos",
    power: 251198364,
  },
  {
    server: 6051,
    family: "PerroCallejero",
    power: 187860457,
  },
  {
    server: 6051,
    family: "Hyperion",
    power: 170637748,
  },
  {
    server: 6052,
    family: "WeAreTheChamps",
    power: 1270957599,
  },
  {
    server: 6052,
    family: "HoneyRoyal©",
    power: 1178501594,
  },
  {
    server: 6052,
    family: "VIKINGOS",
    power: 333457412,
  },
  {
    server: 6052,
    family: "Resistencia",
    power: 274396112,
  },
  {
    server: 6052,
    family: "PSICODÉLICS",
    power: 232560435,
  },
  {
    server: 6052,
    family: "Exiliados",
    power: 230224255,
  },
  {
    server: 6052,
    family: "Orden_y_Chaos",
    power: 222433590,
  },
  {
    server: 6052,
    family: "deaht",
    power: 217105656,
  },
  {
    server: 6052,
    family: "AMANITAOCREATA",
    power: 213533713,
  },
  {
    server: 6052,
    family: "OverLords",
    power: 204760051,
  },
  {
    server: 6053,
    family: "Virus",
    power: 1611398110,
  },
  {
    server: 6053,
    family: "LATINOS",
    power: 726434519,
  },
  {
    server: 6053,
    family: "Españoles",
    power: 611989839,
  },
  {
    server: 6053,
    family: "SPRV",
    power: 483111800,
  },
  {
    server: 6053,
    family: "MexicanPower",
    power: 251034316,
  },
  {
    server: 6053,
    family: "JDragonS",
    power: 233087149,
  },
  {
    server: 6053,
    family: "GLADIADORES",
    power: 210451418,
  },
  {
    server: 6053,
    family: "Destiny",
    power: 188625356,
  },
  {
    server: 6053,
    family: "Acribilladores",
    power: 188060504,
  },
  {
    server: 6053,
    family: "VirusX",
    power: 183686415,
  },
  {
    server: 6054,
    family: "DEMONSQUAD",
    power: 1553644220,
  },
  {
    server: 6054,
    family: "SAS",
    power: 728760231,
  },
  {
    server: 6054,
    family: "ATÓMICO",
    power: 501724000,
  },
  {
    server: 6054,
    family: "Zone_Imperior",
    power: 501574372,
  },
  {
    server: 6054,
    family: "EspañaGods",
    power: 383709088,
  },
  {
    server: 6054,
    family: "ClanLatino",
    power: 351630116,
  },
  {
    server: 6054,
    family: "MexicoGod",
    power: 307233605,
  },
  {
    server: 6054,
    family: "TopGods",
    power: 301172022,
  },
  {
    server: 6054,
    family: "Latinos",
    power: 218228569,
  },
  {
    server: 6054,
    family: "Jcompany",
    power: 183070175,
  },
  {
    server: 6055,
    family: "SpainTop",
    power: 1498308974,
  },
  {
    server: 6055,
    family: "EMPERADORES",
    power: 1218594026,
  },
  {
    server: 6055,
    family: "Chile",
    power: 674407571,
  },
  {
    server: 6055,
    family: "demosn",
    power: 342712376,
  },
  {
    server: 6055,
    family: "HongoLoco",
    power: 328739589,
  },
  {
    server: 6055,
    family: "CobraKai",
    power: 313248349,
  },
  {
    server: 6055,
    family: "ArgenPro",
    power: 266850197,
  },
  {
    server: 6055,
    family: "ResetSports",
    power: 207317033,
  },
  {
    server: 6055,
    family: "Colombianos",
    power: 194509973,
  },
  {
    server: 6055,
    family: "Latam",
    power: 171477069,
  },
  {
    server: 6056,
    family: "Sleepless",
    power: 1453092744,
  },
  {
    server: 6056,
    family: "LosMancos",
    power: 951793672,
  },
  {
    server: 6056,
    family: "PuroPow",
    power: 856369929,
  },
  {
    server: 6056,
    family: "Champiñones",
    power: 427435213,
  },
  {
    server: 6056,
    family: "España",
    power: 329421950,
  },
  {
    server: 6056,
    family: "obbatala",
    power: 300691044,
  },
  {
    server: 6056,
    family: "carrascuas",
    power: 283099686,
  },
  {
    server: 6056,
    family: "L4TINOSx",
    power: 273566610,
  },
  {
    server: 6056,
    family: "Spaxium",
    power: 256367932,
  },
  {
    server: 6056,
    family: "Leyenda",
    power: 237699677,
  },
  {
    server: 6057,
    family: "𝘖𝘓𝘐𝘔𝘗𝘖",
    power: 1499562183,
  },
  {
    server: 6057,
    family: "WARNING",
    power: 1084572710,
  },
  {
    server: 6057,
    family: "Asgard",
    power: 392251540,
  },
  {
    server: 6057,
    family: "ESPAÑA",
    power: 349346947,
  },
  {
    server: 6057,
    family: "LATAM_GOD",
    power: 336062270,
  },
  {
    server: 6057,
    family: "TopColombia",
    power: 326798950,
  },
  {
    server: 6057,
    family: "StrayDogs",
    power: 226008172,
  },
  {
    server: 6057,
    family: "Naruto",
    power: 225520271,
  },
  {
    server: 6057,
    family: "TheMasters",
    power: 223181432,
  },
  {
    server: 6057,
    family: "ASGARD",
    power: 217764583,
  },
  {
    server: 6058,
    family: "Kings",
    power: 1514830167,
  },
  {
    server: 6058,
    family: "APOCALIPSIS",
    power: 1436882337,
  },
  {
    server: 6058,
    family: "Vórtice",
    power: 351629394,
  },
  {
    server: 6058,
    family: "shadowGarden",
    power: 329697988,
  },
  {
    server: 6058,
    family: "Valhalla",
    power: 281124461,
  },
  {
    server: 6058,
    family: "HERETICS",
    power: 270931552,
  },
  {
    server: 6058,
    family: "MexaMafia",
    power: 269715760,
  },
  {
    server: 6058,
    family: "komix",
    power: 229826514,
  },
  {
    server: 6058,
    family: "Hispania",
    power: 217831706,
  },
  {
    server: 6058,
    family: "MuSH_DMoNS",
    power: 214373645,
  },
  {
    server: 6059,
    family: "HUNTERxHUNTER",
    power: 1436854572,
  },
  {
    server: 6059,
    family: "INFAMES",
    power: 1253155034,
  },
  {
    server: 6059,
    family: "Champiñoles",
    power: 440793379,
  },
  {
    server: 6059,
    family: "Division_Cero",
    power: 401142181,
  },
  {
    server: 6059,
    family: "OverLords",
    power: 393788083,
  },
  {
    server: 6059,
    family: "ArgPitudos",
    power: 339875136,
  },
  {
    server: 6059,
    family: "The_Creators",
    power: 338723621,
  },
  {
    server: 6059,
    family: "DaddyChill",
    power: 314793814,
  },
  {
    server: 6059,
    family: "violatrol",
    power: 281436429,
  },
  {
    server: 6059,
    family: "pantuflas",
    power: 220743587,
  },
  {
    server: 6060,
    family: "Wewitos",
    power: 1494704340,
  },
  {
    server: 6060,
    family: "MANIAKS",
    power: 1025849160,
  },
  {
    server: 6060,
    family: "Lestatcrow",
    power: 370706098,
  },
  {
    server: 6060,
    family: "VIRUS",
    power: 363247440,
  },
  {
    server: 6060,
    family: "FairyTail",
    power: 346146364,
  },
  {
    server: 6060,
    family: "LATINOS",
    power: 338593747,
  },
  {
    server: 6060,
    family: "Ouroboros",
    power: 335497351,
  },
  {
    server: 6060,
    family: "JujutsuKaisen",
    power: 318493279,
  },
  {
    server: 6060,
    family: "CHAMPIÑONKING",
    power: 305537609,
  },
  {
    server: 6060,
    family: "Gorditos",
    power: 288689915,
  },
  {
    server: 6061,
    family: "HGT°",
    power: 1459681849,
  },
  {
    server: 6061,
    family: "Valhalla",
    power: 1285547251,
  },
  {
    server: 6061,
    family: "LegionLatina",
    power: 722035123,
  },
  {
    server: 6061,
    family: "ChampiLand",
    power: 556321936,
  },
  {
    server: 6061,
    family: "Ragnarok",
    power: 406256256,
  },
  {
    server: 6061,
    family: "degenenerados2",
    power: 310285904,
  },
  {
    server: 6061,
    family: "EscuadronALFA",
    power: 281453443,
  },
  {
    server: 6061,
    family: "ASIR",
    power: 238011267,
  },
  {
    server: 6061,
    family: "Solitarios",
    power: 187621968,
  },
  {
    server: 6061,
    family: "LaTinV93",
    power: 185804436,
  },
  {
    server: 6062,
    family: "𝐫ⱥოᴩ𝐚𝚐",
    power: 1426649477,
  },
  {
    server: 6062,
    family: "FÉNIX",
    power: 836179182,
  },
  {
    server: 6062,
    family: "Falkreath",
    power: 769227590,
  },
  {
    server: 6062,
    family: "SUDADORES",
    power: 448366212,
  },
  {
    server: 6062,
    family: "Warriors",
    power: 341356576,
  },
  {
    server: 6062,
    family: "SSJ",
    power: 297683552,
  },
  {
    server: 6062,
    family: "INMORTAL",
    power: 293343892,
  },
  {
    server: 6062,
    family: "INMORTALS",
    power: 271066717,
  },
  {
    server: 6062,
    family: "Kioto",
    power: 211789207,
  },
  {
    server: 6062,
    family: "Latinos",
    power: 189927913,
  },
  {
    server: 6063,
    family: "Prophets",
    power: 1396537817,
  },
  {
    server: 6063,
    family: "TorreArmy",
    power: 993707509,
  },
  {
    server: 6063,
    family: "latinos",
    power: 825543422,
  },
  {
    server: 6063,
    family: "LesCepas",
    power: 512115919,
  },
  {
    server: 6063,
    family: "kingShadow",
    power: 277246585,
  },
  {
    server: 6063,
    family: "FATE",
    power: 274576359,
  },
  {
    server: 6063,
    family: "IиรǺиØร【◣_◢】",
    power: 253022605,
  },
  {
    server: 6063,
    family: "GTL",
    power: 235875733,
  },
  {
    server: 6063,
    family: "MedioPollo",
    power: 213867723,
  },
  {
    server: 6063,
    family: "Latam",
    power: 208395807,
  },
  {
    server: 6064,
    family: "TopSecret",
    power: 1517012284,
  },
  {
    server: 6064,
    family: "DragonHeart",
    power: 888181242,
  },
  {
    server: 6064,
    family: "ChampiCrikos",
    power: 472818060,
  },
  {
    server: 6064,
    family: "OLYMPUS",
    power: 464176805,
  },
  {
    server: 6064,
    family: "BlackList",
    power: 333298933,
  },
  {
    server: 6064,
    family: "PaTTanes_Kaoz",
    power: 315355262,
  },
  {
    server: 6064,
    family: "BlackSport",
    power: 291414750,
  },
  {
    server: 6064,
    family: "White",
    power: 282391082,
  },
  {
    server: 6064,
    family: "BK2S",
    power: 261490150,
  },
  {
    server: 6064,
    family: "Lobofrio",
    power: 261018359,
  },
  {
    server: 6065,
    family: "Knight",
    power: 1442951814,
  },
  {
    server: 6065,
    family: "Nova",
    power: 787832888,
  },
  {
    server: 6065,
    family: "ElClan",
    power: 393968449,
  },
  {
    server: 6065,
    family: "RE4LG4LIFE",
    power: 345978219,
  },
  {
    server: 6065,
    family: "ShadowGhosts",
    power: 337281884,
  },
  {
    server: 6065,
    family: "LatinsFTW",
    power: 317117820,
  },
  {
    server: 6065,
    family: "ApexKings",
    power: 288371490,
  },
  {
    server: 6065,
    family: "ArgAtr",
    power: 257447117,
  },
  {
    server: 6065,
    family: "TopSecret",
    power: 242717737,
  },
  {
    server: 6065,
    family: "ZtrelladoZ",
    power: 223107710,
  },
  {
    server: 6066,
    family: "Active",
    power: 1536605567,
  },
  {
    server: 6066,
    family: "Amoongus",
    power: 828342987,
  },
  {
    server: 6066,
    family: "LEGIONARIOS",
    power: 562273594,
  },
  {
    server: 6066,
    family: "Legends",
    power: 467516953,
  },
  {
    server: 6066,
    family: "Latinoamérica",
    power: 376149543,
  },
  {
    server: 6066,
    family: "INMorTALes",
    power: 334926168,
  },
  {
    server: 6066,
    family: "Supremacy",
    power: 286038791,
  },
  {
    server: 6066,
    family: "España",
    power: 233970000,
  },
  {
    server: 6066,
    family: "LASECTA",
    power: 211572209,
  },
  {
    server: 6066,
    family: "TheDemonKings",
    power: 191485281,
  },
  {
    server: 6067,
    family: "Legends",
    power: 1536290515,
  },
  {
    server: 6067,
    family: "LATIN_WARRIORS",
    power: 881901801,
  },
  {
    server: 6067,
    family: "GOT",
    power: 821381917,
  },
  {
    server: 6067,
    family: "RAIDER_LATAM",
    power: 793866784,
  },
  {
    server: 6067,
    family: "Mexico",
    power: 334821546,
  },
  {
    server: 6067,
    family: "Chilean",
    power: 313758677,
  },
  {
    server: 6067,
    family: "DARKPOWER",
    power: 257173005,
  },
  {
    server: 6067,
    family: "vieve",
    power: 227393481,
  },
  {
    server: 6067,
    family: "LOS_DIOSES",
    power: 216468612,
  },
  {
    server: 6067,
    family: "colombianos",
    power: 202122051,
  },
  {
    server: 6068,
    family: "CROWN_HEROES",
    power: 1447075662,
  },
  {
    server: 6068,
    family: "Olympus",
    power: 933371935,
  },
  {
    server: 6068,
    family: "Nakamas",
    power: 644211292,
  },
  {
    server: 6068,
    family: "LEGENDARIOS",
    power: 525516119,
  },
  {
    server: 6068,
    family: "Skywalker",
    power: 380699700,
  },
  {
    server: 6068,
    family: "LEALTAD",
    power: 347641388,
  },
  {
    server: 6068,
    family: "Piratesbear",
    power: 301289400,
  },
  {
    server: 6068,
    family: "Leyendas",
    power: 262129900,
  },
  {
    server: 6068,
    family: "PAIN",
    power: 227022021,
  },
  {
    server: 6068,
    family: "ColoColoChile",
    power: 223015869,
  },
  {
    server: 6069,
    family: "Ases",
    power: 1573456225,
  },
  {
    server: 6069,
    family: "あ・Yakuzas",
    power: 1002541451,
  },
  {
    server: 6069,
    family: "Gallinero",
    power: 1001278414,
  },
  {
    server: 6069,
    family: "ARGyPerU",
    power: 386808737,
  },
  {
    server: 6069,
    family: "SoloActivos",
    power: 351175804,
  },
  {
    server: 6069,
    family: "TetasdeFlakked",
    power: 333072036,
  },
  {
    server: 6069,
    family: "Exiliados",
    power: 296776473,
  },
  {
    server: 6069,
    family: "babyboo",
    power: 278301270,
  },
  {
    server: 6069,
    family: "Ethereals",
    power: 247907166,
  },
  {
    server: 6069,
    family: "PUTEROS",
    power: 236905368,
  },
  {
    server: 6070,
    family: "ZETAS",
    power: 1332549154,
  },
  {
    server: 6070,
    family: "LaFamilia",
    power: 1007714733,
  },
  {
    server: 6070,
    family: "ASGARD",
    power: 407898097,
  },
  {
    server: 6070,
    family: "Latinos",
    power: 379303302,
  },
  {
    server: 6070,
    family: "Mercenarios",
    power: 348804138,
  },
  {
    server: 6070,
    family: "ElMejorClan",
    power: 312435929,
  },
  {
    server: 6070,
    family: "LosDinoPanas",
    power: 267728801,
  },
  {
    server: 6070,
    family: "HUNTER",
    power: 253906247,
  },
  {
    server: 6070,
    family: "FemPower",
    power: 251276380,
  },
  {
    server: 6070,
    family: "Latam",
    power: 228970856,
  },
  {
    server: 6071,
    family: "XxHUNTERxX",
    power: 1279722455,
  },
  {
    server: 6071,
    family: "Los7Pecados",
    power: 512224716,
  },
  {
    server: 6071,
    family: "ＲΛＧＮΛＲＯＫ",
    power: 390762807,
  },
  {
    server: 6071,
    family: "Mugiwaras",
    power: 356021227,
  },
  {
    server: 6071,
    family: "EliteSpain",
    power: 316295651,
  },
  {
    server: 6071,
    family: "Adept",
    power: 304238083,
  },
  {
    server: 6071,
    family: "LOS_MICHIS",
    power: 303938966,
  },
  {
    server: 6071,
    family: "Akatsuki",
    power: 267349486,
  },
  {
    server: 6071,
    family: "OnePunchClan",
    power: 258284239,
  },
  {
    server: 6071,
    family: "ᴅʟᴄⵌ¹ᴅᴇᴀᴛ※",
    power: 237851797,
  },
  {
    server: 6072,
    family: "OnePiece",
    power: 1145777442,
  },
  {
    server: 6072,
    family: "BASGIATH",
    power: 1058667618,
  },
  {
    server: 6072,
    family: "EscuadrónOmega",
    power: 392342280,
  },
  {
    server: 6072,
    family: "LEYENDS",
    power: 392142884,
  },
  {
    server: 6072,
    family: "legionespañola",
    power: 335128447,
  },
  {
    server: 6072,
    family: "Family_Zeta",
    power: 331727576,
  },
  {
    server: 6072,
    family: "Blood",
    power: 323312879,
  },
  {
    server: 6072,
    family: "SetaDeEscapar",
    power: 270937474,
  },
  {
    server: 6072,
    family: "ShadowOfHell",
    power: 229314901,
  },
  {
    server: 6072,
    family: "GenteLatino",
    power: 211956783,
  },
  {
    server: 6073,
    family: "INFERNALES",
    power: 1238896012,
  },
  {
    server: 6073,
    family: "CDG",
    power: 1122076307,
  },
  {
    server: 6073,
    family: "Renacidos",
    power: 626919755,
  },
  {
    server: 6073,
    family: "Paladines",
    power: 365714551,
  },
  {
    server: 6073,
    family: "ARG_OLIMPO",
    power: 325175381,
  },
  {
    server: 6073,
    family: "CosaNostra",
    power: 284852983,
  },
  {
    server: 6073,
    family: "DragonSlayer",
    power: 283426592,
  },
  {
    server: 6073,
    family: "creta",
    power: 263608459,
  },
  {
    server: 6073,
    family: "Latinos",
    power: 263419220,
  },
  {
    server: 6073,
    family: "ComunistasNo",
    power: 228928676,
  },
  {
    server: 6074,
    family: "armagedon",
    power: 1264543662,
  },
  {
    server: 6074,
    family: "VIPes74",
    power: 1013654922,
  },
  {
    server: 6074,
    family: "Los7Pecados",
    power: 546372965,
  },
  {
    server: 6074,
    family: "TheHearts",
    power: 377306233,
  },
  {
    server: 6074,
    family: "INKAKOLA",
    power: 366826580,
  },
  {
    server: 6074,
    family: "Vikingos",
    power: 310151142,
  },
  {
    server: 6074,
    family: "MapleStory",
    power: 278928886,
  },
  {
    server: 6074,
    family: "PUROMEXICANO🥑",
    power: 264832431,
  },
  {
    server: 6074,
    family: "MEXICANOS",
    power: 259927615,
  },
  {
    server: 6074,
    family: "༒CLANTOP༒",
    power: 257910708,
  },
  {
    server: 6075,
    family: "ToeVanguard",
    power: 1273005289,
  },
  {
    server: 6075,
    family: "OnlySmoke",
    power: 1213125667,
  },
  {
    server: 6075,
    family: "Imparables",
    power: 455628143,
  },
  {
    server: 6075,
    family: "Argentina",
    power: 395132232,
  },
  {
    server: 6075,
    family: "SuPerSaYianS",
    power: 336328687,
  },
  {
    server: 6075,
    family: "MAPLETREE",
    power: 327693239,
  },
  {
    server: 6075,
    family: "LATAM",
    power: 317290846,
  },
  {
    server: 6075,
    family: "ᴀʀᴄᴀɴɢᴇʟ",
    power: 304576500,
  },
  {
    server: 6075,
    family: "Delux",
    power: 270383658,
  },
  {
    server: 6075,
    family: "HeelVanguard",
    power: 244338593,
  },
  {
    server: 6076,
    family: "LEGENDS",
    power: 1325763308,
  },
  {
    server: 6076,
    family: "Revolution_Cat",
    power: 847851291,
  },
  {
    server: 6076,
    family: "9zTeam",
    power: 367878825,
  },
  {
    server: 6076,
    family: "WarriorsOfWar",
    power: 342675583,
  },
  {
    server: 6076,
    family: "愛TilinesPrime",
    power: 341358217,
  },
  {
    server: 6076,
    family: "AMANECER",
    power: 341089407,
  },
  {
    server: 6076,
    family: "hard",
    power: 326208532,
  },
  {
    server: 6076,
    family: "LORDHADES",
    power: 240723656,
  },
  {
    server: 6076,
    family: "Pitufialdea",
    power: 236709750,
  },
  {
    server: 6076,
    family: "Mongolitos",
    power: 232941312,
  },
  {
    server: 6077,
    family: "CachorrasMalas",
    power: 1213497411,
  },
  {
    server: 6077,
    family: "WarriorsOfWar",
    power: 969564075,
  },
  {
    server: 6077,
    family: "DARK",
    power: 430571556,
  },
  {
    server: 6077,
    family: "Hattori",
    power: 409004413,
  },
  {
    server: 6077,
    family: "Mugiwaras",
    power: 396724747,
  },
  {
    server: 6077,
    family: "tripulaciónMDL",
    power: 352767918,
  },
  {
    server: 6077,
    family: "Mimamamemima",
    power: 351770250,
  },
  {
    server: 6077,
    family: "ChampiSecta",
    power: 338159951,
  },
  {
    server: 6077,
    family: "Yakuza",
    power: 313538534,
  },
  {
    server: 6077,
    family: "waltpadre",
    power: 275581301,
  },
  {
    server: 6078,
    family: "UnitedLegacy",
    power: 1339202963,
  },
  {
    server: 6078,
    family: "UnitedDestiny",
    power: 823442451,
  },
  {
    server: 6078,
    family: "CocoLoco",
    power: 442036983,
  },
  {
    server: 6078,
    family: "TopLegends",
    power: 389808463,
  },
  {
    server: 6078,
    family: "CHAMPIONS",
    power: 357200776,
  },
  {
    server: 6078,
    family: "MADE_IN_SPAIN",
    power: 299192325,
  },
  {
    server: 6078,
    family: "Darks",
    power: 297654401,
  },
  {
    server: 6078,
    family: "Mushrriors",
    power: 229346464,
  },
  {
    server: 6078,
    family: "KABOOM",
    power: 218667222,
  },
  {
    server: 6078,
    family: "₂₄ᵏ║OFICIAL",
    power: 216144935,
  },
  {
    server: 6079,
    family: "TrendingToP",
    power: 1290577210,
  },
  {
    server: 6079,
    family: "DRAGONBALLZ",
    power: 799198259,
  },
  {
    server: 6079,
    family: "BWC",
    power: 471750663,
  },
  {
    server: 6079,
    family: "Colombia",
    power: 371986615,
  },
  {
    server: 6079,
    family: "MURDERERS",
    power: 323302741,
  },
  {
    server: 6079,
    family: "EvosLegend",
    power: 271898397,
  },
  {
    server: 6079,
    family: "LaPrimizaCuu",
    power: 251383083,
  },
  {
    server: 6079,
    family: "VARSOF",
    power: 241761432,
  },
  {
    server: 6079,
    family: "Champiñones",
    power: 234747795,
  },
  {
    server: 6079,
    family: "Latinos",
    power: 230410997,
  },
  {
    server: 6080,
    family: "OnePiece",
    power: 1215575296,
  },
  {
    server: 6080,
    family: "CoolToP",
    power: 961192972,
  },
  {
    server: 6080,
    family: "LosPesetas",
    power: 552125055,
  },
  {
    server: 6080,
    family: "ImmortalThrone",
    power: 414739752,
  },
  {
    server: 6080,
    family: "BadboYs",
    power: 361891132,
  },
  {
    server: 6080,
    family: "LatinosON",
    power: 347233867,
  },
  {
    server: 6080,
    family: "WIN",
    power: 240730792,
  },
  {
    server: 6080,
    family: "tribu_gallega",
    power: 229355145,
  },
  {
    server: 6080,
    family: "FachasLoks",
    power: 198862090,
  },
  {
    server: 6080,
    family: "Dragons",
    power: 196223701,
  },
  {
    server: 6081,
    family: "KingsOfChaos",
    power: 1066676706,
  },
  {
    server: 6081,
    family: "ONLYSMOKE",
    power: 1021578045,
  },
  {
    server: 6081,
    family: "Guerreros",
    power: 512291520,
  },
  {
    server: 6081,
    family: "ARGENTINA",
    power: 382209713,
  },
  {
    server: 6081,
    family: "clons",
    power: 325177495,
  },
  {
    server: 6081,
    family: "Aztekitas",
    power: 273098085,
  },
  {
    server: 6081,
    family: "COLOMBIA",
    power: 268642637,
  },
  {
    server: 6081,
    family: "GODS",
    power: 259359257,
  },
  {
    server: 6081,
    family: "invictosMX",
    power: 254960810,
  },
  {
    server: 6081,
    family: "LATINOAMÉRICA",
    power: 230894324,
  },
  {
    server: 6082,
    family: "E〤ODUS",
    power: 1131141133,
  },
  {
    server: 6082,
    family: "CLANxMUSH",
    power: 1109254398,
  },
  {
    server: 6082,
    family: "LEGION",
    power: 537694787,
  },
  {
    server: 6082,
    family: "ꄲꋊ꒒ꌦꊰꋬꋊꇙ",
    power: 342826431,
  },
  {
    server: 6082,
    family: "RM7",
    power: 309833225,
  },
  {
    server: 6082,
    family: "Scorpions",
    power: 261342758,
  },
  {
    server: 6082,
    family: "Multivers",
    power: 248911330,
  },
  {
    server: 6082,
    family: "SHINIGAMI",
    power: 239593618,
  },
  {
    server: 6082,
    family: "messias",
    power: 196802732,
  },
  {
    server: 6082,
    family: "Rebeldes",
    power: 187768311,
  },
  {
    server: 6083,
    family: "Hunters_UY",
    power: 1052578819,
  },
  {
    server: 6083,
    family: "SuicideSquad",
    power: 470723448,
  },
  {
    server: 6083,
    family: "PRO_SPAIN",
    power: 455207582,
  },
  {
    server: 6083,
    family: "GODSLAYERS",
    power: 333524825,
  },
  {
    server: 6083,
    family: "ShadowPalace",
    power: 306416204,
  },
  {
    server: 6083,
    family: "GENESIS",
    power: 286476654,
  },
  {
    server: 6083,
    family: "DEMENTES",
    power: 204971129,
  },
  {
    server: 6083,
    family: "MASTERSOFMUSH",
    power: 176984779,
  },
  {
    server: 6083,
    family: "LosFree2Play",
    power: 162342931,
  },
  {
    server: 6083,
    family: "ZzDiablitoszZ",
    power: 157824747,
  },
  {
    server: 6084,
    family: "SwordArtOnline",
    power: 974900593,
  },
  {
    server: 6084,
    family: "SousouFrieren",
    power: 794715229,
  },
  {
    server: 6084,
    family: "RTMlatam",
    power: 347145990,
  },
  {
    server: 6084,
    family: "Parabelum",
    power: 247996782,
  },
  {
    server: 6084,
    family: "LegionDark",
    power: 192189711,
  },
  {
    server: 6084,
    family: "ChampiOnes",
    power: 167668455,
  },
  {
    server: 6084,
    family: "IgrisSoul",
    power: 150194987,
  },
  {
    server: 6084,
    family: "mozqueteños",
    power: 118514165,
  },
  {
    server: 6084,
    family: "latan",
    power: 65978636,
  },
  {
    server: 6084,
    family: "insanos",
    power: 25640723,
  },
  {
    server: 6085,
    family: "ChampiAdictos",
    power: 967767396,
  },
  {
    server: 6085,
    family: "NovaLegendsHC",
    power: 602376622,
  },
  {
    server: 6085,
    family: "Savage",
    power: 286471223,
  },
  {
    server: 6085,
    family: "hispanos",
    power: 276137932,
  },
  {
    server: 6085,
    family: "Olimpo¥",
    power: 260740658,
  },
  {
    server: 6085,
    family: "ARGENTINA",
    power: 183664951,
  },
  {
    server: 6085,
    family: "Malaventurados",
    power: 159720067,
  },
  {
    server: 6085,
    family: "tateti",
    power: 155648188,
  },
  {
    server: 6085,
    family: "Wizards",
    power: 143256355,
  },
  {
    server: 6085,
    family: "Champiñons",
    power: 67957551,
  },
  {
    server: 6086,
    family: "AcidSquad",
    power: 1042681613,
  },
  {
    server: 6086,
    family: "Saborines",
    power: 416332977,
  },
  {
    server: 6086,
    family: "SMOKEFAMILY",
    power: 328286198,
  },
  {
    server: 6086,
    family: "LEGENDS",
    power: 257392003,
  },
  {
    server: 6086,
    family: "GuerrerosZ",
    power: 210995558,
  },
  {
    server: 6086,
    family: "COLOMBIANITOS",
    power: 185701119,
  },
  {
    server: 6086,
    family: "Uneteeee",
    power: 59233264,
  },
  {
    server: 6086,
    family: "HISPANIA",
    power: 31139434,
  },
  {
    server: 6086,
    family: "LuisRayo",
    power: 26692293,
  },
  {
    server: 6086,
    family: "LosDormilones",
    power: 12842057,
  },
  {
    server: 6087,
    family: "HoneyMTV",
    power: 890583286,
  },
  {
    server: 6087,
    family: "RT4ㅤTEAM",
    power: 497455130,
  },
  {
    server: 6087,
    family: "Fénix",
    power: 447300010,
  },
  {
    server: 6087,
    family: "ʜᴏᴏʟɪɢᴀɴꜱ亗",
    power: 439992988,
  },
  {
    server: 6087,
    family: "70GT",
    power: 220058566,
  },
  {
    server: 6087,
    family: "nosexd",
    power: 189670195,
  },
  {
    server: 6087,
    family: "a",
    power: 170105075,
  },
  {
    server: 6087,
    family: "demonicsoul",
    power: 132715022,
  },
  {
    server: 6087,
    family: "MancosAlPoder",
    power: 131573672,
  },
  {
    server: 6087,
    family: "españitaaa",
    power: 131486706,
  },
  {
    server: 6088,
    family: "IMPERIUM",
    power: 1054115856,
  },
  {
    server: 6088,
    family: "SoloLeveling",
    power: 424994264,
  },
  {
    server: 6088,
    family: "Colombia",
    power: 329455324,
  },
  {
    server: 6088,
    family: "Arevalo",
    power: 243245527,
  },
  {
    server: 6088,
    family: "tremosqueteros",
    power: 208740472,
  },
  {
    server: 6088,
    family: "PRØEsp",
    power: 203741913,
  },
  {
    server: 6088,
    family: "D4rckAbiss",
    power: 147764194,
  },
  {
    server: 6088,
    family: "Fuego",
    power: 129460088,
  },
  {
    server: 6088,
    family: "gerrerosviking",
    power: 104636480,
  },
  {
    server: 6088,
    family: "ESPARTANOS",
    power: 28074440,
  },
  {
    server: 6089,
    family: "Indestructible",
    power: 732843653,
  },
  {
    server: 6089,
    family: "Dominators",
    power: 525270410,
  },
  {
    server: 6089,
    family: "BLACKDRAGONS",
    power: 475588425,
  },
  {
    server: 6089,
    family: "MexicanosGG",
    power: 227470583,
  },
  {
    server: 6089,
    family: "Quesillo",
    power: 174395092,
  },
  {
    server: 6089,
    family: "Chapines502",
    power: 163213403,
  },
  {
    server: 6089,
    family: "Yperrushh",
    power: 151168133,
  },
  {
    server: 6089,
    family: "Overlords2",
    power: 88736997,
  },
  {
    server: 6089,
    family: "Argentos",
    power: 82508313,
  },
  {
    server: 6089,
    family: "Legends",
    power: 32228597,
  },
  {
    server: 6090,
    family: "Shiraguns",
    power: 819115452,
  },
  {
    server: 6090,
    family: "TheCrew",
    power: 760772542,
  },
  {
    server: 6090,
    family: "Terreneitors",
    power: 332170698,
  },
  {
    server: 6090,
    family: "nurelianos",
    power: 296869710,
  },
  {
    server: 6090,
    family: "GoblinSlayer",
    power: 188388981,
  },
  {
    server: 6090,
    family: "skilers",
    power: 180367193,
  },
  {
    server: 6090,
    family: "Mushroomlife",
    power: 168902951,
  },
  {
    server: 6090,
    family: "Shrooms",
    power: 163118640,
  },
  {
    server: 6090,
    family: "Shaoranysakura",
    power: 81907529,
  },
  {
    server: 6090,
    family: "Eternity",
    power: 81482874,
  },
  {
    server: 6091,
    family: "ḰaiʝinƬeikσ𝐤u",
    power: 860595043,
  },
  {
    server: 6091,
    family: "CoolTop",
    power: 243351510,
  },
  {
    server: 6091,
    family: "Callampines",
    power: 209239284,
  },
  {
    server: 6091,
    family: "TopTier",
    power: 197384499,
  },
  {
    server: 6091,
    family: "TheShrooms",
    power: 195920874,
  },
  {
    server: 6091,
    family: "Clan07",
    power: 184395060,
  },
  {
    server: 6091,
    family: "Quidam",
    power: 156674292,
  },
  {
    server: 6091,
    family: "《NewAventure》",
    power: 131237453,
  },
  {
    server: 6091,
    family: "Legion",
    power: 122706858,
  },
  {
    server: 6091,
    family: "kokoaland",
    power: 37938106,
  },
  {
    server: 6092,
    family: "Lunaria",
    power: 886096097,
  },
  {
    server: 6092,
    family: "Solaris",
    power: 462828643,
  },
  {
    server: 6092,
    family: "TOPxCLANES",
    power: 343415526,
  },
  {
    server: 6092,
    family: "OLYMPO°LM",
    power: 302334710,
  },
  {
    server: 6092,
    family: "Alucines",
    power: 202701109,
  },
  {
    server: 6092,
    family: "DANGEROUS",
    power: 164802731,
  },
  {
    server: 6092,
    family: "Suŋ_Mooŋ",
    power: 158361676,
  },
  {
    server: 6092,
    family: "LaGrasaSDLG",
    power: 150063697,
  },
  {
    server: 6092,
    family: "Ragnarok",
    power: 113787035,
  },
  {
    server: 6092,
    family: "LeónCarmesí",
    power: 81528004,
  },
  {
    server: 6093,
    family: "AFCARTEL",
    power: 757346381,
  },
  {
    server: 6093,
    family: "Drakensang",
    power: 291816996,
  },
  {
    server: 6093,
    family: "Olimpo",
    power: 282791734,
  },
  {
    server: 6093,
    family: "Beaters",
    power: 242042196,
  },
  {
    server: 6093,
    family: "Españoles",
    power: 221482426,
  },
  {
    server: 6093,
    family: "RG4",
    power: 158734099,
  },
  {
    server: 6093,
    family: "ZLEGION",
    power: 151351375,
  },
  {
    server: 6093,
    family: "RoninPride",
    power: 105716277,
  },
  {
    server: 6093,
    family: "ACRIBILLADORES",
    power: 18278246,
  },
  {
    server: 6093,
    family: "DYNASTYmx",
    power: 14888097,
  },
  {
    server: 6094,
    family: "𝙎𝙎𝙍",
    power: 1047386439,
  },
  {
    server: 6094,
    family: "MaCUMberos",
    power: 464249697,
  },
  {
    server: 6094,
    family: "SantaFilomena",
    power: 300693485,
  },
  {
    server: 6094,
    family: "TÜRKİYE",
    power: 297640822,
  },
  {
    server: 6094,
    family: "SetasChampions",
    power: 212552468,
  },
  {
    server: 6094,
    family: "LATAM",
    power: 199979922,
  },
  {
    server: 6094,
    family: "OLIMPO",
    power: 167741464,
  },
  {
    server: 6094,
    family: "loslorrd",
    power: 159663802,
  },
  {
    server: 6094,
    family: "THExFAMILY",
    power: 155364696,
  },
  {
    server: 6094,
    family: "Peru",
    power: 153554391,
  },
  {
    server: 6095,
    family: "OnePiece",
    power: 991658918,
  },
  {
    server: 6095,
    family: "TheLastWar",
    power: 718906167,
  },
  {
    server: 6095,
    family: "KONOHA",
    power: 276214212,
  },
  {
    server: 6095,
    family: "Alphas",
    power: 224667175,
  },
  {
    server: 6095,
    family: "MALAVENTURADOS",
    power: 218843908,
  },
  {
    server: 6095,
    family: "AFKs",
    power: 189439051,
  },
  {
    server: 6095,
    family: "elcasador32415",
    power: 187654860,
  },
  {
    server: 6095,
    family: "Alucinógenos",
    power: 171391120,
  },
  {
    server: 6095,
    family: "LKWOLF",
    power: 141329765,
  },
  {
    server: 6095,
    family: "Funjiworld",
    power: 136392783,
  },
  {
    server: 6096,
    family: "La_HoRdA",
    power: 1014760827,
  },
  {
    server: 6096,
    family: "༒FamilyCrew",
    power: 927576903,
  },
  {
    server: 6096,
    family: "NÉMESIS",
    power: 373338083,
  },
  {
    server: 6096,
    family: "Valhalla",
    power: 372605641,
  },
  {
    server: 6096,
    family: "ATR",
    power: 230237644,
  },
  {
    server: 6096,
    family: "LUCIFER",
    power: 196137852,
  },
  {
    server: 6096,
    family: "FFJR",
    power: 195834738,
  },
  {
    server: 6096,
    family: "Clover",
    power: 195712392,
  },
  {
    server: 6096,
    family: "zetas",
    power: 194347437,
  },
  {
    server: 6096,
    family: "LEGEND",
    power: 171703551,
  },
  {
    server: 6097,
    family: "OLIMPO",
    power: 968015331,
  },
  {
    server: 6097,
    family: "The_Wardens",
    power: 718735904,
  },
  {
    server: 6097,
    family: "Top_Army",
    power: 378890457,
  },
  {
    server: 6097,
    family: "BLACKﾠBULLS",
    power: 352220252,
  },
  {
    server: 6097,
    family: "GLOBAL",
    power: 332374345,
  },
  {
    server: 6097,
    family: "VIPxCLAN",
    power: 257184992,
  },
  {
    server: 6097,
    family: "Conquerors",
    power: 219951446,
  },
  {
    server: 6097,
    family: "SevillaCity",
    power: 216757533,
  },
  {
    server: 6097,
    family: "TENKO",
    power: 150336169,
  },
  {
    server: 6097,
    family: "ᴺⁱⁿᵗᵉⁿᵈᵒ®",
    power: 146993324,
  },
  {
    server: 6098,
    family: "LegionZombie",
    power: 953096880,
  },
  {
    server: 6098,
    family: "LATAMSTOP",
    power: 812269877,
  },
  {
    server: 6098,
    family: "SOLO_LEVELING",
    power: 353450136,
  },
  {
    server: 6098,
    family: "ArmadaLatina",
    power: 251236968,
  },
  {
    server: 6098,
    family: "°°SPARTA°°",
    power: 239203921,
  },
  {
    server: 6098,
    family: "Champiñonesgod",
    power: 238405060,
  },
  {
    server: 6098,
    family: "MushroomGang",
    power: 231685608,
  },
  {
    server: 6098,
    family: "ReinoChampiñon",
    power: 204922181,
  },
  {
    server: 6098,
    family: "Chiwas",
    power: 193150260,
  },
  {
    server: 6098,
    family: "LatinKings",
    power: 189496787,
  },
  {
    server: 6099,
    family: "Bloodborne",
    power: 811873430,
  },
  {
    server: 6099,
    family: "srzodiaco",
    power: 606019102,
  },
  {
    server: 6099,
    family: "LegionWorld",
    power: 452524197,
  },
  {
    server: 6099,
    family: "CrazyWarriors",
    power: 339972580,
  },
  {
    server: 6099,
    family: "〘Ł€Ꮆ€ŇĐ〙",
    power: 262750160,
  },
  {
    server: 6099,
    family: "Akatsuki",
    power: 249004160,
  },
  {
    server: 6099,
    family: "SRZODIACO",
    power: 199508523,
  },
  {
    server: 6099,
    family: "ZTZ",
    power: 183958026,
  },
  {
    server: 6099,
    family: "Alucinógenos",
    power: 169105339,
  },
  {
    server: 6099,
    family: "champis",
    power: 162501569,
  },
  {
    server: 6100,
    family: "Fenix",
    power: 829302486,
  },
  {
    server: 6100,
    family: "Assassins",
    power: 789597497,
  },
  {
    server: 6100,
    family: "Byakko",
    power: 731264528,
  },
  {
    server: 6100,
    family: "Legacy",
    power: 267295791,
  },
  {
    server: 6100,
    family: "忍Ōtsutsuki族",
    power: 246168214,
  },
  {
    server: 6100,
    family: "Top100",
    power: 218986008,
  },
  {
    server: 6100,
    family: "Akatsuki",
    power: 206331132,
  },
  {
    server: 6100,
    family: "ㄨBANDIDOSㄨ",
    power: 198325946,
  },
  {
    server: 6100,
    family: "parteCULOS",
    power: 194272993,
  },
  {
    server: 6100,
    family: "ThisNarnia",
    power: 179229536,
  },
  {
    server: 6101,
    family: "TopOlympus",
    power: 829365766,
  },
  {
    server: 6101,
    family: "Latinos",
    power: 600159570,
  },
  {
    server: 6101,
    family: "SanVerganza",
    power: 547641952,
  },
  {
    server: 6101,
    family: "OldSchool",
    power: 357567292,
  },
  {
    server: 6101,
    family: "SnowFlake",
    power: 286065986,
  },
  {
    server: 6101,
    family: "CrazyGang",
    power: 234521948,
  },
  {
    server: 6101,
    family: "ElCulto",
    power: 218791346,
  },
  {
    server: 6101,
    family: "BLACK·WOLF",
    power: 207168682,
  },
  {
    server: 6101,
    family: "LATINOS",
    power: 165143067,
  },
  {
    server: 6101,
    family: "FurryLand",
    power: 158568596,
  },
  {
    server: 6102,
    family: "DarkSouls",
    power: 818567095,
  },
  {
    server: 6102,
    family: "OnlyFans",
    power: 746180185,
  },
  {
    server: 6102,
    family: "OrdaVikinga",
    power: 319922591,
  },
  {
    server: 6102,
    family: "The༒LOM༒United",
    power: 251724189,
  },
  {
    server: 6102,
    family: "latinos",
    power: 231041752,
  },
  {
    server: 6102,
    family: "𝔸𝕣𝕚𝕖𝕤",
    power: 229994964,
  },
  {
    server: 6102,
    family: "Newbie",
    power: 219216606,
  },
  {
    server: 6102,
    family: "Xvideos",
    power: 203964671,
  },
  {
    server: 6102,
    family: "Wethermon",
    power: 196729095,
  },
  {
    server: 6102,
    family: "OnePiece",
    power: 180580088,
  },
  {
    server: 6103,
    family: "Los7Pecados",
    power: 770840467,
  },
  {
    server: 6103,
    family: "Wyverns",
    power: 622143876,
  },
  {
    server: 6103,
    family: "Espectral2024",
    power: 432989134,
  },
  {
    server: 6103,
    family: "Trauma2",
    power: 422450189,
  },
  {
    server: 6103,
    family: "HollowSK",
    power: 308663620,
  },
  {
    server: 6103,
    family: "LATINOS",
    power: 264881420,
  },
  {
    server: 6103,
    family: "IMPERIO",
    power: 177837184,
  },
  {
    server: 6103,
    family: "LaMafilia",
    power: 176943491,
  },
  {
    server: 6103,
    family: "REYES",
    power: 162572525,
  },
  {
    server: 6103,
    family: "TheBrokenHeart",
    power: 158956070,
  },
  {
    server: 6104,
    family: "OnlySmoke",
    power: 672243638,
  },
  {
    server: 6104,
    family: "BoB",
    power: 477897494,
  },
  {
    server: 6104,
    family: "Latin",
    power: 458494334,
  },
  {
    server: 6104,
    family: "MONSTERSH",
    power: 258651699,
  },
  {
    server: 6104,
    family: "LEGENDS",
    power: 247119786,
  },
  {
    server: 6104,
    family: "FurryCampus",
    power: 234080871,
  },
  {
    server: 6104,
    family: "DarkHole",
    power: 216048044,
  },
  {
    server: 6104,
    family: "NightRaid",
    power: 207039909,
  },
  {
    server: 6104,
    family: "PerkaHolics",
    power: 188736553,
  },
  {
    server: 6104,
    family: "LATAM",
    power: 185540558,
  },
  {
    server: 6105,
    family: "Guilty",
    power: 667945793,
  },
  {
    server: 6105,
    family: "Valhalla",
    power: 443657777,
  },
  {
    server: 6105,
    family: "MapachesClub",
    power: 310109692,
  },
  {
    server: 6105,
    family: "SlayerKings",
    power: 268724266,
  },
  {
    server: 6105,
    family: "COLOMBIA",
    power: 234024817,
  },
  {
    server: 6105,
    family: "LatinHeroe",
    power: 221087202,
  },
  {
    server: 6105,
    family: "TrueDemons",
    power: 202082625,
  },
  {
    server: 6105,
    family: "Academia_UA",
    power: 200752865,
  },
  {
    server: 6105,
    family: "Titanes",
    power: 162332280,
  },
  {
    server: 6105,
    family: "Teemo",
    power: 159593472,
  },
  {
    server: 6106,
    family: "ChampionLeague",
    power: 601279532,
  },
  {
    server: 6106,
    family: "AStars",
    power: 428413430,
  },
  {
    server: 6106,
    family: "OrtziGamerYOUt",
    power: 335884846,
  },
  {
    server: 6106,
    family: "clan_TM",
    power: 306096252,
  },
  {
    server: 6106,
    family: "Irreversible",
    power: 250066380,
  },
  {
    server: 6106,
    family: "Nirvana",
    power: 168198225,
  },
  {
    server: 6106,
    family: "DARK",
    power: 138662750,
  },
  {
    server: 6106,
    family: "Astro",
    power: 136991613,
  },
  {
    server: 6106,
    family: "ASGARD",
    power: 127561463,
  },
  {
    server: 6106,
    family: "latinos",
    power: 125300770,
  },
  {
    server: 6107,
    family: "TopGang",
    power: 571851316,
  },
  {
    server: 6107,
    family: "ZonaRoja",
    power: 402535822,
  },
  {
    server: 6107,
    family: "Legendary",
    power: 336977726,
  },
  {
    server: 6107,
    family: "TkxSuicide",
    power: 272165416,
  },
  {
    server: 6107,
    family: "ElTopo",
    power: 202455576,
  },
  {
    server: 6107,
    family: "HongoDrogon",
    power: 186925821,
  },
  {
    server: 6107,
    family: "Pirats",
    power: 171390685,
  },
  {
    server: 6107,
    family: "Nakamas",
    power: 164548704,
  },
  {
    server: 6107,
    family: "Puchunguitos",
    power: 163553263,
  },
  {
    server: 6107,
    family: "IMPERIALES",
    power: 152795119,
  },
  {
    server: 6111,
    family: "ShadowWarriors",
    power: 245778767,
  },
  {
    server: 6111,
    family: "OP_Clan",
    power: 209002181,
  },
  {
    server: 6111,
    family: "OrtziGamerYouT",
    power: 140195475,
  },
  {
    server: 6111,
    family: "Infernus",
    power: 139219440,
  },
  {
    server: 6111,
    family: "Némesis",
    power: 133301338,
  },
  {
    server: 6111,
    family: "FÉNIX",
    power: 107164695,
  },
  {
    server: 6111,
    family: "LosPaleros",
    power: 93277619,
  },
  {
    server: 6111,
    family: "Inefable",
    power: 87647847,
  },
  {
    server: 6111,
    family: "666_TokioManji",
    power: 87171369,
  },
  {
    server: 6111,
    family: "Paradise",
    power: 83404299,
  },
  {
    server: 6112,
    family: "The_Wardens",
    power: 115611199,
  },
  {
    server: 6112,
    family: "FamilyChampi",
    power: 85679180,
  },
  {
    server: 6112,
    family: "KANTO",
    power: 78165899,
  },
  {
    server: 6112,
    family: "LosMancos",
    power: 63337966,
  },
  {
    server: 6112,
    family: "LEGENDS",
    power: 50463074,
  },
  {
    server: 6112,
    family: "PoderLatino",
    power: 47966905,
  },
  {
    server: 6112,
    family: "NAMELESS",
    power: 45516901,
  },
  {
    server: 6112,
    family: "WindBreaker",
    power: 37770001,
  },
  {
    server: 6112,
    family: "KorpsDeCrieg",
    power: 22117978,
  },
  {
    server: 6112,
    family: "SUPREME",
    power: 12255255,
  },
  {
    server: 11001,
    family: "UlsaN_ClaN",
    power: 2004259140,
  },
  {
    server: 11001,
    family: "BrasilForce",
    power: 1536461543,
  },
  {
    server: 11001,
    family: "MiauMiau",
    power: 1448844278,
  },
  {
    server: 11001,
    family: "OsViraLatas",
    power: 1400092584,
  },
  {
    server: 11001,
    family: "Akatsuki",
    power: 767058368,
  },
  {
    server: 11001,
    family: "BRASIL",
    power: 651359315,
  },
  {
    server: 11001,
    family: "IronSky",
    power: 325049095,
  },
  {
    server: 11001,
    family: "BANG",
    power: 262550148,
  },
  {
    server: 11001,
    family: "MorningStars",
    power: 255691160,
  },
  {
    server: 11001,
    family: "Ahjin",
    power: 230842236,
  },
  {
    server: 11002,
    family: "Resistência",
    power: 1916763023,
  },
  {
    server: 11002,
    family: "YGGDRASIL",
    power: 1802274328,
  },
  {
    server: 11002,
    family: "YGG_ASGARD",
    power: 1078795985,
  },
  {
    server: 11002,
    family: "Drakensang",
    power: 602233686,
  },
  {
    server: 11002,
    family: "WonderLand",
    power: 521726661,
  },
  {
    server: 11002,
    family: "BRASIL",
    power: 471409299,
  },
  {
    server: 11002,
    family: "Brasil",
    power: 444011536,
  },
  {
    server: 11002,
    family: "CogumeloBrasil",
    power: 390790442,
  },
  {
    server: 11002,
    family: "ChaosMushrooms",
    power: 363336748,
  },
  {
    server: 11002,
    family: "YakuzaBR",
    power: 268166533,
  },
  {
    server: 11003,
    family: "Blazzers",
    power: 1971952123,
  },
  {
    server: 11003,
    family: "KillForFunghi",
    power: 1571451729,
  },
  {
    server: 11003,
    family: "Bla2zers",
    power: 969464140,
  },
  {
    server: 11003,
    family: "SoulBR",
    power: 619250631,
  },
  {
    server: 11003,
    family: "HiTkill",
    power: 432481927,
  },
  {
    server: 11003,
    family: "CalvosAnonimos",
    power: 383448743,
  },
  {
    server: 11003,
    family: "NightRaid",
    power: 313235677,
  },
  {
    server: 11003,
    family: "AKATSUKI",
    power: 273839898,
  },
  {
    server: 11003,
    family: "4i20_BR",
    power: 245599068,
  },
  {
    server: 11003,
    family: "reis",
    power: 172152176,
  },
  {
    server: 11004,
    family: "CARAMELOBR",
    power: 1747412226,
  },
  {
    server: 11004,
    family: "Avangers",
    power: 1062916930,
  },
  {
    server: 11004,
    family: "EliteBR",
    power: 728813957,
  },
  {
    server: 11004,
    family: "Lucky",
    power: 675990070,
  },
  {
    server: 11004,
    family: "BRmushrooms",
    power: 642632285,
  },
  {
    server: 11004,
    family: "Brasil",
    power: 562358232,
  },
  {
    server: 11004,
    family: "ROCAN",
    power: 249783478,
  },
  {
    server: 11004,
    family: "AntiLGBT",
    power: 241911909,
  },
  {
    server: 11004,
    family: "Method",
    power: 223540300,
  },
  {
    server: 11004,
    family: "BRAZUKAS",
    power: 209091697,
  },
  {
    server: 11005,
    family: "Ragnarok",
    power: 1852591828,
  },
  {
    server: 11005,
    family: "𓃮FIERCE𓃮",
    power: 1461762097,
  },
  {
    server: 11005,
    family: "Realeza",
    power: 492701019,
  },
  {
    server: 11005,
    family: "Brasileiros",
    power: 451247343,
  },
  {
    server: 11005,
    family: "Valhala",
    power: 248072670,
  },
  {
    server: 11005,
    family: "FANATICOS",
    power: 214100190,
  },
  {
    server: 11005,
    family: "BrasilTOP1",
    power: 209626579,
  },
  {
    server: 11005,
    family: "SoulEterium",
    power: 187513533,
  },
  {
    server: 11005,
    family: "IsekaiMushroom",
    power: 175318042,
  },
  {
    server: 11005,
    family: "Freekings",
    power: 105449283,
  },
  {
    server: 11006,
    family: "ʳᵍᵏㅤRagnarok",
    power: 1558315592,
  },
  {
    server: 11006,
    family: "BlackMushroom",
    power: 1463776506,
  },
  {
    server: 11006,
    family: "ƇꝒㅤⱿƸⱤø",
    power: 828378057,
  },
  {
    server: 11006,
    family: "Brasil",
    power: 564626896,
  },
  {
    server: 11006,
    family: "BR_IMPERIAL",
    power: 358202858,
  },
  {
    server: 11006,
    family: "Top_rank",
    power: 283717313,
  },
  {
    server: 11006,
    family: "IMPÉRIO",
    power: 281558361,
  },
  {
    server: 11006,
    family: "TryHard",
    power: 246131122,
  },
  {
    server: 11006,
    family: "CAMP",
    power: 232946846,
  },
  {
    server: 11006,
    family: "Magikarp",
    power: 232649504,
  },
  {
    server: 11007,
    family: "Espartanos",
    power: 1709509573,
  },
  {
    server: 11007,
    family: "ᴀᴘᴏᴄᴀʟʏᴘsᴇッ",
    power: 1561977118,
  },
  {
    server: 11007,
    family: "Tebanos",
    power: 655106592,
  },
  {
    server: 11007,
    family: "Ʀєвirτнッ",
    power: 513439644,
  },
  {
    server: 11007,
    family: "Cabaré",
    power: 437100918,
  },
  {
    server: 11007,
    family: "NoiasBR",
    power: 346505338,
  },
  {
    server: 11007,
    family: "HUNTERS",
    power: 303956717,
  },
  {
    server: 11007,
    family: "Blackcats",
    power: 274073328,
  },
  {
    server: 11007,
    family: "NaçãoBr",
    power: 267764058,
  },
  {
    server: 11007,
    family: "BlackOut",
    power: 220692919,
  },
  {
    server: 11008,
    family: "Yggdrasil",
    power: 1640508657,
  },
  {
    server: 11008,
    family: "Midgard",
    power: 1091602623,
  },
  {
    server: 11008,
    family: "AstralBR",
    power: 768286978,
  },
  {
    server: 11008,
    family: "Fungi",
    power: 634611748,
  },
  {
    server: 11008,
    family: "assassinos",
    power: 360080939,
  },
  {
    server: 11008,
    family: "Fortune",
    power: 230539909,
  },
  {
    server: 11008,
    family: "BRAZUKAS",
    power: 228813141,
  },
  {
    server: 11008,
    family: "winx",
    power: 228085840,
  },
  {
    server: 11008,
    family: "NAZARICK",
    power: 211214627,
  },
  {
    server: 11008,
    family: "AfterLife",
    power: 166640101,
  },
  {
    server: 11009,
    family: "BrTeam",
    power: 1748626075,
  },
  {
    server: 11009,
    family: "Brasil_Team",
    power: 1254708535,
  },
  {
    server: 11009,
    family: "FOXBR",
    power: 1041122687,
  },
  {
    server: 11009,
    family: "VelhaGuardaBR",
    power: 607708025,
  },
  {
    server: 11009,
    family: "LosGrandesBR",
    power: 205818106,
  },
  {
    server: 11009,
    family: "BR_SPORTS",
    power: 194480077,
  },
  {
    server: 11009,
    family: "TerraLa",
    power: 189571322,
  },
  {
    server: 11009,
    family: "YggBrasil",
    power: 179652171,
  },
  {
    server: 11009,
    family: "LastLegacy",
    power: 164081804,
  },
  {
    server: 11009,
    family: "TropaBrasil",
    power: 157841181,
  },
  {
    server: 11010,
    family: "BlackBull",
    power: 1904125708,
  },
  {
    server: 11010,
    family: "Knight",
    power: 1309811978,
  },
  {
    server: 11010,
    family: "Elysium",
    power: 613555467,
  },
  {
    server: 11010,
    family: "Rexpeita",
    power: 425640333,
  },
  {
    server: 11010,
    family: "ASGARD",
    power: 351868954,
  },
  {
    server: 11010,
    family: "corporaçãobr",
    power: 297732546,
  },
  {
    server: 11010,
    family: "Hanatome",
    power: 269606172,
  },
  {
    server: 11010,
    family: "ETERNOS",
    power: 241757600,
  },
  {
    server: 11010,
    family: "HATAKE",
    power: 195532178,
  },
  {
    server: 11010,
    family: "BRASIL",
    power: 134407126,
  },
  {
    server: 11011,
    family: "G᥆DFᥲthᥱr",
    power: 1762061861,
  },
  {
    server: 11011,
    family: "LOUD",
    power: 906160882,
  },
  {
    server: 11011,
    family: "Brasil",
    power: 332040050,
  },
  {
    server: 11011,
    family: "ONIPOTENTES",
    power: 315674738,
  },
  {
    server: 11011,
    family: "GodFather",
    power: 273101252,
  },
  {
    server: 11011,
    family: "Brazucas",
    power: 270640268,
  },
  {
    server: 11011,
    family: "NATIVOS",
    power: 268609859,
  },
  {
    server: 11011,
    family: "FURIAA",
    power: 234500419,
  },
  {
    server: 11011,
    family: "DeadlyClaw_BR",
    power: 221250388,
  },
  {
    server: 11011,
    family: "Sear°",
    power: 207843368,
  },
  {
    server: 11014,
    family: "UniTedBrothers",
    power: 1363474674,
  },
  {
    server: 11014,
    family: "Brazucas",
    power: 906109032,
  },
  {
    server: 11014,
    family: "PROJECT_BR",
    power: 889469882,
  },
  {
    server: 11014,
    family: "CoguCabeças",
    power: 289527382,
  },
  {
    server: 11014,
    family: "BERSERK",
    power: 231491944,
  },
  {
    server: 11014,
    family: "WarriorsBR",
    power: 219626811,
  },
  {
    server: 11014,
    family: "UA_ACADEMY",
    power: 194516540,
  },
  {
    server: 11014,
    family: "IMPUROsBR",
    power: 188048668,
  },
  {
    server: 11014,
    family: "Mushroons",
    power: 179067144,
  },
  {
    server: 11014,
    family: "SkyClã",
    power: 91634981,
  },
  {
    server: 11015,
    family: "Strix",
    power: 1646585797,
  },
  {
    server: 11015,
    family: "Sillence",
    power: 953655648,
  },
  {
    server: 11015,
    family: "DARKSIDE",
    power: 423449941,
  },
  {
    server: 11015,
    family: "aleviou",
    power: 365236566,
  },
  {
    server: 11015,
    family: "Caçadorez",
    power: 296522638,
  },
  {
    server: 11015,
    family: "Berserk",
    power: 288992058,
  },
  {
    server: 11015,
    family: "Xvideos",
    power: 253213999,
  },
  {
    server: 11015,
    family: "Brazucas",
    power: 243380153,
  },
  {
    server: 11015,
    family: "BRASIL",
    power: 220816332,
  },
  {
    server: 11015,
    family: "VASCO",
    power: 182442317,
  },
  {
    server: 11016,
    family: "NAZARICK",
    power: 1469290622,
  },
  {
    server: 11016,
    family: "NightRaid",
    power: 1229930412,
  },
  {
    server: 11016,
    family: "One_Piece",
    power: 493875402,
  },
  {
    server: 11016,
    family: "Shadow",
    power: 290252884,
  },
  {
    server: 11016,
    family: "GodofWar",
    power: 286429144,
  },
  {
    server: 11016,
    family: "TeamŌkami",
    power: 194180217,
  },
  {
    server: 11016,
    family: "Moranguinhos",
    power: 193654476,
  },
  {
    server: 11016,
    family: "Monark",
    power: 185466232,
  },
  {
    server: 11016,
    family: "CogumelosBR",
    power: 170858820,
  },
  {
    server: 11016,
    family: "Ahjin",
    power: 145839531,
  },
  {
    server: 11017,
    family: "Brasil",
    power: 1635210915,
  },
  {
    server: 11017,
    family: "Yakuza",
    power: 1310646768,
  },
  {
    server: 11017,
    family: "CORRUPÇÃO",
    power: 1163493926,
  },
  {
    server: 11017,
    family: "Valhalla",
    power: 295893477,
  },
  {
    server: 11017,
    family: "BRcarai",
    power: 273500537,
  },
  {
    server: 11017,
    family: "cogumeloLOCAO",
    power: 244791508,
  },
  {
    server: 11017,
    family: "KingKogumelo",
    power: 238563013,
  },
  {
    server: 11017,
    family: "BLITZ",
    power: 167645253,
  },
  {
    server: 11017,
    family: "TOPsBRASIL",
    power: 148508660,
  },
  {
    server: 11017,
    family: "Kamikazes",
    power: 140087411,
  },
  {
    server: 11018,
    family: "MTC_MYSTIC",
    power: 1597689398,
  },
  {
    server: 11018,
    family: "AKATSUKI",
    power: 498545653,
  },
  {
    server: 11018,
    family: "Oblivion",
    power: 466913090,
  },
  {
    server: 11018,
    family: "●◉ＡＫＡＴＳＵＫＩ◉●",
    power: 308723541,
  },
  {
    server: 11018,
    family: "LEGEND",
    power: 298121686,
  },
  {
    server: 11018,
    family: "Rapaiz",
    power: 255791100,
  },
  {
    server: 11018,
    family: "IRMANDADE",
    power: 185715101,
  },
  {
    server: 11018,
    family: "Punheteros",
    power: 182127579,
  },
  {
    server: 11018,
    family: "Aliança",
    power: 163809820,
  },
  {
    server: 11018,
    family: "Brigata",
    power: 128691575,
  },
  {
    server: 11019,
    family: "Yakuza",
    power: 1523061784,
  },
  {
    server: 11019,
    family: "Coconuts",
    power: 1436517716,
  },
  {
    server: 11019,
    family: "Demon",
    power: 484978945,
  },
  {
    server: 11019,
    family: "brasil",
    power: 367464235,
  },
  {
    server: 11019,
    family: "Akatsuki°",
    power: 250322515,
  },
  {
    server: 11019,
    family: "brazilflips",
    power: 207572013,
  },
  {
    server: 11019,
    family: "CogumelosBR",
    power: 176919531,
  },
  {
    server: 11019,
    family: "WARRIORS_BR",
    power: 173753317,
  },
  {
    server: 11019,
    family: "topES",
    power: 164294405,
  },
  {
    server: 11019,
    family: "BRAZIL",
    power: 114026280,
  },
  {
    server: 11020,
    family: "CaóticosBR",
    power: 1615664409,
  },
  {
    server: 11020,
    family: "LosPatitos",
    power: 715785434,
  },
  {
    server: 11020,
    family: "Cogumelos",
    power: 675649557,
  },
  {
    server: 11020,
    family: "yggdrasil",
    power: 574679388,
  },
  {
    server: 11020,
    family: "FamíliaBr",
    power: 389879179,
  },
  {
    server: 11020,
    family: "NewOrder",
    power: 359377458,
  },
  {
    server: 11020,
    family: "betterslicer",
    power: 261982191,
  },
  {
    server: 11020,
    family: "Lords",
    power: 243205619,
  },
  {
    server: 11020,
    family: "TITAN",
    power: 193941593,
  },
  {
    server: 11020,
    family: "Sharingan",
    power: 168193046,
  },
  {
    server: 11021,
    family: "FANTASY",
    power: 1451712276,
  },
  {
    server: 11021,
    family: "𝔇𝔢𝔪𝔬𝔫𝔰࿐ྂ",
    power: 1234801511,
  },
  {
    server: 11021,
    family: "Cães_de_guerra",
    power: 347839267,
  },
  {
    server: 11021,
    family: "Brasileiros",
    power: 316833112,
  },
  {
    server: 11021,
    family: "Valhalla",
    power: 313824176,
  },
  {
    server: 11021,
    family: "BrSaoPaulo",
    power: 239147847,
  },
  {
    server: 11021,
    family: "Apocalipse",
    power: 160827915,
  },
  {
    server: 11021,
    family: "Legião",
    power: 158358135,
  },
  {
    server: 11021,
    family: "FLAMENGO",
    power: 156549335,
  },
  {
    server: 11021,
    family: "TBrasil",
    power: 141533573,
  },
  {
    server: 11022,
    family: "CAPANGAS",
    power: 1513878077,
  },
  {
    server: 11022,
    family: "Ragnarok",
    power: 1360252017,
  },
  {
    server: 11022,
    family: "Akatsuki",
    power: 342690079,
  },
  {
    server: 11022,
    family: "MAFIA",
    power: 301396889,
  },
  {
    server: 11022,
    family: "TopBRASIL",
    power: 263183221,
  },
  {
    server: 11022,
    family: "cogumelos",
    power: 243950173,
  },
  {
    server: 11022,
    family: "SERES",
    power: 210793014,
  },
  {
    server: 11022,
    family: "Pecados",
    power: 207499763,
  },
  {
    server: 11022,
    family: "Bope",
    power: 187616860,
  },
  {
    server: 11022,
    family: "MUSHROOM",
    power: 143946779,
  },
  {
    server: 11023,
    family: "Brasil",
    power: 1591863142,
  },
  {
    server: 11023,
    family: "OsProcurados",
    power: 1478257102,
  },
  {
    server: 11023,
    family: "Carnificina",
    power: 356814336,
  },
  {
    server: 11023,
    family: "EternalBr",
    power: 234926753,
  },
  {
    server: 11023,
    family: "PaladinosBRsc",
    power: 226184636,
  },
  {
    server: 11023,
    family: "Aventureiros",
    power: 195247869,
  },
  {
    server: 11023,
    family: "Intocáveis",
    power: 176267348,
  },
  {
    server: 11023,
    family: "ALPHA",
    power: 163767122,
  },
  {
    server: 11023,
    family: "GALÁCTICOS",
    power: 163427411,
  },
  {
    server: 11023,
    family: "Cogumilous",
    power: 94380770,
  },
  {
    server: 11024,
    family: "°AVENGERS°",
    power: 1541573942,
  },
  {
    server: 11024,
    family: "Legionários",
    power: 879333251,
  },
  {
    server: 11024,
    family: "BRASIL",
    power: 646153511,
  },
  {
    server: 11024,
    family: "MERCENÁRIOS",
    power: 447214832,
  },
  {
    server: 11024,
    family: "alfa45",
    power: 188808892,
  },
  {
    server: 11024,
    family: "isekai",
    power: 179808397,
  },
  {
    server: 11024,
    family: "Akatsuki",
    power: 92078671,
  },
  {
    server: 11024,
    family: "Intrépidos",
    power: 90006735,
  },
  {
    server: 11024,
    family: "onepiece",
    power: 84974053,
  },
  {
    server: 11024,
    family: "ASGARD",
    power: 84496455,
  },
  {
    server: 11025,
    family: "CasaDaMãeJoana",
    power: 1348656260,
  },
  {
    server: 11025,
    family: "Brzada",
    power: 1308448121,
  },
  {
    server: 11025,
    family: "BrAZuKaS",
    power: 341312953,
  },
  {
    server: 11025,
    family: "BLACKOUT",
    power: 339363541,
  },
  {
    server: 11025,
    family: "EliteBrasil",
    power: 313275775,
  },
  {
    server: 11025,
    family: "Ordem",
    power: 231434930,
  },
  {
    server: 11025,
    family: "BrasilClan",
    power: 190618451,
  },
  {
    server: 11025,
    family: "GusuLan",
    power: 179512544,
  },
  {
    server: 11025,
    family: "serpenteNegra",
    power: 175108836,
  },
  {
    server: 11025,
    family: "ONEPUNCHMAN",
    power: 170193568,
  },
  {
    server: 11026,
    family: "SANCTUNBR",
    power: 1581954537,
  },
  {
    server: 11026,
    family: "TomorrowStar",
    power: 1244083884,
  },
  {
    server: 11026,
    family: "SHADOWS",
    power: 386465130,
  },
  {
    server: 11026,
    family: "Guardiões",
    power: 356157135,
  },
  {
    server: 11026,
    family: "StonkesBR",
    power: 346581460,
  },
  {
    server: 11026,
    family: "horizon",
    power: 299932556,
  },
  {
    server: 11026,
    family: "BLACKmash",
    power: 242997519,
  },
  {
    server: 11026,
    family: "BlackClover",
    power: 235745320,
  },
  {
    server: 11026,
    family: "oneㅤpieceㅤreal",
    power: 218390837,
  },
  {
    server: 11026,
    family: "NÓIAS",
    power: 197296335,
  },
  {
    server: 11027,
    family: "MagicShrooms",
    power: 1464602949,
  },
  {
    server: 11027,
    family: "FAMILIABR",
    power: 921934750,
  },
  {
    server: 11027,
    family: "INFINITY",
    power: 816956768,
  },
  {
    server: 11027,
    family: "xXxBRASILxXx",
    power: 285350718,
  },
  {
    server: 11027,
    family: "brsparta",
    power: 236304808,
  },
  {
    server: 11027,
    family: "IMPÉRIO",
    power: 187758661,
  },
  {
    server: 11027,
    family: "Hyuga",
    power: 169363799,
  },
  {
    server: 11027,
    family: "DRAGONS",
    power: 161247441,
  },
  {
    server: 11027,
    family: "Ceifadores",
    power: 151982005,
  },
  {
    server: 11027,
    family: "Brasileiros",
    power: 127184899,
  },
  {
    server: 11028,
    family: "MystSpores",
    power: 1687038980,
  },
  {
    server: 11028,
    family: "Dinasty",
    power: 572132514,
  },
  {
    server: 11028,
    family: "Brazil",
    power: 389343360,
  },
  {
    server: 11028,
    family: "Insane",
    power: 344716860,
  },
  {
    server: 11028,
    family: "Akatsuki",
    power: 233217378,
  },
  {
    server: 11028,
    family: "AKATSUKI🪽🦊",
    power: 232876853,
  },
  {
    server: 11028,
    family: "Kuzumin",
    power: 232136440,
  },
  {
    server: 11028,
    family: "Spry",
    power: 195267478,
  },
  {
    server: 11028,
    family: "×Cogumelos⁴⁰°",
    power: 181404949,
  },
  {
    server: 11028,
    family: "XVIDEOS",
    power: 177139696,
  },
  {
    server: 11029,
    family: "SANTAIGREJA",
    power: 1627736811,
  },
  {
    server: 11029,
    family: "Brasil_Kingdom",
    power: 323879963,
  },
  {
    server: 11029,
    family: "BR",
    power: 238321581,
  },
  {
    server: 11029,
    family: "DarkDragons",
    power: 200139529,
  },
  {
    server: 11029,
    family: "BR_Hunter",
    power: 197552537,
  },
  {
    server: 11029,
    family: "BL4CKSUNBR",
    power: 194890794,
  },
  {
    server: 11029,
    family: "BOSS",
    power: 188178905,
  },
  {
    server: 11029,
    family: "Cogumelo_Br",
    power: 170029246,
  },
  {
    server: 11029,
    family: "Escola_Jujutsu",
    power: 165350445,
  },
  {
    server: 11029,
    family: "DarkFenix",
    power: 155885128,
  },
  {
    server: 11030,
    family: "MIBR",
    power: 1289756656,
  },
  {
    server: 11030,
    family: "CogulandiaBR",
    power: 1044132561,
  },
  {
    server: 11030,
    family: "Cogumelitos",
    power: 322903456,
  },
  {
    server: 11030,
    family: "DEUSES",
    power: 295098161,
  },
  {
    server: 11030,
    family: "TEMPEST",
    power: 270918653,
  },
  {
    server: 11030,
    family: "BRASIL",
    power: 239273687,
  },
  {
    server: 11030,
    family: "Monarcas",
    power: 184977502,
  },
  {
    server: 11030,
    family: "osLendários",
    power: 164873685,
  },
  {
    server: 11030,
    family: "Mercenários",
    power: 149641254,
  },
  {
    server: 11030,
    family: "AUTHENTIC",
    power: 140365673,
  },
  {
    server: 11031,
    family: "PRIME",
    power: 1581679892,
  },
  {
    server: 11031,
    family: "Hazit",
    power: 1093752914,
  },
  {
    server: 11031,
    family: "ForteBr",
    power: 370967363,
  },
  {
    server: 11031,
    family: "ImperioBr",
    power: 199973615,
  },
  {
    server: 11031,
    family: "Jatumorre",
    power: 169810633,
  },
  {
    server: 11031,
    family: "NovaOrdem",
    power: 164612455,
  },
  {
    server: 11031,
    family: "LEGIONÁRIOS",
    power: 121798393,
  },
  {
    server: 11031,
    family: "so_lendarios",
    power: 85607978,
  },
  {
    server: 11031,
    family: "Recriar",
    power: 74087504,
  },
  {
    server: 11031,
    family: "psicodélico",
    power: 73026393,
  },
  {
    server: 11032,
    family: "𝕯i𝖓𝖆𝖘𝖙i𝖆",
    power: 1723478275,
  },
  {
    server: 11032,
    family: "૮ѳ૨đy૮૯ρઽ",
    power: 697765085,
  },
  {
    server: 11032,
    family: "442BR",
    power: 470660513,
  },
  {
    server: 11032,
    family: "Tsukimichi",
    power: 419973744,
  },
  {
    server: 11032,
    family: "Mugiwaras",
    power: 263141004,
  },
  {
    server: 11032,
    family: "Reis",
    power: 198199216,
  },
  {
    server: 11032,
    family: "COGUDEVIL",
    power: 175827948,
  },
  {
    server: 11032,
    family: "Gloriosos",
    power: 139021997,
  },
  {
    server: 11032,
    family: "Brasil",
    power: 77017581,
  },
  {
    server: 11032,
    family: "DreamﾠHard",
    power: 52515483,
  },
  {
    server: 11033,
    family: "Konoha",
    power: 1356773243,
  },
  {
    server: 11033,
    family: "TheNight",
    power: 1216430552,
  },
  {
    server: 11033,
    family: "DogsOfWar",
    power: 314657208,
  },
  {
    server: 11033,
    family: "Brasil",
    power: 197916378,
  },
  {
    server: 11033,
    family: "Mayhem",
    power: 185575570,
  },
  {
    server: 11033,
    family: "Notoxicc",
    power: 179662100,
  },
  {
    server: 11033,
    family: "Targaryen",
    power: 135038057,
  },
  {
    server: 11033,
    family: "LOUCOMELLOS",
    power: 126804953,
  },
  {
    server: 11033,
    family: "rip_indra6",
    power: 63725567,
  },
  {
    server: 11033,
    family: "pegados",
    power: 46814132,
  },
  {
    server: 11034,
    family: "LIØNS×BRs",
    power: 1536472504,
  },
  {
    server: 11034,
    family: "COGU",
    power: 495695842,
  },
  {
    server: 11034,
    family: "XxBRxX",
    power: 317486579,
  },
  {
    server: 11034,
    family: "Brasill",
    power: 313991937,
  },
  {
    server: 11034,
    family: "Hell_AngelS",
    power: 284799576,
  },
  {
    server: 11034,
    family: "Leviatãs",
    power: 203700778,
  },
  {
    server: 11034,
    family: "todt99",
    power: 161718750,
  },
  {
    server: 11034,
    family: "Brasil",
    power: 154065979,
  },
  {
    server: 11034,
    family: "espadanegra",
    power: 134372478,
  },
  {
    server: 11034,
    family: "OnTopS",
    power: 133307207,
  },
  {
    server: 11035,
    family: "VeganS",
    power: 1581112608,
  },
  {
    server: 11035,
    family: "BRAZUKAS",
    power: 750692362,
  },
  {
    server: 11035,
    family: "Vipers",
    power: 501434468,
  },
  {
    server: 11035,
    family: "brs",
    power: 292604054,
  },
  {
    server: 11035,
    family: "AltoFPS",
    power: 250402125,
  },
  {
    server: 11035,
    family: "magos",
    power: 248442718,
  },
  {
    server: 11035,
    family: "Blacks",
    power: 234333935,
  },
  {
    server: 11035,
    family: "Flexis",
    power: 226480520,
  },
  {
    server: 11035,
    family: "Destroyers",
    power: 205195475,
  },
  {
    server: 11035,
    family: "GOAT",
    power: 197360314,
  },
  {
    server: 11036,
    family: "Millenium",
    power: 1522718772,
  },
  {
    server: 11036,
    family: "OsAvançados",
    power: 743134105,
  },
  {
    server: 11036,
    family: "Sturmabteilung",
    power: 282826622,
  },
  {
    server: 11036,
    family: "Bearszz",
    power: 275644478,
  },
  {
    server: 11036,
    family: "TheMushrooms",
    power: 261483917,
  },
  {
    server: 11036,
    family: "PacíficosBR",
    power: 258087280,
  },
  {
    server: 11036,
    family: "Deidara",
    power: 214646544,
  },
  {
    server: 11036,
    family: "UNIDOSPERDEMOS",
    power: 196197544,
  },
  {
    server: 11036,
    family: "Yakuza",
    power: 181107622,
  },
  {
    server: 11036,
    family: "DungeonOfDrago",
    power: 162418653,
  },
  {
    server: 11037,
    family: "Totalitários",
    power: 1384770963,
  },
  {
    server: 11037,
    family: "Paradise",
    power: 426539438,
  },
  {
    server: 11037,
    family: "Brasileiros",
    power: 292880557,
  },
  {
    server: 11037,
    family: "MithrilBr",
    power: 237913478,
  },
  {
    server: 11037,
    family: "KingsBlack",
    power: 230819629,
  },
  {
    server: 11037,
    family: "Venerados",
    power: 215088753,
  },
  {
    server: 11037,
    family: "Konoha",
    power: 208942954,
  },
  {
    server: 11037,
    family: "Ahjin",
    power: 141620005,
  },
  {
    server: 11037,
    family: "Cogumelos",
    power: 102002120,
  },
  {
    server: 11037,
    family: "UniãoBR",
    power: 80613494,
  },
  {
    server: 11038,
    family: "Olimpo",
    power: 1535607249,
  },
  {
    server: 11038,
    family: "Blood𝙼𝙾𝙾𝙽",
    power: 987367795,
  },
  {
    server: 11038,
    family: "Ligeirinhos",
    power: 300971260,
  },
  {
    server: 11038,
    family: "TropaCogumelo",
    power: 288361411,
  },
  {
    server: 11038,
    family: "KSame",
    power: 188628475,
  },
  {
    server: 11038,
    family: "Fungi",
    power: 174118559,
  },
  {
    server: 11038,
    family: "BrasilPiece",
    power: 166308595,
  },
  {
    server: 11038,
    family: "CogumelosBravo",
    power: 159137410,
  },
  {
    server: 11038,
    family: "TheLordsBr",
    power: 138830561,
  },
  {
    server: 11038,
    family: "Konoha",
    power: 95078543,
  },
  {
    server: 11039,
    family: "Lacoste",
    power: 1517004297,
  },
  {
    server: 11039,
    family: "ANJOSdaNOITE",
    power: 519574420,
  },
  {
    server: 11039,
    family: "tamojunto",
    power: 277652507,
  },
  {
    server: 11039,
    family: "Shichibukais",
    power: 253673444,
  },
  {
    server: 11039,
    family: "Honor_of_kings",
    power: 190413553,
  },
  {
    server: 11039,
    family: "tubarão",
    power: 157985847,
  },
  {
    server: 11039,
    family: "spf",
    power: 152841913,
  },
  {
    server: 11039,
    family: "TheBatlleRoyal",
    power: 79502623,
  },
  {
    server: 11039,
    family: "BLACK_COGUMELO",
    power: 61654558,
  },
  {
    server: 11039,
    family: "GØD",
    power: 54234435,
  },
  {
    server: 11040,
    family: "MountOlympuS",
    power: 1680048250,
  },
  {
    server: 11040,
    family: "SaiCachorro",
    power: 600388035,
  },
  {
    server: 11040,
    family: "INSS",
    power: 500704323,
  },
  {
    server: 11040,
    family: "Hogwarts",
    power: 280851294,
  },
  {
    server: 11040,
    family: "Wolfs",
    power: 246771430,
  },
  {
    server: 11040,
    family: "CLÃ_DO_TROVÃO",
    power: 127344308,
  },
  {
    server: 11040,
    family: "BRASIL",
    power: 126537634,
  },
  {
    server: 11040,
    family: "império",
    power: 112646467,
  },
  {
    server: 11040,
    family: "AKATSUKI",
    power: 103520612,
  },
  {
    server: 11040,
    family: "BlackStar",
    power: 73541170,
  },
  {
    server: 11041,
    family: "Digiescolhidos",
    power: 1444439780,
  },
  {
    server: 11041,
    family: "NINJAS",
    power: 438765736,
  },
  {
    server: 11041,
    family: "Brasil",
    power: 330625844,
  },
  {
    server: 11041,
    family: "GøldPhøenix",
    power: 284450233,
  },
  {
    server: 11041,
    family: "Akatsukibr",
    power: 241251186,
  },
  {
    server: 11041,
    family: "Konoha",
    power: 216609880,
  },
  {
    server: 11041,
    family: "Gamers",
    power: 187914790,
  },
  {
    server: 11041,
    family: "ESCANOR_GG",
    power: 184885839,
  },
  {
    server: 11041,
    family: "mercenários",
    power: 155637672,
  },
  {
    server: 11041,
    family: "MORNACASSS",
    power: 119718410,
  },
  {
    server: 11042,
    family: "Outlaws",
    power: 1367896062,
  },
  {
    server: 11042,
    family: "NovaOrdem",
    power: 1160669045,
  },
  {
    server: 11042,
    family: "VIKINGS",
    power: 343520553,
  },
  {
    server: 11042,
    family: "BRASIL",
    power: 158051343,
  },
  {
    server: 11042,
    family: "CovilBR",
    power: 153317120,
  },
  {
    server: 11042,
    family: "Dragon",
    power: 150889064,
  },
  {
    server: 11042,
    family: "éo_bronks",
    power: 136590825,
  },
  {
    server: 11042,
    family: "LOST LEGION",
    power: 87909611,
  },
  {
    server: 11042,
    family: "TROLSBR",
    power: 75259382,
  },
  {
    server: 11042,
    family: "lendarios",
    power: 49320955,
  },
  {
    server: 11043,
    family: "MáfiaGesso",
    power: 1506579698,
  },
  {
    server: 11043,
    family: "WAGesso",
    power: 484336461,
  },
  {
    server: 11043,
    family: "MushGrooms",
    power: 292321484,
  },
  {
    server: 11043,
    family: "DESOCUPADOS",
    power: 277233181,
  },
  {
    server: 11043,
    family: "LevelUP",
    power: 259108742,
  },
  {
    server: 11043,
    family: "Falcons",
    power: 253706030,
  },
  {
    server: 11043,
    family: "Os_Garças",
    power: 146121232,
  },
  {
    server: 11043,
    family: "KUZANAGI",
    power: 102946413,
  },
  {
    server: 11043,
    family: "BRAZIL",
    power: 56443076,
  },
  {
    server: 11043,
    family: "Fraternity",
    power: 52303571,
  },
  {
    server: 11044,
    family: "CaLabResO",
    power: 1283099921,
  },
  {
    server: 11044,
    family: "Adamantinos",
    power: 543686317,
  },
  {
    server: 11044,
    family: "linguico",
    power: 251820687,
  },
  {
    server: 11044,
    family: "Vultures",
    power: 229832992,
  },
  {
    server: 11044,
    family: "9Ângulos",
    power: 228586453,
  },
  {
    server: 11044,
    family: "Akatsuki",
    power: 208411594,
  },
  {
    server: 11044,
    family: "BoaConduta",
    power: 194199257,
  },
  {
    server: 11044,
    family: "Xerife",
    power: 168593212,
  },
  {
    server: 11044,
    family: "chalix",
    power: 151281077,
  },
  {
    server: 11044,
    family: "Akira",
    power: 113530863,
  },
  {
    server: 11045,
    family: "BrasilLegend",
    power: 1486402771,
  },
  {
    server: 11045,
    family: "Revoltz",
    power: 1190205929,
  },
  {
    server: 11045,
    family: "Brasil",
    power: 270593516,
  },
  {
    server: 11045,
    family: "Cogumelinhos",
    power: 263272388,
  },
  {
    server: 11045,
    family: "Ortegga",
    power: 258011445,
  },
  {
    server: 11045,
    family: "Dorime",
    power: 244476703,
  },
  {
    server: 11045,
    family: "YONKOS",
    power: 230977280,
  },
  {
    server: 11045,
    family: "Cogu_Darks",
    power: 229409991,
  },
  {
    server: 11045,
    family: "BigBang",
    power: 190172069,
  },
  {
    server: 11045,
    family: "WolfBR",
    power: 186903601,
  },
  {
    server: 11046,
    family: "GeneiRyodan",
    power: 1635143113,
  },
  {
    server: 11046,
    family: "R3negados",
    power: 464492155,
  },
  {
    server: 11046,
    family: "FourSeason",
    power: 276325160,
  },
  {
    server: 11046,
    family: "andarilhos",
    power: 241095166,
  },
  {
    server: 11046,
    family: "GeneiRyodan2",
    power: 231083391,
  },
  {
    server: 11046,
    family: "Kalvos",
    power: 218095552,
  },
  {
    server: 11046,
    family: "Noxus",
    power: 208900978,
  },
  {
    server: 11046,
    family: "SANGUINÁRIOS",
    power: 205003132,
  },
  {
    server: 11046,
    family: "OsBig",
    power: 165701254,
  },
  {
    server: 11046,
    family: "Tempest",
    power: 157785401,
  },
  {
    server: 11047,
    family: "TheKingdom",
    power: 1504037077,
  },
  {
    server: 11047,
    family: "THUNDERBOLTS",
    power: 567996233,
  },
  {
    server: 11047,
    family: "Invictus_BR",
    power: 317484002,
  },
  {
    server: 11047,
    family: "Fierce",
    power: 301470787,
  },
  {
    server: 11047,
    family: "IMPERIO",
    power: 286243668,
  },
  {
    server: 11047,
    family: "Pecadores",
    power: 275933046,
  },
  {
    server: 11047,
    family: "DeathWish",
    power: 163291956,
  },
  {
    server: 11047,
    family: "BrMania",
    power: 154705206,
  },
  {
    server: 11047,
    family: "TodoPoderosO",
    power: 150213331,
  },
  {
    server: 11047,
    family: "cladoscabecudo",
    power: 135509636,
  },
  {
    server: 11048,
    family: "MaNiACosBR",
    power: 1513753039,
  },
  {
    server: 11048,
    family: "GhostGomelos",
    power: 626929538,
  },
  {
    server: 11048,
    family: "garoto_abusads",
    power: 290082879,
  },
  {
    server: 11048,
    family: "Annihilation",
    power: 229293625,
  },
  {
    server: 11048,
    family: "Nazarick",
    power: 219947712,
  },
  {
    server: 11048,
    family: "SABONETEIRA",
    power: 164357790,
  },
  {
    server: 11048,
    family: "Killers",
    power: 134262993,
  },
  {
    server: 11048,
    family: "ALUCINAÇÃO",
    power: 131084533,
  },
  {
    server: 11048,
    family: "ImperioMush",
    power: 123077084,
  },
  {
    server: 11048,
    family: "Valente",
    power: 106564722,
  },
  {
    server: 11049,
    family: "LastLegacy",
    power: 1551679721,
  },
  {
    server: 11049,
    family: "HuntersSA",
    power: 819197969,
  },
  {
    server: 11049,
    family: "Valhalla",
    power: 316924050,
  },
  {
    server: 11049,
    family: "DEMONS",
    power: 259895213,
  },
  {
    server: 11049,
    family: "BRAZUKAS",
    power: 243209170,
  },
  {
    server: 11049,
    family: "Hunters",
    power: 193352558,
  },
  {
    server: 11049,
    family: "ShadowBlade",
    power: 179780920,
  },
  {
    server: 11049,
    family: "MushLimes",
    power: 143075310,
  },
  {
    server: 11049,
    family: "FoXNiNe",
    power: 124666934,
  },
  {
    server: 11049,
    family: "gladiators",
    power: 72766243,
  },
  {
    server: 11050,
    family: "Phoenix",
    power: 1459375738,
  },
  {
    server: 11050,
    family: "Futuristic",
    power: 1187843322,
  },
  {
    server: 11050,
    family: "IMORTAIS",
    power: 253168156,
  },
  {
    server: 11050,
    family: "CaosBR",
    power: 242563442,
  },
  {
    server: 11050,
    family: "UniãoBR",
    power: 241332253,
  },
  {
    server: 11050,
    family: "Seraphim",
    power: 225537831,
  },
  {
    server: 11050,
    family: "ReisDosFungos",
    power: 174916340,
  },
  {
    server: 11050,
    family: "Arcanjos",
    power: 98698429,
  },
  {
    server: 11050,
    family: "INFERNO",
    power: 85160849,
  },
  {
    server: 11050,
    family: "juninho",
    power: 44858012,
  },
  {
    server: 11051,
    family: "TRYHARD’S",
    power: 1459167643,
  },
  {
    server: 11051,
    family: "Try_HarD_2",
    power: 423087519,
  },
  {
    server: 11051,
    family: "HASHIRAS¹⁵⁷",
    power: 399450127,
  },
  {
    server: 11051,
    family: "WarriorsBR",
    power: 267334869,
  },
  {
    server: 11051,
    family: "Gladiators",
    power: 256224195,
  },
  {
    server: 11051,
    family: "Flamengo",
    power: 232701033,
  },
  {
    server: 11051,
    family: "Brazukas",
    power: 204434689,
  },
  {
    server: 11051,
    family: "banguela",
    power: 170839993,
  },
  {
    server: 11051,
    family: "LegiãoBR",
    power: 160808706,
  },
  {
    server: 11051,
    family: "BRASILEIROS",
    power: 139218348,
  },
  {
    server: 11052,
    family: "AlcatraZ",
    power: 1534352394,
  },
  {
    server: 11052,
    family: "ESCORPION",
    power: 379322197,
  },
  {
    server: 11052,
    family: "INSANOS",
    power: 356672120,
  },
  {
    server: 11052,
    family: "ESPARTA",
    power: 352375874,
  },
  {
    server: 11052,
    family: "BrasilClan",
    power: 301119910,
  },
  {
    server: 11052,
    family: "COGUMELOS",
    power: 291899988,
  },
  {
    server: 11052,
    family: "legends",
    power: 147545753,
  },
  {
    server: 11052,
    family: "TOP_1",
    power: 120781321,
  },
  {
    server: 11052,
    family: "Wizards",
    power: 100680715,
  },
  {
    server: 11052,
    family: "SemDinheiro",
    power: 93075161,
  },
  {
    server: 11053,
    family: "NaoEoCogumelo",
    power: 1439093470,
  },
  {
    server: 11053,
    family: "DragonsWar",
    power: 503162500,
  },
  {
    server: 11053,
    family: "Batatinhas",
    power: 247928790,
  },
  {
    server: 11053,
    family: "TropaDoManTén",
    power: 243758513,
  },
  {
    server: 11053,
    family: "RioDeJaneiro",
    power: 232319418,
  },
  {
    server: 11053,
    family: "BRAZIL",
    power: 174633472,
  },
  {
    server: 11053,
    family: "La_Mafia",
    power: 165420605,
  },
  {
    server: 11053,
    family: "DeusesDaGuerra",
    power: 160722866,
  },
  {
    server: 11053,
    family: "cogumelorei",
    power: 145127789,
  },
  {
    server: 11053,
    family: "VingançaBrasil",
    power: 111902797,
  },
  {
    server: 11054,
    family: "MIBR",
    power: 1189524162,
  },
  {
    server: 11054,
    family: "Punish",
    power: 680690745,
  },
  {
    server: 11054,
    family: "Dragões",
    power: 317567446,
  },
  {
    server: 11054,
    family: "MyHeroAcademia",
    power: 278500031,
  },
  {
    server: 11054,
    family: "REAPERS",
    power: 218139447,
  },
  {
    server: 11054,
    family: "Brasileiros",
    power: 179752425,
  },
  {
    server: 11054,
    family: "makhinas",
    power: 160306081,
  },
  {
    server: 11054,
    family: "RAGNAROK",
    power: 155096573,
  },
  {
    server: 11054,
    family: "casadores",
    power: 154741230,
  },
  {
    server: 11054,
    family: "DeathﾠNote",
    power: 153582148,
  },
  {
    server: 11055,
    family: "BrasiL",
    power: 1547107872,
  },
  {
    server: 11055,
    family: "TARGARYEN",
    power: 439443100,
  },
  {
    server: 11055,
    family: "KONOHA",
    power: 406348564,
  },
  {
    server: 11055,
    family: "Vingadores",
    power: 243506329,
  },
  {
    server: 11055,
    family: "Soberanos",
    power: 238810013,
  },
  {
    server: 11055,
    family: "BelfordRoxo",
    power: 180855671,
  },
  {
    server: 11055,
    family: "Borderline",
    power: 180615536,
  },
  {
    server: 11055,
    family: "BRAZIL",
    power: 167305971,
  },
  {
    server: 11055,
    family: "MAGICMUSHROOM",
    power: 158035695,
  },
  {
    server: 11055,
    family: "LENGENDARY",
    power: 131468992,
  },
  {
    server: 11056,
    family: "TOMAai",
    power: 1384812193,
  },
  {
    server: 11056,
    family: "EliteYORDLES",
    power: 1013010390,
  },
  {
    server: 11056,
    family: "IMPÉRIO",
    power: 537074748,
  },
  {
    server: 11056,
    family: "BRASIL",
    power: 304592681,
  },
  {
    server: 11056,
    family: "WARRIORS",
    power: 304583485,
  },
  {
    server: 11056,
    family: "FENIX",
    power: 235630274,
  },
  {
    server: 11056,
    family: "Brasil",
    power: 164010634,
  },
  {
    server: 11056,
    family: "adolfpittler",
    power: 153006950,
  },
  {
    server: 11056,
    family: "HELL",
    power: 131702894,
  },
  {
    server: 11056,
    family: "BRNoobs",
    power: 116064274,
  },
  {
    server: 11057,
    family: "sɪɴɴᴇʀs",
    power: 1379231115,
  },
  {
    server: 11057,
    family: "Exilio",
    power: 504741194,
  },
  {
    server: 11057,
    family: "Lutadores",
    power: 489947906,
  },
  {
    server: 11057,
    family: "resenha_dos_br",
    power: 375623919,
  },
  {
    server: 11057,
    family: "The_Demons",
    power: 319439556,
  },
  {
    server: 11057,
    family: "fortes",
    power: 250595784,
  },
  {
    server: 11057,
    family: "Solo",
    power: 248901937,
  },
  {
    server: 11057,
    family: "black_clover",
    power: 245305755,
  },
  {
    server: 11057,
    family: "DARKSKY",
    power: 228278740,
  },
  {
    server: 11057,
    family: "D̶E̶N̶V̶E̶R̶S̶",
    power: 201171746,
  },
  {
    server: 11058,
    family: "NEXT",
    power: 1609385127,
  },
  {
    server: 11058,
    family: "NEXT²",
    power: 647281086,
  },
  {
    server: 11058,
    family: "NovoMundo",
    power: 509636356,
  },
  {
    server: 11058,
    family: "HALLOWEEN",
    power: 466127383,
  },
  {
    server: 11058,
    family: "Legends_of",
    power: 240999462,
  },
  {
    server: 11058,
    family: "DEUSES",
    power: 221573273,
  },
  {
    server: 11058,
    family: "OzLombrados",
    power: 186445433,
  },
  {
    server: 11058,
    family: "Muguiwara",
    power: 159136049,
  },
  {
    server: 11058,
    family: "LordsBR",
    power: 156366408,
  },
  {
    server: 11058,
    family: "TheBest",
    power: 74653073,
  },
  {
    server: 11059,
    family: "SS59",
    power: 1561626490,
  },
  {
    server: 11059,
    family: "SS59²",
    power: 469356383,
  },
  {
    server: 11059,
    family: "RJ021",
    power: 357920523,
  },
  {
    server: 11059,
    family: "RENEGADOS",
    power: 229431911,
  },
  {
    server: 11059,
    family: "Firmo",
    power: 200373673,
  },
  {
    server: 11059,
    family: "Themushrooms",
    power: 162762581,
  },
  {
    server: 11059,
    family: "cogumelos",
    power: 149588744,
  },
  {
    server: 11059,
    family: "TRIVIUM",
    power: 146673694,
  },
  {
    server: 11059,
    family: "Theﾠdragons",
    power: 135444711,
  },
  {
    server: 11059,
    family: "B4",
    power: 131852197,
  },
  {
    server: 11060,
    family: "BRASIL",
    power: 1325578382,
  },
  {
    server: 11060,
    family: "INFINITY",
    power: 497384093,
  },
  {
    server: 11060,
    family: "InvictuS",
    power: 372601193,
  },
  {
    server: 11060,
    family: "Celestiais",
    power: 296924713,
  },
  {
    server: 11060,
    family: "ZENIN",
    power: 227028256,
  },
  {
    server: 11060,
    family: "SYNERGY",
    power: 165682952,
  },
  {
    server: 11060,
    family: "Heaven",
    power: 160561260,
  },
  {
    server: 11060,
    family: "ProPlayes",
    power: 159720663,
  },
  {
    server: 11060,
    family: "Brazucas",
    power: 145287320,
  },
  {
    server: 11060,
    family: "cogu_sangrento",
    power: 141906442,
  },
  {
    server: 11061,
    family: "SHADOW",
    power: 1215900486,
  },
  {
    server: 11061,
    family: "TheFriends",
    power: 1033155021,
  },
  {
    server: 11061,
    family: "OsLendários",
    power: 466983369,
  },
  {
    server: 11061,
    family: "BRAZUCA",
    power: 195123047,
  },
  {
    server: 11061,
    family: "LegendMushBr",
    power: 182171791,
  },
  {
    server: 11061,
    family: "TRUPE༒FANTASMA",
    power: 149105250,
  },
  {
    server: 11061,
    family: "tropadocalvo",
    power: 124020209,
  },
  {
    server: 11061,
    family: "NewGuild",
    power: 118451358,
  },
  {
    server: 11061,
    family: "OsMacetaFirme",
    power: 114495398,
  },
  {
    server: 11061,
    family: "DARKSiHDE",
    power: 33372100,
  },
  {
    server: 11062,
    family: "CAFEÉBOM",
    power: 1131928686,
  },
  {
    server: 11062,
    family: "Akatsuki",
    power: 789102294,
  },
  {
    server: 11062,
    family: "Massacre",
    power: 441057368,
  },
  {
    server: 11062,
    family: "Armagedon",
    power: 346457696,
  },
  {
    server: 11062,
    family: "Brasileiros",
    power: 249908732,
  },
  {
    server: 11062,
    family: "Brasil",
    power: 185301953,
  },
  {
    server: 11062,
    family: "Venom",
    power: 150770745,
  },
  {
    server: 11062,
    family: "BRAZIL",
    power: 150330534,
  },
  {
    server: 11062,
    family: "SHORYUKEN",
    power: 102817693,
  },
  {
    server: 11062,
    family: "NinjaTurtles",
    power: 80541977,
  },
  {
    server: 11063,
    family: "𝐆𝐡𝐨𝐬𝐭𝐬",
    power: 1205450914,
  },
  {
    server: 11063,
    family: "Elites",
    power: 363880544,
  },
  {
    server: 11063,
    family: "Demacia",
    power: 340699300,
  },
  {
    server: 11063,
    family: "PeakyBlinders",
    power: 309238524,
  },
  {
    server: 11063,
    family: "DemonSlayer",
    power: 213996306,
  },
  {
    server: 11063,
    family: "BRBAZUKA",
    power: 188495676,
  },
  {
    server: 11063,
    family: "Império",
    power: 186267329,
  },
  {
    server: 11063,
    family: "DarkSiderz",
    power: 180927373,
  },
  {
    server: 11063,
    family: "MG",
    power: 160303966,
  },
  {
    server: 11063,
    family: "PAPA_NOOB",
    power: 116411096,
  },
  {
    server: 11064,
    family: "WORLD",
    power: 1485348108,
  },
  {
    server: 11064,
    family: "NewAge",
    power: 769405556,
  },
  {
    server: 11064,
    family: "Mushroow",
    power: 373189204,
  },
  {
    server: 11064,
    family: "ClanUchiha",
    power: 304818463,
  },
  {
    server: 11064,
    family: "Capivara",
    power: 304005662,
  },
  {
    server: 11064,
    family: "BRASILBR",
    power: 244638004,
  },
  {
    server: 11064,
    family: "Psyco",
    power: 219985531,
  },
  {
    server: 11064,
    family: "MOICANOS",
    power: 180936446,
  },
  {
    server: 11064,
    family: "LEGIÃO",
    power: 138445415,
  },
  {
    server: 11064,
    family: "BRASIL",
    power: 135951768,
  },
  {
    server: 11065,
    family: "Brotherhood",
    power: 1624079806,
  },
  {
    server: 11065,
    family: "Brotherhoodᴬᶜʸ",
    power: 541340057,
  },
  {
    server: 11065,
    family: "BUTECO",
    power: 532169912,
  },
  {
    server: 11065,
    family: "BLITZ",
    power: 324606009,
  },
  {
    server: 11065,
    family: "magnatas",
    power: 263682900,
  },
  {
    server: 11065,
    family: "PAMSAS_157",
    power: 221275753,
  },
  {
    server: 11065,
    family: "DRAGONBALL",
    power: 203773823,
  },
  {
    server: 11065,
    family: "Wakanda",
    power: 202868203,
  },
  {
    server: 11065,
    family: "JAGATA",
    power: 150857958,
  },
  {
    server: 11065,
    family: "Brasil",
    power: 142466104,
  },
  {
    server: 11066,
    family: "Abyss",
    power: 1454652679,
  },
  {
    server: 11066,
    family: "TeamBrasil",
    power: 434222004,
  },
  {
    server: 11066,
    family: "HEINEKEN",
    power: 407450118,
  },
  {
    server: 11066,
    family: "Dragões",
    power: 258308151,
  },
  {
    server: 11066,
    family: "RAGNAROK",
    power: 241182962,
  },
  {
    server: 11066,
    family: "Cogumelitos",
    power: 169630718,
  },
  {
    server: 11066,
    family: "ClanUchiha",
    power: 165425009,
  },
  {
    server: 11066,
    family: "coguland",
    power: 155319658,
  },
  {
    server: 11066,
    family: "kohaku",
    power: 134540531,
  },
  {
    server: 11066,
    family: "cogulindos",
    power: 130505440,
  },
  {
    server: 11067,
    family: "ALIANÇA TX",
    power: 1535294574,
  },
  {
    server: 11067,
    family: "ACADEMY_TX",
    power: 508112879,
  },
  {
    server: 11067,
    family: "deathwalker",
    power: 422761981,
  },
  {
    server: 11067,
    family: "GOHST",
    power: 408241074,
  },
  {
    server: 11067,
    family: "MUSHROOM",
    power: 335798414,
  },
  {
    server: 11067,
    family: "Playlandia",
    power: 267022259,
  },
  {
    server: 11067,
    family: "LaCotte",
    power: 246248653,
  },
  {
    server: 11067,
    family: "OverPower",
    power: 244807382,
  },
  {
    server: 11067,
    family: "CasaDoPapai",
    power: 204251374,
  },
  {
    server: 11067,
    family: "TOPBRASIL",
    power: 140142369,
  },
  {
    server: 11068,
    family: "BRAZUKAS",
    power: 1498772324,
  },
  {
    server: 11068,
    family: "KILLERS",
    power: 518364629,
  },
  {
    server: 11068,
    family: "BRASILWAR",
    power: 318193705,
  },
  {
    server: 11068,
    family: "FREEDOM",
    power: 302589190,
  },
  {
    server: 11068,
    family: "OsBraziukas",
    power: 285674887,
  },
  {
    server: 11068,
    family: "Sunlight",
    power: 277243509,
  },
  {
    server: 11068,
    family: "morte",
    power: 241563980,
  },
  {
    server: 11068,
    family: "mtfrtatamrt",
    power: 125085027,
  },
  {
    server: 11068,
    family: "Vikings",
    power: 113986470,
  },
  {
    server: 11068,
    family: "LOSTBLU",
    power: 110055213,
  },
  {
    server: 11069,
    family: "BlackBulls",
    power: 1407626448,
  },
  {
    server: 11069,
    family: "Hellsing",
    power: 671576897,
  },
  {
    server: 11069,
    family: "APEXBRASIL",
    power: 325544492,
  },
  {
    server: 11069,
    family: "ILLUMINATIS",
    power: 258511189,
  },
  {
    server: 11069,
    family: "OnePiece",
    power: 215460480,
  },
  {
    server: 11069,
    family: "americangods",
    power: 150634949,
  },
  {
    server: 11069,
    family: "Ningt",
    power: 150619942,
  },
  {
    server: 11069,
    family: "macaco■atômico",
    power: 138035817,
  },
  {
    server: 11069,
    family: "Cletoniodus",
    power: 121795150,
  },
  {
    server: 11069,
    family: "The_Brazil",
    power: 108340652,
  },
  {
    server: 11070,
    family: "FamíliaBR",
    power: 1491639845,
  },
  {
    server: 11070,
    family: "AcademyBR",
    power: 519617812,
  },
  {
    server: 11070,
    family: "LENDARIOS",
    power: 353469849,
  },
  {
    server: 11070,
    family: "YAKUZA",
    power: 339197149,
  },
  {
    server: 11070,
    family: "lovecats",
    power: 319263690,
  },
  {
    server: 11070,
    family: "Para_o_futuro",
    power: 250265002,
  },
  {
    server: 11070,
    family: "RAU4I",
    power: 187916793,
  },
  {
    server: 11070,
    family: "champignons",
    power: 176192421,
  },
  {
    server: 11070,
    family: "Kings",
    power: 101771785,
  },
  {
    server: 11070,
    family: "imortais",
    power: 95116975,
  },
  {
    server: 11071,
    family: "Alcateia",
    power: 1420185029,
  },
  {
    server: 11071,
    family: "Goetia",
    power: 1365791418,
  },
  {
    server: 11071,
    family: "Akatsuki",
    power: 446113556,
  },
  {
    server: 11071,
    family: "Alucinógenos",
    power: 347520963,
  },
  {
    server: 11071,
    family: "LordsBrasil",
    power: 273698333,
  },
  {
    server: 11071,
    family: "FAMILIABR",
    power: 258134225,
  },
  {
    server: 11071,
    family: "fafnir",
    power: 224386851,
  },
  {
    server: 11071,
    family: "imperadores",
    power: 192689430,
  },
  {
    server: 11071,
    family: "私は強いbr",
    power: 144802801,
  },
  {
    server: 11071,
    family: "NAMEK",
    power: 130966751,
  },
  {
    server: 11072,
    family: "Winx  Club",
    power: 1516206154,
  },
  {
    server: 11072,
    family: "Revolution",
    power: 844542477,
  },
  {
    server: 11072,
    family: "imortais",
    power: 374110131,
  },
  {
    server: 11072,
    family: "SANGUINÁRIOS",
    power: 327018033,
  },
  {
    server: 11072,
    family: "LIBERTY",
    power: 274814767,
  },
  {
    server: 11072,
    family: "WolfgangBR",
    power: 249785987,
  },
  {
    server: 11072,
    family: "Neo",
    power: 187013303,
  },
  {
    server: 11072,
    family: "_SECRETS_",
    power: 184360511,
  },
  {
    server: 11072,
    family: "Bandodofalcão",
    power: 152809018,
  },
  {
    server: 11072,
    family: "TavolaRedonda",
    power: 151745141,
  },
  {
    server: 11073,
    family: "FimoseDragons",
    power: 1590532282,
  },
  {
    server: 11073,
    family: "Valhalla",
    power: 700092204,
  },
  {
    server: 11073,
    family: "BØPË",
    power: 538700490,
  },
  {
    server: 11073,
    family: "Brasileirão",
    power: 380334234,
  },
  {
    server: 11073,
    family: "TimeFlash",
    power: 290952716,
  },
  {
    server: 11073,
    family: "Zed",
    power: 277233098,
  },
  {
    server: 11073,
    family: "ArcanjosBr",
    power: 252631921,
  },
  {
    server: 11073,
    family: "ghosts44444",
    power: 182120040,
  },
  {
    server: 11073,
    family: "GARRA",
    power: 170155099,
  },
  {
    server: 11073,
    family: "KAMIKAZE",
    power: 140221013,
  },
  {
    server: 11074,
    family: "°𝔉𝔲𝔰𝔦𝔬𝔫",
    power: 1607123201,
  },
  {
    server: 11074,
    family: "caramelBR",
    power: 627614648,
  },
  {
    server: 11074,
    family: "AKATSUKI",
    power: 598847631,
  },
  {
    server: 11074,
    family: "Lucky",
    power: 332043222,
  },
  {
    server: 11074,
    family: "TheKings",
    power: 267190042,
  },
  {
    server: 11074,
    family: "Apóstolos",
    power: 193695728,
  },
  {
    server: 11074,
    family: "ʲʲᵏ",
    power: 167088177,
  },
  {
    server: 11074,
    family: "₲hs_tté",
    power: 125003221,
  },
  {
    server: 11074,
    family: "Cultoas8",
    power: 115791099,
  },
  {
    server: 11074,
    family: "Anarquia",
    power: 104489527,
  },
  {
    server: 11075,
    family: "Olimpo",
    power: 1213253861,
  },
  {
    server: 11075,
    family: "Coveiros",
    power: 1117806697,
  },
  {
    server: 11075,
    family: "Oxidoido",
    power: 399800548,
  },
  {
    server: 11075,
    family: "AmigosBR",
    power: 268579834,
  },
  {
    server: 11075,
    family: "DesmondVazio",
    power: 255650370,
  },
  {
    server: 11075,
    family: "WOW",
    power: 239194396,
  },
  {
    server: 11075,
    family: "ômega",
    power: 195900548,
  },
  {
    server: 11075,
    family: "GM",
    power: 178708102,
  },
  {
    server: 11075,
    family: "CRONOS",
    power: 160201797,
  },
  {
    server: 11075,
    family: "BRASIL",
    power: 148557578,
  },
  {
    server: 11076,
    family: "BHZ",
    power: 1561905072,
  },
  {
    server: 11076,
    family: "Anarkia99",
    power: 1241003080,
  },
  {
    server: 11076,
    family: "BrasilLegend",
    power: 423455913,
  },
  {
    server: 11076,
    family: "BRASIL",
    power: 376492841,
  },
  {
    server: 11076,
    family: "BrasilOnLine",
    power: 350320396,
  },
  {
    server: 11076,
    family: "ᙇLIBERTY",
    power: 266845438,
  },
  {
    server: 11076,
    family: "AFalangeImorta",
    power: 255195144,
  },
  {
    server: 11076,
    family: "Lordsbr",
    power: 224395862,
  },
  {
    server: 11076,
    family: "ReinoDoHaxixe",
    power: 183251677,
  },
  {
    server: 11076,
    family: "demons",
    power: 109099456,
  },
  {
    server: 11077,
    family: "ASGARD",
    power: 1649328610,
  },
  {
    server: 11077,
    family: "TRIBO",
    power: 923033732,
  },
  {
    server: 11077,
    family: "Brasileiros",
    power: 405170192,
  },
  {
    server: 11077,
    family: "KonoSuba",
    power: 375914259,
  },
  {
    server: 11077,
    family: "Nosbrabos",
    power: 355227400,
  },
  {
    server: 11077,
    family: "brasukas",
    power: 316870621,
  },
  {
    server: 11077,
    family: "jolieblack",
    power: 308587650,
  },
  {
    server: 11077,
    family: "AKTSUKI",
    power: 205033775,
  },
  {
    server: 11077,
    family: "Black_Monkey",
    power: 188569009,
  },
  {
    server: 11077,
    family: "ENYGMA",
    power: 178025251,
  },
  {
    server: 11078,
    family: "Tempest",
    power: 1518091573,
  },
  {
    server: 11078,
    family: "TheBest",
    power: 1166290425,
  },
  {
    server: 11078,
    family: "BrasilBR",
    power: 436079201,
  },
  {
    server: 11078,
    family: "IMPÉRIO",
    power: 330541601,
  },
  {
    server: 11078,
    family: "Imparaveis",
    power: 327898478,
  },
  {
    server: 11078,
    family: "CDM",
    power: 269903133,
  },
  {
    server: 11078,
    family: "ELITEㅤBR",
    power: 260881161,
  },
  {
    server: 11078,
    family: "Overlord",
    power: 192743076,
  },
  {
    server: 11078,
    family: "God_Of_Fungus",
    power: 148395535,
  },
  {
    server: 11078,
    family: "CalacaCatrina",
    power: 133029093,
  },
  {
    server: 11079,
    family: "IMPÉRIOS",
    power: 1480732867,
  },
  {
    server: 11079,
    family: "LogHorizon",
    power: 594981356,
  },
  {
    server: 11079,
    family: "SkyofStars",
    power: 407272059,
  },
  {
    server: 11079,
    family: "PsyTrance",
    power: 309131245,
  },
  {
    server: 11079,
    family: "SpartansBR",
    power: 259252184,
  },
  {
    server: 11079,
    family: "AKATSUKI",
    power: 233552562,
  },
  {
    server: 11079,
    family: "FLUXO",
    power: 190277318,
  },
  {
    server: 11079,
    family: "ArrowKillers",
    power: 182499224,
  },
  {
    server: 11079,
    family: "ElementFire",
    power: 180347255,
  },
  {
    server: 11079,
    family: "Brasil",
    power: 150200312,
  },
  {
    server: 11080,
    family: "MONSTERS",
    power: 1208055658,
  },
  {
    server: 11080,
    family: "JujutsuKaisen",
    power: 1161485059,
  },
  {
    server: 11080,
    family: "LendariosBR",
    power: 352625321,
  },
  {
    server: 11080,
    family: "OVERLORD",
    power: 322534008,
  },
  {
    server: 11080,
    family: "Valhalla_BR",
    power: 295164387,
  },
  {
    server: 11080,
    family: "TheKillers",
    power: 290418379,
  },
  {
    server: 11080,
    family: "HELL",
    power: 288299411,
  },
  {
    server: 11080,
    family: "PARADOXXX",
    power: 216006384,
  },
  {
    server: 11080,
    family: "KnightsBr",
    power: 170429309,
  },
  {
    server: 11080,
    family: "wolfpackbr",
    power: 43707176,
  },
  {
    server: 11081,
    family: "ChapéudePalha",
    power: 1353846456,
  },
  {
    server: 11081,
    family: "LegendsBR",
    power: 917416979,
  },
  {
    server: 11081,
    family: "GUMELANDIA",
    power: 342550961,
  },
  {
    server: 11081,
    family: "BRASIL",
    power: 338798552,
  },
  {
    server: 11081,
    family: "BANDO_DO_LUFFY",
    power: 316763654,
  },
  {
    server: 11081,
    family: "Tundra",
    power: 204589602,
  },
  {
    server: 11081,
    family: "jgdsvb",
    power: 152693756,
  },
  {
    server: 11081,
    family: "Phoenix",
    power: 118144662,
  },
  {
    server: 11081,
    family: "ÁREA51",
    power: 84654168,
  },
  {
    server: 11081,
    family: "Lunáticos",
    power: 82999784,
  },
  {
    server: 11082,
    family: "AKATSUKI",
    power: 1422029029,
  },
  {
    server: 11082,
    family: "Sentinels",
    power: 1260097375,
  },
  {
    server: 11082,
    family: "PowerOfFungis",
    power: 292266682,
  },
  {
    server: 11082,
    family: "ShowTime",
    power: 284122662,
  },
  {
    server: 11082,
    family: "AKATSUKI_2",
    power: 250378320,
  },
  {
    server: 11082,
    family: "Remanescente",
    power: 203813361,
  },
  {
    server: 11082,
    family: "Brasileirinhas",
    power: 181198109,
  },
  {
    server: 11082,
    family: "Bigulos",
    power: 157833426,
  },
  {
    server: 11082,
    family: "LORD",
    power: 132980078,
  },
  {
    server: 11082,
    family: "Star",
    power: 123561288,
  },
  {
    server: 11083,
    family: "DrakenGods",
    power: 1646737231,
  },
  {
    server: 11083,
    family: "ELITEBR",
    power: 983084678,
  },
  {
    server: 11083,
    family: "Sunshine",
    power: 378185451,
  },
  {
    server: 11083,
    family: "BANDO°DO°LUFFY",
    power: 255454597,
  },
  {
    server: 11083,
    family: "Ceifadores",
    power: 211236939,
  },
  {
    server: 11083,
    family: "OzBaTuTiNhAs",
    power: 207687359,
  },
  {
    server: 11083,
    family: "ᴅɪsᴛᴜʀʙᴇᴅ",
    power: 191316759,
  },
  {
    server: 11083,
    family: "Clãcaramelo",
    power: 177777842,
  },
  {
    server: 11083,
    family: "011_E_O_DDD",
    power: 146187551,
  },
  {
    server: 11083,
    family: "Hashiras",
    power: 133586971,
  },
  {
    server: 11084,
    family: "Bailarinas",
    power: 1556384107,
  },
  {
    server: 11084,
    family: "TheAvengers",
    power: 797584375,
  },
  {
    server: 11084,
    family: "firstline",
    power: 356787525,
  },
  {
    server: 11084,
    family: "ClãChupaGrelo",
    power: 278201472,
  },
  {
    server: 11084,
    family: "BangBang",
    power: 224496157,
  },
  {
    server: 11084,
    family: "iwnl",
    power: 201921294,
  },
  {
    server: 11084,
    family: "cogumelos",
    power: 192553135,
  },
  {
    server: 11084,
    family: "TheKillers",
    power: 191729215,
  },
  {
    server: 11084,
    family: "Fairy tail",
    power: 176625694,
  },
  {
    server: 11084,
    family: "RAGNAROK",
    power: 176616710,
  },
  {
    server: 11085,
    family: "Valhalla",
    power: 1611090954,
  },
  {
    server: 11085,
    family: "SwordArtOnline",
    power: 855569510,
  },
  {
    server: 11085,
    family: "PROHERD",
    power: 346067058,
  },
  {
    server: 11085,
    family: "Katsuki",
    power: 287471230,
  },
  {
    server: 11085,
    family: "DragonFlyDemon",
    power: 263927258,
  },
  {
    server: 11085,
    family: "𝕯𝖆𝖗𝖐𝕱𝖔𝖝",
    power: 238613473,
  },
  {
    server: 11085,
    family: "Corinthians",
    power: 173812110,
  },
  {
    server: 11085,
    family: "RLKCHAMPS",
    power: 129113498,
  },
  {
    server: 11085,
    family: "RankBrasil",
    power: 90662434,
  },
  {
    server: 11085,
    family: "tropadafaiytai",
    power: 83757419,
  },
  {
    server: 11086,
    family: "SantoGraal",
    power: 1199564680,
  },
  {
    server: 11086,
    family: "Brazino",
    power: 822268930,
  },
  {
    server: 11086,
    family: "KINGS",
    power: 390267319,
  },
  {
    server: 11086,
    family: "WarLords",
    power: 250800356,
  },
  {
    server: 11086,
    family: "Technoblade",
    power: 217199640,
  },
  {
    server: 11086,
    family: "vitor",
    power: 209002464,
  },
  {
    server: 11086,
    family: "TheBrs",
    power: 187156682,
  },
  {
    server: 11086,
    family: "RAGNAROKBR",
    power: 167148359,
  },
  {
    server: 11086,
    family: "Tóxicos",
    power: 159674970,
  },
  {
    server: 11086,
    family: "WhiteTiger",
    power: 157722478,
  },
  {
    server: 11087,
    family: "ImpérioBR",
    power: 1522181109,
  },
  {
    server: 11087,
    family: "xXSKLxSPRXx",
    power: 1156658931,
  },
  {
    server: 11087,
    family: "Shadowhunters",
    power: 456552148,
  },
  {
    server: 11087,
    family: "HiTkill",
    power: 347774010,
  },
  {
    server: 11087,
    family: "brasildagurra",
    power: 256217639,
  },
  {
    server: 11087,
    family: "Shalke04",
    power: 246192958,
  },
  {
    server: 11087,
    family: "Falcons",
    power: 234367243,
  },
  {
    server: 11087,
    family: "NAZARICK",
    power: 207409455,
  },
  {
    server: 11087,
    family: "xXSKLxSPRXxII",
    power: 203114269,
  },
  {
    server: 11087,
    family: "DOMINADORES",
    power: 195684742,
  },
  {
    server: 11088,
    family: "Destruidores",
    power: 1488408099,
  },
  {
    server: 11088,
    family: "Hazit",
    power: 503457497,
  },
  {
    server: 11088,
    family: "BrazucaBR",
    power: 407269770,
  },
  {
    server: 11088,
    family: "KLL",
    power: 300853966,
  },
  {
    server: 11088,
    family: "lsad",
    power: 243680997,
  },
  {
    server: 11088,
    family: "BRt°BrasilTeam",
    power: 223224644,
  },
  {
    server: 11088,
    family: "BRASIL",
    power: 170169039,
  },
  {
    server: 11088,
    family: "xGOKU",
    power: 153400744,
  },
  {
    server: 11088,
    family: "MARRENTOS",
    power: 146677848,
  },
  {
    server: 11088,
    family: "Legendaries",
    power: 142241801,
  },
  {
    server: 11089,
    family: "NewØrder",
    power: 1619240913,
  },
  {
    server: 11089,
    family: "KAMIKAZE",
    power: 380351933,
  },
  {
    server: 11089,
    family: "SUN",
    power: 376048163,
  },
  {
    server: 11089,
    family: "darknight35",
    power: 293586801,
  },
  {
    server: 11089,
    family: "dcgyh",
    power: 248283285,
  },
  {
    server: 11089,
    family: "Storm",
    power: 221648579,
  },
  {
    server: 11089,
    family: "YZX",
    power: 181210767,
  },
  {
    server: 11089,
    family: "VALHALLA",
    power: 174917458,
  },
  {
    server: 11089,
    family: "MASTERS",
    power: 151552319,
  },
  {
    server: 11089,
    family: "darkwold",
    power: 142471491,
  },
  {
    server: 11090,
    family: "TheOriginals",
    power: 1282271933,
  },
  {
    server: 11090,
    family: "Deus",
    power: 576144213,
  },
  {
    server: 11090,
    family: "Legendários",
    power: 391930714,
  },
  {
    server: 11090,
    family: "BlackdooG",
    power: 300086583,
  },
  {
    server: 11090,
    family: "PRIMORDIAL",
    power: 249992221,
  },
  {
    server: 11090,
    family: "Marvel²",
    power: 188881319,
  },
  {
    server: 11090,
    family: "anime",
    power: 183940434,
  },
  {
    server: 11090,
    family: "FireKitsunes",
    power: 180980249,
  },
  {
    server: 11090,
    family: "VIEXX",
    power: 164858225,
  },
  {
    server: 11090,
    family: "calcinhapreta",
    power: 153283007,
  },
  {
    server: 11091,
    family: "PARADOXXX",
    power: 1451659533,
  },
  {
    server: 11091,
    family: "Winx",
    power: 728254506,
  },
  {
    server: 11091,
    family: "Ascension",
    power: 344345777,
  },
  {
    server: 11091,
    family: "TryHard",
    power: 276520904,
  },
  {
    server: 11091,
    family: "Hell",
    power: 274914875,
  },
  {
    server: 11091,
    family: "Uchiha",
    power: 195422962,
  },
  {
    server: 11091,
    family: "MiBR",
    power: 162465606,
  },
  {
    server: 11091,
    family: "YAKUZA",
    power: 150593524,
  },
  {
    server: 11091,
    family: "eusabo",
    power: 127996020,
  },
  {
    server: 11091,
    family: "CANETASAZULS",
    power: 87273674,
  },
  {
    server: 11092,
    family: "FusionBR",
    power: 1638154827,
  },
  {
    server: 11092,
    family: "FusionBR²",
    power: 831872249,
  },
  {
    server: 11092,
    family: "Retalhadores",
    power: 404753333,
  },
  {
    server: 11092,
    family: "Brazil",
    power: 254532135,
  },
  {
    server: 11092,
    family: "ArmadaBrᣔᣘᔿ",
    power: 201543832,
  },
  {
    server: 11092,
    family: "OzPintudos",
    power: 197696867,
  },
  {
    server: 11092,
    family: "KingsBR",
    power: 179630032,
  },
  {
    server: 11092,
    family: "APÓSTOLOS",
    power: 173101334,
  },
  {
    server: 11092,
    family: "SHIMEJIS",
    power: 157790944,
  },
  {
    server: 11092,
    family: "Rennegados",
    power: 150790177,
  },
  {
    server: 11093,
    family: "ELITE",
    power: 1445623173,
  },
  {
    server: 11093,
    family: "INFERNO",
    power: 1018030481,
  },
  {
    server: 11093,
    family: "YZX",
    power: 260748746,
  },
  {
    server: 11093,
    family: "Asgard",
    power: 224656666,
  },
  {
    server: 11093,
    family: "Illuminati",
    power: 206223061,
  },
  {
    server: 11093,
    family: "darkmushroom",
    power: 192027059,
  },
  {
    server: 11093,
    family: "Deicidio",
    power: 173773490,
  },
  {
    server: 11093,
    family: "OLÍMPIO",
    power: 134879974,
  },
  {
    server: 11093,
    family: "aturmadofundão",
    power: 115701802,
  },
  {
    server: 11093,
    family: "◥꧁ᴼˢᶜᴿᴵᴬˢ꧂◤",
    power: 83181196,
  },
  {
    server: 11094,
    family: "𝐍𝐞𝐫𝐨",
    power: 1415521517,
  },
  {
    server: 11094,
    family: "MataRind0",
    power: 1210128957,
  },
  {
    server: 11094,
    family: "FAIRY_TAIL",
    power: 396646565,
  },
  {
    server: 11094,
    family: "BR",
    power: 350276845,
  },
  {
    server: 11094,
    family: "LuaMorel",
    power: 280918546,
  },
  {
    server: 11094,
    family: "Utopia",
    power: 190832885,
  },
  {
    server: 11094,
    family: "BRAZUKAS",
    power: 188683741,
  },
  {
    server: 11094,
    family: "GDGGuardioesBr",
    power: 167202851,
  },
  {
    server: 11094,
    family: "YOUTUBERS",
    power: 143571325,
  },
  {
    server: 11094,
    family: "GroveStreet2",
    power: 142071030,
  },
  {
    server: 11095,
    family: "Ragnarök",
    power: 1414389186,
  },
  {
    server: 11095,
    family: "HYDRA",
    power: 1059617388,
  },
  {
    server: 11095,
    family: "BRS",
    power: 335219557,
  },
  {
    server: 11095,
    family: "WinterChaos",
    power: 273631505,
  },
  {
    server: 11095,
    family: "Iniciantes",
    power: 224651674,
  },
  {
    server: 11095,
    family: "CogumelosDoMaL",
    power: 205212826,
  },
  {
    server: 11095,
    family: "Abismo",
    power: 197086238,
  },
  {
    server: 11095,
    family: "Elite",
    power: 174643789,
  },
  {
    server: 11095,
    family: "TEMPLARIOS",
    power: 168383435,
  },
  {
    server: 11095,
    family: "Akatsuki",
    power: 147542795,
  },
  {
    server: 11096,
    family: "InfernoBr",
    power: 1549018006,
  },
  {
    server: 11096,
    family: "LEGO",
    power: 525229030,
  },
  {
    server: 11096,
    family: "Alcatéia",
    power: 375741385,
  },
  {
    server: 11096,
    family: "NokuBrasil",
    power: 316651511,
  },
  {
    server: 11096,
    family: "Hit_Kill",
    power: 275620874,
  },
  {
    server: 11096,
    family: "RANKS",
    power: 251315458,
  },
  {
    server: 11096,
    family: "otakos",
    power: 219665995,
  },
  {
    server: 11096,
    family: "BRASILπ",
    power: 205637439,
  },
  {
    server: 11096,
    family: "Luffy",
    power: 167607921,
  },
  {
    server: 11096,
    family: "BrasilOFC",
    power: 167283702,
  },
  {
    server: 11097,
    family: "Olimpo",
    power: 1470901922,
  },
  {
    server: 11097,
    family: "Dark_Alliance",
    power: 724111449,
  },
  {
    server: 11097,
    family: "Gods_Divisão_2",
    power: 467038870,
  },
  {
    server: 11097,
    family: "Seyfadores",
    power: 348949421,
  },
  {
    server: 11097,
    family: "cogumeloo",
    power: 282860216,
  },
  {
    server: 11097,
    family: "THEBRS",
    power: 154808250,
  },
  {
    server: 11097,
    family: "Naruto",
    power: 100302276,
  },
  {
    server: 11097,
    family: "DIVINOS",
    power: 54129142,
  },
  {
    server: 11097,
    family: "Ninjago",
    power: 44948835,
  },
  {
    server: 11097,
    family: "COGOLOKO2024",
    power: 39096942,
  },
  {
    server: 11098,
    family: "ShroomGang",
    power: 1464687951,
  },
  {
    server: 11098,
    family: "JujutsuKaisen",
    power: 704251157,
  },
  {
    server: 11098,
    family: "TOP1",
    power: 351145758,
  },
  {
    server: 11098,
    family: "LEGENDARY",
    power: 330685136,
  },
  {
    server: 11098,
    family: "SrhungusLqmugu",
    power: 230797205,
  },
  {
    server: 11098,
    family: "ShangriLa",
    power: 174683419,
  },
  {
    server: 11098,
    family: "stoics",
    power: 138494846,
  },
  {
    server: 11098,
    family: "pulse",
    power: 135886766,
  },
  {
    server: 11098,
    family: "LifeInvader",
    power: 131603404,
  },
  {
    server: 11098,
    family: "Galeroso",
    power: 94667706,
  },
  {
    server: 11099,
    family: "ᴼᴾ°OnePiece",
    power: 1399162186,
  },
  {
    server: 11099,
    family: "TROLLS",
    power: 893338715,
  },
  {
    server: 11099,
    family: "bosonaro2026",
    power: 375316541,
  },
  {
    server: 11099,
    family: "VDL",
    power: 293741054,
  },
  {
    server: 11099,
    family: "Valhalla",
    power: 288060829,
  },
  {
    server: 11099,
    family: "The_Dragons",
    power: 221750252,
  },
  {
    server: 11099,
    family: "BRAZINO",
    power: 193192065,
  },
  {
    server: 11099,
    family: "BRGG",
    power: 173828899,
  },
  {
    server: 11099,
    family: "ZUMBILANDIA",
    power: 169214135,
  },
  {
    server: 11099,
    family: "PinkPussy",
    power: 123115668,
  },
  {
    server: 11100,
    family: "Akatsuki",
    power: 1320567310,
  },
  {
    server: 11100,
    family: "KINGS",
    power: 860533902,
  },
  {
    server: 11100,
    family: "BRAZUKAS",
    power: 534481240,
  },
  {
    server: 11100,
    family: "VIPs",
    power: 283476574,
  },
  {
    server: 11100,
    family: "Alucinógenos",
    power: 261567992,
  },
  {
    server: 11100,
    family: "Fudidøs",
    power: 232468862,
  },
  {
    server: 11100,
    family: "Brasil",
    power: 175299251,
  },
  {
    server: 11100,
    family: "Clawthornes",
    power: 174157325,
  },
  {
    server: 11100,
    family: "KINGS魔",
    power: 169260266,
  },
  {
    server: 11100,
    family: "Favelinha",
    power: 158383744,
  },
  {
    server: 11101,
    family: "FÊNIX",
    power: 1579582330,
  },
  {
    server: 11101,
    family: "DARKS",
    power: 671977551,
  },
  {
    server: 11101,
    family: "SANMELOS",
    power: 305906367,
  },
  {
    server: 11101,
    family: "Champignon",
    power: 260845047,
  },
  {
    server: 11101,
    family: "Tops",
    power: 229369265,
  },
  {
    server: 11101,
    family: "TARGARYEN",
    power: 180030438,
  },
  {
    server: 11101,
    family: "Fúrias",
    power: 175286977,
  },
  {
    server: 11101,
    family: "Shinigamis",
    power: 171606212,
  },
  {
    server: 11101,
    family: "cogumelitos",
    power: 152590142,
  },
  {
    server: 11101,
    family: "ARDAL",
    power: 135451564,
  },
  {
    server: 11102,
    family: "Supremacy",
    power: 1511351338,
  },
  {
    server: 11102,
    family: "King_of_shadow",
    power: 586458983,
  },
  {
    server: 11102,
    family: "Demoníacos",
    power: 396556254,
  },
  {
    server: 11102,
    family: "Leveling",
    power: 369077232,
  },
  {
    server: 11102,
    family: "HEINEKEN",
    power: 238119874,
  },
  {
    server: 11102,
    family: "BrZera",
    power: 223876172,
  },
  {
    server: 11102,
    family: "Galácticos",
    power: 221502346,
  },
  {
    server: 11102,
    family: "HTCian",
    power: 197576859,
  },
  {
    server: 11102,
    family: "PODEROSOS",
    power: 168211337,
  },
  {
    server: 11102,
    family: "TopBr",
    power: 155963758,
  },
  {
    server: 11103,
    family: "𝙊𝙡𝙞𝙢𝙥𝙤",
    power: 1524182596,
  },
  {
    server: 11103,
    family: "R𝙰𝙶𝙽𝙰𝚁𝙾k",
    power: 828331098,
  },
  {
    server: 11103,
    family: "limbo",
    power: 287233941,
  },
  {
    server: 11103,
    family: "KDA",
    power: 262053683,
  },
  {
    server: 11103,
    family: "rei_cogumelo",
    power: 212519633,
  },
  {
    server: 11103,
    family: "SOMBRASBR",
    power: 180075345,
  },
  {
    server: 11103,
    family: "CBFbrasil",
    power: 152742764,
  },
  {
    server: 11103,
    family: "LegendMushroom",
    power: 133229851,
  },
  {
    server: 11103,
    family: "LOUDGG",
    power: 120385452,
  },
  {
    server: 11103,
    family: "Evolution",
    power: 98143788,
  },
  {
    server: 11104,
    family: "DarkAngels🪽",
    power: 1401713557,
  },
  {
    server: 11104,
    family: "YAKUZA",
    power: 1157960763,
  },
  {
    server: 11104,
    family: "Dopamina",
    power: 347455673,
  },
  {
    server: 11104,
    family: "KINGS",
    power: 228887924,
  },
  {
    server: 11104,
    family: "FLAMENGO",
    power: 202987292,
  },
  {
    server: 11104,
    family: "OverLords",
    power: 199721522,
  },
  {
    server: 11104,
    family: "imortais",
    power: 159327169,
  },
  {
    server: 11104,
    family: "IммσятαLร",
    power: 155842077,
  },
  {
    server: 11104,
    family: "M€LI∆NT€S",
    power: 137988255,
  },
  {
    server: 11104,
    family: "império",
    power: 127563359,
  },
  {
    server: 11105,
    family: "KRD",
    power: 1452118323,
  },
  {
    server: 11105,
    family: "KRD2",
    power: 726654832,
  },
  {
    server: 11105,
    family: "KRD3",
    power: 645619999,
  },
  {
    server: 11105,
    family: "WOLFGANG",
    power: 375054232,
  },
  {
    server: 11105,
    family: "ELITE",
    power: 309730459,
  },
  {
    server: 11105,
    family: "bosonaroparsp",
    power: 214832013,
  },
  {
    server: 11105,
    family: "dark",
    power: 205614824,
  },
  {
    server: 11105,
    family: "Br",
    power: 197460712,
  },
  {
    server: 11105,
    family: "celetiais",
    power: 166305275,
  },
  {
    server: 11105,
    family: "dragon",
    power: 164762917,
  },
  {
    server: 11106,
    family: "MUGIWARAS",
    power: 1357961298,
  },
  {
    server: 11106,
    family: "InSaNoS",
    power: 1105799719,
  },
  {
    server: 11106,
    family: "OsMercenários",
    power: 416679057,
  },
  {
    server: 11106,
    family: "amanhecer",
    power: 364529800,
  },
  {
    server: 11106,
    family: "FaizueLi",
    power: 219992505,
  },
  {
    server: 11106,
    family: "MARRENTOS",
    power: 206398802,
  },
  {
    server: 11106,
    family: "Destroyers",
    power: 180070332,
  },
  {
    server: 11106,
    family: "Wolfsrudel",
    power: 159491477,
  },
  {
    server: 11106,
    family: "RAGNAROK",
    power: 157165732,
  },
  {
    server: 11106,
    family: "XTREME",
    power: 155523793,
  },
  {
    server: 11107,
    family: "Aesir",
    power: 1634807579,
  },
  {
    server: 11107,
    family: "Aesir²",
    power: 601339326,
  },
  {
    server: 11107,
    family: "ア100NOMEヅ然",
    power: 464091488,
  },
  {
    server: 11107,
    family: "TeamBRASIL",
    power: 423762843,
  },
  {
    server: 11107,
    family: "Imortais",
    power: 229680010,
  },
  {
    server: 11107,
    family: "KINGªDRAGON",
    power: 218472571,
  },
  {
    server: 11107,
    family: "INAXSilva",
    power: 217171980,
  },
  {
    server: 11107,
    family: "saw",
    power: 199930052,
  },
  {
    server: 11107,
    family: "Brazucas_2",
    power: 199462035,
  },
  {
    server: 11107,
    family: "jhegol",
    power: 196699900,
  },
  {
    server: 11108,
    family: "SUPREMACY",
    power: 1439274499,
  },
  {
    server: 11108,
    family: "black_bulls",
    power: 763818293,
  },
  {
    server: 11108,
    family: "IronMaiden",
    power: 378399817,
  },
  {
    server: 11108,
    family: "THE_WARRIORS",
    power: 356713962,
  },
  {
    server: 11108,
    family: "SeaHeros",
    power: 269800020,
  },
  {
    server: 11108,
    family: "Shadow°Garden",
    power: 252259950,
  },
  {
    server: 11108,
    family: "Banana",
    power: 200356874,
  },
  {
    server: 11108,
    family: "Legendários",
    power: 155771915,
  },
  {
    server: 11108,
    family: "A_Liberdade",
    power: 97847225,
  },
  {
    server: 11108,
    family: "BRASIL",
    power: 87394744,
  },
  {
    server: 11109,
    family: "FiatUno",
    power: 1504165144,
  },
  {
    server: 11109,
    family: "LegendsBR",
    power: 665571381,
  },
  {
    server: 11109,
    family: "FT",
    power: 387217973,
  },
  {
    server: 11109,
    family: "Brasileiros",
    power: 374574429,
  },
  {
    server: 11109,
    family: "Líderes",
    power: 320711131,
  },
  {
    server: 11109,
    family: "《AKATSUKI》",
    power: 259318234,
  },
  {
    server: 11109,
    family: "ChapeuDePalha",
    power: 255995271,
  },
  {
    server: 11109,
    family: "Konoha",
    power: 246867137,
  },
  {
    server: 11109,
    family: "saiDaFrente",
    power: 223411394,
  },
  {
    server: 11109,
    family: "TIME_7",
    power: 189491183,
  },
  {
    server: 11110,
    family: "BLACKDRAGONS",
    power: 1509424741,
  },
  {
    server: 11110,
    family: "EnergyMonster",
    power: 608986078,
  },
  {
    server: 11110,
    family: "BloodRoots",
    power: 458097569,
  },
  {
    server: 11110,
    family: "Overlords",
    power: 400150555,
  },
  {
    server: 11110,
    family: "MONARCAS",
    power: 276009881,
  },
  {
    server: 11110,
    family: "OsMaisFortes",
    power: 228365578,
  },
  {
    server: 11110,
    family: "CRF_FLAMENGO",
    power: 209531103,
  },
  {
    server: 11110,
    family: "FLAMENGUISTAS",
    power: 202215471,
  },
  {
    server: 11110,
    family: "INTZ",
    power: 197509004,
  },
  {
    server: 11110,
    family: "TropaDoSemAmor",
    power: 187202591,
  },
  {
    server: 11111,
    family: "CARAMELOS",
    power: 1405588152,
  },
  {
    server: 11111,
    family: "𝘚𝘖𝘓𝘈𝘐𝘙𝘌",
    power: 440077643,
  },
  {
    server: 11111,
    family: "DODGERS",
    power: 298971313,
  },
  {
    server: 11111,
    family: "Heaven",
    power: 298109091,
  },
  {
    server: 11111,
    family: "Sayajins",
    power: 290861090,
  },
  {
    server: 11111,
    family: "Desafiantes",
    power: 243838843,
  },
  {
    server: 11111,
    family: "TourosNegros",
    power: 232955597,
  },
  {
    server: 11111,
    family: "ElementFire",
    power: 158237494,
  },
  {
    server: 11111,
    family: "GodsOfWar",
    power: 150042144,
  },
  {
    server: 11111,
    family: "DemonsKing",
    power: 142358850,
  },
  {
    server: 11112,
    family: "BRASIL",
    power: 1402004181,
  },
  {
    server: 11112,
    family: "PsilocybeClub",
    power: 737442857,
  },
  {
    server: 11112,
    family: "LOVEKILLER",
    power: 318334153,
  },
  {
    server: 11112,
    family: "Valhalla",
    power: 291118935,
  },
  {
    server: 11112,
    family: "forçaportugal",
    power: 252841971,
  },
  {
    server: 11112,
    family: "DEMONIOS_PT",
    power: 230729892,
  },
  {
    server: 11112,
    family: "OS_PSICOS",
    power: 179442389,
  },
  {
    server: 11112,
    family: "FLUXO_BR",
    power: 173213676,
  },
  {
    server: 11112,
    family: "GUMELANDIA",
    power: 169403235,
  },
  {
    server: 11112,
    family: "Force_Brasil",
    power: 117023257,
  },
  {
    server: 11113,
    family: "UNION",
    power: 1513374951,
  },
  {
    server: 11113,
    family: "ShadowGarden",
    power: 677321779,
  },
  {
    server: 11113,
    family: "Nazarick",
    power: 386541873,
  },
  {
    server: 11113,
    family: "YZX",
    power: 339371379,
  },
  {
    server: 11113,
    family: "death",
    power: 239416018,
  },
  {
    server: 11113,
    family: "OlhaOTop1",
    power: 212105659,
  },
  {
    server: 11113,
    family: "Imperial",
    power: 188027684,
  },
  {
    server: 11113,
    family: "LifeInvader",
    power: 185343420,
  },
  {
    server: 11113,
    family: "IMPERIOiNSANO",
    power: 147033859,
  },
  {
    server: 11113,
    family: "MushBR",
    power: 138247794,
  },
  {
    server: 11114,
    family: "LEGENDS",
    power: 1348542920,
  },
  {
    server: 11114,
    family: "Konoha",
    power: 859330007,
  },
  {
    server: 11114,
    family: "Nightmares_br",
    power: 435574059,
  },
  {
    server: 11114,
    family: "TrupeFantasma",
    power: 333380049,
  },
  {
    server: 11114,
    family: "RAGNAROK",
    power: 291537203,
  },
  {
    server: 11114,
    family: "BrazilianTeam",
    power: 285273453,
  },
  {
    server: 11114,
    family: "RED_DRAGONS",
    power: 271493662,
  },
  {
    server: 11114,
    family: "꧁ঔৣARCANJOS",
    power: 202404380,
  },
  {
    server: 11114,
    family: "TeamOP",
    power: 186758434,
  },
  {
    server: 11114,
    family: "LEVEL_ONE",
    power: 173338530,
  },
  {
    server: 11115,
    family: "Valhalla",
    power: 1508984557,
  },
  {
    server: 11115,
    family: "Valhalla2",
    power: 618962411,
  },
  {
    server: 11115,
    family: "𓂀ƦЄƝЄƓƛƊƠƧ𓂀",
    power: 471825896,
  },
  {
    server: 11115,
    family: "WarLords",
    power: 318329910,
  },
  {
    server: 11115,
    family: "overlord",
    power: 291910656,
  },
  {
    server: 11115,
    family: "Os_Gumelos",
    power: 274872760,
  },
  {
    server: 11115,
    family: "NoLiKe",
    power: 253621670,
  },
  {
    server: 11115,
    family: "Gl0ry",
    power: 243947795,
  },
  {
    server: 11115,
    family: "Alasca",
    power: 242542921,
  },
  {
    server: 11115,
    family: "SHADOW_CULT",
    power: 237911673,
  },
  {
    server: 11116,
    family: "PHTeam",
    power: 1602230150,
  },
  {
    server: 11116,
    family: "THCOGUMELO",
    power: 595409758,
  },
  {
    server: 11116,
    family: "WNX",
    power: 502108365,
  },
  {
    server: 11116,
    family: "Akatsuki",
    power: 302383995,
  },
  {
    server: 11116,
    family: "AtivosBR",
    power: 288830995,
  },
  {
    server: 11116,
    family: "NEKROZ",
    power: 188900871,
  },
  {
    server: 11116,
    family: "xvideos",
    power: 183162264,
  },
  {
    server: 11116,
    family: "CearaBr",
    power: 166860658,
  },
  {
    server: 11116,
    family: "GUERREIRUS",
    power: 152849522,
  },
  {
    server: 11116,
    family: "Vikings",
    power: 151260733,
  },
  {
    server: 11117,
    family: "EL_SUICIDAS",
    power: 1453244487,
  },
  {
    server: 11117,
    family: "IMBATÍVEIS",
    power: 915059877,
  },
  {
    server: 11117,
    family: "BrasilBR",
    power: 270500505,
  },
  {
    server: 11117,
    family: "AurumImperium",
    power: 238114036,
  },
  {
    server: 11117,
    family: "AGL_SCORPION",
    power: 221736551,
  },
  {
    server: 11117,
    family: "Akatsuki",
    power: 217616069,
  },
  {
    server: 11117,
    family: "BRAZUKAS",
    power: 210110964,
  },
  {
    server: 11117,
    family: "Supremacia_DVA",
    power: 141336478,
  },
  {
    server: 11117,
    family: "OS_VICIADOS",
    power: 134845722,
  },
  {
    server: 11117,
    family: "oiiii",
    power: 121933145,
  },
  {
    server: 11118,
    family: "ALPHAᶜᴮ",
    power: 1378026159,
  },
  {
    server: 11118,
    family: "kalvos",
    power: 473437728,
  },
  {
    server: 11118,
    family: "KillingSpree",
    power: 395084516,
  },
  {
    server: 11118,
    family: "VIKINGS",
    power: 362383685,
  },
  {
    server: 11118,
    family: "DarkAngels",
    power: 329125189,
  },
  {
    server: 11118,
    family: "NETWORK",
    power: 306555297,
  },
  {
    server: 11118,
    family: "RENEGADOS",
    power: 287925181,
  },
  {
    server: 11118,
    family: "Royalty",
    power: 259510792,
  },
  {
    server: 11118,
    family: "LedasCogumelos",
    power: 172693177,
  },
  {
    server: 11118,
    family: "BRASIL69",
    power: 167283712,
  },
  {
    server: 11119,
    family: "GameØver",
    power: 1320819695,
  },
  {
    server: 11119,
    family: "DELICIAS",
    power: 1196888058,
  },
  {
    server: 11119,
    family: "CogMagic",
    power: 390684303,
  },
  {
    server: 11119,
    family: "Dragons",
    power: 266094059,
  },
  {
    server: 11119,
    family: "Humildes",
    power: 258820058,
  },
  {
    server: 11119,
    family: "LOUDgg",
    power: 196581979,
  },
  {
    server: 11119,
    family: "Buyatchaca",
    power: 182358563,
  },
  {
    server: 11119,
    family: "LADRÃO",
    power: 165456462,
  },
  {
    server: 11119,
    family: "Brazuca",
    power: 158706920,
  },
  {
    server: 11119,
    family: "Falidos",
    power: 148397539,
  },
  {
    server: 11120,
    family: "Olimpo",
    power: 1191925950,
  },
  {
    server: 11120,
    family: "X0T4",
    power: 963390156,
  },
  {
    server: 11120,
    family: "Brasileirinhos",
    power: 318426122,
  },
  {
    server: 11120,
    family: "akatsuki",
    power: 304291681,
  },
  {
    server: 11120,
    family: "BRAZUKA",
    power: 288483220,
  },
  {
    server: 11120,
    family: "MadeinBrazil",
    power: 281085197,
  },
  {
    server: 11120,
    family: "TOP1",
    power: 246371280,
  },
  {
    server: 11120,
    family: "NNBoys®",
    power: 222453269,
  },
  {
    server: 11120,
    family: "ou",
    power: 206019353,
  },
  {
    server: 11120,
    family: "FairyTail",
    power: 170608374,
  },
  {
    server: 11121,
    family: "NewOrder",
    power: 1304226565,
  },
  {
    server: 11121,
    family: "MadeInBrasil",
    power: 1199684834,
  },
  {
    server: 11121,
    family: "Legend_OF_Mush",
    power: 335744007,
  },
  {
    server: 11121,
    family: "ALCATÉIA_ALFA",
    power: 290559318,
  },
  {
    server: 11121,
    family: "HellsAngels",
    power: 208221748,
  },
  {
    server: 11121,
    family: "REVOADA",
    power: 206270781,
  },
  {
    server: 11121,
    family: "TROYA",
    power: 182383542,
  },
  {
    server: 11121,
    family: "RAPOSA",
    power: 163314897,
  },
  {
    server: 11121,
    family: "tk_king",
    power: 120892353,
  },
  {
    server: 11121,
    family: "nikolas",
    power: 116853159,
  },
  {
    server: 11122,
    family: "NEMESIS",
    power: 1110505922,
  },
  {
    server: 11122,
    family: "VIKINGS",
    power: 933379108,
  },
  {
    server: 11122,
    family: "Elite_BR",
    power: 550891800,
  },
  {
    server: 11122,
    family: "AKATSUKI_BR",
    power: 415705120,
  },
  {
    server: 11122,
    family: "PALERMAS",
    power: 268378030,
  },
  {
    server: 11122,
    family: "TheMaestros",
    power: 204244219,
  },
  {
    server: 11122,
    family: "NEVER",
    power: 198429300,
  },
  {
    server: 11122,
    family: "FLUXO",
    power: 184402505,
  },
  {
    server: 11122,
    family: "AHJIN",
    power: 173454443,
  },
  {
    server: 11122,
    family: "Minato",
    power: 171695084,
  },
  {
    server: 11123,
    family: "AHJIN",
    power: 1283188721,
  },
  {
    server: 11123,
    family: "SSS",
    power: 1078126077,
  },
  {
    server: 11123,
    family: "OnePiece",
    power: 392683649,
  },
  {
    server: 11123,
    family: "INVICTOS",
    power: 382888126,
  },
  {
    server: 11123,
    family: "LOWFI",
    power: 342669695,
  },
  {
    server: 11123,
    family: "MANIKOMIO",
    power: 187411455,
  },
  {
    server: 11123,
    family: "MÁFIA",
    power: 168776908,
  },
  {
    server: 11123,
    family: "ÁGUIAS",
    power: 146461727,
  },
  {
    server: 11123,
    family: "RikH",
    power: 71933929,
  },
  {
    server: 11123,
    family: "PlayerSolo",
    power: 34318501,
  },
  {
    server: 11124,
    family: "Hogwarts",
    power: 1358865049,
  },
  {
    server: 11124,
    family: "F4CCION4DOS",
    power: 732306653,
  },
  {
    server: 11124,
    family: "clt431",
    power: 599182013,
  },
  {
    server: 11124,
    family: "Chandra",
    power: 395595873,
  },
  {
    server: 11124,
    family: "Dragons",
    power: 274411611,
  },
  {
    server: 11124,
    family: "Shadow",
    power: 222150470,
  },
  {
    server: 11124,
    family: "BRBosque",
    power: 198528104,
  },
  {
    server: 11124,
    family: "FIM",
    power: 177206862,
  },
  {
    server: 11124,
    family: "os_darkes",
    power: 110295979,
  },
  {
    server: 11124,
    family: "thelosers",
    power: 106434839,
  },
  {
    server: 11125,
    family: "Polters",
    power: 1338135872,
  },
  {
    server: 11125,
    family: "Kalashnikov47",
    power: 900548421,
  },
  {
    server: 11125,
    family: "Brothers",
    power: 312347680,
  },
  {
    server: 11125,
    family: "bRaSiL",
    power: 284367436,
  },
  {
    server: 11125,
    family: "AkatsukiGang",
    power: 271665748,
  },
  {
    server: 11125,
    family: "AMANT3MÚSICAS",
    power: 240271365,
  },
  {
    server: 11125,
    family: "RIP_GLACEON",
    power: 232522878,
  },
  {
    server: 11125,
    family: "YTBSuperdark21",
    power: 190618800,
  },
  {
    server: 11125,
    family: "𓂀𝕀𝕟𝕗𝕖𝕔𝕥",
    power: 149699058,
  },
  {
    server: 11125,
    family: "ᴛʜᴇﾠᴡɪᴢᴀʀᴅs",
    power: 148471361,
  },
  {
    server: 11126,
    family: "Asgard",
    power: 1211482154,
  },
  {
    server: 11126,
    family: "メNoCash",
    power: 1038694572,
  },
  {
    server: 11126,
    family: "CaçadoresBR",
    power: 306076192,
  },
  {
    server: 11126,
    family: "ĈÁĽÄƁŔËŜŐṢ",
    power: 239927107,
  },
  {
    server: 11126,
    family: "revolução",
    power: 203137962,
  },
  {
    server: 11126,
    family: "Pablojuan87",
    power: 190233317,
  },
  {
    server: 11126,
    family: "OPRESSORES",
    power: 187358902,
  },
  {
    server: 11126,
    family: "IMPÉRIOS",
    power: 175993474,
  },
  {
    server: 11126,
    family: "Liberty",
    power: 174575775,
  },
  {
    server: 11126,
    family: "BRAZUKA",
    power: 136782864,
  },
  {
    server: 11127,
    family: "Omega",
    power: 1301544296,
  },
  {
    server: 11127,
    family: "INVICTOS",
    power: 1118916096,
  },
  {
    server: 11127,
    family: "ONE_PIECE",
    power: 1027089880,
  },
  {
    server: 11127,
    family: "V4mp",
    power: 289483453,
  },
  {
    server: 11127,
    family: "AKATSUKI",
    power: 158719319,
  },
  {
    server: 11127,
    family: "Nanatsu",
    power: 158678652,
  },
  {
    server: 11127,
    family: "HellFamily",
    power: 144529125,
  },
  {
    server: 11127,
    family: "NEXT",
    power: 132421643,
  },
  {
    server: 11127,
    family: "OsFree",
    power: 131143418,
  },
  {
    server: 11127,
    family: "DDragons",
    power: 130139973,
  },
  {
    server: 11128,
    family: "ᴛᴏᴋʏᴏᴍᴀɴᴊɪ",
    power: 1126993346,
  },
  {
    server: 11128,
    family: "CavaleirosZODI",
    power: 627530216,
  },
  {
    server: 11128,
    family: "HOSGOV",
    power: 479393383,
  },
  {
    server: 11128,
    family: "BRAZUCAS",
    power: 414553187,
  },
  {
    server: 11128,
    family: "SOLO_LEVELING",
    power: 314840321,
  },
  {
    server: 11128,
    family: "7KING",
    power: 223383304,
  },
  {
    server: 11128,
    family: "HogwartsBR",
    power: 210100635,
  },
  {
    server: 11128,
    family: "EliteBr",
    power: 203485381,
  },
  {
    server: 11128,
    family: "Infernnum",
    power: 185355081,
  },
  {
    server: 11128,
    family: "BURNED",
    power: 164069526,
  },
  {
    server: 11129,
    family: "Olimpo",
    power: 1375302343,
  },
  {
    server: 11129,
    family: "HellGhost",
    power: 486664853,
  },
  {
    server: 11129,
    family: "𝗢𝘇𝗖𝗥𝗜𝗔𝗦",
    power: 463068922,
  },
  {
    server: 11129,
    family: "TryHard",
    power: 408802760,
  },
  {
    server: 11129,
    family: "BlackDragons",
    power: 373901584,
  },
  {
    server: 11129,
    family: "OsTourosNegros",
    power: 321184771,
  },
  {
    server: 11129,
    family: "WhiteDrangons",
    power: 256755192,
  },
  {
    server: 11129,
    family: "triple",
    power: 222614265,
  },
  {
    server: 11129,
    family: "Noiados",
    power: 216671029,
  },
  {
    server: 11129,
    family: "Akatsuki",
    power: 189413540,
  },
  {
    server: 11130,
    family: "MASTERS",
    power: 1365775889,
  },
  {
    server: 11130,
    family: "WINX",
    power: 1144044969,
  },
  {
    server: 11130,
    family: "Bankainnaluss",
    power: 347850157,
  },
  {
    server: 11130,
    family: "Queen",
    power: 312166505,
  },
  {
    server: 11130,
    family: "INVICTUSπ",
    power: 237017812,
  },
  {
    server: 11130,
    family: "WARRIORS",
    power: 215086480,
  },
  {
    server: 11130,
    family: "MiB",
    power: 170741512,
  },
  {
    server: 11130,
    family: "MarchaClub",
    power: 166726811,
  },
  {
    server: 11130,
    family: "brothers",
    power: 158078912,
  },
  {
    server: 11130,
    family: "Akatsuki",
    power: 148272260,
  },
  {
    server: 11131,
    family: "TAMAGOSHI",
    power: 1252484414,
  },
  {
    server: 11131,
    family: "Supreme",
    power: 558330250,
  },
  {
    server: 11131,
    family: "Mystic",
    power: 352440055,
  },
  {
    server: 11131,
    family: "Eclipse",
    power: 307548016,
  },
  {
    server: 11131,
    family: "BRASIL",
    power: 293423339,
  },
  {
    server: 11131,
    family: "Brazuka",
    power: 239111411,
  },
  {
    server: 11131,
    family: "CLUBEDOCARIMBO",
    power: 238355376,
  },
  {
    server: 11131,
    family: "soulSoucity",
    power: 218649977,
  },
  {
    server: 11131,
    family: "Fúria",
    power: 190110775,
  },
  {
    server: 11131,
    family: "Infinity999",
    power: 164872323,
  },
  {
    server: 11132,
    family: "Game–Over",
    power: 1328516770,
  },
  {
    server: 11132,
    family: "CogulandiaBR",
    power: 943419891,
  },
  {
    server: 11132,
    family: "🦋Escavenger🦋",
    power: 501075301,
  },
  {
    server: 11132,
    family: "Dracarys",
    power: 466088694,
  },
  {
    server: 11132,
    family: "TheCrøxs",
    power: 340500670,
  },
  {
    server: 11132,
    family: "osgrifo",
    power: 261839480,
  },
  {
    server: 11132,
    family: "LENDÁRIOS",
    power: 259866568,
  },
  {
    server: 11132,
    family: "COG   Academy",
    power: 221303139,
  },
  {
    server: 11132,
    family: "esquizoides",
    power: 129623289,
  },
  {
    server: 11132,
    family: "CALVOS",
    power: 127750254,
  },
  {
    server: 11133,
    family: "ElGodsHouse",
    power: 1307597973,
  },
  {
    server: 11133,
    family: "ElGodsHousell",
    power: 632381170,
  },
  {
    server: 11133,
    family: "Jungle_br",
    power: 386588605,
  },
  {
    server: 11133,
    family: "BLITZ",
    power: 266658132,
  },
  {
    server: 11133,
    family: "Conquistador",
    power: 262598019,
  },
  {
    server: 11133,
    family: "Sparta",
    power: 252609769,
  },
  {
    server: 11133,
    family: "OLIMPO",
    power: 191466974,
  },
  {
    server: 11133,
    family: "Deuar",
    power: 177310534,
  },
  {
    server: 11133,
    family: "SoloLeveling",
    power: 124370488,
  },
  {
    server: 11133,
    family: "FamilyCorleone",
    power: 90600003,
  },
  {
    server: 11134,
    family: "Leveling",
    power: 1362549219,
  },
  {
    server: 11134,
    family: "Jaguaras",
    power: 422575425,
  },
  {
    server: 11134,
    family: "TOP1",
    power: 355828253,
  },
  {
    server: 11134,
    family: "Vikings",
    power: 299733205,
  },
  {
    server: 11134,
    family: "HASHIRAS",
    power: 267763107,
  },
  {
    server: 11134,
    family: "Laele",
    power: 228023140,
  },
  {
    server: 11134,
    family: "Libertad",
    power: 227733555,
  },
  {
    server: 11134,
    family: "NEXUS",
    power: 207074813,
  },
  {
    server: 11134,
    family: "SALVADOR_BA",
    power: 198929109,
  },
  {
    server: 11134,
    family: "CaçaBaleias",
    power: 197157275,
  },
  {
    server: 11135,
    family: "Hazit",
    power: 1261782182,
  },
  {
    server: 11135,
    family: "ѵıłα",
    power: 958126062,
  },
  {
    server: 11135,
    family: "INFERNUS",
    power: 761805095,
  },
  {
    server: 11135,
    family: "Legends",
    power: 385289798,
  },
  {
    server: 11135,
    family: "Urzeke",
    power: 252698336,
  },
  {
    server: 11135,
    family: "BLACK彡DRAGONS",
    power: 208476329,
  },
  {
    server: 11135,
    family: "MonHorck",
    power: 180311243,
  },
  {
    server: 11135,
    family: "Carniceiros",
    power: 164529516,
  },
  {
    server: 11135,
    family: "ACKERMAN",
    power: 158835691,
  },
  {
    server: 11135,
    family: "CocaCola",
    power: 138992291,
  },
  {
    server: 11136,
    family: "NoGs",
    power: 1067582733,
  },
  {
    server: 11136,
    family: "iMØRTAiS",
    power: 535349279,
  },
  {
    server: 11136,
    family: "Clandestinos",
    power: 347503297,
  },
  {
    server: 11136,
    family: "Fungi",
    power: 329943685,
  },
  {
    server: 11136,
    family: "TROPA_BR",
    power: 251352592,
  },
  {
    server: 11136,
    family: "TEMPLÁRIOS",
    power: 228289938,
  },
  {
    server: 11136,
    family: "FÊNIX",
    power: 146524928,
  },
  {
    server: 11136,
    family: "DRAGON",
    power: 145344084,
  },
  {
    server: 11136,
    family: "XUPAessaMANGA",
    power: 139037783,
  },
  {
    server: 11136,
    family: "SeaAlts",
    power: 133935893,
  },
  {
    server: 11137,
    family: "Tadala",
    power: 1032966380,
  },
  {
    server: 11137,
    family: "Bifrost",
    power: 965157644,
  },
  {
    server: 11137,
    family: "Supreme",
    power: 398382156,
  },
  {
    server: 11137,
    family: "Atumalaca",
    power: 270270818,
  },
  {
    server: 11137,
    family: "Hunters",
    power: 220009624,
  },
  {
    server: 11137,
    family: "ButecoBR",
    power: 203484352,
  },
  {
    server: 11137,
    family: "Konoha",
    power: 184079521,
  },
  {
    server: 11137,
    family: "Av4gers",
    power: 162714932,
  },
  {
    server: 11137,
    family: "Alcatraz",
    power: 135610461,
  },
  {
    server: 11137,
    family: "moon",
    power: 94157176,
  },
  {
    server: 11138,
    family: "BR",
    power: 1365125456,
  },
  {
    server: 11138,
    family: "Vácuo",
    power: 615303802,
  },
  {
    server: 11138,
    family: "HEROS",
    power: 550330394,
  },
  {
    server: 11138,
    family: "Brasil",
    power: 411218833,
  },
  {
    server: 11138,
    family: "BRASIL",
    power: 293874243,
  },
  {
    server: 11138,
    family: "IMPÉRIO",
    power: 283849376,
  },
  {
    server: 11138,
    family: "Darck",
    power: 260787154,
  },
  {
    server: 11138,
    family: "DARKs",
    power: 176985028,
  },
  {
    server: 11138,
    family: "pcs",
    power: 169787391,
  },
  {
    server: 11138,
    family: "BRAZZERS",
    power: 149902963,
  },
  {
    server: 11139,
    family: "ALLIANCE¹",
    power: 1340387031,
  },
  {
    server: 11139,
    family: "ALLIANCE²",
    power: 549270653,
  },
  {
    server: 11139,
    family: "_RENEGADOS_",
    power: 436069739,
  },
  {
    server: 11139,
    family: "ONE PIECE",
    power: 396959540,
  },
  {
    server: 11139,
    family: "BLACKOUT",
    power: 313566529,
  },
  {
    server: 11139,
    family: "Theviking",
    power: 300455054,
  },
  {
    server: 11139,
    family: "PREDADORES",
    power: 267751949,
  },
  {
    server: 11139,
    family: "chinfrin",
    power: 257378076,
  },
  {
    server: 11139,
    family: "nanatsu",
    power: 210861202,
  },
  {
    server: 11139,
    family: "HASHIRA",
    power: 205807095,
  },
  {
    server: 11140,
    family: "LaTroll",
    power: 1255743522,
  },
  {
    server: 11140,
    family: "Baehyungs",
    power: 958275936,
  },
  {
    server: 11140,
    family: "Ascencion",
    power: 601547294,
  },
  {
    server: 11140,
    family: "AFK",
    power: 349231574,
  },
  {
    server: 11140,
    family: "Gladiadores",
    power: 238450814,
  },
  {
    server: 11140,
    family: "Akatsuki",
    power: 206094015,
  },
  {
    server: 11140,
    family: "mobilefalidos",
    power: 164652652,
  },
  {
    server: 11140,
    family: "Excalibur",
    power: 153613332,
  },
  {
    server: 11140,
    family: "SOLOㅤLEVELING",
    power: 153146624,
  },
  {
    server: 11140,
    family: "IMPÉRIO",
    power: 151941385,
  },
  {
    server: 11141,
    family: "VIKINGS",
    power: 1148412819,
  },
  {
    server: 11141,
    family: "NOVA",
    power: 992405328,
  },
  {
    server: 11141,
    family: "BRclan",
    power: 512636968,
  },
  {
    server: 11141,
    family: "GOOD",
    power: 297234096,
  },
  {
    server: 11141,
    family: "ØS_PARÇAS",
    power: 269625173,
  },
  {
    server: 11141,
    family: "ĐRAGØNS",
    power: 213572267,
  },
  {
    server: 11141,
    family: "Dark",
    power: 199871931,
  },
  {
    server: 11141,
    family: "smokers",
    power: 190594624,
  },
  {
    server: 11141,
    family: "atoman",
    power: 181427514,
  },
  {
    server: 11141,
    family: "Draconia",
    power: 168264189,
  },
  {
    server: 11142,
    family: "Senzala",
    power: 1160781675,
  },
  {
    server: 11142,
    family: "BRKx",
    power: 803428969,
  },
  {
    server: 11142,
    family: "TABASCÃO",
    power: 387731281,
  },
  {
    server: 11142,
    family: "BRAZUKAS",
    power: 364153443,
  },
  {
    server: 11142,
    family: "Royalty",
    power: 331850706,
  },
  {
    server: 11142,
    family: "Hárpias",
    power: 237233275,
  },
  {
    server: 11142,
    family: "brasileiro",
    power: 209347051,
  },
  {
    server: 11142,
    family: "CavalheiroFAM",
    power: 200946539,
  },
  {
    server: 11142,
    family: "DragonBR",
    power: 162626936,
  },
  {
    server: 11142,
    family: "Columelo",
    power: 156897580,
  },
  {
    server: 11143,
    family: "Yakuza",
    power: 1183781377,
  },
  {
    server: 11143,
    family: "Targaryen",
    power: 1121403230,
  },
  {
    server: 11143,
    family: "MoonLight",
    power: 346128066,
  },
  {
    server: 11143,
    family: "Ragnarök",
    power: 326611010,
  },
  {
    server: 11143,
    family: "Toman",
    power: 255813417,
  },
  {
    server: 11143,
    family: "BR_TOMAM",
    power: 206353630,
  },
  {
    server: 11143,
    family: "PTugaUnited",
    power: 159265149,
  },
  {
    server: 11143,
    family: "MVP",
    power: 149754628,
  },
  {
    server: 11143,
    family: "CasaDaMoeda",
    power: 106919890,
  },
  {
    server: 11143,
    family: "FLAMENGO",
    power: 57680305,
  },
  {
    server: 11144,
    family: "MAFIA",
    power: 1068098903,
  },
  {
    server: 11144,
    family: "TheKingLegion",
    power: 386571131,
  },
  {
    server: 11144,
    family: "Lost",
    power: 343587331,
  },
  {
    server: 11144,
    family: "TopMushAcademy",
    power: 258563202,
  },
  {
    server: 11144,
    family: "TopMushᵀᴹ",
    power: 232401741,
  },
  {
    server: 11144,
    family: "BR_Cogumelo",
    power: 229910071,
  },
  {
    server: 11144,
    family: "ZnSClãn",
    power: 205581496,
  },
  {
    server: 11144,
    family: "PAODEQUEIJO",
    power: 193209323,
  },
  {
    server: 11144,
    family: "Pamonheiros",
    power: 186838479,
  },
  {
    server: 11144,
    family: "moskhousegreen",
    power: 149106313,
  },
  {
    server: 11145,
    family: "FoiaAmarela",
    power: 1219613748,
  },
  {
    server: 11145,
    family: "OnePiece",
    power: 966815948,
  },
  {
    server: 11145,
    family: "BABILON_BR",
    power: 287693201,
  },
  {
    server: 11145,
    family: "Royalty",
    power: 282598478,
  },
  {
    server: 11145,
    family: "kenway",
    power: 272478625,
  },
  {
    server: 11145,
    family: "OsSemTerra",
    power: 267028298,
  },
  {
    server: 11145,
    family: "VLL_VALRALA",
    power: 216591352,
  },
  {
    server: 11145,
    family: "AKATSUKI",
    power: 192836749,
  },
  {
    server: 11145,
    family: "CROMATICO",
    power: 173737550,
  },
  {
    server: 11145,
    family: "Fifisões",
    power: 139266477,
  },
  {
    server: 11146,
    family: "RAGNAROK",
    power: 981463057,
  },
  {
    server: 11146,
    family: "Solo_Leveling",
    power: 862165198,
  },
  {
    server: 11146,
    family: "RedDead",
    power: 472351963,
  },
  {
    server: 11146,
    family: "brasileiros",
    power: 472213013,
  },
  {
    server: 11146,
    family: "FLAMENGO MDL",
    power: 250536887,
  },
  {
    server: 11146,
    family: "Resistência",
    power: 246895828,
  },
  {
    server: 11146,
    family: "JointBr",
    power: 238343084,
  },
  {
    server: 11146,
    family: "pxerium",
    power: 219724124,
  },
  {
    server: 11146,
    family: "Toadtool",
    power: 198410676,
  },
  {
    server: 11146,
    family: "OneMushroom",
    power: 184403979,
  },
  {
    server: 11147,
    family: "GodSlayer",
    power: 1198501582,
  },
  {
    server: 11147,
    family: "New_World",
    power: 951818433,
  },
  {
    server: 11147,
    family: "ᴼᴾ°OnePiece",
    power: 565398785,
  },
  {
    server: 11147,
    family: "Grifinoria",
    power: 411827288,
  },
  {
    server: 11147,
    family: "TG",
    power: 269250591,
  },
  {
    server: 11147,
    family: "CháDeCogumelo",
    power: 191775385,
  },
  {
    server: 11147,
    family: "Brasil",
    power: 147887470,
  },
  {
    server: 11147,
    family: "PROSLAYER",
    power: 146292146,
  },
  {
    server: 11147,
    family: "BRAZUKA",
    power: 136206522,
  },
  {
    server: 11147,
    family: "Átrios",
    power: 129659429,
  },
  {
    server: 11148,
    family: "ELEMENTARES",
    power: 1041247635,
  },
  {
    server: 11148,
    family: "Hashiras",
    power: 876786202,
  },
  {
    server: 11148,
    family: "ZODÍACOS",
    power: 366241866,
  },
  {
    server: 11148,
    family: "TurmaDoBairro",
    power: 271862161,
  },
  {
    server: 11148,
    family: "TEAMOP",
    power: 257329607,
  },
  {
    server: 11148,
    family: "FAIRY_TAIL",
    power: 233008458,
  },
  {
    server: 11148,
    family: "GUERREIROS",
    power: 203870718,
  },
  {
    server: 11148,
    family: "CEIFADORES",
    power: 183211385,
  },
  {
    server: 11148,
    family: "UPADORES",
    power: 167072686,
  },
  {
    server: 11148,
    family: "Vikings",
    power: 140278665,
  },
  {
    server: 11149,
    family: "THE_KINGDOM",
    power: 1083972697,
  },
  {
    server: 11149,
    family: "STARS",
    power: 930329284,
  },
  {
    server: 11149,
    family: "Fluxo",
    power: 546750186,
  },
  {
    server: 11149,
    family: "DESTINO",
    power: 273755539,
  },
  {
    server: 11149,
    family: "BRAZUKAs",
    power: 218875564,
  },
  {
    server: 11149,
    family: "Mush",
    power: 207142766,
  },
  {
    server: 11149,
    family: "Elite",
    power: 203081812,
  },
  {
    server: 11149,
    family: "Kings",
    power: 161731141,
  },
  {
    server: 11149,
    family: "GUILDA",
    power: 151521284,
  },
  {
    server: 11149,
    family: "LΞGIãФ",
    power: 129555224,
  },
  {
    server: 11150,
    family: "MiauMiau²",
    power: 1109836120,
  },
  {
    server: 11150,
    family: "ᶠᵘˡˡOLÍMPO",
    power: 980062119,
  },
  {
    server: 11150,
    family: "TheKingsBR",
    power: 316342934,
  },
  {
    server: 11150,
    family: "RAGNAROK",
    power: 262694519,
  },
  {
    server: 11150,
    family: "DRAGON",
    power: 258650385,
  },
  {
    server: 11150,
    family: "HellRaisers",
    power: 241630945,
  },
  {
    server: 11150,
    family: "Brasil",
    power: 208498376,
  },
  {
    server: 11150,
    family: "BR",
    power: 186335671,
  },
  {
    server: 11150,
    family: "CogosLocos",
    power: 167912750,
  },
  {
    server: 11150,
    family: "OtakusBR",
    power: 155319323,
  },
  {
    server: 11151,
    family: "CODEX",
    power: 1142107858,
  },
  {
    server: 11151,
    family: "PrivateWar",
    power: 769305986,
  },
  {
    server: 11151,
    family: "OnePiece",
    power: 324310420,
  },
  {
    server: 11151,
    family: "AnarchyS1",
    power: 268102190,
  },
  {
    server: 11151,
    family: "Odin",
    power: 263858108,
  },
  {
    server: 11151,
    family: "MaxPowers",
    power: 205266669,
  },
  {
    server: 11151,
    family: "PapiTchulo",
    power: 200591447,
  },
  {
    server: 11151,
    family: "TheKings",
    power: 131210246,
  },
  {
    server: 11151,
    family: "Fênix",
    power: 128772971,
  },
  {
    server: 11151,
    family: "Alliance",
    power: 102176029,
  },
  {
    server: 11152,
    family: "BRAZUKAs",
    power: 1285781231,
  },
  {
    server: 11152,
    family: "LegendSC",
    power: 617569872,
  },
  {
    server: 11152,
    family: "Firestarters",
    power: 380150781,
  },
  {
    server: 11152,
    family: "OsBaianos",
    power: 330488379,
  },
  {
    server: 11152,
    family: "Leviathan",
    power: 252257978,
  },
  {
    server: 11152,
    family: "OsAchocolatado",
    power: 233545822,
  },
  {
    server: 11152,
    family: "BrZada",
    power: 205278974,
  },
  {
    server: 11152,
    family: "Bobinhos",
    power: 175115448,
  },
  {
    server: 11152,
    family: "Marialé",
    power: 168829408,
  },
  {
    server: 11152,
    family: "Infinityz",
    power: 159188595,
  },
  {
    server: 11153,
    family: "ALIANÇA_TxE",
    power: 1189922033,
  },
  {
    server: 11153,
    family: "TROPA_F2P",
    power: 425560106,
  },
  {
    server: 11153,
    family: "Lendários",
    power: 253581414,
  },
  {
    server: 11153,
    family: "ACADEMIA_TxE",
    power: 232359209,
  },
  {
    server: 11153,
    family: "∆_IMPÉRIO_BR",
    power: 211718518,
  },
  {
    server: 11153,
    family: "luffyguear5",
    power: 161359208,
  },
  {
    server: 11153,
    family: "Yakuza",
    power: 155820604,
  },
  {
    server: 11153,
    family: "Valhalla",
    power: 149126231,
  },
  {
    server: 11153,
    family: "REDBULL",
    power: 124854602,
  },
  {
    server: 11153,
    family: "MONSTER",
    power: 85895246,
  },
  {
    server: 11154,
    family: "𝙺𝚘𝚗𝚘𝚑𝚊",
    power: 1057795097,
  },
  {
    server: 11154,
    family: "DFG_CALVOS",
    power: 463695606,
  },
  {
    server: 11154,
    family: "brs",
    power: 349816906,
  },
  {
    server: 11154,
    family: "VIKINGS",
    power: 269913520,
  },
  {
    server: 11154,
    family: "Akatsuki",
    power: 252753567,
  },
  {
    server: 11154,
    family: "PurpleIce",
    power: 183946151,
  },
  {
    server: 11154,
    family: "DESTRUIDORES",
    power: 117546612,
  },
  {
    server: 11154,
    family: "Kings",
    power: 111015275,
  },
  {
    server: 11154,
    family: "SkogensAndar",
    power: 84763432,
  },
  {
    server: 11154,
    family: "PublicEnemy",
    power: 68698318,
  },
  {
    server: 11155,
    family: "MVP",
    power: 1187631854,
  },
  {
    server: 11155,
    family: "Overlord",
    power: 427795237,
  },
  {
    server: 11155,
    family: "Lider",
    power: 308734355,
  },
  {
    server: 11155,
    family: "TrupeBrasil",
    power: 292906089,
  },
  {
    server: 11155,
    family: "420stoners",
    power: 279693390,
  },
  {
    server: 11155,
    family: "BaSingSlay",
    power: 210694813,
  },
  {
    server: 11155,
    family: "BroThersWar",
    power: 203489163,
  },
  {
    server: 11155,
    family: "Baehyungs",
    power: 177455160,
  },
  {
    server: 11155,
    family: "Rebelião",
    power: 169243263,
  },
  {
    server: 11155,
    family: "BROtherHood",
    power: 153050655,
  },
  {
    server: 11156,
    family: "Hogwarts",
    power: 1008040416,
  },
  {
    server: 11156,
    family: "OnlyFans",
    power: 486386428,
  },
  {
    server: 11156,
    family: "BRASIL",
    power: 338036141,
  },
  {
    server: 11156,
    family: "NAZARICK",
    power: 279360808,
  },
  {
    server: 11156,
    family: "arcanjos",
    power: 169716440,
  },
  {
    server: 11156,
    family: "《Anonymos》",
    power: 133590868,
  },
  {
    server: 11156,
    family: "RAGNAROK",
    power: 119972668,
  },
  {
    server: 11156,
    family: "M𝑎𝑔𝑛𝑎𝑡𝑎",
    power: 35968934,
  },
  {
    server: 11156,
    family: "Soneca",
    power: 32403695,
  },
  {
    server: 11156,
    family: "lk_zim08",
    power: 30726262,
  },
  {
    server: 11157,
    family: "Ragnarok",
    power: 961926063,
  },
  {
    server: 11157,
    family: "TeamOP",
    power: 578083021,
  },
  {
    server: 11157,
    family: "BRASIL",
    power: 370578566,
  },
  {
    server: 11157,
    family: "PROS°BRASIL",
    power: 277389131,
  },
  {
    server: 11157,
    family: "Vikings",
    power: 224594775,
  },
  {
    server: 11157,
    family: "WarriorsBrs",
    power: 149312826,
  },
  {
    server: 11157,
    family: "ZecaPauGordinh",
    power: 136943463,
  },
  {
    server: 11157,
    family: "Vengeance",
    power: 124148668,
  },
  {
    server: 11157,
    family: "FENIX",
    power: 112723125,
  },
  {
    server: 11157,
    family: "COMANF",
    power: 69858926,
  },
  {
    server: 11158,
    family: "Helheim",
    power: 832722034,
  },
  {
    server: 11158,
    family: "4FUN",
    power: 794347252,
  },
  {
    server: 11158,
    family: "MysticMages",
    power: 293816622,
  },
  {
    server: 11158,
    family: "Blackout",
    power: 194306211,
  },
  {
    server: 11158,
    family: "DRAGONFLY",
    power: 189870875,
  },
  {
    server: 11158,
    family: "KAMI",
    power: 159400050,
  },
  {
    server: 11158,
    family: "BRAZUKAs",
    power: 149302790,
  },
  {
    server: 11158,
    family: "Uzumaki",
    power: 144794828,
  },
  {
    server: 11158,
    family: "𝔸𝕨𝕒𝕜𝕖𝕟",
    power: 126458584,
  },
  {
    server: 11158,
    family: "solitários",
    power: 90237069,
  },
  {
    server: 11159,
    family: "𝐕𝐈𝐊𝐈𝐍𝐆𝐒",
    power: 1001899592,
  },
  {
    server: 11159,
    family: "BRASIL",
    power: 291682078,
  },
  {
    server: 11159,
    family: "Olympia",
    power: 218334509,
  },
  {
    server: 11159,
    family: "LOUD",
    power: 170592830,
  },
  {
    server: 11159,
    family: "BRAZUKAS",
    power: 145890207,
  },
  {
    server: 11159,
    family: "MonteOlimpo",
    power: 123156769,
  },
  {
    server: 11159,
    family: "dragonborn",
    power: 107453599,
  },
  {
    server: 11159,
    family: "IMMORTALS",
    power: 105457162,
  },
  {
    server: 11159,
    family: "ZRO",
    power: 29049032,
  },
  {
    server: 11159,
    family: "NeverForget",
    power: 24055849,
  },
  {
    server: 11160,
    family: "TBR`ELITE",
    power: 1050351845,
  },
  {
    server: 11160,
    family: "BlackSheep",
    power: 595815884,
  },
  {
    server: 11160,
    family: "BRASIL",
    power: 402735235,
  },
  {
    server: 11160,
    family: "TropaBR`2",
    power: 218314112,
  },
  {
    server: 11160,
    family: "TemOrigils",
    power: 179118745,
  },
  {
    server: 11160,
    family: "THE_KINGDOM",
    power: 159710772,
  },
  {
    server: 11160,
    family: "BR_Cogumelos",
    power: 140221975,
  },
  {
    server: 11160,
    family: "Seitadusexo",
    power: 129363716,
  },
  {
    server: 11160,
    family: "》PURGATÓRIO▪︎",
    power: 112611060,
  },
  {
    server: 11160,
    family: "ENDLESS",
    power: 105754273,
  },
  {
    server: 11161,
    family: "AKATSUKI",
    power: 1125743396,
  },
  {
    server: 11161,
    family: "SUPREMACIA",
    power: 471273671,
  },
  {
    server: 11161,
    family: "Ensaboados",
    power: 452620436,
  },
  {
    server: 11161,
    family: "BRASIL",
    power: 194299501,
  },
  {
    server: 11161,
    family: "AKATSUKI_2",
    power: 144012632,
  },
  {
    server: 11161,
    family: "Hashiras",
    power: 130345196,
  },
  {
    server: 11161,
    family: "Dysnatia",
    power: 126153212,
  },
  {
    server: 11161,
    family: "HUNTERS",
    power: 117256743,
  },
  {
    server: 11161,
    family: "lendário",
    power: 60134386,
  },
  {
    server: 11161,
    family: "OLD_AliancE",
    power: 47902029,
  },
  {
    server: 11162,
    family: "OnlyBasic",
    power: 1081423256,
  },
  {
    server: 11162,
    family: "BRASIL",
    power: 440544107,
  },
  {
    server: 11162,
    family: "Titans",
    power: 366634743,
  },
  {
    server: 11162,
    family: "OnePiece",
    power: 217394146,
  },
  {
    server: 11162,
    family: "《Toka_Terror》",
    power: 170598403,
  },
  {
    server: 11162,
    family: "soul‐society",
    power: 121904692,
  },
  {
    server: 11162,
    family: "Escravos",
    power: 119182128,
  },
  {
    server: 11162,
    family: "VØID",
    power: 115910098,
  },
  {
    server: 11162,
    family: "TROPADOCDC",
    power: 70493694,
  },
  {
    server: 11162,
    family: "ATLAS",
    power: 56508452,
  },
  {
    server: 11163,
    family: "MONTE_OLIMPO",
    power: 1035299948,
  },
  {
    server: 11163,
    family: "MONTE_OLIMPO2",
    power: 471283045,
  },
  {
    server: 11163,
    family: "CogumeloFans",
    power: 389636894,
  },
  {
    server: 11163,
    family: "RAGNAROK",
    power: 176962113,
  },
  {
    server: 11163,
    family: "XoXoTeam",
    power: 142413162,
  },
  {
    server: 11163,
    family: "Ceifadores",
    power: 137657018,
  },
  {
    server: 11163,
    family: "Cla_da_yakuza",
    power: 115585994,
  },
  {
    server: 11163,
    family: "MidNightClan",
    power: 76558483,
  },
  {
    server: 11163,
    family: "Mugiwaras",
    power: 74061168,
  },
  {
    server: 11163,
    family: "Jojoba",
    power: 54442819,
  },
  {
    server: 11164,
    family: "Savage",
    power: 866931982,
  },
  {
    server: 11164,
    family: "LEGIÃO",
    power: 780880488,
  },
  {
    server: 11164,
    family: "XOTA",
    power: 603881704,
  },
  {
    server: 11164,
    family: "Jojoba",
    power: 152447137,
  },
  {
    server: 11164,
    family: "ﾑズﾑｲ丂ひズﾉ",
    power: 149361418,
  },
  {
    server: 11164,
    family: "BRAZUKAS",
    power: 131431040,
  },
  {
    server: 11164,
    family: "TopperBR",
    power: 127740658,
  },
  {
    server: 11164,
    family: "Valhalla",
    power: 107385686,
  },
  {
    server: 11164,
    family: "FungiFaction",
    power: 106206037,
  },
  {
    server: 11164,
    family: "hazit",
    power: 71590982,
  },
  {
    server: 11165,
    family: "GGBR",
    power: 1021770330,
  },
  {
    server: 11165,
    family: "UP GAMING",
    power: 403424762,
  },
  {
    server: 11165,
    family: "CasalDaErVa",
    power: 284866012,
  },
  {
    server: 11165,
    family: "DragonBR",
    power: 182926322,
  },
  {
    server: 11165,
    family: "HEROS",
    power: 158652973,
  },
  {
    server: 11165,
    family: "𝒪𝓁𝒾𝓂𝓅𝑜",
    power: 137358467,
  },
  {
    server: 11165,
    family: "osGOsArapido",
    power: 129976297,
  },
  {
    server: 11165,
    family: "Aetherellis",
    power: 123755730,
  },
  {
    server: 11165,
    family: "LesDz",
    power: 82194079,
  },
  {
    server: 11165,
    family: "WEED",
    power: 65380536,
  },
  {
    server: 11166,
    family: "𝒪𝓁𝒾𝓂𝓅𝑜",
    power: 996989173,
  },
  {
    server: 11166,
    family: "TDH",
    power: 337222904,
  },
  {
    server: 11166,
    family: "ᴄᴏʀʀɪᴅᴀﾠᴍᴀʟᴜᴄᴀ",
    power: 309523620,
  },
  {
    server: 11166,
    family: "xGhostArmyX",
    power: 221066196,
  },
  {
    server: 11166,
    family: "GαмєOvєя",
    power: 215957647,
  },
  {
    server: 11166,
    family: "ASGARD",
    power: 140989177,
  },
  {
    server: 11166,
    family: "COE_BR",
    power: 122834195,
  },
  {
    server: 11166,
    family: "ninja5zero",
    power: 112509089,
  },
  {
    server: 11166,
    family: "leveling",
    power: 81782552,
  },
  {
    server: 11166,
    family: "TheDragons",
    power: 56706581,
  },
  {
    server: 11167,
    family: "𝙑𝙄𝙆𝙄𝙉𝙂𝙎",
    power: 991696589,
  },
  {
    server: 11167,
    family: "Olimpy",
    power: 521810592,
  },
  {
    server: 11167,
    family: "TEMPLÁRIOS",
    power: 179052801,
  },
  {
    server: 11167,
    family: "ALC°Dourado",
    power: 165020079,
  },
  {
    server: 11167,
    family: "Akatsuki_2073",
    power: 147210193,
  },
  {
    server: 11167,
    family: "Ragnarok",
    power: 146401451,
  },
  {
    server: 11167,
    family: "SoLaZeR",
    power: 142302885,
  },
  {
    server: 11167,
    family: "Lúcifer",
    power: 120630137,
  },
  {
    server: 11167,
    family: "BrAsiL",
    power: 113605862,
  },
  {
    server: 11167,
    family: "billymen",
    power: 97931028,
  },
  {
    server: 11168,
    family: "Vøid",
    power: 914418329,
  },
  {
    server: 11168,
    family: "FairyTail",
    power: 493341709,
  },
  {
    server: 11168,
    family: "MushBoyZ",
    power: 300373271,
  },
  {
    server: 11168,
    family: "MUGIWARAS",
    power: 260954182,
  },
  {
    server: 11168,
    family: "BESERKERS",
    power: 256453503,
  },
  {
    server: 11168,
    family: "kuhaku",
    power: 216000052,
  },
  {
    server: 11168,
    family: "𝐈𝐍𝐒4𝐍𝐎𝐒",
    power: 184418481,
  },
  {
    server: 11168,
    family: "Toxic",
    power: 177283431,
  },
  {
    server: 11168,
    family: "RAGNAROK",
    power: 156057647,
  },
  {
    server: 11168,
    family: "Burned",
    power: 151085647,
  },
  {
    server: 11169,
    family: "ꄲꋪ꒐ꍌ꒐ꋊ",
    power: 867155568,
  },
  {
    server: 11169,
    family: "Lótus",
    power: 596074655,
  },
  {
    server: 11169,
    family: "RetaliarDivino",
    power: 427303950,
  },
  {
    server: 11169,
    family: "TEMPLÁRIOS",
    power: 371996065,
  },
  {
    server: 11169,
    family: "ARKUS",
    power: 196801108,
  },
  {
    server: 11169,
    family: "OutOfControl",
    power: 196047419,
  },
  {
    server: 11169,
    family: "PeakBlinders",
    power: 167132830,
  },
  {
    server: 11169,
    family: "FORWIN",
    power: 125107718,
  },
  {
    server: 11169,
    family: "BÉLGICA",
    power: 92002240,
  },
  {
    server: 11169,
    family: "Mugiwaras",
    power: 91138097,
  },
  {
    server: 11170,
    family: "ValhallaOne",
    power: 1060836846,
  },
  {
    server: 11170,
    family: "ValhallaTwo",
    power: 667001725,
  },
  {
    server: 11170,
    family: "chapados",
    power: 320084333,
  },
  {
    server: 11170,
    family: "GOGUMELOBRASIL",
    power: 184390244,
  },
  {
    server: 11170,
    family: "BRASIL",
    power: 174309200,
  },
  {
    server: 11170,
    family: "Azeonn",
    power: 162990364,
  },
  {
    server: 11170,
    family: "AFK_CALVOS",
    power: 161137556,
  },
  {
    server: 11170,
    family: "Excalibur",
    power: 160439356,
  },
  {
    server: 11170,
    family: "ANJOS",
    power: 157209514,
  },
  {
    server: 11170,
    family: "Yakuza",
    power: 149537459,
  },
  {
    server: 11171,
    family: "Excalibur",
    power: 979396091,
  },
  {
    server: 11171,
    family: "Os_Furafato",
    power: 733760521,
  },
  {
    server: 11171,
    family: "TOPBRS",
    power: 433931216,
  },
  {
    server: 11171,
    family: "BRAZUKAS",
    power: 262618487,
  },
  {
    server: 11171,
    family: "RAGNAROK",
    power: 211250732,
  },
  {
    server: 11171,
    family: "Shadows",
    power: 166737735,
  },
  {
    server: 11171,
    family: "CruxDivinum",
    power: 138914799,
  },
  {
    server: 11171,
    family: "Akatsuki",
    power: 125220681,
  },
  {
    server: 11171,
    family: "Onlyfans",
    power: 95936454,
  },
  {
    server: 11171,
    family: "COGﾠIMORTAIS",
    power: 94243035,
  },
  {
    server: 11172,
    family: "NewOrdem",
    power: 794553586,
  },
  {
    server: 11172,
    family: "Hagekori",
    power: 638862929,
  },
  {
    server: 11172,
    family: "⁸⁸⁸VILONS",
    power: 343360797,
  },
  {
    server: 11172,
    family: "KingBr",
    power: 203666889,
  },
  {
    server: 11172,
    family: "Brasil",
    power: 176728654,
  },
  {
    server: 11172,
    family: "ᴱᴸᴵᵀᴱ",
    power: 168584322,
  },
  {
    server: 11172,
    family: "Supremo",
    power: 163095011,
  },
  {
    server: 11172,
    family: "ATLÂNTICOS",
    power: 149257610,
  },
  {
    server: 11172,
    family: "Wolfs",
    power: 137253412,
  },
  {
    server: 11172,
    family: "TropaDoCogumel",
    power: 133451504,
  },
  {
    server: 11173,
    family: "Soul Society",
    power: 747636788,
  },
  {
    server: 11173,
    family: "HellNBack",
    power: 723032041,
  },
  {
    server: 11173,
    family: "GALAXY",
    power: 379274279,
  },
  {
    server: 11173,
    family: "Thanatos",
    power: 229375166,
  },
  {
    server: 11173,
    family: "BRASIL",
    power: 218703465,
  },
  {
    server: 11173,
    family: "Ragnarok",
    power: 167751278,
  },
  {
    server: 11173,
    family: "5Kings",
    power: 162249488,
  },
  {
    server: 11173,
    family: "HuntersSa",
    power: 141077458,
  },
  {
    server: 11173,
    family: "YAKUZA",
    power: 114585844,
  },
  {
    server: 11173,
    family: "MAMATAURO",
    power: 108212020,
  },
  {
    server: 11174,
    family: "NovaOrdem",
    power: 825209461,
  },
  {
    server: 11174,
    family: "Diginin",
    power: 765665548,
  },
  {
    server: 11174,
    family: "TeamØP",
    power: 500045774,
  },
  {
    server: 11174,
    family: "TopBR",
    power: 184446453,
  },
  {
    server: 11174,
    family: "LenDárioS",
    power: 167943441,
  },
  {
    server: 11174,
    family: "ᵖⁱⁿᵏ𝔸𝕟𝕘𝕖𝕝",
    power: 144309802,
  },
  {
    server: 11174,
    family: "Xvideos",
    power: 119866442,
  },
  {
    server: 11174,
    family: "TNT",
    power: 113349958,
  },
  {
    server: 11174,
    family: "∞ƖƝƑƖƝƖƬ",
    power: 109295379,
  },
  {
    server: 11174,
    family: "SANTAIGREJA",
    power: 77778069,
  },
  {
    server: 11175,
    family: "HeadHunters",
    power: 847629432,
  },
  {
    server: 11175,
    family: "LÓTUS",
    power: 243539221,
  },
  {
    server: 11175,
    family: "MushBullKiller",
    power: 233804975,
  },
  {
    server: 11175,
    family: "BRAZUKAS",
    power: 214863606,
  },
  {
    server: 11175,
    family: "REDBULLS",
    power: 139503975,
  },
  {
    server: 11175,
    family: "TOP1",
    power: 136247824,
  },
  {
    server: 11175,
    family: "¥HELLISHSTORM¥",
    power: 130877161,
  },
  {
    server: 11175,
    family: "Informáticos",
    power: 123133639,
  },
  {
    server: 11175,
    family: "IMPERIUM",
    power: 116758809,
  },
  {
    server: 11175,
    family: "ᶜʰᵃᵐᵖᶦᵍⁿᵒⁿ",
    power: 113484709,
  },
  {
    server: 11176,
    family: "DragonBallz",
    power: 875072772,
  },
  {
    server: 11176,
    family: "》AKATSUKI《",
    power: 717030025,
  },
  {
    server: 11176,
    family: "BRAZUKAS",
    power: 385750603,
  },
  {
    server: 11176,
    family: "SpeedRun",
    power: 126400208,
  },
  {
    server: 11176,
    family: "MONTE_OLIMPO",
    power: 111903280,
  },
  {
    server: 11176,
    family: "Mafiosos",
    power: 89725276,
  },
  {
    server: 11176,
    family: "morfinho",
    power: 87643673,
  },
  {
    server: 11176,
    family: "VALHALLA",
    power: 83934583,
  },
  {
    server: 11176,
    family: "DragonBallKids",
    power: 83654384,
  },
  {
    server: 11176,
    family: "Quartel",
    power: 72977803,
  },
  {
    server: 11177,
    family: "NewEra",
    power: 771624676,
  },
  {
    server: 11177,
    family: "UniãoGL",
    power: 518864086,
  },
  {
    server: 11177,
    family: "YAKUZA",
    power: 469335209,
  },
  {
    server: 11177,
    family: "Hunters",
    power: 148818447,
  },
  {
    server: 11177,
    family: "PaladinoS",
    power: 141449305,
  },
  {
    server: 11177,
    family: "RAGNAROK",
    power: 136586653,
  },
  {
    server: 11177,
    family: "ELITE",
    power: 136071641,
  },
  {
    server: 11177,
    family: "Legionários",
    power: 134805590,
  },
  {
    server: 11177,
    family: "LosGoti",
    power: 96956239,
  },
  {
    server: 11177,
    family: "TugaPower",
    power: 92269163,
  },
  {
    server: 11178,
    family: "NightShadow",
    power: 848922476,
  },
  {
    server: 11178,
    family: "Origami",
    power: 382664322,
  },
  {
    server: 11178,
    family: "ZETA",
    power: 302870438,
  },
  {
    server: 11178,
    family: "ᴏғғ ɢᴀᴍɪɴɢ",
    power: 178479805,
  },
  {
    server: 11178,
    family: "KINDRED",
    power: 163154527,
  },
  {
    server: 11178,
    family: "BATALHAS",
    power: 134843613,
  },
  {
    server: 11178,
    family: "mugwaras",
    power: 125135049,
  },
  {
    server: 11178,
    family: "TDC",
    power: 120476360,
  },
  {
    server: 11178,
    family: "BR",
    power: 119043803,
  },
  {
    server: 11178,
    family: "konoha",
    power: 117942373,
  },
  {
    server: 11179,
    family: "THE_GODS",
    power: 738651854,
  },
  {
    server: 11179,
    family: "RAGNAROK",
    power: 705884431,
  },
  {
    server: 11179,
    family: "Imortals",
    power: 223653082,
  },
  {
    server: 11179,
    family: "Brasileiros",
    power: 139404864,
  },
  {
    server: 11179,
    family: "TITANS",
    power: 118907420,
  },
  {
    server: 11179,
    family: "MALDISÃO",
    power: 114545584,
  },
  {
    server: 11179,
    family: "COLD",
    power: 110974603,
  },
  {
    server: 11179,
    family: "TropaDaFolha",
    power: 107829658,
  },
  {
    server: 11179,
    family: "RENEGADOS",
    power: 99508331,
  },
  {
    server: 11179,
    family: "●BLITZ●",
    power: 99403943,
  },
  {
    server: 11180,
    family: "AKATSUKI",
    power: 698862189,
  },
  {
    server: 11180,
    family: "MushroomKiller",
    power: 587967264,
  },
  {
    server: 11180,
    family: "MIANTRO",
    power: 240117670,
  },
  {
    server: 11180,
    family: "Matarazzo",
    power: 141379002,
  },
  {
    server: 11180,
    family: "TaLiBanS",
    power: 138133031,
  },
  {
    server: 11180,
    family: "VANGUARD",
    power: 127629505,
  },
  {
    server: 11180,
    family: "SINNERS",
    power: 124265360,
  },
  {
    server: 11180,
    family: "RED_BULL",
    power: 104445703,
  },
  {
    server: 11180,
    family: "Brasileiros",
    power: 103263480,
  },
  {
    server: 11180,
    family: "OverLord",
    power: 79517261,
  },
  {
    server: 11181,
    family: "ALIANCE1",
    power: 663040884,
  },
  {
    server: 11181,
    family: "WANTED",
    power: 571703031,
  },
  {
    server: 11181,
    family: "Brasil",
    power: 251199946,
  },
  {
    server: 11181,
    family: "AKATSUKI",
    power: 142272933,
  },
  {
    server: 11181,
    family: "ALIANCE2",
    power: 136003133,
  },
  {
    server: 11181,
    family: "hospício",
    power: 135768076,
  },
  {
    server: 11181,
    family: "Caos",
    power: 112825722,
  },
  {
    server: 11181,
    family: "Shadow",
    power: 106334111,
  },
  {
    server: 11181,
    family: "YoT",
    power: 89720870,
  },
  {
    server: 11181,
    family: "BRAZINO",
    power: 84957786,
  },
  {
    server: 11182,
    family: "BRAZUKAS",
    power: 634712051,
  },
  {
    server: 11182,
    family: "FAMÍLIA",
    power: 494244914,
  },
  {
    server: 11182,
    family: "KONOHA",
    power: 466107354,
  },
  {
    server: 11182,
    family: "ᴏғғ ɢᴀᴍɪɴɢ",
    power: 138648816,
  },
  {
    server: 11182,
    family: "Phoenix",
    power: 121186168,
  },
  {
    server: 11182,
    family: "MW",
    power: 108623974,
  },
  {
    server: 11182,
    family: "NinjaVip",
    power: 101901514,
  },
  {
    server: 11182,
    family: "DrackBurk",
    power: 99103770,
  },
  {
    server: 11182,
    family: "Pain",
    power: 85169323,
  },
  {
    server: 11182,
    family: "ShadowReapers",
    power: 81584569,
  },
  {
    server: 11183,
    family: "WarLords",
    power: 679448836,
  },
  {
    server: 11183,
    family: "Desconhecidos",
    power: 295275208,
  },
  {
    server: 11183,
    family: "AKATSUKI",
    power: 292433036,
  },
  {
    server: 11183,
    family: "《SHIELD》",
    power: 106981364,
  },
  {
    server: 11183,
    family: "T7KㅤACADENY",
    power: 95995970,
  },
  {
    server: 11183,
    family: "MAFIA",
    power: 86964021,
  },
  {
    server: 11183,
    family: "HuntersSA",
    power: 81418359,
  },
  {
    server: 11183,
    family: "Rodrigues",
    power: 78498314,
  },
  {
    server: 11183,
    family: "𝖌𝖔𝖑𝖉𝖊𝖓",
    power: 75734512,
  },
  {
    server: 11183,
    family: "IMPÉRIO",
    power: 70566971,
  },
  {
    server: 11184,
    family: "WarLords",
    power: 669063647,
  },
  {
    server: 11184,
    family: "WarLords²",
    power: 342030957,
  },
  {
    server: 11184,
    family: "ĀRCANJOṢ",
    power: 248174361,
  },
  {
    server: 11184,
    family: "Danger",
    power: 118340688,
  },
  {
    server: 11184,
    family: "alucinados",
    power: 102042818,
  },
  {
    server: 11184,
    family: "RED_BULL",
    power: 99672698,
  },
  {
    server: 11184,
    family: "JR",
    power: 89637682,
  },
  {
    server: 11184,
    family: "BRASIL",
    power: 85866963,
  },
  {
    server: 11184,
    family: "THELEGION",
    power: 79962079,
  },
  {
    server: 11184,
    family: "BlackMushroom",
    power: 76048895,
  },
  {
    server: 11185,
    family: "NewEra",
    power: 609035727,
  },
  {
    server: 11185,
    family: "VIKINGS",
    power: 426696249,
  },
  {
    server: 11185,
    family: "Asgard",
    power: 240537584,
  },
  {
    server: 11185,
    family: "HellMushroom",
    power: 87414960,
  },
  {
    server: 11185,
    family: "Dragons",
    power: 83505464,
  },
  {
    server: 11185,
    family: "Akimbos",
    power: 79184804,
  },
  {
    server: 11185,
    family: "UltmateClan",
    power: 73462672,
  },
  {
    server: 11185,
    family: "BlackSheep",
    power: 69662459,
  },
  {
    server: 11185,
    family: "OsCria",
    power: 66983045,
  },
  {
    server: 11185,
    family: "Imortais",
    power: 62899747,
  },
  {
    server: 11186,
    family: "SoloLeveling",
    power: 603315737,
  },
  {
    server: 11186,
    family: "Resistência_Br",
    power: 316133386,
  },
  {
    server: 11186,
    family: "Shadow",
    power: 137102633,
  },
  {
    server: 11186,
    family: "AKATSUKI_BR",
    power: 101932860,
  },
  {
    server: 11186,
    family: "MushBoomᴹᴮ",
    power: 100632911,
  },
  {
    server: 11186,
    family: "SOLARIE",
    power: 72716860,
  },
  {
    server: 11186,
    family: "BerserkersBR",
    power: 65817280,
  },
  {
    server: 11186,
    family: "Ordem",
    power: 63522212,
  },
  {
    server: 11186,
    family: "InsiderS",
    power: 62527181,
  },
  {
    server: 11186,
    family: "BRASIL",
    power: 62461395,
  },
  {
    server: 11187,
    family: "OnePiece",
    power: 535513446,
  },
  {
    server: 11187,
    family: "CELESTIAL",
    power: 466525214,
  },
  {
    server: 11187,
    family: "RAGNAROK",
    power: 268931552,
  },
  {
    server: 11187,
    family: "Super_Nova",
    power: 68037343,
  },
  {
    server: 11187,
    family: "Nazarek",
    power: 65535800,
  },
  {
    server: 11187,
    family: "OIO",
    power: 60398875,
  },
  {
    server: 11187,
    family: "New_World",
    power: 59852661,
  },
  {
    server: 11187,
    family: "NewAge",
    power: 50510607,
  },
  {
    server: 11187,
    family: "Toxic",
    power: 49920968,
  },
  {
    server: 11187,
    family: "FEB",
    power: 47667034,
  },
  {
    server: 11188,
    family: "𝔚𝔞𝔯𝔯𝔦𝔬𝔯",
    power: 485627816,
  },
  {
    server: 11188,
    family: "OLIMPO",
    power: 455073625,
  },
  {
    server: 11188,
    family: "OVERLORD",
    power: 114281281,
  },
  {
    server: 11188,
    family: "Legion",
    power: 56110143,
  },
  {
    server: 11188,
    family: "Ragnarok",
    power: 54248621,
  },
  {
    server: 11188,
    family: "Fênix",
    power: 51948265,
  },
  {
    server: 11188,
    family: "SPARTANS",
    power: 48377415,
  },
  {
    server: 11188,
    family: "DESTINY",
    power: 41069066,
  },
  {
    server: 11188,
    family: "GUNS_N_ROSES",
    power: 40100481,
  },
  {
    server: 11188,
    family: "Venom",
    power: 38688729,
  },
  {
    server: 11189,
    family: "NightShadow",
    power: 456063218,
  },
  {
    server: 11189,
    family: "Akatsuki",
    power: 427610972,
  },
  {
    server: 11189,
    family: "UniãoBR",
    power: 203583280,
  },
  {
    server: 11189,
    family: "konoha",
    power: 0,
  },
  {
    server: 11189,
    family: "CHAPELﾠDﾠPALHA",
    power: 0,
  },
  {
    server: 11189,
    family: "BRASILSP",
    power: 0,
  },
  {
    server: 11189,
    family: "RetireesOFF",
    power: 0,
  },
  {
    server: 11189,
    family: "OsCalabreSos",
    power: 0,
  },
  {
    server: 11189,
    family: "TD3Talibã🥉",
    power: 0,
  },
  {
    server: 11189,
    family: "Suicidas",
    power: 0,
  },
  {
    server: 11190,
    family: "AKATSUKI",
    power: 445353391,
  },
  {
    server: 11190,
    family: "DragonBorn",
    power: 135969043,
  },
  {
    server: 11190,
    family: "OsCalabreSos",
    power: 107963132,
  },
  {
    server: 11190,
    family: "supremacia",
    power: 0,
  },
  {
    server: 11190,
    family: "KOF",
    power: 0,
  },
  {
    server: 11190,
    family: "MafiaMushroom",
    power: 0,
  },
  {
    server: 11190,
    family: "Jorge_Lag",
    power: 0,
  },
  {
    server: 11190,
    family: "ITS",
    power: 0,
  },
  {
    server: 11190,
    family: "Shogun",
    power: 0,
  },
  {
    server: 11190,
    family: "EliteBR",
    power: 0,
  },
  {
    server: 11191,
    family: "Tιgᥱr᥉",
    power: 129999079,
  },
  {
    server: 11191,
    family: "Viking’S",
    power: 109995846,
  },
  {
    server: 11191,
    family: "KING",
    power: 85172601,
  },
  {
    server: 11191,
    family: "Code⁰⁰⁷",
    power: 0,
  },
  {
    server: 11191,
    family: "XingLing",
    power: 0,
  },
  {
    server: 11191,
    family: "ONE_PIECE",
    power: 0,
  },
  {
    server: 11191,
    family: "LUAㅤSANGRENTA",
    power: 0,
  },
  {
    server: 11191,
    family: "7°Pėčådøs",
    power: 0,
  },
  {
    server: 11191,
    family: "Ragnarok",
    power: 0,
  },
  {
    server: 11191,
    family: "FamíliaMLG",
    power: 0,
  },
  {
    server: 11192,
    family: "VALHALA",
    power: 335612375,
  },
  {
    server: 11192,
    family: "RAGNAROK",
    power: 197476600,
  },
  {
    server: 11192,
    family: "ØLIMPO",
    power: 103412976,
  },
  {
    server: 11192,
    family: "AKATSUKI",
    power: 0,
  },
  {
    server: 11192,
    family: "GROTA",
    power: 0,
  },
  {
    server: 11192,
    family: "Ｎａｚａｒｉｃｋ",
    power: 0,
  },
  {
    server: 11192,
    family: "BRLogHorizon",
    power: 0,
  },
  {
    server: 11192,
    family: "shadowgarden",
    power: 0,
  },
  {
    server: 11192,
    family: "error3333666",
    power: 0,
  },
  {
    server: 11192,
    family: "pauzudos",
    power: 0,
  },
  {
    server: 11193,
    family: "SeekAndDestroy",
    power: 267372886,
  },
  {
    server: 11193,
    family: "PARADOX",
    power: 209511924,
  },
  {
    server: 11193,
    family: "BlackSheep",
    power: 97251378,
  },
  {
    server: 11193,
    family: "TG",
    power: 0,
  },
  {
    server: 11193,
    family: "konoha",
    power: 0,
  },
  {
    server: 11193,
    family: "Cristãos",
    power: 0,
  },
  {
    server: 11193,
    family: "capybara",
    power: 0,
  },
  {
    server: 11193,
    family: "AlcatraZ",
    power: 0,
  },
  {
    server: 11193,
    family: "Invictos",
    power: 0,
  },
  {
    server: 11193,
    family: "Dungeons",
    power: 0,
  },
  {
    server: 11194,
    family: "HitKill",
    power: 236318901,
  },
  {
    server: 11194,
    family: "world",
    power: 73603691,
  },
  {
    server: 11194,
    family: "xmztx",
    power: 53778403,
  },
  {
    server: 11194,
    family: "blackhuars",
    power: 0,
  },
  {
    server: 11194,
    family: "BRASIL",
    power: 0,
  },
  {
    server: 11194,
    family: "DXXZ",
    power: 0,
  },
  {
    server: 11194,
    family: "Sobrenatural",
    power: 0,
  },
  {
    server: 11194,
    family: "BrazukaSLZ",
    power: 0,
  },
  {
    server: 11194,
    family: "TURKISHPOWER",
    power: 0,
  },
  {
    server: 11194,
    family: "AlvegzPower",
    power: 0,
  },
  {
    server: 11195,
    family: "AHJIN_SLㅤ195",
    power: 182024837,
  },
  {
    server: 11195,
    family: "®Brs®B4stardoS",
    power: 84732589,
  },
  {
    server: 11195,
    family: "SecretGarden",
    power: 60165687,
  },
  {
    server: 11195,
    family: "AKATSUKI",
    power: 0,
  },
  {
    server: 11195,
    family: "BRASIL",
    power: 0,
  },
  {
    server: 11195,
    family: "Taberna_Fungos",
    power: 0,
  },
  {
    server: 11195,
    family: "sgt",
    power: 0,
  },
  {
    server: 11195,
    family: "Olimpia",
    power: 0,
  },
  {
    server: 11195,
    family: "MagnosFamily",
    power: 0,
  },
  {
    server: 11195,
    family: "HOGWARTS",
    power: 0,
  },
  {
    server: 11196,
    family: "ᴄᴀʙᴀʀᴇ́",
    power: 179900287,
  },
  {
    server: 11196,
    family: "Brasil",
    power: 124486977,
  },
  {
    server: 11196,
    family: "WORLD",
    power: 50418194,
  },
  {
    server: 11196,
    family: "Fazueli",
    power: 0,
  },
  {
    server: 11196,
    family: "Os_Imortais",
    power: 0,
  },
  {
    server: 11196,
    family: "Dragon",
    power: 0,
  },
  {
    server: 11196,
    family: "Reis_BR",
    power: 0,
  },
  {
    server: 11196,
    family: "ABADDONSHEOL",
    power: 0,
  },
  {
    server: 11196,
    family: "DarkSide",
    power: 0,
  },
  {
    server: 11196,
    family: "OnePiece",
    power: 0,
  },
  {
    server: 11197,
    family: "𝘋𝘪𝘢𝘣𝘭𝘰",
    power: 73485928,
  },
  {
    server: 11197,
    family: "VirtusPro",
    power: 73208278,
  },
  {
    server: 11197,
    family: "OnlySmoke",
    power: 52432601,
  },
  {
    server: 11197,
    family: "Derskay_wl",
    power: 0,
  },
  {
    server: 11197,
    family: "TOXIC",
    power: 0,
  },
  {
    server: 11197,
    family: "CALANGUINHOS",
    power: 0,
  },
  {
    server: 11197,
    family: "GreamRipers",
    power: 0,
  },
  {
    server: 11197,
    family: "꧁Alvorada꧂",
    power: 0,
  },
  {
    server: 11197,
    family: "Baek_Ho",
    power: 0,
  },
  {
    server: 11197,
    family: "Corujas_Fortes",
    power: 0,
  },
  {
    server: 11198,
    family: "ELEMENTARES",
    power: 61891519,
  },
  {
    server: 11198,
    family: "BRAZIL",
    power: 41211178,
  },
  {
    server: 11198,
    family: "DragonBall",
    power: 39669560,
  },
  {
    server: 11198,
    family: "BяK",
    power: 0,
  },
  {
    server: 11198,
    family: "RZR",
    power: 0,
  },
  {
    server: 11198,
    family: "SOLØ_LEVING",
    power: 0,
  },
  {
    server: 11198,
    family: "kamehameha",
    power: 0,
  },
  {
    server: 11198,
    family: "OnlyFans",
    power: 0,
  },
  {
    server: 11198,
    family: "IMPÉRIO",
    power: 0,
  },
  {
    server: 11198,
    family: "DEUSES",
    power: 0,
  },
  {
    server: 11199,
    family: "Serasa",
    power: 56127816,
  },
  {
    server: 11199,
    family: "Tr0LLBr",
    power: 33183499,
  },
  {
    server: 11199,
    family: "_FERAS_",
    power: 0,
  },
  {
    server: 11199,
    family: "RetaliarDivino",
    power: 0,
  },
  {
    server: 11199,
    family: "_spc_",
    power: 0,
  },
  {
    server: 11199,
    family: "Lendarios",
    power: 0,
  },
  {
    server: 11199,
    family: "Blackmonkey",
    power: 0,
  },
  {
    server: 11199,
    family: "LostEmTaubaté",
    power: 0,
  },
  {
    server: 11199,
    family: "noob",
    power: 0,
  },
  {
    server: 11199,
    family: "FukumaMizushi",
    power: 0,
  },
  {
    server: 30001,
    family: "DarkSouls",
    power: 2128685148,
  },
  {
    server: 30001,
    family: "shrooms",
    power: 1724859335,
  },
  {
    server: 30001,
    family: "WorthyShrooms",
    power: 1597473884,
  },
  {
    server: 30001,
    family: "Paragon",
    power: 1541116797,
  },
  {
    server: 30001,
    family: "Solar",
    power: 1215360527,
  },
  {
    server: 30001,
    family: "WorthyShrooms2",
    power: 749464724,
  },
  {
    server: 30001,
    family: "FightersClub",
    power: 624163200,
  },
  {
    server: 30001,
    family: "GrimReapers",
    power: 504858346,
  },
  {
    server: 30001,
    family: "PinkMushroom",
    power: 333402656,
  },
  {
    server: 30001,
    family: "Lumina",
    power: 309817553,
  },
  {
    server: 30002,
    family: "Empire",
    power: 2094117938,
  },
  {
    server: 30002,
    family: "FungusOrder",
    power: 1820890642,
  },
  {
    server: 30002,
    family: "TheHearth",
    power: 1351539889,
  },
  {
    server: 30002,
    family: "Toad",
    power: 701119564,
  },
  {
    server: 30002,
    family: "Goomba",
    power: 640090174,
  },
  {
    server: 30002,
    family: "Funguys",
    power: 487700060,
  },
  {
    server: 30002,
    family: "Backgroundgame",
    power: 307219216,
  },
  {
    server: 30002,
    family: "MagicMashroom",
    power: 271181232,
  },
  {
    server: 30002,
    family: "Wolfpack",
    power: 254082266,
  },
  {
    server: 30002,
    family: "PowerRangers",
    power: 190031800,
  },
  {
    server: 30003,
    family: "METALLICA",
    power: 1928643037,
  },
  {
    server: 30003,
    family: "HighOnMushroom",
    power: 1684660653,
  },
  {
    server: 30003,
    family: "LowOnMushroom",
    power: 839743567,
  },
  {
    server: 30003,
    family: "ATHENA",
    power: 448317409,
  },
  {
    server: 30003,
    family: "MushroomHouse",
    power: 369373468,
  },
  {
    server: 30003,
    family: "FreshShroomies",
    power: 351273571,
  },
  {
    server: 30003,
    family: "Demons",
    power: 326842285,
  },
  {
    server: 30003,
    family: "Legacies",
    power: 298886745,
  },
  {
    server: 30003,
    family: "FrogPals",
    power: 277775916,
  },
  {
    server: 30003,
    family: "Bruh",
    power: 249287825,
  },
  {
    server: 30004,
    family: "MCID",
    power: 2121543563,
  },
  {
    server: 30004,
    family: "Pudding",
    power: 1432894726,
  },
  {
    server: 30004,
    family: "Avengers",
    power: 833253604,
  },
  {
    server: 30004,
    family: "DonnyTheRabbit",
    power: 591663468,
  },
  {
    server: 30004,
    family: "MushroomHeaven",
    power: 308200961,
  },
  {
    server: 30004,
    family: "OnDaShrooms",
    power: 280411808,
  },
  {
    server: 30004,
    family: "simpsVillage",
    power: 271327309,
  },
  {
    server: 30004,
    family: "Casual",
    power: 235593585,
  },
  {
    server: 30004,
    family: "Shroomfies",
    power: 221168968,
  },
  {
    server: 30004,
    family: "UzumakiClan",
    power: 187653933,
  },
  {
    server: 30005,
    family: "Tyranny",
    power: 1722257262,
  },
  {
    server: 30005,
    family: "Supreme",
    power: 1684594179,
  },
  {
    server: 30005,
    family: "Instinct",
    power: 596125571,
  },
  {
    server: 30005,
    family: "Shrooms",
    power: 483509515,
  },
  {
    server: 30005,
    family: "EDL",
    power: 343611285,
  },
  {
    server: 30005,
    family: "TheStrawhats",
    power: 339587544,
  },
  {
    server: 30005,
    family: "Elite",
    power: 250387988,
  },
  {
    server: 30005,
    family: "Moonlight",
    power: 225719342,
  },
  {
    server: 30005,
    family: "PigArmyOnTop",
    power: 193661059,
  },
  {
    server: 30005,
    family: "501stEmpire",
    power: 189990773,
  },
  {
    server: 30006,
    family: "Meowshroom",
    power: 1668013329,
  },
  {
    server: 30006,
    family: "Orphans",
    power: 609810819,
  },
  {
    server: 30006,
    family: "AbyssWalkers",
    power: 460893927,
  },
  {
    server: 30006,
    family: "Dragon",
    power: 284027948,
  },
  {
    server: 30006,
    family: "Mushrevolution",
    power: 259431703,
  },
  {
    server: 30006,
    family: "DragonSlayers",
    power: 233958151,
  },
  {
    server: 30006,
    family: "GodBirth",
    power: 216982905,
  },
  {
    server: 30006,
    family: "Exile",
    power: 194320067,
  },
  {
    server: 30006,
    family: "Aura",
    power: 98736458,
  },
  {
    server: 30006,
    family: "TheRealWorld",
    power: 76032751,
  },
  {
    server: 30007,
    family: "Elite",
    power: 1445076063,
  },
  {
    server: 30007,
    family: "Funguys",
    power: 516216020,
  },
  {
    server: 30007,
    family: "Waffles",
    power: 363394638,
  },
  {
    server: 30007,
    family: "Anthem",
    power: 337842506,
  },
  {
    server: 30007,
    family: "WeOnTop",
    power: 253964819,
  },
  {
    server: 30007,
    family: "Shadowhunters",
    power: 228357490,
  },
  {
    server: 30007,
    family: "BestFamily",
    power: 119620399,
  },
  {
    server: 30007,
    family: "Iehfhurjc",
    power: 94722797,
  },
  {
    server: 30007,
    family: "Shroomcrew",
    power: 70865382,
  },
  {
    server: 30007,
    family: "TheShroomies",
    power: 50929000,
  },
  {
    server: 30008,
    family: "KING",
    power: 1695427826,
  },
  {
    server: 30008,
    family: "TheBlackBulls",
    power: 1060324507,
  },
  {
    server: 30008,
    family: "Candy",
    power: 554070907,
  },
  {
    server: 30008,
    family: "MonkeyLand",
    power: 365511697,
  },
  {
    server: 30008,
    family: "KoolKidsKlan",
    power: 195733856,
  },
  {
    server: 30008,
    family: "Warriors",
    power: 176437215,
  },
  {
    server: 30008,
    family: "Patesozolives",
    power: 130264095,
  },
  {
    server: 30008,
    family: "Theshroomers",
    power: 114985954,
  },
  {
    server: 30008,
    family: "Fire",
    power: 86799655,
  },
  {
    server: 30008,
    family: "dragonslayers",
    power: 70239776,
  },
  {
    server: 30009,
    family: "OREOWARRIORS",
    power: 243636792,
  },
  {
    server: 30009,
    family: "TheMushMen",
    power: 141618463,
  },
  {
    server: 30009,
    family: "DaBomb",
    power: 139451110,
  },
  {
    server: 30009,
    family: "Gamergirls",
    power: 53500023,
  },
  {
    server: 30009,
    family: "NLmushroom",
    power: 31814791,
  },
  {
    server: 30009,
    family: "chunli",
    power: 21165321,
  },
  {
    server: 30009,
    family: "LMKA",
    power: 21126597,
  },
  {
    server: 30009,
    family: "Soppfolket",
    power: 15093553,
  },
  {
    server: 30009,
    family: "DMS",
    power: 14515143,
  },
  {
    server: 30009,
    family: "SweElite",
    power: 14004345,
  },
  {
    server: 30010,
    family: "𝐂𝐑𝐎𝐖𝐍",
    power: 1804438902,
  },
  {
    server: 30010,
    family: "Crownless",
    power: 856837161,
  },
  {
    server: 30010,
    family: "2ndEverFam",
    power: 491919111,
  },
  {
    server: 30010,
    family: "HighOnShrooms",
    power: 233759990,
  },
  {
    server: 30010,
    family: "AstaResistance",
    power: 230234628,
  },
  {
    server: 30010,
    family: "SkinWalkers",
    power: 189700076,
  },
  {
    server: 30010,
    family: "TheStrawHats",
    power: 183392375,
  },
  {
    server: 30010,
    family: "cheesyahmed",
    power: 151388642,
  },
  {
    server: 30010,
    family: "Helldivers",
    power: 89146817,
  },
  {
    server: 30010,
    family: "Nederlanders",
    power: 78739479,
  },
  {
    server: 30011,
    family: "SHROOMSUK",
    power: 1709648632,
  },
  {
    server: 30011,
    family: "Deadend",
    power: 329805727,
  },
  {
    server: 30011,
    family: "BlueDragon",
    power: 323448673,
  },
  {
    server: 30011,
    family: "Overlord",
    power: 308978938,
  },
  {
    server: 30011,
    family: "MUSHUK",
    power: 177663462,
  },
  {
    server: 30011,
    family: "shroomers",
    power: 168116332,
  },
  {
    server: 30011,
    family: "brexitbuddies",
    power: 135588514,
  },
  {
    server: 30011,
    family: "Chaos",
    power: 84392824,
  },
  {
    server: 30011,
    family: "Shrooms",
    power: 51063156,
  },
  {
    server: 30011,
    family: "Winters",
    power: 44830651,
  },
  {
    server: 30012,
    family: "Warriors",
    power: 1710910638,
  },
  {
    server: 30012,
    family: "TripleTrouble",
    power: 326073863,
  },
  {
    server: 30012,
    family: "KitsuneWarrior",
    power: 301413794,
  },
  {
    server: 30012,
    family: "ORPHANS",
    power: 248166494,
  },
  {
    server: 30012,
    family: "Bomboclat",
    power: 244107277,
  },
  {
    server: 30012,
    family: "Deathcaps",
    power: 200166812,
  },
  {
    server: 30012,
    family: "ToadMogs",
    power: 197182081,
  },
  {
    server: 30012,
    family: "Shroomies",
    power: 137346535,
  },
  {
    server: 30012,
    family: "SOLDIERS",
    power: 87605879,
  },
  {
    server: 30012,
    family: "MagicMush",
    power: 34261412,
  },
  {
    server: 30013,
    family: "Mushrooms",
    power: 1486839044,
  },
  {
    server: 30013,
    family: "N3THERWORLD",
    power: 378962861,
  },
  {
    server: 30013,
    family: "ShroomSquad",
    power: 343583638,
  },
  {
    server: 30013,
    family: "Fungalminge",
    power: 284194975,
  },
  {
    server: 30013,
    family: "Gooners",
    power: 225282935,
  },
  {
    server: 30013,
    family: "ToadGank",
    power: 140094121,
  },
  {
    server: 30013,
    family: "Elite",
    power: 99866627,
  },
  {
    server: 30013,
    family: "SHROOMITE",
    power: 94412048,
  },
  {
    server: 30013,
    family: "Necromipodders",
    power: 45800238,
  },
  {
    server: 30013,
    family: "FannyCradock",
    power: 36679374,
  },
  {
    server: 30014,
    family: "Dune",
    power: 1560690504,
  },
  {
    server: 30014,
    family: "FungiAcademy",
    power: 544381198,
  },
  {
    server: 30014,
    family: "braindead",
    power: 344803897,
  },
  {
    server: 30014,
    family: "scribs",
    power: 229979270,
  },
  {
    server: 30014,
    family: "MushroomKings",
    power: 188121014,
  },
  {
    server: 30014,
    family: "9886clan",
    power: 83270221,
  },
  {
    server: 30014,
    family: "Sanctuary",
    power: 57621341,
  },
  {
    server: 30014,
    family: "DeVescy",
    power: 37016520,
  },
  {
    server: 30014,
    family: "UptheBoys",
    power: 31181223,
  },
  {
    server: 30014,
    family: "Yapperschina",
    power: 28734114,
  },
  {
    server: 30015,
    family: "Gods",
    power: 1559012357,
  },
  {
    server: 30015,
    family: "Megs",
    power: 558716424,
  },
  {
    server: 30015,
    family: "STRAWHATS",
    power: 532856929,
  },
  {
    server: 30015,
    family: "X",
    power: 299638105,
  },
  {
    server: 30015,
    family: "Spectrum",
    power: 285769966,
  },
  {
    server: 30015,
    family: "Auschw1tzgank",
    power: 228432166,
  },
  {
    server: 30015,
    family: "Goodvibes",
    power: 79718973,
  },
  {
    server: 30015,
    family: "bob",
    power: 74445980,
  },
  {
    server: 30015,
    family: "Bazingaaa",
    power: 67735965,
  },
  {
    server: 30015,
    family: "Silvercops",
    power: 62770998,
  },
  {
    server: 30016,
    family: "Conquerors",
    power: 1841701083,
  },
  {
    server: 30016,
    family: "AllTheLosers",
    power: 1130714728,
  },
  {
    server: 30016,
    family: "Tesla",
    power: 377852946,
  },
  {
    server: 30016,
    family: "Champignons",
    power: 345282139,
  },
  {
    server: 30016,
    family: "npc_hub",
    power: 215789768,
  },
  {
    server: 30016,
    family: "FamilyGuys",
    power: 191786340,
  },
  {
    server: 30016,
    family: "noodles",
    power: 177574271,
  },
  {
    server: 30016,
    family: "KingdomOfGods",
    power: 141671011,
  },
  {
    server: 30016,
    family: "WhiteDragons",
    power: 90911804,
  },
  {
    server: 30016,
    family: "CREAMPIE4LIFE",
    power: 30904896,
  },
  {
    server: 30017,
    family: "Blue",
    power: 1475174167,
  },
  {
    server: 30017,
    family: "Dark_Angels",
    power: 1258079484,
  },
  {
    server: 30017,
    family: "Ace",
    power: 516918630,
  },
  {
    server: 30017,
    family: "TrueFriends",
    power: 365334778,
  },
  {
    server: 30017,
    family: "SmeggyMenz",
    power: 293525913,
  },
  {
    server: 30017,
    family: "Wah",
    power: 231595404,
  },
  {
    server: 30017,
    family: "the_mushrooms",
    power: 192307258,
  },
  {
    server: 30017,
    family: "Wolves",
    power: 147815455,
  },
  {
    server: 30017,
    family: "Luan",
    power: 144719563,
  },
  {
    server: 30017,
    family: "PolskaHusaria",
    power: 71898076,
  },
  {
    server: 30018,
    family: "Oven",
    power: 1739029323,
  },
  {
    server: 30018,
    family: "MushroomCastle",
    power: 773346791,
  },
  {
    server: 30018,
    family: "TheOne",
    power: 311106676,
  },
  {
    server: 30018,
    family: "LokisArmy",
    power: 282311881,
  },
  {
    server: 30018,
    family: "Baggelonium",
    power: 257358490,
  },
  {
    server: 30018,
    family: "Stronger",
    power: 251788455,
  },
  {
    server: 30018,
    family: "Playhouse",
    power: 230806730,
  },
  {
    server: 30018,
    family: "Sakura",
    power: 208957942,
  },
  {
    server: 30018,
    family: "Goatedlads",
    power: 142935377,
  },
  {
    server: 30018,
    family: "spiderlily",
    power: 44247229,
  },
  {
    server: 30019,
    family: "Hivemind",
    power: 1548853388,
  },
  {
    server: 30019,
    family: "HideYourRice",
    power: 850045916,
  },
  {
    server: 30019,
    family: "MushGoonz",
    power: 429508038,
  },
  {
    server: 30019,
    family: "Restarts",
    power: 326926514,
  },
  {
    server: 30019,
    family: "Shroomfighters",
    power: 269620796,
  },
  {
    server: 30019,
    family: "BEST",
    power: 264569813,
  },
  {
    server: 30019,
    family: "ThePhoenix",
    power: 222622910,
  },
  {
    server: 30019,
    family: "GildedGuzzlers",
    power: 222224702,
  },
  {
    server: 30019,
    family: "Theharrisons",
    power: 115460030,
  },
  {
    server: 30019,
    family: "potatoes",
    power: 90470668,
  },
  {
    server: 30020,
    family: "Shoormlets",
    power: 1457520248,
  },
  {
    server: 30020,
    family: "TheShrooms",
    power: 529264171,
  },
  {
    server: 30020,
    family: "LaFamilia",
    power: 370930099,
  },
  {
    server: 30020,
    family: "Weebs",
    power: 350218426,
  },
  {
    server: 30020,
    family: "Mushymush",
    power: 222403794,
  },
  {
    server: 30020,
    family: "ShroomsRus",
    power: 218617860,
  },
  {
    server: 30020,
    family: "JustTheTip",
    power: 200014285,
  },
  {
    server: 30020,
    family: "90s",
    power: 80996786,
  },
  {
    server: 30020,
    family: "Unknown",
    power: 80548965,
  },
  {
    server: 30020,
    family: "Bros",
    power: 52263999,
  },
  {
    server: 30021,
    family: "ShadowGarden",
    power: 1429463252,
  },
  {
    server: 30021,
    family: "HighLands",
    power: 794791076,
  },
  {
    server: 30021,
    family: "Europa",
    power: 279996854,
  },
  {
    server: 30021,
    family: "cheats",
    power: 226579489,
  },
  {
    server: 30021,
    family: "peggers",
    power: 170813970,
  },
  {
    server: 30021,
    family: "DELTAFORCE",
    power: 127371177,
  },
  {
    server: 30021,
    family: "El_Shroomies",
    power: 76617138,
  },
  {
    server: 30021,
    family: "ARABFAMILY",
    power: 51705515,
  },
  {
    server: 30021,
    family: "MyLittleShroom",
    power: 45494504,
  },
  {
    server: 30021,
    family: "VaultTec",
    power: 25248620,
  },
  {
    server: 30022,
    family: "FireGlobal",
    power: 1628283987,
  },
  {
    server: 30022,
    family: "FungicidalArmy",
    power: 439920207,
  },
  {
    server: 30022,
    family: "Sum",
    power: 333597653,
  },
  {
    server: 30022,
    family: "Inquisition",
    power: 316720660,
  },
  {
    server: 30022,
    family: "Rotterdam",
    power: 193717715,
  },
  {
    server: 30022,
    family: "ChaosLegion",
    power: 155617485,
  },
  {
    server: 30022,
    family: "ALWAYSTRIPPING",
    power: 120807322,
  },
  {
    server: 30022,
    family: "Fuzzsters",
    power: 64221334,
  },
  {
    server: 30022,
    family: "Potatisarna",
    power: 59177043,
  },
  {
    server: 30022,
    family: "Funguys",
    power: 40574420,
  },
  {
    server: 30023,
    family: "Luna",
    power: 1627173644,
  },
  {
    server: 30023,
    family: "TheEMPIRE",
    power: 941605430,
  },
  {
    server: 30023,
    family: "RainbowRaiders",
    power: 291260390,
  },
  {
    server: 30023,
    family: "Shroomfies",
    power: 270963846,
  },
  {
    server: 30023,
    family: "AKUMA",
    power: 243415699,
  },
  {
    server: 30023,
    family: "Shroomventure",
    power: 219866193,
  },
  {
    server: 30023,
    family: "RealHitSquad",
    power: 213501445,
  },
  {
    server: 30023,
    family: "Eternal",
    power: 131288679,
  },
  {
    server: 30023,
    family: "WWJL",
    power: 128057068,
  },
  {
    server: 30023,
    family: "Hyrule",
    power: 92797546,
  },
  {
    server: 30024,
    family: "⭐️Universe",
    power: 1597141722,
  },
  {
    server: 30024,
    family: "FunGhetto",
    power: 1413955072,
  },
  {
    server: 30024,
    family: "GoofyGoobers",
    power: 387598481,
  },
  {
    server: 30024,
    family: "Furry",
    power: 235024812,
  },
  {
    server: 30024,
    family: "Friendly",
    power: 197197117,
  },
  {
    server: 30024,
    family: "PEEPEEPOOPOO",
    power: 151608825,
  },
  {
    server: 30024,
    family: "Spidsnøgenhat",
    power: 125408027,
  },
  {
    server: 30024,
    family: "P1won",
    power: 119488753,
  },
  {
    server: 30024,
    family: "plebs",
    power: 102435694,
  },
  {
    server: 30024,
    family: "Mafia",
    power: 95937866,
  },
  {
    server: 30025,
    family: "CAT",
    power: 1533594686,
  },
  {
    server: 30025,
    family: "BunchOfFunguys",
    power: 923764188,
  },
  {
    server: 30025,
    family: "MightyShroomy",
    power: 414632158,
  },
  {
    server: 30025,
    family: "Pingu33s_Crib",
    power: 352850879,
  },
  {
    server: 30025,
    family: "MushyMushy",
    power: 234357262,
  },
  {
    server: 30025,
    family: "Reflection",
    power: 108965811,
  },
  {
    server: 30025,
    family: "Vengeance",
    power: 84547308,
  },
  {
    server: 30025,
    family: "BOSS",
    power: 77872281,
  },
  {
    server: 30025,
    family: "GOAT",
    power: 38794421,
  },
  {
    server: 30025,
    family: "caratland",
    power: 34841428,
  },
  {
    server: 30026,
    family: "Eclipse",
    power: 1687633240,
  },
  {
    server: 30026,
    family: "EWA",
    power: 881574742,
  },
  {
    server: 30026,
    family: "HellFire",
    power: 450257224,
  },
  {
    server: 30026,
    family: "Valhalla",
    power: 299349907,
  },
  {
    server: 30026,
    family: "welovethc",
    power: 185300833,
  },
  {
    server: 30026,
    family: "SeventhHeaven",
    power: 170715456,
  },
  {
    server: 30026,
    family: "ToxicGamers",
    power: 150089967,
  },
  {
    server: 30026,
    family: "GayFrogNShark",
    power: 142244848,
  },
  {
    server: 30026,
    family: "Polska",
    power: 94803600,
  },
  {
    server: 30026,
    family: "The_only_best",
    power: 63621051,
  },
  {
    server: 30027,
    family: "Retribution",
    power: 1754955488,
  },
  {
    server: 30027,
    family: "Legends",
    power: 446420150,
  },
  {
    server: 30027,
    family: "CALAMITY",
    power: 368963175,
  },
  {
    server: 30027,
    family: "BigFatGypsies",
    power: 357387930,
  },
  {
    server: 30027,
    family: "ForkTounges",
    power: 208027713,
  },
  {
    server: 30027,
    family: "DoubleDutch",
    power: 193312696,
  },
  {
    server: 30027,
    family: "Mystic",
    power: 137543004,
  },
  {
    server: 30027,
    family: "TheGemyBois",
    power: 131998621,
  },
  {
    server: 30027,
    family: "KingCatClan",
    power: 110127551,
  },
  {
    server: 30027,
    family: "mycelium",
    power: 108906192,
  },
  {
    server: 30028,
    family: "Privateers",
    power: 1739663748,
  },
  {
    server: 30028,
    family: "Hallucinating",
    power: 671898673,
  },
  {
    server: 30028,
    family: "TwitchStreamin",
    power: 383754054,
  },
  {
    server: 30028,
    family: "Champs",
    power: 325017915,
  },
  {
    server: 30028,
    family: "The_boys",
    power: 246521629,
  },
  {
    server: 30028,
    family: "Black_Lotus",
    power: 245515669,
  },
  {
    server: 30028,
    family: "AngryMushroom",
    power: 209050627,
  },
  {
    server: 30028,
    family: "QCHARGE",
    power: 165299148,
  },
  {
    server: 30028,
    family: "Legends",
    power: 119533406,
  },
  {
    server: 30028,
    family: "acoustic",
    power: 81310037,
  },
  {
    server: 30029,
    family: "Supreme",
    power: 1856904556,
  },
  {
    server: 30029,
    family: "Confusion",
    power: 663029605,
  },
  {
    server: 30029,
    family: "Bozo",
    power: 465113694,
  },
  {
    server: 30029,
    family: "Psilocybin",
    power: 344908243,
  },
  {
    server: 30029,
    family: "Habibi",
    power: 191610668,
  },
  {
    server: 30029,
    family: "noobs",
    power: 175668445,
  },
  {
    server: 30029,
    family: "Hazbin",
    power: 166792307,
  },
  {
    server: 30029,
    family: "RL",
    power: 135386593,
  },
  {
    server: 30029,
    family: "Champions",
    power: 125004117,
  },
  {
    server: 30029,
    family: "Legends",
    power: 120168753,
  },
  {
    server: 30030,
    family: "Potheads",
    power: 1550340763,
  },
  {
    server: 30030,
    family: "ArcWave",
    power: 615655324,
  },
  {
    server: 30030,
    family: "WarriorsHouse",
    power: 337416157,
  },
  {
    server: 30030,
    family: "Claymore",
    power: 196337773,
  },
  {
    server: 30030,
    family: "inTop",
    power: 179324173,
  },
  {
    server: 30030,
    family: "Smushers",
    power: 166527549,
  },
  {
    server: 30030,
    family: "Shroomers",
    power: 143163784,
  },
  {
    server: 30030,
    family: "Rhfamilytree",
    power: 103876669,
  },
  {
    server: 30030,
    family: "H3llh0und5",
    power: 65209713,
  },
  {
    server: 30030,
    family: "ToadFam",
    power: 57020096,
  },
  {
    server: 30031,
    family: "InfiniteDucks",
    power: 1622722959,
  },
  {
    server: 30031,
    family: "UpRise",
    power: 944155191,
  },
  {
    server: 30031,
    family: "UpRisers",
    power: 552470791,
  },
  {
    server: 30031,
    family: "MagicShrooms",
    power: 367424924,
  },
  {
    server: 30031,
    family: "Kraken_Army",
    power: 267482454,
  },
  {
    server: 30031,
    family: "PARLIAMENT",
    power: 161051080,
  },
  {
    server: 30031,
    family: "D028",
    power: 82421055,
  },
  {
    server: 30031,
    family: "KFC",
    power: 53750877,
  },
  {
    server: 30031,
    family: "furiously_fast",
    power: 50887318,
  },
  {
    server: 30031,
    family: "werecoolest",
    power: 50878777,
  },
  {
    server: 30032,
    family: "Shroom_Lords",
    power: 1357134709,
  },
  {
    server: 30032,
    family: "shroomshire",
    power: 791559541,
  },
  {
    server: 30032,
    family: "pillu",
    power: 392427332,
  },
  {
    server: 30032,
    family: "LEGENDS",
    power: 296440411,
  },
  {
    server: 30032,
    family: "fluffyfellows",
    power: 162089642,
  },
  {
    server: 30032,
    family: "BATTLEshrooms",
    power: 155592161,
  },
  {
    server: 30032,
    family: "TheSnowpack",
    power: 149630044,
  },
  {
    server: 30032,
    family: "TheGiftsvamps",
    power: 145916460,
  },
  {
    server: 30032,
    family: "ClashRoyal",
    power: 63674395,
  },
  {
    server: 30032,
    family: "MushyMushrooms",
    power: 25139032,
  },
  {
    server: 30033,
    family: "ForsakenS33",
    power: 1807165563,
  },
  {
    server: 30033,
    family: "Meow",
    power: 749660375,
  },
  {
    server: 30033,
    family: "ShitakeHappens",
    power: 432037584,
  },
  {
    server: 30033,
    family: "demonZ",
    power: 392160955,
  },
  {
    server: 30033,
    family: "TheMushroomTip",
    power: 365645389,
  },
  {
    server: 30033,
    family: "RAFC",
    power: 325722448,
  },
  {
    server: 30033,
    family: "Paradise",
    power: 310222812,
  },
  {
    server: 30033,
    family: "Brotherhood",
    power: 198856480,
  },
  {
    server: 30033,
    family: "ferrys",
    power: 198410282,
  },
  {
    server: 30033,
    family: "LazyPanda",
    power: 196232373,
  },
  {
    server: 30034,
    family: "Anarchy",
    power: 1502451603,
  },
  {
    server: 30034,
    family: "ToadstoolClub",
    power: 1106676157,
  },
  {
    server: 30034,
    family: "Grubbers",
    power: 403218060,
  },
  {
    server: 30034,
    family: "TheHorde",
    power: 379897007,
  },
  {
    server: 30034,
    family: "hell2theno",
    power: 316814608,
  },
  {
    server: 30034,
    family: "ShroomAcadmy",
    power: 264963684,
  },
  {
    server: 30034,
    family: "FrogSpawns",
    power: 224022288,
  },
  {
    server: 30034,
    family: "Hess",
    power: 196296356,
  },
  {
    server: 30034,
    family: "Munem",
    power: 190996568,
  },
  {
    server: 30034,
    family: "TheCrackden",
    power: 186159595,
  },
  {
    server: 30035,
    family: "Mystic",
    power: 1587364511,
  },
  {
    server: 30035,
    family: "ShroomMcElite",
    power: 1327385456,
  },
  {
    server: 30035,
    family: "flokiflock",
    power: 436244807,
  },
  {
    server: 30035,
    family: "Toodfam",
    power: 249283382,
  },
  {
    server: 30035,
    family: "ATAbros",
    power: 194692011,
  },
  {
    server: 30035,
    family: "mushrooms",
    power: 177688397,
  },
  {
    server: 30035,
    family: "derpAherpa",
    power: 171309174,
  },
  {
    server: 30035,
    family: "meowers",
    power: 131652701,
  },
  {
    server: 30035,
    family: "EliteShrooms",
    power: 80554480,
  },
  {
    server: 30035,
    family: "DILFS",
    power: 38463339,
  },
  {
    server: 30036,
    family: "DarknessR3BORN",
    power: 1709951002,
  },
  {
    server: 30036,
    family: "Hell_Hounds",
    power: 667035057,
  },
  {
    server: 30036,
    family: "Mushroom",
    power: 627104317,
  },
  {
    server: 30036,
    family: "Astral",
    power: 341019581,
  },
  {
    server: 30036,
    family: "DreamShroom",
    power: 319392113,
  },
  {
    server: 30036,
    family: "Death",
    power: 317234262,
  },
  {
    server: 30036,
    family: "RAGNAROK",
    power: 273011221,
  },
  {
    server: 30036,
    family: "Moggers",
    power: 149297021,
  },
  {
    server: 30036,
    family: "Supernovas",
    power: 134723552,
  },
  {
    server: 30036,
    family: "Avengers",
    power: 117377600,
  },
  {
    server: 30037,
    family: "SilverStars",
    power: 1205914734,
  },
  {
    server: 30037,
    family: "UK",
    power: 1002044039,
  },
  {
    server: 30037,
    family: "FungiGang",
    power: 869357944,
  },
  {
    server: 30037,
    family: "fungusWorlds",
    power: 458283866,
  },
  {
    server: 30037,
    family: "NightShrooms",
    power: 201211652,
  },
  {
    server: 30037,
    family: "LEGEND",
    power: 190377909,
  },
  {
    server: 30037,
    family: "TeaParty",
    power: 176025615,
  },
  {
    server: 30037,
    family: "легушка",
    power: 154149511,
  },
  {
    server: 30037,
    family: "Otherworld",
    power: 124760954,
  },
  {
    server: 30037,
    family: "WreckingCrew",
    power: 101550817,
  },
  {
    server: 30038,
    family: "OnlyTheBrave",
    power: 1581076780,
  },
  {
    server: 30038,
    family: "Hyperize",
    power: 770243984,
  },
  {
    server: 30038,
    family: "RagingUnicorn",
    power: 405699861,
  },
  {
    server: 30038,
    family: "Legends",
    power: 350785003,
  },
  {
    server: 30038,
    family: "GOON",
    power: 335571463,
  },
  {
    server: 30038,
    family: "The_Gods",
    power: 224801826,
  },
  {
    server: 30038,
    family: "Krew",
    power: 191795446,
  },
  {
    server: 30038,
    family: "Schroomlegends",
    power: 185685773,
  },
  {
    server: 30038,
    family: "FallenAngels",
    power: 150814307,
  },
  {
    server: 30038,
    family: "urmum",
    power: 97676811,
  },
  {
    server: 30039,
    family: "Elite",
    power: 1684361384,
  },
  {
    server: 30039,
    family: "Coley",
    power: 618577073,
  },
  {
    server: 30039,
    family: "Brazucas",
    power: 344017465,
  },
  {
    server: 30039,
    family: "Guardians",
    power: 317642907,
  },
  {
    server: 30039,
    family: "Falcons",
    power: 295705119,
  },
  {
    server: 30039,
    family: "ShroomRoom",
    power: 280448413,
  },
  {
    server: 30039,
    family: "FOXHOUND",
    power: 253325073,
  },
  {
    server: 30039,
    family: "Specials",
    power: 248157589,
  },
  {
    server: 30039,
    family: "Kitsune",
    power: 175741689,
  },
  {
    server: 30039,
    family: "Suomiperkele",
    power: 169036658,
  },
  {
    server: 30040,
    family: "Radiance",
    power: 1211557176,
  },
  {
    server: 30040,
    family: "Justice",
    power: 1072185998,
  },
  {
    server: 30040,
    family: "SpecialCrew",
    power: 414064062,
  },
  {
    server: 30040,
    family: "Brasov",
    power: 341135280,
  },
  {
    server: 30040,
    family: "Pebroom",
    power: 286077678,
  },
  {
    server: 30040,
    family: "Kingeraal",
    power: 262633863,
  },
  {
    server: 30040,
    family: "free",
    power: 223621847,
  },
  {
    server: 30040,
    family: "TopEN",
    power: 217510880,
  },
  {
    server: 30040,
    family: "LGC",
    power: 197932881,
  },
  {
    server: 30040,
    family: "EnglishShrooms",
    power: 128919924,
  },
  {
    server: 30041,
    family: "Nocturnals",
    power: 1593793728,
  },
  {
    server: 30041,
    family: "fireglobal",
    power: 726848480,
  },
  {
    server: 30041,
    family: "bad",
    power: 536562457,
  },
  {
    server: 30041,
    family: "Night",
    power: 358682503,
  },
  {
    server: 30041,
    family: "shroomvill",
    power: 311438351,
  },
  {
    server: 30041,
    family: "Yipee",
    power: 229341009,
  },
  {
    server: 30041,
    family: "DrakenGuards",
    power: 202574829,
  },
  {
    server: 30041,
    family: "LightningMush",
    power: 157627153,
  },
  {
    server: 30041,
    family: "Jim2touchey",
    power: 102728705,
  },
  {
    server: 30041,
    family: "Decepticons",
    power: 84834062,
  },
  {
    server: 30042,
    family: "WalkingDead",
    power: 1449384401,
  },
  {
    server: 30042,
    family: "VIP",
    power: 1300084258,
  },
  {
    server: 30042,
    family: "DewDog",
    power: 498194871,
  },
  {
    server: 30042,
    family: "Paradoxy",
    power: 358806810,
  },
  {
    server: 30042,
    family: "PALERMO",
    power: 297304237,
  },
  {
    server: 30042,
    family: "Olympe",
    power: 218978446,
  },
  {
    server: 30042,
    family: "DemonSlayers",
    power: 150686605,
  },
  {
    server: 30042,
    family: "Legendary",
    power: 123919268,
  },
  {
    server: 30042,
    family: "Lol",
    power: 118837561,
  },
  {
    server: 30042,
    family: "CrazyShrooms",
    power: 52129514,
  },
  {
    server: 30043,
    family: "TruffleMakers",
    power: 1482513395,
  },
  {
    server: 30043,
    family: "Exiled༒Ones",
    power: 1269668754,
  },
  {
    server: 30043,
    family: "Gods",
    power: 317464800,
  },
  {
    server: 30043,
    family: "Mshrm",
    power: 268129313,
  },
  {
    server: 30043,
    family: "MushWarriors",
    power: 211680259,
  },
  {
    server: 30043,
    family: "tubi…⁠ᘛ⁠⁐̤⁠ᕐ⁠ᐷ",
    power: 209024721,
  },
  {
    server: 30043,
    family: "ShadowWalkerZ",
    power: 182410759,
  },
  {
    server: 30043,
    family: "FungRoom",
    power: 180399426,
  },
  {
    server: 30043,
    family: "deangy38",
    power: 167548879,
  },
  {
    server: 30043,
    family: "Requiem",
    power: 157189180,
  },
  {
    server: 30044,
    family: "XLbullyboys",
    power: 1071200473,
  },
  {
    server: 30044,
    family: "SuicideSquad",
    power: 967131756,
  },
  {
    server: 30044,
    family: "Yggdrasil",
    power: 338691209,
  },
  {
    server: 30044,
    family: "Kenno’s",
    power: 242082915,
  },
  {
    server: 30044,
    family: "THE420FAM",
    power: 222843840,
  },
  {
    server: 30044,
    family: "Skrevsvamp",
    power: 161195039,
  },
  {
    server: 30044,
    family: "JustTheTip",
    power: 159657647,
  },
  {
    server: 30044,
    family: "Olympe",
    power: 113893061,
  },
  {
    server: 30044,
    family: "DummiS",
    power: 41469801,
  },
  {
    server: 30044,
    family: "furrys",
    power: 40185387,
  },
  {
    server: 30045,
    family: "NewImperium",
    power: 1591750003,
  },
  {
    server: 30045,
    family: "LostPlace",
    power: 567596699,
  },
  {
    server: 30045,
    family: "Limitless",
    power: 373874526,
  },
  {
    server: 30045,
    family: "BlackCat",
    power: 304526782,
  },
  {
    server: 30045,
    family: "RavensCroft",
    power: 246159520,
  },
  {
    server: 30045,
    family: "MagicShrooms",
    power: 236460499,
  },
  {
    server: 30045,
    family: "Fungais",
    power: 188442915,
  },
  {
    server: 30045,
    family: "Arctic",
    power: 169801463,
  },
  {
    server: 30045,
    family: "Framzone",
    power: 121517070,
  },
  {
    server: 30045,
    family: "underdogs",
    power: 106650137,
  },
  {
    server: 30046,
    family: "opinionists",
    power: 1219020220,
  },
  {
    server: 30046,
    family: "Unity",
    power: 1165062163,
  },
  {
    server: 30046,
    family: "Cute",
    power: 584322764,
  },
  {
    server: 30046,
    family: "༺Øtoxar༻",
    power: 265926478,
  },
  {
    server: 30046,
    family: "walkingshrooms",
    power: 259461610,
  },
  {
    server: 30046,
    family: "TheSquidd",
    power: 158281038,
  },
  {
    server: 30046,
    family: "Legends_3",
    power: 156854494,
  },
  {
    server: 30046,
    family: "Shroomville",
    power: 127230992,
  },
  {
    server: 30046,
    family: "Shuuush",
    power: 85999529,
  },
  {
    server: 30046,
    family: "Angels",
    power: 43890300,
  },
  {
    server: 30047,
    family: "FAMILY",
    power: 1671557711,
  },
  {
    server: 30047,
    family: "Funguys",
    power: 604254533,
  },
  {
    server: 30047,
    family: "zombies",
    power: 277994722,
  },
  {
    server: 30047,
    family: "England",
    power: 260549583,
  },
  {
    server: 30047,
    family: "BOOM",
    power: 230480290,
  },
  {
    server: 30047,
    family: "GG",
    power: 203441477,
  },
  {
    server: 30047,
    family: "SSSHunter",
    power: 191985194,
  },
  {
    server: 30047,
    family: "toastie",
    power: 188596934,
  },
  {
    server: 30047,
    family: "specialunit",
    power: 176715459,
  },
  {
    server: 30047,
    family: "Jack",
    power: 156724233,
  },
  {
    server: 30048,
    family: "Alpacalypse",
    power: 1705674389,
  },
  {
    server: 30048,
    family: "ShroOmateS",
    power: 842194817,
  },
  {
    server: 30048,
    family: "Alpacademy",
    power: 475498546,
  },
  {
    server: 30048,
    family: "Scottishshroom",
    power: 446706632,
  },
  {
    server: 30048,
    family: "stranger",
    power: 253445192,
  },
  {
    server: 30048,
    family: "TheSinas",
    power: 248144124,
  },
  {
    server: 30048,
    family: "TheMarauders",
    power: 223650124,
  },
  {
    server: 30048,
    family: "Shrooms4Life",
    power: 217858329,
  },
  {
    server: 30048,
    family: "ForTheClueless",
    power: 207842370,
  },
  {
    server: 30048,
    family: "Spores",
    power: 204029912,
  },
  {
    server: 30049,
    family: "Tormentium",
    power: 1661626886,
  },
  {
    server: 30049,
    family: "NoPainNoGain",
    power: 999163218,
  },
  {
    server: 30049,
    family: "Poêlée",
    power: 391435850,
  },
  {
    server: 30049,
    family: "Fam420",
    power: 370497850,
  },
  {
    server: 30049,
    family: "sololeveling",
    power: 314701644,
  },
  {
    server: 30049,
    family: "Animal_Thrower",
    power: 275631904,
  },
  {
    server: 30049,
    family: "MIDNIGHT",
    power: 210601207,
  },
  {
    server: 30049,
    family: "nerf",
    power: 204961732,
  },
  {
    server: 30049,
    family: "British",
    power: 192592038,
  },
  {
    server: 30049,
    family: "Legends",
    power: 161438622,
  },
  {
    server: 30050,
    family: "ULTIMA",
    power: 1592899917,
  },
  {
    server: 30050,
    family: "OP",
    power: 1067947153,
  },
  {
    server: 30050,
    family: "Lucozade",
    power: 770877756,
  },
  {
    server: 30050,
    family: "MapleTree",
    power: 357224471,
  },
  {
    server: 30050,
    family: "SYMNERD",
    power: 292314823,
  },
  {
    server: 30050,
    family: "Smileyriley",
    power: 237096089,
  },
  {
    server: 30050,
    family: "420camp",
    power: 212498118,
  },
  {
    server: 30050,
    family: "OG",
    power: 210138132,
  },
  {
    server: 30050,
    family: "BangBros",
    power: 203510520,
  },
  {
    server: 30050,
    family: "501st",
    power: 162697698,
  },
  {
    server: 30051,
    family: "SmashSquad",
    power: 1623456467,
  },
  {
    server: 30051,
    family: "Shroomtale",
    power: 691827206,
  },
  {
    server: 30051,
    family: "Nightingales",
    power: 533884268,
  },
  {
    server: 30051,
    family: "ItalyLegion",
    power: 325265238,
  },
  {
    server: 30051,
    family: "OnePiece",
    power: 256689101,
  },
  {
    server: 30051,
    family: "KarmineCorp",
    power: 227882152,
  },
  {
    server: 30051,
    family: "ShadowMushroms",
    power: 222392999,
  },
  {
    server: 30051,
    family: "mawsteam",
    power: 205207323,
  },
  {
    server: 30051,
    family: "højris",
    power: 203644931,
  },
  {
    server: 30051,
    family: "thegang",
    power: 66742183,
  },
  {
    server: 30052,
    family: "SoloLeveling",
    power: 1557228010,
  },
  {
    server: 30052,
    family: "LuckyStrike",
    power: 755459410,
  },
  {
    server: 30052,
    family: "Devils_Rejects",
    power: 709807986,
  },
  {
    server: 30052,
    family: "WAKAWArmy",
    power: 339707300,
  },
  {
    server: 30052,
    family: "MicroWave",
    power: 295973705,
  },
  {
    server: 30052,
    family: "funguy",
    power: 278466025,
  },
  {
    server: 30052,
    family: "MushroomCity",
    power: 264330528,
  },
  {
    server: 30052,
    family: "nodribblers",
    power: 232207700,
  },
  {
    server: 30052,
    family: "Mushies",
    power: 206602469,
  },
  {
    server: 30052,
    family: "FamilyHouse",
    power: 201932165,
  },
  {
    server: 30053,
    family: "EUNations",
    power: 1655497675,
  },
  {
    server: 30053,
    family: "EUNationsII",
    power: 858883373,
  },
  {
    server: 30053,
    family: "EUphoria",
    power: 426265023,
  },
  {
    server: 30053,
    family: "Death_Cap",
    power: 285374702,
  },
  {
    server: 30053,
    family: "Justiceshroom",
    power: 281975633,
  },
  {
    server: 30053,
    family: "MUSH_ITA",
    power: 275257536,
  },
  {
    server: 30053,
    family: "toaster",
    power: 177515176,
  },
  {
    server: 30053,
    family: "UKShrooms",
    power: 163770649,
  },
  {
    server: 30053,
    family: "TurdBurglars",
    power: 162385036,
  },
  {
    server: 30053,
    family: "Bonsai",
    power: 129451372,
  },
  {
    server: 30054,
    family: "OP",
    power: 1670408436,
  },
  {
    server: 30054,
    family: "DarkShroomz",
    power: 499944190,
  },
  {
    server: 30054,
    family: "JBL",
    power: 429947806,
  },
  {
    server: 30054,
    family: "Kankrouth",
    power: 325938949,
  },
  {
    server: 30054,
    family: "MagicMushrooms",
    power: 300832467,
  },
  {
    server: 30054,
    family: "GG",
    power: 258148228,
  },
  {
    server: 30054,
    family: "PinkPanther",
    power: 191935111,
  },
  {
    server: 30054,
    family: "DaRatFamily",
    power: 163342546,
  },
  {
    server: 30054,
    family: "Fox",
    power: 141354410,
  },
  {
    server: 30054,
    family: "Devils",
    power: 140590566,
  },
  {
    server: 30055,
    family: "SlayerZ",
    power: 1754828314,
  },
  {
    server: 30055,
    family: "CrimsonDynasty",
    power: 1275197448,
  },
  {
    server: 30055,
    family: "ApexBandits",
    power: 488215547,
  },
  {
    server: 30055,
    family: "Shrooms",
    power: 363479850,
  },
  {
    server: 30055,
    family: "Limitless",
    power: 285688062,
  },
  {
    server: 30055,
    family: "shadow_wolf666",
    power: 280176308,
  },
  {
    server: 30055,
    family: "CHARIZARD",
    power: 256270890,
  },
  {
    server: 30055,
    family: "Deutschland",
    power: 235292945,
  },
  {
    server: 30055,
    family: "Thiha",
    power: 128846862,
  },
  {
    server: 30055,
    family: "FunghiItaliani",
    power: 121939925,
  },
  {
    server: 30056,
    family: "Apex",
    power: 1522239216,
  },
  {
    server: 30056,
    family: "Apex_Academy",
    power: 503196413,
  },
  {
    server: 30056,
    family: "KC_Familly",
    power: 445334151,
  },
  {
    server: 30056,
    family: "cool_people",
    power: 378418864,
  },
  {
    server: 30056,
    family: "TnP",
    power: 300418772,
  },
  {
    server: 30056,
    family: "Legends",
    power: 237294563,
  },
  {
    server: 30056,
    family: "MagicMushroom",
    power: 235113448,
  },
  {
    server: 30056,
    family: "Showmeurs",
    power: 218163605,
  },
  {
    server: 30056,
    family: "OnePiece",
    power: 194737158,
  },
  {
    server: 30056,
    family: "MapleTree",
    power: 191843790,
  },
  {
    server: 30057,
    family: "NOMADS",
    power: 1636276794,
  },
  {
    server: 30057,
    family: "LaFamilia",
    power: 521421047,
  },
  {
    server: 30057,
    family: "HolyTemple",
    power: 418163945,
  },
  {
    server: 30057,
    family: "darkclan",
    power: 407970728,
  },
  {
    server: 30057,
    family: "WePlayDaily",
    power: 376570790,
  },
  {
    server: 30057,
    family: "Saints",
    power: 335450277,
  },
  {
    server: 30057,
    family: "PolLandia",
    power: 292850936,
  },
  {
    server: 30057,
    family: "Nutters",
    power: 252472447,
  },
  {
    server: 30057,
    family: "Ohyeah",
    power: 221041232,
  },
  {
    server: 30057,
    family: "FGuysandFGirls",
    power: 213451760,
  },
  {
    server: 30058,
    family: "DragoniteS",
    power: 1571968254,
  },
  {
    server: 30058,
    family: "Dragonite5",
    power: 726744536,
  },
  {
    server: 30058,
    family: "Psilovybin",
    power: 692868049,
  },
  {
    server: 30058,
    family: "We_Eat_Ass",
    power: 391591507,
  },
  {
    server: 30058,
    family: "Sexyshrooms",
    power: 312092766,
  },
  {
    server: 30058,
    family: "Family",
    power: 281232357,
  },
  {
    server: 30058,
    family: "GreenBanshees",
    power: 229646117,
  },
  {
    server: 30058,
    family: "Elites",
    power: 196987481,
  },
  {
    server: 30058,
    family: "BlackKnights",
    power: 186325885,
  },
  {
    server: 30058,
    family: "PilipinoSquad",
    power: 130603522,
  },
  {
    server: 30059,
    family: "Sky",
    power: 1354425396,
  },
  {
    server: 30059,
    family: "Grubbers",
    power: 557962086,
  },
  {
    server: 30059,
    family: "TwinFlames",
    power: 436486486,
  },
  {
    server: 30059,
    family: "IRAN",
    power: 336828004,
  },
  {
    server: 30059,
    family: "Mushroomgang",
    power: 245487670,
  },
  {
    server: 30059,
    family: "Fullmoon",
    power: 189044232,
  },
  {
    server: 30059,
    family: "SilverForce",
    power: 186021655,
  },
  {
    server: 30059,
    family: "Pantheon",
    power: 179929066,
  },
  {
    server: 30059,
    family: "Utopia",
    power: 48269339,
  },
  {
    server: 30059,
    family: "IMMORTALS",
    power: 46806882,
  },
  {
    server: 30060,
    family: "MagicSmilers",
    power: 1583344666,
  },
  {
    server: 30060,
    family: "LizardLickers",
    power: 1132390316,
  },
  {
    server: 30060,
    family: "Interstellar",
    power: 310999353,
  },
  {
    server: 30060,
    family: "FreeToWin",
    power: 273296113,
  },
  {
    server: 30060,
    family: "Moomoo",
    power: 269356617,
  },
  {
    server: 30060,
    family: "Funguys",
    power: 243895754,
  },
  {
    server: 30060,
    family: "NumberOne",
    power: 214495384,
  },
  {
    server: 30060,
    family: "Manicomio",
    power: 152786981,
  },
  {
    server: 30060,
    family: "FireGlobal",
    power: 141557659,
  },
  {
    server: 30060,
    family: "Fungus_Italy",
    power: 125727811,
  },
  {
    server: 30061,
    family: "Fearless",
    power: 1572461079,
  },
  {
    server: 30061,
    family: "Akatsuki",
    power: 1299727882,
  },
  {
    server: 30061,
    family: "the420fam",
    power: 411972612,
  },
  {
    server: 30061,
    family: "RadiantGarden",
    power: 395607568,
  },
  {
    server: 30061,
    family: "AgentsAreGo",
    power: 375476355,
  },
  {
    server: 30061,
    family: "Penumbra",
    power: 253180699,
  },
  {
    server: 30061,
    family: "WonkyShroomis",
    power: 242598102,
  },
  {
    server: 30061,
    family: "PhantomFungus",
    power: 198179485,
  },
  {
    server: 30061,
    family: "DESTROYERS",
    power: 183548662,
  },
  {
    server: 30061,
    family: "FireGlobal",
    power: 147895824,
  },
  {
    server: 30062,
    family: "ShroomCrew",
    power: 1370035816,
  },
  {
    server: 30062,
    family: "ShiitakeStrike",
    power: 1041246574,
  },
  {
    server: 30062,
    family: "Crackheads",
    power: 328279677,
  },
  {
    server: 30062,
    family: "Notmushroom",
    power: 320577311,
  },
  {
    server: 30062,
    family: "NewHorizon",
    power: 254594693,
  },
  {
    server: 30062,
    family: "SafeHaven",
    power: 245771613,
  },
  {
    server: 30062,
    family: "Happyshrooms",
    power: 226639933,
  },
  {
    server: 30062,
    family: "LATVIJA🫣",
    power: 216958447,
  },
  {
    server: 30062,
    family: "ScoutRegiment",
    power: 215068544,
  },
  {
    server: 30062,
    family: "TheNewWorld",
    power: 214100501,
  },
  {
    server: 30063,
    family: "HomelessWhales",
    power: 1506469099,
  },
  {
    server: 30063,
    family: "Mycelium",
    power: 597215707,
  },
  {
    server: 30063,
    family: "TopShrooms",
    power: 560824587,
  },
  {
    server: 30063,
    family: "legacy",
    power: 429536092,
  },
  {
    server: 30063,
    family: "SailorShroom",
    power: 397260267,
  },
  {
    server: 30063,
    family: "bloodwolfs",
    power: 316007963,
  },
  {
    server: 30063,
    family: "WuTangClan",
    power: 289907502,
  },
  {
    server: 30063,
    family: "AnitaDump",
    power: 259214146,
  },
  {
    server: 30063,
    family: "UnitedKingdom",
    power: 234036008,
  },
  {
    server: 30063,
    family: "norway",
    power: 231386619,
  },
  {
    server: 30064,
    family: "RiseOfShrooms",
    power: 1549989743,
  },
  {
    server: 30064,
    family: "MystykCheese",
    power: 906493615,
  },
  {
    server: 30064,
    family: "Crue",
    power: 514539204,
  },
  {
    server: 30064,
    family: "TheGoats",
    power: 319548782,
  },
  {
    server: 30064,
    family: "Shroomies",
    power: 297712394,
  },
  {
    server: 30064,
    family: "JuicyGang",
    power: 278030122,
  },
  {
    server: 30064,
    family: "FeartheScots",
    power: 237729019,
  },
  {
    server: 30064,
    family: "ShadowzRooms",
    power: 173701996,
  },
  {
    server: 30064,
    family: "ITA",
    power: 146548194,
  },
  {
    server: 30064,
    family: "FireBanshee",
    power: 129155326,
  },
  {
    server: 30065,
    family: "SarielHood",
    power: 1480853822,
  },
  {
    server: 30065,
    family: "SarielHood2",
    power: 1044104399,
  },
  {
    server: 30065,
    family: "Shroomies",
    power: 524497864,
  },
  {
    server: 30065,
    family: "MushVibes",
    power: 338529598,
  },
  {
    server: 30065,
    family: "DungeonDudes",
    power: 308315797,
  },
  {
    server: 30065,
    family: "Aartaples",
    power: 262963168,
  },
  {
    server: 30065,
    family: "SarielHood3",
    power: 250756675,
  },
  {
    server: 30065,
    family: "Mushrooms",
    power: 176209242,
  },
  {
    server: 30065,
    family: "Weezards",
    power: 148272506,
  },
  {
    server: 30065,
    family: "Hato",
    power: 127067536,
  },
  {
    server: 30066,
    family: "OP",
    power: 1370502444,
  },
  {
    server: 30066,
    family: "Olympus",
    power: 977236590,
  },
  {
    server: 30066,
    family: "Otherworld",
    power: 487445197,
  },
  {
    server: 30066,
    family: "Mushrooms",
    power: 477053579,
  },
  {
    server: 30066,
    family: "Opium",
    power: 241660245,
  },
  {
    server: 30066,
    family: "ToxicShrooms",
    power: 214646991,
  },
  {
    server: 30066,
    family: "Ownage",
    power: 210704861,
  },
  {
    server: 30066,
    family: "Italia",
    power: 187291096,
  },
  {
    server: 30066,
    family: "Gladiators",
    power: 155792509,
  },
  {
    server: 30066,
    family: "FunGuy",
    power: 155028840,
  },
  {
    server: 30067,
    family: "Pirates",
    power: 1349815023,
  },
  {
    server: 30067,
    family: "TheFunGuys",
    power: 931319722,
  },
  {
    server: 30067,
    family: "Frenchactif",
    power: 413883353,
  },
  {
    server: 30067,
    family: "russian",
    power: 380227394,
  },
  {
    server: 30067,
    family: "Phoenix",
    power: 349670893,
  },
  {
    server: 30067,
    family: "NOOBS",
    power: 296751115,
  },
  {
    server: 30067,
    family: "Pilzkrieger",
    power: 257083518,
  },
  {
    server: 30067,
    family: "Holigans",
    power: 255283563,
  },
  {
    server: 30067,
    family: "GermanyNextLvL",
    power: 216924957,
  },
  {
    server: 30067,
    family: "Family",
    power: 132225206,
  },
  {
    server: 30068,
    family: "PMU",
    power: 1351485663,
  },
  {
    server: 30068,
    family: "FearLess",
    power: 571805043,
  },
  {
    server: 30068,
    family: "Elite",
    power: 543819895,
  },
  {
    server: 30068,
    family: "MushroomArmy",
    power: 374049027,
  },
  {
    server: 30068,
    family: "ShroomLegends",
    power: 327666523,
  },
  {
    server: 30068,
    family: "DragonSquad",
    power: 301797057,
  },
  {
    server: 30068,
    family: "NumberOne",
    power: 287172533,
  },
  {
    server: 30068,
    family: "Ultrawings",
    power: 276884997,
  },
  {
    server: 30068,
    family: "Infected",
    power: 214219004,
  },
  {
    server: 30068,
    family: "IronBlood",
    power: 198270043,
  },
  {
    server: 30069,
    family: "Serenity",
    power: 1115139057,
  },
  {
    server: 30069,
    family: "Gods",
    power: 1091195542,
  },
  {
    server: 30069,
    family: "Barbie",
    power: 401192041,
  },
  {
    server: 30069,
    family: "Shroomies4life",
    power: 297126658,
  },
  {
    server: 30069,
    family: "BLTfamily",
    power: 276332240,
  },
  {
    server: 30069,
    family: "McSauces",
    power: 270099210,
  },
  {
    server: 30069,
    family: "Star",
    power: 264419303,
  },
  {
    server: 30069,
    family: "BOBBAS",
    power: 227540965,
  },
  {
    server: 30069,
    family: "TheGOATfamily",
    power: 202897449,
  },
  {
    server: 30069,
    family: "Morava",
    power: 132365796,
  },
  {
    server: 30070,
    family: "Peshmerga",
    power: 1321239444,
  },
  {
    server: 30070,
    family: "ShroomsLovers",
    power: 743582862,
  },
  {
    server: 30070,
    family: "Funghetti",
    power: 541375011,
  },
  {
    server: 30070,
    family: "Ryse_Empire",
    power: 286341194,
  },
  {
    server: 30070,
    family: "cc5859",
    power: 253321127,
  },
  {
    server: 30070,
    family: "Mycelium",
    power: 238466494,
  },
  {
    server: 30070,
    family: "friend",
    power: 231835634,
  },
  {
    server: 30070,
    family: "ScoobySnacks",
    power: 212401247,
  },
  {
    server: 30070,
    family: "ČeskéHouby",
    power: 211087888,
  },
  {
    server: 30070,
    family: "yowaimo",
    power: 75622898,
  },
  {
    server: 30071,
    family: "Shadows",
    power: 1306498339,
  },
  {
    server: 30071,
    family: "Dominators",
    power: 774076917,
  },
  {
    server: 30071,
    family: "Hogwarts",
    power: 474654531,
  },
  {
    server: 30071,
    family: "Dark",
    power: 330316827,
  },
  {
    server: 30071,
    family: "Dragon_Riders",
    power: 325124773,
  },
  {
    server: 30071,
    family: "Jupes",
    power: 317390338,
  },
  {
    server: 30071,
    family: "itas",
    power: 258261973,
  },
  {
    server: 30071,
    family: "Lions",
    power: 220318955,
  },
  {
    server: 30071,
    family: "ShadowGarden",
    power: 205360441,
  },
  {
    server: 30071,
    family: "Infinite",
    power: 175335749,
  },
  {
    server: 30072,
    family: "Monarchs",
    power: 1309449010,
  },
  {
    server: 30072,
    family: "OP",
    power: 528349743,
  },
  {
    server: 30072,
    family: "SleepyPanda",
    power: 335883232,
  },
  {
    server: 30072,
    family: "Mushyland",
    power: 332505412,
  },
  {
    server: 30072,
    family: "STR",
    power: 317286424,
  },
  {
    server: 30072,
    family: "DaBoys",
    power: 269279343,
  },
  {
    server: 30072,
    family: "greengang",
    power: 225043891,
  },
  {
    server: 30072,
    family: "HORDE",
    power: 192270588,
  },
  {
    server: 30072,
    family: "Trippy",
    power: 190801908,
  },
  {
    server: 30072,
    family: "SithLegacy",
    power: 177185252,
  },
  {
    server: 30073,
    family: "Berserkers",
    power: 1275637009,
  },
  {
    server: 30073,
    family: "Overlord",
    power: 396992159,
  },
  {
    server: 30073,
    family: "HighStatus",
    power: 318358493,
  },
  {
    server: 30073,
    family: "RISOTTO",
    power: 278676486,
  },
  {
    server: 30073,
    family: "CzechStoners",
    power: 241101882,
  },
  {
    server: 30073,
    family: "Azarions",
    power: 230107091,
  },
  {
    server: 30073,
    family: "BAB",
    power: 226582468,
  },
  {
    server: 30073,
    family: "DreamTeam",
    power: 203466364,
  },
  {
    server: 30073,
    family: "theGAMERS",
    power: 189664572,
  },
  {
    server: 30073,
    family: "Kobra",
    power: 176698610,
  },
  {
    server: 30074,
    family: "Divinity",
    power: 1198304494,
  },
  {
    server: 30074,
    family: "MedCartel",
    power: 444933477,
  },
  {
    server: 30074,
    family: "Here4Fun",
    power: 401680354,
  },
  {
    server: 30074,
    family: "1forAll",
    power: 369478650,
  },
  {
    server: 30074,
    family: "Geofamily",
    power: 319156677,
  },
  {
    server: 30074,
    family: "BlackShroomies",
    power: 235471187,
  },
  {
    server: 30074,
    family: "ForTheEmpire",
    power: 213153550,
  },
  {
    server: 30074,
    family: "Shroomers",
    power: 208466259,
  },
  {
    server: 30074,
    family: "слоник",
    power: 190447985,
  },
  {
    server: 30074,
    family: "OP",
    power: 169213522,
  },
  {
    server: 30075,
    family: "NUGDOME",
    power: 1234789094,
  },
  {
    server: 30075,
    family: "АКТИВНІ",
    power: 619393164,
  },
  {
    server: 30075,
    family: "Legends",
    power: 527571350,
  },
  {
    server: 30075,
    family: "FT",
    power: 324600292,
  },
  {
    server: 30075,
    family: "MoggingMushes",
    power: 302463918,
  },
  {
    server: 30075,
    family: "UKShrooms",
    power: 247988023,
  },
  {
    server: 30075,
    family: "Magyarok",
    power: 240573311,
  },
  {
    server: 30075,
    family: "LunarticMoon28",
    power: 209428210,
  },
  {
    server: 30075,
    family: "PrimalShrooms",
    power: 206081898,
  },
  {
    server: 30075,
    family: "GloryHole",
    power: 162439137,
  },
  {
    server: 30076,
    family: "Funguys",
    power: 1305209743,
  },
  {
    server: 30076,
    family: "Fearless",
    power: 722672718,
  },
  {
    server: 30076,
    family: "ToadStool",
    power: 521410828,
  },
  {
    server: 30076,
    family: "Ashtebex",
    power: 354008758,
  },
  {
    server: 30076,
    family: "demons",
    power: 330790018,
  },
  {
    server: 30076,
    family: "Fighters",
    power: 322792939,
  },
  {
    server: 30076,
    family: "TeamBeast",
    power: 298895203,
  },
  {
    server: 30076,
    family: "Ninja_Clan",
    power: 206607529,
  },
  {
    server: 30076,
    family: "HalaMadrid",
    power: 185823749,
  },
  {
    server: 30076,
    family: "RedDragons",
    power: 168039019,
  },
  {
    server: 30077,
    family: "TwinFlames",
    power: 1138197893,
  },
  {
    server: 30077,
    family: "NgFrench",
    power: 763717713,
  },
  {
    server: 30077,
    family: "SiyahSancak",
    power: 422013910,
  },
  {
    server: 30077,
    family: "Darkness",
    power: 408477681,
  },
  {
    server: 30077,
    family: "InFlames",
    power: 330601082,
  },
  {
    server: 30077,
    family: "Germany",
    power: 298539040,
  },
  {
    server: 30077,
    family: "Rebellion",
    power: 250588355,
  },
  {
    server: 30077,
    family: "Grubbers",
    power: 221459551,
  },
  {
    server: 30077,
    family: "NoLiMiT",
    power: 183332275,
  },
  {
    server: 30077,
    family: "toriyamasaiyan",
    power: 152119502,
  },
  {
    server: 30078,
    family: "demonZ",
    power: 1221458736,
  },
  {
    server: 30078,
    family: "Grubbers",
    power: 659698685,
  },
  {
    server: 30078,
    family: "magicshrooms",
    power: 366516281,
  },
  {
    server: 30078,
    family: "Nightmares",
    power: 336936989,
  },
  {
    server: 30078,
    family: "Ohana",
    power: 288549342,
  },
  {
    server: 30078,
    family: "OP",
    power: 243479556,
  },
  {
    server: 30078,
    family: "Shroomies🤍",
    power: 213133423,
  },
  {
    server: 30078,
    family: "melloncatgang",
    power: 193982300,
  },
  {
    server: 30078,
    family: "DieGefährten",
    power: 191176870,
  },
  {
    server: 30078,
    family: "Ege",
    power: 180782510,
  },
  {
    server: 30079,
    family: "Legends",
    power: 1193179323,
  },
  {
    server: 30079,
    family: "ILikeRocks",
    power: 561118006,
  },
  {
    server: 30079,
    family: "EliteShrooms",
    power: 549482252,
  },
  {
    server: 30079,
    family: "CzechFamily",
    power: 321414369,
  },
  {
    server: 30079,
    family: "hyper",
    power: 252509827,
  },
  {
    server: 30079,
    family: "FreeloaderBro",
    power: 248266006,
  },
  {
    server: 30079,
    family: "ANIME",
    power: 170801805,
  },
  {
    server: 30079,
    family: "Bighunter",
    power: 163152244,
  },
  {
    server: 30079,
    family: "guffy",
    power: 127431046,
  },
  {
    server: 30079,
    family: "KingPins",
    power: 105000535,
  },
  {
    server: 30080,
    family: "F2P",
    power: 1168689300,
  },
  {
    server: 30080,
    family: "Legends",
    power: 581784806,
  },
  {
    server: 30080,
    family: "shroomydoomy",
    power: 278993606,
  },
  {
    server: 30080,
    family: "GRANS_ARMY",
    power: 245438857,
  },
  {
    server: 30080,
    family: "SkCz",
    power: 219697680,
  },
  {
    server: 30080,
    family: "Evolve",
    power: 198639331,
  },
  {
    server: 30080,
    family: "Atlas",
    power: 198059313,
  },
  {
    server: 30080,
    family: "Abrokilla",
    power: 189894347,
  },
  {
    server: 30080,
    family: "teemo",
    power: 186044589,
  },
  {
    server: 30080,
    family: "Familyworld",
    power: 99367483,
  },
  {
    server: 30081,
    family: "Warriors",
    power: 1190570012,
  },
  {
    server: 30081,
    family: "KINGS",
    power: 525521828,
  },
  {
    server: 30081,
    family: "Dutchies",
    power: 249060608,
  },
  {
    server: 30081,
    family: "Focus",
    power: 227816923,
  },
  {
    server: 30081,
    family: "MegaShrooms",
    power: 216815535,
  },
  {
    server: 30081,
    family: "MushroomHill",
    power: 201405158,
  },
  {
    server: 30081,
    family: "EternalLegends",
    power: 199173967,
  },
  {
    server: 30081,
    family: "Svenskasvampar",
    power: 183353454,
  },
  {
    server: 30081,
    family: "Slovak_Cech",
    power: 156347215,
  },
  {
    server: 30081,
    family: "Gronk",
    power: 68378207,
  },
  {
    server: 30082,
    family: "MushPit82",
    power: 1240454907,
  },
  {
    server: 30082,
    family: "Truffles",
    power: 522051827,
  },
  {
    server: 30082,
    family: "JujutsuKaisen",
    power: 500146482,
  },
  {
    server: 30082,
    family: "ITALIA",
    power: 452667675,
  },
  {
    server: 30082,
    family: "MightyMush",
    power: 186515007,
  },
  {
    server: 30082,
    family: "ÁguaDasPedras",
    power: 181918407,
  },
  {
    server: 30082,
    family: "Shroom_Garden",
    power: 169391266,
  },
  {
    server: 30082,
    family: "hello",
    power: 146977021,
  },
  {
    server: 30082,
    family: "RuiN",
    power: 46279704,
  },
  {
    server: 30082,
    family: "TheNewbies",
    power: 39754297,
  },
  {
    server: 30083,
    family: "SHROOMS",
    power: 1031478644,
  },
  {
    server: 30083,
    family: "ShroomOrder",
    power: 588780207,
  },
  {
    server: 30083,
    family: "Tea",
    power: 231503616,
  },
  {
    server: 30083,
    family: "Cokeine",
    power: 204808718,
  },
  {
    server: 30083,
    family: "Legion",
    power: 186820177,
  },
  {
    server: 30083,
    family: "Myrmidones",
    power: 182525316,
  },
  {
    server: 30083,
    family: "GANJALF",
    power: 179221741,
  },
  {
    server: 30083,
    family: "EUNATIONS",
    power: 91758337,
  },
  {
    server: 30083,
    family: "Assassins",
    power: 53995141,
  },
  {
    server: 30083,
    family: "Clove",
    power: 52152626,
  },
  {
    server: 30084,
    family: "HakunaMatata",
    power: 954019997,
  },
  {
    server: 30084,
    family: "LordOfTheRings",
    power: 375100208,
  },
  {
    server: 30084,
    family: "KING",
    power: 322875543,
  },
  {
    server: 30084,
    family: "Deeeeeaaaaaath",
    power: 184200162,
  },
  {
    server: 30084,
    family: "MagyarGombák",
    power: 174278711,
  },
  {
    server: 30084,
    family: "iammooshroom",
    power: 161897666,
  },
  {
    server: 30084,
    family: "4fun",
    power: 148474784,
  },
  {
    server: 30084,
    family: "Talented",
    power: 89840619,
  },
  {
    server: 30084,
    family: "MCAD",
    power: 25245898,
  },
  {
    server: 30084,
    family: "The…",
    power: 9737674,
  },
  {
    server: 30085,
    family: "NightWalkers",
    power: 1037668571,
  },
  {
    server: 30085,
    family: "AddavadaiCorp",
    power: 864970233,
  },
  {
    server: 30085,
    family: "ZeroClub",
    power: 413798326,
  },
  {
    server: 30085,
    family: "Falango",
    power: 315208878,
  },
  {
    server: 30085,
    family: "Munchies",
    power: 302085075,
  },
  {
    server: 30085,
    family: "giggity",
    power: 155783238,
  },
  {
    server: 30085,
    family: "CZEaSVK",
    power: 152060717,
  },
  {
    server: 30085,
    family: "TreeOfLife",
    power: 63813463,
  },
  {
    server: 30085,
    family: "TheCraker_clan",
    power: 54308379,
  },
  {
    server: 30085,
    family: "czsk",
    power: 21417522,
  },
  {
    server: 30086,
    family: "Legacy",
    power: 936075422,
  },
  {
    server: 30086,
    family: "Immortals",
    power: 574128974,
  },
  {
    server: 30086,
    family: "CasualTrippers",
    power: 283868108,
  },
  {
    server: 30086,
    family: "ATOM",
    power: 240316903,
  },
  {
    server: 30086,
    family: "Mushrooms",
    power: 204133682,
  },
  {
    server: 30086,
    family: "Mushgang",
    power: 162569988,
  },
  {
    server: 30086,
    family: "teemo",
    power: 149313488,
  },
  {
    server: 30086,
    family: "BurmeseFamily",
    power: 35523089,
  },
  {
    server: 30086,
    family: "EMPERORS",
    power: 30840230,
  },
  {
    server: 30086,
    family: "DemonLordsArmy",
    power: 15310189,
  },
  {
    server: 30087,
    family: "Monster",
    power: 1071550082,
  },
  {
    server: 30087,
    family: "Alpha",
    power: 350802281,
  },
  {
    server: 30087,
    family: "Darkness",
    power: 228167043,
  },
  {
    server: 30087,
    family: "immortals",
    power: 193807660,
  },
  {
    server: 30087,
    family: "KING",
    power: 179243382,
  },
  {
    server: 30087,
    family: "roadmen",
    power: 157260657,
  },
  {
    server: 30087,
    family: "Dark",
    power: 147653893,
  },
  {
    server: 30087,
    family: "jellybeans",
    power: 139087310,
  },
  {
    server: 30087,
    family: "Losstrawhats",
    power: 65610674,
  },
  {
    server: 30087,
    family: "Darksiders",
    power: 24151529,
  },
  {
    server: 30088,
    family: "OnlyTheBest",
    power: 941762877,
  },
  {
    server: 30088,
    family: "ANARCHY",
    power: 744345810,
  },
  {
    server: 30088,
    family: "GodFathers",
    power: 269838997,
  },
  {
    server: 30088,
    family: "Shroompire",
    power: 238503739,
  },
  {
    server: 30088,
    family: "elites",
    power: 195106558,
  },
  {
    server: 30088,
    family: "MushKingdom",
    power: 184722551,
  },
  {
    server: 30088,
    family: "MushSoup",
    power: 171023027,
  },
  {
    server: 30088,
    family: "TeamEurope",
    power: 163419415,
  },
  {
    server: 30088,
    family: "Shroomski",
    power: 142492564,
  },
  {
    server: 30088,
    family: "Motherworld",
    power: 105234416,
  },
  {
    server: 30089,
    family: "Immortals",
    power: 798579562,
  },
  {
    server: 30089,
    family: "Elites",
    power: 744215343,
  },
  {
    server: 30089,
    family: "reet",
    power: 370436247,
  },
  {
    server: 30089,
    family: "MANITARIA",
    power: 177192557,
  },
  {
    server: 30089,
    family: "LORDS",
    power: 172623250,
  },
  {
    server: 30089,
    family: "Better",
    power: 150076975,
  },
  {
    server: 30089,
    family: "shroomers",
    power: 97799574,
  },
  {
    server: 30089,
    family: "KeepersOfLight",
    power: 88103163,
  },
  {
    server: 30089,
    family: "yesir",
    power: 83190117,
  },
  {
    server: 30089,
    family: "papulines",
    power: 16791218,
  },
  {
    server: 30090,
    family: "Legends",
    power: 979099387,
  },
  {
    server: 30090,
    family: "ShadowArmy",
    power: 288513913,
  },
  {
    server: 30090,
    family: "thefungiys",
    power: 218222405,
  },
  {
    server: 30090,
    family: "MoggingMushes",
    power: 182764681,
  },
  {
    server: 30090,
    family: "Fellowship",
    power: 159553646,
  },
  {
    server: 30090,
    family: "AToMY",
    power: 146768865,
  },
  {
    server: 30090,
    family: "Legacy",
    power: 119485865,
  },
  {
    server: 30090,
    family: "Elite",
    power: 118236755,
  },
  {
    server: 30090,
    family: "oogabooga",
    power: 83315266,
  },
  {
    server: 30090,
    family: "Darksouls",
    power: 53703624,
  },
  {
    server: 30091,
    family: "CrustyKrabs",
    power: 1043346817,
  },
  {
    server: 30091,
    family: "Coins’R’us",
    power: 341952584,
  },
  {
    server: 30091,
    family: "Kings",
    power: 297598889,
  },
  {
    server: 30091,
    family: "TheFam",
    power: 183469041,
  },
  {
    server: 30091,
    family: "immortals",
    power: 171687454,
  },
  {
    server: 30091,
    family: "Degenerates",
    power: 151402649,
  },
  {
    server: 30091,
    family: "DeBrickas",
    power: 146845906,
  },
  {
    server: 30091,
    family: "FamilyName",
    power: 132503019,
  },
  {
    server: 30091,
    family: "HocusPocus",
    power: 121992839,
  },
  {
    server: 30091,
    family: "Peperoni",
    power: 83343795,
  },
  {
    server: 30092,
    family: "Amanita",
    power: 942475445,
  },
  {
    server: 30092,
    family: "TropicMorte",
    power: 508960895,
  },
  {
    server: 30092,
    family: "Greekshrooms",
    power: 311406207,
  },
  {
    server: 30092,
    family: "WrathOfShroom",
    power: 163360841,
  },
  {
    server: 30092,
    family: "Death",
    power: 161900344,
  },
  {
    server: 30092,
    family: "Legends",
    power: 154146822,
  },
  {
    server: 30092,
    family: "shroomers",
    power: 143360245,
  },
  {
    server: 30092,
    family: "Overlord",
    power: 59738602,
  },
  {
    server: 30092,
    family: "GOOSE",
    power: 42389796,
  },
  {
    server: 30092,
    family: "Honey_Badgers",
    power: 18307535,
  },
  {
    server: 30093,
    family: "Veterans",
    power: 919536379,
  },
  {
    server: 30093,
    family: "MushKings",
    power: 458854810,
  },
  {
    server: 30093,
    family: "Hellas",
    power: 379835492,
  },
  {
    server: 30093,
    family: "TheHell",
    power: 174974131,
  },
  {
    server: 30093,
    family: "Overlords",
    power: 169111833,
  },
  {
    server: 30093,
    family: "Sativa",
    power: 153486968,
  },
  {
    server: 30093,
    family: "Void",
    power: 121267511,
  },
  {
    server: 30093,
    family: "panther1black",
    power: 112720745,
  },
  {
    server: 30093,
    family: "Serenity",
    power: 112247274,
  },
  {
    server: 30093,
    family: "malaxeurdeburn",
    power: 53593252,
  },
  {
    server: 30094,
    family: "WARRIORS",
    power: 1036945144,
  },
  {
    server: 30094,
    family: "Divine",
    power: 626623994,
  },
  {
    server: 30094,
    family: "Munchers",
    power: 355283276,
  },
  {
    server: 30094,
    family: "DutchWarrior",
    power: 179319339,
  },
  {
    server: 30094,
    family: "Mugiwara",
    power: 174416225,
  },
  {
    server: 30094,
    family: "ZINZINSPACE",
    power: 172677920,
  },
  {
    server: 30094,
    family: "AlphaPack",
    power: 151399896,
  },
  {
    server: 30094,
    family: "GoldenEagle",
    power: 95307475,
  },
  {
    server: 30094,
    family: "moongarden",
    power: 72144955,
  },
  {
    server: 30094,
    family: "mushyboiss",
    power: 67477450,
  },
  {
    server: 30095,
    family: "TheLasTSaviorS",
    power: 759006129,
  },
  {
    server: 30095,
    family: "ToxicFamily",
    power: 697763915,
  },
  {
    server: 30095,
    family: "TheImmortals",
    power: 568561816,
  },
  {
    server: 30095,
    family: "ShroomFriends",
    power: 238252940,
  },
  {
    server: 30095,
    family: "SINNERS",
    power: 211544767,
  },
  {
    server: 30095,
    family: "younglaRats",
    power: 190340218,
  },
  {
    server: 30095,
    family: "BratiaSlovaci",
    power: 170323598,
  },
  {
    server: 30095,
    family: "WeedTM",
    power: 108823042,
  },
  {
    server: 30095,
    family: "Firmworm",
    power: 106952113,
  },
  {
    server: 30095,
    family: "the_enders",
    power: 70996925,
  },
  {
    server: 30096,
    family: "APE",
    power: 884813956,
  },
  {
    server: 30096,
    family: "JustTheTip",
    power: 589103866,
  },
  {
    server: 30096,
    family: "crouwn",
    power: 337999240,
  },
  {
    server: 30096,
    family: "Mooshies",
    power: 180165300,
  },
  {
    server: 30096,
    family: "MushroomWars",
    power: 178667344,
  },
  {
    server: 30096,
    family: "charlizard",
    power: 151514320,
  },
  {
    server: 30096,
    family: "CRObros",
    power: 148473107,
  },
  {
    server: 30096,
    family: "MushyMushroom",
    power: 126332973,
  },
  {
    server: 30096,
    family: "GoonShrooms",
    power: 113620574,
  },
  {
    server: 30096,
    family: "LEGENDS",
    power: 85670724,
  },
  {
    server: 30097,
    family: "DrunkenShrooms",
    power: 1025803213,
  },
  {
    server: 30097,
    family: "Puppysquad",
    power: 338926537,
  },
  {
    server: 30097,
    family: "BigBears",
    power: 272608935,
  },
  {
    server: 30097,
    family: "TheBest",
    power: 195337717,
  },
  {
    server: 30097,
    family: "Secret",
    power: 186958347,
  },
  {
    server: 30097,
    family: "Boisa",
    power: 168481773,
  },
  {
    server: 30097,
    family: "MushroomMercy",
    power: 164373647,
  },
  {
    server: 30097,
    family: "Grzibyyy",
    power: 163771312,
  },
  {
    server: 30097,
    family: "MushroomLegend",
    power: 154634265,
  },
  {
    server: 30097,
    family: "AhJin",
    power: 17320896,
  },
  {
    server: 30098,
    family: "Legion",
    power: 1079086873,
  },
  {
    server: 30098,
    family: "LegionMane",
    power: 601410023,
  },
  {
    server: 30098,
    family: "HighOnMushroom",
    power: 258606537,
  },
  {
    server: 30098,
    family: "BeastSlayers",
    power: 185831728,
  },
  {
    server: 30098,
    family: "SAMARITANS",
    power: 166923240,
  },
  {
    server: 30098,
    family: "moooshrooms",
    power: 157567586,
  },
  {
    server: 30098,
    family: "Mushrooms",
    power: 156977702,
  },
  {
    server: 30098,
    family: "Danes",
    power: 127597503,
  },
  {
    server: 30098,
    family: "no",
    power: 102545806,
  },
  {
    server: 30098,
    family: "Finland",
    power: 81923094,
  },
  {
    server: 30099,
    family: "Pokémon",
    power: 1065026591,
  },
  {
    server: 30099,
    family: "PokéAcademy",
    power: 506789619,
  },
  {
    server: 30099,
    family: "CashDollaMoney",
    power: 342932607,
  },
  {
    server: 30099,
    family: "ShroomsShire",
    power: 203467781,
  },
  {
    server: 30099,
    family: "TroubleClub",
    power: 194279452,
  },
  {
    server: 30099,
    family: "DLJarmy",
    power: 176375731,
  },
  {
    server: 30099,
    family: "TinderForever",
    power: 161958623,
  },
  {
    server: 30099,
    family: "ShroomGang",
    power: 159237070,
  },
  {
    server: 30099,
    family: "symbiotic",
    power: 143424314,
  },
  {
    server: 30099,
    family: "MushROOM",
    power: 81229685,
  },
  {
    server: 30100,
    family: "BWC",
    power: 971267988,
  },
  {
    server: 30100,
    family: "GoldenEagles",
    power: 364394885,
  },
  {
    server: 30100,
    family: "SpyXFamily",
    power: 227140222,
  },
  {
    server: 30100,
    family: "FireFist",
    power: 175018871,
  },
  {
    server: 30100,
    family: "megaverse",
    power: 141826736,
  },
  {
    server: 30100,
    family: "OP",
    power: 129224732,
  },
  {
    server: 30100,
    family: "Gēñøçídē",
    power: 122881687,
  },
  {
    server: 30100,
    family: "W○W○",
    power: 70928293,
  },
  {
    server: 30100,
    family: "Lamikov",
    power: 30530893,
  },
  {
    server: 30100,
    family: "BigBootyBitch",
    power: 16056237,
  },
  {
    server: 30101,
    family: "GoldGunz",
    power: 779941230,
  },
  {
    server: 30101,
    family: "CHAOS",
    power: 736091447,
  },
  {
    server: 30101,
    family: "Akatsuki",
    power: 412286762,
  },
  {
    server: 30101,
    family: "alright",
    power: 170608860,
  },
  {
    server: 30101,
    family: "EinsNeun",
    power: 150916433,
  },
  {
    server: 30101,
    family: "SupaNicka",
    power: 143827885,
  },
  {
    server: 30101,
    family: "luznalelsi",
    power: 130641456,
  },
  {
    server: 30101,
    family: "Legacy",
    power: 130248114,
  },
  {
    server: 30101,
    family: "Dummer_Hu",
    power: 122773710,
  },
  {
    server: 30101,
    family: "SinnerS",
    power: 121559167,
  },
  {
    server: 30102,
    family: "Spartans",
    power: 773459188,
  },
  {
    server: 30102,
    family: "Toadstool",
    power: 751679423,
  },
  {
    server: 30102,
    family: "Solo",
    power: 268177625,
  },
  {
    server: 30102,
    family: "familyfungi",
    power: 162996696,
  },
  {
    server: 30102,
    family: "GodShroom",
    power: 157064824,
  },
  {
    server: 30102,
    family: "Psyfamily",
    power: 147972233,
  },
  {
    server: 30102,
    family: "BearlyShrooms",
    power: 146862329,
  },
  {
    server: 30102,
    family: "TheImmortals",
    power: 131463504,
  },
  {
    server: 30102,
    family: "TopG",
    power: 114205025,
  },
  {
    server: 30102,
    family: "Godfathers",
    power: 82506743,
  },
  {
    server: 30103,
    family: "Judgement",
    power: 802207559,
  },
  {
    server: 30103,
    family: "Celestials",
    power: 742612084,
  },
  {
    server: 30103,
    family: "FACTION4",
    power: 355855580,
  },
  {
    server: 30103,
    family: "WildCats",
    power: 175954645,
  },
  {
    server: 30103,
    family: "striker",
    power: 170769983,
  },
  {
    server: 30103,
    family: "EL_MEU_OVO",
    power: 146818209,
  },
  {
    server: 30103,
    family: "Road2Glory",
    power: 135967180,
  },
  {
    server: 30103,
    family: "poaahh",
    power: 93468389,
  },
  {
    server: 30103,
    family: "KINGDOMHEARTS",
    power: 80269878,
  },
  {
    server: 30103,
    family: "Hungary",
    power: 76477825,
  },
  {
    server: 30104,
    family: "Mycelium",
    power: 758764601,
  },
  {
    server: 30104,
    family: "Mvp",
    power: 621483608,
  },
  {
    server: 30104,
    family: "Dreadnaughts",
    power: 260437172,
  },
  {
    server: 30104,
    family: "PROUD_MUSHROOM",
    power: 161019741,
  },
  {
    server: 30104,
    family: "Family",
    power: 141677142,
  },
  {
    server: 30104,
    family: "10k_above",
    power: 133129633,
  },
  {
    server: 30104,
    family: "codegoofy",
    power: 130566071,
  },
  {
    server: 30104,
    family: "R4CH",
    power: 127489356,
  },
  {
    server: 30104,
    family: "LDogs",
    power: 120713923,
  },
  {
    server: 30104,
    family: "Gayboys",
    power: 56475015,
  },
  {
    server: 30105,
    family: "DoomShrooms",
    power: 952979262,
  },
  {
    server: 30105,
    family: "Pantheon",
    power: 387287266,
  },
  {
    server: 30105,
    family: "Truth",
    power: 361857218,
  },
  {
    server: 30105,
    family: "NiceOnes",
    power: 215224959,
  },
  {
    server: 30105,
    family: "Warriors",
    power: 149125034,
  },
  {
    server: 30105,
    family: "Aimex",
    power: 140959195,
  },
  {
    server: 30105,
    family: "Therock",
    power: 116163642,
  },
  {
    server: 30105,
    family: "Legends",
    power: 115524114,
  },
  {
    server: 30105,
    family: "Itsuki",
    power: 109260251,
  },
  {
    server: 30105,
    family: "Phoenix",
    power: 102591970,
  },
  {
    server: 30106,
    family: "Utopia",
    power: 863263210,
  },
  {
    server: 30106,
    family: "Verge",
    power: 400178079,
  },
  {
    server: 30106,
    family: "UnNainConnu",
    power: 243113919,
  },
  {
    server: 30106,
    family: "Orchid",
    power: 208160026,
  },
  {
    server: 30106,
    family: "Legends",
    power: 168803917,
  },
  {
    server: 30106,
    family: "Avengers",
    power: 162402135,
  },
  {
    server: 30106,
    family: "RedBull",
    power: 158235694,
  },
  {
    server: 30106,
    family: "Imperium",
    power: 130974798,
  },
  {
    server: 30106,
    family: "Coupains",
    power: 126584936,
  },
  {
    server: 30106,
    family: "4L0N3",
    power: 67553081,
  },
  {
    server: 30107,
    family: "Shroomies",
    power: 865306708,
  },
  {
    server: 30107,
    family: "Valhalla",
    power: 446847010,
  },
  {
    server: 30107,
    family: "schroomunity",
    power: 402835166,
  },
  {
    server: 30107,
    family: "Sporetacular",
    power: 192351167,
  },
  {
    server: 30107,
    family: "Dragonball",
    power: 181484898,
  },
  {
    server: 30107,
    family: "shroomies",
    power: 160560774,
  },
  {
    server: 30107,
    family: "ShroomArmy",
    power: 156202273,
  },
  {
    server: 30107,
    family: "Bagira",
    power: 155177117,
  },
  {
    server: 30107,
    family: "elitemushers",
    power: 150497942,
  },
  {
    server: 30107,
    family: "Gusters",
    power: 137089559,
  },
  {
    server: 30108,
    family: "WhiteLotus🪷",
    power: 773620774,
  },
  {
    server: 30108,
    family: "Pokemon",
    power: 658854692,
  },
  {
    server: 30108,
    family: "GourmetWorld",
    power: 464639469,
  },
  {
    server: 30108,
    family: "SteelTitans",
    power: 160254573,
  },
  {
    server: 30108,
    family: "Kazoku",
    power: 151790799,
  },
  {
    server: 30108,
    family: "OnlyLegends",
    power: 140824972,
  },
  {
    server: 30108,
    family: "Just4Fun",
    power: 140659946,
  },
  {
    server: 30108,
    family: "Mushmellow",
    power: 139980863,
  },
  {
    server: 30108,
    family: "DumSpiroSpero",
    power: 124742138,
  },
  {
    server: 30108,
    family: "Muchroomers",
    power: 122448202,
  },
  {
    server: 30109,
    family: "HevY_Hitters",
    power: 704744582,
  },
  {
    server: 30109,
    family: "KingDom",
    power: 474012665,
  },
  {
    server: 30109,
    family: "Panetina",
    power: 300363999,
  },
  {
    server: 30109,
    family: "Family",
    power: 172019504,
  },
  {
    server: 30109,
    family: "Poxon’s",
    power: 156587365,
  },
  {
    server: 30109,
    family: "Hogwarts",
    power: 154322330,
  },
  {
    server: 30109,
    family: "alpachino",
    power: 125620037,
  },
  {
    server: 30109,
    family: "UAE",
    power: 124965985,
  },
  {
    server: 30109,
    family: "RAWR",
    power: 115668873,
  },
  {
    server: 30109,
    family: "Derp",
    power: 103280556,
  },
  {
    server: 30110,
    family: "Uchiha",
    power: 681788788,
  },
  {
    server: 30110,
    family: "Legends",
    power: 425798627,
  },
  {
    server: 30110,
    family: "shroomies",
    power: 318685688,
  },
  {
    server: 30110,
    family: "ApexLegends",
    power: 182419811,
  },
  {
    server: 30110,
    family: "GoldenShrooms",
    power: 159991877,
  },
  {
    server: 30110,
    family: "Smellygang",
    power: 155343585,
  },
  {
    server: 30110,
    family: "TrapHouse",
    power: 135987710,
  },
  {
    server: 30110,
    family: "no1",
    power: 114065267,
  },
  {
    server: 30110,
    family: "essence",
    power: 90134482,
  },
  {
    server: 30110,
    family: "ElShroom",
    power: 79258275,
  },
  {
    server: 30111,
    family: "NightRaid",
    power: 689451210,
  },
  {
    server: 30111,
    family: "ABC",
    power: 511846064,
  },
  {
    server: 30111,
    family: "bingus",
    power: 346109582,
  },
  {
    server: 30111,
    family: "OP",
    power: 165454981,
  },
  {
    server: 30111,
    family: "Vanguard",
    power: 120251013,
  },
  {
    server: 30111,
    family: "Vortex",
    power: 100404187,
  },
  {
    server: 30111,
    family: "thespacyshroom",
    power: 94686176,
  },
  {
    server: 30111,
    family: "pizzza",
    power: 92094948,
  },
  {
    server: 30111,
    family: "Smažky",
    power: 86683183,
  },
  {
    server: 30111,
    family: "DARK",
    power: 86300352,
  },
  {
    server: 30112,
    family: "Shroommates",
    power: 583644224,
  },
  {
    server: 30112,
    family: "OKIRO",
    power: 439809392,
  },
  {
    server: 30112,
    family: "TheChosenOnes",
    power: 230396465,
  },
  {
    server: 30112,
    family: "Immortals",
    power: 120463467,
  },
  {
    server: 30112,
    family: "Eclipse",
    power: 106527954,
  },
  {
    server: 30112,
    family: "Beardos",
    power: 99774239,
  },
  {
    server: 30112,
    family: "hanban",
    power: 97873892,
  },
  {
    server: 30112,
    family: "Bob",
    power: 96666192,
  },
  {
    server: 30112,
    family: "SmashRooms",
    power: 86050718,
  },
  {
    server: 30112,
    family: "Breadcrumbs",
    power: 78431960,
  },
  {
    server: 30113,
    family: "Mycelia",
    power: 597549734,
  },
  {
    server: 30113,
    family: "SaiyanBlood",
    power: 423656576,
  },
  {
    server: 30113,
    family: "polska",
    power: 222805070,
  },
  {
    server: 30113,
    family: "Aura",
    power: 88183285,
  },
  {
    server: 30113,
    family: "Masters",
    power: 80356449,
  },
  {
    server: 30113,
    family: "Galaxy",
    power: 77845951,
  },
  {
    server: 30113,
    family: "Supreme",
    power: 74216511,
  },
  {
    server: 30113,
    family: "Rotters",
    power: 73886448,
  },
  {
    server: 30113,
    family: "LezbeanCoffee",
    power: 72885688,
  },
  {
    server: 30113,
    family: "Pay2win",
    power: 71980532,
  },
  {
    server: 30114,
    family: "Hellshroom",
    power: 607626937,
  },
  {
    server: 30114,
    family: "FlowerFields",
    power: 349607079,
  },
  {
    server: 30114,
    family: "WARRIORS",
    power: 171145583,
  },
  {
    server: 30114,
    family: "europe",
    power: 79780202,
  },
  {
    server: 30114,
    family: "champions",
    power: 76120677,
  },
  {
    server: 30114,
    family: "beasts",
    power: 71398688,
  },
  {
    server: 30114,
    family: "Bleach",
    power: 69371229,
  },
  {
    server: 30114,
    family: "Shadow",
    power: 67451568,
  },
  {
    server: 30114,
    family: "LoveBunnyGirl",
    power: 66729552,
  },
  {
    server: 30114,
    family: "demons",
    power: 63048585,
  },
  {
    server: 30116,
    family: "OnlyLegends",
    power: 529234029,
  },
  {
    server: 30116,
    family: "THEGODZ",
    power: 279918650,
  },
  {
    server: 30116,
    family: "DeathSquad",
    power: 106483895,
  },
  {
    server: 30116,
    family: "Hazbin",
    power: 0,
  },
  {
    server: 30116,
    family: "MushMush",
    power: 0,
  },
  {
    server: 30116,
    family: "schrammleber",
    power: 0,
  },
  {
    server: 30116,
    family: "Sapphire",
    power: 0,
  },
  {
    server: 30116,
    family: "LogHorizon",
    power: 0,
  },
  {
    server: 30116,
    family: "Finland",
    power: 0,
  },
  {
    server: 30116,
    family: "biruliandia",
    power: 0,
  },
  {
    server: 30117,
    family: "RoyalKings",
    power: 154498366,
  },
  {
    server: 30117,
    family: "Top",
    power: 122763484,
  },
  {
    server: 30117,
    family: "ForTheHorde",
    power: 1457149,
  },
  {
    server: 30117,
    family: "ANC",
    power: 0,
  },
  {
    server: 30117,
    family: "KongFamily",
    power: 0,
  },
  {
    server: 30117,
    family: "Shroomish",
    power: 0,
  },
  {
    server: 30117,
    family: "Overgeared",
    power: 0,
  },
  {
    server: 30117,
    family: "Violence",
    power: 0,
  },
  {
    server: 30117,
    family: "coolgang",
    power: 0,
  },
  {
    server: 30117,
    family: "BUBLIK_ARMY",
    power: 0,
  },
  {
    server: 30118,
    family: "OP",
    power: 225627326,
  },
  {
    server: 30118,
    family: "Buubs",
    power: 195758649,
  },
  {
    server: 30118,
    family: "Разгильдяи",
    power: 146865168,
  },
  {
    server: 30118,
    family: "Lakatosek",
    power: 0,
  },
  {
    server: 30118,
    family: "Pokémon",
    power: 0,
  },
  {
    server: 30118,
    family: "Buddy",
    power: 0,
  },
  {
    server: 30118,
    family: "Maplestory",
    power: 0,
  },
  {
    server: 30118,
    family: "MGJ",
    power: 0,
  },
  {
    server: 30118,
    family: "Mirnye",
    power: 0,
  },
  {
    server: 30118,
    family: "GrooveKnights",
    power: 0,
  },
  {
    server: 30119,
    family: "VietNam",
    power: 92980717,
  },
  {
    server: 30119,
    family: "shroomies4life",
    power: 92649582,
  },
  {
    server: 30119,
    family: "OP",
    power: 87316111,
  },
  {
    server: 30119,
    family: "PPP",
    power: 0,
  },
  {
    server: 30119,
    family: "sinners",
    power: 0,
  },
  {
    server: 30119,
    family: "Young",
    power: 0,
  },
  {
    server: 30119,
    family: "KABOOM",
    power: 0,
  },
  {
    server: 30119,
    family: "ODIN",
    power: 0,
  },
  {
    server: 30119,
    family: "Cloud9",
    power: 0,
  },
  {
    server: 30119,
    family: "Azura",
    power: 0,
  },
  {
    server: 30120,
    family: "CrawfordClan",
    power: 249161611,
  },
  {
    server: 30120,
    family: "Pepe",
    power: 211185963,
  },
  {
    server: 30120,
    family: "shroomers",
    power: 100112703,
  },
  {
    server: 30120,
    family: "SIGMAS",
    power: 0,
  },
  {
    server: 30120,
    family: "mashs",
    power: 0,
  },
  {
    server: 30120,
    family: "CHEESEFAM",
    power: 0,
  },
  {
    server: 30120,
    family: "Bekeszigetek",
    power: 0,
  },
  {
    server: 30120,
    family: "Sebsfat",
    power: 0,
  },
  {
    server: 30120,
    family: "wwAcidSquad",
    power: 0,
  },
  {
    server: 30120,
    family: "Yorkshire",
    power: 0,
  },
  {
    server: 30121,
    family: "ShroomTogether",
    power: 237698404,
  },
  {
    server: 30121,
    family: "Psychedelic",
    power: 121699882,
  },
  {
    server: 30121,
    family: "Warriors",
    power: 109328236,
  },
  {
    server: 30121,
    family: "Shroomforlife",
    power: 0,
  },
  {
    server: 30121,
    family: "Yakuzaπ",
    power: 0,
  },
  {
    server: 30121,
    family: "Mooshroom",
    power: 0,
  },
  {
    server: 30121,
    family: "InvictusOrder",
    power: 0,
  },
  {
    server: 30121,
    family: "SoloLeveling",
    power: 0,
  },
  {
    server: 30121,
    family: "Constellation",
    power: 0,
  },
  {
    server: 30121,
    family: "BlackClover",
    power: 0,
  },
  {
    server: 33001,
    family: "EQUILIBRIUM",
    power: 1974126033,
  },
  {
    server: 33001,
    family: "LesTruffles",
    power: 1793543979,
  },
  {
    server: 33001,
    family: "MagicMushrooms",
    power: 1790489944,
  },
  {
    server: 33001,
    family: "PilzBunker",
    power: 1579058024,
  },
  {
    server: 33001,
    family: "TheOriginals",
    power: 1487317497,
  },
  {
    server: 33001,
    family: "Overlord",
    power: 1225750479,
  },
  {
    server: 33001,
    family: "Germany",
    power: 750652530,
  },
  {
    server: 33001,
    family: "TheMushrooms",
    power: 686833840,
  },
  {
    server: 33001,
    family: "Azuris",
    power: 483208895,
  },
  {
    server: 33001,
    family: "Sakrileg",
    power: 369365466,
  },
  {
    server: 33002,
    family: "Endgame",
    power: 1875508491,
  },
  {
    server: 33002,
    family: "Nameless",
    power: 1667158372,
  },
  {
    server: 33002,
    family: "germansektion",
    power: 1455326736,
  },
  {
    server: 33002,
    family: "OdinS_Army",
    power: 1374075724,
  },
  {
    server: 33002,
    family: "GerMushMasters",
    power: 1084583994,
  },
  {
    server: 33002,
    family: "GermanElite",
    power: 1062116435,
  },
  {
    server: 33002,
    family: "SchmalerTaler",
    power: 705070905,
  },
  {
    server: 33002,
    family: "Germanfighter",
    power: 346730429,
  },
  {
    server: 33002,
    family: "Darksouls",
    power: 291716905,
  },
  {
    server: 33002,
    family: "MonsterPilze",
    power: 288222321,
  },
  {
    server: 33003,
    family: "Intimpilze",
    power: 2086177038,
  },
  {
    server: 33003,
    family: "Demons",
    power: 1698446458,
  },
  {
    server: 33003,
    family: "APShroomies",
    power: 1391815078,
  },
  {
    server: 33003,
    family: "Tempest",
    power: 1206300916,
  },
  {
    server: 33003,
    family: "Warriors",
    power: 762600963,
  },
  {
    server: 33003,
    family: "Frostwölfe",
    power: 682204871,
  },
  {
    server: 33003,
    family: "Deutschland",
    power: 474205683,
  },
  {
    server: 33003,
    family: "Pilzrisotto",
    power: 422072655,
  },
  {
    server: 33003,
    family: "DiePilzkrieger",
    power: 395056672,
  },
  {
    server: 33003,
    family: "GermanClan",
    power: 323012522,
  },
  {
    server: 33004,
    family: "Psychadelics",
    power: 1969353847,
  },
  {
    server: 33004,
    family: "༺GERMANEN༻",
    power: 1808989576,
  },
  {
    server: 33004,
    family: "༺eternal༻",
    power: 1197918375,
  },
  {
    server: 33004,
    family: "Psychas",
    power: 1193246919,
  },
  {
    server: 33004,
    family: "Irrenhaus",
    power: 1137793246,
  },
  {
    server: 33004,
    family: "ScheidenPilz",
    power: 589243458,
  },
  {
    server: 33004,
    family: "Pilzkrieger",
    power: 556290863,
  },
  {
    server: 33004,
    family: "Legends",
    power: 327036695,
  },
  {
    server: 33004,
    family: "Destroyers",
    power: 297930184,
  },
  {
    server: 33004,
    family: "Germany",
    power: 193027623,
  },
  {
    server: 33005,
    family: "Pilzkrieger",
    power: 1788575522,
  },
  {
    server: 33005,
    family: "Sporentrupp",
    power: 1776039016,
  },
  {
    server: 33005,
    family: "Pandora",
    power: 1593952153,
  },
  {
    server: 33005,
    family: "F23squad",
    power: 620190646,
  },
  {
    server: 33005,
    family: "Mushroom",
    power: 592141050,
  },
  {
    server: 33005,
    family: "HoneyWeed",
    power: 463307413,
  },
  {
    server: 33005,
    family: "GermanMafia",
    power: 423504906,
  },
  {
    server: 33005,
    family: "Wiederkehrer",
    power: 403245173,
  },
  {
    server: 33005,
    family: "Deutschland",
    power: 324697552,
  },
  {
    server: 33005,
    family: "BlackKnights",
    power: 276657671,
  },
  {
    server: 33006,
    family: "Germanyx",
    power: 2029864846,
  },
  {
    server: 33006,
    family: "VALHALLA",
    power: 1679077019,
  },
  {
    server: 33006,
    family: "Deutschland",
    power: 1206235287,
  },
  {
    server: 33006,
    family: "Dr3ams",
    power: 1113767671,
  },
  {
    server: 33006,
    family: "Pilzköpfe",
    power: 619149887,
  },
  {
    server: 33006,
    family: "GermanUnited",
    power: 380570137,
  },
  {
    server: 33006,
    family: "DönerBierchen",
    power: 332292309,
  },
  {
    server: 33006,
    family: "HarrySchnotter",
    power: 282050720,
  },
  {
    server: 33006,
    family: "Germans",
    power: 280244207,
  },
  {
    server: 33006,
    family: "TheFirstClan",
    power: 271958127,
  },
  {
    server: 33007,
    family: "GermanKnights",
    power: 1773567092,
  },
  {
    server: 33007,
    family: "Legends",
    power: 1645623573,
  },
  {
    server: 33007,
    family: "7DeadlySins",
    power: 1444709981,
  },
  {
    server: 33007,
    family: "Wildschweinhut",
    power: 791059284,
  },
  {
    server: 33007,
    family: "Arise",
    power: 547520866,
  },
  {
    server: 33007,
    family: "GermanKnights2",
    power: 531174602,
  },
  {
    server: 33007,
    family: "BubatzBande",
    power: 346890716,
  },
  {
    server: 33007,
    family: "CELESTIAL",
    power: 313312494,
  },
  {
    server: 33007,
    family: "Atombruder",
    power: 260808601,
  },
  {
    server: 33007,
    family: "DieElite",
    power: 137911716,
  },
  {
    server: 33008,
    family: "Dragonborn",
    power: 1925711005,
  },
  {
    server: 33008,
    family: "GlücksPilze",
    power: 1633031206,
  },
  {
    server: 33008,
    family: "Toads",
    power: 1153682008,
  },
  {
    server: 33008,
    family: "Horde",
    power: 509930546,
  },
  {
    server: 33008,
    family: "Anime",
    power: 507247430,
  },
  {
    server: 33008,
    family: "StrohhutPilze",
    power: 413916893,
  },
  {
    server: 33008,
    family: "MagicMushroom",
    power: 399844443,
  },
  {
    server: 33008,
    family: "DiePilze",
    power: 364949634,
  },
  {
    server: 33008,
    family: "GermanMushroom",
    power: 268850212,
  },
  {
    server: 33008,
    family: "Pilzkrieger",
    power: 213665995,
  },
  {
    server: 33009,
    family: "OnePiece",
    power: 1854321502,
  },
  {
    server: 33009,
    family: "Killerpilze",
    power: 1411296262,
  },
  {
    server: 33009,
    family: "TrueSlimes",
    power: 1282273802,
  },
  {
    server: 33009,
    family: "Pilzbefall",
    power: 870208322,
  },
  {
    server: 33009,
    family: "Killerpilzchen",
    power: 520490595,
  },
  {
    server: 33009,
    family: "DämonenPilze",
    power: 347184398,
  },
  {
    server: 33009,
    family: "Schattenwölfe",
    power: 322685147,
  },
  {
    server: 33009,
    family: "Shadow_pilze",
    power: 317162958,
  },
  {
    server: 33009,
    family: "FariyGer",
    power: 287851174,
  },
  {
    server: 33009,
    family: "ToTheTop",
    power: 278860433,
  },
  {
    server: 33010,
    family: "SoloLeveling",
    power: 1627513082,
  },
  {
    server: 33010,
    family: "STROHHUTBANDE",
    power: 1625695721,
  },
  {
    server: 33010,
    family: "Shinigamis",
    power: 1154450324,
  },
  {
    server: 33010,
    family: "Anime",
    power: 1063611591,
  },
  {
    server: 33010,
    family: "Gauklerpilze",
    power: 344260420,
  },
  {
    server: 33010,
    family: "einfachnurso",
    power: 257299302,
  },
  {
    server: 33010,
    family: "Darkness",
    power: 246237545,
  },
  {
    server: 33010,
    family: "Vollhonkz",
    power: 204639625,
  },
  {
    server: 33010,
    family: "BlubBlubBande",
    power: 182608946,
  },
  {
    server: 33010,
    family: "Hölle",
    power: 155436695,
  },
  {
    server: 33011,
    family: "Extravagant",
    power: 1692578505,
  },
  {
    server: 33011,
    family: "꧁PHÖNIX꧂",
    power: 1602210504,
  },
  {
    server: 33011,
    family: "BlackRoses",
    power: 823576883,
  },
  {
    server: 33011,
    family: "Akatsuki",
    power: 668215922,
  },
  {
    server: 33011,
    family: "FairyTail",
    power: 461755188,
  },
  {
    server: 33011,
    family: "ONEPUNCHMAN",
    power: 223786287,
  },
  {
    server: 33011,
    family: "Die_Deutschen",
    power: 197953067,
  },
  {
    server: 33011,
    family: "DieWölfe",
    power: 190831297,
  },
  {
    server: 33011,
    family: "StrawHats",
    power: 181808234,
  },
  {
    server: 33011,
    family: "Phönix_II",
    power: 180589016,
  },
  {
    server: 33012,
    family: "OnlyShrooms",
    power: 1716559714,
  },
  {
    server: 33012,
    family: "_ALPHA_",
    power: 1275379505,
  },
  {
    server: 33012,
    family: "Trödeltrupp",
    power: 1227881115,
  },
  {
    server: 33012,
    family: "TeamKugelblitz",
    power: 619152893,
  },
  {
    server: 33012,
    family: "Mushrooms",
    power: 610497390,
  },
  {
    server: 33012,
    family: "road2rank1",
    power: 509575159,
  },
  {
    server: 33012,
    family: "Strohhutbande",
    power: 243407118,
  },
  {
    server: 33012,
    family: "AffenMitWaffen",
    power: 139596490,
  },
  {
    server: 33012,
    family: "SporeComrades",
    power: 117865293,
  },
  {
    server: 33012,
    family: "Legacy",
    power: 93057641,
  },
  {
    server: 33013,
    family: "NoxusDE",
    power: 1588840366,
  },
  {
    server: 33013,
    family: "Tonnenschwer",
    power: 1463319585,
  },
  {
    server: 33013,
    family: "Pilzfamilie",
    power: 663249389,
  },
  {
    server: 33013,
    family: "RŌNIN",
    power: 605133561,
  },
  {
    server: 33013,
    family: "MapleStory",
    power: 527813142,
  },
  {
    server: 33013,
    family: "GermanLegends",
    power: 445267964,
  },
  {
    server: 33013,
    family: "InDieBiotonne",
    power: 419113045,
  },
  {
    server: 33013,
    family: "NRW_COLOGNE",
    power: 248011019,
  },
  {
    server: 33013,
    family: "Allianz",
    power: 239164171,
  },
  {
    server: 33013,
    family: "DieDeutschen",
    power: 211667563,
  },
  {
    server: 33014,
    family: "LastLegion",
    power: 1819696411,
  },
  {
    server: 33014,
    family: "Shadowgarden",
    power: 1261493976,
  },
  {
    server: 33014,
    family: "Overlords",
    power: 742334236,
  },
  {
    server: 33014,
    family: "CozyGaming",
    power: 575664559,
  },
  {
    server: 33014,
    family: "Drachengruft",
    power: 467202463,
  },
  {
    server: 33014,
    family: "PeachesLakaien",
    power: 249696580,
  },
  {
    server: 33014,
    family: "chiwauwaus",
    power: 223002407,
  },
  {
    server: 33014,
    family: "BernOstkurve",
    power: 220454184,
  },
  {
    server: 33014,
    family: "Knecht",
    power: 185591077,
  },
  {
    server: 33014,
    family: "GerShroomheads",
    power: 175055379,
  },
  {
    server: 33015,
    family: "YD",
    power: 1963158651,
  },
  {
    server: 33015,
    family: "YD2",
    power: 1382496520,
  },
  {
    server: 33015,
    family: "MagicMushrooms",
    power: 612581739,
  },
  {
    server: 33015,
    family: "Pilzsuppe",
    power: 571708251,
  },
  {
    server: 33015,
    family: "HomeSweetHome",
    power: 512903928,
  },
  {
    server: 33015,
    family: "MonKings",
    power: 386224028,
  },
  {
    server: 33015,
    family: "Gnadenlos",
    power: 182099932,
  },
  {
    server: 33015,
    family: "Sturmmäntel",
    power: 166569485,
  },
  {
    server: 33015,
    family: "Pilzparadies",
    power: 123303300,
  },
  {
    server: 33015,
    family: "Phönix",
    power: 90780544,
  },
  {
    server: 33016,
    family: "DemonSlayer",
    power: 1805550673,
  },
  {
    server: 33016,
    family: "Celestial",
    power: 999246196,
  },
  {
    server: 33016,
    family: "UniteDPower",
    power: 477768273,
  },
  {
    server: 33016,
    family: "GerRebelle",
    power: 423177595,
  },
  {
    server: 33016,
    family: "german",
    power: 327889906,
  },
  {
    server: 33016,
    family: "ThePapes",
    power: 251555515,
  },
  {
    server: 33016,
    family: "German2",
    power: 245100034,
  },
  {
    server: 33016,
    family: "Lakuzars",
    power: 228972464,
  },
  {
    server: 33016,
    family: "Gewinner",
    power: 152362168,
  },
  {
    server: 33016,
    family: "Nazarick",
    power: 135201090,
  },
  {
    server: 33017,
    family: "HöllenPilze",
    power: 1632891820,
  },
  {
    server: 33017,
    family: "ToadsMinions",
    power: 921504370,
  },
  {
    server: 33017,
    family: "GermanClan",
    power: 517434121,
  },
  {
    server: 33017,
    family: "FallenShrooms",
    power: 422147516,
  },
  {
    server: 33017,
    family: "Schadow",
    power: 333504095,
  },
  {
    server: 33017,
    family: "Deutschland",
    power: 241629972,
  },
  {
    server: 33017,
    family: "DieKatzen",
    power: 168679815,
  },
  {
    server: 33017,
    family: "spoky",
    power: 163741670,
  },
  {
    server: 33017,
    family: "SilverCoin",
    power: 55632869,
  },
  {
    server: 33017,
    family: "Fürfortnite",
    power: 53580917,
  },
  {
    server: 33018,
    family: "Pilzhutbande",
    power: 1649990658,
  },
  {
    server: 33018,
    family: "OverHeaven",
    power: 755826212,
  },
  {
    server: 33018,
    family: "Parsec",
    power: 637149584,
  },
  {
    server: 33018,
    family: "Schattenpilze",
    power: 533971228,
  },
  {
    server: 33018,
    family: "Rasselbande",
    power: 338412917,
  },
  {
    server: 33018,
    family: "Die_Giftzwerge",
    power: 293939586,
  },
  {
    server: 33018,
    family: "Void",
    power: 171609999,
  },
  {
    server: 33018,
    family: "PilzHorde",
    power: 145824323,
  },
  {
    server: 33018,
    family: "Kellerkinder",
    power: 110760822,
  },
  {
    server: 33018,
    family: "Pilzpfanne",
    power: 98466524,
  },
  {
    server: 33019,
    family: "Akatsuki",
    power: 1614442767,
  },
  {
    server: 33019,
    family: "Yggdrasil",
    power: 1278408431,
  },
  {
    server: 33019,
    family: "Trüffeltrupp",
    power: 1129711825,
  },
  {
    server: 33019,
    family: "Germany",
    power: 376005501,
  },
  {
    server: 33019,
    family: "GermanCocks",
    power: 373488846,
  },
  {
    server: 33019,
    family: "TheFariway",
    power: 322676953,
  },
  {
    server: 33019,
    family: "TeamGermany",
    power: 172793858,
  },
  {
    server: 33019,
    family: "DieElite",
    power: 135094533,
  },
  {
    server: 33019,
    family: "Warriors",
    power: 126952661,
  },
  {
    server: 33019,
    family: "GermanMasters",
    power: 79467858,
  },
  {
    server: 33020,
    family: "Endtime",
    power: 1743817676,
  },
  {
    server: 33020,
    family: "WurstBude",
    power: 1537326633,
  },
  {
    server: 33020,
    family: "ONEPIECE",
    power: 559973021,
  },
  {
    server: 33020,
    family: "DeutscherPilz",
    power: 321602983,
  },
  {
    server: 33020,
    family: "AwayFromKills",
    power: 289275929,
  },
  {
    server: 33020,
    family: "Pilzfarm",
    power: 271732598,
  },
  {
    server: 33020,
    family: "kumalogia",
    power: 238119161,
  },
  {
    server: 33020,
    family: "Deutschland",
    power: 219900835,
  },
  {
    server: 33020,
    family: "nixda",
    power: 217728523,
  },
  {
    server: 33020,
    family: "S0ND3RSCHUL3",
    power: 160472003,
  },
  {
    server: 33021,
    family: "ZOO",
    power: 1827740265,
  },
  {
    server: 33021,
    family: "Fliegenpilz",
    power: 968723344,
  },
  {
    server: 33021,
    family: "Baddest",
    power: 498012159,
  },
  {
    server: 33021,
    family: "HappyGuild",
    power: 388660865,
  },
  {
    server: 33021,
    family: "Zauberpilzli",
    power: 388634583,
  },
  {
    server: 33021,
    family: "HartzIVTreff",
    power: 376566287,
  },
  {
    server: 33021,
    family: "Deutschland",
    power: 290092628,
  },
  {
    server: 33021,
    family: "DieBesten",
    power: 289448294,
  },
  {
    server: 33021,
    family: "Fuchs",
    power: 152666930,
  },
  {
    server: 33021,
    family: "HighOnShroom",
    power: 106400846,
  },
  {
    server: 33022,
    family: "Legion",
    power: 1831558569,
  },
  {
    server: 33022,
    family: "Pilzbande",
    power: 822847311,
  },
  {
    server: 33022,
    family: "FairyTail",
    power: 630384896,
  },
  {
    server: 33022,
    family: "Germans",
    power: 413005208,
  },
  {
    server: 33022,
    family: "TrashGamehunt",
    power: 337783017,
  },
  {
    server: 33022,
    family: "Futtermampf",
    power: 191280308,
  },
  {
    server: 33022,
    family: "HARDCOREGABBER",
    power: 169801151,
  },
  {
    server: 33022,
    family: "DiePilze_XD",
    power: 137682777,
  },
  {
    server: 33022,
    family: "RaynationDE",
    power: 130433363,
  },
  {
    server: 33022,
    family: "GermanWolves",
    power: 123491000,
  },
  {
    server: 33023,
    family: "ŚªLtHøUśË",
    power: 1702627155,
  },
  {
    server: 33023,
    family: "Uchiha",
    power: 1147132540,
  },
  {
    server: 33023,
    family: "Sumeru",
    power: 871912773,
  },
  {
    server: 33023,
    family: "INVICTUS",
    power: 425602128,
  },
  {
    server: 33023,
    family: "German",
    power: 353944479,
  },
  {
    server: 33023,
    family: "The_Mushrooms",
    power: 340243771,
  },
  {
    server: 33023,
    family: "Anonymous",
    power: 243531049,
  },
  {
    server: 33023,
    family: "Walhalla",
    power: 228837435,
  },
  {
    server: 33023,
    family: "Germany",
    power: 116807228,
  },
  {
    server: 33023,
    family: "Schnitzel",
    power: 101003159,
  },
  {
    server: 33024,
    family: "Disney",
    power: 1663881909,
  },
  {
    server: 33024,
    family: "GetRekt",
    power: 1255680021,
  },
  {
    server: 33024,
    family: "xXPilzköppeXx",
    power: 516080637,
  },
  {
    server: 33024,
    family: "Pilz",
    power: 425561954,
  },
  {
    server: 33024,
    family: "GermanHeros",
    power: 416837025,
  },
  {
    server: 33024,
    family: "Dragonfly",
    power: 415292904,
  },
  {
    server: 33024,
    family: "DGT",
    power: 319430550,
  },
  {
    server: 33024,
    family: "GermanKings",
    power: 225628755,
  },
  {
    server: 33024,
    family: "Babypopo",
    power: 123465324,
  },
  {
    server: 33024,
    family: "BacktoBack",
    power: 92141369,
  },
  {
    server: 33025,
    family: "Lost",
    power: 1633981111,
  },
  {
    server: 33025,
    family: "Buschmatratzen",
    power: 1060499270,
  },
  {
    server: 33025,
    family: "BloodLords",
    power: 488282739,
  },
  {
    server: 33025,
    family: "Phoenix",
    power: 437025204,
  },
  {
    server: 33025,
    family: "Holzhausen",
    power: 390469210,
  },
  {
    server: 33025,
    family: "Finanzamt",
    power: 306939438,
  },
  {
    server: 33025,
    family: "MADknights",
    power: 253521684,
  },
  {
    server: 33025,
    family: "Wunderland",
    power: 153858046,
  },
  {
    server: 33025,
    family: "GermanWolf",
    power: 153398944,
  },
  {
    server: 33025,
    family: "SwordArtOnline",
    power: 138017565,
  },
  {
    server: 33026,
    family: "Nemesis",
    power: 1727296696,
  },
  {
    server: 33026,
    family: "TheChosenOnes",
    power: 1658702229,
  },
  {
    server: 33026,
    family: "Nightmare",
    power: 907383587,
  },
  {
    server: 33026,
    family: "MetaNemesis",
    power: 524597041,
  },
  {
    server: 33026,
    family: "Bruderschaft",
    power: 407589013,
  },
  {
    server: 33026,
    family: "MugiWara",
    power: 310093707,
  },
  {
    server: 33026,
    family: "Berlin",
    power: 228411196,
  },
  {
    server: 33026,
    family: "Eagles",
    power: 226973945,
  },
  {
    server: 33026,
    family: "Kampfmacht",
    power: 71214191,
  },
  {
    server: 33026,
    family: "SLS",
    power: 51791866,
  },
  {
    server: 33027,
    family: "Mushroomworld",
    power: 1646701445,
  },
  {
    server: 33027,
    family: "Pilzjäger",
    power: 1312191738,
  },
  {
    server: 33027,
    family: "MagicMushrooms",
    power: 609449857,
  },
  {
    server: 33027,
    family: "mausis",
    power: 356264390,
  },
  {
    server: 33027,
    family: "Awakening",
    power: 338636575,
  },
  {
    server: 33027,
    family: "CooleMistis",
    power: 329002841,
  },
  {
    server: 33027,
    family: "LegendGER",
    power: 286041860,
  },
  {
    server: 33027,
    family: "IdkBinDeutsch",
    power: 250696354,
  },
  {
    server: 33027,
    family: "SuperPilzeUWU",
    power: 247837334,
  },
  {
    server: 33027,
    family: "PilzChaos",
    power: 243197889,
  },
  {
    server: 33028,
    family: "MagicMushis",
    power: 1792775557,
  },
  {
    server: 33028,
    family: "DieBesten",
    power: 929962645,
  },
  {
    server: 33028,
    family: "UmpaLumpas",
    power: 740293733,
  },
  {
    server: 33028,
    family: "AnimeGuild",
    power: 440423816,
  },
  {
    server: 33028,
    family: "SoloLeveling",
    power: 398848089,
  },
  {
    server: 33028,
    family: "fitre",
    power: 323798725,
  },
  {
    server: 33028,
    family: "BerlinerBären",
    power: 303938269,
  },
  {
    server: 33028,
    family: "Pilzhutbande",
    power: 285963357,
  },
  {
    server: 33028,
    family: "SonsOfAnarchy",
    power: 221337596,
  },
  {
    server: 33028,
    family: "DreamTeam",
    power: 131095297,
  },
  {
    server: 33029,
    family: "Legends",
    power: 1777369217,
  },
  {
    server: 33029,
    family: "United",
    power: 720496589,
  },
  {
    server: 33029,
    family: "DeutscheCrew",
    power: 669930308,
  },
  {
    server: 33029,
    family: "Blackout",
    power: 471417083,
  },
  {
    server: 33029,
    family: "GermanVictory",
    power: 419526177,
  },
  {
    server: 33029,
    family: "mushroomsins",
    power: 383932779,
  },
  {
    server: 33029,
    family: "German",
    power: 336405987,
  },
  {
    server: 33029,
    family: "LostGermany",
    power: 303488535,
  },
  {
    server: 33029,
    family: "Fische",
    power: 226819306,
  },
  {
    server: 33029,
    family: "GermanElite",
    power: 201911172,
  },
  {
    server: 33030,
    family: "GermanElite",
    power: 1639429487,
  },
  {
    server: 33030,
    family: "shroomsde",
    power: 1212161904,
  },
  {
    server: 33030,
    family: "DieWohngruppe",
    power: 1162592433,
  },
  {
    server: 33030,
    family: "Pilzkönigreich",
    power: 482744155,
  },
  {
    server: 33030,
    family: "Seelensammler",
    power: 447449202,
  },
  {
    server: 33030,
    family: "MeisterProper",
    power: 305471114,
  },
  {
    server: 33030,
    family: "Germanya",
    power: 152519926,
  },
  {
    server: 33030,
    family: "DieAnfänger",
    power: 138748685,
  },
  {
    server: 33030,
    family: "GermanUnity",
    power: 131859761,
  },
  {
    server: 33030,
    family: "FairyTail",
    power: 108204984,
  },
  {
    server: 33031,
    family: "Rage",
    power: 1817537069,
  },
  {
    server: 33031,
    family: "Fusspilze",
    power: 914433278,
  },
  {
    server: 33031,
    family: "GermanElite",
    power: 765218660,
  },
  {
    server: 33031,
    family: "Germanoutlaws",
    power: 502164400,
  },
  {
    server: 33031,
    family: "EliteGerman",
    power: 482561593,
  },
  {
    server: 33031,
    family: "Gottheiten",
    power: 400214528,
  },
  {
    server: 33031,
    family: "Aschenblüte",
    power: 339513896,
  },
  {
    server: 33031,
    family: "ShadowGarden",
    power: 318295776,
  },
  {
    server: 33031,
    family: "hyk",
    power: 295748194,
  },
  {
    server: 33031,
    family: "bingobongo",
    power: 107434871,
  },
  {
    server: 33032,
    family: "PEAK",
    power: 1887681462,
  },
  {
    server: 33032,
    family: "MagicMushrooms",
    power: 1007547494,
  },
  {
    server: 33032,
    family: "PfifferlingeDE",
    power: 449376561,
  },
  {
    server: 33032,
    family: "MashroomKings",
    power: 399227266,
  },
  {
    server: 33032,
    family: "OnlyGermany",
    power: 362796006,
  },
  {
    server: 33032,
    family: "Pfifferlinge",
    power: 319979456,
  },
  {
    server: 33032,
    family: "beekayjunior",
    power: 259509127,
  },
  {
    server: 33032,
    family: "Matthias1912",
    power: 125960721,
  },
  {
    server: 33032,
    family: "KongoKeulen",
    power: 69118938,
  },
  {
    server: 33032,
    family: "Funghinators",
    power: 61395737,
  },
  {
    server: 33033,
    family: "Skyrockets",
    power: 1622840035,
  },
  {
    server: 33033,
    family: "SuicideSquad",
    power: 1190977022,
  },
  {
    server: 33033,
    family: "Akatsuki",
    power: 961316021,
  },
  {
    server: 33033,
    family: "Krümelmonster",
    power: 826512296,
  },
  {
    server: 33033,
    family: "FallingDragons",
    power: 313945970,
  },
  {
    server: 33033,
    family: "Zauberpilze",
    power: 233767648,
  },
  {
    server: 33033,
    family: "Darkside",
    power: 225376995,
  },
  {
    server: 33033,
    family: "Canesten",
    power: 190319661,
  },
  {
    server: 33033,
    family: "diebuntenpilze",
    power: 165301723,
  },
  {
    server: 33033,
    family: "madafaka",
    power: 154589774,
  },
  {
    server: 33034,
    family: "Reapers",
    power: 1818070208,
  },
  {
    server: 33034,
    family: "ToadLand",
    power: 894630703,
  },
  {
    server: 33034,
    family: "Bierkneipe",
    power: 555427114,
  },
  {
    server: 33034,
    family: "MOON",
    power: 526629399,
  },
  {
    server: 33034,
    family: "GobelusDE",
    power: 427157678,
  },
  {
    server: 33034,
    family: "DrAgOoN",
    power: 426759996,
  },
  {
    server: 33034,
    family: "Weed",
    power: 351498215,
  },
  {
    server: 33034,
    family: "RIPchen",
    power: 243246268,
  },
  {
    server: 33034,
    family: "PilzMeister",
    power: 222711473,
  },
  {
    server: 33034,
    family: "Just4Fun",
    power: 104877488,
  },
  {
    server: 33035,
    family: "MushroomArmy",
    power: 1865578077,
  },
  {
    server: 33035,
    family: "GERMANY",
    power: 932376823,
  },
  {
    server: 33035,
    family: "Unlimited",
    power: 644475394,
  },
  {
    server: 33035,
    family: "CatMania",
    power: 604904817,
  },
  {
    server: 33035,
    family: "MagicMushrooms",
    power: 597659514,
  },
  {
    server: 33035,
    family: "MushroomArmy2",
    power: 555236739,
  },
  {
    server: 33035,
    family: "Strohhüte",
    power: 354677367,
  },
  {
    server: 33035,
    family: "DarkCall",
    power: 344935944,
  },
  {
    server: 33035,
    family: "Schwarzherz",
    power: 320662958,
  },
  {
    server: 33035,
    family: "Germankings",
    power: 312137157,
  },
  {
    server: 33036,
    family: "MagicMushroom",
    power: 1614450445,
  },
  {
    server: 33036,
    family: "Buttertrüffel",
    power: 1579935911,
  },
  {
    server: 33036,
    family: "Pilzpfanne",
    power: 632330591,
  },
  {
    server: 33036,
    family: "Germany",
    power: 608650903,
  },
  {
    server: 33036,
    family: "FairyTail",
    power: 377233927,
  },
  {
    server: 33036,
    family: "Deutschland",
    power: 342492137,
  },
  {
    server: 33036,
    family: "RamenMitPilzen",
    power: 315954021,
  },
  {
    server: 33036,
    family: "chaosclub",
    power: 303948887,
  },
  {
    server: 33036,
    family: "Ruhrpottpilze",
    power: 204479989,
  },
  {
    server: 33036,
    family: "Bienenstock",
    power: 139441607,
  },
  {
    server: 33037,
    family: "Last_Impact",
    power: 1816949346,
  },
  {
    server: 33037,
    family: "FightClub",
    power: 1064358203,
  },
  {
    server: 33037,
    family: "Ultras",
    power: 413336143,
  },
  {
    server: 33037,
    family: "DieStrohhüte",
    power: 392829464,
  },
  {
    server: 33037,
    family: "Germans",
    power: 342157183,
  },
  {
    server: 33037,
    family: "CrazyShrooms",
    power: 340769518,
  },
  {
    server: 33037,
    family: "MagicMushrooms",
    power: 301543877,
  },
  {
    server: 33037,
    family: "NR1",
    power: 205997539,
  },
  {
    server: 33037,
    family: "Demons",
    power: 205492231,
  },
  {
    server: 33037,
    family: "Wölfe",
    power: 181053891,
  },
  {
    server: 33038,
    family: "TheLions",
    power: 1829761075,
  },
  {
    server: 33038,
    family: "Dragons",
    power: 1083646694,
  },
  {
    server: 33038,
    family: "PilzKöpfe",
    power: 560288497,
  },
  {
    server: 33038,
    family: "Valhalla",
    power: 446271050,
  },
  {
    server: 33038,
    family: "Wolfpack",
    power: 425850013,
  },
  {
    server: 33038,
    family: "MadDoggs",
    power: 287785284,
  },
  {
    server: 33038,
    family: "zack",
    power: 282699539,
  },
  {
    server: 33038,
    family: "FlyingMushroom",
    power: 222508612,
  },
  {
    server: 33038,
    family: "Virux",
    power: 193968333,
  },
  {
    server: 33038,
    family: "Divine",
    power: 191302437,
  },
  {
    server: 33039,
    family: "Legends",
    power: 1772888995,
  },
  {
    server: 33039,
    family: "Pelzköpfe",
    power: 1448941005,
  },
  {
    server: 33039,
    family: "Darkness",
    power: 979256573,
  },
  {
    server: 33039,
    family: "GermanyCompanY",
    power: 673902638,
  },
  {
    server: 33039,
    family: "Pilzbefall",
    power: 491360937,
  },
  {
    server: 33039,
    family: "Deutschland",
    power: 380090598,
  },
  {
    server: 33039,
    family: "GermanHub",
    power: 377694690,
  },
  {
    server: 33039,
    family: "Pizza059",
    power: 275132781,
  },
  {
    server: 33039,
    family: "Deutsch",
    power: 244952510,
  },
  {
    server: 33039,
    family: "CoolePilze",
    power: 192785084,
  },
  {
    server: 33040,
    family: "Grace",
    power: 1748317307,
  },
  {
    server: 33040,
    family: "MonKings",
    power: 925390271,
  },
  {
    server: 33040,
    family: "PilzBunker",
    power: 562261327,
  },
  {
    server: 33040,
    family: "Finsterwacht",
    power: 439391948,
  },
  {
    server: 33040,
    family: "Demons",
    power: 281379995,
  },
  {
    server: 33040,
    family: "Sacknasen",
    power: 267156301,
  },
  {
    server: 33040,
    family: "BlackDevil",
    power: 256898707,
  },
  {
    server: 33040,
    family: "Tempest",
    power: 248984978,
  },
  {
    server: 33040,
    family: "Germany",
    power: 242151757,
  },
  {
    server: 33040,
    family: "MagischePilze",
    power: 238520558,
  },
  {
    server: 33041,
    family: "TeaParty",
    power: 1741526460,
  },
  {
    server: 33041,
    family: "PHÖNIX",
    power: 1380855499,
  },
  {
    server: 33041,
    family: "BubabtzClub",
    power: 826355687,
  },
  {
    server: 33041,
    family: "DeadEnd",
    power: 284031221,
  },
  {
    server: 33041,
    family: "Drachenschanze",
    power: 270222494,
  },
  {
    server: 33041,
    family: "Nagelpilz",
    power: 270216853,
  },
  {
    server: 33041,
    family: "German",
    power: 255189608,
  },
  {
    server: 33041,
    family: "DieBlutritter",
    power: 175549894,
  },
  {
    server: 33041,
    family: "schweiz",
    power: 107922615,
  },
  {
    server: 33041,
    family: "Pilzsuppe",
    power: 87277769,
  },
  {
    server: 33042,
    family: "Legends",
    power: 1465531823,
  },
  {
    server: 33042,
    family: "GermanElite",
    power: 1426831261,
  },
  {
    server: 33042,
    family: "Strohhutbande",
    power: 1150759086,
  },
  {
    server: 33042,
    family: "Champions",
    power: 669004862,
  },
  {
    server: 33042,
    family: "Fairytail",
    power: 486116313,
  },
  {
    server: 33042,
    family: "Valhalla",
    power: 390489978,
  },
  {
    server: 33042,
    family: "Veldora",
    power: 378272958,
  },
  {
    server: 33042,
    family: "Rheinlandpfalz",
    power: 367624708,
  },
  {
    server: 33042,
    family: "Unlimited",
    power: 338624165,
  },
  {
    server: 33042,
    family: "420BuDs",
    power: 284181812,
  },
  {
    server: 33043,
    family: "NoExcuse",
    power: 1615984035,
  },
  {
    server: 33043,
    family: "DemonKings",
    power: 1505243374,
  },
  {
    server: 33043,
    family: "Strohhutbande",
    power: 1465732340,
  },
  {
    server: 33043,
    family: "Pilzsammlerᵗᵒᵖ",
    power: 842911667,
  },
  {
    server: 33043,
    family: "grünesPesto",
    power: 673544329,
  },
  {
    server: 33043,
    family: "KönigToad",
    power: 264579866,
  },
  {
    server: 33043,
    family: "Helldivers",
    power: 227315530,
  },
  {
    server: 33043,
    family: "DieDeutschen",
    power: 223963449,
  },
  {
    server: 33043,
    family: "Waldpilze",
    power: 213626319,
  },
  {
    server: 33043,
    family: "wolf",
    power: 179322769,
  },
  {
    server: 33044,
    family: "Elite",
    power: 1705772506,
  },
  {
    server: 33044,
    family: "Germany",
    power: 1422382208,
  },
  {
    server: 33044,
    family: "Germans",
    power: 573307994,
  },
  {
    server: 33044,
    family: "PilzInfanterie",
    power: 370949095,
  },
  {
    server: 33044,
    family: "TheCrack",
    power: 330344247,
  },
  {
    server: 33044,
    family: "PilzBunker",
    power: 253402981,
  },
  {
    server: 33044,
    family: "SpaßamSpiel",
    power: 246763127,
  },
  {
    server: 33044,
    family: "TigerClan",
    power: 243650436,
  },
  {
    server: 33044,
    family: "StrawHats",
    power: 199552632,
  },
  {
    server: 33044,
    family: "Hellraiser",
    power: 170419272,
  },
  {
    server: 33045,
    family: "GummiPilzBande",
    power: 1711130942,
  },
  {
    server: 33045,
    family: "CityofSin",
    power: 1064855245,
  },
  {
    server: 33045,
    family: "●GPB●Akademie",
    power: 1005216757,
  },
  {
    server: 33045,
    family: "GermanElite",
    power: 389181809,
  },
  {
    server: 33045,
    family: "BlackClover",
    power: 363569047,
  },
  {
    server: 33045,
    family: "HAHAHAHAHAXD",
    power: 245326702,
  },
  {
    server: 33045,
    family: "GermanyElite",
    power: 235725111,
  },
  {
    server: 33045,
    family: "Kartoffelpüree",
    power: 228495339,
  },
  {
    server: 33045,
    family: "Just4Fun",
    power: 73932272,
  },
  {
    server: 33045,
    family: "Ragnarök",
    power: 52228614,
  },
  {
    server: 33046,
    family: "Legends",
    power: 1812029175,
  },
  {
    server: 33046,
    family: "NoxNoctis",
    power: 1503401460,
  },
  {
    server: 33046,
    family: "PartyCrashers",
    power: 610811198,
  },
  {
    server: 33046,
    family: "AffenMitWaffen",
    power: 499179671,
  },
  {
    server: 33046,
    family: "Deutschland2",
    power: 473746672,
  },
  {
    server: 33046,
    family: "Outcasts404",
    power: 467533550,
  },
  {
    server: 33046,
    family: "SoloLeveling",
    power: 457718036,
  },
  {
    server: 33046,
    family: "OnePilzArmy",
    power: 371410998,
  },
  {
    server: 33046,
    family: "HempelsSofa",
    power: 364555694,
  },
  {
    server: 33046,
    family: "ElitePilze",
    power: 265626454,
  },
  {
    server: 33047,
    family: "GroßerPilz",
    power: 1579604494,
  },
  {
    server: 33047,
    family: "DieChaoten",
    power: 1482197296,
  },
  {
    server: 33047,
    family: "Deutschland",
    power: 618918131,
  },
  {
    server: 33047,
    family: "Hades",
    power: 455915973,
  },
  {
    server: 33047,
    family: "Nexon",
    power: 280490342,
  },
  {
    server: 33047,
    family: "TheGoldenMush",
    power: 244793845,
  },
  {
    server: 33047,
    family: "FliegendePilze",
    power: 203043261,
  },
  {
    server: 33047,
    family: "Taubsi",
    power: 186377780,
  },
  {
    server: 33047,
    family: "TheMushrooms",
    power: 177273373,
  },
  {
    server: 33047,
    family: "MoonPie",
    power: 165094925,
  },
  {
    server: 33048,
    family: "Eternal",
    power: 1572350959,
  },
  {
    server: 33048,
    family: "Phönix",
    power: 1472804447,
  },
  {
    server: 33048,
    family: "TheChampignons",
    power: 630959716,
  },
  {
    server: 33048,
    family: "Fliegenpilze",
    power: 445791129,
  },
  {
    server: 33048,
    family: "Wolfers",
    power: 370772840,
  },
  {
    server: 33048,
    family: "AnimeSchweiz1",
    power: 252077021,
  },
  {
    server: 33048,
    family: "SuperSonic",
    power: 234071810,
  },
  {
    server: 33048,
    family: "Tohr",
    power: 233106893,
  },
  {
    server: 33048,
    family: "lachsteich",
    power: 216248712,
  },
  {
    server: 33048,
    family: "animegerman",
    power: 167283897,
  },
  {
    server: 33049,
    family: "TheGang",
    power: 1615937231,
  },
  {
    server: 33049,
    family: "Duality",
    power: 1160319216,
  },
  {
    server: 33049,
    family: "Katzenmilch",
    power: 524314488,
  },
  {
    server: 33049,
    family: "DrachenReiter",
    power: 516899657,
  },
  {
    server: 33049,
    family: "BHOB",
    power: 470424977,
  },
  {
    server: 33049,
    family: "TodesEngel",
    power: 467865647,
  },
  {
    server: 33049,
    family: "GlÜcKsPiLzE",
    power: 408637776,
  },
  {
    server: 33049,
    family: "420s",
    power: 364611245,
  },
  {
    server: 33049,
    family: "Strohhutbande",
    power: 341453539,
  },
  {
    server: 33049,
    family: "Fußpilz",
    power: 265930462,
  },
  {
    server: 33050,
    family: "Elysium",
    power: 1745700032,
  },
  {
    server: 33050,
    family: "Zipfelklatsche",
    power: 1472723048,
  },
  {
    server: 33050,
    family: "TrüffelLegends",
    power: 1122013530,
  },
  {
    server: 33050,
    family: "Bürgergeld",
    power: 823130433,
  },
  {
    server: 33050,
    family: "SoloLeveling",
    power: 329989584,
  },
  {
    server: 33050,
    family: "Pfifferlinge",
    power: 262181868,
  },
  {
    server: 33050,
    family: "WolfSRudeL",
    power: 168495494,
  },
  {
    server: 33050,
    family: "Shroomboom",
    power: 117035048,
  },
  {
    server: 33050,
    family: "Neumünster",
    power: 91758831,
  },
  {
    server: 33050,
    family: "cybershrooms",
    power: 67245429,
  },
  {
    server: 33051,
    family: "Legends",
    power: 1576182357,
  },
  {
    server: 33051,
    family: "Avengers",
    power: 1187723149,
  },
  {
    server: 33051,
    family: "DieQueens",
    power: 957700122,
  },
  {
    server: 33051,
    family: "Futterluke",
    power: 488631031,
  },
  {
    server: 33051,
    family: "DeutscherWald",
    power: 328044396,
  },
  {
    server: 33051,
    family: "DeutscheArmada",
    power: 313731003,
  },
  {
    server: 33051,
    family: "diedachdecker",
    power: 311235192,
  },
  {
    server: 33051,
    family: "DieGreise",
    power: 249898401,
  },
  {
    server: 33051,
    family: "Villedor",
    power: 213912013,
  },
  {
    server: 33051,
    family: "gerWERWÖLFEdeu",
    power: 173221024,
  },
  {
    server: 33052,
    family: "CrimsonShrooms",
    power: 1544725752,
  },
  {
    server: 33052,
    family: "SoloLeveling",
    power: 1471900638,
  },
  {
    server: 33052,
    family: "LEVELUP",
    power: 958957834,
  },
  {
    server: 33052,
    family: "DunkelheitX",
    power: 414818008,
  },
  {
    server: 33052,
    family: "Pilzclan",
    power: 290378233,
  },
  {
    server: 33052,
    family: "TBF",
    power: 269754597,
  },
  {
    server: 33052,
    family: "PilzCup",
    power: 217448374,
  },
  {
    server: 33052,
    family: "GermanSquad",
    power: 197219790,
  },
  {
    server: 33052,
    family: "Shrooms",
    power: 189690287,
  },
  {
    server: 33052,
    family: "legendmashroom",
    power: 169376721,
  },
  {
    server: 33053,
    family: "NoGameNoLife",
    power: 1673408736,
  },
  {
    server: 33053,
    family: "Akatzuki",
    power: 1170621343,
  },
  {
    server: 33053,
    family: "AntiFußpilz",
    power: 437370351,
  },
  {
    server: 33053,
    family: "Schlumpfhausen",
    power: 429620413,
  },
  {
    server: 33053,
    family: "Ekliptik",
    power: 418272974,
  },
  {
    server: 33053,
    family: "SchattenPilze",
    power: 395843758,
  },
  {
    server: 33053,
    family: "Schlümpfe",
    power: 393229153,
  },
  {
    server: 33053,
    family: "Mashle",
    power: 381606378,
  },
  {
    server: 33053,
    family: "Back2Basic",
    power: 260324590,
  },
  {
    server: 33053,
    family: "FlügelPilze",
    power: 254702391,
  },
  {
    server: 33054,
    family: "Frontpilze",
    power: 1260949507,
  },
  {
    server: 33054,
    family: "SchattenPilze",
    power: 806534604,
  },
  {
    server: 33054,
    family: "TreeOfGondor",
    power: 661546686,
  },
  {
    server: 33054,
    family: "Seniorentreff",
    power: 601334653,
  },
  {
    server: 33054,
    family: "German_Anime",
    power: 394823728,
  },
  {
    server: 33054,
    family: "Pilzepasta",
    power: 321341834,
  },
  {
    server: 33054,
    family: "WinxClub",
    power: 306982247,
  },
  {
    server: 33054,
    family: "SoloLeveling",
    power: 290407131,
  },
  {
    server: 33054,
    family: "Pubnasen",
    power: 256744960,
  },
  {
    server: 33054,
    family: "Godmode",
    power: 245353103,
  },
  {
    server: 33055,
    family: "Pilzbande",
    power: 1528797502,
  },
  {
    server: 33055,
    family: "DiesüßenPilze",
    power: 1099580689,
  },
  {
    server: 33055,
    family: "SnowWhite",
    power: 690090973,
  },
  {
    server: 33055,
    family: "Powerpilze",
    power: 482707100,
  },
  {
    server: 33055,
    family: "PilzHeadHunter",
    power: 392740291,
  },
  {
    server: 33055,
    family: "RauschKraut",
    power: 370980389,
  },
  {
    server: 33055,
    family: "Allianz",
    power: 325183000,
  },
  {
    server: 33055,
    family: "MashroomCity",
    power: 256388262,
  },
  {
    server: 33055,
    family: "OhMyMushroom",
    power: 177035071,
  },
  {
    server: 33055,
    family: "ShroomTown",
    power: 164452065,
  },
  {
    server: 33056,
    family: "Champignons",
    power: 1831746827,
  },
  {
    server: 33056,
    family: "Pfifferlinge",
    power: 1428324797,
  },
  {
    server: 33056,
    family: "Yggdrasil",
    power: 480530128,
  },
  {
    server: 33056,
    family: "Bembelgauner",
    power: 462701421,
  },
  {
    server: 33056,
    family: "WeißerLotus",
    power: 420038787,
  },
  {
    server: 33056,
    family: "5gegenWilli",
    power: 362810520,
  },
  {
    server: 33056,
    family: "Toads",
    power: 287838214,
  },
  {
    server: 33056,
    family: "Blackwolfs",
    power: 265706177,
  },
  {
    server: 33056,
    family: "Shroomboom",
    power: 243411070,
  },
  {
    server: 33056,
    family: "Pilzmine",
    power: 237236196,
  },
  {
    server: 33057,
    family: "Pilzsuppe",
    power: 1592742458,
  },
  {
    server: 33057,
    family: "Poison",
    power: 1237236976,
  },
  {
    server: 33057,
    family: "GHG",
    power: 1095941618,
  },
  {
    server: 33057,
    family: "Knights",
    power: 735898096,
  },
  {
    server: 33057,
    family: "KönigsPilze",
    power: 327698496,
  },
  {
    server: 33057,
    family: "pandemushrioom",
    power: 284045792,
  },
  {
    server: 33057,
    family: "DragonFight",
    power: 247529993,
  },
  {
    server: 33057,
    family: "GeileTypen",
    power: 233591924,
  },
  {
    server: 33057,
    family: "FlauschigGHG",
    power: 214278729,
  },
  {
    server: 33057,
    family: "MontanaBlack88",
    power: 194473761,
  },
  {
    server: 33058,
    family: "Unikat",
    power: 1489008500,
  },
  {
    server: 33058,
    family: "DieGummibären",
    power: 1162857545,
  },
  {
    server: 33058,
    family: "Fetter_Kek",
    power: 1094971284,
  },
  {
    server: 33058,
    family: "Backwaren",
    power: 664277778,
  },
  {
    server: 33058,
    family: "Hayvans",
    power: 310795933,
  },
  {
    server: 33058,
    family: "TheLight",
    power: 279423220,
  },
  {
    server: 33058,
    family: "Bloodmoon",
    power: 253911100,
  },
  {
    server: 33058,
    family: "GermanElite",
    power: 199455195,
  },
  {
    server: 33058,
    family: "HakunaMatata",
    power: 188145977,
  },
  {
    server: 33058,
    family: "EiEiEi",
    power: 181280582,
  },
  {
    server: 33059,
    family: "Pilzhub",
    power: 1694791723,
  },
  {
    server: 33059,
    family: "Newbies",
    power: 1497775930,
  },
  {
    server: 33059,
    family: "FungiZid",
    power: 827804022,
  },
  {
    server: 33059,
    family: "GermanyOnTop",
    power: 718993843,
  },
  {
    server: 33059,
    family: "GermanClan",
    power: 463645547,
  },
  {
    server: 33059,
    family: "Pilzbier",
    power: 357956370,
  },
  {
    server: 33059,
    family: "Bloodmoon",
    power: 250788936,
  },
  {
    server: 33059,
    family: "HeavenGER",
    power: 237415210,
  },
  {
    server: 33059,
    family: "Germany",
    power: 231261748,
  },
  {
    server: 33059,
    family: "Daimond",
    power: 176261839,
  },
  {
    server: 33060,
    family: "MagicMushrooms",
    power: 1507183764,
  },
  {
    server: 33060,
    family: "Aincrad",
    power: 1204136749,
  },
  {
    server: 33060,
    family: "AFK",
    power: 847790230,
  },
  {
    server: 33060,
    family: "German_Fighter",
    power: 681991301,
  },
  {
    server: 33060,
    family: "FairyTail",
    power: 455919279,
  },
  {
    server: 33060,
    family: "AutSiderz",
    power: 384056450,
  },
  {
    server: 33060,
    family: "Rooms",
    power: 302041138,
  },
  {
    server: 33060,
    family: "BADBOYS",
    power: 300621259,
  },
  {
    server: 33060,
    family: "Idioten",
    power: 193812667,
  },
  {
    server: 33060,
    family: "DragonSlayer",
    power: 118411510,
  },
  {
    server: 33061,
    family: "Shadow_Garden",
    power: 1720754491,
  },
  {
    server: 33061,
    family: "PilzSociety",
    power: 1304893851,
  },
  {
    server: 33061,
    family: "Sunset_Ravens",
    power: 743826484,
  },
  {
    server: 33061,
    family: "KillerPilze",
    power: 710388884,
  },
  {
    server: 33061,
    family: "Pommesbude",
    power: 439198836,
  },
  {
    server: 33061,
    family: "Germany",
    power: 370867625,
  },
  {
    server: 33061,
    family: "ToyotaStein",
    power: 344407179,
  },
  {
    server: 33061,
    family: "Dragons",
    power: 300516803,
  },
  {
    server: 33061,
    family: "N1ghtfall",
    power: 260200938,
  },
  {
    server: 33061,
    family: "pfanddiebe",
    power: 245826454,
  },
  {
    server: 33062,
    family: "ViribusUnitis",
    power: 1644350028,
  },
  {
    server: 33062,
    family: "Knochenbrecher",
    power: 688603096,
  },
  {
    server: 33062,
    family: "GermanWolves",
    power: 494546365,
  },
  {
    server: 33062,
    family: "ViribusUnitis2",
    power: 463548932,
  },
  {
    server: 33062,
    family: "Welcome",
    power: 446276086,
  },
  {
    server: 33062,
    family: "PizzaFunghi",
    power: 384404262,
  },
  {
    server: 33062,
    family: "Giftpilz",
    power: 347315905,
  },
  {
    server: 33062,
    family: "RizzHerUp",
    power: 224918142,
  },
  {
    server: 33062,
    family: "Fliegenpilz",
    power: 183781155,
  },
  {
    server: 33062,
    family: "AnimeWorld",
    power: 182916306,
  },
  {
    server: 33063,
    family: "ARBEITSAMT",
    power: 1734447855,
  },
  {
    server: 33063,
    family: "LOM’s",
    power: 1281522151,
  },
  {
    server: 33063,
    family: "Rebellen",
    power: 1120245590,
  },
  {
    server: 33063,
    family: "Pilzbrut",
    power: 594676871,
  },
  {
    server: 33063,
    family: "Timeless",
    power: 571681587,
  },
  {
    server: 33063,
    family: "Shroomis",
    power: 398641147,
  },
  {
    server: 33063,
    family: "Mastershrooms",
    power: 272606256,
  },
  {
    server: 33063,
    family: "Strohhüte",
    power: 261086010,
  },
  {
    server: 33063,
    family: "Zauberpilze",
    power: 205032026,
  },
  {
    server: 33063,
    family: "107Hb",
    power: 175562303,
  },
  {
    server: 33064,
    family: "Todesengel",
    power: 1487297661,
  },
  {
    server: 33064,
    family: "Glückspilze",
    power: 1236323797,
  },
  {
    server: 33064,
    family: "CosaNostra",
    power: 1193263381,
  },
  {
    server: 33064,
    family: "GER_Pilzbande",
    power: 1164009575,
  },
  {
    server: 33064,
    family: "Champignons",
    power: 331518113,
  },
  {
    server: 33064,
    family: "Just4Fun",
    power: 320924561,
  },
  {
    server: 33064,
    family: "Schwammerl",
    power: 221279533,
  },
  {
    server: 33064,
    family: "OnePiece",
    power: 182881251,
  },
  {
    server: 33064,
    family: "Stammilienkrei",
    power: 130159932,
  },
  {
    server: 33064,
    family: "AtomPilz",
    power: 128064313,
  },
  {
    server: 33065,
    family: "GameOver",
    power: 1404500466,
  },
  {
    server: 33065,
    family: "GermanHero",
    power: 1388303182,
  },
  {
    server: 33065,
    family: "Imperium",
    power: 1059984562,
  },
  {
    server: 33065,
    family: "GermanElite",
    power: 545711682,
  },
  {
    server: 33065,
    family: "Nordlichter",
    power: 317805173,
  },
  {
    server: 33065,
    family: "PhantomPilze",
    power: 310439005,
  },
  {
    server: 33065,
    family: "Assassination",
    power: 286064393,
  },
  {
    server: 33065,
    family: "Miyunity",
    power: 251825604,
  },
  {
    server: 33065,
    family: "Pilzsammler",
    power: 250529272,
  },
  {
    server: 33065,
    family: "DiePilsTrinker",
    power: 240164089,
  },
  {
    server: 33066,
    family: "†Arise†",
    power: 1686770948,
  },
  {
    server: 33066,
    family: "Starlight",
    power: 1155328439,
  },
  {
    server: 33066,
    family: "Godlike",
    power: 637361327,
  },
  {
    server: 33066,
    family: "Germania",
    power: 444611613,
  },
  {
    server: 33066,
    family: "AriseV3",
    power: 436921125,
  },
  {
    server: 33066,
    family: "PilzBunker",
    power: 426667118,
  },
  {
    server: 33066,
    family: "SuicideSquad",
    power: 369458334,
  },
  {
    server: 33066,
    family: "DinoNuggets",
    power: 303070302,
  },
  {
    server: 33066,
    family: "MagicMushrooms",
    power: 289854624,
  },
  {
    server: 33066,
    family: "KDK",
    power: 260193280,
  },
  {
    server: 33067,
    family: "Fußpilz",
    power: 1597586004,
  },
  {
    server: 33067,
    family: "Dragons",
    power: 1155546874,
  },
  {
    server: 33067,
    family: "SalzPilze",
    power: 748671922,
  },
  {
    server: 33067,
    family: "Pilzkönigreich",
    power: 538931232,
  },
  {
    server: 33067,
    family: "FirstMush",
    power: 385061059,
  },
  {
    server: 33067,
    family: "Altersheim",
    power: 371889500,
  },
  {
    server: 33067,
    family: "Trachatza",
    power: 323712323,
  },
  {
    server: 33067,
    family: "Utopia",
    power: 270789178,
  },
  {
    server: 33067,
    family: "Grounder",
    power: 264271461,
  },
  {
    server: 33067,
    family: "Terminatoren",
    power: 207022269,
  },
  {
    server: 33068,
    family: "Mushpit",
    power: 1522530302,
  },
  {
    server: 33068,
    family: "Stammtisch",
    power: 1433237872,
  },
  {
    server: 33068,
    family: "PilzKönigreich",
    power: 1165791555,
  },
  {
    server: 33068,
    family: "Germanien",
    power: 576813071,
  },
  {
    server: 33068,
    family: "PilzFarm",
    power: 385787830,
  },
  {
    server: 33068,
    family: "WeebTower",
    power: 287469484,
  },
  {
    server: 33068,
    family: "FairyTale",
    power: 285486964,
  },
  {
    server: 33068,
    family: "GermanElite",
    power: 285028254,
  },
  {
    server: 33068,
    family: "Pilzkönig",
    power: 238502127,
  },
  {
    server: 33068,
    family: "Ostfriesen",
    power: 229036003,
  },
  {
    server: 33069,
    family: "SoulSociety",
    power: 1669064080,
  },
  {
    server: 33069,
    family: "SoloLeveling",
    power: 971395101,
  },
  {
    server: 33069,
    family: "Helldogs",
    power: 760374572,
  },
  {
    server: 33069,
    family: "StartUP",
    power: 665297474,
  },
  {
    server: 33069,
    family: "Schwänze",
    power: 312314096,
  },
  {
    server: 33069,
    family: "danger",
    power: 287700586,
  },
  {
    server: 33069,
    family: "Erdbeerdiele",
    power: 282246109,
  },
  {
    server: 33069,
    family: "MeowMeow",
    power: 186407384,
  },
  {
    server: 33069,
    family: "ProjectX",
    power: 155551686,
  },
  {
    server: 33069,
    family: "Einheit",
    power: 142602579,
  },
  {
    server: 33070,
    family: "PF_Pilzlinge",
    power: 1503822087,
  },
  {
    server: 33070,
    family: "PilzBanger",
    power: 1217616037,
  },
  {
    server: 33070,
    family: "PilzigerOrden",
    power: 692401408,
  },
  {
    server: 33070,
    family: "Oblivion",
    power: 589338922,
  },
  {
    server: 33070,
    family: "Sololeveling",
    power: 395458516,
  },
  {
    server: 33070,
    family: "WölfeOdins",
    power: 344274110,
  },
  {
    server: 33070,
    family: "FP_Pilzlinge",
    power: 315175043,
  },
  {
    server: 33070,
    family: "Die_Schieber",
    power: 285318595,
  },
  {
    server: 33070,
    family: "Pilzjäger",
    power: 279462293,
  },
  {
    server: 33070,
    family: "Ruppendorf",
    power: 269167449,
  },
  {
    server: 33071,
    family: "LastEternity",
    power: 1579695096,
  },
  {
    server: 33071,
    family: "Wallhal",
    power: 1197676222,
  },
  {
    server: 33071,
    family: "MentosVitamin",
    power: 703205769,
  },
  {
    server: 33071,
    family: "EsstmehrPilze",
    power: 661598669,
  },
  {
    server: 33071,
    family: "Classics",
    power: 430979468,
  },
  {
    server: 33071,
    family: "Eureka",
    power: 402023251,
  },
  {
    server: 33071,
    family: "Schneckensquad",
    power: 390284061,
  },
  {
    server: 33071,
    family: "PilzBefall",
    power: 307483463,
  },
  {
    server: 33071,
    family: "Akatsuki",
    power: 152473429,
  },
  {
    server: 33071,
    family: "OVERLORD",
    power: 134986866,
  },
  {
    server: 33072,
    family: "Heldenhaft",
    power: 1669632104,
  },
  {
    server: 33072,
    family: "Mushrooms",
    power: 991645593,
  },
  {
    server: 33072,
    family: "DemonKingdom",
    power: 548507812,
  },
  {
    server: 33072,
    family: "technobunker",
    power: 531577256,
  },
  {
    server: 33072,
    family: "StarkeTruppe",
    power: 449505831,
  },
  {
    server: 33072,
    family: "myProject",
    power: 364079185,
  },
  {
    server: 33072,
    family: "Rasselbande",
    power: 305904594,
  },
  {
    server: 33072,
    family: "AtomPlize",
    power: 257096010,
  },
  {
    server: 33072,
    family: "Pilzeintopf",
    power: 233509428,
  },
  {
    server: 33072,
    family: "Darkness",
    power: 194513954,
  },
  {
    server: 33073,
    family: "UwU",
    power: 1727025218,
  },
  {
    server: 33073,
    family: "Walhalla",
    power: 1261773164,
  },
  {
    server: 33073,
    family: "EndlessFantasy",
    power: 655737998,
  },
  {
    server: 33073,
    family: "Pilzfamilie",
    power: 594602876,
  },
  {
    server: 33073,
    family: "GermanyDragon",
    power: 491299610,
  },
  {
    server: 33073,
    family: "TheLastLord",
    power: 323562423,
  },
  {
    server: 33073,
    family: "HyperActive",
    power: 285947034,
  },
  {
    server: 33073,
    family: "GHG",
    power: 275802863,
  },
  {
    server: 33073,
    family: "BohnenBande",
    power: 268240696,
  },
  {
    server: 33073,
    family: "DieBros",
    power: 249979378,
  },
  {
    server: 33074,
    family: "INVICTUM",
    power: 1491433418,
  },
  {
    server: 33074,
    family: "Pilz_Family",
    power: 1276790344,
  },
  {
    server: 33074,
    family: "Pilzmania",
    power: 1027676270,
  },
  {
    server: 33074,
    family: "SpandauerPilze",
    power: 483976069,
  },
  {
    server: 33074,
    family: "Flitzpiepen",
    power: 361349429,
  },
  {
    server: 33074,
    family: "Starter",
    power: 310352153,
  },
  {
    server: 33074,
    family: "MeckPommPilze",
    power: 296336187,
  },
  {
    server: 33074,
    family: "DieBumis",
    power: 292331703,
  },
  {
    server: 33074,
    family: "hust",
    power: 268816098,
  },
  {
    server: 33074,
    family: "Teammelone",
    power: 232500911,
  },
  {
    server: 33075,
    family: "Valhalla",
    power: 1766349353,
  },
  {
    server: 33075,
    family: "PilzBunker",
    power: 1028107520,
  },
  {
    server: 33075,
    family: "Bloody‘s",
    power: 864107236,
  },
  {
    server: 33075,
    family: "oldMushrooms",
    power: 680375122,
  },
  {
    server: 33075,
    family: "HGD",
    power: 410882787,
  },
  {
    server: 33075,
    family: "Bavaria",
    power: 352732129,
  },
  {
    server: 33075,
    family: "Pilzbande",
    power: 325508794,
  },
  {
    server: 33075,
    family: "EZ_Gundulas",
    power: 322781498,
  },
  {
    server: 33075,
    family: "Pilzis",
    power: 231446927,
  },
  {
    server: 33075,
    family: "FreeDreams",
    power: 189706232,
  },
  {
    server: 33076,
    family: "Brownie",
    power: 1558118566,
  },
  {
    server: 33076,
    family: "EmP",
    power: 1206852891,
  },
  {
    server: 33076,
    family: "Skyfall",
    power: 701523336,
  },
  {
    server: 33076,
    family: "DeutschePilze",
    power: 405225992,
  },
  {
    server: 33076,
    family: "Cry",
    power: 366637734,
  },
  {
    server: 33076,
    family: "OVL_Overlord",
    power: 363225915,
  },
  {
    server: 33076,
    family: "MagicMushrooms",
    power: 324361570,
  },
  {
    server: 33076,
    family: "Fairytail",
    power: 298476156,
  },
  {
    server: 33076,
    family: "Moin",
    power: 290197592,
  },
  {
    server: 33076,
    family: "Deutschland",
    power: 279764637,
  },
  {
    server: 33077,
    family: "DarkWinter",
    power: 1689179338,
  },
  {
    server: 33077,
    family: "Predators",
    power: 1227028660,
  },
  {
    server: 33077,
    family: "Einhorngang",
    power: 437460656,
  },
  {
    server: 33077,
    family: "Würstchenparty",
    power: 356842294,
  },
  {
    server: 33077,
    family: "Society",
    power: 330781896,
  },
  {
    server: 33077,
    family: "Germany",
    power: 294381086,
  },
  {
    server: 33077,
    family: "Germania",
    power: 290359972,
  },
  {
    server: 33077,
    family: "MagicMush",
    power: 262040581,
  },
  {
    server: 33077,
    family: "Deutschland",
    power: 231654990,
  },
  {
    server: 33077,
    family: "thegamer",
    power: 163313146,
  },
  {
    server: 33078,
    family: "PilzArmee",
    power: 1594580634,
  },
  {
    server: 33078,
    family: "PilzBörse",
    power: 1055217494,
  },
  {
    server: 33078,
    family: "DeathNote",
    power: 994513172,
  },
  {
    server: 33078,
    family: "Meow",
    power: 545387248,
  },
  {
    server: 33078,
    family: "DieVonGestern",
    power: 435002001,
  },
  {
    server: 33078,
    family: "German_Hate",
    power: 347067742,
  },
  {
    server: 33078,
    family: "Technobunker",
    power: 308306990,
  },
  {
    server: 33078,
    family: "Deutschland",
    power: 220469499,
  },
  {
    server: 33078,
    family: "Legion",
    power: 200906024,
  },
  {
    server: 33078,
    family: "DeutschePilze",
    power: 191070127,
  },
  {
    server: 33079,
    family: "PilzPudding",
    power: 1360964337,
  },
  {
    server: 33079,
    family: "PilzHunter",
    power: 936760080,
  },
  {
    server: 33079,
    family: "SoloLeveling",
    power: 820156915,
  },
  {
    server: 33079,
    family: "PilzKrieger",
    power: 528435467,
  },
  {
    server: 33079,
    family: "ElitePilze",
    power: 391398419,
  },
  {
    server: 33079,
    family: "Teddybären",
    power: 356854726,
  },
  {
    server: 33079,
    family: "Puddings",
    power: 339088865,
  },
  {
    server: 33079,
    family: "FUNGUS",
    power: 220033419,
  },
  {
    server: 33079,
    family: "Pilzsuppe",
    power: 215521430,
  },
  {
    server: 33079,
    family: "AOF",
    power: 179731297,
  },
  {
    server: 33080,
    family: "AnotherOne",
    power: 1340717183,
  },
  {
    server: 33080,
    family: "YSL",
    power: 1227686742,
  },
  {
    server: 33080,
    family: "AllStars",
    power: 932064516,
  },
  {
    server: 33080,
    family: "DieSchlümpfe",
    power: 360595327,
  },
  {
    server: 33080,
    family: "LEGENDS",
    power: 329659124,
  },
  {
    server: 33080,
    family: "ENDGEGNER",
    power: 280021972,
  },
  {
    server: 33080,
    family: "Germanpilze",
    power: 276253179,
  },
  {
    server: 33080,
    family: "Hurricane",
    power: 221396618,
  },
  {
    server: 33080,
    family: "GER",
    power: 214193069,
  },
  {
    server: 33080,
    family: "Happy",
    power: 198975636,
  },
  {
    server: 33081,
    family: "TopShrooms",
    power: 1379652807,
  },
  {
    server: 33081,
    family: "TOAD_CLUB",
    power: 680945033,
  },
  {
    server: 33081,
    family: "GNADENLOS",
    power: 545883827,
  },
  {
    server: 33081,
    family: "Ascender",
    power: 412249827,
  },
  {
    server: 33081,
    family: "Wallhalla",
    power: 270571945,
  },
  {
    server: 33081,
    family: "WasGehtAb",
    power: 265040991,
  },
  {
    server: 33081,
    family: "OXYGEN",
    power: 242387663,
  },
  {
    server: 33081,
    family: "Gewinner",
    power: 228063832,
  },
  {
    server: 33081,
    family: "Himmelsflügel",
    power: 207585955,
  },
  {
    server: 33081,
    family: "MushroomArmy",
    power: 178790658,
  },
  {
    server: 33082,
    family: "DeathNote",
    power: 1348439419,
  },
  {
    server: 33082,
    family: "PilzHub",
    power: 1075384178,
  },
  {
    server: 33082,
    family: "LonelySouls",
    power: 976592476,
  },
  {
    server: 33082,
    family: "TerbrackClan",
    power: 347774872,
  },
  {
    server: 33082,
    family: "WildCats",
    power: 320342410,
  },
  {
    server: 33082,
    family: "technobunker",
    power: 319440107,
  },
  {
    server: 33082,
    family: "CaliCartel",
    power: 297556285,
  },
  {
    server: 33082,
    family: "Actimelisiert",
    power: 198632115,
  },
  {
    server: 33082,
    family: "MaxHax",
    power: 192821931,
  },
  {
    server: 33082,
    family: "green",
    power: 187852742,
  },
  {
    server: 33083,
    family: "FirstBlood",
    power: 1483657169,
  },
  {
    server: 33083,
    family: "Limitless",
    power: 954767176,
  },
  {
    server: 33083,
    family: "MondWolf",
    power: 568142658,
  },
  {
    server: 33083,
    family: "TheHighGround",
    power: 465095771,
  },
  {
    server: 33083,
    family: "HIGHLIFE",
    power: 413222370,
  },
  {
    server: 33083,
    family: "UwUTangClan",
    power: 394961121,
  },
  {
    server: 33083,
    family: "Theoretisch",
    power: 238938641,
  },
  {
    server: 33083,
    family: "stabilität",
    power: 227535515,
  },
  {
    server: 33083,
    family: "DieSuchtProfis",
    power: 202132366,
  },
  {
    server: 33083,
    family: "Furzknäuse",
    power: 118414157,
  },
  {
    server: 33084,
    family: "Reborn",
    power: 1316475508,
  },
  {
    server: 33084,
    family: "2ndChance",
    power: 1281995086,
  },
  {
    server: 33084,
    family: "StonerElite",
    power: 401820142,
  },
  {
    server: 33084,
    family: "DeutscherAdler",
    power: 343732018,
  },
  {
    server: 33084,
    family: "Sandkastenboys",
    power: 304789640,
  },
  {
    server: 33084,
    family: "PilsVomFass",
    power: 255366710,
  },
  {
    server: 33084,
    family: "Sporenpilz",
    power: 204431510,
  },
  {
    server: 33084,
    family: "RAss3lBAnd3",
    power: 202099892,
  },
  {
    server: 33084,
    family: "germanvikings",
    power: 201738000,
  },
  {
    server: 33084,
    family: "1Leafe",
    power: 196431333,
  },
  {
    server: 33085,
    family: "Top_Shrooms",
    power: 1328080877,
  },
  {
    server: 33085,
    family: "LastHope",
    power: 1229790831,
  },
  {
    server: 33085,
    family: "DieVerlorenen",
    power: 692297385,
  },
  {
    server: 33085,
    family: "NewHorizon",
    power: 613965397,
  },
  {
    server: 33085,
    family: "Unkreativ",
    power: 321785127,
  },
  {
    server: 33085,
    family: "DiePilze",
    power: 315176016,
  },
  {
    server: 33085,
    family: "Schnuffels",
    power: 237622054,
  },
  {
    server: 33085,
    family: "ALPHA",
    power: 198492072,
  },
  {
    server: 33085,
    family: "kingdom",
    power: 180831748,
  },
  {
    server: 33085,
    family: "Fliegenpilze",
    power: 176982371,
  },
  {
    server: 33086,
    family: "PilzArmee",
    power: 1371511820,
  },
  {
    server: 33086,
    family: "DieEichelpilze",
    power: 1004059018,
  },
  {
    server: 33086,
    family: "Berserker",
    power: 626915915,
  },
  {
    server: 33086,
    family: "GG",
    power: 476460389,
  },
  {
    server: 33086,
    family: "PilzeImWald",
    power: 344429479,
  },
  {
    server: 33086,
    family: "Ravenclaw",
    power: 343982357,
  },
  {
    server: 33086,
    family: "Legends",
    power: 279161521,
  },
  {
    server: 33086,
    family: "GermanElite",
    power: 275591060,
  },
  {
    server: 33086,
    family: "Psychedelics",
    power: 253731923,
  },
  {
    server: 33086,
    family: "BubatzUnited",
    power: 184059044,
  },
  {
    server: 33087,
    family: "Vollstrecker",
    power: 1149776879,
  },
  {
    server: 33087,
    family: "ShadowGarden",
    power: 839335246,
  },
  {
    server: 33087,
    family: "Schattenreiter",
    power: 596817615,
  },
  {
    server: 33087,
    family: "PilzSuppe",
    power: 518942968,
  },
  {
    server: 33087,
    family: "FreizeitPilze",
    power: 402093658,
  },
  {
    server: 33087,
    family: "DasPils",
    power: 350580125,
  },
  {
    server: 33087,
    family: "Blutmondclan",
    power: 314587114,
  },
  {
    server: 33087,
    family: "PilzGermanen",
    power: 298594963,
  },
  {
    server: 33087,
    family: "Crim",
    power: 266575327,
  },
  {
    server: 33087,
    family: "Actimelisiert",
    power: 238875101,
  },
  {
    server: 33088,
    family: "uchia",
    power: 1193615639,
  },
  {
    server: 33088,
    family: "DarkKnight",
    power: 1168254629,
  },
  {
    server: 33088,
    family: "Gummibärchen",
    power: 1167191805,
  },
  {
    server: 33088,
    family: "Deutschland",
    power: 364971035,
  },
  {
    server: 33088,
    family: "MushroomElite",
    power: 268220109,
  },
  {
    server: 33088,
    family: "Paradox",
    power: 235598784,
  },
  {
    server: 33088,
    family: "SortArtOnline",
    power: 212933088,
  },
  {
    server: 33088,
    family: "murshfighters",
    power: 200375557,
  },
  {
    server: 33088,
    family: "Inferno",
    power: 190577879,
  },
  {
    server: 33088,
    family: "DREAMTEAM",
    power: 184848894,
  },
  {
    server: 33089,
    family: "ToadsFamily",
    power: 1283272962,
  },
  {
    server: 33089,
    family: "Shroomville",
    power: 1170743757,
  },
  {
    server: 33089,
    family: "Titans",
    power: 428281430,
  },
  {
    server: 33089,
    family: "Pilzköpfe",
    power: 309048748,
  },
  {
    server: 33089,
    family: "NSFW",
    power: 281108415,
  },
  {
    server: 33089,
    family: "Enten",
    power: 262495244,
  },
  {
    server: 33089,
    family: "Inkognito420",
    power: 254480623,
  },
  {
    server: 33089,
    family: "Nordsee",
    power: 245561089,
  },
  {
    server: 33089,
    family: "Klobürste",
    power: 191948626,
  },
  {
    server: 33089,
    family: "Loyalität",
    power: 166564256,
  },
  {
    server: 33090,
    family: "shroomys",
    power: 1455175707,
  },
  {
    server: 33090,
    family: "TeamKugelblitz",
    power: 1006275700,
  },
  {
    server: 33090,
    family: "rTacoos",
    power: 399572070,
  },
  {
    server: 33090,
    family: "GuteNudeln",
    power: 351855435,
  },
  {
    server: 33090,
    family: "SoloLeveling",
    power: 338164965,
  },
  {
    server: 33090,
    family: "TeamKugelBlitz",
    power: 327441379,
  },
  {
    server: 33090,
    family: "KillingSpree",
    power: 308582521,
  },
  {
    server: 33090,
    family: "PilzkopfBande",
    power: 266287559,
  },
  {
    server: 33090,
    family: "Mushroomkings",
    power: 262755264,
  },
  {
    server: 33090,
    family: "TeamFaktorX",
    power: 220078783,
  },
  {
    server: 33091,
    family: "PilzElite",
    power: 1227211884,
  },
  {
    server: 33091,
    family: "Pilzköpfe",
    power: 1037771648,
  },
  {
    server: 33091,
    family: "GameOver",
    power: 998315653,
  },
  {
    server: 33091,
    family: "Sanctuary",
    power: 302159561,
  },
  {
    server: 33091,
    family: "PhantomPilze",
    power: 229987711,
  },
  {
    server: 33091,
    family: "Die_Deutschen",
    power: 203325115,
  },
  {
    server: 33091,
    family: "SaarBrigade",
    power: 201581960,
  },
  {
    server: 33091,
    family: "GHG",
    power: 180892248,
  },
  {
    server: 33091,
    family: "BlackDragon",
    power: 179884434,
  },
  {
    server: 33091,
    family: "MagicMushrooms",
    power: 166840301,
  },
  {
    server: 33092,
    family: "ChaosCrew",
    power: 1297137794,
  },
  {
    server: 33092,
    family: "Akatsuki",
    power: 1079025186,
  },
  {
    server: 33092,
    family: "Elite",
    power: 462772689,
  },
  {
    server: 33092,
    family: "Wolfsblut",
    power: 387502062,
  },
  {
    server: 33092,
    family: "D4C",
    power: 325740106,
  },
  {
    server: 33092,
    family: "VoodooGarden",
    power: 238876584,
  },
  {
    server: 33092,
    family: "OnePiece",
    power: 196892642,
  },
  {
    server: 33092,
    family: "MagicMushrooms",
    power: 190892079,
  },
  {
    server: 33092,
    family: "TopShrooms",
    power: 185244344,
  },
  {
    server: 33092,
    family: "Pilzsuppe",
    power: 157051127,
  },
  {
    server: 33093,
    family: "Damage",
    power: 1301678871,
  },
  {
    server: 33093,
    family: "SINNERS",
    power: 497624359,
  },
  {
    server: 33093,
    family: "MagicChampions",
    power: 459502277,
  },
  {
    server: 33093,
    family: "Horde",
    power: 350258646,
  },
  {
    server: 33093,
    family: "Gregoronkh",
    power: 306461442,
  },
  {
    server: 33093,
    family: "Bratwurst",
    power: 289748961,
  },
  {
    server: 33093,
    family: "Klobürsten",
    power: 285103194,
  },
  {
    server: 33093,
    family: "Ronin",
    power: 240475467,
  },
  {
    server: 33093,
    family: "Der_Beste",
    power: 231594636,
  },
  {
    server: 33093,
    family: "F2P",
    power: 207516497,
  },
  {
    server: 33094,
    family: "Unglaublich",
    power: 1257837384,
  },
  {
    server: 33094,
    family: "ProMushroom",
    power: 948796483,
  },
  {
    server: 33094,
    family: "NewMoons",
    power: 359901137,
  },
  {
    server: 33094,
    family: "IchAlleine",
    power: 313906524,
  },
  {
    server: 33094,
    family: "Loyals",
    power: 269437084,
  },
  {
    server: 33094,
    family: "AlceunEmpire",
    power: 229152897,
  },
  {
    server: 33094,
    family: "Sporentrupp",
    power: 226878137,
  },
  {
    server: 33094,
    family: "Drachenreiter",
    power: 217250451,
  },
  {
    server: 33094,
    family: "GERZellenblock",
    power: 197401666,
  },
  {
    server: 33094,
    family: "Raum17",
    power: 193959959,
  },
  {
    server: 33095,
    family: "InfinityManji",
    power: 1322147906,
  },
  {
    server: 33095,
    family: "LiveFast",
    power: 1206390876,
  },
  {
    server: 33095,
    family: "DämonenParade",
    power: 806139868,
  },
  {
    server: 33095,
    family: "Echo",
    power: 496338801,
  },
  {
    server: 33095,
    family: "Astral",
    power: 314810373,
  },
  {
    server: 33095,
    family: "Tempest",
    power: 277828002,
  },
  {
    server: 33095,
    family: "GermanAngels",
    power: 222055800,
  },
  {
    server: 33095,
    family: "FairyTail",
    power: 211389127,
  },
  {
    server: 33095,
    family: "Brot_brot",
    power: 208843044,
  },
  {
    server: 33095,
    family: "Stammtisch",
    power: 202001866,
  },
  {
    server: 33096,
    family: "MushroomArmy",
    power: 1168789171,
  },
  {
    server: 33096,
    family: "Germanyx",
    power: 986797717,
  },
  {
    server: 33096,
    family: "Schwabbel",
    power: 479208370,
  },
  {
    server: 33096,
    family: "FairyTail",
    power: 414089001,
  },
  {
    server: 33096,
    family: "Fruchtpilze",
    power: 250286956,
  },
  {
    server: 33096,
    family: "ImpactGaming",
    power: 230777065,
  },
  {
    server: 33096,
    family: "DasTrio",
    power: 211108369,
  },
  {
    server: 33096,
    family: "DieGiftpilze",
    power: 205107375,
  },
  {
    server: 33096,
    family: "Teufelskerle",
    power: 193056300,
  },
  {
    server: 33096,
    family: "GetSchwifty",
    power: 179280096,
  },
  {
    server: 33097,
    family: "🩸BloodSoaked",
    power: 1255271878,
  },
  {
    server: 33097,
    family: "🥷Akatsuki🥷",
    power: 802149338,
  },
  {
    server: 33097,
    family: "⭐_Gummibären_⭐",
    power: 784296430,
  },
  {
    server: 33097,
    family: "GER",
    power: 423245438,
  },
  {
    server: 33097,
    family: "FairyTail",
    power: 377604787,
  },
  {
    server: 33097,
    family: "DieBösenBuben",
    power: 289128861,
  },
  {
    server: 33097,
    family: "ElPrimo",
    power: 261413193,
  },
  {
    server: 33097,
    family: "Bubatz",
    power: 245162192,
  },
  {
    server: 33097,
    family: "DiePilze",
    power: 201771207,
  },
  {
    server: 33097,
    family: "Fliegenpilz",
    power: 190759971,
  },
  {
    server: 33098,
    family: "Astelic",
    power: 1151043700,
  },
  {
    server: 33098,
    family: "Angel_Of_Chaos",
    power: 768202179,
  },
  {
    server: 33098,
    family: "MondGlanz",
    power: 421988880,
  },
  {
    server: 33098,
    family: "Luxeaterna",
    power: 393092706,
  },
  {
    server: 33098,
    family: "Pandora",
    power: 343580801,
  },
  {
    server: 33098,
    family: "HalterOberflur",
    power: 342250269,
  },
  {
    server: 33098,
    family: "MagicShrooms",
    power: 303171850,
  },
  {
    server: 33098,
    family: "RisingMushroom",
    power: 227137075,
  },
  {
    server: 33098,
    family: "lions",
    power: 219354879,
  },
  {
    server: 33098,
    family: "ZeigEier",
    power: 183489654,
  },
  {
    server: 33099,
    family: "Fuzzy",
    power: 1219306391,
  },
  {
    server: 33099,
    family: "Germania",
    power: 1017197545,
  },
  {
    server: 33099,
    family: "PsyMushrooms",
    power: 527156769,
  },
  {
    server: 33099,
    family: "Deadlyrooms",
    power: 350817801,
  },
  {
    server: 33099,
    family: "DieVolstrecker",
    power: 347668262,
  },
  {
    server: 33099,
    family: "OnlyGermany",
    power: 273557878,
  },
  {
    server: 33099,
    family: "WCYD",
    power: 270173884,
  },
  {
    server: 33099,
    family: "Strohhüte",
    power: 260508920,
  },
  {
    server: 33099,
    family: "königlichestor",
    power: 245346903,
  },
  {
    server: 33099,
    family: "Elmussy",
    power: 244956049,
  },
  {
    server: 33100,
    family: "MonKings",
    power: 1101197303,
  },
  {
    server: 33100,
    family: "DieRatlosen",
    power: 1097688914,
  },
  {
    server: 33100,
    family: "Unlucky",
    power: 881843548,
  },
  {
    server: 33100,
    family: "Fliegenpilze",
    power: 353967646,
  },
  {
    server: 33100,
    family: "Phönix",
    power: 338812176,
  },
  {
    server: 33100,
    family: "Elite",
    power: 257346379,
  },
  {
    server: 33100,
    family: "Untherapierbar",
    power: 227405417,
  },
  {
    server: 33100,
    family: "Nordlinge",
    power: 223104339,
  },
  {
    server: 33100,
    family: "SoloLeveling",
    power: 208799772,
  },
  {
    server: 33100,
    family: "POPHKAS",
    power: 195848602,
  },
  {
    server: 33101,
    family: "shadow_garden",
    power: 978447642,
  },
  {
    server: 33101,
    family: "Phönixgarde",
    power: 901033319,
  },
  {
    server: 33101,
    family: "Ehrenmänner",
    power: 616338952,
  },
  {
    server: 33101,
    family: "DEmpire",
    power: 447867408,
  },
  {
    server: 33101,
    family: "diePilze",
    power: 331764116,
  },
  {
    server: 33101,
    family: "Pilzregatta",
    power: 242886837,
  },
  {
    server: 33101,
    family: "Magic_Mushroom",
    power: 237957829,
  },
  {
    server: 33101,
    family: "Hamburg",
    power: 205430459,
  },
  {
    server: 33101,
    family: "Schroomtrooper",
    power: 202400191,
  },
  {
    server: 33101,
    family: "DieEinhörner",
    power: 155855952,
  },
  {
    server: 33102,
    family: "Free2Play",
    power: 1130189574,
  },
  {
    server: 33102,
    family: "Clap4Us",
    power: 917021172,
  },
  {
    server: 33102,
    family: "420nShrooms",
    power: 552180148,
  },
  {
    server: 33102,
    family: "BlackofDays",
    power: 397641015,
  },
  {
    server: 33102,
    family: "StonerShrooms",
    power: 229175856,
  },
  {
    server: 33102,
    family: "DieChaoten",
    power: 221625152,
  },
  {
    server: 33102,
    family: "Verpesstung",
    power: 208927803,
  },
  {
    server: 33102,
    family: "Silberpilz",
    power: 206951213,
  },
  {
    server: 33102,
    family: "Shaggers",
    power: 194508133,
  },
  {
    server: 33102,
    family: "Residenz",
    power: 191347830,
  },
  {
    server: 33103,
    family: "Legends",
    power: 1094047313,
  },
  {
    server: 33103,
    family: "MagicMushroom",
    power: 686631033,
  },
  {
    server: 33103,
    family: "ILLIRIA",
    power: 448343873,
  },
  {
    server: 33103,
    family: "JOKERz",
    power: 261350877,
  },
  {
    server: 33103,
    family: "S44_Elite",
    power: 257166652,
  },
  {
    server: 33103,
    family: "FettSäckeAG",
    power: 237736662,
  },
  {
    server: 33103,
    family: "Deutsch",
    power: 210347025,
  },
  {
    server: 33103,
    family: "Pilzerama",
    power: 205987385,
  },
  {
    server: 33103,
    family: "ArbeitsamV2",
    power: 148660826,
  },
  {
    server: 33103,
    family: "FungiFusion",
    power: 126641382,
  },
  {
    server: 33104,
    family: "Pilzbunker",
    power: 1110059557,
  },
  {
    server: 33104,
    family: "DarkEvils",
    power: 661294268,
  },
  {
    server: 33104,
    family: "PilzKönige",
    power: 375290687,
  },
  {
    server: 33104,
    family: "Diablo",
    power: 259499163,
  },
  {
    server: 33104,
    family: "Vogtland",
    power: 222778522,
  },
  {
    server: 33104,
    family: "Pilzbande",
    power: 215059135,
  },
  {
    server: 33104,
    family: "DaRkNeSs",
    power: 209682008,
  },
  {
    server: 33104,
    family: "ReadyOasis",
    power: 208823092,
  },
  {
    server: 33104,
    family: "Dieeierlecker",
    power: 196283165,
  },
  {
    server: 33104,
    family: "NetzePilze",
    power: 194723926,
  },
  {
    server: 33105,
    family: "ILoveCookies",
    power: 784870915,
  },
  {
    server: 33105,
    family: "Pay2Lose",
    power: 643378318,
  },
  {
    server: 33105,
    family: "NoFoxGiven",
    power: 518412989,
  },
  {
    server: 33105,
    family: "Germany",
    power: 262697484,
  },
  {
    server: 33105,
    family: "Misfits",
    power: 241210977,
  },
  {
    server: 33105,
    family: "Giftzwerge",
    power: 212892142,
  },
  {
    server: 33105,
    family: "NoWayOut",
    power: 175956004,
  },
  {
    server: 33105,
    family: "Deutschland",
    power: 174601238,
  },
  {
    server: 33105,
    family: "Lust",
    power: 134825600,
  },
  {
    server: 33105,
    family: "Krombacher",
    power: 62332035,
  },
  {
    server: 33106,
    family: "Pilzanstalt",
    power: 782164996,
  },
  {
    server: 33106,
    family: "豈187豈",
    power: 625129076,
  },
  {
    server: 33106,
    family: "DiePilzis",
    power: 403194974,
  },
  {
    server: 33106,
    family: "Schlumpfhausen",
    power: 280430438,
  },
  {
    server: 33106,
    family: "Uchiha_Clan",
    power: 270656778,
  },
  {
    server: 33106,
    family: "ShroomSmurf",
    power: 223443558,
  },
  {
    server: 33106,
    family: "Deutschland",
    power: 193850645,
  },
  {
    server: 33106,
    family: "Namikaze",
    power: 185827814,
  },
  {
    server: 33106,
    family: "SKAS",
    power: 168776333,
  },
  {
    server: 33106,
    family: "ShroomTroopers",
    power: 155560536,
  },
  {
    server: 33107,
    family: "Extinction",
    power: 982018710,
  },
  {
    server: 33107,
    family: "Pilzköppe",
    power: 889091041,
  },
  {
    server: 33107,
    family: "MushroomKings",
    power: 554064076,
  },
  {
    server: 33107,
    family: "LOMGerman",
    power: 289168072,
  },
  {
    server: 33107,
    family: "420Club",
    power: 221083297,
  },
  {
    server: 33107,
    family: "Saftladen",
    power: 218758178,
  },
  {
    server: 33107,
    family: "BlutrauschGER",
    power: 216297231,
  },
  {
    server: 33107,
    family: "DiePilzköpfe",
    power: 189652371,
  },
  {
    server: 33107,
    family: "MagicMushrooms",
    power: 179234398,
  },
  {
    server: 33107,
    family: "BS_CLAN",
    power: 171553092,
  },
  {
    server: 33108,
    family: "DevilClub",
    power: 944824987,
  },
  {
    server: 33108,
    family: "JuraWald",
    power: 781963758,
  },
  {
    server: 33108,
    family: "Pussypilze",
    power: 571190971,
  },
  {
    server: 33108,
    family: "DiePilzkrieger",
    power: 251041802,
  },
  {
    server: 33108,
    family: "ClanDesGrauens",
    power: 219963782,
  },
  {
    server: 33108,
    family: "Medusa",
    power: 207854703,
  },
  {
    server: 33108,
    family: "DeutscheCobra",
    power: 178519362,
  },
  {
    server: 33108,
    family: "pilzköppe",
    power: 171623111,
  },
  {
    server: 33108,
    family: "Valhalla",
    power: 165938326,
  },
  {
    server: 33108,
    family: "RankOne",
    power: 165832644,
  },
  {
    server: 33109,
    family: "FourTwenty",
    power: 918356818,
  },
  {
    server: 33109,
    family: "NEKO",
    power: 596904558,
  },
  {
    server: 33109,
    family: "BloodyS",
    power: 338235855,
  },
  {
    server: 33109,
    family: "RedNarök",
    power: 231101256,
  },
  {
    server: 33109,
    family: "BloodyShroomie",
    power: 220926571,
  },
  {
    server: 33109,
    family: "Rubinrot",
    power: 206044611,
  },
  {
    server: 33109,
    family: "Kampftruppe",
    power: 202292545,
  },
  {
    server: 33109,
    family: "FrankenpowerTv",
    power: 190465074,
  },
  {
    server: 33109,
    family: "X_Phoenix_X",
    power: 173247862,
  },
  {
    server: 33109,
    family: "Anime",
    power: 168370507,
  },
  {
    server: 33110,
    family: "BlackTrüffels",
    power: 877399898,
  },
  {
    server: 33110,
    family: "Fruchtpilze",
    power: 811856479,
  },
  {
    server: 33110,
    family: "PilzchenBoyz",
    power: 428740004,
  },
  {
    server: 33110,
    family: "Palia",
    power: 265150815,
  },
  {
    server: 33110,
    family: "AKATSUKI",
    power: 193923254,
  },
  {
    server: 33110,
    family: "Ahjin_Guild",
    power: 185539567,
  },
  {
    server: 33110,
    family: "Blackhawks",
    power: 174145682,
  },
  {
    server: 33110,
    family: "DieGummibären",
    power: 167970558,
  },
  {
    server: 33110,
    family: "Träumer",
    power: 166458527,
  },
  {
    server: 33110,
    family: "7deadlySins",
    power: 164400911,
  },
  {
    server: 33111,
    family: "h2k",
    power: 817595311,
  },
  {
    server: 33111,
    family: "Narthex",
    power: 643466228,
  },
  {
    server: 33111,
    family: "FairyTail",
    power: 635659468,
  },
  {
    server: 33111,
    family: "GermanWarrior",
    power: 222475493,
  },
  {
    server: 33111,
    family: "Pilzköpfe",
    power: 188770106,
  },
  {
    server: 33111,
    family: "German",
    power: 178842089,
  },
  {
    server: 33111,
    family: "Honorificus",
    power: 171360257,
  },
  {
    server: 33111,
    family: "Musherport",
    power: 159619414,
  },
  {
    server: 33111,
    family: "Shadow",
    power: 158435725,
  },
  {
    server: 33111,
    family: "Legende",
    power: 150399669,
  },
  {
    server: 33112,
    family: "SoulSociety",
    power: 781530855,
  },
  {
    server: 33112,
    family: "No€NoClan",
    power: 721633918,
  },
  {
    server: 33112,
    family: "BierPiraten",
    power: 386281567,
  },
  {
    server: 33112,
    family: "EinhornLand",
    power: 207310468,
  },
  {
    server: 33112,
    family: "Pilzfreunde",
    power: 198128191,
  },
  {
    server: 33112,
    family: "D4RK",
    power: 196747274,
  },
  {
    server: 33112,
    family: "MagicMushroom",
    power: 158501353,
  },
  {
    server: 33112,
    family: "Wikings",
    power: 156946897,
  },
  {
    server: 33112,
    family: "DeWalhalla",
    power: 149096693,
  },
  {
    server: 33112,
    family: "DeutschesTeam",
    power: 148323865,
  },
  {
    server: 33113,
    family: "Gol_D_Mushroom",
    power: 627580106,
  },
  {
    server: 33113,
    family: "Pilzbude",
    power: 319852222,
  },
  {
    server: 33113,
    family: "Pilzköpfe",
    power: 294693886,
  },
  {
    server: 33113,
    family: "Pilztopia",
    power: 172325830,
  },
  {
    server: 33113,
    family: "RubbelLampen",
    power: 170823721,
  },
  {
    server: 33113,
    family: "Clubderpilze",
    power: 153132162,
  },
  {
    server: 33113,
    family: "Legends",
    power: 149392065,
  },
  {
    server: 33113,
    family: "GermanBude",
    power: 135723905,
  },
  {
    server: 33113,
    family: "Toadland",
    power: 121866070,
  },
  {
    server: 33113,
    family: "PilzSuppe",
    power: 109414823,
  },
  {
    server: 33114,
    family: "Noir",
    power: 712154616,
  },
  {
    server: 33114,
    family: "OG_Pilze",
    power: 579231904,
  },
  {
    server: 33114,
    family: "PilzSuppe",
    power: 350982799,
  },
  {
    server: 33114,
    family: "TeamDiff",
    power: 188418306,
  },
  {
    server: 33114,
    family: "Vennskap",
    power: 180359533,
  },
  {
    server: 33114,
    family: "7DeadlyHats",
    power: 159957921,
  },
  {
    server: 33114,
    family: "PilzStube",
    power: 143690234,
  },
  {
    server: 33114,
    family: "DieGestoerten",
    power: 143219249,
  },
  {
    server: 33114,
    family: "R33_Pilze",
    power: 120801721,
  },
  {
    server: 33114,
    family: "HalleSaale",
    power: 120555109,
  },
  {
    server: 33115,
    family: "D4RK",
    power: 652821736,
  },
  {
    server: 33115,
    family: "ü20",
    power: 530527770,
  },
  {
    server: 33115,
    family: "Germans",
    power: 486011506,
  },
  {
    server: 33115,
    family: "Nameless",
    power: 177286326,
  },
  {
    server: 33115,
    family: "ShadowGarden",
    power: 141161532,
  },
  {
    server: 33115,
    family: "Devotion",
    power: 128882380,
  },
  {
    server: 33115,
    family: "7DeadlySins",
    power: 123884385,
  },
  {
    server: 33115,
    family: "Gummibärchen",
    power: 114708565,
  },
  {
    server: 33115,
    family: "EgonsStammbaum",
    power: 110335663,
  },
  {
    server: 33115,
    family: "pilzclan",
    power: 105828865,
  },
  {
    server: 33116,
    family: "HxH",
    power: 557605993,
  },
  {
    server: 33116,
    family: "WeißerLotus",
    power: 512147625,
  },
  {
    server: 33116,
    family: "PilzBörse",
    power: 362278171,
  },
  {
    server: 33116,
    family: "DieSchlümpfe",
    power: 112827562,
  },
  {
    server: 33116,
    family: "DiePilze",
    power: 110004031,
  },
  {
    server: 33116,
    family: "DieChaoten",
    power: 90194643,
  },
  {
    server: 33116,
    family: "Endgegner",
    power: 85800186,
  },
  {
    server: 33116,
    family: "PilzTastisch",
    power: 85210225,
  },
  {
    server: 33116,
    family: "Mashroom_X",
    power: 81821076,
  },
  {
    server: 33116,
    family: "Pilztopia",
    power: 80704779,
  },
  {
    server: 33117,
    family: "Royals",
    power: 549062039,
  },
  {
    server: 33117,
    family: "Grimreaper",
    power: 514428710,
  },
  {
    server: 33117,
    family: "PilzSyndikat",
    power: 375035928,
  },
  {
    server: 33117,
    family: "TopShrooms",
    power: 123371947,
  },
  {
    server: 33117,
    family: "GermanGods",
    power: 96668294,
  },
  {
    server: 33117,
    family: "Legends",
    power: 96036931,
  },
  {
    server: 33117,
    family: "funforfree",
    power: 94176386,
  },
  {
    server: 33117,
    family: "LostSouls",
    power: 83711118,
  },
  {
    server: 33117,
    family: "DarkDemon",
    power: 75335214,
  },
  {
    server: 33117,
    family: "Mashroom_X",
    power: 74088901,
  },
  {
    server: 33118,
    family: "AllMighty",
    power: 541356307,
  },
  {
    server: 33118,
    family: "JustForFun",
    power: 469958482,
  },
  {
    server: 33118,
    family: "DevilsOfHell",
    power: 402770420,
  },
  {
    server: 33118,
    family: "SoulHunters",
    power: 105092761,
  },
  {
    server: 33118,
    family: "Wunderland",
    power: 102594585,
  },
  {
    server: 33118,
    family: "Game_Changer",
    power: 78494093,
  },
  {
    server: 33118,
    family: "Giftpilz",
    power: 78066271,
  },
  {
    server: 33118,
    family: "TheWarRoom",
    power: 71356514,
  },
  {
    server: 33118,
    family: "Akatzuki",
    power: 70845167,
  },
  {
    server: 33118,
    family: "ToxinEmpire",
    power: 65744830,
  },
  {
    server: 33119,
    family: "Imperium",
    power: 464399990,
  },
  {
    server: 33119,
    family: "UnderRadix",
    power: 461277946,
  },
  {
    server: 33119,
    family: "FaulPilze",
    power: 285811861,
  },
  {
    server: 33119,
    family: "TheFallenOnes",
    power: 84451869,
  },
  {
    server: 33119,
    family: "Shroomtopia",
    power: 79983170,
  },
  {
    server: 33119,
    family: "Misanthropen",
    power: 79828892,
  },
  {
    server: 33119,
    family: "Apexler",
    power: 79561613,
  },
  {
    server: 33119,
    family: "Valhalla",
    power: 78265247,
  },
  {
    server: 33119,
    family: "AnimeFans",
    power: 78150216,
  },
  {
    server: 33119,
    family: "PowerUp",
    power: 65297249,
  },
  {
    server: 33120,
    family: "Elysium",
    power: 385149270,
  },
  {
    server: 33120,
    family: "Anonymous",
    power: 158170663,
  },
  {
    server: 33120,
    family: "Serenity",
    power: 75405673,
  },
  {
    server: 33120,
    family: "GERMANFORCES",
    power: 0,
  },
  {
    server: 33120,
    family: "PoKéDeX",
    power: 0,
  },
  {
    server: 33120,
    family: "TeamCloud",
    power: 0,
  },
  {
    server: 33120,
    family: "JustforFun",
    power: 0,
  },
  {
    server: 33120,
    family: "Sturmreiter",
    power: 0,
  },
  {
    server: 33120,
    family: "DarkAngel",
    power: 0,
  },
  {
    server: 33120,
    family: "MushTrip",
    power: 0,
  },
  {
    server: 33121,
    family: "Astelic",
    power: 428928106,
  },
  {
    server: 33121,
    family: "TeamCloud",
    power: 172039218,
  },
  {
    server: 33121,
    family: "Haren_Army",
    power: 72795016,
  },
  {
    server: 33121,
    family: "Shadow",
    power: 0,
  },
  {
    server: 33121,
    family: "GhostREAPERS",
    power: 0,
  },
  {
    server: 33121,
    family: "Champions",
    power: 0,
  },
  {
    server: 33121,
    family: "Pioniere",
    power: 0,
  },
  {
    server: 33121,
    family: "uchihaClan",
    power: 0,
  },
  {
    server: 33121,
    family: "drei_freunde",
    power: 0,
  },
  {
    server: 33121,
    family: "Jakob2",
    power: 0,
  },
  {
    server: 36001,
    family: "All Star",
    power: 2280956140,
  },
  {
    server: 36001,
    family: "Kapitals",
    power: 1645456682,
  },
  {
    server: 36001,
    family: "Arcadia",
    power: 1619289413,
  },
  {
    server: 36001,
    family: "Neo Star",
    power: 1436211472,
  },
  {
    server: 36001,
    family: "Log_Horizon",
    power: 1357686086,
  },
  {
    server: 36001,
    family: "LaRoseDuTigre",
    power: 1234303992,
  },
  {
    server: 36001,
    family: "MagesRouges",
    power: 1098989985,
  },
  {
    server: 36001,
    family: "Wild_Star",
    power: 906241476,
  },
  {
    server: 36001,
    family: "Kapitals2",
    power: 898284881,
  },
  {
    server: 36001,
    family: "Baby_Stars",
    power: 840990580,
  },
  {
    server: 36002,
    family: "DragonsNoirs",
    power: 2031925287,
  },
  {
    server: 36002,
    family: "Ashes",
    power: 1611438705,
  },
  {
    server: 36002,
    family: "DragonsBleus",
    power: 1512160959,
  },
  {
    server: 36002,
    family: "DragonsRouges",
    power: 1305177534,
  },
  {
    server: 36002,
    family: "BlackTides",
    power: 1132337576,
  },
  {
    server: 36002,
    family: "FranceConnect",
    power: 781755422,
  },
  {
    server: 36002,
    family: "Infinity_Fr",
    power: 673642576,
  },
  {
    server: 36002,
    family: "DragonsBlanc",
    power: 512753393,
  },
  {
    server: 36002,
    family: "FRcorp",
    power: 487287809,
  },
  {
    server: 36002,
    family: "ETERNAL",
    power: 413081143,
  },
  {
    server: 36003,
    family: "MushroomTale",
    power: 1858374762,
  },
  {
    server: 36003,
    family: "L’Amanite",
    power: 1784706517,
  },
  {
    server: 36003,
    family: "NoName",
    power: 1578623717,
  },
  {
    server: 36003,
    family: "spartaFR",
    power: 1428936617,
  },
  {
    server: 36003,
    family: "Kaamelott",
    power: 580354529,
  },
  {
    server: 36003,
    family: "Naturia",
    power: 564609719,
  },
  {
    server: 36003,
    family: "Filtre2_0",
    power: 563556156,
  },
  {
    server: 36003,
    family: "LesNoobzzz",
    power: 531718293,
  },
  {
    server: 36003,
    family: "Warriors",
    power: 345503515,
  },
  {
    server: 36003,
    family: "ShadowGarden",
    power: 294574520,
  },
  {
    server: 36004,
    family: "OnTheTop",
    power: 1994938625,
  },
  {
    server: 36004,
    family: "TheLastHope",
    power: 1857254304,
  },
  {
    server: 36004,
    family: "Mugiwara",
    power: 1649603151,
  },
  {
    server: 36004,
    family: "ChampESport",
    power: 1420207469,
  },
  {
    server: 36004,
    family: "GuildeFR",
    power: 1075296379,
  },
  {
    server: 36004,
    family: "TryhardFr",
    power: 726271685,
  },
  {
    server: 36004,
    family: "Cringeland",
    power: 354532478,
  },
  {
    server: 36004,
    family: "GOATfr",
    power: 305134011,
  },
  {
    server: 36004,
    family: "legendaryFR",
    power: 285158119,
  },
  {
    server: 36004,
    family: "18etplus",
    power: 270693650,
  },
  {
    server: 36005,
    family: "LesSchtroumpfs",
    power: 1965282080,
  },
  {
    server: 36005,
    family: "꧁Arkana꧂",
    power: 1699306578,
  },
  {
    server: 36005,
    family: "LastLegend",
    power: 1470582646,
  },
  {
    server: 36005,
    family: "Yggdrasil",
    power: 1156866566,
  },
  {
    server: 36005,
    family: "LesTrolls",
    power: 793086245,
  },
  {
    server: 36005,
    family: "LesSchtroumpf3",
    power: 520437776,
  },
  {
    server: 36005,
    family: "Nymphéa",
    power: 502956978,
  },
  {
    server: 36005,
    family: "Dragoon",
    power: 361911873,
  },
  {
    server: 36005,
    family: "Apocalypse",
    power: 348242344,
  },
  {
    server: 36005,
    family: "frenchclan",
    power: 315129352,
  },
  {
    server: 36006,
    family: "FRANCE",
    power: 1788513654,
  },
  {
    server: 36006,
    family: "Avalanche",
    power: 1763477799,
  },
  {
    server: 36006,
    family: "TeamPanda44",
    power: 1100735677,
  },
  {
    server: 36006,
    family: "Apocalypse",
    power: 980366174,
  },
  {
    server: 36006,
    family: "fc_copain",
    power: 888978112,
  },
  {
    server: 36006,
    family: "champiland",
    power: 475256829,
  },
  {
    server: 36006,
    family: "FrenchCore",
    power: 471399952,
  },
  {
    server: 36006,
    family: "ChampiAtomique",
    power: 342148884,
  },
  {
    server: 36006,
    family: "One_Piece",
    power: 281868660,
  },
  {
    server: 36006,
    family: "Izanami",
    power: 279305682,
  },
  {
    server: 36007,
    family: "UmbrellaCorps",
    power: 1790864170,
  },
  {
    server: 36007,
    family: "Moonlight",
    power: 1727895162,
  },
  {
    server: 36007,
    family: "Immortal",
    power: 1235096742,
  },
  {
    server: 36007,
    family: "Supremacy",
    power: 900983257,
  },
  {
    server: 36007,
    family: "LesGros",
    power: 636154646,
  },
  {
    server: 36007,
    family: "France",
    power: 543188138,
  },
  {
    server: 36007,
    family: "Frenchill",
    power: 398837472,
  },
  {
    server: 36007,
    family: "Frenchmushroom",
    power: 336676128,
  },
  {
    server: 36007,
    family: "1Grain2Sable",
    power: 314978463,
  },
  {
    server: 36007,
    family: "champiforce",
    power: 309242962,
  },
  {
    server: 36008,
    family: "Renaissance",
    power: 1606236889,
  },
  {
    server: 36008,
    family: "Kaamelott",
    power: 1424138727,
  },
  {
    server: 36008,
    family: "Casanostra",
    power: 1420518188,
  },
  {
    server: 36008,
    family: "Legandary",
    power: 1247361724,
  },
  {
    server: 36008,
    family: "French",
    power: 552385512,
  },
  {
    server: 36008,
    family: "France",
    power: 461455263,
  },
  {
    server: 36008,
    family: "MUGIWARAS",
    power: 358484460,
  },
  {
    server: 36008,
    family: "TeamGamer",
    power: 333423493,
  },
  {
    server: 36008,
    family: "InspiDuSoir",
    power: 318158809,
  },
  {
    server: 36008,
    family: "VogueMerry",
    power: 298110355,
  },
  {
    server: 36009,
    family: "Mycélium",
    power: 1713725423,
  },
  {
    server: 36009,
    family: "Shadow",
    power: 1637650532,
  },
  {
    server: 36009,
    family: "ÉcarlateFR",
    power: 941986754,
  },
  {
    server: 36009,
    family: "MushiStorm",
    power: 606381345,
  },
  {
    server: 36009,
    family: "LBG",
    power: 413707304,
  },
  {
    server: 36009,
    family: "DéterrésAuRhum",
    power: 396285934,
  },
  {
    server: 36009,
    family: "FairyTail",
    power: 339832001,
  },
  {
    server: 36009,
    family: "SUN",
    power: 313926740,
  },
  {
    server: 36009,
    family: "YouTubeFR",
    power: 268753488,
  },
  {
    server: 36009,
    family: "Cerberus",
    power: 227456038,
  },
  {
    server: 36010,
    family: "FR10",
    power: 1690025098,
  },
  {
    server: 36010,
    family: "Sixtoy",
    power: 1551955942,
  },
  {
    server: 36010,
    family: "FrenchEmpire",
    power: 1323029001,
  },
  {
    server: 36010,
    family: "Toad",
    power: 1172018098,
  },
  {
    server: 36010,
    family: "TamurilFamily",
    power: 966728469,
  },
  {
    server: 36010,
    family: "MushFriends",
    power: 679763367,
  },
  {
    server: 36010,
    family: "BlueMoon",
    power: 311973357,
  },
  {
    server: 36010,
    family: "Akuma",
    power: 301914039,
  },
  {
    server: 36010,
    family: "France",
    power: 264666190,
  },
  {
    server: 36010,
    family: "PGDcorporation",
    power: 191366417,
  },
  {
    server: 36011,
    family: "P2W",
    power: 1751454765,
  },
  {
    server: 36011,
    family: "COSANOSTRA",
    power: 1482631504,
  },
  {
    server: 36011,
    family: "BelleFrance",
    power: 1064451900,
  },
  {
    server: 36011,
    family: "French_Touch",
    power: 658227507,
  },
  {
    server: 36011,
    family: "F2P",
    power: 546750065,
  },
  {
    server: 36011,
    family: "La_Beuverie_Fr",
    power: 379859547,
  },
  {
    server: 36011,
    family: "Champ",
    power: 343070865,
  },
  {
    server: 36011,
    family: "Nova",
    power: 276790036,
  },
  {
    server: 36011,
    family: "Le_Champignar",
    power: 212715230,
  },
  {
    server: 36011,
    family: "la_baguette_fr",
    power: 209130469,
  },
  {
    server: 36012,
    family: "Kaamelott",
    power: 1679364251,
  },
  {
    server: 36012,
    family: "FlanUfhiwa",
    power: 1569706761,
  },
  {
    server: 36012,
    family: "Tempest",
    power: 814049337,
  },
  {
    server: 36012,
    family: "ChampiTeam_FR",
    power: 439722834,
  },
  {
    server: 36012,
    family: "ChampiFR",
    power: 338770000,
  },
  {
    server: 36012,
    family: "Mushroom_fr",
    power: 314806287,
  },
  {
    server: 36012,
    family: "noname",
    power: 294115113,
  },
  {
    server: 36012,
    family: "Vrac",
    power: 231044201,
  },
  {
    server: 36012,
    family: "FR_WOLF",
    power: 217954344,
  },
  {
    server: 36012,
    family: "Fishe",
    power: 216604953,
  },
  {
    server: 36013,
    family: "MushroomLvLUP",
    power: 1780851700,
  },
  {
    server: 36013,
    family: "Champipoulpes",
    power: 1217992810,
  },
  {
    server: 36013,
    family: "Raouuuh🦖",
    power: 955721239,
  },
  {
    server: 36013,
    family: "RoisDuChaos",
    power: 427843948,
  },
  {
    server: 36013,
    family: "France",
    power: 418628334,
  },
  {
    server: 36013,
    family: "BDsClan",
    power: 405623181,
  },
  {
    server: 36013,
    family: "MushVoid",
    power: 326949162,
  },
  {
    server: 36013,
    family: "Lune",
    power: 265949262,
  },
  {
    server: 36013,
    family: "Devilcats",
    power: 247734024,
  },
  {
    server: 36013,
    family: "Avalon",
    power: 228303196,
  },
  {
    server: 36014,
    family: "EgocentriK",
    power: 1793518123,
  },
  {
    server: 36014,
    family: "Les_Français",
    power: 1212069931,
  },
  {
    server: 36014,
    family: "EgocentriK2",
    power: 1031354034,
  },
  {
    server: 36014,
    family: "Sweetkorn",
    power: 690744916,
  },
  {
    server: 36014,
    family: "WolfGarden",
    power: 429281603,
  },
  {
    server: 36014,
    family: "FrenchChampi",
    power: 393645468,
  },
  {
    server: 36014,
    family: "Trentenaires",
    power: 331841971,
  },
  {
    server: 36014,
    family: "ChampiChampoFR",
    power: 242578545,
  },
  {
    server: 36014,
    family: "TheShadow",
    power: 211989640,
  },
  {
    server: 36014,
    family: "Akatsuki",
    power: 160057528,
  },
  {
    server: 36015,
    family: "Exiled",
    power: 1879559400,
  },
  {
    server: 36015,
    family: "MyChampiTeam",
    power: 1099594803,
  },
  {
    server: 36015,
    family: "ExiledX",
    power: 1054429882,
  },
  {
    server: 36015,
    family: "MushWarriors",
    power: 395777277,
  },
  {
    server: 36015,
    family: "TOADCLANS",
    power: 391505525,
  },
  {
    server: 36015,
    family: "onizuguilde",
    power: 285451349,
  },
  {
    server: 36015,
    family: "franchmonster",
    power: 273237314,
  },
  {
    server: 36015,
    family: "Sinystra",
    power: 268483633,
  },
  {
    server: 36015,
    family: "TeamToadFR",
    power: 226109098,
  },
  {
    server: 36015,
    family: "LesMirons",
    power: 217522221,
  },
  {
    server: 36016,
    family: "ChallenGer",
    power: 1617470867,
  },
  {
    server: 36016,
    family: "UCHIWA",
    power: 1291183205,
  },
  {
    server: 36016,
    family: "ChampiFrench",
    power: 1202153594,
  },
  {
    server: 36016,
    family: "FRx468",
    power: 798884748,
  },
  {
    server: 36016,
    family: "france",
    power: 371498516,
  },
  {
    server: 36016,
    family: "FrenchArmy",
    power: 365555539,
  },
  {
    server: 36016,
    family: "Champiclub",
    power: 308836140,
  },
  {
    server: 36016,
    family: "BaseDesNeuille",
    power: 308465950,
  },
  {
    server: 36016,
    family: "chamchampi",
    power: 290403961,
  },
  {
    server: 36016,
    family: "GenesisFr",
    power: 248519303,
  },
  {
    server: 36017,
    family: "Divinity",
    power: 1673784417,
  },
  {
    server: 36017,
    family: "Champions",
    power: 1517357090,
  },
  {
    server: 36017,
    family: "Mushroom_Army",
    power: 920022285,
  },
  {
    server: 36017,
    family: "Leveling",
    power: 521421925,
  },
  {
    server: 36017,
    family: "FR_DIVISION",
    power: 507517245,
  },
  {
    server: 36017,
    family: "FR_Oxygen",
    power: 468332107,
  },
  {
    server: 36017,
    family: "Les_Champis",
    power: 400864725,
  },
  {
    server: 36017,
    family: "Frenchies",
    power: 379464343,
  },
  {
    server: 36017,
    family: "dinguos",
    power: 318894915,
  },
  {
    server: 36017,
    family: "LMNTRIX",
    power: 250120442,
  },
  {
    server: 36018,
    family: "AiRaliUm",
    power: 1643021445,
  },
  {
    server: 36018,
    family: "Spirit",
    power: 1409405666,
  },
  {
    server: 36018,
    family: "Kinoko",
    power: 954681721,
  },
  {
    server: 36018,
    family: "Baguette",
    power: 579456498,
  },
  {
    server: 36018,
    family: "CLAN_FR_TOP1",
    power: 418453802,
  },
  {
    server: 36018,
    family: "Akasaki",
    power: 416188598,
  },
  {
    server: 36018,
    family: "Akatsuki",
    power: 362600561,
  },
  {
    server: 36018,
    family: "Royal",
    power: 344249282,
  },
  {
    server: 36018,
    family: "Mugiwaras",
    power: 339886859,
  },
  {
    server: 36018,
    family: "frenchMonkey",
    power: 329406433,
  },
  {
    server: 36019,
    family: "Moonlight",
    power: 1758047545,
  },
  {
    server: 36019,
    family: "AKATSUKI",
    power: 1654402830,
  },
  {
    server: 36019,
    family: "LaCrypte",
    power: 1371967737,
  },
  {
    server: 36019,
    family: "Champa",
    power: 772609942,
  },
  {
    server: 36019,
    family: "LaCrème",
    power: 334624715,
  },
  {
    server: 36019,
    family: "FranceElite",
    power: 256450954,
  },
  {
    server: 36019,
    family: "Psyl●",
    power: 247908466,
  },
  {
    server: 36019,
    family: "French_ActiMel",
    power: 240235236,
  },
  {
    server: 36019,
    family: "Asuna",
    power: 230192377,
  },
  {
    server: 36019,
    family: "Kaizokudan",
    power: 168942973,
  },
  {
    server: 36020,
    family: "FranceOmega",
    power: 1537956756,
  },
  {
    server: 36020,
    family: "Akatsuki",
    power: 1525557788,
  },
  {
    server: 36020,
    family: "Ehpad",
    power: 1150854077,
  },
  {
    server: 36020,
    family: "LesMycoses",
    power: 1004780232,
  },
  {
    server: 36020,
    family: "LesMenaces",
    power: 569035216,
  },
  {
    server: 36020,
    family: "LaTaverne",
    power: 263222848,
  },
  {
    server: 36020,
    family: "金",
    power: 200189631,
  },
  {
    server: 36020,
    family: "LesEnragés",
    power: 189406994,
  },
  {
    server: 36020,
    family: "bjrlesgens",
    power: 162499421,
  },
  {
    server: 36020,
    family: "Clanmasquer",
    power: 149978483,
  },
  {
    server: 36021,
    family: "LesFongicides",
    power: 1696606455,
  },
  {
    server: 36021,
    family: "Conquérants",
    power: 1545815111,
  },
  {
    server: 36021,
    family: "Royal",
    power: 1307704678,
  },
  {
    server: 36021,
    family: "KCORP",
    power: 471690150,
  },
  {
    server: 36021,
    family: "France",
    power: 379958006,
  },
  {
    server: 36021,
    family: "shadow",
    power: 361949631,
  },
  {
    server: 36021,
    family: "TeamFrance",
    power: 283897762,
  },
  {
    server: 36021,
    family: "GodlyMushroom",
    power: 266667040,
  },
  {
    server: 36021,
    family: "lesbelge",
    power: 256947490,
  },
  {
    server: 36021,
    family: "ChampiGang",
    power: 180823446,
  },
  {
    server: 36022,
    family: "SonOfMushroom",
    power: 1700213725,
  },
  {
    server: 36022,
    family: "Lotus",
    power: 1353702274,
  },
  {
    server: 36022,
    family: "Nevrosia",
    power: 1159723938,
  },
  {
    server: 36022,
    family: "MushBreaker",
    power: 764470331,
  },
  {
    server: 36022,
    family: "Champinoir",
    power: 300823807,
  },
  {
    server: 36022,
    family: "vivelaFrance",
    power: 291959317,
  },
  {
    server: 36022,
    family: "AntiRatz",
    power: 245139107,
  },
  {
    server: 36022,
    family: "Petitmushroom",
    power: 224871703,
  },
  {
    server: 36022,
    family: "musherfucker",
    power: 146425689,
  },
  {
    server: 36022,
    family: "Champignon2fou",
    power: 120788596,
  },
  {
    server: 36023,
    family: "Renaissance",
    power: 1546185618,
  },
  {
    server: 36023,
    family: "Hera",
    power: 1473038540,
  },
  {
    server: 36023,
    family: "Frenchriviera",
    power: 747181030,
  },
  {
    server: 36023,
    family: "LesAlcoolHic",
    power: 398977801,
  },
  {
    server: 36023,
    family: "Asgard",
    power: 228715771,
  },
  {
    server: 36023,
    family: "Rengoku",
    power: 220764811,
  },
  {
    server: 36023,
    family: "PeakyBlinders",
    power: 209859927,
  },
  {
    server: 36023,
    family: "Croustillants",
    power: 209294213,
  },
  {
    server: 36023,
    family: "Arcadia",
    power: 206148649,
  },
  {
    server: 36023,
    family: "soiréepizza",
    power: 197422499,
  },
  {
    server: 36024,
    family: "TEMPESTO",
    power: 1515942569,
  },
  {
    server: 36024,
    family: "GénérationY",
    power: 1504289189,
  },
  {
    server: 36024,
    family: "UNDERWORLD",
    power: 1189959803,
  },
  {
    server: 36024,
    family: "France2",
    power: 355138878,
  },
  {
    server: 36024,
    family: "freedom",
    power: 340538160,
  },
  {
    server: 36024,
    family: "fairytail",
    power: 311258549,
  },
  {
    server: 36024,
    family: "Baguette",
    power: 249841887,
  },
  {
    server: 36024,
    family: "Tcorp",
    power: 180727202,
  },
  {
    server: 36024,
    family: "DeadMan",
    power: 157261864,
  },
  {
    server: 36024,
    family: "ChampiGardiens",
    power: 144452832,
  },
  {
    server: 36025,
    family: "Shujin",
    power: 1647636632,
  },
  {
    server: 36025,
    family: "FR1",
    power: 1607688635,
  },
  {
    server: 36025,
    family: "CANARD",
    power: 733464696,
  },
  {
    server: 36025,
    family: "ZinZinks",
    power: 561575259,
  },
  {
    server: 36025,
    family: "FR3",
    power: 346481866,
  },
  {
    server: 36025,
    family: "Zatral",
    power: 328563034,
  },
  {
    server: 36025,
    family: "phoenixfr",
    power: 314847114,
  },
  {
    server: 36025,
    family: "deglingo85",
    power: 260962364,
  },
  {
    server: 36025,
    family: "GloireaFR1",
    power: 214819027,
  },
  {
    server: 36025,
    family: "LafactionBZH",
    power: 213117618,
  },
  {
    server: 36026,
    family: "Universal",
    power: 1625918485,
  },
  {
    server: 36026,
    family: "Legendary",
    power: 1395965326,
  },
  {
    server: 36026,
    family: "MithrandirFR",
    power: 1145844949,
  },
  {
    server: 36026,
    family: "Phantasy",
    power: 405295718,
  },
  {
    server: 36026,
    family: "FireFR",
    power: 379253947,
  },
  {
    server: 36026,
    family: "LeRoyaume",
    power: 337512486,
  },
  {
    server: 36026,
    family: "Léviathan",
    power: 280054121,
  },
  {
    server: 36026,
    family: "Trinity",
    power: 253591038,
  },
  {
    server: 36026,
    family: "FrenchLigue",
    power: 251182578,
  },
  {
    server: 36026,
    family: "TheFrenchArmy",
    power: 224366489,
  },
  {
    server: 36027,
    family: "Eudaimonia",
    power: 1633897796,
  },
  {
    server: 36027,
    family: "Antisocial",
    power: 1441281343,
  },
  {
    server: 36027,
    family: "Aeternum",
    power: 545528702,
  },
  {
    server: 36027,
    family: "Les_Goats",
    power: 260786031,
  },
  {
    server: 36027,
    family: "Voff_FR",
    power: 242860357,
  },
  {
    server: 36027,
    family: "TheFrenchGuild",
    power: 229563085,
  },
  {
    server: 36027,
    family: "Clan_Chill_FR",
    power: 226226354,
  },
  {
    server: 36027,
    family: "leclanfr",
    power: 215354027,
  },
  {
    server: 36027,
    family: "ClanDesVieux30",
    power: 212159809,
  },
  {
    server: 36027,
    family: "french_legions",
    power: 211152884,
  },
  {
    server: 36028,
    family: "DOLA",
    power: 1450857030,
  },
  {
    server: 36028,
    family: "FrenchPower",
    power: 1338729057,
  },
  {
    server: 36028,
    family: "Rt_France",
    power: 539156303,
  },
  {
    server: 36028,
    family: "Les_Gameurs",
    power: 389585676,
  },
  {
    server: 36028,
    family: "first",
    power: 375946539,
  },
  {
    server: 36028,
    family: "RoyalMushroom",
    power: 347213905,
  },
  {
    server: 36028,
    family: "Goldenteache",
    power: 343855182,
  },
  {
    server: 36028,
    family: "champignons",
    power: 307572960,
  },
  {
    server: 36028,
    family: "Fr",
    power: 254446347,
  },
  {
    server: 36028,
    family: "Francewarrior",
    power: 216759285,
  },
  {
    server: 36029,
    family: "Legionary",
    power: 1747352379,
  },
  {
    server: 36029,
    family: "LaRenDesChoux",
    power: 1354712654,
  },
  {
    server: 36029,
    family: "Champignons",
    power: 452835370,
  },
  {
    server: 36029,
    family: "Wonkru",
    power: 380734258,
  },
  {
    server: 36029,
    family: "CocoJojo🤠",
    power: 301299322,
  },
  {
    server: 36029,
    family: "Prout’Land",
    power: 235039887,
  },
  {
    server: 36029,
    family: "French",
    power: 210972045,
  },
  {
    server: 36029,
    family: "Ydra",
    power: 206492291,
  },
  {
    server: 36029,
    family: "KAAMELOTT",
    power: 174360863,
  },
  {
    server: 36029,
    family: "vraisFR",
    power: 172553722,
  },
  {
    server: 36030,
    family: "TeaParty",
    power: 1784573195,
  },
  {
    server: 36030,
    family: "Mortuim",
    power: 1380901240,
  },
  {
    server: 36030,
    family: "OKLM",
    power: 699851362,
  },
  {
    server: 36030,
    family: "FRANCE",
    power: 452893841,
  },
  {
    server: 36030,
    family: "DarksideFR",
    power: 279753274,
  },
  {
    server: 36030,
    family: "Byakugan",
    power: 269625581,
  },
  {
    server: 36030,
    family: "LapinHood",
    power: 250207851,
  },
  {
    server: 36030,
    family: "BaguetteArmy",
    power: 244913263,
  },
  {
    server: 36030,
    family: "morty",
    power: 186375231,
  },
  {
    server: 36030,
    family: "uwu",
    power: 166643022,
  },
  {
    server: 36031,
    family: "𝖊𝖙𝖊𝖗𝖓𝖆𝖑",
    power: 1735292551,
  },
  {
    server: 36031,
    family: "Les_Français",
    power: 936420313,
  },
  {
    server: 36031,
    family: "LaGrotte",
    power: 629119634,
  },
  {
    server: 36031,
    family: "ᴠᴀʟʜᴀʟʟᴀ",
    power: 584427872,
  },
  {
    server: 36031,
    family: "GODLIKE",
    power: 443496074,
  },
  {
    server: 36031,
    family: "Aube",
    power: 295957444,
  },
  {
    server: 36031,
    family: "France",
    power: 273500004,
  },
  {
    server: 36031,
    family: "tempest",
    power: 272584680,
  },
  {
    server: 36031,
    family: "Runecelte",
    power: 180803995,
  },
  {
    server: 36031,
    family: "bistouquette",
    power: 142870910,
  },
  {
    server: 36032,
    family: "TheFirst",
    power: 1595235552,
  },
  {
    server: 36032,
    family: "๛LesMushs𓆃",
    power: 1395775176,
  },
  {
    server: 36032,
    family: "NewHope",
    power: 812471699,
  },
  {
    server: 36032,
    family: "ToadFr",
    power: 389368691,
  },
  {
    server: 36032,
    family: "Lesphœnixnoirs",
    power: 303570208,
  },
  {
    server: 36032,
    family: "ignominie",
    power: 244767417,
  },
  {
    server: 36032,
    family: "L’EMPIRE",
    power: 232998431,
  },
  {
    server: 36032,
    family: "FunGuy",
    power: 161910298,
  },
  {
    server: 36032,
    family: "FairyTail",
    power: 161771280,
  },
  {
    server: 36032,
    family: "Carpe_Diem",
    power: 130120005,
  },
  {
    server: 36033,
    family: "NightRaid",
    power: 1663858121,
  },
  {
    server: 36033,
    family: "TeamChampote",
    power: 1266362337,
  },
  {
    server: 36033,
    family: "MushroomFR",
    power: 753667160,
  },
  {
    server: 36033,
    family: "ClanDeGrand",
    power: 437606035,
  },
  {
    server: 36033,
    family: "FrenchOnly",
    power: 328631350,
  },
  {
    server: 36033,
    family: "FallenAngels",
    power: 308849884,
  },
  {
    server: 36033,
    family: "LesZigotos",
    power: 243839513,
  },
  {
    server: 36033,
    family: "tsuku",
    power: 217003368,
  },
  {
    server: 36033,
    family: "frenchpredator",
    power: 191859830,
  },
  {
    server: 36033,
    family: "champignon",
    power: 187485371,
  },
  {
    server: 36034,
    family: "Kamuî",
    power: 1578276541,
  },
  {
    server: 36034,
    family: "Fungi",
    power: 1577889846,
  },
  {
    server: 36034,
    family: "Mushriors",
    power: 1267080790,
  },
  {
    server: 36034,
    family: "FTC_FR",
    power: 479928247,
  },
  {
    server: 36034,
    family: "ELITE",
    power: 475433273,
  },
  {
    server: 36034,
    family: "Tartare",
    power: 368421148,
  },
  {
    server: 36034,
    family: "LaToadFamily",
    power: 367242133,
  },
  {
    server: 36034,
    family: "CallOfChampi",
    power: 360554022,
  },
  {
    server: 36034,
    family: "Atena",
    power: 295011254,
  },
  {
    server: 36034,
    family: "LesChampis",
    power: 250782122,
  },
  {
    server: 36035,
    family: "Amnesya",
    power: 1722462409,
  },
  {
    server: 36035,
    family: "Dynastie",
    power: 1108079181,
  },
  {
    server: 36035,
    family: "Obscure",
    power: 984902672,
  },
  {
    server: 36035,
    family: "ProjectSquad",
    power: 733070361,
  },
  {
    server: 36035,
    family: "Akatsuki",
    power: 528489210,
  },
  {
    server: 36035,
    family: "LaSaintePizza",
    power: 405730084,
  },
  {
    server: 36035,
    family: "LeChalet",
    power: 375919245,
  },
  {
    server: 36035,
    family: "shroomjustice",
    power: 317035168,
  },
  {
    server: 36035,
    family: "Unlimited",
    power: 187576779,
  },
  {
    server: 36035,
    family: "MCHD",
    power: 178145419,
  },
  {
    server: 36036,
    family: "LightInHole",
    power: 1489098686,
  },
  {
    server: 36036,
    family: "France",
    power: 1278662069,
  },
  {
    server: 36036,
    family: "rip",
    power: 807457949,
  },
  {
    server: 36036,
    family: "Kaamelott",
    power: 408953952,
  },
  {
    server: 36036,
    family: "Petites_fleurs",
    power: 380399807,
  },
  {
    server: 36036,
    family: "jeux_cool",
    power: 306350524,
  },
  {
    server: 36036,
    family: "OverDiablo",
    power: 298347324,
  },
  {
    server: 36036,
    family: "Shadow",
    power: 268002990,
  },
  {
    server: 36036,
    family: "FrenchTeam",
    power: 232032629,
  },
  {
    server: 36036,
    family: "DarkShadow",
    power: 228514917,
  },
  {
    server: 36037,
    family: "HallOfLegends",
    power: 2010610715,
  },
  {
    server: 36037,
    family: "PiratesDeMars",
    power: 1999285218,
  },
  {
    server: 36037,
    family: "PiratesDeMars2",
    power: 1783131717,
  },
  {
    server: 36037,
    family: "BlueMoon",
    power: 1385795131,
  },
  {
    server: 36037,
    family: "HallOfLegends2",
    power: 1373866302,
  },
  {
    server: 36037,
    family: "PiratesDeMars4",
    power: 1342922506,
  },
  {
    server: 36037,
    family: "FckPDM",
    power: 1220685440,
  },
  {
    server: 36037,
    family: "animeteam",
    power: 1069406650,
  },
  {
    server: 36037,
    family: "PiratesDeMars7",
    power: 704957048,
  },
  {
    server: 36037,
    family: "PiratesDeMars8",
    power: 556166467,
  },
  {
    server: 36038,
    family: "Empire",
    power: 1719079544,
  },
  {
    server: 36038,
    family: "Hydra",
    power: 1295929333,
  },
  {
    server: 36038,
    family: "chillax",
    power: 658542283,
  },
  {
    server: 36038,
    family: "Frenchcore",
    power: 324922596,
  },
  {
    server: 36038,
    family: "Tchamp",
    power: 280055895,
  },
  {
    server: 36038,
    family: "_Shadow_",
    power: 212670218,
  },
  {
    server: 36038,
    family: "Sunridas",
    power: 206794009,
  },
  {
    server: 36038,
    family: "PTDQ",
    power: 190084603,
  },
  {
    server: 36038,
    family: "Toad",
    power: 156537235,
  },
  {
    server: 36038,
    family: "LesSuperDingos",
    power: 145255546,
  },
  {
    server: 36039,
    family: "FORESTIA",
    power: 1650149536,
  },
  {
    server: 36039,
    family: "Champiland",
    power: 1286069033,
  },
  {
    server: 36039,
    family: "STSO",
    power: 1277116972,
  },
  {
    server: 36039,
    family: "PARCIMONIA",
    power: 808893492,
  },
  {
    server: 36039,
    family: "AngeDéchu",
    power: 351422343,
  },
  {
    server: 36039,
    family: "L’oroJackson",
    power: 242266578,
  },
  {
    server: 36039,
    family: "Project",
    power: 202492825,
  },
  {
    server: 36039,
    family: "YugiTeam",
    power: 193154432,
  },
  {
    server: 36039,
    family: "TaNCteam",
    power: 155773180,
  },
  {
    server: 36039,
    family: "MIAMIAM",
    power: 149239187,
  },
  {
    server: 36040,
    family: "TxB",
    power: 1704809005,
  },
  {
    server: 36040,
    family: "SoulLessSpirit",
    power: 1235864215,
  },
  {
    server: 36040,
    family: "HADES",
    power: 979636073,
  },
  {
    server: 36040,
    family: "JambonBeurre",
    power: 535997067,
  },
  {
    server: 36040,
    family: "Zeus",
    power: 303159559,
  },
  {
    server: 36040,
    family: "Beescuiterie",
    power: 278729512,
  },
  {
    server: 36040,
    family: "Omega",
    power: 236676347,
  },
  {
    server: 36040,
    family: "SoloLeveling",
    power: 207173324,
  },
  {
    server: 36040,
    family: "ABYSS",
    power: 183657648,
  },
  {
    server: 36040,
    family: "zeubi",
    power: 178876340,
  },
  {
    server: 36041,
    family: "Némésis",
    power: 1764514222,
  },
  {
    server: 36041,
    family: "NémésisCorp",
    power: 1425569536,
  },
  {
    server: 36041,
    family: "NeverGiveUp",
    power: 1214401170,
  },
  {
    server: 36041,
    family: "NeverGiveUp3",
    power: 554333960,
  },
  {
    server: 36041,
    family: "Phénix",
    power: 511892380,
  },
  {
    server: 36041,
    family: "Horizon",
    power: 464466742,
  },
  {
    server: 36041,
    family: "NeverGiveUp2",
    power: 406362993,
  },
  {
    server: 36041,
    family: "FR",
    power: 310329550,
  },
  {
    server: 36041,
    family: "pupuce",
    power: 262430701,
  },
  {
    server: 36041,
    family: "LesFrançais",
    power: 234897775,
  },
  {
    server: 36042,
    family: "Reaper",
    power: 1756745664,
  },
  {
    server: 36042,
    family: "Pokéflex",
    power: 1616847699,
  },
  {
    server: 36042,
    family: "Cendawan",
    power: 1254598114,
  },
  {
    server: 36042,
    family: "Winterfell",
    power: 512501560,
  },
  {
    server: 36042,
    family: "THANATOS",
    power: 381193778,
  },
  {
    server: 36042,
    family: "Saturne",
    power: 351996353,
  },
  {
    server: 36042,
    family: "phoenixfr",
    power: 306837715,
  },
  {
    server: 36042,
    family: "premierfr",
    power: 294756588,
  },
  {
    server: 36042,
    family: "Ūtopia",
    power: 238577660,
  },
  {
    server: 36042,
    family: "Kaamelott",
    power: 191977476,
  },
  {
    server: 36043,
    family: "Olympe",
    power: 1707471581,
  },
  {
    server: 36043,
    family: "Nebula",
    power: 1561080367,
  },
  {
    server: 36043,
    family: "ToadArmy",
    power: 1042518070,
  },
  {
    server: 36043,
    family: "BadGones",
    power: 385184053,
  },
  {
    server: 36043,
    family: "FlopSquad",
    power: 384488377,
  },
  {
    server: 36043,
    family: "GuezTapo",
    power: 366344900,
  },
  {
    server: 36043,
    family: "ChampiGnons",
    power: 270121045,
  },
  {
    server: 36043,
    family: "Poppybouh",
    power: 234971200,
  },
  {
    server: 36043,
    family: "Champidolf",
    power: 229504899,
  },
  {
    server: 36043,
    family: "DarckFox",
    power: 211074035,
  },
  {
    server: 36044,
    family: "Chimera",
    power: 1714004566,
  },
  {
    server: 36044,
    family: "TakeDown",
    power: 1552922040,
  },
  {
    server: 36044,
    family: "InSomnia",
    power: 625900084,
  },
  {
    server: 36044,
    family: "Dragonniers",
    power: 426266061,
  },
  {
    server: 36044,
    family: "Ephedia",
    power: 422434951,
  },
  {
    server: 36044,
    family: "FRANCE",
    power: 373277374,
  },
  {
    server: 36044,
    family: "Valhalla",
    power: 363270818,
  },
  {
    server: 36044,
    family: "Anonymous",
    power: 355038187,
  },
  {
    server: 36044,
    family: "Noopy",
    power: 335471844,
  },
  {
    server: 36044,
    family: "TopFr",
    power: 284407719,
  },
  {
    server: 36045,
    family: "Midgard",
    power: 1680539907,
  },
  {
    server: 36045,
    family: "TheEbonyBlade",
    power: 734039416,
  },
  {
    server: 36045,
    family: "La_Pizzeria",
    power: 502061685,
  },
  {
    server: 36045,
    family: "crocclanfr",
    power: 419634628,
  },
  {
    server: 36045,
    family: "Shadow",
    power: 328394921,
  },
  {
    server: 36045,
    family: "Champenois",
    power: 299340489,
  },
  {
    server: 36045,
    family: "Olympe",
    power: 296905305,
  },
  {
    server: 36045,
    family: "HeavenQuest",
    power: 260620110,
  },
  {
    server: 36045,
    family: "Osiris",
    power: 246509860,
  },
  {
    server: 36045,
    family: "LesMenaces",
    power: 219604634,
  },
  {
    server: 36046,
    family: "Nuit",
    power: 1746612314,
  },
  {
    server: 36046,
    family: "The_Legends",
    power: 1379613820,
  },
  {
    server: 36046,
    family: "FRANCE_TRYHARD",
    power: 799046947,
  },
  {
    server: 36046,
    family: "Valhalla",
    power: 410613024,
  },
  {
    server: 36046,
    family: "DESTINY",
    power: 358801511,
  },
  {
    server: 36046,
    family: "xXrevoXx",
    power: 314829045,
  },
  {
    server: 36046,
    family: "ChampiMeuh",
    power: 274954710,
  },
  {
    server: 36046,
    family: "Akatsuki",
    power: 267698465,
  },
  {
    server: 36046,
    family: "Les42Licornes",
    power: 267441488,
  },
  {
    server: 36046,
    family: "FR",
    power: 267380819,
  },
  {
    server: 36047,
    family: "Akezya",
    power: 1694401979,
  },
  {
    server: 36047,
    family: "PateAPops",
    power: 1606056270,
  },
  {
    server: 36047,
    family: "ChampiFrance",
    power: 1485144851,
  },
  {
    server: 36047,
    family: "L’Akatsuki",
    power: 525879700,
  },
  {
    server: 36047,
    family: "France",
    power: 508396285,
  },
  {
    server: 36047,
    family: "FrenchFamily",
    power: 448594540,
  },
  {
    server: 36047,
    family: "Py79Zoo",
    power: 333825506,
  },
  {
    server: 36047,
    family: "Creepeland",
    power: 277411955,
  },
  {
    server: 36047,
    family: "TheFrenchTeam",
    power: 259590571,
  },
  {
    server: 36047,
    family: "Mugiwara",
    power: 255674849,
  },
  {
    server: 36048,
    family: "RevencyaFR",
    power: 1655505879,
  },
  {
    server: 36048,
    family: "LeagueOfMush",
    power: 1564242158,
  },
  {
    server: 36048,
    family: "RevencyaFR2",
    power: 980058015,
  },
  {
    server: 36048,
    family: "LegendOmega",
    power: 547906325,
  },
  {
    server: 36048,
    family: "BlueRain",
    power: 541038622,
  },
  {
    server: 36048,
    family: "DeusChampi",
    power: 436536971,
  },
  {
    server: 36048,
    family: "ChampisFR",
    power: 428499783,
  },
  {
    server: 36048,
    family: "girolle",
    power: 335977904,
  },
  {
    server: 36048,
    family: "Bestfrclan",
    power: 317597054,
  },
  {
    server: 36048,
    family: "FlopSquad",
    power: 244378344,
  },
  {
    server: 36049,
    family: "Rédemption",
    power: 1399269448,
  },
  {
    server: 36049,
    family: "Genesis",
    power: 1356221363,
  },
  {
    server: 36049,
    family: "Eclipse",
    power: 1266968288,
  },
  {
    server: 36049,
    family: "LaHorde",
    power: 624368955,
  },
  {
    server: 36049,
    family: "LesCreusoisFR",
    power: 405781033,
  },
  {
    server: 36049,
    family: "Unions",
    power: 332128751,
  },
  {
    server: 36049,
    family: "BubuleTeam",
    power: 310927705,
  },
  {
    server: 36049,
    family: "LaSimca1000",
    power: 281939613,
  },
  {
    server: 36049,
    family: "NOLIMIT",
    power: 248189966,
  },
  {
    server: 36049,
    family: "BeastyClan",
    power: 211648945,
  },
  {
    server: 36050,
    family: "Mugiwara",
    power: 1605612520,
  },
  {
    server: 36050,
    family: "FrenchRevo",
    power: 1548896858,
  },
  {
    server: 36050,
    family: "Sinister",
    power: 802229574,
  },
  {
    server: 36050,
    family: "TeamFrance",
    power: 336993329,
  },
  {
    server: 36050,
    family: "Moonlight",
    power: 259903231,
  },
  {
    server: 36050,
    family: "Synopsis",
    power: 234424112,
  },
  {
    server: 36050,
    family: "Overlord",
    power: 233838764,
  },
  {
    server: 36050,
    family: "LEROYAUME",
    power: 178516622,
  },
  {
    server: 36050,
    family: "Frōmage",
    power: 175681637,
  },
  {
    server: 36050,
    family: "FrenchEvo",
    power: 148614810,
  },
  {
    server: 36051,
    family: "Eclipse_FR",
    power: 1422898497,
  },
  {
    server: 36051,
    family: "Fr_Universe",
    power: 1204863788,
  },
  {
    server: 36051,
    family: "FrenchReborn",
    power: 1069864192,
  },
  {
    server: 36051,
    family: "Champichou",
    power: 531607137,
  },
  {
    server: 36051,
    family: "Shadow",
    power: 305541376,
  },
  {
    server: 36051,
    family: "Azap",
    power: 290102446,
  },
  {
    server: 36051,
    family: "IceDragon",
    power: 273929650,
  },
  {
    server: 36051,
    family: "Eagles",
    power: 248406465,
  },
  {
    server: 36051,
    family: "Vallhala",
    power: 246023365,
  },
  {
    server: 36051,
    family: "UNLESS_V",
    power: 227857359,
  },
  {
    server: 36052,
    family: "BornToWin",
    power: 1813424743,
  },
  {
    server: 36052,
    family: "Arise",
    power: 1529962086,
  },
  {
    server: 36052,
    family: "BADCOMPANY",
    power: 1160174421,
  },
  {
    server: 36052,
    family: "BornToWin2",
    power: 730940198,
  },
  {
    server: 36052,
    family: "Fr",
    power: 550625837,
  },
  {
    server: 36052,
    family: "FrenchReapers",
    power: 529830743,
  },
  {
    server: 36052,
    family: "ArbreSacré",
    power: 286895447,
  },
  {
    server: 36052,
    family: "Kavaress",
    power: 281103364,
  },
  {
    server: 36052,
    family: "Arkadia",
    power: 258771021,
  },
  {
    server: 36052,
    family: "FCprout",
    power: 241593937,
  },
  {
    server: 36053,
    family: "LionHeart",
    power: 1766919825,
  },
  {
    server: 36053,
    family: "Nova",
    power: 1467441164,
  },
  {
    server: 36053,
    family: "Neptune",
    power: 988981915,
  },
  {
    server: 36053,
    family: "HIPPOPOTEAM",
    power: 567944203,
  },
  {
    server: 36053,
    family: "Neuillemalice",
    power: 390724224,
  },
  {
    server: 36053,
    family: "Moonwhite",
    power: 325484019,
  },
  {
    server: 36053,
    family: "SheyArchy",
    power: 319887701,
  },
  {
    server: 36053,
    family: "PouetPouet",
    power: 282974801,
  },
  {
    server: 36053,
    family: "Bobsleigh",
    power: 268768025,
  },
  {
    server: 36053,
    family: "Kawaii🥰🥰",
    power: 262564017,
  },
  {
    server: 36054,
    family: "MushEvils",
    power: 1722990410,
  },
  {
    server: 36054,
    family: "LumberJack",
    power: 1459404798,
  },
  {
    server: 36054,
    family: "Yonkos",
    power: 942253030,
  },
  {
    server: 36054,
    family: "LesMajeurs",
    power: 373050530,
  },
  {
    server: 36054,
    family: "Yolo",
    power: 328469704,
  },
  {
    server: 36054,
    family: "Phénix",
    power: 318227266,
  },
  {
    server: 36054,
    family: "zepocacabidou",
    power: 207943205,
  },
  {
    server: 36054,
    family: "Eternia",
    power: 202968888,
  },
  {
    server: 36054,
    family: "Føcus",
    power: 187219794,
  },
  {
    server: 36054,
    family: "LesGensBon",
    power: 172111372,
  },
  {
    server: 36055,
    family: "Liones",
    power: 1835914293,
  },
  {
    server: 36055,
    family: "UNIFICATION",
    power: 1373427846,
  },
  {
    server: 36055,
    family: "Amaterasu",
    power: 761741851,
  },
  {
    server: 36055,
    family: "LesGirolles",
    power: 433733680,
  },
  {
    server: 36055,
    family: "CasualFamily",
    power: 339526050,
  },
  {
    server: 36055,
    family: "Shadow",
    power: 250444085,
  },
  {
    server: 36055,
    family: "inCube",
    power: 245884161,
  },
  {
    server: 36055,
    family: "NEGROLAND",
    power: 237672324,
  },
  {
    server: 36055,
    family: "Granola",
    power: 220618830,
  },
  {
    server: 36055,
    family: "onob",
    power: 198240407,
  },
  {
    server: 36056,
    family: "FranceBZH",
    power: 1780329311,
  },
  {
    server: 36056,
    family: "Kinoko",
    power: 1518425169,
  },
  {
    server: 36056,
    family: "Kïnoko",
    power: 728588845,
  },
  {
    server: 36056,
    family: "LegendarySmurf",
    power: 409589572,
  },
  {
    server: 36056,
    family: "MagicTwo",
    power: 312919570,
  },
  {
    server: 36056,
    family: "Champifamilly",
    power: 298009713,
  },
  {
    server: 36056,
    family: "NeedPull",
    power: 229762481,
  },
  {
    server: 36056,
    family: "therules1",
    power: 214821806,
  },
  {
    server: 36056,
    family: "AfterAll",
    power: 209623353,
  },
  {
    server: 36056,
    family: "Champiland",
    power: 192552145,
  },
  {
    server: 36057,
    family: "SHÌNE",
    power: 1775979802,
  },
  {
    server: 36057,
    family: "LaTeamChill",
    power: 1552098521,
  },
  {
    server: 36057,
    family: "TRONC",
    power: 718205643,
  },
  {
    server: 36057,
    family: "Hallucinogènes",
    power: 597930856,
  },
  {
    server: 36057,
    family: "France",
    power: 580639672,
  },
  {
    server: 36057,
    family: "FRANCE",
    power: 457585997,
  },
  {
    server: 36057,
    family: "ChampiFrancais",
    power: 408363769,
  },
  {
    server: 36057,
    family: "LaFrance",
    power: 354694775,
  },
  {
    server: 36057,
    family: "Tempest",
    power: 353422163,
  },
  {
    server: 36057,
    family: "Frenchfirst",
    power: 310755429,
  },
  {
    server: 36058,
    family: "NoMercy",
    power: 1759700976,
  },
  {
    server: 36058,
    family: "ATLAS",
    power: 1707184120,
  },
  {
    server: 36058,
    family: "TeamFrench",
    power: 1014324198,
  },
  {
    server: 36058,
    family: "HÉRACLÈS",
    power: 696152002,
  },
  {
    server: 36058,
    family: "MushVroum",
    power: 380658665,
  },
  {
    server: 36058,
    family: "Avalon",
    power: 360360046,
  },
  {
    server: 36058,
    family: "Ahjin",
    power: 334392034,
  },
  {
    server: 36058,
    family: "BaBaBoy",
    power: 330083429,
  },
  {
    server: 36058,
    family: "newgate",
    power: 321990170,
  },
  {
    server: 36058,
    family: "GEII",
    power: 319856662,
  },
  {
    server: 36059,
    family: "Phénomène",
    power: 1767466010,
  },
  {
    server: 36059,
    family: "𝕆𝕤𝕚𝕣𝕚𝕤",
    power: 1343804935,
  },
  {
    server: 36059,
    family: "Aincrad",
    power: 784578987,
  },
  {
    server: 36059,
    family: "TeamChampi",
    power: 586035787,
  },
  {
    server: 36059,
    family: "ᗷᒪᗩᑕᛕᗯᗝᒪᖴ",
    power: 441857369,
  },
  {
    server: 36059,
    family: "CarpeDiem",
    power: 433311411,
  },
  {
    server: 36059,
    family: "France",
    power: 393031071,
  },
  {
    server: 36059,
    family: "LeagueOfToads",
    power: 264142416,
  },
  {
    server: 36059,
    family: "HeinekenFR",
    power: 263101674,
  },
  {
    server: 36059,
    family: "LeLocal",
    power: 255591121,
  },
  {
    server: 36060,
    family: "AzElite",
    power: 1835577323,
  },
  {
    server: 36060,
    family: "DarkEternya",
    power: 1542029944,
  },
  {
    server: 36060,
    family: "AzElite2",
    power: 1152880159,
  },
  {
    server: 36060,
    family: "667Ekip",
    power: 799432563,
  },
  {
    server: 36060,
    family: "LightEternya",
    power: 617803911,
  },
  {
    server: 36060,
    family: "AKATSUKI",
    power: 541028785,
  },
  {
    server: 36060,
    family: "ClubSandwich",
    power: 492636719,
  },
  {
    server: 36060,
    family: "Bricodepot",
    power: 421369612,
  },
  {
    server: 36060,
    family: "Symphonia",
    power: 333610453,
  },
  {
    server: 36060,
    family: "latêtedecèpes",
    power: 321133906,
  },
  {
    server: 36061,
    family: "LeagueOfMush",
    power: 1698617462,
  },
  {
    server: 36061,
    family: "FungiSyndicate",
    power: 1442838696,
  },
  {
    server: 36061,
    family: "Les_Mugiwara",
    power: 1238910631,
  },
  {
    server: 36061,
    family: "TerraTerre",
    power: 1020636989,
  },
  {
    server: 36061,
    family: "lafireforce",
    power: 708280374,
  },
  {
    server: 36061,
    family: "FunkyFungi",
    power: 645234530,
  },
  {
    server: 36061,
    family: "LakersWorld",
    power: 463956106,
  },
  {
    server: 36061,
    family: "AZERTY_Clan",
    power: 381967049,
  },
  {
    server: 36061,
    family: "champette",
    power: 359205104,
  },
  {
    server: 36061,
    family: "Caricrew",
    power: 355993508,
  },
  {
    server: 36062,
    family: "Pewee",
    power: 1728992986,
  },
  {
    server: 36062,
    family: "GoodVibes",
    power: 1458423858,
  },
  {
    server: 36062,
    family: "Sunny",
    power: 1240969931,
  },
  {
    server: 36062,
    family: "Renaissance",
    power: 545896673,
  },
  {
    server: 36062,
    family: "ruination",
    power: 448940851,
  },
  {
    server: 36062,
    family: "OnePieceFR",
    power: 423006548,
  },
  {
    server: 36062,
    family: "LaConfrérie",
    power: 385410568,
  },
  {
    server: 36062,
    family: "LaGriffe",
    power: 380637030,
  },
  {
    server: 36062,
    family: "URSSAF",
    power: 363862259,
  },
  {
    server: 36062,
    family: "BZH",
    power: 361032924,
  },
  {
    server: 36063,
    family: "BornToWin",
    power: 1793845303,
  },
  {
    server: 36063,
    family: "Astralead",
    power: 1412347649,
  },
  {
    server: 36063,
    family: "LegendNk",
    power: 1098859262,
  },
  {
    server: 36063,
    family: "TeamFr",
    power: 676342860,
  },
  {
    server: 36063,
    family: "nouveau",
    power: 393817420,
  },
  {
    server: 36063,
    family: "Lotus",
    power: 355507690,
  },
  {
    server: 36063,
    family: "GANGSMUSHS1FR",
    power: 343532157,
  },
  {
    server: 36063,
    family: "mars37",
    power: 260047339,
  },
  {
    server: 36063,
    family: "Nutella",
    power: 252414153,
  },
  {
    server: 36063,
    family: "Bersek",
    power: 235495470,
  },
  {
    server: 36064,
    family: "Panthéon",
    power: 1846101933,
  },
  {
    server: 36064,
    family: "PanthéonAC",
    power: 1361247144,
  },
  {
    server: 36064,
    family: "HR",
    power: 1142676688,
  },
  {
    server: 36064,
    family: "ChampiFR",
    power: 933412804,
  },
  {
    server: 36064,
    family: "HellFire",
    power: 441359454,
  },
  {
    server: 36064,
    family: "BladeFR",
    power: 431270301,
  },
  {
    server: 36064,
    family: "Baguettes",
    power: 422347221,
  },
  {
    server: 36064,
    family: "Maxgi_",
    power: 387160682,
  },
  {
    server: 36064,
    family: "FR_Chill",
    power: 353376859,
  },
  {
    server: 36064,
    family: "VikingFR",
    power: 334802466,
  },
  {
    server: 36065,
    family: "NightFall",
    power: 1758708234,
  },
  {
    server: 36065,
    family: "Champix666",
    power: 1694904135,
  },
  {
    server: 36065,
    family: "RESURRECTION",
    power: 1062472575,
  },
  {
    server: 36065,
    family: "divisionfr",
    power: 493737674,
  },
  {
    server: 36065,
    family: "Phœnix",
    power: 476834415,
  },
  {
    server: 36065,
    family: "ShinyHunters",
    power: 415373851,
  },
  {
    server: 36065,
    family: "FranceClan",
    power: 377446925,
  },
  {
    server: 36065,
    family: "FrenchTeamFR",
    power: 348885179,
  },
  {
    server: 36065,
    family: "Français",
    power: 332933362,
  },
  {
    server: 36065,
    family: "les_Carpo",
    power: 332382450,
  },
  {
    server: 36066,
    family: "Pompélup",
    power: 1666158766,
  },
  {
    server: 36066,
    family: "azerquio",
    power: 1448488148,
  },
  {
    server: 36066,
    family: "Amanite",
    power: 1192798975,
  },
  {
    server: 36066,
    family: "LesWeebs",
    power: 412091830,
  },
  {
    server: 36066,
    family: "EVETrials",
    power: 398683969,
  },
  {
    server: 36066,
    family: "France",
    power: 385427047,
  },
  {
    server: 36066,
    family: "New_age",
    power: 337774598,
  },
  {
    server: 36066,
    family: "crystal",
    power: 330734218,
  },
  {
    server: 36066,
    family: "SayKom",
    power: 293502796,
  },
  {
    server: 36066,
    family: "GourmetCorp",
    power: 202770243,
  },
  {
    server: 36067,
    family: "LesTruffesFR",
    power: 1765553704,
  },
  {
    server: 36067,
    family: "Fr_Moldus",
    power: 1324245855,
  },
  {
    server: 36067,
    family: "AKATSUKI",
    power: 1059412146,
  },
  {
    server: 36067,
    family: "solo_leveling",
    power: 547054957,
  },
  {
    server: 36067,
    family: "FranceClan",
    power: 475676448,
  },
  {
    server: 36067,
    family: "Gryffondor_Fr",
    power: 394219252,
  },
  {
    server: 36067,
    family: "Destin",
    power: 330915600,
  },
  {
    server: 36067,
    family: "ClanDébutants",
    power: 323310008,
  },
  {
    server: 36067,
    family: "𝕷𝖚𝖓𝖆𝖗𝕮𝖑",
    power: 262198897,
  },
  {
    server: 36067,
    family: "Dieu",
    power: 240923080,
  },
  {
    server: 36068,
    family: "PEPEgnoni🤌",
    power: 1700473819,
  },
  {
    server: 36068,
    family: "Troph",
    power: 1648326190,
  },
  {
    server: 36068,
    family: "fenri",
    power: 1271814961,
  },
  {
    server: 36068,
    family: "Atala",
    power: 1094845977,
  },
  {
    server: 36068,
    family: "ASocialClub",
    power: 471193287,
  },
  {
    server: 36068,
    family: "REDROSE",
    power: 440245390,
  },
  {
    server: 36068,
    family: "SporesMystique",
    power: 421096159,
  },
  {
    server: 36068,
    family: "lesbg",
    power: 338668881,
  },
  {
    server: 36068,
    family: "ClanFrance",
    power: 321061098,
  },
  {
    server: 36068,
    family: "LeBonFrancais",
    power: 308650111,
  },
  {
    server: 36069,
    family: "ZEVO",
    power: 1612197027,
  },
  {
    server: 36069,
    family: "TOADS",
    power: 1413136713,
  },
  {
    server: 36069,
    family: "Tartiflette",
    power: 1265906282,
  },
  {
    server: 36069,
    family: "WarriorsFR",
    power: 564462670,
  },
  {
    server: 36069,
    family: "NothingFR",
    power: 512534823,
  },
  {
    server: 36069,
    family: "HélioWar",
    power: 391832898,
  },
  {
    server: 36069,
    family: "DidouFR",
    power: 380938114,
  },
  {
    server: 36069,
    family: "MycoMorph",
    power: 350905519,
  },
  {
    server: 36069,
    family: "Kaamelott",
    power: 298219196,
  },
  {
    server: 36069,
    family: "LimuleFR",
    power: 273377466,
  },
  {
    server: 36070,
    family: "Pepouze",
    power: 1501662115,
  },
  {
    server: 36070,
    family: "Shinsetsu",
    power: 1459177329,
  },
  {
    server: 36070,
    family: "Omega",
    power: 1309835885,
  },
  {
    server: 36070,
    family: "Valhalla",
    power: 430153865,
  },
  {
    server: 36070,
    family: "CP0",
    power: 362061939,
  },
  {
    server: 36070,
    family: "ChampisGang",
    power: 361312614,
  },
  {
    server: 36070,
    family: "NocTurno",
    power: 340670976,
  },
  {
    server: 36070,
    family: "FR_Lonies",
    power: 327566613,
  },
  {
    server: 36070,
    family: "minazuki",
    power: 327202386,
  },
  {
    server: 36070,
    family: "Gaulois",
    power: 311165225,
  },
  {
    server: 36071,
    family: "Goats",
    power: 1819974634,
  },
  {
    server: 36071,
    family: "FrenchTeam",
    power: 1567585978,
  },
  {
    server: 36071,
    family: "NightmareFR",
    power: 1127703103,
  },
  {
    server: 36071,
    family: "MUSHANT",
    power: 829260915,
  },
  {
    server: 36071,
    family: "kurogi",
    power: 614315549,
  },
  {
    server: 36071,
    family: "Berserker",
    power: 577952794,
  },
  {
    server: 36071,
    family: "MushLAnd",
    power: 414504480,
  },
  {
    server: 36071,
    family: "Les_Anarchiste",
    power: 307185480,
  },
  {
    server: 36071,
    family: "pioufitak",
    power: 296446734,
  },
  {
    server: 36071,
    family: "Nécromonde",
    power: 283804713,
  },
  {
    server: 36072,
    family: "Ragnarok",
    power: 1741778107,
  },
  {
    server: 36072,
    family: "Monarchs",
    power: 1539822167,
  },
  {
    server: 36072,
    family: "SIOFr",
    power: 1361394020,
  },
  {
    server: 36072,
    family: "LesBretons",
    power: 747224328,
  },
  {
    server: 36072,
    family: "FrenchFamily",
    power: 434961381,
  },
  {
    server: 36072,
    family: "planètefr",
    power: 411724250,
  },
  {
    server: 36072,
    family: "LesTruffes",
    power: 399888400,
  },
  {
    server: 36072,
    family: "CRCI",
    power: 392120410,
  },
  {
    server: 36072,
    family: "FRchampi",
    power: 340918888,
  },
  {
    server: 36072,
    family: "Mugiwara",
    power: 297407035,
  },
  {
    server: 36073,
    family: "LesNullos",
    power: 1673440738,
  },
  {
    server: 36073,
    family: "NewAKdemie",
    power: 1262098661,
  },
  {
    server: 36073,
    family: "MushroomsFR",
    power: 1099475761,
  },
  {
    server: 36073,
    family: "COD_fr",
    power: 654957711,
  },
  {
    server: 36073,
    family: "EmpireShodpiss",
    power: 473895496,
  },
  {
    server: 36073,
    family: "Erebus",
    power: 465728265,
  },
  {
    server: 36073,
    family: "Belgia",
    power: 347332240,
  },
  {
    server: 36073,
    family: "LeLocal",
    power: 327714846,
  },
  {
    server: 36073,
    family: "Anubis",
    power: 300645816,
  },
  {
    server: 36073,
    family: "EmpirePsylo",
    power: 255511989,
  },
  {
    server: 36074,
    family: "WindBreaker",
    power: 1903196116,
  },
  {
    server: 36074,
    family: "BrigadeFantôme",
    power: 1734659567,
  },
  {
    server: 36074,
    family: "LesDiablotins",
    power: 1338498626,
  },
  {
    server: 36074,
    family: "Boletleague",
    power: 983829777,
  },
  {
    server: 36074,
    family: "champiclan",
    power: 860287076,
  },
  {
    server: 36074,
    family: "DEVARMY",
    power: 780002417,
  },
  {
    server: 36074,
    family: "HumbleMates",
    power: 641996441,
  },
  {
    server: 36074,
    family: "FullTryTry",
    power: 569971081,
  },
  {
    server: 36074,
    family: "Youpiiii",
    power: 414623398,
  },
  {
    server: 36074,
    family: "ChamPotes",
    power: 408255339,
  },
  {
    server: 36075,
    family: "Hécate",
    power: 1743088879,
  },
  {
    server: 36075,
    family: "Olympe",
    power: 1700401686,
  },
  {
    server: 36075,
    family: "Sons_Of_Toad",
    power: 1589225970,
  },
  {
    server: 36075,
    family: "FamilyArbre",
    power: 581684103,
  },
  {
    server: 36075,
    family: "Champdeparis",
    power: 523895589,
  },
  {
    server: 36075,
    family: "lesfirst",
    power: 464830045,
  },
  {
    server: 36075,
    family: "Benzou",
    power: 406136636,
  },
  {
    server: 36075,
    family: "TTR",
    power: 380914289,
  },
  {
    server: 36075,
    family: "Noxus",
    power: 321797319,
  },
  {
    server: 36075,
    family: "mushroomFR2",
    power: 317566914,
  },
  {
    server: 36076,
    family: "Genesis",
    power: 1994578321,
  },
  {
    server: 36076,
    family: "LEGENDS",
    power: 1701689638,
  },
  {
    server: 36076,
    family: "LePMU",
    power: 1339411859,
  },
  {
    server: 36076,
    family: "ChampiGrognon",
    power: 846297753,
  },
  {
    server: 36076,
    family: "Sexo",
    power: 820177488,
  },
  {
    server: 36076,
    family: "LeLocal",
    power: 587019494,
  },
  {
    server: 36076,
    family: "Outlaws",
    power: 575084844,
  },
  {
    server: 36076,
    family: "Unless2",
    power: 482627383,
  },
  {
    server: 36076,
    family: "FrBoucan",
    power: 440409185,
  },
  {
    server: 36076,
    family: "Arrakis",
    power: 350080096,
  },
  {
    server: 36077,
    family: "Omega",
    power: 1831981903,
  },
  {
    server: 36077,
    family: "Bechamel_IV",
    power: 1585401458,
  },
  {
    server: 36077,
    family: "Elsker",
    power: 1551084154,
  },
  {
    server: 36077,
    family: "napoworld",
    power: 1128737278,
  },
  {
    server: 36077,
    family: "PapyPirate",
    power: 852366020,
  },
  {
    server: 36077,
    family: "Kcorp",
    power: 673816952,
  },
  {
    server: 36077,
    family: "LaMalaGang",
    power: 588609204,
  },
  {
    server: 36077,
    family: "solohelping",
    power: 417853619,
  },
  {
    server: 36077,
    family: "FamilyHome",
    power: 393109167,
  },
  {
    server: 36077,
    family: "ChampiGloire",
    power: 380020550,
  },
  {
    server: 36078,
    family: "AdAstra",
    power: 1820854788,
  },
  {
    server: 36078,
    family: "KC_ULTRA",
    power: 1756932394,
  },
  {
    server: 36078,
    family: "SacredGroove",
    power: 1204134293,
  },
  {
    server: 36078,
    family: "Les_KCrapules",
    power: 760802730,
  },
  {
    server: 36078,
    family: "KC_TRYHARD",
    power: 552810656,
  },
  {
    server: 36078,
    family: "Insomnia",
    power: 526156621,
  },
  {
    server: 36078,
    family: "Orangina",
    power: 505086776,
  },
  {
    server: 36078,
    family: "LesFraudes",
    power: 482505835,
  },
  {
    server: 36078,
    family: "Quoikoupotos",
    power: 475290364,
  },
  {
    server: 36078,
    family: "KC_mega",
    power: 473095523,
  },
  {
    server: 36079,
    family: "Crown",
    power: 1828281005,
  },
  {
    server: 36079,
    family: "Bluewall",
    power: 1539840667,
  },
  {
    server: 36079,
    family: "L’Inglorium",
    power: 1160474229,
  },
  {
    server: 36079,
    family: "Sunny",
    power: 707773320,
  },
  {
    server: 36079,
    family: "Aubiwan",
    power: 524813732,
  },
  {
    server: 36079,
    family: "Auzary",
    power: 414441381,
  },
  {
    server: 36079,
    family: "France",
    power: 408205966,
  },
  {
    server: 36079,
    family: "KCorpQG",
    power: 398693188,
  },
  {
    server: 36079,
    family: "🤓",
    power: 371885938,
  },
  {
    server: 36079,
    family: "lesfarfadets",
    power: 366340760,
  },
  {
    server: 36080,
    family: "Revolut_AKT",
    power: 1725393305,
  },
  {
    server: 36080,
    family: "Dracarys",
    power: 1486111060,
  },
  {
    server: 36080,
    family: "Hermès",
    power: 1291499916,
  },
  {
    server: 36080,
    family: "KC_Blue",
    power: 575256262,
  },
  {
    server: 36080,
    family: "Konoha",
    power: 550505391,
  },
  {
    server: 36080,
    family: "LesKorogus",
    power: 409728650,
  },
  {
    server: 36080,
    family: "Vivitlaire",
    power: 351379932,
  },
  {
    server: 36080,
    family: "MAFIAGUERRIA",
    power: 299762748,
  },
  {
    server: 36080,
    family: "FrenchLigue",
    power: 244410905,
  },
  {
    server: 36080,
    family: "Unskilled",
    power: 222175489,
  },
  {
    server: 36081,
    family: "KarmineCorp",
    power: 1921777916,
  },
  {
    server: 36081,
    family: "ChampiChampion",
    power: 1636841379,
  },
  {
    server: 36081,
    family: "BlueStars",
    power: 1504916524,
  },
  {
    server: 36081,
    family: "Chlamydia",
    power: 1099179871,
  },
  {
    server: 36081,
    family: "PouryGang",
    power: 1040227218,
  },
  {
    server: 36081,
    family: "TEAM_CHAMPI",
    power: 1022108229,
  },
  {
    server: 36081,
    family: "GentlemanClub",
    power: 697487359,
  },
  {
    server: 36081,
    family: "HakiDesRois",
    power: 696748874,
  },
  {
    server: 36081,
    family: "TaureauNoir",
    power: 537038469,
  },
  {
    server: 36081,
    family: "Fougeux",
    power: 506838091,
  },
  {
    server: 36082,
    family: "PoopooKrav",
    power: 1682845242,
  },
  {
    server: 36082,
    family: "STRIKEFORCE",
    power: 1586926056,
  },
  {
    server: 36082,
    family: "Fake",
    power: 1573704297,
  },
  {
    server: 36082,
    family: "Novaeres",
    power: 1008896994,
  },
  {
    server: 36082,
    family: "Nigloland",
    power: 950165265,
  },
  {
    server: 36082,
    family: "CSB",
    power: 469932206,
  },
  {
    server: 36082,
    family: "Antagonista",
    power: 466319259,
  },
  {
    server: 36082,
    family: "Noomo",
    power: 460054827,
  },
  {
    server: 36082,
    family: "GentleMates",
    power: 397816783,
  },
  {
    server: 36082,
    family: "SoloOnMushroom",
    power: 371754808,
  },
  {
    server: 36083,
    family: "Poulpi",
    power: 1693939833,
  },
  {
    server: 36083,
    family: "Mugiwara",
    power: 1509726641,
  },
  {
    server: 36083,
    family: "CityGang",
    power: 1490743384,
  },
  {
    server: 36083,
    family: "ChampiToad",
    power: 480940171,
  },
  {
    server: 36083,
    family: "japanvie",
    power: 473331417,
  },
  {
    server: 36083,
    family: "KarmineCorp",
    power: 437623790,
  },
  {
    server: 36083,
    family: "Gaulois",
    power: 393386393,
  },
  {
    server: 36083,
    family: "français",
    power: 368941626,
  },
  {
    server: 36083,
    family: "LesGolmons",
    power: 367607669,
  },
  {
    server: 36083,
    family: "LesSudistes",
    power: 267599915,
  },
  {
    server: 36084,
    family: "Taverne",
    power: 1721736660,
  },
  {
    server: 36084,
    family: "Requiem",
    power: 1711652546,
  },
  {
    server: 36084,
    family: "KarmineCorp",
    power: 1307277556,
  },
  {
    server: 36084,
    family: "SoloLevelingFR",
    power: 886247194,
  },
  {
    server: 36084,
    family: "Alliance",
    power: 746759140,
  },
  {
    server: 36084,
    family: "MushLand",
    power: 682072961,
  },
  {
    server: 36084,
    family: "1erRPIMa",
    power: 533362021,
  },
  {
    server: 36084,
    family: "FrenchTeam",
    power: 527868314,
  },
  {
    server: 36084,
    family: "LeNoyau",
    power: 452013193,
  },
  {
    server: 36084,
    family: "AsmodeusFilia",
    power: 385988835,
  },
  {
    server: 36085,
    family: "MushParadis",
    power: 1763134544,
  },
  {
    server: 36085,
    family: "Malveillance",
    power: 1375949130,
  },
  {
    server: 36085,
    family: "Phœnix",
    power: 1245556494,
  },
  {
    server: 36085,
    family: "UNIS_VERS",
    power: 857617612,
  },
  {
    server: 36085,
    family: "CHAMPIX",
    power: 788093310,
  },
  {
    server: 36085,
    family: "AKATSUKI",
    power: 559149695,
  },
  {
    server: 36085,
    family: "TeamFrance",
    power: 467214095,
  },
  {
    server: 36085,
    family: "Basicfrites",
    power: 445681144,
  },
  {
    server: 36085,
    family: "FRENCHIES",
    power: 340548194,
  },
  {
    server: 36085,
    family: "Mushroom_verse",
    power: 322920118,
  },
  {
    server: 36086,
    family: "SoloBistou",
    power: 1632542351,
  },
  {
    server: 36086,
    family: "Olympe",
    power: 1557183906,
  },
  {
    server: 36086,
    family: "L’alliance",
    power: 1421623282,
  },
  {
    server: 36086,
    family: "Bistouquette",
    power: 525003807,
  },
  {
    server: 36086,
    family: "KANABIS",
    power: 410016563,
  },
  {
    server: 36086,
    family: "France",
    power: 399961921,
  },
  {
    server: 36086,
    family: "AKdemie",
    power: 366410047,
  },
  {
    server: 36086,
    family: "Akatsuki",
    power: 335877782,
  },
  {
    server: 36086,
    family: "phoenyx",
    power: 303966928,
  },
  {
    server: 36086,
    family: "LesZommes",
    power: 292869619,
  },
  {
    server: 36087,
    family: "ιмρєяιυм",
    power: 1947116604,
  },
  {
    server: 36087,
    family: "GOJOCORPS",
    power: 1412882639,
  },
  {
    server: 36087,
    family: "DarkPhœnix",
    power: 1216565285,
  },
  {
    server: 36087,
    family: "LesBaroudEure",
    power: 1005183227,
  },
  {
    server: 36087,
    family: "LaHordElfiq",
    power: 631861343,
  },
  {
    server: 36087,
    family: "KARMINE",
    power: 443410186,
  },
  {
    server: 36087,
    family: "TeamNaps",
    power: 439842451,
  },
  {
    server: 36087,
    family: "400r",
    power: 423207542,
  },
  {
    server: 36087,
    family: "KarmineCorp",
    power: 419907546,
  },
  {
    server: 36087,
    family: "Division0",
    power: 395639628,
  },
  {
    server: 36088,
    family: "revenge",
    power: 1776602748,
  },
  {
    server: 36088,
    family: "Pourfendeurs",
    power: 1462326276,
  },
  {
    server: 36088,
    family: "Hollow",
    power: 1167008496,
  },
  {
    server: 36088,
    family: "Lafrenchteam",
    power: 571141594,
  },
  {
    server: 36088,
    family: "AxDem",
    power: 510945369,
  },
  {
    server: 36088,
    family: "Redroom",
    power: 422982406,
  },
  {
    server: 36088,
    family: "Legends",
    power: 398210833,
  },
  {
    server: 36088,
    family: "ANARCHY",
    power: 368451675,
  },
  {
    server: 36088,
    family: "Karmine_Corp",
    power: 361888973,
  },
  {
    server: 36088,
    family: "Metallica",
    power: 322521980,
  },
  {
    server: 36089,
    family: "BlueChampi",
    power: 1779820400,
  },
  {
    server: 36089,
    family: "MaitresBolets",
    power: 1303440987,
  },
  {
    server: 36089,
    family: "Rebirth",
    power: 1174582640,
  },
  {
    server: 36089,
    family: "Odyssey",
    power: 639947425,
  },
  {
    server: 36089,
    family: "BlueWall",
    power: 486125387,
  },
  {
    server: 36089,
    family: "CAF",
    power: 408255592,
  },
  {
    server: 36089,
    family: "LaForceFr",
    power: 382346135,
  },
  {
    server: 36089,
    family: "France",
    power: 378367531,
  },
  {
    server: 36089,
    family: "Sun",
    power: 336152300,
  },
  {
    server: 36089,
    family: "Mugiwara",
    power: 323430508,
  },
  {
    server: 36090,
    family: "Fade_Zone",
    power: 1598976728,
  },
  {
    server: 36090,
    family: "MUGIWARA_VKG",
    power: 1577826546,
  },
  {
    server: 36090,
    family: "VIKING_MuG",
    power: 1186533948,
  },
  {
    server: 36090,
    family: "KarmineCorp",
    power: 469716055,
  },
  {
    server: 36090,
    family: "LaZone",
    power: 449166283,
  },
  {
    server: 36090,
    family: "Equinox",
    power: 378609707,
  },
  {
    server: 36090,
    family: "NatGang",
    power: 355397829,
  },
  {
    server: 36090,
    family: "France",
    power: 337818991,
  },
  {
    server: 36090,
    family: "Warzazate",
    power: 336028929,
  },
  {
    server: 36090,
    family: "Wolfgang",
    power: 305629283,
  },
  {
    server: 36091,
    family: "SUPRA",
    power: 1747055649,
  },
  {
    server: 36091,
    family: "Rebellium",
    power: 1550277516,
  },
  {
    server: 36091,
    family: "Pubertax",
    power: 1091192191,
  },
  {
    server: 36091,
    family: "gang_pouletos",
    power: 659383320,
  },
  {
    server: 36091,
    family: "leclandezamis",
    power: 657503767,
  },
  {
    server: 36091,
    family: "LaHorde",
    power: 484604664,
  },
  {
    server: 36091,
    family: "France",
    power: 479236894,
  },
  {
    server: 36091,
    family: "Pdbl",
    power: 456707291,
  },
  {
    server: 36091,
    family: "Champignouf",
    power: 327157620,
  },
  {
    server: 36091,
    family: "MCFrance",
    power: 318635617,
  },
  {
    server: 36092,
    family: "azulite",
    power: 1717235130,
  },
  {
    server: 36092,
    family: "Mercenaires",
    power: 1212338859,
  },
  {
    server: 36092,
    family: "ᎧᏝᎩᎷᎮᏋ",
    power: 1061262140,
  },
  {
    server: 36092,
    family: "TheBlueWall",
    power: 683257819,
  },
  {
    server: 36092,
    family: "Parazyte",
    power: 661971297,
  },
  {
    server: 36092,
    family: "DesertEagle",
    power: 581721685,
  },
  {
    server: 36092,
    family: "Akatsuki",
    power: 555813157,
  },
  {
    server: 36092,
    family: "FRdémons",
    power: 499069697,
  },
  {
    server: 36092,
    family: "GBClub",
    power: 336227091,
  },
  {
    server: 36092,
    family: "Champi974",
    power: 322914392,
  },
  {
    server: 36093,
    family: "Destined2See",
    power: 1478174557,
  },
  {
    server: 36093,
    family: "French_Touch",
    power: 1158210828,
  },
  {
    server: 36093,
    family: "FireDragon",
    power: 1151813118,
  },
  {
    server: 36093,
    family: "SoloLeveling",
    power: 687366093,
  },
  {
    server: 36093,
    family: "oméga",
    power: 382862170,
  },
  {
    server: 36093,
    family: "Achéron",
    power: 369826241,
  },
  {
    server: 36093,
    family: "IVREICH",
    power: 363626982,
  },
  {
    server: 36093,
    family: "OmeletteChampi",
    power: 338857843,
  },
  {
    server: 36093,
    family: "démon",
    power: 293742952,
  },
  {
    server: 36093,
    family: "RiseOfMushroom",
    power: 249046524,
  },
  {
    server: 36094,
    family: "Nebula_Knights",
    power: 1632880892,
  },
  {
    server: 36094,
    family: "StellarKnights",
    power: 1281427334,
  },
  {
    server: 36094,
    family: "GOAT",
    power: 1162960357,
  },
  {
    server: 36094,
    family: "MushéMéchant",
    power: 988132781,
  },
  {
    server: 36094,
    family: "LégendeZ",
    power: 740319545,
  },
  {
    server: 36094,
    family: "GentleMates",
    power: 511740726,
  },
  {
    server: 36094,
    family: "Teemo19100",
    power: 403448389,
  },
  {
    server: 36094,
    family: "MushPotes",
    power: 386375770,
  },
  {
    server: 36094,
    family: "fairy_tail",
    power: 344374029,
  },
  {
    server: 36094,
    family: "Plazhius",
    power: 315967325,
  },
  {
    server: 36095,
    family: "MushWarrior",
    power: 1679601900,
  },
  {
    server: 36095,
    family: "SHIELD",
    power: 1452856059,
  },
  {
    server: 36095,
    family: "Harmony",
    power: 1337879930,
  },
  {
    server: 36095,
    family: "CringeNuts",
    power: 841442382,
  },
  {
    server: 36095,
    family: "LesTennysons",
    power: 494169442,
  },
  {
    server: 36095,
    family: "GloryForOlympe",
    power: 457383837,
  },
  {
    server: 36095,
    family: "Galaxie",
    power: 457094058,
  },
  {
    server: 36095,
    family: "Akatsuki",
    power: 441887720,
  },
  {
    server: 36095,
    family: "LH76",
    power: 414090023,
  },
  {
    server: 36095,
    family: "AntiMugiwara",
    power: 411468669,
  },
  {
    server: 36096,
    family: "KELAWIN",
    power: 1742486437,
  },
  {
    server: 36096,
    family: "NAKAMAS",
    power: 1387494756,
  },
  {
    server: 36096,
    family: "HUNTERS",
    power: 1215211669,
  },
  {
    server: 36096,
    family: "CHAMPIONS",
    power: 900502079,
  },
  {
    server: 36096,
    family: "Rêverie",
    power: 644368868,
  },
  {
    server: 36096,
    family: "Kaamelott",
    power: 566364639,
  },
  {
    server: 36096,
    family: "Zone51",
    power: 537377976,
  },
  {
    server: 36096,
    family: "AnesBetes",
    power: 369561410,
  },
  {
    server: 36096,
    family: "LombreNoire",
    power: 364782910,
  },
  {
    server: 36096,
    family: "NFX",
    power: 338204362,
  },
  {
    server: 36097,
    family: "Dogfighterever",
    power: 1496104734,
  },
  {
    server: 36097,
    family: "Chanpions",
    power: 1379572215,
  },
  {
    server: 36097,
    family: "Champimignons",
    power: 1231031650,
  },
  {
    server: 36097,
    family: "ShadowGarden",
    power: 482123337,
  },
  {
    server: 36097,
    family: "AKATSUKI_V4",
    power: 422805311,
  },
  {
    server: 36097,
    family: "Chacalerie",
    power: 406727354,
  },
  {
    server: 36097,
    family: "oméga",
    power: 392351585,
  },
  {
    server: 36097,
    family: "SevenDeadlySin",
    power: 381497335,
  },
  {
    server: 36097,
    family: "LesPagnions",
    power: 376042901,
  },
  {
    server: 36097,
    family: "KarmineCorp",
    power: 293809439,
  },
  {
    server: 36098,
    family: "AStreon",
    power: 1452824292,
  },
  {
    server: 36098,
    family: "LesAlcoolHic",
    power: 1420327091,
  },
  {
    server: 36098,
    family: "Clan2Legende",
    power: 1057242187,
  },
  {
    server: 36098,
    family: "HiGHKEY",
    power: 553675950,
  },
  {
    server: 36098,
    family: "Chatpas_dheure",
    power: 366838205,
  },
  {
    server: 36098,
    family: "FRANCEzen",
    power: 356169688,
  },
  {
    server: 36098,
    family: "BOUZIN",
    power: 307387948,
  },
  {
    server: 36098,
    family: "Teamfr",
    power: 286596222,
  },
  {
    server: 36098,
    family: "MaxiChad",
    power: 281493642,
  },
  {
    server: 36098,
    family: "UnNianConnu",
    power: 280679615,
  },
  {
    server: 36099,
    family: "BLITZ",
    power: 1495468330,
  },
  {
    server: 36099,
    family: "NEXUS",
    power: 1493927240,
  },
  {
    server: 36099,
    family: "KCORP",
    power: 1309490805,
  },
  {
    server: 36099,
    family: "Respawn",
    power: 728527383,
  },
  {
    server: 36099,
    family: "Sous_Champi",
    power: 681500480,
  },
  {
    server: 36099,
    family: "freedom",
    power: 518094794,
  },
  {
    server: 36099,
    family: "TTAVDO",
    power: 508056562,
  },
  {
    server: 36099,
    family: "Bouyakasha",
    power: 448925570,
  },
  {
    server: 36099,
    family: "KCBLUE",
    power: 420429216,
  },
  {
    server: 36099,
    family: "FUJIWARA",
    power: 362266798,
  },
  {
    server: 36100,
    family: "LesTempliers",
    power: 1735489615,
  },
  {
    server: 36100,
    family: "CompteFan2Sapa",
    power: 1257638388,
  },
  {
    server: 36100,
    family: "Wolf",
    power: 1164376496,
  },
  {
    server: 36100,
    family: "FrenchFamily",
    power: 696822738,
  },
  {
    server: 36100,
    family: "MushroomOnTop",
    power: 595517868,
  },
  {
    server: 36100,
    family: "LesSamouraïs",
    power: 508187246,
  },
  {
    server: 36100,
    family: "La107",
    power: 439394186,
  },
  {
    server: 36100,
    family: "Saucisson",
    power: 438856696,
  },
  {
    server: 36100,
    family: "Zeus",
    power: 421625063,
  },
  {
    server: 36100,
    family: "Hacoeur",
    power: 343690881,
  },
  {
    server: 36101,
    family: "Heaven",
    power: 1618810870,
  },
  {
    server: 36101,
    family: "FullControl",
    power: 1344445475,
  },
  {
    server: 36101,
    family: "KCrapules",
    power: 1171003899,
  },
  {
    server: 36101,
    family: "ChamPirate",
    power: 824214412,
  },
  {
    server: 36101,
    family: "La_Main_Noire",
    power: 487865944,
  },
  {
    server: 36101,
    family: "HighCarry",
    power: 375411957,
  },
  {
    server: 36101,
    family: "champifrance",
    power: 368554125,
  },
  {
    server: 36101,
    family: "Bienvenue",
    power: 346495216,
  },
  {
    server: 36101,
    family: "SorryToBeGod",
    power: 344037168,
  },
  {
    server: 36101,
    family: "GzCorp",
    power: 312047908,
  },
  {
    server: 36102,
    family: "Infamy",
    power: 1599645101,
  },
  {
    server: 36102,
    family: "LVAS",
    power: 1276260558,
  },
  {
    server: 36102,
    family: "kcclan",
    power: 1259780108,
  },
  {
    server: 36102,
    family: "Olympus",
    power: 1006228365,
  },
  {
    server: 36102,
    family: "Team_Picchu",
    power: 702333624,
  },
  {
    server: 36102,
    family: "AkyChampi",
    power: 660083722,
  },
  {
    server: 36102,
    family: "Cordyceps",
    power: 558468605,
  },
  {
    server: 36102,
    family: "MiseEnBouche",
    power: 485547460,
  },
  {
    server: 36102,
    family: "Mushroom",
    power: 423066373,
  },
  {
    server: 36102,
    family: "DarkChamp",
    power: 378849208,
  },
  {
    server: 36103,
    family: "IMMORTAL",
    power: 1578711618,
  },
  {
    server: 36103,
    family: "SopEmpire",
    power: 1297364013,
  },
  {
    server: 36103,
    family: "MORTAL",
    power: 1007902795,
  },
  {
    server: 36103,
    family: "Malveillance",
    power: 658803806,
  },
  {
    server: 36103,
    family: "KARMINECORP",
    power: 503103670,
  },
  {
    server: 36103,
    family: "LaTaverne",
    power: 455999565,
  },
  {
    server: 36103,
    family: "teamFrance",
    power: 390052842,
  },
  {
    server: 36103,
    family: "GAVROCHE",
    power: 310546802,
  },
  {
    server: 36103,
    family: "Thx",
    power: 307603945,
  },
  {
    server: 36103,
    family: "toadsv2",
    power: 295468743,
  },
  {
    server: 36104,
    family: "ChatCarry",
    power: 1520605865,
  },
  {
    server: 36104,
    family: "LaConfrérie",
    power: 1378983678,
  },
  {
    server: 36104,
    family: "KCORP",
    power: 1357021752,
  },
  {
    server: 36104,
    family: "FranceTopFR",
    power: 797358740,
  },
  {
    server: 36104,
    family: "Lesking",
    power: 558187105,
  },
  {
    server: 36104,
    family: "BestFR",
    power: 509160142,
  },
  {
    server: 36104,
    family: "Nampignon",
    power: 444732086,
  },
  {
    server: 36104,
    family: "IVOLI",
    power: 434653265,
  },
  {
    server: 36104,
    family: "CanardHeureux",
    power: 353002895,
  },
  {
    server: 36104,
    family: "Midnight",
    power: 329888420,
  },
  {
    server: 36105,
    family: "Akatsukî",
    power: 1557457347,
  },
  {
    server: 36105,
    family: "KarmineCorp",
    power: 1189911453,
  },
  {
    server: 36105,
    family: "Croustillants",
    power: 1173228516,
  },
  {
    server: 36105,
    family: "IreliaMains",
    power: 689550726,
  },
  {
    server: 36105,
    family: "FARFADETS",
    power: 678830287,
  },
  {
    server: 36105,
    family: "Kankrouth",
    power: 537036363,
  },
  {
    server: 36105,
    family: "KCORP",
    power: 497875750,
  },
  {
    server: 36105,
    family: "1STI2D",
    power: 393834803,
  },
  {
    server: 36105,
    family: "Malveillance",
    power: 362239600,
  },
  {
    server: 36105,
    family: "ASGARD",
    power: 339929554,
  },
  {
    server: 36106,
    family: "Bonobo",
    power: 1445144577,
  },
  {
    server: 36106,
    family: "LaDictature",
    power: 1182648261,
  },
  {
    server: 36106,
    family: "LesCopains",
    power: 1170783092,
  },
  {
    server: 36106,
    family: "SainteKarmine",
    power: 589675753,
  },
  {
    server: 36106,
    family: "LEGENDS",
    power: 544493191,
  },
  {
    server: 36106,
    family: "Champipignouf",
    power: 428026461,
  },
  {
    server: 36106,
    family: "LaZone",
    power: 349564690,
  },
  {
    server: 36106,
    family: "FrenchBeast",
    power: 307102351,
  },
  {
    server: 36106,
    family: "nulnasu",
    power: 287190869,
  },
  {
    server: 36106,
    family: "AuxEnfers",
    power: 229425406,
  },
  {
    server: 36107,
    family: "Matrice",
    power: 1308859273,
  },
  {
    server: 36107,
    family: "Mushle",
    power: 928745656,
  },
  {
    server: 36107,
    family: "Phœnix",
    power: 775143049,
  },
  {
    server: 36107,
    family: "Hyrule",
    power: 544999358,
  },
  {
    server: 36107,
    family: "BalladeBoisée",
    power: 526790334,
  },
  {
    server: 36107,
    family: "Grofiac",
    power: 443080188,
  },
  {
    server: 36107,
    family: "LeCacaMiam",
    power: 427918653,
  },
  {
    server: 36107,
    family: "Champicards",
    power: 405139913,
  },
  {
    server: 36107,
    family: "UltraKC",
    power: 381076672,
  },
  {
    server: 36107,
    family: "UltraM8",
    power: 269696210,
  },
  {
    server: 36108,
    family: "Metronom",
    power: 1505828344,
  },
  {
    server: 36108,
    family: "CaraChimay",
    power: 1107289842,
  },
  {
    server: 36108,
    family: "Amanitemouche",
    power: 1080219620,
  },
  {
    server: 36108,
    family: "LEC2025",
    power: 774796584,
  },
  {
    server: 36108,
    family: "ChampiGang",
    power: 561984602,
  },
  {
    server: 36108,
    family: "Fr",
    power: 399939624,
  },
  {
    server: 36108,
    family: "PapyPirate",
    power: 398737045,
  },
  {
    server: 36108,
    family: "FrenchCrew",
    power: 310868855,
  },
  {
    server: 36108,
    family: "Olympe",
    power: 309906581,
  },
  {
    server: 36108,
    family: "Chill",
    power: 302551699,
  },
  {
    server: 36109,
    family: "Invictus",
    power: 1429107373,
  },
  {
    server: 36109,
    family: "Reborn",
    power: 1227864414,
  },
  {
    server: 36109,
    family: "V2",
    power: 1218508998,
  },
  {
    server: 36109,
    family: "Nekocompagnie",
    power: 777339423,
  },
  {
    server: 36109,
    family: "Griffon_Ardent",
    power: 618534153,
  },
  {
    server: 36109,
    family: "Tokyo",
    power: 381787265,
  },
  {
    server: 36109,
    family: "LaPiraterie",
    power: 381080022,
  },
  {
    server: 36109,
    family: "francais",
    power: 332347131,
  },
  {
    server: 36109,
    family: "Sheeesh",
    power: 311506589,
  },
  {
    server: 36109,
    family: "lesfrancais",
    power: 286821978,
  },
  {
    server: 36110,
    family: "NEMESIS",
    power: 1417971055,
  },
  {
    server: 36110,
    family: "ICEFIRE",
    power: 1242718979,
  },
  {
    server: 36110,
    family: "AKATSUKI",
    power: 1119152359,
  },
  {
    server: 36110,
    family: "MADNESS",
    power: 626129849,
  },
  {
    server: 36110,
    family: "Fraudz",
    power: 377720077,
  },
  {
    server: 36110,
    family: "Destiny",
    power: 369051784,
  },
  {
    server: 36110,
    family: "ShadowGarden",
    power: 357229113,
  },
  {
    server: 36110,
    family: "TopFrance",
    power: 297304851,
  },
  {
    server: 36110,
    family: "Petitlapinroux",
    power: 254919489,
  },
  {
    server: 36110,
    family: "Darkshroom",
    power: 243827931,
  },
  {
    server: 36111,
    family: "scars",
    power: 1449999064,
  },
  {
    server: 36111,
    family: "Legitima",
    power: 1098207446,
  },
  {
    server: 36111,
    family: "Urukawaï",
    power: 836487490,
  },
  {
    server: 36111,
    family: "Ladictatur",
    power: 522244280,
  },
  {
    server: 36111,
    family: "Hakaifc",
    power: 488111112,
  },
  {
    server: 36111,
    family: "DIAMOND",
    power: 458437475,
  },
  {
    server: 36111,
    family: "FR_Gang",
    power: 391312423,
  },
  {
    server: 36111,
    family: "warsearfr",
    power: 379943194,
  },
  {
    server: 36111,
    family: "French_Frayeur",
    power: 321622168,
  },
  {
    server: 36111,
    family: "UnionFr",
    power: 298411156,
  },
  {
    server: 36112,
    family: "GetTrapped",
    power: 1517302784,
  },
  {
    server: 36112,
    family: "Aegis",
    power: 1216621336,
  },
  {
    server: 36112,
    family: "Flowaves",
    power: 1125089602,
  },
  {
    server: 36112,
    family: "Aegis2",
    power: 611499579,
  },
  {
    server: 36112,
    family: "Spartiates",
    power: 318659047,
  },
  {
    server: 36112,
    family: "S06SU7",
    power: 306875614,
  },
  {
    server: 36112,
    family: "Symposium",
    power: 271073877,
  },
  {
    server: 36112,
    family: "TeamEQ",
    power: 266155947,
  },
  {
    server: 36112,
    family: "FUZION",
    power: 245450025,
  },
  {
    server: 36112,
    family: "Zeubi_mouche",
    power: 236918027,
  },
  {
    server: 36113,
    family: "Shroomies",
    power: 1440689694,
  },
  {
    server: 36113,
    family: "Nebula",
    power: 1219734625,
  },
  {
    server: 36113,
    family: "Onigashima",
    power: 1090451368,
  },
  {
    server: 36113,
    family: "Mushroom",
    power: 449148704,
  },
  {
    server: 36113,
    family: "FamilyTeam",
    power: 447086394,
  },
  {
    server: 36113,
    family: "FairyTail",
    power: 339217219,
  },
  {
    server: 36113,
    family: "Quintessence",
    power: 336125525,
  },
  {
    server: 36113,
    family: "Bluewall",
    power: 335360650,
  },
  {
    server: 36113,
    family: "Fairy_tail",
    power: 315456701,
  },
  {
    server: 36113,
    family: "Neptune",
    power: 311909405,
  },
  {
    server: 36114,
    family: "Olympe",
    power: 1348574133,
  },
  {
    server: 36114,
    family: "BlackCats",
    power: 1347859280,
  },
  {
    server: 36114,
    family: "Ahjin",
    power: 711926563,
  },
  {
    server: 36114,
    family: "StarkFR",
    power: 476232675,
  },
  {
    server: 36114,
    family: "HanamiFr",
    power: 436362084,
  },
  {
    server: 36114,
    family: "Valhalla_Fr",
    power: 415853910,
  },
  {
    server: 36114,
    family: "Asgard",
    power: 356234102,
  },
  {
    server: 36114,
    family: "THEKING_FR",
    power: 318414738,
  },
  {
    server: 36114,
    family: "Perona",
    power: 314231141,
  },
  {
    server: 36114,
    family: "Ninja_Gang",
    power: 259439670,
  },
  {
    server: 36115,
    family: "LegendsUnion",
    power: 1453121407,
  },
  {
    server: 36115,
    family: "LegendsUnionII",
    power: 1051867399,
  },
  {
    server: 36115,
    family: "Phœnix",
    power: 1035387954,
  },
  {
    server: 36115,
    family: "LesChampikings",
    power: 593505374,
  },
  {
    server: 36115,
    family: "Jyvas",
    power: 524777479,
  },
  {
    server: 36115,
    family: "LBEB",
    power: 413910017,
  },
  {
    server: 36115,
    family: "RISE",
    power: 391917433,
  },
  {
    server: 36115,
    family: "Seedfamily",
    power: 376052737,
  },
  {
    server: 36115,
    family: "Mushiiies",
    power: 351679995,
  },
  {
    server: 36115,
    family: "France",
    power: 274722690,
  },
  {
    server: 36116,
    family: "TopFrance",
    power: 1235033975,
  },
  {
    server: 36116,
    family: "Mushiwara",
    power: 1164237526,
  },
  {
    server: 36116,
    family: "ShadowGarden",
    power: 1139558289,
  },
  {
    server: 36116,
    family: "KCDQ",
    power: 464936360,
  },
  {
    server: 36116,
    family: "FrenchChampi",
    power: 400967556,
  },
  {
    server: 36116,
    family: "PanamaBende",
    power: 367877610,
  },
  {
    server: 36116,
    family: "Outsider",
    power: 358605254,
  },
  {
    server: 36116,
    family: "TOP1France",
    power: 344488456,
  },
  {
    server: 36116,
    family: "TeamNinou",
    power: 325633452,
  },
  {
    server: 36116,
    family: "ChampiClan",
    power: 271377914,
  },
  {
    server: 36117,
    family: "Erezia",
    power: 1330234364,
  },
  {
    server: 36117,
    family: "LAB",
    power: 1220805303,
  },
  {
    server: 36117,
    family: "Method",
    power: 745032348,
  },
  {
    server: 36117,
    family: "LesTruffesFR",
    power: 373076761,
  },
  {
    server: 36117,
    family: "team_france",
    power: 360422824,
  },
  {
    server: 36117,
    family: "LAA",
    power: 353296032,
  },
  {
    server: 36117,
    family: "TousBienvenue",
    power: 307462210,
  },
  {
    server: 36117,
    family: "France",
    power: 305293595,
  },
  {
    server: 36117,
    family: "UltimeAlliance",
    power: 279934722,
  },
  {
    server: 36117,
    family: "EreziAcademy",
    power: 262855275,
  },
  {
    server: 36118,
    family: "JDF",
    power: 1279391815,
  },
  {
    server: 36118,
    family: "League",
    power: 1209816942,
  },
  {
    server: 36118,
    family: "GEARSECOND",
    power: 1192580823,
  },
  {
    server: 36118,
    family: "KONOHA",
    power: 428312541,
  },
  {
    server: 36118,
    family: "Champitox",
    power: 336275660,
  },
  {
    server: 36118,
    family: "Phoenyx",
    power: 331014148,
  },
  {
    server: 36118,
    family: "Mushleroom",
    power: 330589697,
  },
  {
    server: 36118,
    family: "Champomix",
    power: 326203434,
  },
  {
    server: 36118,
    family: "Ramen",
    power: 316067120,
  },
  {
    server: 36118,
    family: "Mugiwara",
    power: 294283173,
  },
  {
    server: 36119,
    family: "LÉGION",
    power: 1274026440,
  },
  {
    server: 36119,
    family: "AdAstra",
    power: 1186023131,
  },
  {
    server: 36119,
    family: "Fungi",
    power: 1015302156,
  },
  {
    server: 36119,
    family: "GOAT",
    power: 535376127,
  },
  {
    server: 36119,
    family: "Rêverie",
    power: 417361381,
  },
  {
    server: 36119,
    family: "Rookies",
    power: 335106654,
  },
  {
    server: 36119,
    family: "SiLuMa",
    power: 299048433,
  },
  {
    server: 36119,
    family: "Le_Toman",
    power: 296129251,
  },
  {
    server: 36119,
    family: "LégionAcademy",
    power: 276521871,
  },
  {
    server: 36119,
    family: "EA7",
    power: 263281192,
  },
  {
    server: 36120,
    family: "FrenchReborn",
    power: 1185074514,
  },
  {
    server: 36120,
    family: "LogHorizon",
    power: 1013719085,
  },
  {
    server: 36120,
    family: "ZaneXKCorp",
    power: 988850716,
  },
  {
    server: 36120,
    family: "Kinoko",
    power: 540786353,
  },
  {
    server: 36120,
    family: "MythFr",
    power: 466623094,
  },
  {
    server: 36120,
    family: "Konoha",
    power: 414436232,
  },
  {
    server: 36120,
    family: "KCorpB",
    power: 328384886,
  },
  {
    server: 36120,
    family: "couteau_suiss",
    power: 292693160,
  },
  {
    server: 36120,
    family: "Varois",
    power: 244379755,
  },
  {
    server: 36120,
    family: "TouttiFrotti",
    power: 229148508,
  },
  {
    server: 36121,
    family: "Jinxed",
    power: 1157696303,
  },
  {
    server: 36121,
    family: "NotLikeThem",
    power: 1107133055,
  },
  {
    server: 36121,
    family: "Hope",
    power: 654542908,
  },
  {
    server: 36121,
    family: "Ness",
    power: 552445824,
  },
  {
    server: 36121,
    family: "CouillesLanta",
    power: 400723293,
  },
  {
    server: 36121,
    family: "viking",
    power: 391022699,
  },
  {
    server: 36121,
    family: "Titan",
    power: 353701935,
  },
  {
    server: 36121,
    family: "Lesmoches",
    power: 325526014,
  },
  {
    server: 36121,
    family: "branlix2000",
    power: 281836841,
  },
  {
    server: 36121,
    family: "Konoha",
    power: 278041865,
  },
  {
    server: 36122,
    family: "TopFrance",
    power: 1220478241,
  },
  {
    server: 36122,
    family: "KC_CorP",
    power: 1109314112,
  },
  {
    server: 36122,
    family: "Feldbrau",
    power: 730554314,
  },
  {
    server: 36122,
    family: "La_familia",
    power: 438039208,
  },
  {
    server: 36122,
    family: "Neptunium",
    power: 367462555,
  },
  {
    server: 36122,
    family: "Hydrazil",
    power: 323016953,
  },
  {
    server: 36122,
    family: "LaFaille",
    power: 309371249,
  },
  {
    server: 36122,
    family: "Solglissant",
    power: 262579001,
  },
  {
    server: 36122,
    family: "France",
    power: 252536410,
  },
  {
    server: 36122,
    family: "Foot2Rue",
    power: 233470961,
  },
  {
    server: 36123,
    family: "Harmony",
    power: 1308649935,
  },
  {
    server: 36123,
    family: "Fungi",
    power: 1116092583,
  },
  {
    server: 36123,
    family: "Skuulll",
    power: 723926577,
  },
  {
    server: 36123,
    family: "JujutsuHight",
    power: 583016228,
  },
  {
    server: 36123,
    family: "Vital",
    power: 447649187,
  },
  {
    server: 36123,
    family: "KCFORCE",
    power: 329035063,
  },
  {
    server: 36123,
    family: "LesLouLoutes",
    power: 324596624,
  },
  {
    server: 36123,
    family: "Sbhfr",
    power: 300080186,
  },
  {
    server: 36123,
    family: "France",
    power: 296438345,
  },
  {
    server: 36123,
    family: "Champi2laGaler",
    power: 271267338,
  },
  {
    server: 36124,
    family: "Borz",
    power: 1165172780,
  },
  {
    server: 36124,
    family: "StellaR",
    power: 1069779275,
  },
  {
    server: 36124,
    family: "BrigadeFantome",
    power: 815982880,
  },
  {
    server: 36124,
    family: "QIN",
    power: 434286291,
  },
  {
    server: 36124,
    family: "Amnesia",
    power: 368077183,
  },
  {
    server: 36124,
    family: "StrongestMan",
    power: 313297621,
  },
  {
    server: 36124,
    family: "frérot",
    power: 282278463,
  },
  {
    server: 36124,
    family: "pasletemps",
    power: 275103144,
  },
  {
    server: 36124,
    family: "Devil’sFriend",
    power: 272813220,
  },
  {
    server: 36124,
    family: "GeekCorp",
    power: 242559370,
  },
  {
    server: 36125,
    family: "STAY",
    power: 1270081088,
  },
  {
    server: 36125,
    family: "Tatsuya",
    power: 1179823437,
  },
  {
    server: 36125,
    family: "PMU",
    power: 824818250,
  },
  {
    server: 36125,
    family: "BardellaFR",
    power: 413047088,
  },
  {
    server: 36125,
    family: "FreeLoot",
    power: 395214562,
  },
  {
    server: 36125,
    family: "BadBeach",
    power: 385143129,
  },
  {
    server: 36125,
    family: "TikyLovers",
    power: 287667028,
  },
  {
    server: 36125,
    family: "Fromage",
    power: 271999648,
  },
  {
    server: 36125,
    family: "Nova",
    power: 241957001,
  },
  {
    server: 36125,
    family: "NeverEnd",
    power: 239647316,
  },
  {
    server: 36126,
    family: "FRSH",
    power: 1228335694,
  },
  {
    server: 36126,
    family: "Teikō",
    power: 967273132,
  },
  {
    server: 36126,
    family: "Arise",
    power: 928047466,
  },
  {
    server: 36126,
    family: "GentleMates",
    power: 369925211,
  },
  {
    server: 36126,
    family: "beuvrages",
    power: 352040651,
  },
  {
    server: 36126,
    family: "LPF",
    power: 305057281,
  },
  {
    server: 36126,
    family: "TeamFightClub",
    power: 256728592,
  },
  {
    server: 36126,
    family: "Invictus",
    power: 220240107,
  },
  {
    server: 36126,
    family: "Addictif",
    power: 211009248,
  },
  {
    server: 36126,
    family: "PurpleAnchor",
    power: 207595067,
  },
  {
    server: 36127,
    family: "RACOONCITY",
    power: 1242364666,
  },
  {
    server: 36127,
    family: "Marchombres",
    power: 921912141,
  },
  {
    server: 36127,
    family: "FairyGarden",
    power: 837651997,
  },
  {
    server: 36127,
    family: "Badmushroom",
    power: 490216265,
  },
  {
    server: 36127,
    family: "frencharmy",
    power: 323570091,
  },
  {
    server: 36127,
    family: "farfadets",
    power: 290677877,
  },
  {
    server: 36127,
    family: "Potaitoz",
    power: 272992767,
  },
  {
    server: 36127,
    family: "Fuzion",
    power: 266592938,
  },
  {
    server: 36127,
    family: "Les_Sudistes",
    power: 249621425,
  },
  {
    server: 36127,
    family: "Bakaland",
    power: 229921925,
  },
  {
    server: 36128,
    family: "Kings",
    power: 1096532241,
  },
  {
    server: 36128,
    family: "꧁Ølympe꧂",
    power: 1047323741,
  },
  {
    server: 36128,
    family: "OXYMORE",
    power: 665433896,
  },
  {
    server: 36128,
    family: "Valhalla",
    power: 439483621,
  },
  {
    server: 36128,
    family: "KCORP",
    power: 279209939,
  },
  {
    server: 36128,
    family: "Saiyanchampy",
    power: 250289705,
  },
  {
    server: 36128,
    family: "Aogiri",
    power: 228444492,
  },
  {
    server: 36128,
    family: "Ramen",
    power: 212381654,
  },
  {
    server: 36128,
    family: "royalmush",
    power: 202743780,
  },
  {
    server: 36128,
    family: "N’amour",
    power: 180575679,
  },
  {
    server: 36129,
    family: "Infïnïty",
    power: 1193559379,
  },
  {
    server: 36129,
    family: "AhJin",
    power: 871744841,
  },
  {
    server: 36129,
    family: "JustDance",
    power: 711311189,
  },
  {
    server: 36129,
    family: "Mushgroom",
    power: 410410887,
  },
  {
    server: 36129,
    family: "La_famille",
    power: 255492197,
  },
  {
    server: 36129,
    family: "Toman",
    power: 235961401,
  },
  {
    server: 36129,
    family: "Chepagro",
    power: 221521543,
  },
  {
    server: 36129,
    family: "Millénium",
    power: 216412812,
  },
  {
    server: 36129,
    family: "Reborn",
    power: 191235279,
  },
  {
    server: 36129,
    family: "GAYS",
    power: 167516338,
  },
  {
    server: 36130,
    family: "Mayhem",
    power: 1048223720,
  },
  {
    server: 36130,
    family: "APES",
    power: 973576095,
  },
  {
    server: 36130,
    family: "Flex",
    power: 713751789,
  },
  {
    server: 36130,
    family: "FranceAlpha",
    power: 405350034,
  },
  {
    server: 36130,
    family: "Exodia",
    power: 372856762,
  },
  {
    server: 36130,
    family: "Dynastie",
    power: 276676211,
  },
  {
    server: 36130,
    family: "Sakura",
    power: 236799428,
  },
  {
    server: 36130,
    family: "psilocybe",
    power: 227734235,
  },
  {
    server: 36130,
    family: "SoloLeveling",
    power: 203447761,
  },
  {
    server: 36130,
    family: "Sporetiates",
    power: 193577600,
  },
  {
    server: 36131,
    family: "Articssun",
    power: 974163877,
  },
  {
    server: 36131,
    family: "Nightguards",
    power: 972146485,
  },
  {
    server: 36131,
    family: "Rebirth",
    power: 969388730,
  },
  {
    server: 36131,
    family: "KCWIN",
    power: 388240828,
  },
  {
    server: 36131,
    family: "LeChenil",
    power: 328046676,
  },
  {
    server: 36131,
    family: "LaGrinta",
    power: 281563187,
  },
  {
    server: 36131,
    family: "lesbrascassé",
    power: 277829444,
  },
  {
    server: 36131,
    family: "LeCulteDuPain",
    power: 263351753,
  },
  {
    server: 36131,
    family: "LumberJack",
    power: 245073458,
  },
  {
    server: 36131,
    family: "SuperNova",
    power: 243014699,
  },
  {
    server: 36132,
    family: "Shinigami",
    power: 1202736876,
  },
  {
    server: 36132,
    family: "Kaos",
    power: 951649168,
  },
  {
    server: 36132,
    family: "Olympe",
    power: 626980622,
  },
  {
    server: 36132,
    family: "Valoris",
    power: 481689187,
  },
  {
    server: 36132,
    family: "ASGARD",
    power: 366017956,
  },
  {
    server: 36132,
    family: "LaCage",
    power: 257628775,
  },
  {
    server: 36132,
    family: "Asgard_Academy",
    power: 234791250,
  },
  {
    server: 36132,
    family: "Inactif",
    power: 230358983,
  },
  {
    server: 36132,
    family: "XCrewFrance",
    power: 227379158,
  },
  {
    server: 36132,
    family: "HARMONY",
    power: 207441628,
  },
  {
    server: 36133,
    family: "Ramen",
    power: 1031759850,
  },
  {
    server: 36133,
    family: "IMMANITY",
    power: 926858773,
  },
  {
    server: 36133,
    family: "SeinenKaisers",
    power: 556502308,
  },
  {
    server: 36133,
    family: "Olympe",
    power: 326411778,
  },
  {
    server: 36133,
    family: "wolfgang",
    power: 311472571,
  },
  {
    server: 36133,
    family: "EpicMush",
    power: 301224024,
  },
  {
    server: 36133,
    family: "MTX",
    power: 300264643,
  },
  {
    server: 36133,
    family: "Panthéon",
    power: 288473990,
  },
  {
    server: 36133,
    family: "Nightfall",
    power: 275404644,
  },
  {
    server: 36133,
    family: "UwU",
    power: 228760951,
  },
  {
    server: 36134,
    family: "LesKarps",
    power: 1051775629,
  },
  {
    server: 36134,
    family: "Akatsuki",
    power: 1003096996,
  },
  {
    server: 36134,
    family: "Mamamoo",
    power: 791160731,
  },
  {
    server: 36134,
    family: "LOS_HERMANOS",
    power: 296171370,
  },
  {
    server: 36134,
    family: "Nuage_rouge",
    power: 285727124,
  },
  {
    server: 36134,
    family: "CSB",
    power: 268513494,
  },
  {
    server: 36134,
    family: "fairytail",
    power: 258446564,
  },
  {
    server: 36134,
    family: "Slupe",
    power: 217157021,
  },
  {
    server: 36134,
    family: "NewHorizon",
    power: 212356853,
  },
  {
    server: 36134,
    family: "TotallySpies",
    power: 175738601,
  },
  {
    server: 36135,
    family: "Destiny",
    power: 716985539,
  },
  {
    server: 36135,
    family: "Célestes",
    power: 227318246,
  },
  {
    server: 36135,
    family: "Supremacy",
    power: 101386444,
  },
  {
    server: 36135,
    family: "FamilyHouse",
    power: 46064529,
  },
  {
    server: 36135,
    family: "Léboloss",
    power: 11262619,
  },
  {
    server: 36135,
    family: "odk",
    power: 2898661,
  },
  {
    server: 36135,
    family: "FurFamily",
    power: 1844543,
  },
  {
    server: 36135,
    family: "leveling",
    power: 1047895,
  },
  {
    server: 36135,
    family: "MTX",
    power: 348880,
  },
  {
    server: 36135,
    family: "Reimsdoigt",
    power: 0,
  },
  {
    server: 36136,
    family: "BHFamily",
    power: 1010762454,
  },
  {
    server: 36136,
    family: "LeTaureauNoir",
    power: 869084083,
  },
  {
    server: 36136,
    family: "Aozora",
    power: 474145325,
  },
  {
    server: 36136,
    family: "ElCartel",
    power: 374862977,
  },
  {
    server: 36136,
    family: "LeagueOfChampi",
    power: 339544902,
  },
  {
    server: 36136,
    family: "Vicking",
    power: 256323369,
  },
  {
    server: 36136,
    family: "Amygdales",
    power: 241098313,
  },
  {
    server: 36136,
    family: "FishAndTurtule",
    power: 213582516,
  },
  {
    server: 36136,
    family: "L’araignée",
    power: 192308777,
  },
  {
    server: 36136,
    family: "UNIS",
    power: 191212669,
  },
  {
    server: 36137,
    family: "Celestia",
    power: 1105695346,
  },
  {
    server: 36137,
    family: "TeamOmega",
    power: 814345319,
  },
  {
    server: 36137,
    family: "ChampiMagique",
    power: 657317228,
  },
  {
    server: 36137,
    family: "Akatsuki",
    power: 331676391,
  },
  {
    server: 36137,
    family: "Mystical",
    power: 311436811,
  },
  {
    server: 36137,
    family: "Gouffre",
    power: 285959985,
  },
  {
    server: 36137,
    family: "Foutrefous",
    power: 253288178,
  },
  {
    server: 36137,
    family: "Achanger",
    power: 227813201,
  },
  {
    server: 36137,
    family: "FCbrasCassés",
    power: 227186345,
  },
  {
    server: 36137,
    family: "Coup_D_Etat",
    power: 218618427,
  },
  {
    server: 36138,
    family: "AllStar",
    power: 1041513495,
  },
  {
    server: 36138,
    family: "Supremacy",
    power: 864999951,
  },
  {
    server: 36138,
    family: "Elysium",
    power: 591010836,
  },
  {
    server: 36138,
    family: "LP4H",
    power: 416787466,
  },
  {
    server: 36138,
    family: "Éclipse",
    power: 410324828,
  },
  {
    server: 36138,
    family: "LesVraisFr",
    power: 226215261,
  },
  {
    server: 36138,
    family: "Asgard",
    power: 209119900,
  },
  {
    server: 36138,
    family: "vjcjfudj",
    power: 207834382,
  },
  {
    server: 36138,
    family: "Fr",
    power: 206799624,
  },
  {
    server: 36138,
    family: "Vilipendeurs",
    power: 186514984,
  },
  {
    server: 36139,
    family: "Amanite",
    power: 1035936126,
  },
  {
    server: 36139,
    family: "LaSainteCB",
    power: 989579101,
  },
  {
    server: 36139,
    family: "MST",
    power: 462731284,
  },
  {
    server: 36139,
    family: "ITM",
    power: 265865326,
  },
  {
    server: 36139,
    family: "LPTM",
    power: 260036508,
  },
  {
    server: 36139,
    family: "VogueMerry",
    power: 255426227,
  },
  {
    server: 36139,
    family: "Regalia",
    power: 234880685,
  },
  {
    server: 36139,
    family: "WoofLand",
    power: 229590804,
  },
  {
    server: 36139,
    family: "BestMushroom",
    power: 228371812,
  },
  {
    server: 36139,
    family: "Batcave",
    power: 223869404,
  },
  {
    server: 36140,
    family: "McMush",
    power: 1017919056,
  },
  {
    server: 36140,
    family: "Champotes",
    power: 770470821,
  },
  {
    server: 36140,
    family: "Uni",
    power: 613859413,
  },
  {
    server: 36140,
    family: "Pasta",
    power: 298331340,
  },
  {
    server: 36140,
    family: "CramptesFamily",
    power: 284582817,
  },
  {
    server: 36140,
    family: "TikyTaka",
    power: 232667015,
  },
  {
    server: 36140,
    family: "TUTUTUDUM",
    power: 219440242,
  },
  {
    server: 36140,
    family: "Kaamelott",
    power: 193091886,
  },
  {
    server: 36140,
    family: "Ahjin",
    power: 187091630,
  },
  {
    server: 36140,
    family: "TaoFamilyFR",
    power: 184248436,
  },
  {
    server: 36141,
    family: "βeta",
    power: 877203708,
  },
  {
    server: 36141,
    family: "αlpha",
    power: 871332217,
  },
  {
    server: 36141,
    family: "EpicFail",
    power: 741686357,
  },
  {
    server: 36141,
    family: "French_pipo",
    power: 382681519,
  },
  {
    server: 36141,
    family: "KarmineCorp",
    power: 260711654,
  },
  {
    server: 36141,
    family: "Lesyakuzadu60",
    power: 232998133,
  },
  {
    server: 36141,
    family: "SCP",
    power: 191876441,
  },
  {
    server: 36141,
    family: "Oméga",
    power: 172901660,
  },
  {
    server: 36141,
    family: "TKO",
    power: 165738344,
  },
  {
    server: 36141,
    family: "Les_mages",
    power: 148828675,
  },
  {
    server: 36142,
    family: "Requiem",
    power: 931222714,
  },
  {
    server: 36142,
    family: "BountyCoco",
    power: 731364991,
  },
  {
    server: 36142,
    family: "LaYogaClub",
    power: 512814255,
  },
  {
    server: 36142,
    family: "Jungle",
    power: 313013727,
  },
  {
    server: 36142,
    family: "Phoenix",
    power: 292701952,
  },
  {
    server: 36142,
    family: "ToddLand",
    power: 242485719,
  },
  {
    server: 36142,
    family: "Renaissance",
    power: 235719744,
  },
  {
    server: 36142,
    family: "France",
    power: 203445447,
  },
  {
    server: 36142,
    family: "FrenchReborn",
    power: 195086166,
  },
  {
    server: 36142,
    family: "ctr",
    power: 151212021,
  },
  {
    server: 36143,
    family: "DtCrew",
    power: 670557840,
  },
  {
    server: 36143,
    family: "LesSentinelles",
    power: 621385411,
  },
  {
    server: 36143,
    family: "Noyaux",
    power: 384187236,
  },
  {
    server: 36143,
    family: "Shinseku",
    power: 243492311,
  },
  {
    server: 36143,
    family: "nightraid",
    power: 234588127,
  },
  {
    server: 36143,
    family: "ChampiGang",
    power: 202252821,
  },
  {
    server: 36143,
    family: "THC_ALPHA",
    power: 181434317,
  },
  {
    server: 36143,
    family: "ToxicosGarden",
    power: 178144374,
  },
  {
    server: 36143,
    family: "Moudugland",
    power: 165201146,
  },
  {
    server: 36143,
    family: "Outlast",
    power: 163863343,
  },
  {
    server: 36144,
    family: "WAB",
    power: 839209575,
  },
  {
    server: 36144,
    family: "mushroom",
    power: 678486190,
  },
  {
    server: 36144,
    family: "NightKids",
    power: 300041369,
  },
  {
    server: 36144,
    family: "FireForce",
    power: 260754758,
  },
  {
    server: 36144,
    family: "FrBest",
    power: 256382105,
  },
  {
    server: 36144,
    family: "France",
    power: 180848393,
  },
  {
    server: 36144,
    family: "Olympe",
    power: 177101801,
  },
  {
    server: 36144,
    family: "Inazuma",
    power: 175642155,
  },
  {
    server: 36144,
    family: "Exotique",
    power: 170996246,
  },
  {
    server: 36144,
    family: "MocheRoom",
    power: 156139721,
  },
  {
    server: 36145,
    family: "AKAtastrof",
    power: 603197557,
  },
  {
    server: 36145,
    family: "UNITY",
    power: 586025665,
  },
  {
    server: 36145,
    family: "LEGEND",
    power: 438683416,
  },
  {
    server: 36145,
    family: "coucoulenoir",
    power: 190916015,
  },
  {
    server: 36145,
    family: "TokyoGhoul",
    power: 182173613,
  },
  {
    server: 36145,
    family: "FrenchArmy",
    power: 180266232,
  },
  {
    server: 36145,
    family: "Viking",
    power: 160432371,
  },
  {
    server: 36145,
    family: "BoganLegacy",
    power: 127383055,
  },
  {
    server: 36145,
    family: "RoyaumeChampi",
    power: 116851554,
  },
  {
    server: 36145,
    family: "chapignouf",
    power: 114116102,
  },
  {
    server: 36146,
    family: "Saphir",
    power: 748220207,
  },
  {
    server: 36146,
    family: "SoloFamilly",
    power: 652123308,
  },
  {
    server: 36146,
    family: "PrimosAncestro",
    power: 557123385,
  },
  {
    server: 36146,
    family: "Mugiwara",
    power: 179057323,
  },
  {
    server: 36146,
    family: "Kingdom",
    power: 173725265,
  },
  {
    server: 36146,
    family: "ILLUMINATEAM",
    power: 145824075,
  },
  {
    server: 36146,
    family: "BloodMoon",
    power: 142047290,
  },
  {
    server: 36146,
    family: "Prospector",
    power: 135690289,
  },
  {
    server: 36146,
    family: "DECIMUSH",
    power: 127656236,
  },
  {
    server: 36146,
    family: "Mininoob",
    power: 121521814,
  },
  {
    server: 36147,
    family: "Lightning",
    power: 771628716,
  },
  {
    server: 36147,
    family: "Meeting",
    power: 551751135,
  },
  {
    server: 36147,
    family: "LesRatz",
    power: 549946956,
  },
  {
    server: 36147,
    family: "Frenchteam",
    power: 219007481,
  },
  {
    server: 36147,
    family: "PeachCastle",
    power: 171973493,
  },
  {
    server: 36147,
    family: "Champitop",
    power: 170292721,
  },
  {
    server: 36147,
    family: "KcBelloBito",
    power: 150344971,
  },
  {
    server: 36147,
    family: "EpsyloneFR",
    power: 147316896,
  },
  {
    server: 36147,
    family: "mugiwara",
    power: 126794673,
  },
  {
    server: 36147,
    family: "Monkeys",
    power: 124989623,
  },
  {
    server: 36148,
    family: "Solana",
    power: 718340155,
  },
  {
    server: 36148,
    family: "Alcatom",
    power: 582283719,
  },
  {
    server: 36148,
    family: "Ligue_of_42",
    power: 428894509,
  },
  {
    server: 36148,
    family: "GigaNoob",
    power: 213871883,
  },
  {
    server: 36148,
    family: "GrosDCorp",
    power: 177760156,
  },
  {
    server: 36148,
    family: "Narva",
    power: 145252612,
  },
  {
    server: 36148,
    family: "Konoha",
    power: 143312038,
  },
  {
    server: 36148,
    family: "FranceTANOS",
    power: 138658457,
  },
  {
    server: 36148,
    family: "Val_de_loue",
    power: 126453449,
  },
  {
    server: 36148,
    family: "Légende",
    power: 122985928,
  },
  {
    server: 36149,
    family: "Mekhail",
    power: 679239551,
  },
  {
    server: 36149,
    family: "SLAYERS",
    power: 593804596,
  },
  {
    server: 36149,
    family: "Azuryte",
    power: 523414825,
  },
  {
    server: 36149,
    family: "Pupuce",
    power: 178834215,
  },
  {
    server: 36149,
    family: "frero59",
    power: 135213635,
  },
  {
    server: 36149,
    family: "Dynastie",
    power: 122821140,
  },
  {
    server: 36149,
    family: "rx3skyy",
    power: 122501693,
  },
  {
    server: 36149,
    family: "Gothesis",
    power: 114601570,
  },
  {
    server: 36149,
    family: "ZéphyrFr",
    power: 109258411,
  },
  {
    server: 36149,
    family: "Talentscelest",
    power: 108221036,
  },
  {
    server: 36150,
    family: "Olympe",
    power: 665062080,
  },
  {
    server: 36150,
    family: "Phénix",
    power: 563521305,
  },
  {
    server: 36150,
    family: "Legacy",
    power: 413982453,
  },
  {
    server: 36150,
    family: "Sporo",
    power: 157178181,
  },
  {
    server: 36150,
    family: "champirate",
    power: 117247434,
  },
  {
    server: 36150,
    family: "Cèpes_éclatés",
    power: 108628106,
  },
  {
    server: 36150,
    family: "Mortem",
    power: 108200249,
  },
  {
    server: 36150,
    family: "Champfarcis",
    power: 106116348,
  },
  {
    server: 36150,
    family: "Les_coyote",
    power: 102070322,
  },
  {
    server: 36150,
    family: "geek",
    power: 97029060,
  },
  {
    server: 36151,
    family: "CARAVANE2DJO",
    power: 611833513,
  },
  {
    server: 36151,
    family: "FreshFrench",
    power: 470972746,
  },
  {
    server: 36151,
    family: "CrystalTM",
    power: 448430247,
  },
  {
    server: 36151,
    family: "LesNoiraudes",
    power: 148253896,
  },
  {
    server: 36151,
    family: "frenchclub",
    power: 113611888,
  },
  {
    server: 36151,
    family: "BurgerKing",
    power: 106537803,
  },
  {
    server: 36151,
    family: "KodaGang",
    power: 95840084,
  },
  {
    server: 36151,
    family: "Pupuce",
    power: 93668129,
  },
  {
    server: 36151,
    family: "mushifr",
    power: 91004110,
  },
  {
    server: 36151,
    family: "WatiBg",
    power: 84635709,
  },
  {
    server: 36152,
    family: "Olympe",
    power: 448842932,
  },
  {
    server: 36152,
    family: "kumonuage",
    power: 197858071,
  },
  {
    server: 36152,
    family: "Mood",
    power: 87200574,
  },
  {
    server: 36152,
    family: "Mushrooms",
    power: 0,
  },
  {
    server: 36152,
    family: "G",
    power: 0,
  },
  {
    server: 36152,
    family: "mastercorp",
    power: 0,
  },
  {
    server: 36152,
    family: "Valhalla",
    power: 0,
  },
  {
    server: 36152,
    family: "RedoOfHealer",
    power: 0,
  },
  {
    server: 36152,
    family: "xahsksosyzvdls",
    power: 0,
  },
  {
    server: 36152,
    family: "mousquetaires",
    power: 0,
  },
  {
    server: 36153,
    family: "Legends",
    power: 565355013,
  },
  {
    server: 36153,
    family: "Noxus",
    power: 178668983,
  },
  {
    server: 36153,
    family: "Dinasty",
    power: 171416075,
  },
  {
    server: 36153,
    family: "Warriors",
    power: 0,
  },
  {
    server: 36153,
    family: "SonsofAnarchy",
    power: 0,
  },
  {
    server: 36153,
    family: "ElitePaytoWin",
    power: 0,
  },
  {
    server: 36153,
    family: "Goleme",
    power: 0,
  },
  {
    server: 36153,
    family: "Totolototete",
    power: 0,
  },
  {
    server: 36153,
    family: "Jamesondorkel6",
    power: 0,
  },
  {
    server: 36153,
    family: "SLAYER",
    power: 0,
  },
  {
    server: 42001,
    family: "espada",
    power: 1740159342,
  },
  {
    server: 42001,
    family: "NORTH",
    power: 1685759619,
  },
  {
    server: 42001,
    family: "Mushrooms",
    power: 652744977,
  },
  {
    server: 42001,
    family: "_BLACK_ORDER_",
    power: 344252774,
  },
  {
    server: 42001,
    family: "МухоМор",
    power: 316243067,
  },
  {
    server: 42001,
    family: "RUSSIA",
    power: 299740677,
  },
  {
    server: 42001,
    family: "Gods_Cat",
    power: 173619481,
  },
  {
    server: 42001,
    family: "EMziR",
    power: 171183921,
  },
  {
    server: 42001,
    family: "АкадемкаEspada",
    power: 170444928,
  },
  {
    server: 42001,
    family: "Грибнойсуп",
    power: 157298834,
  },
  {
    server: 42002,
    family: "Россия",
    power: 1514142526,
  },
  {
    server: 42002,
    family: "Mushrooms",
    power: 1167600762,
  },
  {
    server: 42002,
    family: "Russia",
    power: 401905468,
  },
  {
    server: 42002,
    family: "NumberOne",
    power: 267884546,
  },
  {
    server: 42002,
    family: "ᴍᴀɢɪᴄ",
    power: 169321733,
  },
  {
    server: 42002,
    family: "Best_Mushroom",
    power: 140371712,
  },
  {
    server: 42002,
    family: "Spiders",
    power: 135255140,
  },
  {
    server: 42002,
    family: "Avangard",
    power: 120167241,
  },
  {
    server: 42002,
    family: "Par",
    power: 99755974,
  },
  {
    server: 42002,
    family: "Русские",
    power: 62247561,
  },
  {
    server: 42003,
    family: "БРАТСТВО",
    power: 1314379652,
  },
  {
    server: 42003,
    family: "FirstPlace",
    power: 1165363888,
  },
  {
    server: 42003,
    family: "Русские",
    power: 748590574,
  },
  {
    server: 42003,
    family: "WORLD",
    power: 219033580,
  },
  {
    server: 42003,
    family: "3Gend",
    power: 187882187,
  },
  {
    server: 42003,
    family: "Kazakhstan",
    power: 138492868,
  },
  {
    server: 42003,
    family: "ArmyRussian",
    power: 129416294,
  },
  {
    server: 42003,
    family: "Шашлычок",
    power: 118555433,
  },
  {
    server: 42003,
    family: "Миротворцы",
    power: 111489819,
  },
  {
    server: 42003,
    family: "KAZAKHSTAN2",
    power: 59603403,
  },
  {
    server: 42004,
    family: "Sabbath",
    power: 1608979054,
  },
  {
    server: 42004,
    family: "T_HIGHER_T",
    power: 892494603,
  },
  {
    server: 42004,
    family: "HIGHER2",
    power: 555771370,
  },
  {
    server: 42004,
    family: "Силовички",
    power: 315146580,
  },
  {
    server: 42004,
    family: "ХРАМ_НАЗАРИК",
    power: 284975922,
  },
  {
    server: 42004,
    family: "Russia",
    power: 210551938,
  },
  {
    server: 42004,
    family: "DEPDRAGON",
    power: 208336776,
  },
  {
    server: 42004,
    family: "Дружина",
    power: 162949651,
  },
  {
    server: 42004,
    family: "Belarus",
    power: 127625265,
  },
  {
    server: 42004,
    family: "aristocrats",
    power: 73941580,
  },
  {
    server: 42005,
    family: "ELITTA",
    power: 1519506747,
  },
  {
    server: 42005,
    family: "Odium",
    power: 1041896630,
  },
  {
    server: 42005,
    family: "Пустые",
    power: 848475484,
  },
  {
    server: 42005,
    family: "6PM",
    power: 274601311,
  },
  {
    server: 42005,
    family: "Грибники",
    power: 211419299,
  },
  {
    server: 42005,
    family: "BURN",
    power: 144147932,
  },
  {
    server: 42005,
    family: "Afterlight",
    power: 105598456,
  },
  {
    server: 42005,
    family: "Sharma",
    power: 39513956,
  },
  {
    server: 42005,
    family: "SMERT",
    power: 35974512,
  },
  {
    server: 42005,
    family: "Реинкарнация",
    power: 29123307,
  },
  {
    server: 42006,
    family: "INSANE",
    power: 1656112588,
  },
  {
    server: 42006,
    family: "XCorurage",
    power: 1094420871,
  },
  {
    server: 42006,
    family: "Dark■Angels",
    power: 831101992,
  },
  {
    server: 42006,
    family: "ПодГрибами",
    power: 369447504,
  },
  {
    server: 42006,
    family: "ᴋᴀᴛᴏɴ",
    power: 333574465,
  },
  {
    server: 42006,
    family: "Царство",
    power: 285095179,
  },
  {
    server: 42006,
    family: "Darkness",
    power: 275719076,
  },
  {
    server: 42006,
    family: "АД_ПРЕИСПОДНЯ",
    power: 174499180,
  },
  {
    server: 42006,
    family: "FrozyGameYT",
    power: 133613720,
  },
  {
    server: 42006,
    family: "InceptionHub",
    power: 86052051,
  },
  {
    server: 42007,
    family: "EternalKnights",
    power: 1566040211,
  },
  {
    server: 42007,
    family: "ЭлизиуМ",
    power: 881190268,
  },
  {
    server: 42007,
    family: "Pawuchki",
    power: 692908299,
  },
  {
    server: 42007,
    family: "Урал",
    power: 575229350,
  },
  {
    server: 42007,
    family: "Чаепитие",
    power: 532131548,
  },
  {
    server: 42007,
    family: "Russia",
    power: 206258113,
  },
  {
    server: 42007,
    family: "АНИМЕШНИКИ",
    power: 190346772,
  },
  {
    server: 42007,
    family: "чисто_топ_клан",
    power: 172815528,
  },
  {
    server: 42007,
    family: "Альянс",
    power: 167817714,
  },
  {
    server: 42007,
    family: "REDEYES",
    power: 153157816,
  },
  {
    server: 42008,
    family: "9CirclesOfHell",
    power: 1627822523,
  },
  {
    server: 42008,
    family: "Spirit",
    power: 1372068786,
  },
  {
    server: 42008,
    family: "Кубничка",
    power: 804624605,
  },
  {
    server: 42008,
    family: "MidnightBeaver",
    power: 361341168,
  },
  {
    server: 42008,
    family: "Hell",
    power: 323470708,
  },
  {
    server: 42008,
    family: "Cerberus",
    power: 240133821,
  },
  {
    server: 42008,
    family: "Неизвестность",
    power: 228559758,
  },
  {
    server: 42008,
    family: "Arctic",
    power: 207092592,
  },
  {
    server: 42008,
    family: "Lazur",
    power: 173566951,
  },
  {
    server: 42008,
    family: "konoha",
    power: 128051514,
  },
  {
    server: 42009,
    family: "฿ESHKA",
    power: 1808578362,
  },
  {
    server: 42009,
    family: "24ﾉ7",
    power: 1196110147,
  },
  {
    server: 42009,
    family: "SHK",
    power: 770955572,
  },
  {
    server: 42009,
    family: "ПокойХаоса",
    power: 497058467,
  },
  {
    server: 42009,
    family: "Game_Over",
    power: 325058314,
  },
  {
    server: 42009,
    family: "Лисий_Храм",
    power: 307813595,
  },
  {
    server: 42009,
    family: "ГрибоЕДЫ",
    power: 246071269,
  },
  {
    server: 42009,
    family: "Zero",
    power: 217258344,
  },
  {
    server: 42009,
    family: "HypeTrain",
    power: 170872515,
  },
  {
    server: 42009,
    family: "GameOver",
    power: 164252515,
  },
  {
    server: 42010,
    family: "Shadow",
    power: 1548592701,
  },
  {
    server: 42010,
    family: "MADNESS",
    power: 1499002376,
  },
  {
    server: 42010,
    family: "Sankt_Legion",
    power: 705971834,
  },
  {
    server: 42010,
    family: "InTeam",
    power: 480113572,
  },
  {
    server: 42010,
    family: "СССР",
    power: 413171151,
  },
  {
    server: 42010,
    family: "котики",
    power: 337133598,
  },
  {
    server: 42010,
    family: "Chaos",
    power: 287898461,
  },
  {
    server: 42010,
    family: "Alfa",
    power: 186598598,
  },
  {
    server: 42010,
    family: "ШирайРю",
    power: 178214412,
  },
  {
    server: 42010,
    family: "Russian",
    power: 63166413,
  },
  {
    server: 42011,
    family: "Ragnarok",
    power: 1740721017,
  },
  {
    server: 42011,
    family: "FoRFuN",
    power: 1208088046,
  },
  {
    server: 42011,
    family: "GoD",
    power: 824973838,
  },
  {
    server: 42011,
    family: "Слышу_ZoV",
    power: 514745511,
  },
  {
    server: 42011,
    family: "НегрыВПрипяти",
    power: 395718249,
  },
  {
    server: 42011,
    family: "SeRaTHiM",
    power: 380005128,
  },
  {
    server: 42011,
    family: "грибной_суп",
    power: 302811182,
  },
  {
    server: 42011,
    family: "joydivision",
    power: 235194862,
  },
  {
    server: 42011,
    family: "Тамплиеры",
    power: 212245871,
  },
  {
    server: 42011,
    family: "КомитетЪ",
    power: 206087340,
  },
  {
    server: 42012,
    family: "Семья",
    power: 1346479368,
  },
  {
    server: 42012,
    family: "Omega",
    power: 1143843062,
  },
  {
    server: 42012,
    family: "UTOPIA",
    power: 350274334,
  },
  {
    server: 42012,
    family: "PANDORA",
    power: 313925651,
  },
  {
    server: 42012,
    family: "GODS",
    power: 266217288,
  },
  {
    server: 42012,
    family: "BezDonata",
    power: 264643916,
  },
  {
    server: 42012,
    family: "Evil",
    power: 259286017,
  },
  {
    server: 42012,
    family: "кугуар",
    power: 247689742,
  },
  {
    server: 42012,
    family: "Башня_Магии",
    power: 233142710,
  },
  {
    server: 42012,
    family: "LegionOfDoom",
    power: 222648740,
  },
  {
    server: 42013,
    family: "Фистоболс",
    power: 1593947722,
  },
  {
    server: 42013,
    family: "ForgottenWorld",
    power: 1072417957,
  },
  {
    server: 42013,
    family: "Evil",
    power: 741358496,
  },
  {
    server: 42013,
    family: "Dragon",
    power: 478135503,
  },
  {
    server: 42013,
    family: "WaGneR",
    power: 340046977,
  },
  {
    server: 42013,
    family: "Crocodiles",
    power: 311267436,
  },
  {
    server: 42013,
    family: "RuSSkullS",
    power: 288388839,
  },
  {
    server: 42013,
    family: "дракон",
    power: 262604443,
  },
  {
    server: 42013,
    family: "ZBS",
    power: 251033806,
  },
  {
    server: 42013,
    family: "КотятьяНорка",
    power: 240726205,
  },
  {
    server: 42014,
    family: "Gods_of_Chaos",
    power: 1367553725,
  },
  {
    server: 42014,
    family: "MidnightBobr",
    power: 1175170294,
  },
  {
    server: 42014,
    family: "DemonKings",
    power: 1016322860,
  },
  {
    server: 42014,
    family: "Котлетосы",
    power: 423534894,
  },
  {
    server: 42014,
    family: "Грибочки",
    power: 351060443,
  },
  {
    server: 42014,
    family: "SanPees",
    power: 295803438,
  },
  {
    server: 42014,
    family: "HuskiEAsports",
    power: 246357909,
  },
  {
    server: 42014,
    family: "БуйныеГрибы",
    power: 243687150,
  },
  {
    server: 42014,
    family: "Империя",
    power: 243102107,
  },
  {
    server: 42014,
    family: "Поганки",
    power: 216952988,
  },
  {
    server: 42015,
    family: "Спирит",
    power: 1540289664,
  },
  {
    server: 42015,
    family: "么ＯＬＹＭＰＵＳ",
    power: 1045420580,
  },
  {
    server: 42015,
    family: "Черный_Клевер",
    power: 815258169,
  },
  {
    server: 42015,
    family: "⸎ꁒꐇꌚꑛ꒓ꆂꆂꁒꌚ⸎",
    power: 642375395,
  },
  {
    server: 42015,
    family: "Гильдия",
    power: 541293695,
  },
  {
    server: 42015,
    family: "IceCool",
    power: 437280306,
  },
  {
    server: 42015,
    family: "Legion",
    power: 284221304,
  },
  {
    server: 42015,
    family: "ЛисийДом",
    power: 275653975,
  },
  {
    server: 42015,
    family: "ДОВОД",
    power: 262841802,
  },
  {
    server: 42015,
    family: "Город_Грехов",
    power: 207897545,
  },
  {
    server: 42016,
    family: "SinsFamily",
    power: 1367589213,
  },
  {
    server: 42016,
    family: "Despot",
    power: 1147336872,
  },
  {
    server: 42016,
    family: "НеБеСа",
    power: 787190916,
  },
  {
    server: 42016,
    family: "Sparta",
    power: 590471370,
  },
  {
    server: 42016,
    family: "zavoevatelu",
    power: 452722224,
  },
  {
    server: 42016,
    family: "Samoxa_11_RUS",
    power: 283442912,
  },
  {
    server: 42016,
    family: "Пустые",
    power: 256132348,
  },
  {
    server: 42016,
    family: "PoXyIsT",
    power: 194707524,
  },
  {
    server: 42016,
    family: "Грибочкино",
    power: 175537183,
  },
  {
    server: 42016,
    family: "Цукенг",
    power: 153913384,
  },
  {
    server: 42017,
    family: "Espada",
    power: 1603566543,
  },
  {
    server: 42017,
    family: "Espada_junior",
    power: 1120075666,
  },
  {
    server: 42017,
    family: "TeamVIBE",
    power: 697941936,
  },
  {
    server: 42017,
    family: "СПАРТА",
    power: 512003320,
  },
  {
    server: 42017,
    family: "LiberumAves",
    power: 305905349,
  },
  {
    server: 42017,
    family: "соло",
    power: 273567326,
  },
  {
    server: 42017,
    family: "ВСАДНИКИ³",
    power: 206903309,
  },
  {
    server: 42017,
    family: "SAD_TENEI",
    power: 205379572,
  },
  {
    server: 42017,
    family: "Fenix",
    power: 151217984,
  },
  {
    server: 42017,
    family: "Fox",
    power: 131908846,
  },
  {
    server: 42018,
    family: "ГрибноеДерево",
    power: 1441387047,
  },
  {
    server: 42018,
    family: "NachalnikiPMC",
    power: 1135064593,
  },
  {
    server: 42018,
    family: "Дерзкие",
    power: 1094881681,
  },
  {
    server: 42018,
    family: "Вавилон",
    power: 662401891,
  },
  {
    server: 42018,
    family: "Мухоморы",
    power: 385835607,
  },
  {
    server: 42018,
    family: "Царство_Грибов",
    power: 301594280,
  },
  {
    server: 42018,
    family: "Поганки",
    power: 251071181,
  },
  {
    server: 42018,
    family: "ГрибыСглазам",
    power: 208262770,
  },
  {
    server: 42018,
    family: "SubZero",
    power: 192642543,
  },
  {
    server: 42018,
    family: "Полумрак",
    power: 176109558,
  },
  {
    server: 42019,
    family: "DARKFOREST",
    power: 1499083808,
  },
  {
    server: 42019,
    family: "DARKFOREST₩2",
    power: 785552821,
  },
  {
    server: 42019,
    family: "Учиха",
    power: 415130134,
  },
  {
    server: 42019,
    family: "GAMING",
    power: 387063100,
  },
  {
    server: 42019,
    family: "TRIADA",
    power: 377945871,
  },
  {
    server: 42019,
    family: "꧁Pride꧂",
    power: 368633137,
  },
  {
    server: 42019,
    family: "Moonshine",
    power: 294905033,
  },
  {
    server: 42019,
    family: "DeadGhost",
    power: 288519317,
  },
  {
    server: 42019,
    family: "Lirli",
    power: 263479992,
  },
  {
    server: 42019,
    family: "GRIBOK",
    power: 240966662,
  },
  {
    server: 42020,
    family: "Dreamers",
    power: 1421097935,
  },
  {
    server: 42020,
    family: "Despot",
    power: 1270963931,
  },
  {
    server: 42020,
    family: "GENESIS",
    power: 667354783,
  },
  {
    server: 42020,
    family: "Грибчики",
    power: 538925911,
  },
  {
    server: 42020,
    family: "Лисиськи",
    power: 354382622,
  },
  {
    server: 42020,
    family: "боровики",
    power: 283928065,
  },
  {
    server: 42020,
    family: "БелыйГриБ",
    power: 271082538,
  },
  {
    server: 42020,
    family: "High_Magician",
    power: 263877338,
  },
  {
    server: 42020,
    family: "Wolnik",
    power: 257134040,
  },
  {
    server: 42020,
    family: "Lacoste",
    power: 238416645,
  },
  {
    server: 42021,
    family: "人DOLBIKI人",
    power: 1290609577,
  },
  {
    server: 42021,
    family: "HOSPITAL",
    power: 1238793187,
  },
  {
    server: 42021,
    family: "SolidLegion",
    power: 572259098,
  },
  {
    server: 42021,
    family: "Altroom",
    power: 480645363,
  },
  {
    server: 42021,
    family: "КусьКусьКлан",
    power: 436890505,
  },
  {
    server: 42021,
    family: "KEFIR",
    power: 402632655,
  },
  {
    server: 42021,
    family: "GoldenCat",
    power: 392082375,
  },
  {
    server: 42021,
    family: "Gorillaz",
    power: 325193669,
  },
  {
    server: 42021,
    family: "Enemy",
    power: 298276356,
  },
  {
    server: 42021,
    family: "DERSKAY_WL",
    power: 272322617,
  },
  {
    server: 42022,
    family: "GRIBNICA",
    power: 1338574002,
  },
  {
    server: 42022,
    family: "RedRoze",
    power: 910980628,
  },
  {
    server: 42022,
    family: "ПоКайфу",
    power: 461553024,
  },
  {
    server: 42022,
    family: "Мухоморы",
    power: 378733274,
  },
  {
    server: 42022,
    family: "MOMERIES",
    power: 307000904,
  },
  {
    server: 42022,
    family: "Спирит",
    power: 291875080,
  },
  {
    server: 42022,
    family: "Exfighter",
    power: 270177524,
  },
  {
    server: 42022,
    family: "Кефир",
    power: 264059374,
  },
  {
    server: 42022,
    family: "ДурмаН",
    power: 250862590,
  },
  {
    server: 42022,
    family: "ПруД",
    power: 224105749,
  },
  {
    server: 42023,
    family: "Начало",
    power: 1239964187,
  },
  {
    server: 42023,
    family: "Кайф",
    power: 965977544,
  },
  {
    server: 42023,
    family: "Toxic",
    power: 509278338,
  },
  {
    server: 42023,
    family: "Darth",
    power: 386026510,
  },
  {
    server: 42023,
    family: "SPARTA",
    power: 329422603,
  },
  {
    server: 42023,
    family: "Doflamingo",
    power: 310026647,
  },
  {
    server: 42023,
    family: "Дисгардиум",
    power: 306846850,
  },
  {
    server: 42023,
    family: "BBCS",
    power: 255927304,
  },
  {
    server: 42023,
    family: "Псилоцибиновые",
    power: 253340430,
  },
  {
    server: 42023,
    family: "RedStar",
    power: 195972253,
  },
  {
    server: 42024,
    family: "Империя",
    power: 1251510142,
  },
  {
    server: 42024,
    family: "PAGANKA",
    power: 813449939,
  },
  {
    server: 42024,
    family: "TheFireGem",
    power: 673498852,
  },
  {
    server: 42024,
    family: "Утопия",
    power: 425316490,
  },
  {
    server: 42024,
    family: "Darksiders",
    power: 338164254,
  },
  {
    server: 42024,
    family: "империя",
    power: 331520248,
  },
  {
    server: 42024,
    family: "Ukraine_team",
    power: 254544253,
  },
  {
    server: 42024,
    family: "Liga",
    power: 247338358,
  },
  {
    server: 42024,
    family: "__xxBoSSxx__",
    power: 229415127,
  },
  {
    server: 42024,
    family: "rg180",
    power: 218060516,
  },
  {
    server: 42025,
    family: "Мухоморчики",
    power: 1284513751,
  },
  {
    server: 42025,
    family: "подпивасник",
    power: 880447891,
  },
  {
    server: 42025,
    family: "Regards",
    power: 714157978,
  },
  {
    server: 42025,
    family: "ДеТи_АдА",
    power: 344517522,
  },
  {
    server: 42025,
    family: "Коффеин",
    power: 324654844,
  },
  {
    server: 42025,
    family: "Grib_tim",
    power: 311025309,
  },
  {
    server: 42025,
    family: "Hellheim",
    power: 260060430,
  },
  {
    server: 42025,
    family: "ЗАВОД",
    power: 251819562,
  },
  {
    server: 42025,
    family: "PuPs",
    power: 243216305,
  },
  {
    server: 42025,
    family: "Karuno",
    power: 242734042,
  },
  {
    server: 42026,
    family: "Kingdom",
    power: 1289748071,
  },
  {
    server: 42026,
    family: "SnowTeam",
    power: 839815992,
  },
  {
    server: 42026,
    family: "Хантеры",
    power: 536092950,
  },
  {
    server: 42026,
    family: "ГрибПарк",
    power: 325520434,
  },
  {
    server: 42026,
    family: "UmbrellaCorp",
    power: 322923523,
  },
  {
    server: 42026,
    family: "сила",
    power: 265968995,
  },
  {
    server: 42026,
    family: "EjikGames",
    power: 257261165,
  },
  {
    server: 42026,
    family: "СМУ",
    power: 224880420,
  },
  {
    server: 42026,
    family: "Serendipity",
    power: 205246483,
  },
  {
    server: 42026,
    family: "тулун",
    power: 204208410,
  },
  {
    server: 42027,
    family: "Каноха",
    power: 1181604110,
  },
  {
    server: 42027,
    family: "AKATSUKI",
    power: 483927567,
  },
  {
    server: 42027,
    family: "Leveling",
    power: 432496546,
  },
  {
    server: 42027,
    family: "JUDIK",
    power: 321275382,
  },
  {
    server: 42027,
    family: "ЛëдТьмы",
    power: 305175753,
  },
  {
    server: 42027,
    family: "Malye",
    power: 304275887,
  },
  {
    server: 42027,
    family: "𝕭𝕬𝕷𝕯𝕸𝕬N",
    power: 272109568,
  },
  {
    server: 42027,
    family: "Честь",
    power: 206857011,
  },
  {
    server: 42027,
    family: "Король_и_Шут",
    power: 195800980,
  },
  {
    server: 42027,
    family: "MushroomTeam",
    power: 194629563,
  },
  {
    server: 42028,
    family: "BeaZEDYouTube",
    power: 1174833777,
  },
  {
    server: 42028,
    family: "Лисиськи",
    power: 968280711,
  },
  {
    server: 42028,
    family: "Nightters",
    power: 729115830,
  },
  {
    server: 42028,
    family: "КусьКусьКлан",
    power: 355513165,
  },
  {
    server: 42028,
    family: "Folklèr",
    power: 242278007,
  },
  {
    server: 42028,
    family: "ааааааа",
    power: 231027449,
  },
  {
    server: 42028,
    family: "СусликиЗло",
    power: 178710920,
  },
  {
    server: 42028,
    family: "Грибовня",
    power: 177773739,
  },
  {
    server: 42028,
    family: "LEGION",
    power: 174635593,
  },
  {
    server: 42028,
    family: "FireAndSword",
    power: 168029130,
  },
  {
    server: 42029,
    family: "LimitedEdition",
    power: 1163849027,
  },
  {
    server: 42029,
    family: "Грибнойсуп",
    power: 751119578,
  },
  {
    server: 42029,
    family: "Север",
    power: 595267001,
  },
  {
    server: 42029,
    family: "ᴀʙsᴏʟᴜᴛᴇ",
    power: 333809036,
  },
  {
    server: 42029,
    family: "релакс",
    power: 327070688,
  },
  {
    server: 42029,
    family: "25СМ",
    power: 232075012,
  },
  {
    server: 42029,
    family: "Дединсайдеры",
    power: 227283859,
  },
  {
    server: 42029,
    family: "Спарта",
    power: 223236473,
  },
  {
    server: 42029,
    family: "Outcast",
    power: 222759063,
  },
  {
    server: 42029,
    family: "AniFanDub",
    power: 221764950,
  },
  {
    server: 42030,
    family: "Moonlight",
    power: 1169365942,
  },
  {
    server: 42030,
    family: "Гриберия",
    power: 1059464300,
  },
  {
    server: 42030,
    family: "Вершина",
    power: 371389759,
  },
  {
    server: 42030,
    family: "СССР",
    power: 341875350,
  },
  {
    server: 42030,
    family: "кофейня",
    power: 270742370,
  },
  {
    server: 42030,
    family: "smertniki",
    power: 269563252,
  },
  {
    server: 42030,
    family: "AMAZONKA",
    power: 255619570,
  },
  {
    server: 42030,
    family: "EmeraldFury",
    power: 237587432,
  },
  {
    server: 42030,
    family: "么NatVinser么",
    power: 228904169,
  },
  {
    server: 42030,
    family: "PuPs",
    power: 206570645,
  },
  {
    server: 42031,
    family: "Имбанутые",
    power: 1126341771,
  },
  {
    server: 42031,
    family: "БОРОВИЧКИ",
    power: 910239748,
  },
  {
    server: 42031,
    family: "Дружина",
    power: 559298016,
  },
  {
    server: 42031,
    family: "SHADOWS_SQUD",
    power: 383312031,
  },
  {
    server: 42031,
    family: "CCCP",
    power: 275114112,
  },
  {
    server: 42031,
    family: "Империум",
    power: 260919885,
  },
  {
    server: 42031,
    family: "Поляночка",
    power: 229185955,
  },
  {
    server: 42031,
    family: "FallenStars",
    power: 228610104,
  },
  {
    server: 42031,
    family: "каноха",
    power: 224923134,
  },
  {
    server: 42031,
    family: "Absolute",
    power: 221070418,
  },
  {
    server: 42032,
    family: "TMPower",
    power: 1089243775,
  },
  {
    server: 42032,
    family: "ТОПовые",
    power: 853561468,
  },
  {
    server: 42032,
    family: "Rtims",
    power: 790727479,
  },
  {
    server: 42032,
    family: "ГребницА",
    power: 469061020,
  },
  {
    server: 42032,
    family: "Eternity",
    power: 346826235,
  },
  {
    server: 42032,
    family: "ТАЙФУН",
    power: 271214518,
  },
  {
    server: 42032,
    family: "Банан4ик",
    power: 250218511,
  },
  {
    server: 42032,
    family: "l1488l",
    power: 205464118,
  },
  {
    server: 42032,
    family: "RAVEN",
    power: 187072927,
  },
  {
    server: 42032,
    family: "клан",
    power: 183658889,
  },
  {
    server: 42033,
    family: "ИмбоКварки",
    power: 1029331390,
  },
  {
    server: 42033,
    family: "RedMoon",
    power: 576004871,
  },
  {
    server: 42033,
    family: "FriendlyFire",
    power: 432660882,
  },
  {
    server: 42033,
    family: "ГрибоМаги",
    power: 280725015,
  },
  {
    server: 42033,
    family: "МагическийГриб",
    power: 279829321,
  },
  {
    server: 42033,
    family: "Bonus",
    power: 266596447,
  },
  {
    server: 42033,
    family: "ИмбоКварки_А",
    power: 243755472,
  },
  {
    server: 42033,
    family: "Hellequin",
    power: 242298607,
  },
  {
    server: 42033,
    family: "Феникс",
    power: 228773708,
  },
  {
    server: 42033,
    family: "Хулиганы",
    power: 213313834,
  },
  {
    server: 42034,
    family: "NewAge",
    power: 899150314,
  },
  {
    server: 42034,
    family: "Psychokids",
    power: 854142684,
  },
  {
    server: 42034,
    family: "HentaiAcademy",
    power: 461592771,
  },
  {
    server: 42034,
    family: "Токсики",
    power: 245528691,
  },
  {
    server: 42034,
    family: "Покачерушки",
    power: 221337127,
  },
  {
    server: 42034,
    family: "ZaРусь",
    power: 220498031,
  },
  {
    server: 42034,
    family: "×ВИП×",
    power: 220241667,
  },
  {
    server: 42034,
    family: "DMG",
    power: 195958944,
  },
  {
    server: 42034,
    family: "negr",
    power: 191266657,
  },
  {
    server: 42034,
    family: "варвары",
    power: 189824035,
  },
  {
    server: 42035,
    family: "DragonCastle",
    power: 785552732,
  },
  {
    server: 42035,
    family: "LostParadise",
    power: 682047288,
  },
  {
    server: 42035,
    family: "Россия",
    power: 620204781,
  },
  {
    server: 42035,
    family: "ГрибПати",
    power: 270164150,
  },
  {
    server: 42035,
    family: "AmateurBaking",
    power: 221495338,
  },
  {
    server: 42035,
    family: "DumSpiroSpero",
    power: 202387353,
  },
  {
    server: 42035,
    family: "Империя",
    power: 190325868,
  },
  {
    server: 42035,
    family: "RTK",
    power: 159128455,
  },
  {
    server: 42035,
    family: "Toxic",
    power: 157341317,
  },
  {
    server: 42035,
    family: "Легенды",
    power: 142690833,
  },
  {
    server: 42036,
    family: "Valhalla",
    power: 736214742,
  },
  {
    server: 42036,
    family: "Family",
    power: 589087102,
  },
  {
    server: 42036,
    family: "LegendaryMush",
    power: 372673211,
  },
  {
    server: 42036,
    family: "BIG_BANG",
    power: 189892485,
  },
  {
    server: 42036,
    family: "Блекджек",
    power: 181175584,
  },
  {
    server: 42036,
    family: "Русичи",
    power: 162929335,
  },
  {
    server: 42036,
    family: "ГЛЮКИ",
    power: 156009717,
  },
  {
    server: 42036,
    family: "Phoenix",
    power: 124887196,
  },
  {
    server: 42036,
    family: "blich",
    power: 122813091,
  },
  {
    server: 42036,
    family: "MementoMori",
    power: 122035250,
  },
  {
    server: 42037,
    family: "грибоеды",
    power: 157675692,
  },
  {
    server: 42037,
    family: "Грибники",
    power: 55797949,
  },
  {
    server: 42037,
    family: "Убивашки",
    power: 16818467,
  },
  {
    server: 42037,
    family: "Грибочки",
    power: 12488443,
  },
  {
    server: 42037,
    family: "Легенды",
    power: 10599432,
  },
  {
    server: 42037,
    family: "WesleyTeam",
    power: 9136133,
  },
  {
    server: 42037,
    family: "fEnIkS",
    power: 7330693,
  },
  {
    server: 42037,
    family: "Kingdom",
    power: 7242246,
  },
  {
    server: 42037,
    family: "ebiki",
    power: 6815374,
  },
  {
    server: 42037,
    family: "Goose_Gun",
    power: 5725835,
  },
  {
    server: 42038,
    family: "Gachi",
    power: 314795440,
  },
  {
    server: 42038,
    family: "Arcane",
    power: 263576310,
  },
  {
    server: 42038,
    family: "Грибная_Братва",
    power: 187782670,
  },
  {
    server: 42038,
    family: "Russia",
    power: 16587392,
  },
  {
    server: 42038,
    family: "CHAOS",
    power: 4588301,
  },
  {
    server: 42038,
    family: "Сарычи",
    power: 4259282,
  },
  {
    server: 42038,
    family: "Грибники",
    power: 3950110,
  },
  {
    server: 42038,
    family: "Пираты",
    power: 3827940,
  },
  {
    server: 42038,
    family: "СССР",
    power: 3414358,
  },
  {
    server: 42038,
    family: "Aventeam",
    power: 3139606,
  },
  {
    server: 42039,
    family: "ГрозныйДом",
    power: 404947694,
  },
  {
    server: 42039,
    family: "DragonWorld",
    power: 355459759,
  },
  {
    server: 42039,
    family: "Immortals",
    power: 305394365,
  },
  {
    server: 42039,
    family: "9¾",
    power: 0,
  },
  {
    server: 42039,
    family: "Скитальцы",
    power: 0,
  },
  {
    server: 42039,
    family: "CROW",
    power: 0,
  },
  {
    server: 42039,
    family: "Destrop",
    power: 0,
  },
  {
    server: 42039,
    family: "Makabr",
    power: 0,
  },
  {
    server: 42039,
    family: "ИмпериЯ",
    power: 0,
  },
  {
    server: 42039,
    family: "ТОП",
    power: 0,
  },
]
  .sort((a, b) => b.power - a.power)
  .slice(0, 500);
/* DATA */

const rowsPerPage = 10;
let currentPage = 1;

const rankingTable = document.querySelector("#ranking-table tbody");
const pagination = document.querySelector("#pagination");
const totalCountSpan = document.querySelector("#total-count");

function updateTable(page) {
  if (!rankingTable) return;

  rankingTable.innerHTML = "";
  const start = (page - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const dataToShow = familyPowers.slice(start, end);

  dataToShow.forEach((item, index) => {
    const row = document.createElement("tr");
    row.classList.add(
      "odd:bg-white",
      "odd:dark:bg-gray-900",
      "even:bg-gray-50",
      "even:dark:bg-gray-800"
    );
    row.innerHTML = `
      <td class="py-4 text-center">${start + index + 1}</td>
      <td class="px-4 py-4 text-center">${item.family}</td>
      <td class="px-4 py-4 text-center">${item.server}</td>
      <td class="py-4 text-center">${item.power.toLocaleString("en", {
        maximumFractionDigits: 0,
      })}</td>
    `;
    rankingTable.appendChild(row);
  });

  document.getElementById("page-start").textContent = start + 1;
  document.getElementById("page-end").textContent = Math.min(
    end,
    familyPowers.length
  );
}

function updatePagination() {
  if (!pagination) return;

  const pageButtonClasses = pagination.querySelector("#example")?.classList;
  const elements = pagination.querySelectorAll(".generated-dinamically");
  elements?.forEach((element) => {
    element.remove();
  });
  let pages = [];

  const numPages = Math.ceil(familyPowers.length / rowsPerPage);

  const start = Math.max(1, currentPage - 2);
  const end = Math.min(numPages, currentPage + 2);

  for (let i = start; i <= end; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = "#";
    a.textContent = i;
    a.classList.add(...pageButtonClasses, "generated-dinamically");
    a.classList.remove("hidden");

    a.addEventListener("click", () => {
      currentPage = parseInt(a.textContent);
      updateTable(currentPage);
      updatePagination();
    });

    li.appendChild(a);
    pagination.insertBefore(
      li,
      pagination.children[pagination.children.length - 2]
    );
    pages = [...pages, a];

    updatePageSelected();
  }

  //const prevBtn = pagination.querySelector(".prev a ");
  const firstBtn = pagination.querySelector(".first a");
  //const nextBtn = pagination.querySelector(".next a");
  const lastBtn = pagination.querySelector(".last a");

  /*
  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      updateTable(currentPage);
      updatePageSelected();
    }
  });
  */

  firstBtn.addEventListener("click", () => {
    currentPage = 1;
    updateTable(currentPage);
    updatePagination();
  });

  /*
  nextBtn.addEventListener("click", () => {
    if (currentPage < numPages) {
      currentPage++;
      updateTable(currentPage);
      updatePageSelected();
    }
  });
  */

  lastBtn.addEventListener("click", () => {
    currentPage = numPages;
    updateTable(currentPage);
    updatePagination();
  });

  totalCountSpan.textContent = familyPowers.length;
}

function updatePageSelected() {
  const pageButtons = pagination.querySelectorAll(".generated-dinamically");
  pageButtons.forEach((button) => {
    if (button.textContent === currentPage.toString()) {
      button.classList.add("text-white", "font-semibold");
      button.setAttribute("aria-current", "page");
    } else {
      button.classList.remove("text-white", "font-semibold");
      button.removeAttribute("aria-current");
    }
  });
}

updateTable(currentPage);
updatePagination();
